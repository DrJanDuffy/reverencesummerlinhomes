/**
 * HTTP MCP Client
 * 
 * Generic HTTP client implementation for REST APIs
 * Can be used directly or extended for specific providers
 */

import { BaseMCPClient } from "../client";
import type {
  MCPRequestOptions,
  MCPResponse,
  MCPEndpointConfig,
} from "../types";
import { MCPError } from "../types";

export class HTTPMCPClient extends BaseMCPClient {
  readonly id = "http";
  readonly name = "HTTP Client";

  /**
   * Execute HTTP request
   */
  protected async executeRequest<T>(
    options: MCPRequestOptions
  ): Promise<MCPResponse<T>> {
    if (!this.config) {
      throw new MCPError("Client not initialized", undefined, this.id);
    }

    const method = options.method || "GET";
    const url = this.buildUrl(options.path, options.query);
    const headers = this.buildHeaders(options.headers);
    const timeout = options.timeout || this.config.timeout || 30000;

    // Build fetch options
    const fetchOptions: RequestInit = {
      method,
      headers,
      signal: AbortSignal.timeout(timeout),
    };

    // Add body for non-GET requests
    if (method !== "GET" && method !== "HEAD" && options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, fetchOptions);
      
      // Extract response headers
      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      // Parse response body
      let data: T;
      const contentType = response.headers.get("content-type");
      
      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else if (contentType?.includes("text/")) {
        data = (await response.text()) as unknown as T;
      } else {
        data = (await response.arrayBuffer()) as unknown as T;
      }

      // Check if response is successful
      if (!response.ok) {
        throw new MCPError(
          `Request failed: ${response.statusText}`,
          response.status,
          this.id
        );
      }

      return {
        data,
        status: response.status,
        headers: responseHeaders,
        success: true,
        metadata: {
          requestId: responseHeaders["x-request-id"],
        },
      };
    } catch (error) {
      if (error instanceof MCPError) {
        throw error;
      }

      // Handle fetch errors (network, timeout, etc.)
      if (error instanceof Error) {
        if (error.name === "AbortError" || error.message.includes("timeout")) {
          throw new MCPError(
            `Request timeout after ${timeout}ms`,
            408,
            this.id,
            error
          );
        }

        if (error.message.includes("fetch")) {
          throw new MCPError(
            `Network error: ${error.message}`,
            0,
            this.id,
            error
          );
        }
      }

      throw new MCPError(
        `Request failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        undefined,
        this.id,
        error instanceof Error ? error : undefined
      );
    }
  }
}
