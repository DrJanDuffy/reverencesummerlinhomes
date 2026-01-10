/**
 * MCP Utility Functions
 *
 * Helper functions for common MCP operations
 */

import { getRealScoutConfig } from './config'
import type { RealScoutListingsOptions } from './connectors/realscout'

/**
 * Get RealScout agent encoded ID from configuration
 * Can be used in both server and client contexts
 */
export function getRealScoutAgentId(): string {
  const config = getRealScoutConfig()
  const agentId = (
    config.providerConfig as { agentEncodedId?: string } | undefined
  )?.agentEncodedId
  return agentId || process.env.MCP_REALSCOUT_AGENT_ID || 'QWdlbnQtMjI1MDUw'
}

/**
 * Get RealScout widget script URL
 */
export function getRealScoutWidgetScriptUrl(): string {
  const config = getRealScoutConfig()
  const scriptUrl = (
    config.providerConfig as { widgetScriptUrl?: string } | undefined
  )?.widgetScriptUrl
  return (
    scriptUrl ||
    'https://em.realscout.com/widgets/realscout-web-components.umd.js'
  )
}

/**
 * Build RealScout widget attributes object
 */
export function buildRealScoutWidgetAttributes(
  options: RealScoutListingsOptions = {}
): Record<string, string> {
  const agentId = options.agentEncodedId || getRealScoutAgentId()

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
 * Generate RealScout widget HTML string
 */
export function generateRealScoutWidgetHTML(
  options: RealScoutListingsOptions = {}
): string {
  const attrs = buildRealScoutWidgetAttributes(options)
  const attrsString = Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')

  return `<realscout-office-listings ${attrsString}></realscout-office-listings>`
}
