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
  Waves,
  Building,
  Zap
} from "lucide-react";

export function meta() {
  return [
    { title: "Boulder City Homes for Sale | Historic Small Town Living | Dr. Janet Duffy" },
    { name: "description", content: "Discover homes for sale in Boulder City, Nevada. Dr. Janet Duffy specializes in Boulder City real estate with historic charm, outdoor recreation, and small-town living." },
    { name: "keywords", content: "Boulder City homes for sale, Boulder City Nevada real estate, historic homes, outdoor recreation, small town living, Dr. Janet Duffy" },
    { property: "og:title", content: "Boulder City Homes for Sale | Historic Small Town Living" },
    { property: "og:description", content: "Homes for sale in Boulder City, Nevada with historic charm, outdoor recreation, and small-town living. Expert real estate guidance from Dr. Janet Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Boulder City Homes for Sale | Dr. Janet Duffy" },
    { name: "twitter:description", content: "Homes for sale in Boulder City, Nevada with historic charm and outdoor recreation." }
  ];
}

export default function BoulderCity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <TreePine className="w-4 h-4 mr-2" />
              Historic Small Town Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Boulder City Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto">
              Discover historic charm and outdoor recreation in Boulder City, Nevada with small-town living and natural beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                <Home className="w-5 h-5 mr-2" />
                View Boulder City Homes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Boulder City Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boulder City offers a unique blend of historic charm and outdoor recreation, with a small-town atmosphere, beautiful desert landscapes, and proximity to Lake Mead National Recreation Area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Historic Charm</CardTitle>
                <CardDescription>
                  Rich history and character
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Boulder City was built in the 1930s to house Hoover Dam workers and maintains its historic character with preserved architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Outdoor Recreation</CardTitle>
                <CardDescription>
                  Natural beauty and activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy hiking, biking, boating, and fishing at Lake Mead National Recreation Area and surrounding desert landscapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Small Town Living</CardTitle>
                <CardDescription>
                  Close-knit community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience a tight-knit community with friendly neighbors, local events, and a slower pace of life away from city hustle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Boulder City Features */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Boulder City Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best of historic small-town living with outdoor recreation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Historic Downtown</h4>
                    <p className="text-gray-600">Charming downtown with local shops, restaurants, and historic buildings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lake Mead Access</h4>
                    <p className="text-gray-600">Direct access to Lake Mead National Recreation Area for water activities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hoover Dam</h4>
                    <p className="text-gray-600">Minutes from the iconic Hoover Dam and visitor center</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Gambling</h4>
                    <p className="text-gray-600">One of Nevada's few cities without gambling, maintaining family values</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Desert Landscapes</h4>
                    <p className="text-gray-600">Beautiful desert scenery with hiking trails and outdoor recreation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Location</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Hoover Dam - 5 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Lake Mead - 10 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Las Vegas Strip - 30 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">McCarran Airport - 35 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <span className="text-gray-700">Downtown Las Vegas - 40 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Boulder City Neighborhoods
            </h2>
            <p className="text-xl text-gray-600">
              Discover the diverse neighborhoods and historic areas in Boulder City
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Historic District</CardTitle>
                <CardDescription>Original 1930s homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Original Hoover Dam worker homes</li>
                  <li>• Historic architecture</li>
                  <li>• Mature landscaping</li>
                  <li>• Walking distance to downtown</li>
                  <li>• Character and charm</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Eldorado Valley</CardTitle>
                <CardDescription>Modern desert living</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Newer construction</li>
                  <li>• Desert views</li>
                  <li>• Larger lots</li>
                  <li>• Modern amenities</li>
                  <li>• Privacy and space</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Downtown Area</CardTitle>
                <CardDescription>Walkable community</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Close to shops & restaurants</li>
                  <li>• Community events</li>
                  <li>• Historic charm</li>
                  <li>• Small-town feel</li>
                  <li>• Local amenities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
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
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Waves className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Lake Mead</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Boating and fishing</li>
                  <li>• Swimming beaches</li>
                  <li>• Hiking trails</li>
                  <li>• Camping areas</li>
                  <li>• Water sports</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Desert Hiking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Desert trails</li>
                  <li>• Scenic overlooks</li>
                  <li>• Wildlife viewing</li>
                  <li>• Photography opportunities</li>
                  <li>• Nature exploration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>Hoover Dam</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dam tours</li>
                  <li>• Visitor center</li>
                  <li>• Historic exhibits</li>
                  <li>• Scenic viewpoints</li>
                  <li>• Engineering marvel</li>
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
              Your Boulder City Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Janet Duffy brings unmatched expertise in Boulder City real estate
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
                    <h4 className="font-semibold text-gray-900">Boulder City Specialist</h4>
                    <p className="text-gray-600">Expertise in Boulder City communities and historic properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Historic Property Expert</h4>
                    <p className="text-gray-600">Understanding of historic homes and preservation requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Outdoor Recreation Focus</h4>
                    <p className="text-gray-600">Knowledge of outdoor recreation opportunities and lifestyle</p>
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

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Janet Duffy?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Licensed Nevada Real Estate Agent</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Boulder City real estate expert</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-gray-700">5-star Boulder City client reviews</span>
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
            Ready to Find Your Boulder City Home?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Let Dr. Janet Duffy guide you through Boulder City's real estate market with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
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
