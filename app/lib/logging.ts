/**
 * Comprehensive Logging & Provenance Tracking System
 *
 * Implements 'Providence Tracking' for AI-driven features to ensure they are
 * 'governable and reliable' as per 2026 outlook requirements.
 *
 * Tracks:
 * - AI feature usage
 * - Token consumption (cost-per-token efficiency)
 * - Request/response provenance
 * - Performance metrics
 * - Error tracking with full context
 */

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal'

export type AIFeatureType =
  | 'valuation_calculation'
  | 'market_analysis'
  | 'property_recommendation'
  | 'content_generation'
  | 'form_processing'
  | 'search_optimization'
  | 'lead_scoring'
  | 'unknown'

export interface ProvenanceContext {
  /** Unique identifier for this operation */
  operationId: string
  /** Timestamp when operation started */
  startedAt: Date
  /** User/request identifier */
  requestId?: string
  /** Session identifier */
  sessionId?: string
  /** User agent string */
  userAgent?: string
  /** IP address (hashed for privacy) */
  ipHash?: string
  /** Route/endpoint path */
  route?: string
  /** HTTP method */
  method?: string
}

export interface AIFeatureLog {
  /** Type of AI feature being used */
  featureType: AIFeatureType
  /** Provenance context */
  context: ProvenanceContext
  /** Input data (sanitized - no PII) */
  input: Record<string, unknown>
  /** Output data (sanitized - no PII) */
  output?: Record<string, unknown>
  /** Token usage if applicable */
  tokenUsage?: {
    prompt: number
    completion: number
    total: number
    model?: string
    cost?: number // in USD
  }
  /** Performance metrics */
  performance: {
    /** Duration in milliseconds */
    duration: number
    /** Memory usage in MB (if available) */
    memoryUsage?: number
    /** Cache hit/miss */
    cacheHit?: boolean
  }
  /** Success or failure */
  success: boolean
  /** Error details if failed */
  error?: {
    message: string
    code?: string
    stack?: string
    cause?: unknown
  }
  /** Additional metadata */
  metadata?: Record<string, unknown>
}

export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: Date
  context?: Record<string, unknown>
  provenance?: ProvenanceContext
  aiFeature?: AIFeatureLog
}

/**
 * Generate unique operation ID
 */
export function generateOperationId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
}

/**
 * Hash IP address for privacy (simple hash for logging purposes)
 */
export function hashIP(ip: string): string {
  // Simple hash function - in production, use crypto.createHash
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16)
}

/**
 * Extract IP from request
 */
export function extractIP(request: Request): string | undefined {
  // Check various headers for IP (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  const realIP = request.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }

  const cfIP = request.headers.get('cf-connecting-ip')
  if (cfIP) {
    return cfIP
  }

  return undefined
}

/**
 * Create provenance context from request
 */
export function createProvenanceContext(
  request: Request,
  operationId?: string
): ProvenanceContext {
  const url = new URL(request.url)
  const ip = extractIP(request)

  return {
    operationId: operationId || generateOperationId(),
    startedAt: new Date(),
    route: url.pathname,
    method: request.method,
    userAgent: request.headers.get('user-agent') || undefined,
    ipHash: ip ? hashIP(ip) : undefined,
    requestId: request.headers.get('x-request-id') || undefined,
    sessionId: request.headers.get('x-session-id') || undefined,
  }
}

/**
 * Sanitize data to remove PII before logging
 */
export function sanitizeData(data: unknown): unknown {
  if (data === null || data === undefined) {
    return data
  }

  if (typeof data !== 'object') {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(sanitizeData)
  }

  const sanitized: Record<string, unknown> = {}
  const piiFields = [
    'email',
    'phone',
    'ssn',
    'creditCard',
    'password',
    'ownerName',
    'name',
    'address',
    'city',
  ]

  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase()
    if (piiFields.some(field => lowerKey.includes(field))) {
      // Replace with masked version
      if (typeof value === 'string') {
        sanitized[key] =
          value.length > 4
            ? `${value.substring(0, 2)}***${value.substring(value.length - 2)}`
            : '***'
      } else {
        sanitized[key] = '***'
      }
    } else {
      sanitized[key] = sanitizeData(value)
    }
  }

  return sanitized
}

