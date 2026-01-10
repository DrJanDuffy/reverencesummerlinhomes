# Ambient AI & Infrastructure Configuration

This document outlines the infrastructure optimizations for Ambient AI workloads and the implementation of agentic UI patterns for secure AI interactions.

## Overview

The project has been configured to support high-context token processing for Ambient AI workloads with enhanced memory allocation, extended timeouts, and user approval workflows following the "Seatbelt Mindset" security pattern.

---

## Vercel Edge Function Configuration

### Configuration Details

**File:** `vercel.json`

All API routes in `app/routes/api/**/*.{tsx,ts}` are configured with:

```json
{
  "functions": {
    "app/routes/api/**/*.tsx": {
      "memory": 3008,
      "maxDuration": 300,
      "runtime": "nodejs20.x"
    },
    "app/routes/api/**/*.ts": {
      "memory": 3008,
      "maxDuration": 300,
      "runtime": "nodejs20.x"
    }
  },
  "regions": ["iad1"]
}
```

### Specifications

| Setting     | Value                   | Rationale                                                                      |
| ----------- | ----------------------- | ------------------------------------------------------------------------------ |
| **Memory**  | 3008 MB                 | Maximum for Pro/Enterprise plans - essential for high-context token processing |
| **Timeout** | 300 seconds (5 minutes) | Maximum for Pro plan - allows for complex AI operations                        |
| **Runtime** | Node.js 20.x            | Latest LTS with optimal performance for AI workloads                           |
| **Region**  | `iad1` (US East)        | Low latency for US-based users, can be adjusted as needed                      |

### Plan Requirements

⚠️ **Important:** These settings require a Vercel **Pro** or **Enterprise** plan:

- **Hobby Plan:** Max 1024 MB memory, 60s timeout
- **Pro Plan:** Max 3008 MB memory, 300s timeout ✅
- **Enterprise Plan:** Max 3008 MB memory, 900s timeout ✅

### Verifying Configuration

After deployment, verify the configuration:

1. Go to Vercel Dashboard → Your Project → Settings → Functions
2. Check that API routes show the configured memory/timeout
3. Monitor function logs for memory usage during AI operations

---

## ReviewableAction Component

### Overview

The `ReviewableAction` component implements the **"Seatbelt Mindset"** security pattern, requiring users to review and approve AI-generated changes before execution.

**Location:** `app/components/ReviewableAction.tsx`

### Key Features

✅ **Diff Preview**: Side-by-side comparison for text changes  
✅ **Multiple Change Types**: Text, file, data, and batch operations  
✅ **Safety Warnings**: Customizable warning messages  
✅ **Extra Confirmation**: Double-confirmation for destructive actions  
✅ **Audit Logging**: Automatic logging of approvals/rejections  
✅ **Error Handling**: Graceful error handling with callbacks  
✅ **Type-Safe**: Full TypeScript support  
✅ **Accessible**: Built on Radix UI primitives

### Quick Start

```tsx
import { ReviewableAction } from '~/components/ReviewableAction'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Apply AI Suggestion</button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={async () => {
          // Execute AI-suggested change
          await updateContent(newContent)
          return { success: true }
        }}
        actionDescription="Update homepage hero text"
        proposedChanges={{
          type: 'text',
          before: oldContent,
          after: newContent,
          field: 'Hero Text',
        }}
        onApproved={result => console.log('Approved:', result)}
        onRejected={() => console.log('Rejected')}
      />
    </>
  )
}
```

### Integration with Ambient AI

When building AI-powered features, follow this flow:

```tsx
async function handleAISuggestion() {
  // 1. AI generates proposal (high-context processing)
  const suggestion = await ai.generateSuggestion(currentContent)

  // 2. Show review dialog (Seatbelt Mindset)
  requestApproval(
    async () => {
      // 3. Execute only after approval
      return await applyChanges(suggestion)
    },
    {
      actionDescription: 'Apply AI-suggested content optimization',
      proposedChanges: {
        type: 'text',
        before: currentContent,
        after: suggestion.newContent,
      },
      warnings: [
        'This change will be visible to all users',
        'Search engine indexing may take 24-48 hours',
      ],
    }
  )
}
```

