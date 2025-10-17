import { Link } from "react-router";
import { config } from "~/lib/config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary-400 mb-4">
              Reference Summerlin Homes
            </div>
            <p className="text-gray-300 mb-4">
              Dr. Janet Duffy specializes in Las Vegas real estate, focusing on Summerlin homes, 
              property valuations, and helping clients relocate to the Las Vegas Valley.
            </p>
            <div className="text-gray-300">
              <p>{config.contact.address}</p>
              <p>{config.contact.phone}</p>
              <p>{config.contact.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/buying" className="text-gray-300 hover:text-primary-400">Buying</Link></li>
              <li><Link to="/selling" className="text-gray-300 hover:text-primary-400">Selling</Link></li>
              <li><Link to="/relocate" className="text-gray-300 hover:text-primary-400">Relocate</Link></li>
              <li><Link to="/communities" className="text-gray-300 hover:text-primary-400">Communities</Link></li>
              <li><Link to="/valuation" className="text-gray-300 hover:text-primary-400">Property Valuation</Link></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Communities</h3>
            <ul className="space-y-2">
              <li><Link to="/communities/summerlin-west" className="text-gray-300 hover:text-primary-400">Summerlin West</Link></li>
              <li><Link to="/communities/luxury-homes" className="text-gray-300 hover:text-primary-400">Luxury Homes</Link></li>
              <li><Link to="/communities/the-ridges" className="text-gray-300 hover:text-primary-400">The Ridges</Link></li>
              <li><Link to="/communities/downtown-summerlin" className="text-gray-300 hover:text-primary-400">Downtown Summerlin</Link></li>
              <li><Link to="/communities/reverence-summerlin" className="text-gray-300 hover:text-primary-400">Reverence Summerlin</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Dr. Janet Duffy - Reference Summerlin Homes | All Rights Reserved
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm">Privacy Policy</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-primary-400 text-sm">Sitemap</Link>
            </div>
          </div>
          
          <div className="mt-4 text-gray-500 text-xs">
            <p>Licenses & Certifications:</p>
            <p>REALTOR: CRS, ABR, MRP, SFR, e-Pro | License # {config.contact.license}</p>
            <p>CRS (Certified Residential Specialist) | ABR (Accredited Buyers Representative)</p>
            <p>MRP (Military Relocation Professional) | SFR (Short Sales and Foreclosures Certified)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