/**
 * Logger class for structured logging
 */
class Logger {
  private logs: LogEntry[] = []
  private maxLogs = 1000 // In-memory buffer limit

  /**
   * Log an entry
   */
  private log(entry: LogEntry): void {
    // Add to in-memory buffer
    this.logs.push(entry)
    if (this.logs.length > this.maxLogs) {
      this.logs.shift() // Remove oldest
    }

    // In production, send to external service
    if (
      typeof process !== 'undefined' &&
      process.env.NODE_ENV === 'production'
    ) {
      this.sendToExternalService(entry)
    } else {
      // Development: console output
      this.consoleOutput(entry)
    }
  }

  /**
   * Console output for development
   */
  private consoleOutput(entry: LogEntry): void {
    const emoji = {
      debug: '🔍',
      info: 'ℹ️',
      warn: '⚠️',
      error: '❌',
      fatal: '💥',
    }[entry.level]

    const prefix = `[${entry.timestamp.toISOString()}] ${emoji} [${entry.level.toUpperCase()}]`

    if (entry.aiFeature) {
      const ai = entry.aiFeature
      // Use console methods based on log level for proper formatting
      const logMethod =
        entry.level === 'error' || entry.level === 'fatal'
          ? console.error
          : entry.level === 'warn'
            ? console.warn
            : console.info || console.log
      logMethod(`${prefix} ${entry.message}`, {
        feature: ai.featureType,
        operationId: ai.context.operationId,
        duration: `${ai.performance.duration}ms`,
        tokens: ai.tokenUsage?.total || 'N/A',
        success: ai.success,
      })
    } else {
      // Use console methods based on log level
      const logMethod =
        entry.level === 'error' || entry.level === 'fatal'
          ? console.error
          : entry.level === 'warn'
            ? console.warn
            : console.info || console.log
      logMethod(`${prefix} ${entry.message}`, entry.context || {})
    }
  }

  /**
   * Send to external logging service (implement based on your needs)
   */
  private async sendToExternalService(entry: LogEntry): Promise<void> {
    try {
      // Example: Send to Vercel Analytics, LogTail, Datadog, etc.
      // For now, we'll use structured logging that can be collected
      if (typeof fetch !== 'undefined') {
        // In server environment, you could send to an API endpoint
        // await fetch('/api/logs', { method: 'POST', body: JSON.stringify(entry) });
      }
    } catch (error) {
      // Fail silently - don't break the app if logging fails
      console.error('Failed to send log to external service:', error)
    }
  }

  /**
   * Track AI feature usage with full provenance
   */
  async trackAIFeature<T>(
    featureType: AIFeatureType,
    context: ProvenanceContext,
    operation: () => Promise<T>,
    options?: {
      input?: Record<string, unknown>
      metadata?: Record<string, unknown>
      tokenTracker?: (result: T) => Promise<{
        prompt: number
        completion: number
        model?: string
        cost?: number
      }>
    }
  ): Promise<T> {
    const startTime = Date.now()
    const startMemory = this.getMemoryUsage()

    try {
      const result = await operation()
      const duration = Date.now() - startTime
      const endMemory = this.getMemoryUsage()

      // Track token usage if tracker provided
      let tokenUsage
      if (options?.tokenTracker) {
        try {
          const tokens = await options.tokenTracker(result)
          tokenUsage = {
            ...tokens,
            total: tokens.prompt + tokens.completion,
          }
        } catch (error) {
          // Token tracking failed, but don't fail the operation
          console.warn('Token tracking failed:', error)
        }
      }

      const log: AIFeatureLog = {
        featureType,
        context,
        input: sanitizeData(options?.input || {}) as Record<string, unknown>,
        output: sanitizeData(result) as Record<string, unknown>,
        tokenUsage,
        performance: {
          duration,
          memoryUsage: endMemory ? endMemory - (startMemory || 0) : undefined,
          cacheHit: false, // Could be enhanced with cache detection
        },
        success: true,
        metadata: options?.metadata,
      }

      this.log({
        level: 'info',
        message: `AI Feature: ${featureType}`,
        timestamp: new Date(),
        aiFeature: log,
        provenance: context,
      })

      return result
    } catch (error) {
      const duration = Date.now() - startTime

      const log: AIFeatureLog = {
        featureType,
        context,
        input: sanitizeData(options?.input || {}) as Record<string, unknown>,
        performance: {
          duration,
        },
        success: false,
        error: {
          message: error instanceof Error ? error.message : 'Unknown error',
          code:
            error instanceof Error && 'code' in error
              ? String(error.code)
              : undefined,
          stack: error instanceof Error ? error.stack : undefined,
          cause: error,
        },
        metadata: options?.metadata,
      }

      this.log({
        level: 'error',
        message: `AI Feature Failed: ${featureType}`,
        timestamp: new Date(),
        aiFeature: log,
        provenance: context,
      })

      throw error
    }
  }