### Change Types

#### Text Changes

```tsx
proposedChanges={{
  type: 'text',
  before: 'Old text',
  after: 'New text',
  field: 'Page Title',
}}
```

#### File Operations

```tsx
proposedChanges={{
  type: 'file',
  path: 'app/lib/config.ts',
  operation: 'update', // 'create' | 'update' | 'delete'
  diff: `- old code\n+ new code`,
}}
```

#### Data Updates

```tsx
proposedChanges={{
  type: 'data',
  before: { old: 'value' },
  after: { new: 'value' },
  field: 'Configuration',
}}
```

#### Batch Operations

```tsx
proposedChanges={{
  type: 'batch',
  changes: [
    { type: 'text', before: 'old', after: 'new' },
    { type: 'file', path: '...', operation: 'update' },
  ],
}}
```

### Using the Hook

For programmatic access:

```tsx
import { useReviewableAction } from '~/components/ReviewableAction'

function MyComponent() {
  const { requestApproval, ReviewableActionDialog } = useReviewableAction()

  const handleAI = () => {
    requestApproval(async () => await executeAction(), {
      actionDescription: 'Apply AI suggestion',
      proposedChanges: {
        /* ... */
      },
    })
  }

  return (
    <>
      <button onClick={handleAI}>Apply Suggestion</button>
      {ReviewableActionDialog}
    </>
  )
}
```

---

## Best Practices

### For AI Workloads

1. **Monitor Memory Usage**: Watch function logs for memory spikes
2. **Batch Operations**: Group related changes for efficiency
3. **Progressive Enhancement**: Show loading states during AI processing
4. **Error Boundaries**: Wrap AI operations in error handlers

### For ReviewableAction

1. **Always Show Preview**: Never skip the review step
2. **Clear Descriptions**: Use descriptive `actionDescription`
3. **Add Warnings**: Warn about irreversible actions
4. **Handle Errors**: Always provide `onError` callback
5. **Log Everything**: Use audit logs for compliance
6. **Test Destructive Actions**: Use extra confirmation for deletions

---

## Testing

### Verify Vercel Configuration

1. Deploy to Vercel
2. Check function settings in dashboard
3. Test API route with high-memory operation
4. Monitor function logs for timeout/memory issues

### Test ReviewableAction

See `app/components/ReviewableAction.example.tsx` for complete examples:

- Text updates
- File operations
- Batch changes
- Destructive actions
- Hook usage
- Real-world scenarios

Run examples in development:

```bash
npm run dev
# Import and use examples in your routes
```

---

## Troubleshooting

### Vercel Function Issues

**Issue:** Functions timing out  
**Solution:** Check `maxDuration` in `vercel.json` (max 300s on Pro)

**Issue:** Out of memory errors  
**Solution:** Verify `memory` setting (max 3008 MB on Pro)

**Issue:** Configuration not applying  
**Solution:** Ensure file paths match exactly in `vercel.json`

### ReviewableAction Issues

**Issue:** Dialog not opening  
**Solution:** Check `open` state is controlled properly

**Issue:** Changes not showing in preview  
**Solution:** Verify `proposedChanges` type matches expected format

**Issue:** Actions executing without approval  
**Solution:** Ensure `action` prop is only called in `handleApprove`

---

## Resources

- [ReviewableAction Component](./ReviewableAction.README.md) - Full API documentation
- [ReviewableAction Examples](../app/components/ReviewableAction.example.tsx) - Usage examples
- [Vercel Functions Docs](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js)
- [Vercel Pricing](https://vercel.com/pricing) - Plan limits and features

---

## Summary

✅ **Vercel Configuration**: Optimized for 3008 MB memory, 300s timeout  
✅ **ReviewableAction Component**: Seatbelt Mindset security pattern  
✅ **Documentation**: Complete API docs and examples  
✅ **Type Safety**: Full TypeScript support  
✅ **Accessibility**: ARIA labels and keyboard navigation

The infrastructure is now ready for Ambient AI workloads with proper safety mechanisms in place.

---

**Last Updated:** 2025-01-10  
**Maintained By:** Development Team
