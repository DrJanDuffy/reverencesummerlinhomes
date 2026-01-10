/**
 * Model Context Protocol (MCP) - Type Definitions
 *
 * Standardized types for managing external tool connections
 * (databases, APIs, third-party services)
 */

/**
 * Connection status for an MCP endpoint
 */
export type ConnectionStatus =
  | 'disconnected'
  | 'connecting'
  | 'connected'
  | 'error'
  | 'reconnecting'

/**
 * Authentication method for MCP connections
 */
export type AuthMethod =
  | 'api_key'
  | 'bearer_token'
  | 'oauth2'
  | 'basic_auth'
  | 'custom_headers'
  | 'none'

/**
 * MCP Endpoint Configuration
 * Defines how to connect to an external service
 */
export interface MCPEndpointConfig {
  /** Unique identifier for this endpoint */
  id: string

  /** Human-readable name */
  name: string

  /** Service provider name (e.g., "RealScout", "Follow Up Boss") */
  provider: string

  /** Base URL for API endpoints */
  baseUrl: string

  /** Authentication method */
  authMethod: AuthMethod

  /** Authentication credentials (encrypted/stored securely) */
  credentials: {
    apiKey?: string
    bearerToken?: string
    username?: string
    password?: string
    clientId?: string
    clientSecret?: string
    customHeaders?: Record<string, string>
  }

  /** Timeout in milliseconds (default: 30000) */
  timeout?: number

  /** Maximum retry attempts (default: 3) */
  maxRetries?: number

  /** Retry delay in milliseconds (default: 1000) */
  retryDelay?: number

  /** Additional configuration specific to the provider */
  providerConfig?: Record<string, unknown>

  /** Whether this endpoint is enabled */
  enabled?: boolean

  /** Environment where this endpoint is active */
  environment?: 'development' | 'staging' | 'production'
}

/**
 * MCP Request Options
 */
export interface MCPRequestOptions {
  /** HTTP method */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

  /** Request path (appended to baseUrl) */
  path: string

  /** Query parameters */
  query?: Record<string, string | number | boolean>

  /** Request body */
  body?: unknown

  /** Custom headers */
  headers?: Record<string, string>

  /** Request timeout override */
  timeout?: number

  /** Whether to retry on failure */
  retry?: boolean

  /** Response cache TTL in seconds */
  cacheTtl?: number
}

/**
 * MCP Response Wrapper
 */
export interface MCPResponse<T = unknown> {
  /** Response data */
  data: T

  /** HTTP status code */
  status: number

  /** Response headers */
  headers: Record<string, string>

  /** Whether request was successful */
  success: boolean

  /** Error message if request failed */
  error?: string

  /** Request metadata */
  metadata?: {
    requestId?: string
    duration?: number
    cached?: boolean
    retries?: number
  }
}

/**
 * MCP Error
 */
export class MCPError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly endpointId?: string,
    public readonly originalError?: Error
  ) {
    super(message)
    this.name = 'MCPError'
  }
}

/**
 * Connection Health Check Result
 */
export interface HealthCheckResult {
  endpointId: string
  status: ConnectionStatus
  healthy: boolean
  latency?: number
  error?: string
  lastChecked: Date
  metadata?: Record<string, unknown>
}

/**
 * MCP Connector Interface
 * All specific connectors must implement this interface
 */
export interface MCPConnector {
  /** Unique connector identifier */
  readonly id: string

  /** Connector name */
  readonly name: string

  /** Current connection status */
  readonly status: ConnectionStatus

  /**
   * Initialize the connector with endpoint configuration
   */
  initialize(config: MCPEndpointConfig): Promise<void>

  /**
   * Execute a request through the connector
   */
  request<T = unknown>(options: MCPRequestOptions): Promise<MCPResponse<T>>

  /**
   * Test the connection
   */
  healthCheck(): Promise<HealthCheckResult>

  /**
   * Disconnect and cleanup
   */
  disconnect(): Promise<void>
}
