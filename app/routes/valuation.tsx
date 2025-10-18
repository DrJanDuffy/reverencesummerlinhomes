import { Form } from "react-router";
import type { Route } from "./+types/valuation";

export function meta() {
  return [
    { title: "Free Home Valuation | Dr. Janet Duffy" },
    { name: "description", content: "Get a free, accurate home valuation for your Las Vegas property. Dr. Janet Duffy provides comprehensive market analysis to help you understand your home's current value." },
    { name: "keywords", content: "home valuation Las Vegas, property value, home appraisal, Las Vegas home prices" },
    { property: "og:title", content: "Free Home Valuation | Dr. Janet Duffy" },
    { property: "og:description", content: "Get a free, accurate home valuation for your Las Vegas property. Dr. Janet Duffy provides comprehensive market analysis to help you understand your home's current value." },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  // In a real application, you would:
  // 1. Validate the form data
  // 2. Query MLS data for comparable properties
  // 3. Generate market analysis report
  // 4. Send detailed valuation report to user
  
  const address = formData.get("address");
  const city = formData.get("city");
  const zip = formData.get("zip");
  const bedrooms = formData.get("bedrooms");
  const bathrooms = formData.get("bathrooms");
  const squareFeet = formData.get("squareFeet");
  const yearBuilt = formData.get("yearBuilt");
  const propertyType = formData.get("propertyType");
  const ownerName = formData.get("ownerName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock valuation calculation (in real app, this would use actual market data)
  const baseValue = parseInt(squareFeet as string) * 180; // $180/sqft average
  const estimatedValue = Math.round(baseValue * (1 + Math.random() * 0.2 - 0.1)); // Add some variance
  
  return {
    success: true,
    estimatedValue,
    address: `${address}, ${city}, NV ${zip}`,
    message: "Your home valuation report has been generated and will be sent to your email within 24 hours."
  };
}

export default function Valuation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Home Valuation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an accurate estimate of your home's current market value with Dr. Janet Duffy's comprehensive valuation analysis. Receive a detailed report including comparable sales and market trends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Information</h2>
            <Form method="post" className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123 Main Street"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select City</option>
                    <option value="Las Vegas">Las Vegas</option>
                    <option value="Summerlin">Summerlin</option>
                    <option value="Henderson">Henderson</option>
                    <option value="North Las Vegas">North Las Vegas</option>
                    <option value="Boulder City">Boulder City</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="89134"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="duplex">Duplex</option>
                  <option value="multi-family">Multi-Family</option>
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms *
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Beds</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                    Bathrooms *
                  </label>
                  <select
                    id="bathrooms"
                    name="bathrooms"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Baths</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="squareFeet" className="block text-sm font-medium text-gray-700 mb-2">
                    Square Feet *
                  </label>
                  <input
                    type="number"
                    id="squareFeet"
                    name="squareFeet"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="2000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
                  Year Built
                </label>
                <input
                  type="number"
                  id="yearBuilt"
                  name="yearBuilt"
                  min="1900"
                  max="2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2010"
                />
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Get My Home Valuation
              </button>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Receive</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Accurate Market Value</h3>
                    <p>Professional analysis based on recent comparable sales in your area</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comparable Sales Report</h3>
                    <p>Detailed analysis of similar properties that have recently sold</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Market Trends</h3>
                    <p>Current market conditions and trends affecting your property value</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Selling Recommendations</h3>
                    <p>Tips to maximize your home's value and appeal to buyers</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose My Valuation?</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Deep knowledge of Las Vegas neighborhoods and market conditions ensures accurate valuations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Analysis</h3>
                  <p className="text-gray-600">
                    Detailed reports include multiple data points and market factors for complete accuracy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Obligation</h3>
                  <p className="text-gray-600">
                    Free valuation with no pressure to list or sell - just honest, professional advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          href="/valuation" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
