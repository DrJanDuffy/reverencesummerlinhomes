# Performance & Reliability Guide

This document describes the performance optimizations and comprehensive logging/provenance tracking system implemented for the Reverence Summerlin Homes website.

## Overview

The site implements two key features for 2026 requirements:

1. **Partial Prerendering (PPR-like)**: Streaming and deferred loading for high-demand scenarios and cost-per-token efficiency
2. **Comprehensive Logging & Provenance Tracking**: Full tracking of AI-driven features for governance and reliability

---

## 1. Partial Prerendering (PPR-like) with React Router v7

### Concept

Similar to Next.js Partial Prerendering, we use React Router v7's streaming capabilities to:
- Load critical data immediately (blocks initial render)
- Stream non-critical data after initial render
- Improve perceived performance and reduce initial page load time

### Implementation

#### Deferred Loader Example

```typescript
// app/routes/home.tsx
import { defer } from "react-router";
import { createDeferred } from "~/lib/streaming";

export async function loader({ request }: { request: Request }) {
  // Critical data: Load immediately
  const criticalData = {
    monument: monumentData,
    config,
  };
  
  // Non-critical data: Defer for streaming
  const deferredData = {
    communities: Promise.resolve(communitiesData),
  };
  
  // Combine and return
  return createDeferred({
    ...criticalData,
    ...deferredData,
  }, { route: '/' });
}
```

#### Component Usage with Suspense

```typescript
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

export default function Home() {
  const data = useLoaderData<typeof loader>();
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Await resolve={data.communities}>
        {(communities) => (
          <div>
            {communities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  );
}
```

### Benefits

