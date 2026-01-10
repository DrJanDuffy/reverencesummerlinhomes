import { Link } from 'react-router'
import { config } from '~/lib/config'

export function Footer() {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gold-light mb-4 border-b-2 border-gold-light pb-2 inline-block">
              Reverence Summerlin Homes
            </div>
            <p className="text-white/95 mb-4 leading-relaxed">
              Dr. Jan Duffy specializes in Las Vegas real estate, focusing on
              Summerlin homes, property valuations, and helping clients relocate
              to the Las Vegas Valley.
            </p>
            <div className="text-white/95 mb-4">
              <p className="font-semibold text-white text-base">
                {config.agent.name}
              </p>
              <p className="text-sm text-white/95">
                Las Vegas Real Estate Expert
              </p>
              <p className="text-sm font-medium text-gold-light mt-2">
                Berkshire Hathaway HomeServices Nevada Properties
              </p>
              <p className="text-xs text-white/80 mt-1">
                License # {config.agent.license}
              </p>
            </div>
            <div className="text-white/95">
              <p className="text-white/95">{config.agent.office.fullAddress}</p>
              <p className="mt-2">
                <a
                  href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
                  className="text-gold-light font-bold text-lg hover:text-gold transition-colors phone-cta"
                  aria-label={`Call ${config.contact.phone}`}
                >
                  {config.contact.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={`mailto:${config.contact.email}`}
                  className="text-white/95 hover:text-gold-light transition-colors"
                  aria-label={`Email ${config.contact.email}`}
                >
                  {config.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gold-light pb-2 inline-block text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/buying"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Buying
                </Link>
              </li>
              <li>
                <Link
                  to="/selling"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Selling
                </Link>
              </li>
              <li>
                <Link
                  to="/relocate"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Relocate
                </Link>
              </li>
              <li>
                <Link
                  to="/communities"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Communities
                </Link>
              </li>
              <li>
                <Link
                  to="/valuation"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Property Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-gold-light pb-2 inline-block text-white">
              Communities
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/communities/summerlin-west"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Summerlin West
                </Link>
              </li>
              <li>
                <Link
                  to="/communities/luxury-homes"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Luxury Homes
                </Link>
              </li>
              <li>
                <Link
                  to="/communities/the-ridges"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  The Ridges
                </Link>
              </li>
              <li>
                <Link
                  to="/communities/downtown-summerlin"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Downtown Summerlin
                </Link>
              </li>
              <li>
                <Link
                  to="/communities/reverence-summerlin"
                  className="text-white/95 hover:text-gold-light transition-colors"
                >
                  Reverence Summerlin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/90 text-sm">
              © 2025 Dr. Jan Duffy - Reverence Summerlin Homes | All Rights
              Reserved
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-white/90 hover:text-gold-light text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/sitemap"
                className="text-white/90 hover:text-gold-light text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          <div className="mt-4 text-white/85 text-xs leading-relaxed">
            <p className="font-semibold text-white mb-2">
              Licenses & Certifications:
            </p>
            <p className="text-white/90">
              REALTOR: CRS, ABR, MRP, SFR, e-Pro | License #{' '}
              {config.agent.license}
            </p>
            <p className="text-white/90">
              CRS (Certified Residential Specialist) | ABR (Accredited Buyers
              Representative)
            </p>
            <p className="text-white/90">
              MRP (Military Relocation Professional) | SFR (Short Sales and
              Foreclosures Certified)
            </p>
            <p className="mt-2 pt-2 border-t border-white/20 text-white/90">
              <span className="font-semibold text-white">
                {config.agent.name}
              </span>{' '}
              | Las Vegas Real Estate Expert
              <br />
              Berkshire Hathaway HomeServices Nevada Properties
              <br />
              License # {config.agent.license}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
