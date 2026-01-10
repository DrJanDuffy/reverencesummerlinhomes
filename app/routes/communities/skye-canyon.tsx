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
} from 'lucide-react'

export function meta() {
  return [
    {
      title:
        'Skye Canyon Homes for Sale | Master-Planned Community | Dr. Jan Duffy',
    },
    {
      name: 'description',
      content:
        'Discover homes for sale in Skye Canyon, Las Vegas. Dr. Jan Duffy specializes in Skye Canyon real estate with modern amenities, outdoor recreation, and family-friendly living.',
    },
    {
      name: 'keywords',
      content:
        'Skye Canyon homes for sale, Skye Canyon Las Vegas real estate, master-planned community, outdoor recreation, family-friendly, Dr. Jan Duffy',
    },
    {
      property: 'og:title',
      content: 'Skye Canyon Homes for Sale | Master-Planned Community',
    },
    {
      property: 'og:description',
      content:
        'Homes for sale in Skye Canyon, Las Vegas with modern amenities, outdoor recreation, and family-friendly living. Expert real estate guidance from Dr. Jan Duffy.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Skye Canyon Homes for Sale | Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Homes for sale in Skye Canyon, Las Vegas with modern amenities and outdoor recreation.',
    },
  ]
}

export default function SkyeCanyon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-2" />
              Master-Planned Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Skye Canyon Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Discover modern living in Skye Canyon, Las Vegas with outdoor
              recreation, family amenities, and master-planned community
              features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Home className="w-5 h-5 mr-2" />
                View Skye Canyon Homes
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

      {/* Skye Canyon Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Skye Canyon Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skye Canyon offers a perfect blend of modern amenities and outdoor
              recreation, with master-planned community features, hiking trails,
              and family-friendly activities in northwest Las Vegas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Outdoor Recreation</CardTitle>
                <CardDescription>
                  Hiking trails and natural beauty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy miles of hiking trails, parks, and outdoor recreation
                  areas with stunning mountain views and desert landscapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Master-Planned Community</CardTitle>
                <CardDescription>
                  Thoughtfully designed neighborhoods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in a carefully planned community with modern amenities,
                  community centers, and well-designed neighborhoods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Family-Friendly</CardTitle>
                <CardDescription>Perfect for families</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Designed with families in mind, featuring parks, playgrounds,
                  community events, and safe neighborhoods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skye Canyon Features */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skye Canyon Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best of modern community living with outdoor
              recreation
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
                      Hiking Trails
                    </h4>
                    <p className="text-gray-600">
                      Miles of scenic hiking trails with mountain views and
                      desert landscapes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Community Centers
                    </h4>
                    <p className="text-gray-600">
                      Modern community centers with pools, fitness facilities,
                      and event spaces
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Parks & Playgrounds
                    </h4>
                    <p className="text-gray-600">
                      Multiple parks and playgrounds for families and outdoor
                      activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Modern Homes
                    </h4>
                    <p className="text-gray-600">
                      Contemporary home designs with energy-efficient features
                      and modern amenities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Community Events
                    </h4>
                    <p className="text-gray-600">
                      Regular community events, festivals, and social activities
                      for residents
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
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Las Vegas Strip - 25 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    McCarran Airport - 30 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Downtown Las Vegas - 35 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Red Rock Canyon - 15 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Mount Charleston - 45 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skye Canyon Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Skye Canyon Neighborhoods
            </h2>
            <p className="text-xl text-gray-600">
              Discover the diverse neighborhoods and home styles in Skye Canyon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Skye Canyon Village</CardTitle>
                <CardDescription>Modern townhomes and condos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contemporary townhomes</li>
                  <li>• Low-maintenance living</li>
                  <li>• Community amenities</li>
                  <li>• Modern finishes</li>
                  <li>• Convenient location</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Skye Canyon Estates</CardTitle>
                <CardDescription>Single-family homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spacious single-family homes</li>
                  <li>• Private yards</li>
                  <li>• Modern floor plans</li>
                  <li>• Energy-efficient features</li>
                  <li>• Mountain views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Skye Canyon Heights</CardTitle>
                <CardDescription>Luxury homes with views</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium home designs</li>
                  <li>• Panoramic mountain views</li>
                  <li>• Upscale finishes</li>
                  <li>• Larger lots</li>
                  <li>• Exclusive amenities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Outdoor Recreation
            </h2>
            <p className="text-xl text-gray-600">
              Endless opportunities for outdoor adventure and recreation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Hiking Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scenic mountain trails</li>
                  <li>• Desert landscape views</li>
                  <li>• Wildlife viewing</li>
                  <li>• Photography opportunities</li>
                  <li>• Nature exploration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Community Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Playgrounds for children</li>
                  <li>• Picnic areas</li>
                  <li>• Walking paths</li>
                  <li>• Sports courts</li>
                  <li>• Community gardens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Red Rock Canyon</li>
                  <li>• Mount Charleston</li>
                  <li>• Lake Mead</li>
                  <li>• Valley of Fire</li>
                  <li>• Outdoor adventures</li>
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
              Your Skye Canyon Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in Skye Canyon real
              estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-blue-600" />
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
                      Skye Canyon Specialist
                    </h4>
                    <p className="text-gray-600">
                      Expertise in Skye Canyon communities and master-planned
                      living
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Outdoor Recreation Focus
                    </h4>
                    <p className="text-gray-600">
                      Understanding of outdoor lifestyle and recreation
                      opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Family Community Expert
                    </h4>
                    <p className="text-gray-600">
                      Knowledge of family-friendly amenities and community
                      features
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Licensed Nevada Real Estate Agent
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Skye Canyon real estate expert
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Top 1% of Las Vegas agents
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    5-star Skye Canyon client reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Skye Canyon Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through Skye Canyon's real estate market
            with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
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
