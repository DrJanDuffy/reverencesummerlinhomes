import { Link } from "react-router";
import { config } from "~/lib/config";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Summerlin and the Las Vegas Valley!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Interested in Summerlin Real Estate? Let's Talk - {config.contact.phone}
          </p>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-sm font-semibold mb-2">HGTV House Hunter</div>
              <div className="text-xs opacity-80">Featured Agent</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold mb-2">Las Vegas Review Journal</div>
              <div className="text-xs opacity-80">Readers Choice</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold mb-2">People Magazine</div>
              <div className="text-xs opacity-80">Featured Realtor</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Meet Dr. Janet Duffy
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

