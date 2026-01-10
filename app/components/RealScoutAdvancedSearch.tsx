import { useRef, useEffect } from 'react'

interface RealScoutAdvancedSearchProps {
  /**
   * Button text color
   * @default "#ffffff"
   */
  buttonTextColor?: string

  /**
   * Background color
   * @default "#ffffff"
   */
  backgroundColor?: string

  /**
   * Search button color
   * @default "#4a90e2"
   */
  searchButtonColor?: string

  /**
   * Widget width in pixels
   * @default 500
   */
  width?: number

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
}

/**
 * RealScout Advanced Search Widget Component
 *
 * Displays an advanced property search form with filters for neighborhood, city, school,
 * beds, baths, and price range. Perfect for capturing leads and helping users find properties.
 *
 * For maximum conversion, place this widget:
 * - Homepage: In hero section or immediately after (above fold)
 * - Properties page: Top of page as main search interface
 * - Buying page: Prominent placement for buyers to start search
 * - Communities pages: For area-specific searches
 * - Contact page: As a lead capture tool
 */
export function RealScoutAdvancedSearch({
  buttonTextColor = '#ffffff',
  backgroundColor = '#ffffff',
  searchButtonColor = '#4a90e2',
  width = 500,
  className = '',
  title,
  subtitle,
}: RealScoutAdvancedSearchProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    // Apply inline styles directly to the widget element once it's created
    // The web component will inherit these CSS custom properties
    const applyStyles = () => {
      if (!widgetRef.current) return

      const widgetElement = widgetRef.current.querySelector(
        'realscout-advanced-search'
      )
      if (widgetElement) {
        // Apply CSS custom properties via inline style
        ;(widgetElement as HTMLElement).style.setProperty(
          '--rs-as-button-text-color',
          buttonTextColor
        )
        ;(widgetElement as HTMLElement).style.setProperty(
          '--rs-as-background-color',
          backgroundColor
        )
        ;(widgetElement as HTMLElement).style.setProperty(
          '--rs-as-button-color',
          searchButtonColor
        )
        ;(widgetElement as HTMLElement).style.setProperty(
          '--rs-as-widget-width',
          `${width}px`
        )
      }
    }

    // Clear and set HTML
    widgetRef.current.innerHTML =
      '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>'

    // Try to apply styles immediately, then check periodically until widget loads
    applyStyles()

    const checkInterval = setInterval(() => {
      applyStyles()
      if (widgetRef.current?.querySelector('realscout-advanced-search')) {
        clearInterval(checkInterval)
      }
    }, 100)

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkInterval)
    }, 5000)

    return () => {
      clearInterval(checkInterval)
    }
  }, [buttonTextColor, backgroundColor, searchButtonColor, width])

  return (
    <div className={`realscout-advanced-search-widget ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6 text-center">
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

      <div className="flex justify-center w-full">
        <div
          ref={widgetRef}
          className="w-full"
          style={{ maxWidth: `${width}px` }}
        />
      </div>
    </div>
  )
}
