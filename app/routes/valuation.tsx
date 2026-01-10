import { Form } from 'react-router'
import type { Route } from './+types/valuation'
import { config } from '~/lib/config'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { Card, CardContent } from '~/components/ui/card'
import { trackAIFeature, type AIFeatureType } from '~/lib/logging'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/valuation` }]
}

export function meta() {
  return [
    { title: 'Free Home Valuation | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        "Get a free, accurate home valuation for your Las Vegas property. Dr. Jan Duffy provides comprehensive market analysis to help you understand your home's current value.",
    },
    {
      name: 'keywords',
      content:
        'home valuation Las Vegas, property value, home appraisal, Las Vegas home prices',
    },
    { property: 'og:title', content: 'Free Home Valuation | Dr. Jan Duffy' },
    {
      property: 'og:description',
      content:
        "Get a free, accurate home valuation for your Las Vegas property. Dr. Jan Duffy provides comprehensive market analysis to help you understand your home's current value.",
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/valuation` },
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()

  // Extract form data (sanitized for logging)
  const address = formData.get('address')
  const city = formData.get('city')
  const zip = formData.get('zip')
  const bedrooms = formData.get('bedrooms')
  const bathrooms = formData.get('bathrooms')
  const squareFeet = formData.get('squareFeet')
  const yearBuilt = formData.get('yearBuilt')
  const propertyType = formData.get('propertyType')
  const ownerName = formData.get('ownerName')
  const email = formData.get('email')
  const phone = formData.get('phone')

  // Track AI-driven valuation calculation with full provenance
  const result = await trackAIFeature<{
    success: boolean
    estimatedValue: number
    address: string
    message: string
  }>(
    'valuation_calculation' as AIFeatureType,
    request,
    async () => {
      // In a real application, you would:
      // 1. Validate the form data
      // 2. Query MLS data for comparable properties (potentially using AI for analysis)
      // 3. Generate market analysis report (potentially using AI for insights)
      // 4. Send detailed valuation report to user

      // Simulate processing delay (in real app, this might include AI processing)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock valuation calculation (in real app, this would use actual market data)
      // This could use AI for:
      // - Comparable property analysis
      // - Market trend prediction
      // - Personalized valuation insights
      const baseValue = parseInt(squareFeet as string) * 180 // $180/sqft average
      const estimatedValue = Math.round(
        baseValue * (1 + Math.random() * 0.2 - 0.1)
      ) // Add some variance

      return {
        success: true,
        estimatedValue,
        address: `${address}, ${city}, NV ${zip}`,
        message:
          'Your home valuation report has been generated and will be sent to your email within 24 hours.',
      }
    },
    {
      input: {
        city,
        zip,
        bedrooms,
        bathrooms,
        squareFeet,
        yearBuilt,
        propertyType,
        hasAddress: !!address,
      },
      metadata: {
        formType: 'valuation',
        route: '/valuation',
        calculationType: 'estimated',
      },
      // If using AI services with token costs, implement token tracking:
      // tokenTracker: async (result) => {
      //   // Calculate tokens used for AI analysis (prompt + completion)
      //   // Example: property analysis prompt + market insights completion
      //   return {
      //     prompt: 500, // Property data + market context
      //     completion: 300, // Analysis and recommendations
      //     model: 'gpt-4',
      //     cost: 0.024, // Estimated cost in USD based on token usage
      //   };
      // },
    }
  )

  return result
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
            Get an accurate estimate of your home's current market value with
            Dr. Jan Duffy's comprehensive valuation analysis. Receive a detailed
            report including comparable sales and market trends.
          </p>
        </div>

        {/* Advanced Search Widget - Alternative Lead Capture */}
        <div className="mb-12">
          <Card className="shadow-xl border-4 border-accent-500">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Or Search for Similar Properties"
                subtitle="Browse available homes while you're here. Find properties matching your criteria to help inform your home's value."
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="valuation-form-container relative bg-white rounded-2xl shadow-xl p-8 border-4 border-accent-500">
            <div className="absolute -top-3 right-6 bg-accent-500 text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide shadow-cta">
              FREE
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Property Information
            </h2>
            <p className="text-gray-500 text-sm mb-6 subtitle">
              Get your free home valuation in minutes
            </p>
            <Form method="post" className="space-y-6 valuation-form">
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
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
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="89134"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="propertyType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Property Type *
                </label>
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
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
                  <label
                    htmlFor="bedrooms"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Bedrooms *
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
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
                  <label
                    htmlFor="bathrooms"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Bathrooms *
                  </label>
                  <select
                    id="bathrooms"
                    name="bathrooms"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
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
                  <label
                    htmlFor="squareFeet"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Square Feet *
                  </label>
                  <input
                    type="number"
                    id="squareFeet"
                    name="squareFeet"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    placeholder="2000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="yearBuilt"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Year Built
                </label>
                <input
                  type="number"
                  id="yearBuilt"
                  name="yearBuilt"
                  min="1900"
                  max="2024"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  placeholder="2010"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="ownerName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent-500 via-accent-500 to-accent-light text-white py-4 px-6 rounded-lg hover:from-accent-600 hover:via-accent-600 hover:to-accent-500 hover:-translate-y-0.5 active:translate-y-0 transition-all font-bold text-lg uppercase tracking-wide shadow-cta hover:shadow-cta-hover"
              >
                Get My Home Valuation
              </button>
            </Form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Receive
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Accurate Market Value
                    </h3>
                    <p>
                      Professional analysis based on recent comparable sales in
                      your area
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Comparable Sales Report
                    </h3>
                    <p>
                      Detailed analysis of similar properties that have recently
                      sold
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Market Trends
                    </h3>
                    <p>
                      Current market conditions and trends affecting your
                      property value
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3 mt-1 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Selling Recommendations
                    </h3>
                    <p>
                      Tips to maximize your home's value and appeal to buyers
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose My Valuation?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Deep knowledge of Las Vegas neighborhoods and market
                    conditions ensures accurate valuations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Comprehensive Analysis
                  </h3>
                  <p className="text-gray-600">
                    Detailed reports include multiple data points and market
                    factors for complete accuracy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Obligation
                  </h3>
                  <p className="text-gray-600">
                    Free valuation with no pressure to list or sell - just
                    honest, professional advice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Listings - Show available inventory to create urgency */}
          <div className="mt-16">
            <RealScoutListingsWidget
              sortOrder="NEWEST"
              listingStatus="For Sale"
              propertyTypes=",SFR"
              priceMin={300000}
              priceMax={2000000}
              title="Explore Similar Properties"
              subtitle="See what's currently available in the Las Vegas and Summerlin market. These listings may help inform your home's value."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but there was an error loading this page.
        </p>
        <a
          href="/valuation"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Try Again
        </a>
      </div>
    </div>
  )
}
