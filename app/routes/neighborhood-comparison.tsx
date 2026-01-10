import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { config } from '~/lib/config'
import {
  MapPin,
  Home,
  DollarSign,
  TrendingUp,
  Users,
  GraduationCap,
  Car,
  ShoppingBag,
  TreePine,
  Star,
  CheckCircle,
  ArrowRight,
  BarChart3,
} from 'lucide-react'
import type { Route } from './+types/neighborhood-comparison'

export function meta() {
  return [
    { title: 'Las Vegas Neighborhood Comparison Tool | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        "Compare Las Vegas neighborhoods side-by-side with detailed market data, amenities, schools, and lifestyle factors. Make informed decisions with Dr. Jan Duffy's expert analysis.",
    },
    {
      name: 'keywords',
      content:
        'Las Vegas neighborhoods, Summerlin comparison, Henderson vs Summerlin, Las Vegas real estate comparison, neighborhood analysis',
    },
    {
      property: 'og:title',
      content: 'Las Vegas Neighborhood Comparison Tool | Dr. Jan Duffy',
    },
    {
      property: 'og:description',
      content:
        'Compare Las Vegas neighborhoods with detailed market data and lifestyle factors.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${config.seo.siteUrl}/neighborhood-comparison`,
    },
  ]
}

const neighborhoodData = [
  {
    id: 'summerlin-west',
    name: 'Summerlin West',
    description: 'Luxury living with Red Rock views and championship golf',
    medianPrice: 1200000,
    pricePerSqFt: 285,
    avgDaysOnMarket: 12,
    appreciation: 15.2,
    population: 45000,
    medianAge: 42,
    medianIncome: 125000,
    schools: [
      { name: 'Palo Verde High School', rating: 9.2, type: 'High School' },
      { name: 'Sig Rogich Middle School', rating: 8.8, type: 'Middle School' },
      { name: 'Roger Bryan Elementary', rating: 9.0, type: 'Elementary' },
    ],
    amenities: [
      'Red Rock Country Club',
      'Downtown Summerlin',
      'Red Rock Canyon',
      'Multiple Golf Courses',
      'Resort-Style Pools',
      'Tennis Courts',
      'Hiking Trails',
    ],
    commute: {
      strip: 25,
      airport: 30,
      downtown: 35,
    },
    lifestyle: {
      walkability: 6,
      nightlife: 7,
      family: 9,
      outdoor: 10,
      shopping: 9,
    },
    pros: [
      'Stunning mountain views',
      'World-class amenities',
      'Excellent schools',
      'Low crime rate',
      'Strong appreciation',
    ],
    cons: [
      'Higher cost of living',
      'Limited nightlife',
      'Longer commute to strip',
    ],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
  },
  {
    id: 'henderson',
    name: 'Henderson',
    description: 'Family-friendly community with great schools and amenities',
    medianPrice: 650000,
    pricePerSqFt: 195,
    avgDaysOnMarket: 18,
    appreciation: 12.8,
    population: 320000,
    medianAge: 38,
    medianIncome: 85000,
    schools: [
      { name: 'Coronado High School', rating: 8.9, type: 'High School' },
      { name: 'Bob Miller Middle School', rating: 8.5, type: 'Middle School' },
      { name: 'Vanderburg Elementary', rating: 8.7, type: 'Elementary' },
    ],
    amenities: [
      'Lake Las Vegas',
      'Green Valley Ranch',
      'M Resort',
      'Multiple Parks',
      'Community Centers',
      'Shopping Centers',
      'Golf Courses',
    ],
    commute: {
      strip: 20,
      airport: 25,
      downtown: 30,
    },
    lifestyle: {
      walkability: 7,
      nightlife: 6,
      family: 10,
      outdoor: 8,
      shopping: 8,
    },
    pros: [
      'Excellent schools',
      'Family-friendly',
      'Good value',
      'Safe community',
      'Growing area',
    ],
    cons: [
      'Further from strip',
      'Limited luxury options',
      'Traffic during rush hour',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
  },
  {
    id: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    description:
      'Urban living with entertainment and shopping at your doorstep',
    medianPrice: 850000,
    pricePerSqFt: 245,
    avgDaysOnMarket: 15,
    appreciation: 13.5,
    population: 28000,
    medianAge: 35,
    medianIncome: 95000,
    schools: [
      { name: 'Arbor View High School', rating: 8.6, type: 'High School' },
      {
        name: 'Lawrence & Heidi Canarelli MS',
        rating: 8.4,
        type: 'Middle School',
      },
      { name: 'Walter Bracken Elementary', rating: 8.8, type: 'Elementary' },
    ],
    amenities: [
      'Downtown Summerlin',
      'City National Arena',
      'Las Vegas Ballpark',
      'Multiple Restaurants',
      'Shopping Centers',
      'Entertainment Venues',
      'Parks & Trails',
    ],
    commute: {
      strip: 20,
      airport: 25,
      downtown: 30,
    },
    lifestyle: {
      walkability: 8,
      nightlife: 8,
      family: 8,
      outdoor: 7,
      shopping: 10,
    },
    pros: [
      'Walkable lifestyle',
      'Entertainment options',
      'Good schools',
      'Central location',
      'Modern amenities',
    ],
    cons: ['Higher density', 'More traffic', 'Limited privacy'],
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600',
  },
]

export default function NeighborhoodComparison() {
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([
    'summerlin-west',
    'henderson',
  ])
  const [comparisonView, setComparisonView] = useState<'overview' | 'detailed'>(
    'overview'
  )

  const selectedData = neighborhoodData.filter(n =>
    selectedNeighborhoods.includes(n.id)
  )

  const toggleNeighborhood = (id: string) => {
    if (selectedNeighborhoods.includes(id)) {
      setSelectedNeighborhoods(selectedNeighborhoods.filter(n => n !== id))
    } else if (selectedNeighborhoods.length < 3) {
      setSelectedNeighborhoods([...selectedNeighborhoods, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Las Vegas Neighborhood Comparison
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Compare neighborhoods side-by-side with detailed market data,
              amenities, and lifestyle factors
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Neighborhood Selection */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Select Neighborhoods to Compare
              </CardTitle>
              <CardDescription>
                Choose up to 3 neighborhoods to compare side-by-side
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {neighborhoodData.map(neighborhood => (
                  <Card
                    key={neighborhood.id}
                    className={`cursor-pointer transition-all ${
                      selectedNeighborhoods.includes(neighborhood.id)
                        ? 'ring-2 ring-primary-500 bg-primary-50'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => toggleNeighborhood(neighborhood.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{neighborhood.name}</h3>
                        {selectedNeighborhoods.includes(neighborhood.id) && (
                          <CheckCircle className="w-5 h-5 text-primary-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {neighborhood.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-primary-600">
                          ${neighborhood.medianPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-500">
                          {neighborhood.population.toLocaleString()} residents
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparison View Toggle */}
        <section className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={comparisonView === 'overview' ? 'default' : 'ghost'}
                onClick={() => setComparisonView('overview')}
                className="px-6"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={comparisonView === 'detailed' ? 'default' : 'ghost'}
                onClick={() => setComparisonView('detailed')}
                className="px-6"
              >
                <Home className="w-4 h-4 mr-2" />
                Detailed
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Results */}
        {selectedData.length > 0 && (
          <section>
            {comparisonView === 'overview' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedData.map(neighborhood => (
                  <Card key={neighborhood.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={neighborhood.image}
                        alt={neighborhood.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {neighborhood.name}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {neighborhood.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {neighborhood.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Median Price:</span>
                          <span className="font-semibold">
                            ${neighborhood.medianPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price/sq ft:</span>
                          <span className="font-semibold">
                            ${neighborhood.pricePerSqFt}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Days on Market:</span>
                          <span className="font-semibold">
                            {neighborhood.avgDaysOnMarket}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Appreciation:</span>
                          <span className="font-semibold text-green-600">
                            +{neighborhood.appreciation}%
                          </span>
                        </div>
                      </div>

                      {/* Lifestyle Scores */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Lifestyle Scores</h4>
                        <div className="space-y-2">
                          {Object.entries(neighborhood.lifestyle).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm capitalize">
                                  {key}:
                                </span>
                                <div className="flex items-center">
                                  <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                    <div
                                      className="bg-primary-600 h-2 rounded-full"
                                      style={{
                                        width: `${(value / 10) * 100}%`,
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-medium">
                                    {value}/10
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Top Amenities */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Top Amenities</h4>
                        <div className="flex flex-wrap gap-1">
                          {neighborhood.amenities
                            .slice(0, 4)
                            .map((amenity, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {amenity}
                              </Badge>
                            ))}
                        </div>
                      </div>

                      <Button className="w-full">
                        View Detailed Analysis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {/* Detailed Comparison Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Comparison</CardTitle>
                    <CardDescription>
                      Comprehensive comparison of selected neighborhoods
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 font-semibold">
                              Metric
                            </th>
                            {selectedData.map(neighborhood => (
                              <th
                                key={neighborhood.id}
                                className="text-center p-4 font-semibold"
                              >
                                {neighborhood.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Median Price</td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                ${neighborhood.medianPrice.toLocaleString()}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Price per Sq Ft</td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                ${neighborhood.pricePerSqFt}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">
                              Avg Days on Market
                            </td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                {neighborhood.avgDaysOnMarket}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">
                              Annual Appreciation
                            </td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4 text-green-600"
                              >
                                +{neighborhood.appreciation}%
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Population</td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                {neighborhood.population.toLocaleString()}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Median Age</td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                {neighborhood.medianAge}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 font-medium">Median Income</td>
                            {selectedData.map(neighborhood => (
                              <td
                                key={neighborhood.id}
                                className="text-center p-4"
                              >
                                ${neighborhood.medianIncome.toLocaleString()}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Individual Neighborhood Details */}
                {selectedData.map(neighborhood => (
                  <Card key={neighborhood.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {neighborhood.name} - Detailed Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3">Schools</h4>
                          <div className="space-y-2">
                            {neighborhood.schools.map((school, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm">{school.name}</span>
                                <Badge variant="secondary">
                                  {school.rating}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Commute Times</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">To Strip:</span>
                              <span className="text-sm font-medium">
                                {neighborhood.commute.strip} min
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">To Airport:</span>
                              <span className="text-sm font-medium">
                                {neighborhood.commute.airport} min
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">To Downtown:</span>
                              <span className="text-sm font-medium">
                                {neighborhood.commute.downtown} min
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3">Pros</h4>
                          <ul className="space-y-1">
                            {neighborhood.pros.map((pro, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Considerations</h4>
                          <ul className="space-y-1">
                            {neighborhood.cons.map((con, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <span className="w-4 h-4 text-red-500 mr-2 flex-shrink-0">
                                  •
                                </span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Contact CTA */}
        <section className="mt-16">
          <Card className="bg-primary-600 text-white">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Let Dr. Jan Duffy help you find the perfect neighborhood based
                on your lifestyle, budget, and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-primary-50"
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  View All Communities
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
