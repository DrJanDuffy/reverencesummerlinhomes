import type { Route } from './+types/communities'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { config } from '~/lib/config'
import { RealScoutAdvancedSearch } from '~/components/RealScoutAdvancedSearch'
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Mountain,
  ShoppingBag,
  GraduationCap,
  Calendar,
  ArrowRight,
  Users,
  Award,
  Shield,
} from 'lucide-react'

export function links() {
  return [
    {
      rel: 'canonical',
      href: `${config.seo.siteUrl}/communities/summerlin-west`,
    },
  ]
}

export function meta() {
  return [
    {
      title:
        'Summerlin West Homes for Sale | Luxury Living in Las Vegas | Dr. Jan Duffy',
    },
    {
      name: 'description',
      content:
        'Discover luxury homes in Summerlin West, Las Vegas. Dr. Jan Duffy specializes in Summerlin West real estate with Red Rock views, golf courses, and premier amenities. Expert guidance for your dream home.',
    },
    {
      name: 'keywords',
      content:
        'Summerlin West homes, Las Vegas luxury real estate, Red Rock views, golf course homes, Summerlin West realtor, Dr. Jan Duffy',
    },
    {
      property: 'og:title',
      content: 'Summerlin West Homes for Sale | Luxury Living in Las Vegas',
    },
    {
      property: 'og:description',
      content:
        'Discover luxury homes in Summerlin West with Red Rock views, golf courses, and premier amenities. Expert real estate guidance from Dr. Jan Duffy.',
    },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${config.seo.siteUrl}/communities/summerlin-west`,
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Summerlin West Homes for Sale | Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Luxury homes in Summerlin West with Red Rock views and premier amenities.',
    },
  ]
}

export default function SummerlinWest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              Premier Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Summerlin West
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Luxury living with breathtaking Red Rock views, world-class golf
              courses, and premier amenities in Las Vegas's most prestigious
              community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-blue-50"
              >
                <Home className="w-5 h-5 mr-2" />
                View Available Homes
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Search Widget - Find Properties in Summerlin West */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-4 border-accent-500 mb-12">
            <CardContent className="p-8">
              <RealScoutAdvancedSearch
                buttonTextColor="#ffffff"
                backgroundColor="#ffffff"
                searchButtonColor="#e85d04"
                width={600}
                title="Search Summerlin West Properties"
                subtitle="Find your perfect home in Summerlin West. Filter by neighborhood, beds, baths, price, and more to match your luxury living requirements."
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Summerlin West
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summerlin West represents the pinnacle of luxury living in Las
              Vegas, offering residents unparalleled access to natural beauty,
              recreational amenities, and sophisticated lifestyle options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Red Rock Views</CardTitle>
                <CardDescription>
                  Breathtaking views of Red Rock Canyon National Conservation
                  Area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wake up to stunning mountain vistas and enjoy world-class
                  hiking trails just minutes from your doorstep.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Championship Golf</CardTitle>
                <CardDescription>
                  Access to multiple world-class golf courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Play on championship courses designed by renowned architects,
                  including TPC Summerlin and Red Rock Country Club.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Premium Shopping</CardTitle>
                <CardDescription>
                  Upscale retail and dining destinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy luxury shopping at Downtown Summerlin and nearby premium
                  retail centers with top-tier restaurants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the finest in luxury living with world-class amenities
              and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Community Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Red Rock Country Club
                    </h4>
                    <p className="text-gray-600">
                      Championship golf course with stunning mountain views
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Resort-Style Pools
                    </h4>
                    <p className="text-gray-600">
                      Multiple pools with cabanas and poolside service
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Tennis & Pickleball
                    </h4>
                    <p className="text-gray-600">
                      Professional courts with instruction available
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Hiking Trails
                    </h4>
                    <p className="text-gray-600">
                      Direct access to Red Rock Canyon trails
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fitness Centers
                    </h4>
                    <p className="text-gray-600">
                      State-of-the-art equipment and personal training
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nearby Attractions
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Red Rock Canyon - 5 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Downtown Summerlin - 10 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Las Vegas Strip - 25 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    McCarran Airport - 30 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Downtown Las Vegas - 35 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Home Types
            </h2>
            <p className="text-xl text-gray-600">
              From elegant single-family homes to luxury estates, find your
              perfect Summerlin West residence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Single Family Homes</CardTitle>
                <CardDescription>Starting from $800,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2,500 - 4,000 sq ft</li>
                  <li>• 3-5 bedrooms</li>
                  <li>• 2-4 bathrooms</li>
                  <li>• 2-3 car garage</li>
                  <li>• Private backyard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury Estates</CardTitle>
                <CardDescription>Starting from $1.5M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4,000+ sq ft</li>
                  <li>• 4-6 bedrooms</li>
                  <li>• 4-6 bathrooms</li>
                  <li>• 3+ car garage</li>
                  <li>• Resort-style backyard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Custom Builds</CardTitle>
                <CardDescription>Price varies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom design</li>
                  <li>• Premium finishes</li>
                  <li>• Smart home features</li>
                  <li>• Energy efficient</li>
                  <li>• Personal touches</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Summerlin West Market Insights
            </h2>
            <p className="text-xl text-gray-600">
              Current market trends and investment opportunities in Las Vegas's
              premier community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    $1.2M
                  </span>
                </div>
                <CardTitle className="text-lg">Median Home Price</CardTitle>
                <CardDescription>Up 8.5% from last year</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">12</span>
                </div>
                <CardTitle className="text-lg">Days on Market</CardTitle>
                <CardDescription>Fast-moving luxury market</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    98%
                  </span>
                </div>
                <CardTitle className="text-lg">List-to-Sale Ratio</CardTitle>
                <CardDescription>Strong seller's market</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">
                    +15%
                  </span>
                </div>
                <CardTitle className="text-lg">Price Appreciation</CardTitle>
                <CardDescription>5-year average growth</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Summerlin West is Hot
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Limited Inventory
                    </h4>
                    <p className="text-gray-600">
                      Only 45 homes currently available in the entire community
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Red Rock Views Premium
                    </h4>
                    <p className="text-gray-600">
                      Homes with mountain views command 20-30% higher prices
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Golf Course Access
                    </h4>
                    <p className="text-gray-600">
                      Properties backing to golf courses see strongest
                      appreciation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      New Construction Demand
                    </h4>
                    <p className="text-gray-600">
                      Buyers willing to pay premium for move-in ready homes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Investment Outlook
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Rental Yield:</span>
                  <span className="font-semibold text-green-600">4.2%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Price per Sq Ft:</span>
                  <span className="font-semibold text-blue-600">$285</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-700">Luxury Market Share:</span>
                  <span className="font-semibold text-purple-600">35%</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700">Forecast Growth:</span>
                  <span className="font-semibold text-orange-600">+12%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Expert Insight:</strong> Summerlin West continues to
                  outperform the broader Las Vegas market due to its unique
                  combination of natural beauty, luxury amenities, and limited
                  supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top-Rated Schools
            </h2>
            <p className="text-xl text-gray-600">
              Excellent educational opportunities for families in Summerlin West
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Elementary Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Roger Bryan Elementary</li>
                  <li>• Walter Bracken Elementary</li>
                  <li>• Ernest May Elementary</li>
                  <li>• All rated 8+ by GreatSchools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Middle Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sig Rogich Middle School</li>
                  <li>• Lawrence & Heidi Canarelli MS</li>
                  <li>• Advanced academic programs</li>
                  <li>• Excellent sports programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>High Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Palo Verde High School</li>
                  <li>• Advanced Placement courses</li>
                  <li>• Championship athletics</li>
                  <li>• College prep programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Summerlin West Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise and local knowledge to
              your home search
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {config.agent.name}
                  </h3>
                  <p className="text-lg text-gray-600">{config.agent.title}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Summerlin Specialist
                    </h4>
                    <p className="text-gray-600">
                      Deep knowledge of Summerlin West communities and market
                      trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Luxury Market Expert
                    </h4>
                    <p className="text-gray-600">
                      Specialized in high-end properties and luxury amenities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Local Partnerships
                    </h4>
                    <p className="text-gray-600">
                      Exclusive access to new construction and off-market
                      properties
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Licensed Nevada Real Estate Agent
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Hundreds of satisfied clients
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    Top 1% of Las Vegas agents
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-gray-700">5-star client reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Summerlin West Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through the Summerlin West real estate
            market with personalized service and expert local knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-blue-50"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Communities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
