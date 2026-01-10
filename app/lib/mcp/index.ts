/**
 * Model Context Protocol (MCP) - Public API
 *
 * Main entry point for MCP functionality
 * Export all public types, classes, and utilities
 */

// Types
export type {
  ConnectionStatus,
  AuthMethod,
  MCPEndpointConfig,
  MCPRequestOptions,
  MCPResponse,
  HealthCheckResult,
  MCPConnector,
} from './types'

export { MCPError } from './types'

// Base client
export { BaseMCPClient } from './client'

// Connectors
export { HTTPMCPClient } from './connectors/http-client'
export { RealScoutConnector } from './connectors/realscout'
export type {
  RealScoutListingsOptions,
  RealScoutListing,
} from './connectors/realscout'
export { FollowUpBossConnector } from './connectors/followupboss'
export type {
  FollowUpBossLead,
  FollowUpBossContact,
  FollowUpBossProperty,
} from './connectors/followupboss'

// Manager and configuration
export {
  getMCPManager,
  getRealScout,
  getFollowUpBoss,
  getCloudflare,
  getRealScoutConfig,
  getFollowUpBossConfig,
  getCloudflareConfig,
  getEndpointConfig,
  getAllEndpointConfigs,
} from './manager'

// Utilities
export {
  getRealScoutAgentId,
  getRealScoutWidgetScriptUrl,
  buildRealScoutWidgetAttributes,
  generateRealScoutWidgetHTML,
} from './utils'
