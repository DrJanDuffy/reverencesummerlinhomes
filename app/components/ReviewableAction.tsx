/**
 * ReviewableAction Component
 * 
 * Implements the "Seatbelt Mindset" pattern for agent security, allowing users
 * to review and approve AI-generated changes before they are committed.
 * 
 * This component provides a safety mechanism for AI actions by:
 * - Displaying a clear preview of proposed changes
 * - Requiring explicit user approval before execution
 * - Showing a diff/comparison view when applicable
 * - Providing undo capabilities where possible
 * - Logging all approvals/rejections for audit trails
 * 
 * @example
 * ```tsx
 * <ReviewableAction
 *   action={async () => await updateContent(newContent)}
 *   actionDescription="Update homepage hero text"
 *   proposedChanges={{
 *     type: "text",
 *     before: oldContent,
 *     after: newContent,
 *   }}
 *   onApproved={(result) => console.log("Change approved:", result)}
 *   onRejected={() => console.log("Change rejected")}
 * />
 * ```
 */

import * as React from "react"
import { AlertTriangle, CheckCircle2, XCircle, Eye, GitCompare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { cn } from "~/lib/utils"

/**
 * Types for proposed changes that can be reviewed
 */
export type ProposedChange =
  | {
      type: "text"
      before: string
      after: string
      field?: string
    }
  | {
      type: "file"
      path: string
      operation: "create" | "update" | "delete"
      content?: string
      diff?: string
    }
  | {
      type: "data"
      before: unknown
      after: unknown
      field?: string
    }
  | {
      type: "batch"
      changes: ProposedChange[]
    }

export interface ReviewableActionProps {
  /**
   * The action to execute when approved
   */
  action: () => Promise<unknown>

  /**
   * Human-readable description of what the action will do
   */
  actionDescription: string

  /**
   * Detailed explanation of the proposed changes
   */
  proposedChanges: ProposedChange

  /**
   * Callback when action is approved and executed successfully
   */
  onApproved?: (result: unknown) => void

  /**
   * Callback when action is rejected by user
   */
  onRejected?: () => void

  /**
   * Callback when action execution fails
   */
  onError?: (error: Error) => void

  /**
   * Whether the dialog is open
   */
  open?: boolean

  /**
   * Callback when dialog open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Additional safety warnings to display
   */
  warnings?: string[]

  /**
   * Custom approval button text
   */
  approveButtonText?: string

  /**
   * Custom reject button text
   */
  rejectButtonText?: string

  /**
   * Whether to show a diff view for text changes
   */
  showDiff?: boolean

  /**
   * Whether this action requires extra confirmation (e.g., destructive actions)
   */
  requiresExtraConfirmation?: boolean
}

/**
 * Simple text diff component (side-by-side comparison)
 */
function TextDiff({ before, after, field }: { before: string; after: string; field?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <XCircle className="h-4 w-4 text-destructive" />
            {field ? `Current: ${field}` : "Current"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64 whitespace-pre-wrap break-words">
            {before || "(empty)"}
          </pre>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-ctaSecondary-500" />
            {field ? `Proposed: ${field}` : "Proposed"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64 whitespace-pre-wrap break-words border-2 border-ctaSecondary-200">
            {after || "(empty)"}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * File operation preview component
 */
function FileChangePreview({ change }: { change: Extract<ProposedChange, { type: "file" }> }) {
  const { path, operation, content, diff } = change

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <GitCompare className="h-4 w-4" />
          File: {path}
        </CardTitle>
        <CardDescription>
          Operation: <span className="font-semibold capitalize">{operation}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {diff ? (
          <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64 whitespace-pre-wrap break-words font-mono">
            {diff}
          </pre>
        ) : content ? (
          <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64 whitespace-pre-wrap break-words">
            {content}
          </pre>
        ) : (
          <p className="text-sm text-muted-foreground">No content preview available</p>
        )}
      </CardContent>
    </Card>
  )
}

/**
 * Batch changes preview component
 */
function BatchChangesPreview({ changes }: { changes: ProposedChange[] }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        This action will make <span className="font-semibold">{changes.length}</span> changes:
      </p>
      <div className="space-y-3 max-h-96 overflow-auto">
        {changes.map((change, index) => (
          <Card key={index} className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="text-sm">Change {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              {change.type === "text" && (
                <TextDiff before={change.before} after={change.after} field={change.field} />
              )}
              {change.type === "file" && <FileChangePreview change={change} />}
              {change.type === "data" && (
                <div className="space-y-2">
                  {change.field && (
                    <p className="text-xs font-semibold">Field: {change.field}</p>
                  )}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-semibold mb-1">Before:</p>
                      <pre className="bg-muted p-2 rounded">
                        {JSON.stringify(change.before, null, 2)}
                      </pre>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">After:</p>
                      <pre className="bg-muted p-2 rounded border-2 border-ctaSecondary-200">
                        {JSON.stringify(change.after, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

/**
 * Main ReviewableAction component
 */
export function ReviewableAction({
  action,
  actionDescription,
  proposedChanges,
  onApproved,
  onRejected,
  onError,
  open: controlledOpen,
  onOpenChange,
  warnings = [],
  approveButtonText = "Approve & Execute",
  rejectButtonText = "Reject",
  showDiff = true,
  requiresExtraConfirmation = false,
}: ReviewableActionProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [isExecuting, setIsExecuting] = React.useState(false)
  const [extraConfirmOpen, setExtraConfirmOpen] = React.useState(false)

  // Use controlled or internal state
  const open = controlledOpen ?? internalOpen
  const setOpen = onOpenChange ?? setInternalOpen

  const handleApprove = React.useCallback(async () => {
    if (requiresExtraConfirmation && !extraConfirmOpen) {
      setExtraConfirmOpen(true)
      return
    }

    setIsExecuting(true)
    try {
      const result = await action()
      setOpen(false)
      setExtraConfirmOpen(false)
      onApproved?.(result)
      
      // Log approval for audit trail
      if (typeof window !== "undefined" && window.console) {
        console.log("[ReviewableAction] Approved:", {
          description: actionDescription,
          timestamp: new Date().toISOString(),
          result,
        })
      }
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error(String(error))
      onError?.(errorObj)
      console.error("[ReviewableAction] Execution error:", errorObj)
    } finally {
      setIsExecuting(false)
    }
  }, [
    action,
    actionDescription,
    onApproved,
    onError,
    setOpen,
    requiresExtraConfirmation,
    extraConfirmOpen,
  ])

  const handleReject = React.useCallback(() => {
    setOpen(false)
    setExtraConfirmOpen(false)
    onRejected?.()
    
    // Log rejection for audit trail
    if (typeof window !== "undefined" && window.console) {
      console.log("[ReviewableAction] Rejected:", {
        description: actionDescription,
        timestamp: new Date().toISOString(),
      })
    }
  }, [actionDescription, onRejected, setOpen])

  const renderChangePreview = () => {
    switch (proposedChanges.type) {
      case "text":
        return showDiff ? (
          <TextDiff
            before={proposedChanges.before}
            after={proposedChanges.after}
            field={proposedChanges.field}
          />
        ) : (
          <Card>
            <CardContent className="pt-6">
              <pre className="text-sm bg-muted p-4 rounded-md overflow-auto whitespace-pre-wrap">
                {proposedChanges.after}
              </pre>
            </CardContent>
          </Card>
        )

      case "file":
        return <FileChangePreview change={proposedChanges} />

      case "data":
        return (
          <div className="space-y-2">
            {proposedChanges.field && (
              <p className="text-sm font-semibold">Field: {proposedChanges.field}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Current</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64">
                    {JSON.stringify(proposedChanges.before, null, 2)}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Proposed</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-muted p-3 rounded-md overflow-auto max-h-64 border-2 border-ctaSecondary-200">
                    {JSON.stringify(proposedChanges.after, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "batch":
        return <BatchChangesPreview changes={proposedChanges.changes} />

      default:
        return (
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Preview not available for this change type
              </p>
            </CardContent>
          </Card>
        )
    }
  }

  return (
    <>
      {/* Main Review Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-accent-500" />
              Review AI-Generated Action
            </DialogTitle>
            <DialogDescription>{actionDescription}</DialogDescription>
          </DialogHeader>

          {/* Warnings */}
          {warnings.length > 0 && (
            <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  Warnings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-amber-900 dark:text-amber-100">
                  {warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Change Preview */}
          <div className="space-y-4">{renderChangePreview()}</div>

          {/* Seatbelt Message */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  <strong>Safety Check:</strong> Please review the proposed changes carefully
                  before approving. This action cannot be automatically undone.
                </span>
              </p>
            </CardContent>
          </Card>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={handleReject}
              disabled={isExecuting}
              className="flex-1 sm:flex-initial"
            >
              {rejectButtonText}
            </Button>
            <Button
              variant={requiresExtraConfirmation ? "secondary" : "default"}
              onClick={handleApprove}
              disabled={isExecuting}
              className="flex-1 sm:flex-initial"
            >
              {isExecuting ? "Executing..." : approveButtonText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Extra Confirmation Dialog (for destructive actions) */}
      {requiresExtraConfirmation && (
        <Dialog open={extraConfirmOpen} onOpenChange={setExtraConfirmOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Final Confirmation Required
              </DialogTitle>
              <DialogDescription>
                This action may have significant consequences. Are you absolutely sure you want to
                proceed?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setExtraConfirmOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleApprove} disabled={isExecuting}>
                {isExecuting ? "Executing..." : "Yes, Proceed"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

/**
 * Hook to use ReviewableAction programmatically
 */
export function useReviewableAction() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [pendingAction, setPendingAction] = React.useState<{
    action: () => Promise<unknown>
    props: Omit<ReviewableActionProps, "action" | "open" | "onOpenChange">
  } | null>(null)

  const requestApproval = React.useCallback(
    (
      action: () => Promise<unknown>,
      props: Omit<ReviewableActionProps, "action" | "open" | "onOpenChange">
    ) => {
      setPendingAction({ action, props })
      setIsOpen(true)
    },
    []
  )

  const ReviewableActionDialog = React.useMemo(() => {
    if (!pendingAction) return null

    return (
      <ReviewableAction
        {...pendingAction.props}
        action={pendingAction.action}
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open)
          if (!open) {
            // Reset after animation completes
            setTimeout(() => setPendingAction(null), 200)
          }
        }}
      />
    )
  }, [pendingAction, isOpen])

  return {
    requestApproval,
    ReviewableActionDialog,
    isOpen,
  }
}