  /**
   * Get memory usage if available
   */
  private getMemoryUsage(): number | undefined {
    if (typeof process !== 'undefined' && process.memoryUsage) {
      const usage = process.memoryUsage()
      return Math.round(usage.heapUsed / 1024 / 1024) // MB
    }
    return undefined
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'debug', message, timestamp: new Date(), context })
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'info', message, timestamp: new Date(), context })
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log({ level: 'warn', message, timestamp: new Date(), context })
  }

  error(
    message: string,
    error?: Error | unknown,
    context?: Record<string, unknown>
  ): void {
    const logEntry: LogEntry = {
      level: 'error',
      message,
      timestamp: new Date(),
      context: {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      },
    }
    this.log(logEntry)
  }

  fatal(
    message: string,
    error?: Error | unknown,
    context?: Record<string, unknown>
  ): void {
    const logEntry: LogEntry = {
      level: 'fatal',
      message,
      timestamp: new Date(),
      context: {
        ...context,
        error:
          error instanceof Error
            ? {
                message: error.message,
                stack: error.stack,
                name: error.name,
              }
            : error,
      },
    }
    this.log(logEntry)
  }

  /**
   * Get recent logs (for debugging/monitoring)
   */
  getRecentLogs(limit = 100): LogEntry[] {
    return this.logs.slice(-limit)
  }

  /**
   * Get AI feature logs
   */
  getAIFeatureLogs(limit = 100): AIFeatureLog[] {
    return this.logs
      .filter(entry => entry.aiFeature)
      .map(entry => entry.aiFeature!)
      .slice(-limit)
  }

  /**
   * Get token usage summary
   */
  getTokenUsageSummary(): {
    totalTokens: number
    totalCost: number
    byFeature: Record<string, { tokens: number; cost: number }>
  } {
    const aiLogs = this.getAIFeatureLogs()

    const summary = {
      totalTokens: 0,
      totalCost: 0,
      byFeature: {} as Record<string, { tokens: number; cost: number }>,
    }

    for (const log of aiLogs) {
      if (log.tokenUsage) {
        summary.totalTokens += log.tokenUsage.total
        if (log.tokenUsage.cost) {
          summary.totalCost += log.tokenUsage.cost
        }

        const feature = log.featureType
        if (!summary.byFeature[feature]) {
          summary.byFeature[feature] = { tokens: 0, cost: 0 }
        }
        summary.byFeature[feature].tokens += log.tokenUsage.total
        if (log.tokenUsage.cost) {
          summary.byFeature[feature].cost += log.tokenUsage.cost
        }
      }
    }

    return summary
  }
}

// Singleton instance
export const logger = new Logger()

/**
 * Helper to track AI feature with automatic context creation
 */
export async function trackAIFeature<T>(
  featureType: AIFeatureType,
  request: Request,
  operation: () => Promise<T>,
  options?: Parameters<typeof logger.trackAIFeature<T>>[2]
): Promise<T> {
  const context = createProvenanceContext(request)
  return logger.trackAIFeature(featureType, context, operation, options)
}
