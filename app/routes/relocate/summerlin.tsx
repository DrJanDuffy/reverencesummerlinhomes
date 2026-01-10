import type { Route } from './+types/relocate'
import { config } from '~/lib/config'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { Card, CardContent } from '~/components/ui/card'

export function links() {
  return [
    { rel: 'canonical', href: `${config.seo.siteUrl}/relocate/summerlin` },
  ]
}

export function meta() {
  return [
    { title: 'Relocate to Summerlin | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        "Relocating to Summerlin? Dr. Jan Duffy helps families find the perfect home in Summerlin, Las Vegas's premier community.",
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/relocate/summerlin` },
  ]
}

export default function RelocateSummerlin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Relocate to Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Summerlin, Las Vegas's premier master-planned community.
            Find your perfect home in Summerlin's exceptional neighborhoods.
          </p>
        </div>

        {/* Advanced Search Widget - Perfect for Relocation */}
        <div className="mb-16">
          <Card className="shadow-xl border-4 border-accent-500">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Search Summerlin Properties"
                subtitle="Find your perfect home in Summerlin. Search by neighborhood, city, school, beds, baths, and price range to match your relocation needs."
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Relocate to Summerlin?
          </h2>
          <p className="text-gray-700 mb-4">
            Summerlin is Las Vegas's premier master-planned community, offering
            exceptional quality of life with top-rated schools, world-class
            amenities, and beautiful homes. Whether you're relocating for work,
            retirement, or lifestyle, Summerlin provides everything you need for
            a successful move.
          </p>
          <p className="text-gray-700">
            Contact Dr. Jan Duffy today to begin your Summerlin relocation
            journey. I'll help you find the perfect home that matches your
            needs, budget, and lifestyle preferences.
          </p>
        </div>
      </div>
    </div>
  )
}
