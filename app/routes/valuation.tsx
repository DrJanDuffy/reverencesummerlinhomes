import type { Route } from './+types/valuation'
import { config } from '~/lib/config'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { RealScoutHomeValueWidget } from '~/components/RealScoutHomeValueWidget'
import { Card, CardContent } from '~/components/ui/card'

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

export default function Valuation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What's my home worth?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a free home value estimate instantly
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
          <div className="valuation-widget-container relative bg-white rounded-2xl shadow-xl p-8 border-4 border-accent-500">
            <div className="absolute -top-3 right-6 bg-accent-500 text-white px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide shadow-cta">
              FREE
            </div>
            {/* RealScout Home Value Widget */}
            <RealScoutHomeValueWidget
              className="w-full"
              includeName={true}
              includePhone={true}
            />
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
