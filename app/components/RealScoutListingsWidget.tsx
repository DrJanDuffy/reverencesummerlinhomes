import { useEffect, useRef } from 'react'
import {
  generateRealScoutWidgetHTML,
  type RealScoutListingsOptions,
} from '~/lib/mcp'

interface RealScoutListingsWidgetProps {
  /**
   * Sort order for listings
   * @default "NEWEST"
   */
  sortOrder?:
    | 'NEWEST'
    | 'PRICE_LOW_TO_HIGH'
    | 'PRICE_HIGH_TO_LOW'
    | 'SQUARE_FEET'
    | 'BEDS'
    | 'BATHS'

  /**
   * Listing statuses to display (comma-separated)
   * @default "For Sale"
   */
  listingStatus?: string

  /**
   * Property types (comma-separated, e.g., ",SFR" for Single Family Residence)
   * @default ",SFR"
   */
  propertyTypes?: string

  /**
   * Minimum price filter
   */
  priceMin?: number

  /**
   * Maximum price filter
   */
  priceMax?: number

  /**
   * Custom CSS class name
   */
  className?: string

  /**
   * Title to display above the widget
   */
  title?: string

  /**
   * Subtitle to display above the widget
   */
  subtitle?: string

  /**
   * Agent encoded ID (optional, will use MCP config if not provided)
   */
  agentEncodedId?: string
}

/**
 * RealScout Office Listings Widget Component
 *
 * Displays active property listings from RealScout.
 * The script is loaded once in root.tsx, so this component only renders the widget element.
 *
 * For maximum conversion, place this widget:
 * - Homepage: After hero section
 * - Properties page: Main content area
 * - Buying pages: After initial content
 * - Communities pages: After community description
 * - Contact/Valuation pages: To show inventory and create urgency
 */
export function RealScoutListingsWidget({
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR',
  priceMin,
  priceMax,
  className = '',
  title,
  subtitle,
  agentEncodedId,
}: RealScoutListingsWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    // Use MCP utility to generate widget HTML with managed configuration
    const widgetOptions: RealScoutListingsOptions = {
      agentEncodedId,
      sortOrder,
      listingStatus,
      propertyTypes,
      priceMin,
      priceMax,
    }

    const widgetHTML = generateRealScoutWidgetHTML(widgetOptions)

    // Clear and set HTML
    widgetRef.current.innerHTML = widgetHTML

    // Web components will hydrate once the script loads
    // No need to manually create elements - the script handles it
  }, [
    sortOrder,
    listingStatus,
    propertyTypes,
    priceMin,
    priceMax,
    agentEncodedId,
  ])

  return (
    <div className={`realscout-listings-widget py-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div ref={widgetRef} className="w-full" />
    </div>
  )
}
