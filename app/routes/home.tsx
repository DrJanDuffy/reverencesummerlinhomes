import { Link } from "react-router";
import type { LinksFunction } from "react-router";
import { config } from "~/lib/config";
import { monumentData } from "~/lib/monument-data";
import { communitiesData } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { RealScoutListingsWidget } from "~/components/RealScoutListingsWidget";
import { 
  Home as HomeIcon, 
  MapPin, 
  Phone, 
  Mail, 
  Star,
  CheckCircle,
  Users,
  Award,
  Shield,
  Zap,
  Calendar,
  ArrowRight
} from "lucide-react";

export function meta() {
  return [
    { title: `Reverence Summerlin Real Estate Expert | Monument at Reverence | Dr. Jan Duffy` },
    { name: "description", content: `Expert real estate services in Reverence Summerlin, Monument at Reverence, and Las Vegas. Dr. Jan Duffy, certified Summerlin specialist and featured Pulte Homes agent at Monument at Reverence, helps you find your perfect Reverence Summerlin home.` },
    { name: "keywords", content: "Reverence Summerlin real estate, Monument at Reverence, Reverence Summerlin homes, Dr. Jan Duffy, Summerlin real estate, Pulte Homes Reverence Summerlin, Las Vegas real estate" },
    { property: "og:title", content: `Reverence Summerlin Real Estate Expert | Monument at Reverence | Dr. Jan Duffy` },
    { property: "og:description", content: `Expert real estate services in Reverence Summerlin, Monument at Reverence, and Las Vegas. Dr. Jan Duffy helps you find your perfect Reverence Summerlin home.` },
    { property: "og:url", content: `${config.seo.siteUrl}/` },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: `Reverence Summerlin Real Estate Expert | Monument at Reverence` },
    { name: "twitter:description", content: `Expert real estate services in Reverence Summerlin, Monument at Reverence, and Las Vegas. Dr. Jan Duffy helps you find your perfect Reverence Summerlin home.` },
  ];
}

