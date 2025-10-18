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
  Circle,
  TreePine
} from "lucide-react";

export function meta() {
  return [
    { title: "Red Rock Country Club Homes | Golf Course Living in Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Discover luxury golf course homes in Red Rock Country Club, Las Vegas. Dr. Janet Duffy specializes in Red Rock Country Club real estate with championship golf, mountain views, and resort amenities." },
    { name: "keywords", content: "Red Rock Country Club homes, golf course homes Las Vegas, championship golf, mountain views, Dr. Janet Duffy" },
    { property: "og:title", content: "Red Rock Country Club Homes | Golf Course Living in Las Vegas" },
    { property: "og:description", content: "Luxury golf course homes in Red Rock Country Club with championship golf, mountain views, and resort amenities. Expert real estate guidance from Dr. Janet Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Red Rock Country Club Homes | Dr. Janet Duffy" },
    { name: "twitter:description", content: "Luxury golf course homes in Red Rock Country Club with championship golf and mountain views." }
  ];
}

export default function RedRockCountryClub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Circle className="w-4 h-4 mr-2" />
              Championship Golf Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Red Rock Country Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Experience luxury golf course living with championship golf, stunning mountain views, and resort-style amenities in Las Vegas's premier golf community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Home className="w-5 h-5 mr-2" />
                View Golf Course Homes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Golf Tour
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
              Championship Golf Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Red Rock Country Club offers the ultimate in golf course living with a championship course, luxury amenities, and breathtaking mountain views in an exclusive gated community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Circle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Championship Golf</CardTitle>
                <CardDescription>
                  Arnold Palmer designed course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Play on the Arnold Palmer-designed championship course with stunning mountain backdrops and challenging play for all skill levels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Mountain Views</CardTitle>
                <CardDescription>
                  Breathtaking Red Rock vistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy panoramic views of Red Rock Canyon and the Spring Mountains from your golf course home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Resort Amenities</CardTitle>
                <CardDescription>
                  World-class facilities and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy resort-style pools, tennis courts, fitness center, fine dining, and exclusive member privileges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Golf & Amenities */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Golf & Resort Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience world-class golf and resort-style amenities in an exclusive setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Golf Course Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Arnold Palmer Design</h4>
                    <p className="text-gray-600">Championship course designed by golf legend Arnold Palmer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mountain Backdrops</h4>
                    <p className="text-gray-600">Stunning views of Red Rock Canyon and Spring Mountains</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Practice Facilities</h4>
                    <p className="text-gray-600">Driving range, putting greens, and short game area</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Golf Shop & Lessons</h4>
                    <p className="text-gray-600">Professional instruction and premium equipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tournament Play</h4>
                    <p className="text-gray-600">Member tournaments and competitive events</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resort Amenities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Resort-style pool complex</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Tennis and pickleball courts</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">State-of-the-art fitness center</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Fine dining restaurant</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Concierge services</span>
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
              Golf Course Home Collection
            </h2>
            <p className="text-xl text-gray-600">
              From elegant villas to luxury estates, find your perfect golf course residence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Golf Villas</CardTitle>
                <CardDescription>Starting from $800,000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2,500 - 3,500 sq ft</li>
                  <li>• 3-4 bedrooms</li>
                  <li>• 3-4 bathrooms</li>
                  <li>• 2-3 car garage</li>
                  <li>• Golf course views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Luxury Estates</CardTitle>
                <CardDescription>Starting from $1.2M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3,500 - 5,000 sq ft</li>
                  <li>• 4-5 bedrooms</li>
                  <li>• 4-5 bathrooms</li>
                  <li>• 3+ car garage</li>
                  <li>• Premium golf views</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Custom Masterpieces</CardTitle>
                <CardDescription>Starting from $2M</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5,000+ sq ft</li>
                  <li>• 5+ bedrooms</li>
                  <li>• 5+ bathrooms</li>
                  <li>• 4+ car garage</li>
                  <li>• Panoramic views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Country Club Membership
            </h2>
            <p className="text-xl text-gray-600">
              Exclusive membership benefits and privileges at Red Rock Country Club
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Circle className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Golf Privileges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Unlimited golf access</li>
                  <li>• Preferred tee times</li>
                  <li>• Guest privileges</li>
                  <li>• Tournament participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Social Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fine dining access</li>
                  <li>• Social events</li>
                  <li>• Member networking</li>
                  <li>• Family activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Exclusive Access</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Private facilities</li>
                  <li>• Concierge services</li>
                  <li>• Reciprocal privileges</li>
                  <li>• VIP treatment</li>
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
              Your Golf Course Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Janet Duffy brings unmatched expertise in golf course real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-8 h-8 text-green-600" />
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
                    <h4 className="font-semibold text-gray-900">Golf Course Specialist</h4>
                    <p className="text-gray-600">Expertise in Red Rock Country Club and golf course properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Membership Knowledge</h4>
                    <p className="text-gray-600">Understanding of country club membership and benefits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Luxury Market Expert</h4>
                    <p className="text-gray-600">Specialized in high-end golf course properties</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Golf course real estate expert</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-700">5-star golf course client reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Golf Course Living?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let Dr. Janet Duffy guide you through Red Rock Country Club's luxury golf course real estate market with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Golf Tour
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
