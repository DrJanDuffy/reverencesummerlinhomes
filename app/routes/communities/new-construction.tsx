import type { Route } from "./+types/communities";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { config } from "~/lib/config";
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
  Hammer,
  Wrench,
  Zap
} from "lucide-react";

export function meta() {
  return [
    { title: "New Construction Homes Las Vegas | Brand New Builds | Dr. Jan Duffy" },
    { name: "description", content: "Discover new construction homes in Las Vegas. Dr. Jan Duffy specializes in new build homes with modern features, energy efficiency, and customization options." },
    { name: "keywords", content: "new construction homes Las Vegas, new build homes, custom homes, energy efficient homes, Dr. Jan Duffy" },
    { property: "og:title", content: "New Construction Homes Las Vegas | Brand New Builds" },
    { property: "og:description", content: "New construction homes in Las Vegas with modern features, energy efficiency, and customization options. Expert real estate guidance from Dr. Jan Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "New Construction Homes Las Vegas | Dr. Jan Duffy" },
    { name: "twitter:description", content: "New construction homes in Las Vegas with modern features and energy efficiency." }
  ];
}

export default function NewConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Hammer className="w-4 h-4 mr-2" />
              Brand New Homes
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              New Construction Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Discover brand new construction homes with modern features, energy efficiency, smart home technology, and customization options throughout Las Vegas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Home className="w-5 h-5 mr-2" />
                View New Builds
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Brand New Construction Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of new construction with modern design, energy efficiency, smart home technology, and the ability to customize your dream home from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Modern Features</CardTitle>
                <CardDescription>
                  Latest technology and design trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy the latest in home technology, modern floor plans, and contemporary design elements built to today's standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Customization Options</CardTitle>
                <CardDescription>
                  Personalize your new home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose from various floor plans, finishes, colors, and upgrades to create your perfect home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Warranty Protection</CardTitle>
                <CardDescription>
                  Comprehensive builder warranties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy peace of mind with comprehensive builder warranties covering structural elements and major systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits of New Construction */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of New Construction
            </h2>
            <p className="text-xl text-gray-600">
              Discover why new construction homes offer superior value and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose New Construction?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energy Efficiency</h4>
                    <p className="text-gray-600">Latest insulation, windows, and HVAC systems for lower utility bills</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Home Ready</h4>
                    <p className="text-gray-600">Pre-wired for smart home technology and automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Floor Plans</h4>
                    <p className="text-gray-600">Open concept designs and contemporary layouts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Low Maintenance</h4>
                    <p className="text-gray-600">Everything is new and under warranty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customization</h4>
                    <p className="text-gray-600">Choose finishes, colors, and upgrades to match your style</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Communities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Summerlin - Master-planned community</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Henderson - Family-friendly neighborhoods</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">North Las Vegas - Affordable new builds</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Southwest Las Vegas - Growing communities</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Inspirada - Modern master-planned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Types & Builders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              New Construction Options
            </h2>
            <p className="text-xl text-gray-600">
              From starter homes to luxury estates, find your perfect new construction home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Starter Homes</CardTitle>
                <CardDescription>Starting from $400,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1,500 - 2,500 sq ft</li>
                  <li>• 3-4 bedrooms</li>
                  <li>• 2-3 bathrooms</li>
                  <li>• 2-car garage</li>
                  <li>• Modern finishes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Move-Up Homes</CardTitle>
                <CardDescription>Starting from $600,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2,500 - 3,500 sq ft</li>
                  <li>• 4-5 bedrooms</li>
                  <li>• 3-4 bathrooms</li>
                  <li>• 3-car garage</li>
                  <li>• Premium upgrades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury New Builds</CardTitle>
                <CardDescription>Starting from $1M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3,500+ sq ft</li>
                  <li>• 5+ bedrooms</li>
                  <li>• 4+ bathrooms</li>
                  <li>• 3+ car garage</li>
                  <li>• Custom features</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Builder Partnerships */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Builder Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Work with Las Vegas's most reputable home builders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>National Builders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pulte Homes</li>
                  <li>• Lennar</li>
                  <li>• KB Home</li>
                  <li>• DR Horton</li>
                  <li>• Richmond American</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Local Builders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Blue Heron</li>
                  <li>• Storybook Homes</li>
                  <li>• Woodside Homes</li>
                  <li>• Toll Brothers</li>
                  <li>• Custom builders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Luxury Builders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Toll Brothers</li>
                  <li>• Blue Heron</li>
                  <li>• Custom estates</li>
                  <li>• Semi-custom homes</li>
                  <li>• Architectural designs</li>
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
              Your New Construction Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in new construction real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{config.agent.name}</h3>
                  <p className="text-lg text-gray-600">{config.agent.title}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">New Construction Specialist</h4>
                    <p className="text-gray-600">Expertise in new build homes and builder relationships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Builder Partnerships</h4>
                    <p className="text-gray-600">Strong relationships with top Las Vegas builders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customization Guidance</h4>
                    <p className="text-gray-600">Help you choose the right upgrades and finishes</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Jan Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">New construction specialist</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-gray-700">5-star new construction reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through Las Vegas's new construction market with personalized service and builder partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Builder Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Communities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