- **Faster Initial Page Load**: Critical content renders immediately
- **Better User Experience**: Users see content progressively
- **Reduced Server Load**: Non-critical data streams asynchronously
- **Cost Efficiency**: Aligns with token cost optimization (only load what's needed when needed)

---

## 2. Comprehensive Logging & Provenance Tracking

### Overview

The logging system implements "Providence Tracking" for all AI-driven features to ensure they are "governable and reliable" as per 2026 outlook requirements.

### Features

- **Full Provenance Context**: Every operation tracks request ID, session, IP (hashed), route, etc.
- **Token Usage Tracking**: Monitor AI token consumption for cost-per-token efficiency
- **Performance Metrics**: Duration, memory usage, cache hits
- **Error Tracking**: Complete error context with stack traces
- **PII Sanitization**: Automatically sanitizes sensitive data before logging

### Usage

#### Basic AI Feature Tracking

```typescript
import { trackAIFeature } from "~/lib/logging";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  const result = await trackAIFeature(
    'valuation_calculation', // AI feature type
    request,                  // Request object
    async () => {
      // Your AI-powered operation
      const valuation = await calculateValuation(formData);
      return valuation;
    },
    {
      input: { /* sanitized input data */ },
      metadata: { route: '/valuation' },
      // Optional: Token tracking for cost monitoring
      tokenTracker: async (result) => ({
        prompt: 500,      // Input tokens
        completion: 300,  // Output tokens
        model: 'gpt-4',
        cost: 0.024,      // Estimated cost in USD
      }),
    }
  );
  
  return result;
}
```

#### AI Feature Types

Available AI feature types:
- `valuation_calculation` - Home valuation calculations
- `market_analysis` - Market trend analysis
- `property_recommendation` - AI-powered property recommendations
- `content_generation` - AI-generated content
- `form_processing` - AI-enhanced form processing
- `search_optimization` - Search result optimization
- `lead_scoring` - Lead scoring algorithms
- `unknown` - Other AI features

#### Token Usage Summary

```typescript
import { logger } from "~/lib/logging";

// Get token usage summary
const summary = logger.getTokenUsageSummary();
console.log(summary);
// {
//   totalTokens: 5000,
//   totalCost: 0.24,
//   byFeature: {
//     valuation_calculation: { tokens: 3000, cost: 0.15 },
//     form_processing: { tokens: 2000, cost: 0.09 },
//   }
// }
```

---

## 3. Middleware for Route Handlers

### Automatic Logging Middleware

```typescript
import { withMiddleware } from "~/lib/middleware";

export const action = withMiddleware(
  async ({ request }: Route.ActionArgs) => {
    // Your handler logic
    return { success: true };
  },
  {
    enableLogging: true,
    enablePerformanceMonitoring: true,
    enableErrorHandling: true,
    slowThreshold: 1000, // Log if > 1 second
    route: '/contact',
  }
);
```

### Individual Middleware Functions

```typescript
import { 
  withLogging,
  withPerformanceMonitoring,
  withErrorHandling 
} from "~/lib/middleware";

// Logging only
export const action = withLogging(async ({ request }) => {
  // Handler
});

// Performance monitoring
export const loader = withPerformanceMonitoring(
  async ({ request }) => {
    // Handler
  },
  { slowThreshold: 2000 }
);

// Error handling
export const action = withErrorHandling(async ({ request }) => {
  // Handler
});
```

---

## 4. Configuration

### React Router Config

The `react-router.config.ts` is already configured for streaming:

```typescript
export default {
  ssr: true,
  presets: [vercelPreset()],
  // ... other config
  // Streaming/deferred loading is enabled by default
} satisfies Config;
```

### Environment Variables

For production logging, set these environment variables:

```env
# Logging service endpoint (optional)
LOG_SERVICE_URL=https://your-log-service.com/api/logs

# Enable production logging
ENABLE_PRODUCTION_LOGGING=true
```

---

## 5. Monitoring & Analytics

### View Recent Logs

```typescript
import { logger } from "~/lib/logging";

// Get recent logs
const logs = logger.getRecentLogs(100);

// Get AI feature logs only
const aiLogs = logger.getAIFeatureLogs(100);
```

### Log Levels

- `debug` - Development debugging
- `info` - General information
- `warn` - Warnings (slow requests, etc.)
- `error` - Errors
- `fatal` - Critical errors

---

## 6. Best Practices

### When to Use Deferred Loading

✅ **Use for:**
- Non-critical data (community listings, related content)
- Heavy computations
- External API calls that aren't blocking

❌ **Don't use for:**
- Critical page content (hero section, main CTA)
- Data needed for initial render
- Small, fast data loads

### When to Track AI Features

✅ **Always track:**
- AI-powered calculations (valuations, market analysis)
- AI-enhanced form processing
- Content generation
- Recommendations engines

### Token Tracking

- Track token usage for all AI API calls
- Monitor costs for cost-per-token efficiency
- Set up alerts for unusually high token consumption

---

## 7. Example: Complete Form Action with Tracking

```typescript
import { trackAIFeature } from "~/lib/logging";
import type { Route } from "./+types/contact";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  const result = await trackAIFeature(
    'form_processing',
    request,
    async () => {
      // Validate form
      const name = formData.get("name");
      const email = formData.get("email");
      
      // Process with AI (e.g., lead scoring)
      const leadScore = await scoreLead({ name, email });
      
      // Save to CRM
      await saveLead({ name, email, leadScore });
      
      return { success: true };
    },
    {
      input: {
        hasName: !!formData.get("name"),
        hasEmail: !!formData.get("email"),
      },
      metadata: {
        formType: 'contact',
        route: '/contact',
      },
      tokenTracker: async () => {
        // Calculate tokens if AI was used
        return {
          prompt: 150,
          completion: 50,
          model: 'gpt-4',
          cost: 0.003,
        };
      },
    }
  );
  
  return result;
}
```

---

## 8. Performance Metrics

### Monitoring

The logging system automatically tracks:
- Request duration
- Memory usage (if available)
- Cache hit/miss ratios
- Token consumption
- Error rates

### Accessing Metrics

```typescript
import { logger } from "~/lib/logging";

// Get performance summary from logs
const logs = logger.getRecentLogs(1000);
const avgDuration = logs
  .filter(log => log.aiFeature?.performance)
  .reduce((sum, log) => sum + (log.aiFeature!.performance.duration || 0), 0) / logs.length;
```

---

## 9. Troubleshooting

### Logs Not Appearing

- Check `NODE_ENV` - logs output to console in development
- Verify logging service URL if using external service
- Check browser console for client-side logs

### Streaming Not Working

- Ensure React Router v7 with SSR enabled
- Verify Suspense boundaries are correctly placed
- Check that deferred data is wrapped in Promise.resolve()

### Token Tracking Not Working

- Ensure `tokenTracker` function is provided
- Check that it returns correct format: `{ prompt, completion, model?, cost? }`
- Verify AI service is being called (not mocked)

---

## 10. Future Enhancements

Potential improvements:
- [ ] Integration with external logging service (Datadog, LogTail, etc.)
- [ ] Real-time monitoring dashboard
- [ ] Automated alerts for high token usage
- [ ] Cost optimization recommendations
- [ ] Performance analytics dashboard

---

**Last Updated:** 2025-01-10  
**Maintained By:** Development Team
