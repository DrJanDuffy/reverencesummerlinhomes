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
  ShoppingBag,
  GraduationCap,
  Calendar,
  ArrowRight,
  Users,
  Award,
  Shield,
  Building,
  Coffee,
  Utensils
} from "lucide-react";

export function meta() {
  return [
    { title: "Downtown Summerlin Homes | Urban Living in Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Discover urban living in Downtown Summerlin, Las Vegas. Dr. Janet Duffy specializes in Downtown Summerlin real estate with shopping, dining, entertainment, and modern amenities." },
    { name: "keywords", content: "Downtown Summerlin homes, Las Vegas urban real estate, shopping district homes, Downtown Summerlin realtor, Dr. Janet Duffy" },
    { property: "og:title", content: "Downtown Summerlin Homes | Urban Living in Las Vegas" },
    { property: "og:description", content: "Urban living in Downtown Summerlin with shopping, dining, entertainment, and modern amenities. Expert real estate guidance from Dr. Janet Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Downtown Summerlin Homes | Dr. Janet Duffy" },
    { name: "twitter:description", content: "Urban living in Downtown Summerlin with shopping, dining, and entertainment." }
  ];
}

export default function DowntownSummerlin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              Urban Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Downtown Summerlin
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Experience the best of urban living with world-class shopping, dining, entertainment, and modern amenities in the heart of Summerlin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                <Home className="w-5 h-5 mr-2" />
                View Urban Homes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Downtown Summerlin Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Downtown Summerlin offers the perfect blend of urban convenience and suburban comfort, with world-class shopping, dining, entertainment, and modern residential options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>World-Class Shopping</CardTitle>
                <CardDescription>
                  Premier retail and dining destinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Shop at over 125 stores including Nordstrom, Apple, and luxury boutiques, plus enjoy fine dining and casual restaurants.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Modern Living</CardTitle>
                <CardDescription>
                  Contemporary condos and townhomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in modern condominiums and townhomes with luxury finishes, smart home features, and resort-style amenities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Dining & Entertainment</CardTitle>
                <CardDescription>
                  Diverse culinary and entertainment options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy everything from fine dining to casual eateries, plus entertainment venues, movie theaters, and community events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urban Lifestyle Features */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Urban Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the convenience and excitement of urban living with world-class amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Downtown Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Shopping District</h4>
                    <p className="text-gray-600">125+ stores including Nordstrom, Apple, and luxury boutiques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dining Scene</h4>
                    <p className="text-gray-600">From fine dining to casual eateries and food courts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Entertainment</h4>
                    <p className="text-gray-600">Movie theaters, live music, and community events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Walkability</h4>
                    <p className="text-gray-600">Pedestrian-friendly streets and outdoor spaces</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Amenities</h4>
                    <p className="text-gray-600">Fitness centers, pools, and concierge services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Location</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Downtown Summerlin - Walking distance</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Las Vegas Strip - 15 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">McCarran Airport - 20 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Red Rock Canyon - 10 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Downtown Las Vegas - 25 minutes</span>
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
              Modern Living Options
            </h2>
            <p className="text-xl text-gray-600">
              From luxury condos to modern townhomes, find your perfect Downtown Summerlin residence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury Condos</CardTitle>
                <CardDescription>Starting from $400,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1,200 - 2,500 sq ft</li>
                  <li>• 1-3 bedrooms</li>
                  <li>• 1-3 bathrooms</li>
                  <li>• Underground parking</li>
                  <li>• Resort amenities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Modern Townhomes</CardTitle>
                <CardDescription>Starting from $600,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1,800 - 3,000 sq ft</li>
                  <li>• 2-4 bedrooms</li>
                  <li>• 2-4 bathrooms</li>
                  <li>• 2-car garage</li>
                  <li>• Private patio</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Penthouse Living</CardTitle>
                <CardDescription>Starting from $1.2M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3,000+ sq ft</li>
                  <li>• 3+ bedrooms</li>
                  <li>• 3+ bathrooms</li>
                  <li>• Private elevator</li>
                  <li>• Panoramic views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shopping & Dining */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shopping & Dining Scene
            </h2>
            <p className="text-xl text-gray-600">
              Discover the vibrant shopping and dining options in Downtown Summerlin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Retail Stores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Nordstrom</li>
                  <li>• Apple Store</li>
                  <li>• Anthropologie</li>
                  <li>• Lululemon</li>
                  <li>• And 120+ more</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Dining Options</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fine dining restaurants</li>
                  <li>• Casual eateries</li>
                  <li>• Food court options</li>
                  <li>• Coffee shops</li>
                  <li>• Bars & lounges</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Entertainment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Movie theaters</li>
                  <li>• Live music venues</li>
                  <li>• Community events</li>
                  <li>• Seasonal festivals</li>
                  <li>• Outdoor concerts</li>
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
              Your Downtown Summerlin Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Janet Duffy brings unmatched expertise in urban real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-purple-600" />
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
                    <h4 className="font-semibold text-gray-900">Urban Living Specialist</h4>
                    <p className="text-gray-600">Expertise in Downtown Summerlin and urban market trends</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Amenities Expert</h4>
                    <p className="text-gray-600">Knowledge of condo and townhome amenities and features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lifestyle Consultant</h4>
                    <p className="text-gray-600">Help you find the perfect urban lifestyle match</p>
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

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Urban living specialist</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-gray-700">5-star urban client reviews</span>
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
            Ready for Urban Living?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let Dr. Janet Duffy guide you through Downtown Summerlin's urban real estate market with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
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
