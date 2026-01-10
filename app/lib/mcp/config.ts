/**
 * MCP Endpoint Configuration Manager
 *
 * Centralized management of endpoint configurations
 * Loads from environment variables with fallbacks to defaults
 */

import type { MCPEndpointConfig } from './types'

/**
 * Load endpoint configuration from environment variables
 *
 * Environment variable naming convention:
 * MCP_{PROVIDER}_{SETTING}
 *
 * Example: MCP_REALSCOUT_API_KEY, MCP_REALSCOUT_BASE_URL
 */
function loadEndpointConfig(
  provider: string,
  defaults: Partial<MCPEndpointConfig>
): MCPEndpointConfig {
  const envPrefix = `MCP_${provider.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`

  const getEnv = (key: string): string | undefined => {
    return process.env[`${envPrefix}_${key}`] || process.env[key]
  }

  const baseUrl = getEnv('BASE_URL') || defaults.baseUrl || ''
  const apiKey = getEnv('API_KEY')
  const bearerToken = getEnv('BEARER_TOKEN')
  const enabled = getEnv('ENABLED') !== 'false'
  const environment =
    (getEnv('ENVIRONMENT') as 'development' | 'staging' | 'production') ||
    'production'

  // Determine auth method based on available credentials
  let authMethod = defaults.authMethod || 'none'
  if (bearerToken) {
    authMethod = 'bearer_token'
  } else if (apiKey) {
    authMethod = 'api_key'
  }

  return {
    id: defaults.id || provider.toLowerCase(),
    name: defaults.name || provider,
    provider,
    baseUrl,
    authMethod,
    credentials: {
      apiKey: apiKey || defaults.credentials?.apiKey,
      bearerToken: bearerToken || defaults.credentials?.bearerToken,
      username: getEnv('USERNAME') || defaults.credentials?.username,
      password: getEnv('PASSWORD') || defaults.credentials?.password,
      clientId: getEnv('CLIENT_ID') || defaults.credentials?.clientId,
      clientSecret:
        getEnv('CLIENT_SECRET') || defaults.credentials?.clientSecret,
      customHeaders: defaults.credentials?.customHeaders,
    },
    timeout: parseInt(
      getEnv('TIMEOUT') || String(defaults.timeout || 30000),
      10
    ),
    maxRetries: parseInt(
      getEnv('MAX_RETRIES') || String(defaults.maxRetries || 3),
      10
    ),
    retryDelay: parseInt(
      getEnv('RETRY_DELAY') || String(defaults.retryDelay || 1000),
      10
    ),
    enabled: enabled && defaults.enabled !== false,
    environment,
    providerConfig: defaults.providerConfig,
  }
}

/**
 * RealScout Endpoint Configuration
 */
export function getRealScoutConfig(): MCPEndpointConfig {
  return loadEndpointConfig('REALSCOUT', {
    id: 'realscout',
    name: 'RealScout Listings API',
    provider: 'RealScout',
    baseUrl: 'https://em.realscout.com',
    authMethod: 'none',
    providerConfig: {
      agentEncodedId: process.env.MCP_REALSCOUT_AGENT_ID || 'QWdlbnQtMjI1MDUw',
      widgetScriptUrl:
        'https://em.realscout.com/widgets/realscout-web-components.umd.js',
    },
  })
}

/**
 * Follow Up Boss Endpoint Configuration
 */
export function getFollowUpBossConfig(): MCPEndpointConfig {
  return loadEndpointConfig('FOLLOWUPBOSS', {
    id: 'followupboss',
    name: 'Follow Up Boss CRM API',
    provider: 'Follow Up Boss',
    baseUrl: 'https://api.followupboss.com/v1',
    authMethod: 'api_key',
    credentials: {
      apiKey: process.env.MCP_FOLLOWUPBOSS_API_KEY,
    },
  })
}

/**
 * Cloudflare Endpoint Configuration
 */
export function getCloudflareConfig(): MCPEndpointConfig {
  return loadEndpointConfig('CLOUDFLARE', {
    id: 'cloudflare',
    name: 'Cloudflare API',
    provider: 'Cloudflare',
    baseUrl: 'https://api.cloudflare.com/client/v4',
    authMethod: 'bearer_token',
    credentials: {
      bearerToken: process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN,
      apiKey: process.env.CLOUDFLARE_API_KEY || process.env.CF_API_KEY,
      customHeaders: process.env.CLOUDFLARE_EMAIL
        ? {
            'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
          }
        : undefined,
    },
    providerConfig: {
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID,
    },
  })
}

/**
 * Get all endpoint configurations
 */
export function getAllEndpointConfigs(): MCPEndpointConfig[] {
  return [
    getRealScoutConfig(),
    getFollowUpBossConfig(),
    getCloudflareConfig(),
  ].filter(config => config.enabled)
}

/**
 * Get a specific endpoint configuration by ID
 */
export function getEndpointConfig(id: string): MCPEndpointConfig | undefined {
  const configs: Record<string, () => MCPEndpointConfig> = {
    realscout: getRealScoutConfig,
    followupboss: getFollowUpBossConfig,
    cloudflare: getCloudflareConfig,
  }

  const getter = configs[id.toLowerCase()]
  if (!getter) {
    return undefined
  }

  return getter()
}
