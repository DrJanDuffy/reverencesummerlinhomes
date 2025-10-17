import { Link } from "react-router";
import { useState } from "react";
import { config } from "~/lib/config";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary-600">
                Reference Summerlin Homes
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>
            
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                Buying
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/buying" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Buying a New Home</Link>
                  <Link to="/buying/military-veterans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Active Duty Military & Veterans</Link>
                  <Link to="/buying/mortgage-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mortgage Calculator</Link>
                  <Link to="/buying/financing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Get Financing Now</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                Selling
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/selling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Marketing Your Home</Link>
                  <Link to="/selling/foreclosure-avoidance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Foreclosure Avoidance</Link>
                  <Link to="/selling/short-sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Las Vegas Short Sales</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                Relocate
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/relocate/summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate to Summerlin</Link>
                  <Link to="/relocate/california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How Do I Move Out of California?</Link>
                  <Link to="/relocate/los-angeles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocating from Los Angeles</Link>
                  <Link to="/relocate/san-francisco" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate from San Francisco</Link>
                  <Link to="/relocate/new-york" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate from New York</Link>
                  <Link to="/relocate/seattle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate from Seattle</Link>
                  <Link to="/relocate/phoenix" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate from Phoenix</Link>
                  <Link to="/relocate/chicago" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Relocate from Chicago</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                Communities
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/communities/ascension-summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ascension Summerlin</Link>
                  <Link to="/communities/astra-la-madre-peaks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Astra at La Madre Peaks</Link>
                  <Link to="/communities/summerlin-west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summerlin West</Link>
                  <Link to="/communities/luxury-homes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summerlin Luxury Homes</Link>
                  <Link to="/communities/the-ridges" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">The Ridges Summerlin</Link>
                  <Link to="/communities/red-rock-country-club" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Red Rock Country Club</Link>
                  <Link to="/communities/new-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New Construction Homes</Link>
                  <Link to="/communities/mesa-ridge" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mesa Ridge Summerlin</Link>
                  <Link to="/communities/the-peaks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">The Peaks Summerlin</Link>
                  <Link to="/communities/downtown-summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Downtown Summerlin</Link>
                  <Link to="/communities/reverence-summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reverence Summerlin</Link>
                  <Link to="/communities/kestrel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kestrel & Kestrel Commons</Link>
                  <Link to="/communities/skye-canyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Skye Canyon Las Vegas</Link>
                  <Link to="/communities/henderson" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Henderson Real Estate</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                  <Link to="/resources/youtube" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">YouTube Channel</Link>
                  <Link to="/resources/golf-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summerlin Golf Courses</Link>
                  <Link to="/resources/schools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Schools in Summerlin</Link>
                  <Link to="/resources/trails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summerlin Trail System</Link>
                  <Link to="/resources/tennis-pickleball" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tennis & Pickleball Courts</Link>
                  <Link to="/resources/pools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Summerlin Community Pools</Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`
              }
            >
              About Dr. Janet
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              {config.contact.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-md mt-2">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Home</Link>
              <Link to="/buying" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Buying</Link>
              <Link to="/selling" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Selling</Link>
              <Link to="/relocate" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Relocate</Link>
              <Link to="/communities" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Communities</Link>
              <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Resources</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">About Dr. Janet</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600">Contact</Link>
              <a href={`tel:${config.contact.phone}`} className="block px-3 py-2 text-base font-medium text-primary-600">{config.contact.phone}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

