import { useEffect, useRef } from 'react'
import { getRealScoutAgentId } from '~/lib/mcp'

interface RealScoutHomeValueWidgetProps {
  /**
   * Custom CSS class name
   */
  className?: string

  /**
   * Agent encoded ID (optional, will use MCP config if not provided)
   */
  agentEncodedId?: string

  /**
   * Include first and last name fields
   * @default true
   */
  includeName?: boolean

  /**
   * Include phone number field
   * @default true
   */
  includePhone?: boolean
}

/**
 * RealScout Home Value Widget Component
 *
 * Displays the home valuation widget from RealScout.
 * The script is loaded once in root.tsx, so this component only renders the widget element.
 *
 * Features:
 * - Instant home value estimates
 * - Professional market analysis
 * - Lead capture for Dr. Jan Duffy
 * - Fully customizable styling
 */
export function RealScoutHomeValueWidget({
  className = '',
  agentEncodedId,
  includeName = true,
  includePhone = true,
}: RealScoutHomeValueWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    const agentId = agentEncodedId || getRealScoutAgentId()

    // Build attribute string for the web component
    const attributes: string[] = [`agent-encoded-id="${agentId}"`]

    if (includeName) {
      attributes.push('include-name')
    }

    if (includePhone) {
      attributes.push('include-phone')
    }

    const widgetHTML = `<realscout-home-value ${attributes.join(' ')}></realscout-home-value>`

    // Clear and set HTML
    widgetRef.current.innerHTML = widgetHTML

    // Web components will hydrate once the script loads
    // No need to manually create elements - the script handles it
  }, [agentEncodedId, includeName, includePhone])

  return (
    <div
      ref={widgetRef}
      className={`realscout-home-value-widget ${className}`}
    />
  )
}
