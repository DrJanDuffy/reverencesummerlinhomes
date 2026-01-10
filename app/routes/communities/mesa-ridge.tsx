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
  Zap,
  Car,
  Sun
} from "lucide-react";

export function meta() {
  return [
    { title: "Mesa Ridge Homes for Sale | Mountain Views & Modern Living | Dr. Jan Duffy" },
    { name: "description", content: "Discover homes for sale in Mesa Ridge, Las Vegas. Dr. Jan Duffy specializes in Mesa Ridge real estate with mountain views, modern amenities, and scenic living." },
    { name: "keywords", content: "Mesa Ridge homes for sale, Mesa Ridge Las Vegas real estate, mountain views, modern living, scenic homes, Dr. Jan Duffy" },
    { property: "og:title", content: "Mesa Ridge Homes for Sale | Mountain Views & Modern Living" },
    { property: "og:description", content: "Homes for sale in Mesa Ridge, Las Vegas with mountain views, modern amenities, and scenic living. Expert real estate guidance from Dr. Jan Duffy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Mesa Ridge Homes for Sale | Dr. Jan Duffy" },
    { name: "twitter:description", content: "Homes for sale in Mesa Ridge, Las Vegas with mountain views and modern amenities." }
  ];
}

export default function MesaRidge() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Mountain className="w-4 h-4 mr-2" />
              Mountain Views & Modern Living
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mesa Ridge Homes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Discover elevated living in Mesa Ridge, Las Vegas with stunning mountain views, modern amenities, and scenic desert landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                <Home className="w-5 h-5 mr-2" />
                View Mesa Ridge Homes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mesa Ridge Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Mesa Ridge Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mesa Ridge offers elevated living with breathtaking mountain views, modern amenities, and a peaceful desert setting that provides the perfect escape from city life while maintaining easy access to Las Vegas attractions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Mountain Views</CardTitle>
                <CardDescription>
                  Stunning panoramic vistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy breathtaking mountain views and desert landscapes from your Mesa Ridge home, providing a serene and picturesque living environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Modern Amenities</CardTitle>
                <CardDescription>
                  Contemporary home features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Live in modern homes with contemporary designs, energy-efficient features, and updated amenities that provide comfort and style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Desert Living</CardTitle>
                <CardDescription>
                  Peaceful desert setting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience the beauty of desert living with native landscaping, quiet streets, and a peaceful atmosphere away from city noise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mesa Ridge Features */}
      <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mesa Ridge Lifestyle & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best of elevated desert living with modern conveniences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Features</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mountain Views</h4>
                    <p className="text-gray-600">Panoramic views of surrounding mountains and desert landscapes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Homes</h4>
                    <p className="text-gray-600">Contemporary home designs with updated features and amenities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Desert Landscaping</h4>
                    <p className="text-gray-600">Native desert plants and xeriscaping for low-maintenance beauty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quiet Living</h4>
                    <p className="text-gray-600">Peaceful atmosphere away from city noise and traffic</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Outdoor Recreation</h4>
                    <p className="text-gray-600">Easy access to hiking trails and outdoor activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Location</h3>
              <div className="space-y-4">
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
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Red Rock Canyon - 10 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Mount Charleston - 40 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesa Ridge Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mesa Ridge Neighborhoods
            </h2>
            <p className="text-xl text-gray-600">
              Discover the diverse neighborhoods and home styles in Mesa Ridge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Mesa Ridge Estates</CardTitle>
                <CardDescription>Single-family homes with views</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Spacious single-family homes</li>
                  <li>• Mountain and desert views</li>
                  <li>• Private yards</li>
                  <li>• Modern floor plans</li>
                  <li>• Desert landscaping</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Mesa Ridge Heights</CardTitle>
                <CardDescription>Elevated homes with panoramic views</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Elevated home sites</li>
                  <li>• Panoramic mountain views</li>
                  <li>• Premium finishes</li>
                  <li>• Larger lots</li>
                  <li>• Exclusive location</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Mesa Ridge Village</CardTitle>
                <CardDescription>Modern townhomes and condos</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contemporary townhomes</li>
                  <li>• Low-maintenance living</li>
                  <li>• Community amenities</li>
                  <li>• Modern finishes</li>
                  <li>• Scenic views</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
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
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Hiking & Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Desert hiking trails</li>
                  <li>• Mountain access</li>
                  <li>• Scenic overlooks</li>
                  <li>• Wildlife viewing</li>
                  <li>• Photography opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Desert Landscapes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Native desert plants</li>
                  <li>• Xeriscaping</li>
                  <li>• Rock formations</li>
                  <li>• Desert gardens</li>
                  <li>• Low-maintenance beauty</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Red Rock Canyon</li>
                  <li>• Mount Charleston</li>
                  <li>• Valley of Fire</li>
                  <li>• Lake Mead</li>
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
              Your Mesa Ridge Real Estate Expert
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Jan Duffy brings unmatched expertise in Mesa Ridge real estate
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
                    <h4 className="font-semibold text-gray-900">Mesa Ridge Specialist</h4>
                    <p className="text-gray-600">Expertise in Mesa Ridge communities and mountain view properties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Desert Living Expert</h4>
                    <p className="text-gray-600">Understanding of desert lifestyle and xeriscaping benefits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mountain View Properties</h4>
                    <p className="text-gray-600">Knowledge of elevated properties and scenic home values</p>
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
                  <span className="text-gray-700">Mesa Ridge real estate expert</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Top 1% of Las Vegas agents</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">5-star Mesa Ridge client reviews</span>
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
            Ready to Find Your Mesa Ridge Home?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let Dr. Jan Duffy guide you through Mesa Ridge's real estate market with personalized service and local expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
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
