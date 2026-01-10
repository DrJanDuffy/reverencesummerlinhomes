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
} from 'lucide-react'

export function meta() {
  return [
    {
      title:
        'Henderson Homes for Sale | Family-Friendly Living in Nevada | Dr. Jan Duffy',
    },
    {
      name: 'description',
      content:
        'Discover homes for sale in Henderson, Nevada. Dr. Jan Duffy specializes in Henderson real estate with family-friendly communities, excellent schools, and outdoor recreation.',
    },
    {
      name: 'keywords',
      content:
        'Henderson homes for sale, Henderson Nevada real estate, family-friendly communities, excellent schools, Dr. Jan Duffy',
    },
    {
      property: 'og:title',
      content: 'Henderson Homes for Sale | Family-Friendly Living in Nevada',
    },
    {
      property: 'og:description',
      content:
        'Homes for sale in Henderson, Nevada with family-friendly communities, excellent schools, and outdoor recreation. Expert real estate guidance from Dr. Jan Duffy.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Henderson Homes for Sale | Dr. Jan Duffy',
    },
    {
      name: 'twitter:description',
      content:
        'Homes for sale in Henderson, Nevada with family-friendly communities and excellent schools.',
    },
  ]
}

export default function Henderson() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-2" />
              Family-Friendly Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Henderson Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Discover family-friendly living in Henderson, Nevada with
              excellent schools, outdoor recreation, and master-planned
              communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-teal-50"
              >
                <Home className="w-5 h-5 mr-2" />
                View Henderson Homes
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

      {/* Henderson Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Henderson Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Henderson offers the perfect blend of suburban comfort and urban
              convenience, with top-rated schools, beautiful parks, and
              master-planned communities that cater to families and
              professionals alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Top-Rated Schools</CardTitle>
                <CardDescription>
                  Excellent educational opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Henderson is home to some of Nevada's top-rated schools,
                  including Green Valley High School and Advanced Technologies
                  Academy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Outdoor Recreation</CardTitle>
                <CardDescription>
                  Beautiful parks and natural areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy numerous parks, hiking trails, and outdoor activities
                  including Lake Mead National Recreation Area nearby.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Master-Planned Communities</CardTitle>
                <CardDescription>Well-designed neighborhoods</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in thoughtfully designed communities like Green Valley,
                  Anthem, and Inspirada with amenities and services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Henderson Features */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Henderson Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best of suburban living with urban conveniences
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
                      Top-Rated Schools
                    </h4>
                    <p className="text-gray-600">
                      Clark County School District with excellent ratings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Parks & Recreation
                    </h4>
                    <p className="text-gray-600">
                      Numerous parks, trails, and recreational facilities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Shopping & Dining
                    </h4>
                    <p className="text-gray-600">
                      Green Valley Ranch, Galleria at Sunset, and local
                      restaurants
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Low Crime Rate
                    </h4>
                    <p className="text-gray-600">
                      One of Nevada's safest cities with excellent safety
                      ratings
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Family-Friendly
                    </h4>
                    <p className="text-gray-600">
                      Perfect for families with children and young professionals
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
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    Las Vegas Strip - 15 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    McCarran Airport - 20 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Lake Mead - 30 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    Downtown Las Vegas - 25 minutes
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3" />
                  <span className="text-gray-700">Hoover Dam - 45 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Henderson Communities
            </h2>
            <p className="text-xl text-gray-600">
              Discover the diverse neighborhoods and master-planned communities
              in Henderson
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Green Valley</CardTitle>
                <CardDescription>Established family community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mature neighborhoods</li>
                  <li>• Excellent schools</li>
                  <li>• Shopping centers</li>
                  <li>• Parks & recreation</li>
                  <li>• Established amenities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Anthem</CardTitle>
                <CardDescription>Master-planned community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Newer construction</li>
                  <li>• Resort-style amenities</li>
                  <li>• Golf course access</li>
                  <li>• Modern homes</li>
                  <li>• Community events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Inspirada</CardTitle>
                <CardDescription>Modern master-planned</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contemporary design</li>
                  <li>• Smart home features</li>
                  <li>• Community pools</li>
                  <li>• Walking trails</li>
                  <li>• New construction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schools & Education */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top-Rated Schools
            </h2>
            <p className="text-xl text-gray-600">
              Excellent educational opportunities for families in Henderson
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Elementary Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Green Valley Elementary</li>
                  <li>• Anthem Elementary</li>
                  <li>• Vanderburg Elementary</li>
                  <li>• All rated 8+ by GreatSchools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Middle Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Green Valley Middle School</li>
                  <li>• Bob Miller Middle School</li>
                  <li>• Advanced academic programs</li>
                  <li>• Excellent sports programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>High Schools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Green Valley High School</li>
                  <li>• Advanced Technologies Academy</li>
                  <li>• Advanced Placement courses</li>
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
              Your Henderson Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in Henderson real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-teal-600" />
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
                      Henderson Specialist
                    </h4>
                    <p className="text-gray-600">
                      Expertise in Henderson communities and market trends
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Family-Focused
                    </h4>
                    <p className="text-gray-600">
                      Understanding of family needs and school districts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Community Knowledge
                    </h4>
                    <p className="text-gray-600">
                      Deep knowledge of Henderson neighborhoods and amenities
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Jan Duffy?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    Licensed Nevada Real Estate Agent
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    Henderson real estate expert
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    Top 1% of Las Vegas agents
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-teal-600 mr-3" />
                  <span className="text-gray-700">
                    5-star Henderson client reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Henderson Home?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through Henderson's real estate market
            with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-teal-50"
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
