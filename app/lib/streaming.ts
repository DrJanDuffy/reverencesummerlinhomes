/**
 * Streaming & Deferred Loading Utilities
 *
 * Implements React Router v7 streaming and deferred loading patterns
 * similar to Next.js Partial Prerendering (PPR) for high-demand scenarios
 * and cost-per-token efficiency.
 *
 * Key concepts:
 * - Defer non-critical data to improve initial page load
 * - Stream responses to send HTML immediately
 * - Use Suspense boundaries to show loading states
 */

import { defer } from 'react-router'
import type { TypedDeferredData } from 'react-router'
import { logger } from './logging'

/**
 * Wrapper for defer() with logging
 */
export function createDeferred<T extends Record<string, unknown>>(
  data: T,
  options?: { route?: string }
): TypedDeferredData<T> {
  const deferred = defer(data)

  // Log deferred data creation for monitoring
  if (options?.route) {
    logger.debug(`Created deferred data for route: ${options.route}`, {
      keys: Object.keys(data),
      route: options.route,
    })
  }

  return deferred
}

/**
 * Create a promise that resolves after a delay (for simulating async operations)
 * Useful for deferred loaders that need time to fetch data
 */
export function delay<T>(ms: number, value?: T): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(value as T), ms))
}

/**
 * Wrap an async operation with streaming support
 * Returns both the result and a promise that resolves when complete
 */
export async function streamAsync<T>(
  operation: () => Promise<T>,
  options?: {
    route?: string
    operationId?: string
  }
): Promise<{ data: T; promise: Promise<T> }> {
  const startTime = Date.now()
  const promise = operation()

  // Log streaming start
  if (options?.route) {
    logger.debug(`Streaming operation started: ${options.route}`, {
      operationId: options.operationId,
      route: options.route,
    })
  }

  // Return promise that tracks completion
  const trackedPromise = promise.then(result => {
    const duration = Date.now() - startTime
    if (options?.route) {
      logger.debug(`Streaming operation completed: ${options.route}`, {
        operationId: options.operationId,
        duration: `${duration}ms`,
        route: options.route,
      })
    }
    return result
  })

  // For React Router, we return the promise directly in defer()
  // This allows the framework to stream it
  return { data: await promise, promise: trackedPromise }
}

/**
 * Create a deferred loader that streams critical data immediately
 * and defers non-critical data
 */
export function createStreamingLoader<
  TCritical extends Record<string, unknown>,
  TDeferred extends Record<string, unknown>,
>(
  critical: () => Promise<TCritical>,
  deferred: () => Promise<TDeferred>,
  options?: { route?: string }
): () => Promise<TypedDeferredData<TCritical & TDeferred>> {
  return async () => {
    const route = options?.route || 'unknown'

    // Start both operations in parallel
    const criticalPromise = critical()
    const deferredPromise = deferred()

    // Wait for critical data (blocks initial render)
    const criticalData = await criticalPromise

    // Defer non-critical data (streams after initial render)
    const deferredData = {
      ...criticalData,
      ...Object.fromEntries(
        Object.entries(await deferredPromise).map(([key, value]) => [
          key,
          Promise.resolve(value), // Wrap in promise for defer
        ])
      ),
    } as TCritical & TDeferred

    logger.debug(`Streaming loader created for route: ${route}`, {
      route,
      criticalKeys: Object.keys(criticalData),
      deferredKeys: Object.keys(await deferredPromise),
    })

    return defer(deferredData as any)
  }
}

/**
 * Helper to mark data as deferred in a loader
 * Use this to wrap promises that should be streamed
 */
export function deferred<T>(value: T | Promise<T>): Promise<T> {
  return Promise.resolve(value)
}

/**
 * Error boundary for deferred promises
 * Catches errors in deferred data and logs them
 */
export function handleDeferredError(
  error: unknown,
  context?: { route?: string; operationId?: string }
): { error: string; message: string } {
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'
  const errorStack = error instanceof Error ? error.stack : undefined

  logger.error(
    'Deferred data error',
    error instanceof Error ? error : new Error(String(error)),
    {
      route: context?.route,
      operationId: context?.operationId,
      errorMessage,
      errorStack,
    }
  )

  return {
    error: 'Failed to load data',
    message: errorMessage,
  }
}
