import type { Route } from "./+types/monument-at-reverence";
import { monumentData } from "~/lib/monument-data";
import { config } from "~/lib/config";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { RealScoutListingsWidget } from "~/components/RealScoutListingsWidget";
import { 
  Home, 
  Shield, 
  Zap, 
  MapPin, 
  Phone, 
  Clock, 
  Star,
  CheckCircle,
  Mountain,
  ShoppingBag,
  GraduationCap,
  Car
} from "lucide-react";

export function meta() {
  return [
    { title: `${monumentData.name} | ${config.seo.siteName}` },
    { 
      name: "description", 
      content: `${monumentData.description.short} Expert guidance from Dr. Jan Duffy, featured Pulte Homes agent. Starting from the $500s.` 
    },
    { 
      name: "keywords", 
      content: "Monument at Reverence, Pulte Homes, Summerlin townhomes, new construction Las Vegas, Reverence community, Dr. Jan Duffy" 
    },
    { property: "og:title", content: `${monumentData.name} | ${config.seo.siteName}` },
    { property: "og:description", content: monumentData.description.short },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${config.seo.siteUrl}/communities/monument-at-reverence` },
  ];
}

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/communities/monument-at-reverence` },
  ];
}

export default function MonumentAtReverence() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Featured Community
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Pulte Homes
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {monumentData.name}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                {monumentData.description.short}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sales Office
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                  Schedule Tour
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Price Range:</span>
                    <span className="font-semibold">Starting from the $500s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Square Feet:</span>
                    <span className="font-semibold">1,654 - 1,869 sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bedrooms:</span>
                    <span className="font-semibold">3-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bathrooms:</span>
                    <span className="font-semibold">2.5-3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Garage:</span>
                    <span className="font-semibold">2-car</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Spotlight */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary-800">
                Meet Your On-Site Agent
              </CardTitle>
              <CardDescription className="text-lg">
                Dr. Jan Duffy - Featured Pulte Homes Buying Agent
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg mb-6">
                  As the featured Pulte Homes buying agent for Monument at Reverence, I provide 
                  expert guidance throughout your home buying journey. With my deep knowledge of 
                  the community and builder relationships, I'll help you find the perfect home 
                  and secure the best possible terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary-600 hover:bg-primary-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Dr. Jan Duffy
                  </Button>
                  <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {monumentData.description.long}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Location */}
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary-600 mb-2" />
                <CardTitle>Prime Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Located in Summerlin's northernmost guard-gated community with easy access to 
                  Red Rock Canyon and Downtown Summerlin.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">24-hour guard-gated security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Minutes from Red Rock Canyon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Close to Downtown Summerlin</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy Efficiency */}
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary-600 mb-2" />
                <CardTitle>Energy Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built with energy efficiency in mind, featuring HERS scores of 55-65, 
                  significantly lower than typical resale homes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">HERS Score: 55-65</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">ENERGY STAR certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Lower utility bills</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Construction */}
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary-600 mb-2" />
                <CardTitle>Quality & Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Backed by Pulte's comprehensive 10-year warranty and built with premium 
                  materials and expert craftsmanship.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">10-year warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Premium materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Expert craftsmanship</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Floor Plans</h2>
            <p className="text-xl text-muted-foreground">
              Choose from three thoughtfully designed floor plans
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {monumentData.floorPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary-600">
                    {plan.sqft} sq ft
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <span className="font-semibold">{plan.beds}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bathrooms:</span>
                      <span className="font-semibold">{plan.baths}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stories:</span>
                      <span className="font-semibold">{plan.stories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Garage:</span>
                      <span className="font-semibold">{plan.garage}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6">
                    View Floor Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Amenities</h2>
            <p className="text-xl text-muted-foreground">
              Enjoy resort-style amenities right in your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monumentData.amenities.map((amenity, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="font-semibold">{amenity}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nearby Attractions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need is just minutes away
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monumentData.nearbyAttractions.map((attraction, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      {attraction.type === "Shopping & Dining" && <ShoppingBag className="w-5 h-5 text-primary-600" />}
                      {attraction.type === "Recreation" && <Mountain className="w-5 h-5 text-primary-600" />}
                      {attraction.type === "Entertainment" && <Star className="w-5 h-5 text-primary-600" />}
                      {attraction.type === "Sports & Entertainment" && <Car className="w-5 h-5 text-primary-600" />}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{attraction.name}</CardTitle>
                      <CardDescription>{attraction.distance}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top-Rated Schools</h2>
            <p className="text-xl text-muted-foreground">
              Excellent education options for your family
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {monumentData.schools.map((school, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-primary-600" />
                    <div>
                      <CardTitle>{school.name}</CardTitle>
                      <CardDescription>{school.level}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {school.rating}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pulte */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Pulte Homes?</h2>
            <p className="text-xl text-primary-100">
              Over 70 years of homebuilding excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monumentData.whyPulte.map((reason, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-100">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make Monument at Reverence Your Home?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact Dr. Jan Duffy today to schedule your private tour and learn more about 
            available homes and special incentives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Phone className="w-5 h-5 mr-2" />
              Call {config.contact.phone}
            </Button>
            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
              Schedule Consultation
            </Button>
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-primary-600" />
              <span className="font-semibold">Sales Office Hours</span>
            </div>
            <p className="text-muted-foreground">
              Monday-Saturday: 10:00 AM - 6:00 PM | Sunday: 10:00 AM - 6:00 PM
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Located at {monumentData.location.fullAddress}
            </p>
          </div>
        </div>
      </section>

      {/* Available Properties - RealScout Widget - Show listings in this price range */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR,,TOWNHOUSE"
            priceMin={400000}
            priceMax={700000}
            title="Similar Properties in Las Vegas & Summerlin"
            subtitle="Explore other available properties in the Monument at Reverence price range. Perfect for buyers considering their options."
          />
        </div>
      </section>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-8">
          We're having trouble loading the Monument at Reverence page.
        </p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
