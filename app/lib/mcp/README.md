# Model Context Protocol (MCP) Foundation

Standardized foundation for managing external tool connections (databases, APIs, third-party services) across the Reverence Summerlin Homes website.

## Overview

The MCP foundation provides:

- **Centralized Configuration**: All endpoint configurations managed in one place
- **Connection Management**: Automatic retry, health checks, and error handling
- **Type Safety**: Full TypeScript support with strict typing
- **Environment-Based**: Configurations load from environment variables
- **Extensible**: Easy to add new connectors for additional services

## Directory Structure

```
app/lib/mcp/
├── types.ts              # Core type definitions
├── config.ts             # Endpoint configuration management
├── client.ts             # Base client class with connection logic
├── manager.ts            # Singleton manager for connector instances
├── utils.ts              # Utility functions for common operations
├── index.ts              # Public API exports
└── connectors/           # Specific connector implementations
    ├── http-client.ts    # Generic HTTP client
    ├── realscout.ts      # RealScout listings connector
    └── followupboss.ts   # Follow Up Boss CRM connector
```

## Quick Start

### Using the Manager

```typescript
import { getRealScout, getFollowUpBoss } from '~/lib/mcp'

// Get a connector instance (auto-initializes)
const realscout = await getRealScout()

// Use the connector
const widgetHTML = realscout.generateWidgetHTML({
  sortOrder: 'NEWEST',
  priceMin: 300000,
  priceMax: 500000,
})
```

### Submitting a Lead to Follow Up Boss

```typescript
import { getFollowUpBoss } from '~/lib/mcp'

// In a server action or route handler
export async function action({ request }: ActionArgs) {
  const formData = await request.formData()

  const followupboss = await getFollowUpBoss()

  const result = await followupboss.submitLead({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    source: 'Website Contact Form',
    message: formData.get('message'),
  })

  if (result.success) {
    return { success: true, contactId: result.data.id }
  }

  return { success: false, error: result.error }
}
```

### Using Utility Functions (Client-Side Compatible)

```typescript
import { getRealScoutAgentId, generateRealScoutWidgetHTML } from '~/lib/mcp'

// Get agent ID from configuration
const agentId = getRealScoutAgentId()

// Generate widget HTML
const widgetHTML = generateRealScoutWidgetHTML({
  sortOrder: 'PRICE_LOW_TO_HIGH',
  listingStatus: 'For Sale',
})
```

## Configuration

### Environment Variables

Configure endpoints via environment variables following the pattern:

```
MCP_{PROVIDER}_{SETTING}
```

#### RealScout Configuration

```bash
# Optional: Override default agent ID
MCP_REALSCOUT_AGENT_ID=QWdlbnQtMjI1MDUw

# Optional: Override widget script URL
MCP_REALSCOUT_BASE_URL=https://em.realscout.com

# Enable/disable endpoint
MCP_REALSCOUT_ENABLED=true

# Environment
MCP_REALSCOUT_ENVIRONMENT=production
```

#### Follow Up Boss Configuration

```bash
# Required: API key
MCP_FOLLOWUPBOSS_API_KEY=your_api_key_here

# Optional: Override base URL
MCP_FOLLOWUPBOSS_BASE_URL=https://api.followupboss.com/v1

# Optional: Timeout (milliseconds)
MCP_FOLLOWUPBOSS_TIMEOUT=30000

# Optional: Max retries
MCP_FOLLOWUPBOSS_MAX_RETRIES=3
```

#### Cloudflare Configuration

```bash
# API Token (preferred) OR API Key + Email
MCP_CLOUDFLARE_API_TOKEN=your_token_here
# OR
MCP_CLOUDFLARE_API_KEY=your_api_key
MCP_CLOUDFLARE_EMAIL=your_email@example.com

# Account ID
MCP_CLOUDFLARE_ACCOUNT_ID=your_account_id
```

### Default Values

If environment variables are not set, the system uses sensible defaults:

- **RealScout**: Default agent ID and widget URL from config
- **Follow Up Boss**: Requires API key (no default)
- **Cloudflare**: Requires credentials (no default)

## Available Connectors

### RealScout Connector

Manages RealScout listing widgets and API interactions.

```typescript
import { getRealScout } from '~/lib/mcp'

const realscout = await getRealScout()

// Generate widget HTML
const html = realscout.generateWidgetHTML({
  sortOrder: 'NEWEST',
  listingStatus: 'For Sale',
  propertyTypes: ',SFR',
  priceMin: 300000,
  priceMax: 600000,
})

// Get widget script URL
const scriptUrl = realscout.getWidgetScriptUrl()

// Health check
const health = await realscout.healthCheck()
```

### Follow Up Boss Connector

Manages CRM operations (leads, contacts, properties).

