/**
 * MCP Connection Manager
 *
 * Singleton manager for all MCP connectors
 * Provides centralized access to initialized connectors
 */

import type { MCPConnector, MCPEndpointConfig } from './types'
import { RealScoutConnector } from './connectors/realscout'
import { FollowUpBossConnector } from './connectors/followupboss'
import { HTTPMCPClient } from './connectors/http-client'
import {
  getRealScoutConfig,
  getFollowUpBossConfig,
  getCloudflareConfig,
  getEndpointConfig,
  getAllEndpointConfigs,
} from './config'

type ConnectorType = 'realscout' | 'followupboss' | 'cloudflare' | 'http'

class MCPManager {
  private connectors: Map<string, MCPConnector> = new Map()
  private initializing: Set<string> = new Set()

  /**
   * Get or create a connector instance
   */
  async getConnector<T extends MCPConnector>(
    type: ConnectorType,
    config?: MCPEndpointConfig
  ): Promise<T> {
    const endpointId = config?.id || type

    // Return existing connector if available and connected
    const existing = this.connectors.get(endpointId) as T | undefined
    if (existing && existing.status === 'connected') {
      return existing
    }

    // If already initializing, wait for it
    if (this.initializing.has(endpointId)) {
      // Wait a bit and retry
      await new Promise(resolve => setTimeout(resolve, 100))
      return this.getConnector<T>(type, config)
    }

    // Initialize new connector
    this.initializing.add(endpointId)

    try {
      const connector = this.createConnector(type)
      const endpointConfig = config || this.getDefaultConfig(type)

      if (!endpointConfig) {
        throw new Error(`No configuration found for connector type: ${type}`)
      }

      await connector.initialize(endpointConfig)
      this.connectors.set(endpointId, connector)

      return connector as T
    } finally {
      this.initializing.delete(endpointId)
    }
  }

  /**
   * Create a connector instance based on type
   */
  private createConnector(type: ConnectorType): MCPConnector {
    switch (type) {
      case 'realscout':
        return new RealScoutConnector()
      case 'followupboss':
        return new FollowUpBossConnector()
      case 'cloudflare':
      case 'http':
        return new HTTPMCPClient()
      default:
        throw new Error(`Unknown connector type: ${type}`)
    }
  }

  /**
   * Get default configuration for a connector type
   */
  private getDefaultConfig(type: ConnectorType): MCPEndpointConfig | undefined {
    switch (type) {
      case 'realscout':
        return getRealScoutConfig()
      case 'followupboss':
        return getFollowUpBossConfig()
      case 'cloudflare':
        return getCloudflareConfig()
      default:
        return undefined
    }
  }

  /**
   * Get a connector by endpoint ID
   */
  getConnectorById(id: string): MCPConnector | undefined {
    return this.connectors.get(id)
  }

  /**
   * Initialize all enabled connectors
   */
  async initializeAll(): Promise<void> {
    const configs = getAllEndpointConfigs()

    await Promise.all(
      configs.map(async config => {
        try {
          const connectorType = config.id as ConnectorType
          await this.getConnector(connectorType, config)
        } catch (error) {
          console.error(`Failed to initialize connector ${config.id}:`, error)
        }
      })
    )
  }

  /**
   * Disconnect a specific connector
   */
  async disconnect(endpointId: string): Promise<void> {
    const connector = this.connectors.get(endpointId)
    if (connector) {
      await connector.disconnect()
      this.connectors.delete(endpointId)
    }
  }

  /**
   * Disconnect all connectors
   */
  async disconnectAll(): Promise<void> {
    await Promise.all(
      Array.from(this.connectors.values()).map(connector =>
        connector.disconnect()
      )
    )
    this.connectors.clear()
  }

  /**
   * Get health status of all connectors
   */
  async getHealthStatus(): Promise<
    Array<{ endpointId: string; status: string; healthy: boolean }>
  > {
    const connectors = Array.from(this.connectors.values())

    const healthChecks = await Promise.all(
      connectors.map(async connector => {
        const health = await connector.healthCheck()
        return {
          endpointId: connector.id,
          status: health.status,
          healthy: health.healthy,
        }
      })
    )

    return healthChecks
  }

  /**
   * Get all registered connector IDs
   */
  getConnectorIds(): string[] {
    return Array.from(this.connectors.keys())
  }
}

// Singleton instance
let managerInstance: MCPManager | null = null

/**
 * Get the MCP manager singleton instance
 */
export function getMCPManager(): MCPManager {
  if (!managerInstance) {
    managerInstance = new MCPManager()
  }
  return managerInstance
}

// Export convenience functions
export async function getRealScout(): Promise<RealScoutConnector> {
  return getMCPManager().getConnector<RealScoutConnector>('realscout')
}

export async function getFollowUpBoss(): Promise<FollowUpBossConnector> {
  return getMCPManager().getConnector<FollowUpBossConnector>('followupboss')
}

export async function getCloudflare(): Promise<HTTPMCPClient> {
  return getMCPManager().getConnector<HTTPMCPClient>('cloudflare')
}

// Export configuration helpers
export {
  getRealScoutConfig,
  getFollowUpBossConfig,
  getCloudflareConfig,
  getEndpointConfig,
  getAllEndpointConfigs,
}
