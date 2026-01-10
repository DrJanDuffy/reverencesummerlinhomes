/**
 * Base MCP Client
 *
 * Provides core functionality for all MCP connectors:
 * - Request handling with retries
 * - Authentication management
 * - Error handling
 * - Connection status tracking
 * - Health checks
 */

import type {
  MCPConnector,
  MCPEndpointConfig,
  MCPRequestOptions,
  MCPResponse,
  ConnectionStatus,
  HealthCheckResult,
  AuthMethod,
} from './types'
import { MCPError } from './types'

export abstract class BaseMCPClient implements MCPConnector {
  protected config: MCPEndpointConfig | null = null
  protected connectionStatus: ConnectionStatus = 'disconnected'
  protected lastHealthCheck: Date | null = null

  abstract readonly id: string
  abstract readonly name: string

  get status(): ConnectionStatus {
    return this.connectionStatus
  }

  /**
   * Initialize the client with endpoint configuration
   */
  async initialize(config: MCPEndpointConfig): Promise<void> {
    if (!config.enabled) {
      throw new MCPError(
        `Endpoint ${config.id} is disabled`,
        undefined,
        config.id
      )
    }

    if (!config.baseUrl) {
      throw new MCPError(
        `Base URL is required for endpoint ${config.id}`,
        undefined,
        config.id
      )
    }

    this.config = config
    this.connectionStatus = 'connecting'

    try {
      // Perform initial connection test
      const health = await this.healthCheck()
      if (health.healthy) {
        this.connectionStatus = 'connected'
      } else {
        this.connectionStatus = 'error'
        throw new MCPError(
          `Health check failed: ${health.error}`,
          undefined,
          config.id
        )
      }
    } catch (error) {
      this.connectionStatus = 'error'
      if (error instanceof MCPError) {
        throw error
      }
      throw new MCPError(
        `Failed to initialize: ${error instanceof Error ? error.message : 'Unknown error'}`,
        undefined,
        config.id,
        error instanceof Error ? error : undefined
      )
    }
  }

