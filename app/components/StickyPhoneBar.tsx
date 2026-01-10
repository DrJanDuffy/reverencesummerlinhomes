import { memo, useMemo } from 'react'
import { config } from '~/lib/config'
import { Phone } from 'lucide-react'

/**
 * Sticky Phone Bar Component
 *
 * Displays a fixed phone call button at the bottom of the screen on mobile devices.
 * Optimized for conversion with prominent orange styling and animated phone icon.
 *
 * Uses React 19 memo for performance optimization - only re-renders when config changes.
 *
 * @returns Mobile-only sticky phone bar with clickable phone number
 */
export const StickyPhoneBar = memo(function StickyPhoneBar() {
  // Memoize phone number formatting (React 19 optimization)
  const phoneHref = useMemo(
    () => `tel:+1${config.contact.phone.replace(/\D/g, '')}`,
    []
  )

  return (
    <div className="sticky-phone-bar">
      <Phone className="w-6 h-6 text-white" />
      <a
        href={phoneHref}
        className="text-white font-bold text-lg hover:text-white/90 transition-colors"
        aria-label={`Call ${config.contact.phone}`}
      >
        Call Now: {config.contact.phone}
      </a>
    </div>
  )
})
