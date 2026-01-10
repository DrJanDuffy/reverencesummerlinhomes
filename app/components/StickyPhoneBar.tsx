import { config } from '~/lib/config'
import { Phone } from 'lucide-react'

/**
 * Sticky Phone Bar Component
 *
 * Displays a fixed phone call button at the bottom of the screen on mobile devices.
 * Optimized for conversion with prominent orange styling and animated phone icon.
 *
 * @returns Mobile-only sticky phone bar with clickable phone number
 */
export function StickyPhoneBar() {
  return (
    <div className="sticky-phone-bar">
      <Phone className="w-6 h-6 text-white" />
      <a
        href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
        className="text-white font-bold text-lg hover:text-white/90 transition-colors"
      >
        Call Now: {config.contact.phone}
      </a>
    </div>
  )
}
