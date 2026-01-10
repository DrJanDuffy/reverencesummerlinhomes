/**
 * ReviewableAction Usage Examples
 *
 * This file demonstrates various use cases for the ReviewableAction component,
 * following the "Seatbelt Mindset" pattern for agent security.
 */

import {
  ReviewableAction,
  useReviewableAction,
} from '~/components/ReviewableAction'
import { Button } from '~/components/ui/button'
import { useState } from 'react'

/**
 * Example 1: Simple text content update
 */
export function TextUpdateExample() {
  const [isOpen, setIsOpen] = useState(false)
  const [heroText, setHeroText] = useState(
    'Welcome to Reverence Summerlin Homes'
  )

  const newHeroText =
    "Discover Your Dream Home in Las Vegas's Premier Community"

  const handleUpdate = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setHeroText(newHeroText)
    return { success: true }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Update Hero Text (AI Suggested)
      </Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleUpdate}
        actionDescription="Update homepage hero section text"
        proposedChanges={{
          type: 'text',
          before: heroText,
          after: newHeroText,
          field: 'Hero Text',
        }}
        onApproved={result => {
          console.log('Hero text updated:', result)
        }}
        onRejected={() => {
          console.log('Hero text update rejected')
        }}
        showDiff={true}
      />
    </>
  )
}

/**
 * Example 2: File operation (update configuration)
 */
export function FileUpdateExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleFileUpdate = async () => {
    // Simulate file update
    await new Promise(resolve => setTimeout(resolve, 1500))
    return { success: true, filePath: 'app/lib/config.ts' }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Update Configuration (AI Suggested)
      </Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleFileUpdate}
        actionDescription="Update site configuration file"
        proposedChanges={{
          type: 'file',
          path: 'app/lib/config.ts',
          operation: 'update',
          diff: `- export const siteUrl = "http://localhost:3000"
+ export const siteUrl = "https://reverencesummerlinhomes.com"
  
- export const phoneNumber = "(702) 555-0100"
+ export const phoneNumber = "(702) 930-8222"
  `,
        }}
        warnings={[
          'This will change the site URL globally',
          'Phone number will be updated',
        ]}
        onApproved={result => {
          console.log('Configuration updated:', result)
        }}
      />
    </>
  )
}

/**
 * Example 3: Batch changes (multiple updates)
 */
export function BatchUpdateExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBatchUpdate = async () => {
    // Simulate batch update
    await new Promise(resolve => setTimeout(resolve, 2000))
    return { success: true, changesApplied: 3 }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Apply Batch Updates (AI Suggested)
      </Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleBatchUpdate}
        actionDescription="Apply multiple SEO optimizations across pages"
        proposedChanges={{
          type: 'batch',
          changes: [
            {
              type: 'text',
              before: 'Welcome to Reference Summerlin',
              after: 'Welcome to Reverence Summerlin',
              field: 'Homepage Title',
            },
            {
              type: 'text',
              before: 'Dr. Janet Duffy',
              after: 'Dr. Jan Duffy',
              field: 'Agent Name',
            },
            {
              type: 'data',
              before: { phone: '(702) 555-0100' },
              after: { phone: '(702) 930-8222' },
              field: 'Contact Information',
            },
          ],
        }}
        warnings={[
          'Multiple pages will be updated',
          'Contact information will change globally',
        ]}
        onApproved={result => {
          console.log('Batch updates applied:', result)
        }}
      />
    </>
  )
}

/**
 * Example 4: Destructive action (with extra confirmation)
 */
export function DestructiveActionExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDelete = async () => {
    // Simulate deletion
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, deleted: true }
  }

  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Delete Old Content (AI Suggested)
      </Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleDelete}
        actionDescription="Remove deprecated content sections"
        proposedChanges={{
          type: 'file',
          path: 'app/routes/old-page.tsx',
          operation: 'delete',
        }}
        requiresExtraConfirmation={true}
        warnings={[
          'This action cannot be undone',
          'Content will be permanently removed',
        ]}
        approveButtonText="Yes, Delete"
        onApproved={result => {
          console.log('Content deleted:', result)
        }}
      />
    </>
  )
}

/**
 * Example 5: Using the hook for programmatic access
 */
export function HookExample() {
  const { requestApproval, ReviewableActionDialog, isOpen } =
    useReviewableAction()
  const [content, setContent] = useState('Original content')

  const handleAISuggestion = () => {
    const aiSuggestedContent = 'AI-optimized content with better SEO'

    requestApproval(
      async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setContent(aiSuggestedContent)
        return { success: true }
      },
      {
        actionDescription: 'Apply AI-suggested content optimization',
        proposedChanges: {
          type: 'text',
          before: content,
          after: aiSuggestedContent,
          field: 'Page Content',
        },
        onApproved: result => {
          console.log('Content updated:', result)
        },
      }
    )
  }

  return (
    <>
      <div>
        <p>Current content: {content}</p>
        <Button onClick={handleAISuggestion}>Apply AI Suggestion</Button>
      </div>
      {ReviewableActionDialog}
    </>
  )
}

/**
 * Example 6: Real-world scenario - SEO metadata update
 */
export function SEOMetadataUpdateExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMetadataUpdate = async () => {
    // Simulate metadata update
    await new Promise(resolve => setTimeout(resolve, 1500))
    return { success: true, updatedPages: 5 }
  }

  const oldMetadata = {
    title: 'Reverence Summerlin Homes | Real Estate',
    description: 'Find homes in Reverence Summerlin',
    keywords: 'real estate, homes, summerlin',
  }

  const newMetadata = {
    title: 'Reverence Summerlin Homes | Dr. Jan Duffy Real Estate',
    description:
      'Discover luxury homes in Reverence Summerlin with Dr. Jan Duffy. Expert real estate services in Las Vegas.',
    keywords:
      'reverence summerlin, las vegas real estate, dr jan duffy, luxury homes, pulte homes',
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Update SEO Metadata (AI Suggested)
      </Button>

      <ReviewableAction
        open={isOpen}
        onOpenChange={setIsOpen}
        action={handleMetadataUpdate}
        actionDescription="Update SEO metadata across multiple pages"
        proposedChanges={{
          type: 'data',
          before: oldMetadata,
          after: newMetadata,
          field: 'SEO Metadata',
        }}
        warnings={[
          'This will update SEO tags across 5 pages',
          'Search engine indexing may take 24-48 hours to reflect changes',
        ]}
        onApproved={result => {
          console.log('SEO metadata updated:', result)
        }}
        onRejected={() => {
          console.log('SEO metadata update cancelled')
        }}
        onError={error => {
          console.error('Failed to update SEO metadata:', error)
        }}
      />
    </>
  )
}
