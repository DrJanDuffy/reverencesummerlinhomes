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
  TreePine,
  Waves
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/communities/the-ridges` },
  ];
}

export function meta() {
  return [
    { title: "The Ridges Luxury Homes | Ultra-Luxury Living in Summerlin | Dr. Jan Duffy" },
    { name: "description", content: "Discover ultra-luxury homes in The Ridges, Summerlin's most exclusive community. Dr. Jan Duffy specializes in The Ridges real estate with Red Rock views, championship golf, and resort-style amenities." },
    { name: "keywords", content: "The Ridges homes, Summerlin luxury real estate, ultra-luxury homes, Red Rock views, championship golf, The Ridges realtor, Dr. Jan Duffy" },
    { property: "og:title", content: "The Ridges Luxury Homes | Ultra-Luxury Living in Summerlin" },
    { property: "og:description", content: "Ultra-luxury homes in The Ridges with Red Rock views, championship golf, and resort-style amenities. Expert real estate guidance from Dr. Jan Duffy." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${config.seo.siteUrl}/communities/the-ridges` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "The Ridges Luxury Homes | Dr. Jan Duffy" },
    { name: "twitter:description", content: "Ultra-luxury homes in The Ridges with Red Rock views and championship golf." }
  ];
}

export default function TheRidges() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Star className="w-4 h-4 mr-2" />
              Ultra-Luxury Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Ridges
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Ultra-luxury living at its finest with panoramic Red Rock views, championship golf, and resort-style amenities in Summerlin's most exclusive enclave
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Home className="w-5 h-5 mr-2" />
                View Luxury Homes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Private Tour
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
              The Ridges Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Ridges represents the pinnacle of luxury living in Las Vegas, offering residents unparalleled privacy, breathtaking natural beauty, and world-class amenities in an exclusive mountain setting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Panoramic Views</CardTitle>
                <CardDescription>
                  Breathtaking Red Rock Canyon and valley vistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wake up to stunning mountain panoramas and enjoy unparalleled views of Red Rock Canyon from your private estate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Championship Golf</CardTitle>
                <CardDescription>
                  Red Rock Country Club membership included
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Play on the championship Red Rock Country Club golf course with stunning mountain backdrops and world-class facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Natural Setting</CardTitle>
                <CardDescription>
                  Serene mountain and desert landscape
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy the tranquility of natural desert landscaping with mature trees, native plants, and wildlife.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultra-Luxury Features */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ultra-Luxury Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the finest in luxury living with exclusive amenities and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exclusive Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Red Rock Country Club</h4>
                    <p className="text-gray-600">Championship golf course with mountain views and fine dining</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Resort-Style Pool Complex</h4>
                    <p className="text-gray-600">Multiple pools with cabanas, spa, and poolside service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tennis & Pickleball Courts</h4>
                    <p className="text-gray-600">Professional courts with instruction and tournaments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hiking & Nature Trails</h4>
                    <p className="text-gray-600">Private access to Red Rock Canyon hiking trails</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fitness & Wellness Center</h4>
                    <p className="text-gray-600">State-of-the-art equipment with personal training</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Location</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Red Rock Canyon - 3 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Downtown Summerlin - 8 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Las Vegas Strip - 20 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">McCarran Airport - 25 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Downtown Las Vegas - 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Home Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ultra-Luxury Home Collection
            </h2>
            <p className="text-xl text-gray-600">
              From magnificent estates to custom-built masterpieces, discover your perfect Ridges residence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury Estates</CardTitle>
                <CardDescription>Starting from $2.5M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5,000 - 8,000 sq ft</li>
                  <li>• 4-6 bedrooms</li>
                  <li>• 5-7 bathrooms</li>
                  <li>• 4+ car garage</li>
                  <li>• Resort-style backyard</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Custom Masterpieces</CardTitle>
                <CardDescription>Starting from $4M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 8,000+ sq ft</li>
                  <li>• 6+ bedrooms</li>
                  <li>• 7+ bathrooms</li>
                  <li>• 6+ car garage</li>
                  <li>• Wine cellar & theater</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Architectural Excellence</CardTitle>
                <CardDescription>Price varies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom architecture</li>
                  <li>• Premium materials</li>
                  <li>• Smart home systems</li>
                  <li>• Energy efficient</li>
                  <li>• Personal touches</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy & Security
            </h2>
            <p className="text-xl text-gray-600">
              Enjoy the ultimate in privacy and security in The Ridges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle>Gated Community</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 security patrol</li>
                  <li>• Controlled access gates</li>
                  <li>• Video surveillance</li>
                  <li>• Emergency response</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Natural Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mature landscaping</li>
                  <li>• Natural barriers</li>
                  <li>• Spacious lots</li>
                  <li>• Mountain backdrop</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Limited home sites</li>
                  <li>• Selective residents</li>
                  <li>• Private events</li>
                  <li>• Community exclusivity</li>
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
              Your Ridges Luxury Specialist
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in ultra-luxury real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-emerald-600" />
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
                    <h4 className="font-semibold text-gray-900">Ultra-Luxury Specialist</h4>
                    <p className="text-gray-600">Expertise in The Ridges and ultra-luxury market trends</p>
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
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Jan Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Ultra-luxury market expert</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">5-star luxury client reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Ultra-Luxury Living?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through The Ridges ultra-luxury real estate market with personalized service and exclusive access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
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
