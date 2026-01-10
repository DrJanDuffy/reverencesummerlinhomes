/**
 * RealScout MCP Connector
 *
 * Manages connections to RealScout listing services
 * Handles widget embedding and API interactions
 */

import { HTTPMCPClient } from './http-client'
import type {
  MCPRequestOptions,
  MCPResponse,
  HealthCheckResult,
} from '../types'

export interface RealScoutListingsOptions {
  /** Agent encoded ID */
  agentEncodedId?: string

  /** Sort order */
  sortOrder?:
    | 'NEWEST'
    | 'PRICE_LOW_TO_HIGH'
    | 'PRICE_HIGH_TO_LOW'
    | 'SQUARE_FEET'
    | 'BEDS'
    | 'BATHS'

  /** Listing status filter */
  listingStatus?: string

  /** Property types filter (comma-separated, e.g., ",SFR") */
  propertyTypes?: string

  /** Minimum price */
  priceMin?: number

  /** Maximum price */
  priceMax?: number
}

export interface RealScoutListing {
  id: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  status: string
  propertyType: string
  images: string[]
  mlsNumber?: string
  description?: string
}

export class RealScoutConnector extends HTTPMCPClient {
  readonly id = 'realscout'
  readonly name = 'RealScout Connector'

  /**
   * Get agent encoded ID from config
   */
  private getAgentEncodedId(): string {
    const config = this.config?.providerConfig as
      | { agentEncodedId?: string }
      | undefined
    return (
      config?.agentEncodedId ||
      process.env.MCP_REALSCOUT_AGENT_ID ||
      'QWdlbnQtMjI1MDUw'
    )
  }

  /**
   * Get widget script URL
   */
  getWidgetScriptUrl(): string {
    const config = this.config?.providerConfig as
      | { widgetScriptUrl?: string }
      | undefined
    return (
      config?.widgetScriptUrl ||
      'https://em.realscout.com/widgets/realscout-web-components.umd.js'
    )
  }

  /**
   * Build widget attributes for embedding
   */
  buildWidgetAttributes(
    options: RealScoutListingsOptions = {}
  ): Record<string, string> {
    const agentId = options.agentEncodedId || this.getAgentEncodedId()

    const attrs: Record<string, string> = {
      'agent-encoded-id': agentId,
    }

    if (options.sortOrder) {
      attrs['sort-order'] = options.sortOrder
    }

    if (options.listingStatus) {
      attrs['listing-status'] = options.listingStatus
    }

    if (options.propertyTypes) {
      attrs['property-types'] = options.propertyTypes
    }

    if (options.priceMin !== undefined) {
      attrs['price-min'] = String(options.priceMin)
    }

    if (options.priceMax !== undefined) {
      attrs['price-max'] = String(options.priceMax)
    }

    return attrs
  }

  /**
   * Generate widget HTML element string
   */
  generateWidgetHTML(options: RealScoutListingsOptions = {}): string {
    const attrs = this.buildWidgetAttributes(options)
    const attrsString = Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')

    return `<realscout-office-listings ${attrsString}></realscout-office-listings>`
  }

  /**
   * Fetch listings via API (if RealScout provides REST API)
   * Note: RealScout primarily uses widget embedding, but this method
   * provides structure for potential API integration
   */
  async getListings(
    options: RealScoutListingsOptions = {}
  ): Promise<MCPResponse<RealScoutListing[]>> {
    // RealScout primarily uses widget embedding, not REST API
    // This method is a placeholder for future API integration

    return this.request<RealScoutListing[]>({
      method: 'GET',
      path: '/api/listings',
      query: {
        agentId: options.agentEncodedId || this.getAgentEncodedId(),
        sortOrder: options.sortOrder || 'NEWEST',
        listingStatus: options.listingStatus || 'For Sale',
        propertyTypes: options.propertyTypes || ',SFR',
        ...(options.priceMin && { priceMin: options.priceMin }),
        ...(options.priceMax && { priceMax: options.priceMax }),
      },
    })
  }

  /**
   * Health check - verify widget script is accessible
   */
  async healthCheck(): Promise<HealthCheckResult> {
    const startTime = Date.now()

    try {
      // Check if widget script URL is accessible
      const scriptUrl = this.getWidgetScriptUrl()
      const response = await fetch(scriptUrl, { method: 'HEAD' })

      const latency = Date.now() - startTime
      const healthy = response.ok

      return {
        endpointId: this.id,
        status: healthy ? 'connected' : 'error',
        healthy,
        latency,
        lastChecked: new Date(),
        metadata: {
          scriptUrl,
          statusCode: response.status,
        },
      }
    } catch (error) {
      return {
        endpointId: this.id,
        status: 'error',
        healthy: false,
        latency: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Health check failed',
        lastChecked: new Date(),
      }
    }
  }

  /**
   * Health check endpoint (not applicable for RealScout widget embedding)
   */
  protected getHealthCheckPath(): string | null {
    // RealScout doesn't have a traditional API health endpoint
    // Health check is done via widget script URL accessibility
    return null
  }
}
