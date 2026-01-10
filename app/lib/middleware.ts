/**
 * Request Middleware Utilities
 * 
 * Provides middleware functions for logging and tracking requests
 * across the application. Integrates with the provenance tracking system.
 */

import { logger, createProvenanceContext, extractIP } from './logging';
import type { Route } from 'react-router';

/**
 * Request logging middleware wrapper
 * Automatically logs all route handler requests with full provenance
 */
export function withLogging<T extends Route.ActionArgs | Route.LoaderArgs>(
  handler: (args: T) => Promise<unknown> | unknown
) {
  return async (args: T) => {
    const { request } = args;
    const context = createProvenanceContext(request);
    const startTime = Date.now();
    
    // Log request start
    logger.info(`Request started: ${request.method} ${context.route}`, {
      operationId: context.operationId,
      method: request.method,
      route: context.route,
      userAgent: context.userAgent,
      ipHash: context.ipHash,
    });
    
    try {
      const result = await handler(args);
      const duration = Date.now() - startTime;
      
      // Log successful request
      logger.info(`Request completed: ${request.method} ${context.route}`, {
        operationId: context.operationId,
        method: request.method,
        route: context.route,
        duration: `${duration}ms`,
        status: 'success',
      });
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      // Log failed request
      logger.error(
        `Request failed: ${request.method} ${context.route}`,
        error instanceof Error ? error : new Error(String(error)),
        {
          operationId: context.operationId,
          method: request.method,
          route: context.route,
          duration: `${duration}ms`,
          status: 'error',
        }
      );
      
      throw error;
    }
  };
}

/**
 * Performance monitoring middleware
 * Tracks request performance and logs slow requests
 */
export function withPerformanceMonitoring<T extends Route.ActionArgs | Route.LoaderArgs>(
  handler: (args: T) => Promise<unknown> | unknown,
  options?: {
    slowThreshold?: number; // milliseconds
    route?: string;
  }
) {
  return async (args: T) => {
    const { request } = args;
    const context = createProvenanceContext(request);
    const startTime = Date.now();
    const slowThreshold = options?.slowThreshold || 1000; // 1 second default
    
    try {
      const result = await handler(args);
      const duration = Date.now() - startTime;
      
      if (duration > slowThreshold) {
        logger.warn(`Slow request detected: ${request.method} ${context.route}`, {
          operationId: context.operationId,
          method: request.method,
          route: context.route || options?.route,
          duration: `${duration}ms`,
          threshold: `${slowThreshold}ms`,
        });
      }
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      
      logger.error(
        `Request error: ${request.method} ${context.route}`,
        error instanceof Error ? error : new Error(String(error)),
        {
          operationId: context.operationId,
          method: request.method,
          route: context.route || options?.route,
          duration: `${duration}ms`,
        }
      );
      
      throw error;
    }
  };
}

/**
 * Rate limiting check helper
 * Can be extended to integrate with actual rate limiting service
 */
export function checkRateLimit(
  request: Request,
  options?: {
    maxRequests?: number;
    windowMs?: number;
  }
): { allowed: boolean; remaining?: number; reset?: Date } {
  // In production, integrate with Redis or similar for distributed rate limiting
  // For now, this is a placeholder that always allows requests
  // but logs rate limit checks for monitoring
  
  const context = createProvenanceContext(request);
  
  logger.debug('Rate limit check', {
    operationId: context.operationId,
    route: context.route,
    ipHash: context.ipHash,
  });
  
  // TODO: Implement actual rate limiting logic
  // Example: Check Redis for request count per IP
  
  return {
    allowed: true,
    remaining: options?.maxRequests || 100,
    reset: new Date(Date.now() + (options?.windowMs || 60000)),
  };
}

/**
 * Error handling wrapper
 * Catches and formats errors with proper logging
 */
export function withErrorHandling<T extends Route.ActionArgs | Route.LoaderArgs>(
  handler: (args: T) => Promise<unknown> | unknown
) {
  return async (args: T) => {
    try {
      return await handler(args);
    } catch (error) {
      const { request } = args;
      const context = createProvenanceContext(request);
      
      // Log error with full context
      logger.error(
        `Handler error: ${request.method} ${context.route}`,
        error instanceof Error ? error : new Error(String(error)),
        {
          operationId: context.operationId,
          method: request.method,
          route: context.route,
        }
      );
      
      // Return user-friendly error response
      if (error instanceof Error) {
        return {
          error: true,
          message: process.env.NODE_ENV === 'production' 
            ? 'An error occurred. Please try again later.'
            : error.message,
        };
      }
      
      throw error;
    }
  };
}

/**
 * Combined middleware: logging + performance + error handling
 */
export function withMiddleware<T extends Route.ActionArgs | Route.LoaderArgs>(
  handler: (args: T) => Promise<unknown> | unknown,
  options?: {
    enableLogging?: boolean;
    enablePerformanceMonitoring?: boolean;
    enableErrorHandling?: boolean;
    slowThreshold?: number;
    route?: string;
  }
) {
  let wrappedHandler = handler;
  
  if (options?.enableErrorHandling !== false) {
    wrappedHandler = withErrorHandling(wrappedHandler);
  }
  
  if (options?.enablePerformanceMonitoring !== false) {
    wrappedHandler = withPerformanceMonitoring(wrappedHandler, {
      slowThreshold: options?.slowThreshold,
      route: options?.route,
    });
  }
  
  if (options?.enableLogging !== false) {
    wrappedHandler = withLogging(wrappedHandler);
  }
  
  return wrappedHandler;
}
