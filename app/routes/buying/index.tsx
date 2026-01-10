import type { Route } from './+types/buying-index'
import { config } from '~/lib/config'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { Card, CardContent } from '~/components/ui/card'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/buying` }]
}

export function meta() {
  return [
    { title: 'Buying a Home in Las Vegas | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        'Expert guidance for buying a home in Las Vegas and Summerlin. Dr. Jan Duffy provides personalized assistance for first-time buyers, military veterans, and relocating families.',
    },
    {
      name: 'keywords',
      content:
        'buy home Las Vegas, Summerlin real estate, first time home buyer, Las Vegas homes for sale',
    },
    {
      property: 'og:title',
      content: 'Buying a Home in Las Vegas | Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Expert guidance for buying a home in Las Vegas and Summerlin. Dr. Jan Duffy provides personalized assistance for first-time buyers, military veterans, and relocating families.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${config.seo.siteUrl}/buying` },
  ]
}

export default function BuyingIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Buying a Home in Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As your dedicated real estate expert, I'm here to guide you through
            every step of the home buying process in Las Vegas and Summerlin.
            Whether you're a first-time buyer, military veteran, or relocating
            family, I'll help you find the perfect home.
          </p>
        </div>

        {/* Advanced Search Widget - Start Your Search */}
        <div className="mb-16">
          <Card className="shadow-xl border-4 border-accent-500">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Start Your Home Search"
                subtitle="Search by neighborhood, city, school, beds, baths, and price to find your perfect Las Vegas home"
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              First-Time Buyers
            </h3>
            <p className="text-gray-600 mb-4">
              Navigate the home buying process with confidence. I'll explain
              every step and help you understand your options.
            </p>
            <a
              href="/buying/new-home"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Military Veterans
            </h3>
            <p className="text-gray-600 mb-4">
              Specialized assistance for military families with VA loan
              expertise and veteran-friendly communities.
            </p>
            <a
              href="/buying/military-veterans"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mortgage Calculator
            </h3>
            <p className="text-gray-600 mb-4">
              Calculate your monthly payments and explore different financing
              options to find what works for your budget.
            </p>
            <a
              href="/buying/mortgage-calculator"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Calculate Now →
            </a>
          </div>
        </div>

        {/* Featured Properties - RealScout Widget */}
        <div className="mb-16">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin={400000}
            priceMax={1000000}
            title="Featured Las Vegas Properties"
            subtitle="Explore our latest listings in Las Vegas and Summerlin. From first-time buyer homes to luxury properties, find your perfect match."
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Dr. Jan Duffy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Deep knowledge of Las Vegas neighborhoods, market trends, and
                community amenities to help you make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Every client receives individual attention and customized
                guidance throughout the entire home buying process.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Professional Network
              </h3>
              <p className="text-gray-600">
                Access to trusted lenders, inspectors, and contractors to ensure
                a smooth transaction from start to finish.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Market Knowledge
              </h3>
              <p className="text-gray-600">
                Stay ahead of market trends and pricing to help you secure the
                best value for your investment.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Your Home Search Today
          </a>
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
          href="/buying"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  )
}