  /**
   * Execute a request through the connector
   */
  async request<T = unknown>(
    options: MCPRequestOptions
  ): Promise<MCPResponse<T>> {
    if (!this.config) {
      throw new MCPError(
        'Client not initialized. Call initialize() first.',
        undefined,
        this.id
      )
    }

    if (this.connectionStatus === 'error') {
      // Attempt to reconnect
      await this.reconnect()
    }

    const startTime = Date.now()
    const maxRetries = options.retry !== false ? this.config.maxRetries || 3 : 0
    let lastError: Error | undefined

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await this.executeRequest<T>(options)
        const duration = Date.now() - startTime

        // Update connection status on success
        if (this.connectionStatus !== 'connected') {
          this.connectionStatus = 'connected'
        }

        return {
          ...response,
          metadata: {
            ...response.metadata,
            duration,
            retries: attempt,
          },
        }
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error))

        // Don't retry on 4xx errors (client errors)
        if (
          error instanceof MCPError &&
          error.statusCode &&
          error.statusCode >= 400 &&
          error.statusCode < 500
        ) {
          throw error
        }

        // If this isn't the last attempt, wait before retrying
        if (attempt < maxRetries) {
          const delay = (this.config.retryDelay || 1000) * (attempt + 1)
          await this.sleep(delay)
        }
      }
    }

    // All retries exhausted
    this.connectionStatus = 'error'
    throw new MCPError(
      `Request failed after ${maxRetries + 1} attempts: ${lastError?.message}`,
      undefined,
      this.id,
      lastError
    )
  }

  /**
   * Execute the actual HTTP request
   * Must be implemented by subclasses
   */
  protected abstract executeRequest<T>(
    options: MCPRequestOptions
  ): Promise<MCPResponse<T>>

  /**
   * Build request headers with authentication
   */
  protected buildHeaders(
    customHeaders?: Record<string, string>
  ): Record<string, string> {
    if (!this.config) {
      return customHeaders || {}
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...customHeaders,
    }

    // Add authentication headers
    const authHeaders = this.getAuthHeaders(
      this.config.authMethod,
      this.config.credentials
    )
    Object.assign(headers, authHeaders)

    return headers
  }

  /**
   * Get authentication headers based on auth method
   */
  protected getAuthHeaders(
    authMethod: AuthMethod,
    credentials: MCPEndpointConfig['credentials']
  ): Record<string, string> {
    const headers: Record<string, string> = {}

    switch (authMethod) {
      case 'bearer_token':
        if (credentials.bearerToken) {
          headers['Authorization'] = `Bearer ${credentials.bearerToken}`
        }
        break

      case 'api_key':
        // API key can be in header or query param - default to header
        if (credentials.apiKey) {
          headers['X-API-Key'] = credentials.apiKey
        }
        break

      case 'basic_auth':
        if (credentials.username && credentials.password) {
          const encoded = Buffer.from(
            `${credentials.username}:${credentials.password}`
          ).toString('base64')
          headers['Authorization'] = `Basic ${encoded}`
        }
        break

      case 'custom_headers':
        if (credentials.customHeaders) {
          Object.assign(headers, credentials.customHeaders)
        }
        break

      case 'none':
      default:
        // No authentication required
        break
    }

    return headers
  }

  /**
   * Build full request URL
   */
  protected buildUrl(path: string, query?: MCPRequestOptions['query']): string {
    if (!this.config) {
      throw new MCPError('Client not initialized', undefined, this.id)
    }

    let url = `${this.config.baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

    if (query && Object.keys(query).length > 0) {
      const params = new URLSearchParams()
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          params.append(key, String(value))
        }
      }
      const queryString = params.toString()
      if (queryString) {
        url += `?${queryString}`
      }
    }

    return url
  }

  /**
   * Health check - test the connection
   */
  async healthCheck(): Promise<HealthCheckResult> {
    if (!this.config) {
      return {
        endpointId: this.id,
        status: 'disconnected',
        healthy: false,
        error: 'Client not initialized',
        lastChecked: new Date(),
      }
    }

    const startTime = Date.now()

    try {
      // Default health check - attempt a lightweight request
      // Subclasses can override for provider-specific checks
      const healthPath = this.getHealthCheckPath()

      if (healthPath) {
        await this.executeRequest({
          method: 'GET',
          path: healthPath,
          retry: false,
        })
      }

      const latency = Date.now() - startTime
      this.lastHealthCheck = new Date()
      this.connectionStatus = 'connected'

      return {
        endpointId: this.id,
        status: 'connected',
        healthy: true,
        latency,
        lastChecked: this.lastHealthCheck,
      }
    } catch (error) {
      const latency = Date.now() - startTime
      this.lastHealthCheck = new Date()
      this.connectionStatus = 'error'

      return {
        endpointId: this.id,
        status: 'error',
        healthy: false,
        latency,
        error: error instanceof Error ? error.message : 'Health check failed',
        lastChecked: this.lastHealthCheck,
      }
    }
  }

  /**
   * Get the health check endpoint path
   * Override in subclasses for provider-specific paths
   */
  protected getHealthCheckPath(): string | null {
    // Default: no health check endpoint
    // Subclasses can override
    return null
  }

  /**
   * Attempt to reconnect
   */
  protected async reconnect(): Promise<void> {
    if (!this.config) {
      return
    }

    this.connectionStatus = 'reconnecting'
    try {
      const health = await this.healthCheck()
      if (health.healthy) {
        this.connectionStatus = 'connected'
      } else {
        this.connectionStatus = 'error'
      }
    } catch {
      this.connectionStatus = 'error'
    }
  }

  /**
   * Disconnect and cleanup
   */
  async disconnect(): Promise<void> {
    this.connectionStatus = 'disconnected'
    this.config = null
    this.lastHealthCheck = null
  }

  /**
   * Utility: Sleep for specified milliseconds
   */
  protected sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
