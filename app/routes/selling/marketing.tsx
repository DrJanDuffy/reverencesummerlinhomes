import type { Route } from "./+types/selling-marketing";

export function meta() {
  return [
    { title: "Home Marketing Services | Dr. Jan Duffy" },
    { name: "description", content: "Professional home marketing services in Las Vegas. Dr. Jan Duffy provides comprehensive marketing strategies including photography, virtual tours, and targeted advertising." },
    { name: "keywords", content: "home marketing Las Vegas, real estate marketing, home photography, virtual tours Las Vegas" },
    { property: "og:title", content: "Home Marketing Services | Dr. Jan Duffy" },
    { property: "og:description", content: "Professional home marketing services in Las Vegas. Dr. Jan Duffy provides comprehensive marketing strategies including photography, virtual tours, and targeted advertising." },
  ];
}

export default function Marketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Home Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stand out in the competitive Las Vegas real estate market with Dr. Jan Duffy's comprehensive marketing services. From professional photography to virtual tours and targeted advertising, I'll ensure your home gets maximum exposure to qualified buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Photography</h3>
            <p className="text-gray-600">
              High-quality photography showcasing your home's best features and creating an emotional connection with potential buyers.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Virtual Tours</h3>
            <p className="text-gray-600">
              Interactive 360-degree virtual tours allowing buyers to explore your home from anywhere, increasing engagement and interest.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Drone Photography</h3>
            <p className="text-gray-600">
              Aerial views highlighting your property's location, lot size, and proximity to amenities like golf courses and mountains.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Marketing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Online Presence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• MLS listing with professional photos</li>
                <li>• Featured listings on major real estate websites</li>
                <li>• Social media marketing campaigns</li>
                <li>• Targeted online advertising</li>
                <li>• Virtual tour integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Marketing</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Professional signage and yard signs</li>
                <li>• Print advertising in local publications</li>
                <li>• Open house events</li>
                <li>• Broker and agent networking</li>
                <li>• Direct mail campaigns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Professional Marketing Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">First Impressions Count</h3>
              <p className="text-gray-600">
                Professional photos and marketing materials create a strong first impression that attracts serious buyers and increases showings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Faster Sales</h3>
              <p className="text-gray-600">
                Well-marketed homes sell faster and often for higher prices due to increased buyer interest and competition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum Exposure</h3>
              <p className="text-gray-600">
                Comprehensive marketing ensures your home reaches the widest possible audience of qualified buyers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stand out from other listings with professional marketing that highlights your home's unique features and value.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Marketing Your Home
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
