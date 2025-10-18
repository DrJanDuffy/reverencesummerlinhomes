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
  Crown,
  Gem
} from "lucide-react";

export function meta() {
  return [
    { title: "Luxury Homes Las Vegas | Ultra-Luxury Real Estate | Dr. Janet Duffy" },
    { name: "description", content: "Discover ultra-luxury homes in Las Vegas. Dr. Janet Duffy specializes in luxury real estate with custom estates, resort amenities, and exclusive communities." },
    { name: "keywords", content: "luxury homes Las Vegas, ultra-luxury real estate, custom estates, luxury communities, Dr. Janet Duffy" },
    { property: "og:title", content: "Luxury Homes Las Vegas | Ultra-Luxury Real Estate" },
    { property: "og:description", content: "Ultra-luxury homes in Las Vegas with custom estates, resort amenities, and exclusive communities. Expert real estate guidance from Dr. Janet Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Luxury Homes Las Vegas | Dr. Janet Duffy" },
    { name: "twitter:description", content: "Ultra-luxury homes in Las Vegas with custom estates and resort amenities." }
  ];
}

export default function LuxuryHomes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Crown className="w-4 h-4 mr-2" />
              Ultra-Luxury Collection
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Luxury Homes Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Discover the finest in ultra-luxury living with custom estates, resort-style amenities, and exclusive communities in Las Vegas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                <Home className="w-5 h-5 mr-2" />
                View Luxury Collection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Private Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ultra-Luxury Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the pinnacle of luxury living with custom-designed estates, world-class amenities, and exclusive communities that define sophisticated living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Custom Estates</CardTitle>
                <CardDescription>
                  Architecturally designed masterpieces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom-built estates featuring unique architecture, premium materials, and personalized design elements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Gem className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Resort Amenities</CardTitle>
                <CardDescription>
                  World-class facilities and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy resort-style pools, spas, fitness centers, concierge services, and exclusive member privileges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Exclusive Communities</CardTitle>
                <CardDescription>
                  Gated and private enclaves
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in exclusive gated communities with 24/7 security, private amenities, and selective membership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Luxury Features & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the finest in luxury living with unparalleled amenities and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Architecture</h4>
                    <p className="text-gray-600">Unique designs by renowned architects and builders</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Materials</h4>
                    <p className="text-gray-600">Marble, granite, hardwood, and imported finishes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Smart Home Technology</h4>
                    <p className="text-gray-600">Integrated automation, security, and entertainment systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wine Cellars & Theaters</h4>
                    <p className="text-gray-600">Private wine cellars and home theaters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Resort-Style Backyards</h4>
                    <p className="text-gray-600">Infinity pools, outdoor kitchens, and entertainment areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exclusive Communities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">The Ridges - Ultra-luxury mountain living</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Red Rock Country Club - Golf course estates</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Summerlin West - Luxury suburban</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Custom Estate Areas - Private enclaves</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Golf Course Communities - Championship courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Luxury Price Ranges
            </h2>
            <p className="text-xl text-gray-600">
              From elegant estates to ultra-luxury masterpieces, find your perfect luxury home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury Estates</CardTitle>
                <CardDescription>Starting from $1.5M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4,000 - 6,000 sq ft</li>
                  <li>• 4-5 bedrooms</li>
                  <li>• 4-6 bathrooms</li>
                  <li>• 3+ car garage</li>
                  <li>• Resort-style amenities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Ultra-Luxury</CardTitle>
                <CardDescription>Starting from $3M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 6,000 - 10,000 sq ft</li>
                  <li>• 5-7 bedrooms</li>
                  <li>• 6-8 bathrooms</li>
                  <li>• 4+ car garage</li>
                  <li>• Wine cellar & theater</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Custom Masterpieces</CardTitle>
                <CardDescription>Starting from $5M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10,000+ sq ft</li>
                  <li>• 7+ bedrooms</li>
                  <li>• 8+ bathrooms</li>
                  <li>• 6+ car garage</li>
                  <li>• Custom everything</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agent Credentials */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Luxury Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Janet Duffy brings unmatched expertise in ultra-luxury real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-amber-600" />
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
                    <h4 className="font-semibold text-gray-900">Luxury Market Specialist</h4>
                    <p className="text-gray-600">Expertise in ultra-luxury properties and exclusive communities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Exclusive Access</h4>
                    <p className="text-gray-600">Access to off-market properties and pre-construction opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Discrete Service</h4>
                    <p className="text-gray-600">Confidential and professional service for high-profile clients</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Luxury market expert</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">5-star luxury client reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Luxury Living?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Let Dr. Janet Duffy guide you through Las Vegas' ultra-luxury real estate market with personalized service and exclusive access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
              <Calendar className="w-5 h-5 mr-2" />
              Private Consultation
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
