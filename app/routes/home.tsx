import { Meta, Links } from "react-router";
import { Link } from "react-router";
import { config } from "~/lib/config";
import { monumentData } from "~/lib/monument-data";
import { communitiesData } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
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
  Mountain,
  ShoppingBag,
  GraduationCap,
  Calendar,
  ArrowRight,
  Play
} from "lucide-react";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: `${config.seo.siteName} | ${config.agent.name}` },
    { name: "description", content: config.seo.description },
    { name: "keywords", content: config.seo.keywords.join(", ") },
    { property: "og:title", content: `${config.seo.siteName} | ${config.agent.name}` },
    { property: "og:description", content: config.seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.seo.siteUrl },
  ];
}

export const links: LinksFunction = () => [
  { rel: "canonical", href: config.seo.siteUrl },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Certified Summerlin Specialist
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Featured Pulte Agent
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Las Vegas Real Estate Expert
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Dr. Janet Duffy - Certified Summerlin Home Buyer & Seller Agent
              </p>
              
              <p className="text-lg mb-8 text-primary-200">
                Specializing in Summerlin communities, Monument at Reverence, and helping 
                families find their perfect home in Las Vegas. Featured Pulte Homes buying 
                agent with deep local market knowledge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (702) 555-0100
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-primary-200">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certified Summerlin Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Featured Pulte Agent</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Get Your Free Home Valuation</h3>
                <p className="text-primary-100 mb-6">
                  Discover what your Las Vegas home is worth in today's market. 
                  Get instant results and expert insights from Dr. Janet Duffy.
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
                  <Button className="w-full bg-white text-primary-700 hover:bg-primary-50">
                    <Zap className="w-4 h-4 mr-2" />
                    Get Free Valuation
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm text-primary-200 mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Your information is secure and private</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary-200">
                    <CheckCircle className="w-4 h-4" />
                    <span>No obligation, instant results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Credentials */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dr. Janet Duffy?</h2>
            <p className="text-xl text-muted-foreground">
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
                <p className="text-muted-foreground">
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
                <p className="text-muted-foreground">
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
                <p className="text-muted-foreground">
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
                <p className="text-muted-foreground">
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
            <p className="text-xl text-muted-foreground">
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
                  <p className="text-muted-foreground mb-4">{community.description}</p>
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
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
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
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Monument at Reverence Spotlight */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                Featured Community
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Monument at Reverence
              </h2>
              <p className="text-xl mb-6 text-primary-100">
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
                  <span>Dr. Janet Duffy on-site agent</span>
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
            <p className="text-xl text-muted-foreground">
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
                <p className="text-muted-foreground mb-4">
                  Expert guidance through the home buying process, from search to closing.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• New construction expertise</li>
                  <li>• Market analysis</li>
                  <li>• Negotiation support</li>
                  <li>• Financing guidance</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/buying">Learn More</Link>
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
                <p className="text-muted-foreground mb-4">
                  Maximize your home's value with professional marketing and pricing strategies.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• Market pricing analysis</li>
                  <li>• Professional marketing</li>
                  <li>• Staging consultation</li>
                  <li>• Negotiation expertise</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/selling">Learn More</Link>
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
                <p className="text-muted-foreground mb-4">
                  Smooth relocation services for families moving to Las Vegas.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• Area orientation</li>
                  <li>• School information</li>
                  <li>• Neighborhood tours</li>
                  <li>• Local connections</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/relocate">Learn More</Link>
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
            <p className="text-xl text-muted-foreground">
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
                    <p className="text-sm text-muted-foreground">Summerlin West</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Dr. Janet Duffy made our relocation from California seamless. Her knowledge of Summerlin communities and attention to detail helped us find the perfect home."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <HomeIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">The Ridges</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "As first-time homebuyers, we were nervous about the process. Dr. Janet guided us through every step and helped us understand the Las Vegas market."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Jennifer Martinez</h3>
                    <p className="text-sm text-muted-foreground">Downtown Summerlin</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Dr. Janet helped us sell our home quickly and for top dollar. Her marketing strategy and professional network ensured we had multiple offers within days."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about/reviews">
                Read More Reviews
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact Dr. Janet Duffy today for expert guidance in Las Vegas real estate. 
            Whether you're buying, selling, or relocating, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
              <Phone className="w-5 h-5 mr-2" />
              Call (702) 555-0100
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Office Location</span>
            </div>
            <p className="text-primary-100">
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
        <p className="text-muted-foreground mb-8">
          We're having trouble loading the homepage.
        </p>
        <Button onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}