# ReviewableAction Component

## Overview

The `ReviewableAction` component implements the **"Seatbelt Mindset"** pattern for agent security, providing a safety mechanism that requires users to review and approve AI-generated changes before they are committed.

## Why ReviewableAction?

When building AI-powered features, especially with high-context token processing (like Ambient AI), it's critical to have safeguards:

1. **Safety First**: Users should always review AI-generated changes
2. **Transparency**: Clear preview of what will change
3. **Audit Trail**: All approvals/rejections are logged
4. **User Control**: Explicit approval required before execution

## Key Features

- ✅ **Diff Preview**: Side-by-side comparison of changes
- ✅ **Multiple Change Types**: Text, file, data, and batch operations
- ✅ **Warnings System**: Display safety warnings
- ✅ **Extra Confirmation**: Optional double-confirmation for destructive actions
- ✅ **Audit Logging**: Automatic logging of all approvals/rejections
- ✅ **Error Handling**: Graceful error handling with callbacks
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Accessible**: Built on Radix UI primitives

## Basic Usage

```tsx
import { ReviewableAction } from '~/components/ReviewableAction'
import { Button } from '~/components/ui/button'
import { useState } from 'react'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState('Original text')

  const handleUpdate = async () => {
    // Your action here
    await updateContent(newContent)
    setContent(newContent)
    return { success: true }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Apply AI Suggestion</Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleUpdate}
        actionDescription="Update homepage hero text"
        proposedChanges={{
          type: 'text',
          before: content,
          after: 'New AI-suggested text',
          field: 'Hero Text',
        }}
        onApproved={result => console.log('Approved:', result)}
        onRejected={() => console.log('Rejected')}
      />
    </>
  )
}
```

## Using the Hook

For programmatic access, use the `useReviewableAction` hook:

```tsx
import { useReviewableAction } from '~/components/ReviewableAction'

function MyComponent() {
  const { requestApproval, ReviewableActionDialog } = useReviewableAction()

  const handleAISuggestion = () => {
    requestApproval(
      async () => {
        await updateContent(newContent)
        return { success: true }
      },
      {
        actionDescription: 'Apply AI-suggested changes',
        proposedChanges: {
          type: 'text',
          before: oldContent,
          after: newContent,
        },
        onApproved: result => console.log('Approved:', result),
      }
    )
  }

  return (
    <>
      <button onClick={handleAISuggestion}>Apply Suggestion</button>
      {ReviewableActionDialog}
    </>
  )
}
```

## Change Types

### Text Changes

```tsx
proposedChanges={{
  type: "text",
  before: "Old text",
  after: "New text",
  field: "Page Title", // Optional field name
}}
```

### File Changes

```tsx
proposedChanges={{
  type: "file",
  path: "app/lib/config.ts",
  operation: "update", // "create" | "update" | "delete"
  diff: `- old code\n+ new code`, // Optional diff view
  content: "file content", // Optional full content
}}
```

### Data Changes

```tsx
proposedChanges={{
  type: "data",
  before: { old: "value" },
  after: { new: "value" },
  field: "Configuration", // Optional field name
}}
```

### Batch Changes

```tsx
proposedChanges={{
  type: "batch",
  changes: [
    { type: "text", before: "old", after: "new" },
    { type: "file", path: "...", operation: "update" },
    // ... more changes
  ],
}}
```

## Props

| Prop                        | Type                        | Description                                               |
| --------------------------- | --------------------------- | --------------------------------------------------------- |
| `action`                    | `() => Promise<unknown>`    | The action to execute when approved                       |
| `actionDescription`         | `string`                    | Human-readable description of the action                  |
| `proposedChanges`           | `ProposedChange`            | The changes to review                                     |
| `onApproved`                | `(result: unknown) => void` | Callback when approved                                    |
| `onRejected`                | `() => void`                | Callback when rejected                                    |
| `onError`                   | `(error: Error) => void`    | Callback on execution error                               |
| `open`                      | `boolean`                   | Whether dialog is open (controlled)                       |
| `onOpenChange`              | `(open: boolean) => void`   | Dialog open state change handler                          |
| `warnings`                  | `string[]`                  | Array of warning messages                                 |
| `approveButtonText`         | `string`                    | Custom approve button text (default: "Approve & Execute") |
| `rejectButtonText`          | `string`                    | Custom reject button text (default: "Reject")             |
| `showDiff`                  | `boolean`                   | Show diff view for text changes (default: `true`)         |
| `requiresExtraConfirmation` | `boolean`                   | Require extra confirmation for destructive actions        |

## Advanced Features

### Destructive Actions

For actions that cannot be undone, use `requiresExtraConfirmation`:

```tsx
<ReviewableAction
  action={handleDelete}
  actionDescription="Delete this file"
  proposedChanges={{ type: 'file', path: '...', operation: 'delete' }}
  requiresExtraConfirmation={true}
  warnings={['This action cannot be undone']}
  approveButtonText="Yes, Delete"
/>
```

### Custom Warnings

Display safety warnings to users:

```tsx
<ReviewableAction
  warnings={[
    'This will update 5 pages',
    'Search engine indexing may take 24-48 hours',
    'All users will see the changes immediately',
  ]}
  // ... other props
/>
```

### Error Handling

Handle execution errors gracefully:

```tsx
<ReviewableAction
  action={async () => {
    const response = await fetch('/api/update')
    if (!response.ok) throw new Error('Update failed')
    return response.json()
  }}
  onError={error => {
    toast.error(`Action failed: ${error.message}`)
  }}
  // ... other props
/>
```

## Integration with Ambient AI

When using with Ambient AI or similar high-context AI systems:

1. **Generate Proposal**: Let AI generate proposed changes
2. **Request Approval**: Use `ReviewableAction` to show preview
3. **User Reviews**: User sees diff and approves/rejects
4. **Execute**: Action runs only after approval
5. **Audit**: All actions logged for review

Example flow:

```tsx
async function handleAISuggestion() {
  // 1. AI generates suggestion
  const suggestion = await ai.generateSuggestion(currentContent)

  // 2. Show review dialog
  requestApproval(
    async () => {
      // 3. Execute if approved
      return await applyChanges(suggestion)
    },
    {
      actionDescription: 'Apply AI-suggested content optimization',
      proposedChanges: {
        type: 'text',
        before: currentContent,
        after: suggestion.newContent,
      },
    }
  )
}
```

## Best Practices

1. **Always Show Preview**: Never skip the review step
2. **Clear Descriptions**: Use descriptive `actionDescription`
3. **Add Warnings**: Warn about irreversible actions
4. **Handle Errors**: Always provide `onError` callback
5. **Log Everything**: Use audit logs for compliance
6. **Test Destructive Actions**: Use extra confirmation for deletions

## Examples

See `ReviewableAction.example.tsx` for complete examples including:

- Text updates
- File operations
- Batch changes
- Destructive actions
- Hook usage
- Real-world scenarios

## Accessibility

The component is built on Radix UI primitives and includes:

- Keyboard navigation
- Screen reader support
- Focus management
- ARIA labels

## Performance

- Components are lazy-loaded when possible
- Diff rendering is optimized for large changes
- Batch operations show incremental previews

## Related

- Vercel Edge Functions: Configured for high-context AI workloads (see `vercel.json`)
- Audit Logging: All actions logged to console (can be extended to API)
- Error Boundaries: Integrate with React error boundaries for production use
