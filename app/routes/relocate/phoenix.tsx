import type { Route } from './+types/relocate'
import { config } from '~/lib/config'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import { RealScoutListingsWidget } from '~/components/RealScoutListingsWidget'
import { Card, CardContent } from '~/components/ui/card'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/relocate/phoenix` }]
}

export function meta() {
  return [
    { title: 'Relocate from Phoenix to Las Vegas | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        'Moving from Phoenix to Las Vegas? Dr. Jan Duffy helps Phoenix residents relocate to Las Vegas with expert guidance on neighborhoods, taxes, and lifestyle.',
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/relocate/phoenix` },
  ]
}

export default function RelocatePhoenix() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Relocate from Phoenix to Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Las Vegas's unique desert lifestyle. Enjoy no state
            income tax, entertainment options, and a vibrant community.
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
                title="Search Las Vegas Properties"
                subtitle="Find your perfect home in Las Vegas and Summerlin. Search by neighborhood, city, school, beds, baths, and price range."
              />
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Move from Phoenix to Las Vegas?
          </h2>
          <p className="text-gray-700 mb-4">
            Many Phoenix residents are discovering the benefits of relocating to
            Las Vegas: no state income tax, entertainment and dining options,
            world-class amenities, and a thriving economy. Contact Dr. Jan Duffy
            to learn more about making Las Vegas your new home.
          </p>
          <p className="text-gray-700">
            I specialize in helping Phoenix families relocate to Las Vegas and
            Summerlin, providing expert guidance on neighborhoods, schools, and
            lifestyle options that match your needs.
          </p>
        </div>

        {/* Featured Properties - Relocation Opportunities */}
        <div className="mt-12">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR,,TOWNHOUSE,,CONDO"
            priceMin={300000}
            priceMax={1500000}
            title="Available Las Vegas Properties"
            subtitle="Explore homes in Las Vegas and Summerlin perfect for Phoenix relocations. Find properties that match your lifestyle and budget."
          />
        </div>
      </div>
    </div>
  )
}
