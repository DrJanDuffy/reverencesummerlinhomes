import { Link } from "react-router";
import { config } from "~/lib/config";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-accent mb-4 border-b-2 border-accent pb-2 inline-block">
              Reverence Summerlin Homes
            </div>
            <p className="text-white/90 mb-4">
              Dr. Jan Duffy specializes in Las Vegas real estate, focusing on Summerlin homes, 
              property valuations, and helping clients relocate to the Las Vegas Valley.
            </p>
            <div className="text-white/90">
              <p>{config.agent.office.fullAddress}</p>
              <p><a href={`tel:${config.contact.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{config.contact.phone}</a></p>
              <p><a href={`mailto:${config.contact.email}`} className="hover:text-accent transition-colors">{config.contact.email}</a></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-accent pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/buying" className="text-white/90 hover:text-accent transition-colors">Buying</Link></li>
              <li><Link to="/selling" className="text-white/90 hover:text-accent transition-colors">Selling</Link></li>
              <li><Link to="/relocate" className="text-white/90 hover:text-accent transition-colors">Relocate</Link></li>
              <li><Link to="/communities" className="text-white/90 hover:text-accent transition-colors">Communities</Link></li>
              <li><Link to="/valuation" className="text-white/90 hover:text-accent transition-colors">Property Valuation</Link></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-accent pb-2 inline-block">Communities</h3>
            <ul className="space-y-2">
              <li><Link to="/communities/summerlin-west" className="text-white/90 hover:text-accent transition-colors">Summerlin West</Link></li>
              <li><Link to="/communities/luxury-homes" className="text-white/90 hover:text-accent transition-colors">Luxury Homes</Link></li>
              <li><Link to="/communities/the-ridges" className="text-white/90 hover:text-accent transition-colors">The Ridges</Link></li>
              <li><Link to="/communities/downtown-summerlin" className="text-white/90 hover:text-accent transition-colors">Downtown Summerlin</Link></li>
              <li><Link to="/communities/reverence-summerlin" className="text-white/90 hover:text-accent transition-colors">Reverence Summerlin</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm">
              © 2025 Dr. Jan Duffy - Reverence Summerlin Homes | All Rights Reserved
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/80 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
              <Link to="/sitemap" className="text-white/80 hover:text-accent text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
          
          <div className="mt-4 text-white/70 text-xs">
            <p>Licenses & Certifications:</p>
            <p>REALTOR: CRS, ABR, MRP, SFR, e-Pro | License # {config.agent.license}</p>
            <p>CRS (Certified Residential Specialist) | ABR (Accredited Buyers Representative)</p>
            <p>MRP (Military Relocation Professional) | SFR (Short Sales and Foreclosures Certified)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