export const links: LinksFunction = () => [
  { rel: "canonical", href: `${config.seo.siteUrl}/` },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Reverence Summerlin Expert
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Monument at Reverence Agent
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Certified Summerlin Specialist
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                Your Reverence Summerlin Real Estate Expert
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white font-semibold">
                Dr. Jan Duffy - Certified Summerlin Specialist & Featured Monument at Reverence Agent
              </p>
              
              <p className="text-lg mb-8 text-white/95 leading-relaxed">
                Specializing in Reverence Summerlin communities, Monument at Reverence by Pulte Homes, and helping 
                families find their perfect home in Las Vegas. Featured Pulte Homes buying agent with deep Reverence Summerlin market knowledge and exclusive access to Monument at Reverence new construction opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`}>
                    <Phone className="w-5 h-5" />
                    Call {config.contact.phone}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-ctaSecondary-500 hover:bg-ctaSecondary-600 text-white w-full sm:w-auto"
                  asChild
                >
                  <a href={`tel:+1${config.contact.phoneSecondary.replace(/\D/g, '')}`}>
                    <Phone className="w-5 h-5" />
                    Urgent: {config.contact.phoneSecondary}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
                  asChild
                >
                  <a href={config.contact.calendly} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-light" />
                  <span>Certified Summerlin Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold-light" />
                  <span>Featured Pulte Agent</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-white">Get Your Free Home Valuation</h2>
                <p className="text-white/95 mb-6 leading-relaxed">
                  Discover what your Las Vegas home is worth in today's market. 
                  Get instant results and expert insights from Dr. Jan Duffy.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/valuation">
                      <Zap className="w-4 h-4" aria-hidden="true" />
                      Get Free Valuation
                    </Link>
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                    <Shield className="w-4 h-4 text-gold-light" />
                    <span>Your information is secure and private</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-gold-light" />
                    <span>No obligation, instant results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings - RealScout Widget - High Conversion Placement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RealScoutListingsWidget
            sortOrder="NEWEST"
            listingStatus="For Sale"
            propertyTypes=",SFR"
            priceMin={400000}
            priceMax={700000}
            title="Featured Las Vegas Properties"
            subtitle="Explore our latest listings in the Las Vegas and Summerlin area. From luxury homes to family-friendly communities, find your perfect property."
          />
        </div>
      </section>

      {/* Agent Credentials */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dr. Jan Duffy?</h2>
            <p className="text-xl text-gray-700">
              Your trusted partner in Las Vegas real estate
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Certified Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Certified Summerlin specialist with deep knowledge of local communities 
                  and market trends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Featured Pulte Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Featured buying agent for Pulte Homes at Monument at Reverence with 
                  exclusive access to new construction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Dedicated to providing personalized service and expert guidance 
                  throughout your real estate journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Local Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Deep knowledge of Las Vegas neighborhoods, schools, amenities, and 
                  local market conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Communities</h2>
            <p className="text-xl text-gray-700">
              Discover the best neighborhoods in Las Vegas and Summerlin
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communitiesData.slice(0, 6).map((community) => (
              <Card key={community.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{community.name}</CardTitle>
                    <Badge variant="secondary">{community.type}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary-600">
                    {community.priceRange}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{community.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Sq Ft:</span>
                      <span className="font-semibold">{community.sqftRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bedrooms:</span>
                      <span className="font-semibold">{community.beds}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bathrooms:</span>
                      <span className="font-semibold">{community.baths}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {community.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/communities/${community.id}`}>
                      Learn More About {community.name}
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/communities">
                View All Communities
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Monument at Reverence Spotlight */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                Featured Community
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Monument at Reverence
              </h2>
              <p className="text-xl mb-6 text-white/95 leading-relaxed">
                {monumentData.description.short}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24-hour guard-gated security</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Energy-efficient homes (HERS rated)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pulte's 10-year warranty</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Dr. Jan Duffy on-site agent</span>
                </div>
              </div>
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
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Price Range:</span>
                    <span className="font-semibold">Starting from the $500s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Square Feet:</span>
                    <span className="font-semibold">1,654 - 1,869</span>
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

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Estate Services</h2>
            <p className="text-xl text-gray-700">
              Comprehensive services for buyers, sellers, and investors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Home Buying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Expert guidance through the home buying process, from search to closing.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• New construction expertise</li>
                  <li>• Market analysis</li>
                  <li>• Negotiation support</li>
                  <li>• Financing guidance</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/buying">Learn About Home Buying</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Home Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Maximize your home's value with professional marketing and pricing strategies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Market pricing analysis</li>
                  <li>• Professional marketing</li>
                  <li>• Staging consultation</li>
                  <li>• Negotiation expertise</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/selling">Learn About Home Selling</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <CardTitle>Relocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Smooth relocation services for families moving to Las Vegas.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-6">
                  <li>• Area orientation</li>
                  <li>• School information</li>
                  <li>• Neighborhood tours</li>
                  <li>• Local connections</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/relocate">Learn About Relocation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What My Clients Are Saying</h2>
            <p className="text-xl text-gray-700">
              Don't just take my word for it. Here's what my clients have to say about their experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-600">Summerlin West</p>
                  </div>
                </div>
                <div className="flex mb-4" role="img" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Dr. Jan Duffy made our relocation from California seamless. Her knowledge of Summerlin communities and attention to detail helped us find the perfect home."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <HomeIcon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-600">The Ridges</p>
                  </div>
                </div>
                <div className="flex mb-4" role="img" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "As first-time homebuyers, we were nervous about the process. Dr. Jan guided us through every step and helped us understand the Las Vegas market."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Jennifer Martinez</h3>
                    <p className="text-sm text-gray-600">Downtown Summerlin</p>
                  </div>
                </div>
                <div className="flex mb-4" role="img" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Dr. Jan helped us sell our home quickly and for top dollar. Her marketing strategy and professional network ensured we had multiple offers within days."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about/reviews">
                Read More Reviews
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Reverence Summerlin Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Reverence Summerlin is the Premier Choice for Las Vegas Living
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reverence Summerlin represents one of Las Vegas's most desirable master-planned communities, offering exceptional lifestyle opportunities from Monument at Reverence to established neighborhoods throughout the area.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Reverence Summerlin's Appeal</h3>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin has established itself as one of Las Vegas's premier residential destinations, combining quality construction, thoughtful planning, and exceptional amenities to create an unmatched living environment. Whether you're considering Monument at Reverence new construction or established Reverence Summerlin neighborhoods, understanding the area's appeal helps you make informed decisions about your real estate investment.
            </p>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin area's reputation for excellence stems from several key factors that make it particularly attractive to homebuyers seeking quality, lifestyle, and value. From Monument at Reverence's guard-gated security to established Reverence Summerlin neighborhoods' mature landscaping, from quality schools serving the area to world-class golf courses nearby, Reverence Summerlin offers resources and amenities that enhance property values and quality of life.
            </p>
            <p className="text-gray-700">
              As your Reverence Summerlin real estate specialist, I understand what makes this area desirable and how to help you find properties that match your needs and preferences. Whether you're interested in Monument at Reverence, established Reverence Summerlin neighborhoods, or other communities in the area, my deep market knowledge ensures you receive guidance based on actual Reverence Summerlin experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monument at Reverence: Premier New Construction in Reverence Summerlin</CardTitle>
                <Badge variant="secondary" className="mt-2">Featured Community</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Monument at Reverence stands as the crown jewel of Reverence Summerlin new construction, offering exceptional Pulte Homes built properties in a guard-gated setting with access to world-class amenities. As the featured on-site agent for Monument at Reverence, I provide exclusive access and insights into this premier Reverence Summerlin community that other agents simply can't offer.
                </p>
                <p className="text-gray-700 mb-4">
                  Monument at Reverence within Reverence Summerlin features energy-efficient homes, modern floor plans, comprehensive builder warranties, and proximity to Reverence Summerlin's extensive amenities. These Monument at Reverence homes represent exceptional value for Reverence Summerlin buyers seeking new construction quality with established community benefits.
                </p>
                <p className="text-gray-700">
                  Whether you're a first-time buyer exploring Monument at Reverence or an experienced investor evaluating Reverence Summerlin opportunities, my Monument at Reverence expertise ensures you receive the highest level of professional guidance. From floor plan selection to homesite evaluation, from pricing strategies to financing options, I'll help you navigate every aspect of purchasing Monument at Reverence in Reverence Summerlin.
                </p>
                <Button asChild className="mt-4">
                  <Link to="/communities/monument-at-reverence">
                    Explore Monument at Reverence
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Established Reverence Summerlin Neighborhoods</CardTitle>
                <Badge variant="secondary" className="mt-2">Mature Communities</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Beyond Monument at Reverence, Reverence Summerlin includes established neighborhoods with mature landscaping, proven property values, and settled communities that appeal to buyers seeking stability and character. These Reverence Summerlin neighborhoods offer the advantage of established schools, community infrastructure, and predictable appreciation patterns.
                </p>
                <p className="text-gray-700 mb-4">
                  Established Reverence Summerlin neighborhoods provide diverse options for buyers with various preferences, budgets, and lifestyle needs. Whether you're seeking larger lots, mature trees, established amenities, or specific architectural styles, Reverence Summerlin's established neighborhoods offer opportunities to find properties that match your vision.
                </p>
                <p className="text-gray-700">
                  As your Reverence Summerlin real estate specialist, I'll help you explore established neighborhoods throughout the area, comparing Monument at Reverence new construction with resale opportunities to find the best match for your needs. My comprehensive Reverence Summerlin market knowledge ensures you understand all available options before making decisions.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/buying">
                    Explore Reverence Summerlin Properties
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reverence Summerlin Lifestyle Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Reverence Summerlin Lifestyle Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Living in Reverence Summerlin offers exceptional lifestyle opportunities, from Monument at Reverence amenities to area resources that enhance daily life for residents of all ages.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Amenities in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin residents enjoy access to comprehensive community amenities that enhance quality of life and provide opportunities for recreation, socializing, and relaxation. Whether living in Monument at Reverence or established Reverence Summerlin neighborhoods, these amenities contribute significantly to the area's appeal and property values.
            </p>
            <p className="text-gray-700 mb-4">
              Key Reverence Summerlin amenities include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Extensive trail systems connecting Reverence Summerlin neighborhoods and parks</li>
              <li>Community pools and aquatic facilities serving Reverence Summerlin residents</li>
              <li>Parks and playgrounds throughout Reverence Summerlin for families</li>
              <li>Tennis and pickleball courts available in Reverence Summerlin communities</li>
              <li>Fitness centers and recreational programs for Reverence Summerlin residents</li>
              <li>Proximity to championship golf courses near Reverence Summerlin</li>
              <li>Access to Downtown Summerlin shopping and dining from Reverence Summerlin</li>
              <li>Quality schools serving Monument at Reverence and Reverence Summerlin neighborhoods</li>
            </ul>
            <p className="text-gray-700">
              These Reverence Summerlin amenities create an exceptional living environment that attracts buyers from across Las Vegas and beyond. Whether you're considering Monument at Reverence or established Reverence Summerlin neighborhoods, understanding available amenities helps you find properties that support your desired lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Schools and Education in Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Reverence Summerlin is served by excellent schools, including top-rated elementary, middle, and high schools that provide quality education for Monument at Reverence residents and other Reverence Summerlin families. These Reverence Summerlin schools consistently rank among Nevada's best, offering strong academic programs and extracurricular opportunities.
                </p>
                <p className="text-gray-700">
                  For Reverence Summerlin families, school quality significantly impacts property values and lifestyle satisfaction. Understanding school district boundaries, ratings, and programs available to specific Reverence Summerlin neighborhoods helps buyers make informed decisions about their real estate investments.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/resources/schools">Learn About Reverence Summerlin Schools</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Golf and Recreation Near Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Reverence Summerlin residents enjoy access to world-class golf courses, including championship facilities within minutes of Monument at Reverence and other Reverence Summerlin communities. These golf courses near Reverence Summerlin provide exceptional playing experiences for golfers of all skill levels, contributing to the area's reputation as a premier golf destination.
                </p>
                <p className="text-gray-700">
                  Beyond golf, Reverence Summerlin offers extensive recreational opportunities including trails, parks, pools, and fitness facilities. These Reverence Summerlin recreational resources support active, healthy lifestyles while providing opportunities for socializing and community engagement.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/resources/golf-courses">Explore Golf Courses Near Reverence Summerlin</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-700 text-white final-cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home in Reverence Summerlin?
          </h2>
          <p className="text-xl text-white/95 mb-8 leading-relaxed">
            Contact Dr. Jan Duffy today for expert guidance in Reverence Summerlin real estate, including Monument at Reverence. 
            Whether you're buying, selling, or relocating to Reverence Summerlin, I'm here to help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              asChild
            >
              <a href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`} aria-label={`Call ${config.contact.phone}`}>
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {config.contact.phone}
              </a>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-ctaSecondary-500 hover:bg-ctaSecondary-600 text-white w-full sm:w-auto"
              asChild
            >
              <a href={`tel:+1${config.contact.phoneSecondary.replace(/\D/g, '')}`} aria-label={`Call urgent line ${config.contact.phoneSecondary}`}>
                <Phone className="w-5 h-5" aria-hidden="true" />
                Urgent: {config.contact.phoneSecondary}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto" asChild>
              <a href={`mailto:${config.contact.email}`} aria-label={`Email ${config.contact.email}`}>
                <Mail className="w-5 h-5" aria-hidden="true" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all w-full sm:w-auto" asChild>
              <a href={config.contact.calendly} target="_blank" rel="noopener noreferrer" aria-label="Schedule a consultation">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Schedule Consultation
              </a>
            </Button>
          </div>
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-gold-light" aria-hidden="true" />
              <span className="font-semibold text-white">Office Location</span>
            </div>
            <p className="text-white/95">
              {config.agent.office.fullAddress}
            </p>
          </div>
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
        <p className="text-gray-700 mb-8">
          We're having trouble loading the homepage.
        </p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}