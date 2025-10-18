import type { Route } from "./+types/selling-index";

export function meta() {
  return [
    { title: "Selling Your Home in Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Expert guidance for selling your home in Las Vegas and Summerlin. Dr. Janet Duffy provides comprehensive selling services including marketing, pricing strategy, and foreclosure avoidance." },
    { name: "keywords", content: "sell home Las Vegas, Summerlin real estate, home selling, Las Vegas home sales, real estate agent" },
    { property: "og:title", content: "Selling Your Home in Las Vegas | Dr. Janet Duffy" },
    { property: "og:description", content: "Expert guidance for selling your home in Las Vegas and Summerlin. Dr. Janet Duffy provides comprehensive selling services including marketing, pricing strategy, and foreclosure avoidance." },
  ];
}

export default function SellingIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Selling Your Home in Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your home's value and minimize stress with Dr. Janet Duffy's comprehensive selling services. From pricing strategy to marketing and closing, I'll guide you through every step of the selling process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analysis</h3>
            <p className="text-gray-600 mb-4">
              Get a comprehensive market analysis to determine the optimal listing price for your home.
            </p>
            <a href="/selling/marketing" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Foreclosure Avoidance</h3>
            <p className="text-gray-600 mb-4">
              Explore options to avoid foreclosure including short sales, loan modifications, and other alternatives.
            </p>
            <a href="/selling/foreclosure-avoidance" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Short Sales</h3>
            <p className="text-gray-600 mb-4">
              Navigate the short sale process with expert guidance and lender negotiation support.
            </p>
            <a href="/selling/short-sales" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Market Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Las Vegas market trends, neighborhood values, and buyer preferences to maximize your sale price.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Marketing</h3>
              <p className="text-gray-600">
                Comprehensive marketing strategy including professional photography, virtual tours, and targeted advertising campaigns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Negotiation Skills</h3>
              <p className="text-gray-600">
                Expert negotiation to secure the best possible terms and price for your home sale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stress-Free Process</h3>
              <p className="text-gray-600">
                Handle all the details so you can focus on your next move while we manage the sale process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Your Home's Value
          </a>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
        <a 
          href="/selling" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Selling Guide
        </a>
      </div>
    </div>
  );
}
