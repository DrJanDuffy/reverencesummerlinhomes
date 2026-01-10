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
  TreePine,
  Waves,
  Building,
  Zap,
  Car,
  Sun,
  Bird,
} from 'lucide-react'

export function meta() {
  return [
    {
      title:
        'Kestrel Homes for Sale | Luxury Living & Natural Beauty | Dr. Jan Duffy',
    },
    {
      name: 'description',
      content:
        'Discover homes for sale in Kestrel, Las Vegas. Dr. Jan Duffy specializes in Kestrel real estate with luxury amenities, natural beauty, and exclusive living.',
    },
    {
      name: 'keywords',
      content:
        'Kestrel homes for sale, Kestrel Las Vegas real estate, luxury living, natural beauty, exclusive community, Dr. Jan Duffy',
    },
    {
      property: 'og:title',
      content: 'Kestrel Homes for Sale | Luxury Living & Natural Beauty',
    },
    {
      property: 'og:description',
      content:
        'Homes for sale in Kestrel, Las Vegas with luxury amenities, natural beauty, and exclusive living. Expert real estate guidance from Dr. Jan Duffy.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Kestrel Homes for Sale | Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Homes for sale in Kestrel, Las Vegas with luxury amenities and natural beauty.',
    },
  ]
}

export default function Kestrel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Bird className="w-4 h-4 mr-2" />
              Luxury Living & Natural Beauty
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kestrel Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Discover exclusive living in Kestrel, Las Vegas with luxury
              amenities, natural beauty, and sophisticated desert landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                <Home className="w-5 h-5 mr-2" />
                View Kestrel Homes
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

      {/* Kestrel Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Kestrel Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kestrel offers an exclusive lifestyle with luxury amenities,
              natural beauty, and sophisticated desert living that combines
              elegance with the serenity of the Las Vegas landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Luxury Living</CardTitle>
                <CardDescription>
                  Exclusive amenities and features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience luxury living with premium amenities, high-end
                  finishes, and exclusive community features designed for
                  discerning homeowners.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Natural Beauty</CardTitle>
                <CardDescription>Scenic desert landscapes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy the natural beauty of the desert with carefully
                  preserved landscapes, native plants, and stunning views of the
                  surrounding mountains.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Exclusive Community</CardTitle>
                <CardDescription>Private and secure living</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in an exclusive, gated community with privacy, security,
                  and a sense of belonging among like-minded residents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kestrel Features */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kestrel Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the pinnacle of luxury desert living with exclusive
              amenities
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
                      Luxury Amenities
                    </h4>
                    <p className="text-gray-600">
                      Premium community amenities including pools, fitness
                      centers, and social spaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Natural Landscaping
                    </h4>
                    <p className="text-gray-600">
                      Carefully designed desert landscaping with native plants
                      and water features
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Gated Security
                    </h4>
                    <p className="text-gray-600">
                      24/7 security and controlled access for peace of mind and
                      privacy
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Exclusive Events
                    </h4>
                    <p className="text-gray-600">
                      Private community events and social gatherings for
                      residents
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Concierge Services
                    </h4>
                    <p className="text-gray-600">
                      Premium concierge services for residents' convenience and
                      lifestyle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prime Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Las Vegas Strip - 15 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    McCarran Airport - 20 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Downtown Las Vegas - 25 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Red Rock Canyon - 5 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Mount Charleston - 35 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kestrel Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kestrel Neighborhoods
            </h2>
            <p className="text-xl text-gray-600">
              Discover the exclusive neighborhoods and luxury home styles in
              Kestrel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Kestrel Estates</CardTitle>
                <CardDescription>Luxury single-family homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spacious luxury homes</li>
                  <li>• Premium finishes</li>
                  <li>• Private courtyards</li>
                  <li>• Desert views</li>
                  <li>• Custom features</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Kestrel Heights</CardTitle>
                <CardDescription>Ultra-luxury estates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ultra-luxury estates</li>
                  <li>• Panoramic views</li>
                  <li>• Custom architecture</li>
                  <li>• Premium amenities</li>
                  <li>• Exclusive location</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Kestrel Villas</CardTitle>
                <CardDescription>Luxury townhomes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Luxury townhomes</li>
                  <li>• Low-maintenance living</li>
                  <li>• Premium amenities</li>
                  <li>• Modern design</li>
                  <li>• Scenic views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Amenities */}
      <section className="py-16 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Luxury Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive amenities designed for the most discerning residents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle>Resort-Style Pools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Infinity pools</li>
                  <li>• Poolside cabanas</li>
                  <li>• Poolside dining</li>
                  <li>• Water features</li>
                  <li>• Pool concierge</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Fitness & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• State-of-the-art gym</li>
                  <li>• Spa facilities</li>
                  <li>• Yoga studios</li>
                  <li>• Personal training</li>
                  <li>• Wellness programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Concierge Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 concierge</li>
                  <li>• Event planning</li>
                  <li>• Travel arrangements</li>
                  <li>• Personal services</li>
                  <li>• Lifestyle management</li>
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
              Your Kestrel Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in Kestrel real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-purple-600" />
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
                      Kestrel Specialist
                    </h4>
                    <p className="text-gray-600">
                      Expertise in Kestrel communities and luxury properties
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
                      Understanding of luxury real estate market and exclusive
                      communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Exclusive Properties
                    </h4>
                    <p className="text-gray-600">
                      Knowledge of exclusive properties and luxury amenities
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Licensed Nevada Real Estate Agent
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Kestrel real estate expert
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    Top 1% of Las Vegas agents
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">
                    5-star Kestrel client reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Kestrel Home?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through Kestrel's exclusive real estate
            market with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50"
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