```typescript
import { getFollowUpBoss } from '~/lib/mcp'

const followupboss = await getFollowUpBoss()

// Submit a lead
const result = await followupboss.submitLead({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '702-555-1234',
  source: 'Website',
  message: 'Interested in Summerlin homes',
})

// Search contacts
const contacts = await followupboss.searchContacts('john@example.com')

// Add a note
await followupboss.addNote(contactId, 'Follow up about pricing')
```

### HTTP Client (Generic)

Base HTTP client for REST APIs. Can be used directly or extended.

```typescript
import { getCloudflare } from '~/lib/mcp'
import type { HTTPMCPClient } from '~/lib/mcp'

const client = await getCloudflare()

// Make a request
const response = await client.request({
  method: 'GET',
  path: '/zones',
  query: { per_page: 50 },
})
```

## Creating a New Connector

1. **Create the connector class** extending `BaseMCPClient`:

```typescript
// app/lib/mcp/connectors/my-service.ts
import { HTTPMCPClient } from './http-client'
import type { MCPRequestOptions, MCPResponse } from '../types'

export class MyServiceConnector extends HTTPMCPClient {
  readonly id = 'myservice'
  readonly name = 'My Service Connector'

  async getData(): Promise<MCPResponse<MyData>> {
    return this.request({
      method: 'GET',
      path: '/api/data',
    })
  }
}
```

2. **Add configuration function** in `config.ts`:

```typescript
export function getMyServiceConfig(): MCPEndpointConfig {
  return loadEndpointConfig('MYSERVICE', {
    id: 'myservice',
    name: 'My Service API',
    provider: 'My Service',
    baseUrl: 'https://api.myservice.com',
    authMethod: 'api_key',
    credentials: {
      apiKey: process.env.MCP_MYSERVICE_API_KEY,
    },
  })
}
```

3. **Register in manager** in `manager.ts`:

```typescript
case "myservice":
  return new MyServiceConnector();
```

4. **Export in index.ts**:

```typescript
export { MyServiceConnector } from './connectors/my-service'
```

## Health Checks

All connectors support health checks:

```typescript
import { getMCPManager } from '~/lib/mcp'

const manager = getMCPManager()

// Check health of all connectors
const healthStatus = await manager.getHealthStatus()

// Check individual connector
const realscout = await getRealScout()
const health = await realscout.healthCheck()
```

## Error Handling

The MCP foundation provides structured error handling:

```typescript
import { MCPError } from '~/lib/mcp'

try {
  const result = await connector.request({ path: '/api/data' })
} catch (error) {
  if (error instanceof MCPError) {
    console.error(`MCP Error: ${error.message}`)
    console.error(`Status: ${error.statusCode}`)
    console.error(`Endpoint: ${error.endpointId}`)
  }
}
```

## Best Practices

1. **Use the Manager**: Always use `getMCPManager()` or convenience functions (`getRealScout()`, etc.) instead of creating connectors directly.

2. **Environment Variables**: Store sensitive credentials in environment variables, not in code.

3. **Error Handling**: Always wrap connector calls in try-catch blocks.

4. **Health Checks**: Implement health checks for critical operations.

5. **Connection Pooling**: The manager automatically reuses connections - don't create multiple instances.

6. **Server-Side Only**: Connectors that make API calls should only be used in server-side code (route handlers, actions, loaders).

## Migration from Hardcoded Values

### Before (Hardcoded)

```typescript
const agentId = 'QWdlbnQtMjI1MDUw'
const widgetHTML = `<realscout-office-listings agent-encoded-id="${agentId}"></realscout-office-listings>`
```

### After (MCP Managed)

```typescript
import { generateRealScoutWidgetHTML } from '~/lib/mcp'

const widgetHTML = generateRealScoutWidgetHTML({
  // Agent ID comes from MCP configuration
  sortOrder: 'NEWEST',
})
```

## Testing

Test connectors using the health check functionality:

```typescript
// In a test file
import { getRealScout } from '~/lib/mcp'

test('RealScout connector health check', async () => {
  const connector = await getRealScout()
  const health = await connector.healthCheck()

  expect(health.healthy).toBe(true)
  expect(health.status).toBe('connected')
})
```

## Troubleshooting

### Connection Errors

1. Check environment variables are set correctly
2. Verify credentials are valid
3. Check network connectivity
4. Review health check results

### Configuration Issues

1. Ensure `MCP_{PROVIDER}_ENABLED=true` (defaults to true)
2. Verify base URLs are correct
3. Check authentication method matches credentials provided

### Type Errors

1. Ensure TypeScript types are imported correctly
2. Check connector return types match expected types
3. Verify request/response types are correctly typed

## Future Enhancements

- [ ] Connection pooling and reuse
- [ ] Request/response caching
- [ ] Rate limiting per connector
- [ ] Metrics and monitoring
- [ ] Webhook support
- [ ] GraphQL connector support
- [ ] Database connector implementations
