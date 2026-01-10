import type { Route } from "./+types/resources";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { config } from "~/lib/config";
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Home, 
  MapPin, 
  Users, 
  DollarSign,
  ArrowRight,
  Star,
  Award
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/resources/blog` },
  ];
}

export function meta() {
  return [
    { title: "Las Vegas Real Estate Blog | Market Insights & Tips | Dr. Jan Duffy" },
    { name: "description", content: "Stay informed with Dr. Jan Duffy's Las Vegas real estate blog. Get market insights, buying tips, selling strategies, and local community updates." },
    { name: "keywords", content: "Las Vegas real estate blog, Summerlin market trends, home buying tips, selling strategies, Las Vegas housing market" },
    { property: "og:title", content: "Las Vegas Real Estate Blog | Dr. Jan Duffy" },
    { property: "og:url", content: `${config.seo.siteUrl}/resources/blog` },
    { property: "og:description", content: "Market insights, tips, and local information from Las Vegas real estate expert Dr. Jan Duffy." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${config.seo.siteUrl}/resources/blog` },
  ];
}

const blogPosts = [
  {
    id: 1,
    title: "Las Vegas Housing Market Update: January 2025",
    excerpt: "The Las Vegas real estate market continues to show strong growth with median home prices reaching new heights. Here's what buyers and sellers need to know.",
    content: "The Las Vegas housing market has started 2025 with impressive momentum. Median home prices have increased by 8.5% year-over-year, reaching $485,000. Inventory remains tight with only 1.2 months of supply, creating a strong seller's market. Summerlin continues to lead in luxury sales, with properties averaging 12 days on market. Interest rates stabilizing around 6.5% have brought more buyers back into the market.",
    author: "Dr. Jan Duffy",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Market Analysis",
    featured: true,
    image: "/images/blog/market-update.jpg"
  },
  {
    id: 2,
    title: "Why Summerlin West is the Hottest Community in Las Vegas",
    excerpt: "Discover what makes Summerlin West the most sought-after community for luxury homebuyers in Las Vegas.",
    content: "Summerlin West has emerged as the crown jewel of Las Vegas luxury real estate. With Red Rock Canyon views, championship golf courses, and world-class amenities, it's no surprise that homes here command premium prices. The community's limited inventory and high demand have created a perfect storm for appreciation, with properties seeing 15% annual growth.",
    author: "Dr. Jan Duffy",
    date: "2025-01-12",
    readTime: "4 min read",
    category: "Community Spotlight",
    featured: true,
    image: "/images/blog/summerlin-west.jpg"
  },
  {
    id: 3,
    title: "First-Time Homebuyer Guide: Las Vegas Edition",
    excerpt: "Everything you need to know about buying your first home in Las Vegas, from financing to closing.",
    content: "Buying your first home in Las Vegas can be exciting but overwhelming. Start by getting pre-approved for a mortgage, which will strengthen your offers in this competitive market. Consider neighborhoods like Henderson or North Las Vegas for more affordable options, or explore new construction communities for modern amenities and warranties.",
    author: "Dr. Jan Duffy",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Buying Guide",
    featured: false,
    image: "/images/blog/first-time-buyer.jpg"
  },
  {
    id: 4,
    title: "Monument at Reverence: New Construction Opportunities",
    excerpt: "Explore the latest Pulte Homes community offering modern townhomes in Summerlin's northernmost guard-gated community.",
    content: "Monument at Reverence represents the future of Summerlin living. These energy-efficient townhomes offer modern design with HERS scores of 55-65, significantly lower utility costs than resale homes. Starting from the $500s, these properties provide excellent value with Pulte's comprehensive warranty and prime location near Red Rock Canyon.",
    author: "Dr. Jan Duffy",
    date: "2025-01-08",
    readTime: "6 min read",
    category: "New Construction",
    featured: false,
    image: "/images/blog/monument-reverence.jpg"
  },
  {
    id: 5,
    title: "Investment Properties in Las Vegas: ROI Analysis",
    excerpt: "Analyze the investment potential of Las Vegas real estate with current rental yields and appreciation trends.",
    content: "Las Vegas offers strong investment opportunities with rental yields averaging 4.2% and consistent appreciation. Areas like Summerlin and Henderson show particular strength, with luxury properties commanding premium rents. The city's growing tech sector and entertainment industry continue to drive demand for quality rental properties.",
    author: "Dr. Jan Duffy",
    date: "2025-01-05",
    readTime: "8 min read",
    category: "Investment",
    featured: false,
    image: "/images/blog/investment-analysis.jpg"
  },
  {
    id: 6,
    title: "Selling Your Home in Las Vegas: Maximize Your Value",
    excerpt: "Learn proven strategies to sell your Las Vegas home quickly and for top dollar in today's market.",
    content: "Selling in Las Vegas requires strategic preparation. With inventory low and demand high, properly staged homes sell 15% faster and for 3% more. Focus on curb appeal, decluttering, and highlighting unique features like mountain views or pool access. Professional photography and virtual tours are essential in today's digital market.",
    author: "Dr. Jan Duffy",
    date: "2025-01-03",
    readTime: "6 min read",
    category: "Selling Tips",
    featured: false,
    image: "/images/blog/selling-strategies.jpg"
  }
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Las Vegas Real Estate Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Stay informed with market insights, expert tips, and local community updates from Dr. Jan Duffy
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Posts */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <Badge className="bg-primary-100 text-primary-800">
              <Star className="w-4 h-4 mr-1" />
              Latest Insights
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
            <div className="flex gap-2">
              <Badge variant="outline">Market Analysis</Badge>
              <Badge variant="outline">Buying Guide</Badge>
              <Badge variant="outline">Selling Tips</Badge>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary-800">Stay Updated</CardTitle>
              <CardDescription className="text-lg">
                Get the latest market insights and exclusive tips delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <Button className="bg-primary-600 hover:bg-primary-700">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  No spam, unsubscribe at any time
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="mt-16">
          <Card className="bg-primary-600 text-white">
            <CardContent className="text-center py-12">
              <Award className="w-16 h-16 mx-auto mb-4 text-primary-200" />
              <h3 className="text-2xl font-bold mb-4">Ready to Work with Dr. Jan Duffy?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Get personalized real estate guidance from Las Vegas's top agent. Whether you're buying, selling, or investing, I'm here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  <Home className="w-5 h-5 mr-2" />
                  Start Your Search
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Home Valuation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
