import { Link, NavLink } from "react-router";
import { useState } from "react";
import { config } from "~/lib/config";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Award,
  Shield,
  Star
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-border">
      {/* Top Bar with Partnerships */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certified Summerlin Specialist</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Featured Pulte Homes Agent</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-1 hover:text-accent-light transition-colors"
                aria-label={`Call ${config.contact.phone}`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">{config.contact.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a 
                href={`mailto:${config.contact.email}`}
                className="flex items-center gap-1 hover:text-accent-light transition-colors"
                aria-label={`Email ${config.contact.email}`}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Email</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">
                  Dr. Jan Duffy
                </div>
                <div className="text-sm text-muted-foreground">
                  Real Estate Expert
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`
              }
            >
              Home
            </NavLink>
            
            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center gap-1">
                Buying
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <div className="py-2">
                  <Link to="/buying" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Buying a New Home</Link>
                  <Link to="/buying/new-home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">New Construction</Link>
                  <Link to="/buying/military-veterans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Military & Veterans</Link>
                  <Link to="/buying/mortgage-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Mortgage Calculator</Link>
                  <Link to="/buying/financing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Get Financing</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center gap-1">
                Selling
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <div className="py-2">
                  <Link to="/selling" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Marketing Your Home</Link>
                  <Link to="/selling/foreclosure-avoidance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Foreclosure Avoidance</Link>
                  <Link to="/selling/short-sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Short Sales</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center gap-1">
                Communities
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-primary-600" />
                      <span className="text-sm font-semibold text-primary-600">Featured Community</span>
                    </div>
                    <Link to="/communities/monument-at-reverence" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 font-medium">
                      Monument at Reverence
                    </Link>
                  </div>
                  <Link to="/communities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">All Communities</Link>
                  <Link to="/communities/summerlin-west" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Summerlin West</Link>
                  <Link to="/communities/downtown-summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Downtown Summerlin</Link>
                  <Link to="/communities/the-ridges" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">The Ridges</Link>
                  <Link to="/communities/luxury-homes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Luxury Homes</Link>
                  <Link to="/communities/new-construction" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">New Construction</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center gap-1">
                Relocate
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <div className="py-2">
                  <Link to="/relocate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Relocation Services</Link>
                  <Link to="/relocate/summerlin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Relocate to Summerlin</Link>
                  <Link to="/relocate/california" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">From California</Link>
                  <Link to="/relocate/seattle" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">From Seattle</Link>
                  <Link to="/relocate/new-york" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">From New York</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-border">
                <div className="py-2">
                  <Link to="/resources/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Blog</Link>
                  <Link to="/resources/youtube" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">YouTube Channel</Link>
                  <Link to="/resources/schools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Schools</Link>
                  <Link to="/resources/golf-courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">Golf Courses</Link>
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/valuation">Get Home Value</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-md mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">Buying</div>
                <div className="pl-4 space-y-1">
                  <Link to="/buying" className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">Buying a New Home</Link>
                  <Link to="/buying/new-home" className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">New Construction</Link>
                  <Link to="/buying/military-veterans" className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">Military & Veterans</Link>
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">Communities</div>
                <div className="pl-4 space-y-1">
                  <Link to="/communities/monument-at-reverence" className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary-600" />
                      <span>Monument at Reverence</span>
                    </div>
                  </Link>
                  <Link to="/communities" className="block px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">All Communities</Link>
                </div>
              </div>
              
              <Link to="/relocate" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">Relocate</Link>
              <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">Resources</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-md">Contact</Link>
              
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col gap-2">
                  <Button className="w-full" asChild>
                    <Link to="/contact">Contact Dr. Jan</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/valuation">Get Home Value</Link>
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}
                    className="text-accent-500 font-bold hover:text-accent-600 transition-colors phone-cta"
                    aria-label={`Call ${config.contact.phone}`}
                  >
                    <Phone className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    {config.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

