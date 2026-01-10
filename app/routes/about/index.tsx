import type { Route } from "./+types/about";
import { config } from "~/lib/config";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Award, 
  Home, 
  Users, 
  MapPin,
  CheckCircle,
  Star,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  GraduationCap,
  Heart,
  Target,
  Zap
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/about` },
  ];
}

export function meta() {
  return [
    { title: "About Dr. Jan Duffy | Reverence Summerlin Real Estate Expert | Las Vegas" },
    { name: "description", content: "Learn about Dr. Jan Duffy, Reverence Summerlin real estate expert specializing in Monument at Reverence, Summerlin communities, and luxury properties in Las Vegas. Certified Summerlin specialist and featured Pulte Homes agent." },
    { name: "keywords", content: "Dr. Jan Duffy, Reverence Summerlin real estate, Monument at Reverence agent, Summerlin real estate expert, Las Vegas real estate agent, Pulte Homes agent Reverence Summerlin" },
    { property: "og:title", content: "About Dr. Jan Duffy | Reverence Summerlin Real Estate Expert" },
    { property: "og:description", content: "Learn about Dr. Jan Duffy, Reverence Summerlin real estate expert specializing in Monument at Reverence and Summerlin communities in Las Vegas." },
    { property: "og:url", content: `${config.seo.siteUrl}/about` },
  ];
}

export default function AboutIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Reverence Summerlin Expert</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Dr. Jan Duffy: Reverence Summerlin Real Estate Expert
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Dr. Jan Duffy is the trusted choice for real estate in Reverence Summerlin, Monument at Reverence, and throughout Las Vegas. With deep local expertise, specialized certifications, and a commitment to exceptional service, I help clients achieve their Reverence Summerlin real estate goals.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Trusted Reverence Summerlin Real Estate Specialist</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              As a dedicated real estate professional specializing in Reverence Summerlin and the greater Las Vegas area, I bring extensive local market knowledge, specialized certifications, and a genuine passion for helping clients find their perfect homes. My focus on Reverence Summerlin communities, particularly Monument at Reverence, has established me as the go-to expert for buyers and sellers seeking exceptional service in this premier Las Vegas market.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise in Reverence Summerlin real estate extends beyond simple transactions. I understand the unique characteristics that make Reverence Summerlin desirable, from Monument at Reverence's new construction to established Summerlin neighborhoods. This deep knowledge of the Reverence Summerlin market enables me to provide valuable insights and guidance that help clients make informed decisions about their real estate investments.
            </p>
            <p className="text-gray-700">
              Whether you're buying your first home in Reverence Summerlin, selling a property in Monument at Reverence, or investing in the Reverence Summerlin real estate market, I'm committed to delivering exceptional service tailored to your unique needs. My approach combines professional expertise with personal attention, ensuring every Reverence Summerlin client receives the highest level of service and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Certified Summerlin Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certified Summerlin specialist with extensive training and expertise in Reverence Summerlin communities. This certification demonstrates my commitment to understanding the unique characteristics of Reverence Summerlin real estate, including Monument at Reverence and surrounding areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Featured Pulte Homes Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Featured buying agent for Pulte Homes at Monument at Reverence in Reverence Summerlin. This exclusive relationship provides clients with unique access to new construction opportunities in this premier Reverence Summerlin community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Monument at Reverence On-Site Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  On-site agent for Monument at Reverence in Reverence Summerlin, providing clients with direct access to this exceptional new construction community. This position offers unique insights into Monument at Reverence homes and the Reverence Summerlin market.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Expertise in Reverence Summerlin Real Estate</h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deep Knowledge of Reverence Summerlin Communities</h3>
            <p className="text-gray-700 mb-4">
              My specialization in Reverence Summerlin real estate has developed through years of focused experience in this premier Las Vegas market. I understand the nuances that distinguish Reverence Summerlin communities, from Monument at Reverence's new construction to established Summerlin neighborhoods. This comprehensive knowledge of the Reverence Summerlin market enables me to provide clients with accurate valuations, strategic marketing, and informed purchase decisions.
            </p>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin's real estate market includes diverse property types, from Monument at Reverence new construction to resale homes in mature Reverence Summerlin neighborhoods. My expertise spans all segments of the Reverence Summerlin market, allowing me to serve buyers and sellers across various property types, price points, and Reverence Summerlin communities. Whether you're interested in Monument at Reverence, established Reverence Summerlin neighborhoods, or investment properties, I have the knowledge to guide you effectively.
            </p>
            <p className="text-gray-700 mb-4">
              Key areas of Reverence Summerlin expertise include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Monument at Reverence new construction by Pulte Homes in Reverence Summerlin</li>
              <li>Established Reverence Summerlin neighborhoods and communities</li>
              <li>Reverence Summerlin market trends and pricing strategies</li>
              <li>Reverence Summerlin area schools, amenities, and lifestyle factors</li>
              <li>Investment opportunities in the Reverence Summerlin real estate market</li>
              <li>Reverence Summerlin property values and appreciation patterns</li>
            </ul>
            <p className="text-gray-700">
              This comprehensive understanding of Reverence Summerlin real estate ensures that every client receives expert guidance tailored to their specific needs and goals. Whether buying or selling in Reverence Summerlin, my deep market knowledge provides the foundation for successful transactions and satisfied clients.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Monument at Reverence Specialization</h3>
            <p className="text-gray-700 mb-4">
              As the featured on-site agent for Monument at Reverence in Reverence Summerlin, I have unique expertise in this premier Pulte Homes community. Monument at Reverence represents one of Reverence Summerlin's most desirable new construction opportunities, and my position as the on-site agent provides clients with exclusive access and insights into this exceptional Reverence Summerlin community.
            </p>
            <p className="text-gray-700 mb-4">
              My Monument at Reverence specialization includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Comprehensive knowledge of Monument at Reverence floor plans and homesites in Reverence Summerlin</li>
              <li>Understanding of Pulte Homes construction quality and warranty programs at Monument at Reverence</li>
              <li>Access to Monument at Reverence pricing, availability, and builder incentives in Reverence Summerlin</li>
              <li>Expertise in Reverence Summerlin financing options for Monument at Reverence purchases</li>
              <li>Knowledge of Monument at Reverence community amenities and lifestyle benefits</li>
              <li>Experience helping buyers navigate the Monument at Reverence purchase process in Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              This Monument at Reverence specialization within Reverence Summerlin provides clients with significant advantages when purchasing new construction homes. As your Monument at Reverence expert, I'll guide you through every aspect of buying in this premier Reverence Summerlin community, ensuring you find the perfect home that matches your needs and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Education and Credentials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  My educational background includes advanced degrees that enhance my ability to serve Reverence Summerlin clients effectively. Combined with specialized real estate training and certifications focused on Reverence Summerlin markets, this educational foundation provides the expertise necessary for successful Reverence Summerlin real estate transactions.
                </p>
                <p className="text-gray-700 mb-4">
                  Professional credentials specific to Reverence Summerlin include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Certified Summerlin Specialist designation</li>
                  <li>Featured Pulte Homes agent for Monument at Reverence in Reverence Summerlin</li>
                  <li>Ongoing continuing education in Reverence Summerlin market trends</li>
                  <li>Professional real estate licensing with Nevada Real Estate Division</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Market Expertise in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Years of focused experience in Reverence Summerlin real estate have developed comprehensive market expertise that benefits every client. This Reverence Summerlin market knowledge includes understanding property values, market trends, buyer preferences, and seller strategies specific to Reverence Summerlin communities.
                </p>
                <p className="text-gray-700 mb-4">
                  Areas of Reverence Summerlin market expertise include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reverence Summerlin property valuation and pricing strategies</li>
                  <li>Monument at Reverence new construction market analysis</li>
                  <li>Reverence Summerlin buyer and seller representation</li>
                  <li>Investment property analysis in Reverence Summerlin markets</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach to Reverence Summerlin Real Estate</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client-Centered Service in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              My approach to Reverence Summerlin real estate centers on understanding each client's unique needs, goals, and preferences. Whether you're buying your first home in Monument at Reverence, selling a property in Reverence Summerlin, or investing in the area, I take time to understand your specific situation and develop a customized strategy for your Reverence Summerlin real estate goals.
            </p>
            <p className="text-gray-700 mb-4">
              This client-centered approach to Reverence Summerlin real estate means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Listening carefully to understand your Reverence Summerlin real estate objectives</li>
              <li>Providing honest, transparent guidance about Reverence Summerlin market conditions</li>
              <li>Educating clients about Reverence Summerlin communities, including Monument at Reverence</li>
              <li>Communicating regularly and clearly throughout your Reverence Summerlin transaction</li>
              <li>Advocating fiercely for your interests in every Reverence Summerlin negotiation</li>
              <li>Following through on commitments and exceeding expectations in Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              This personalized approach to Reverence Summerlin real estate has resulted in numerous satisfied clients who appreciate the attention, expertise, and results I provide. Whether you're a first-time buyer exploring Monument at Reverence or an experienced investor in Reverence Summerlin, you'll receive the same level of dedicated service and professional expertise.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparent Communication in Reverence Summerlin Transactions</h3>
            <p className="text-gray-700 mb-4">
              Clear, honest communication is essential for successful Reverence Summerlin real estate transactions. I believe in keeping clients fully informed throughout every step of their Reverence Summerlin experience, whether buying Monument at Reverence, selling a Reverence Summerlin home, or investing in the area. This transparent communication builds trust and ensures clients make informed decisions about their Reverence Summerlin real estate investments.
            </p>
            <p className="text-gray-700 mb-4">
              My commitment to transparent communication in Reverence Summerlin real estate includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Honest Reverence Summerlin market analysis and property valuations</li>
              <li>Clear explanation of Reverence Summerlin transaction processes and timelines</li>
              <li>Regular updates on Reverence Summerlin market activity and property status</li>
              <li>Transparent discussion of Reverence Summerlin pricing strategies and negotiation tactics</li>
              <li>Open communication about Reverence Summerlin challenges and solutions</li>
              <li>Responsive availability to address Reverence Summerlin client questions and concerns</li>
            </ul>
            <p className="text-gray-700">
              This transparent approach to Reverence Summerlin communication ensures clients always know where they stand and feel confident in their decisions. Whether navigating Monument at Reverence new construction contracts or negotiating Reverence Summerlin resale transactions, you'll receive clear, honest communication every step of the way.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results-Driven Performance in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              While exceptional service is important, results matter most in Reverence Summerlin real estate. My track record demonstrates consistent success in helping clients achieve their Reverence Summerlin goals, whether buying Monument at Reverence homes at competitive prices, selling Reverence Summerlin properties quickly and profitably, or building investment portfolios in the area.
            </p>
            <p className="text-gray-700 mb-4">
              This results-driven approach to Reverence Summerlin real estate means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Strategic pricing and marketing that maximize Reverence Summerlin sale proceeds</li>
              <li>Negotiation expertise that secures favorable terms in Reverence Summerlin transactions</li>
              <li>Market knowledge that identifies the best Reverence Summerlin opportunities</li>
              <li>Efficient transaction management ensuring timely Reverence Summerlin closings</li>
              <li>Network connections providing access to off-market Reverence Summerlin opportunities</li>
              <li>Problem-solving skills that overcome Reverence Summerlin transaction challenges</li>
            </ul>
            <p className="text-gray-700">
              These results speak for themselves through satisfied Reverence Summerlin clients, successful transactions, and ongoing referrals from past clients who appreciate the value I provide. Whether you're buying Monument at Reverence, selling in Reverence Summerlin, or investing in the area, you can trust that I'll work tirelessly to achieve your goals.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Clients Choose Me for Reverence Summerlin Real Estate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Proven Track Record in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Years of successful Reverence Summerlin transactions demonstrate my ability to deliver results for clients. From Monument at Reverence new construction purchases to complex Reverence Summerlin resale transactions, my track record shows consistent success in helping clients achieve their Reverence Summerlin real estate goals.
                </p>
                <p className="text-gray-700">
                  This proven performance in Reverence Summerlin real estate includes successful Monument at Reverence sales, profitable Reverence Summerlin listings, and satisfied clients who refer others to my Reverence Summerlin services. These results reflect my commitment to excellence and client success in every Reverence Summerlin transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Cutting-Edge Reverence Summerlin Marketing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Modern marketing strategies ensure Reverence Summerlin properties receive maximum exposure to qualified buyers. From Monument at Reverence listings to established Reverence Summerlin homes, my marketing approach combines traditional methods with digital strategies that reach today's Reverence Summerlin homebuyers effectively.
                </p>
                <p className="text-gray-700">
                  This cutting-edge Reverence Summerlin marketing includes professional photography, virtual tours, social media promotion, and targeted digital advertising that showcases Reverence Summerlin properties to the right audiences. For Monument at Reverence sellers, this marketing ensures maximum visibility in the competitive Reverence Summerlin new construction market.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Personal Attention for Reverence Summerlin Clients</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Every Reverence Summerlin client receives personalized attention and dedicated service throughout their transaction. Unlike high-volume agents who juggle too many clients, I maintain a focused practice that ensures each Reverence Summerlin client receives the time and attention they deserve.
                </p>
                <p className="text-gray-700">
                  This personal attention to Reverence Summerlin clients means you'll have direct access to me throughout your transaction, not a team member or assistant. Whether buying Monument at Reverence or selling in Reverence Summerlin, you'll work directly with me, ensuring consistent service and clear communication every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-primary-600" />
                  <CardTitle className="text-xl">Specialized Reverence Summerlin Knowledge</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Deep specialization in Reverence Summerlin real estate provides clients with expertise unavailable from general Las Vegas agents. This Reverence Summerlin specialization includes Monument at Reverence knowledge, area market trends, and community insights that benefit every Reverence Summerlin transaction.
                </p>
                <p className="text-gray-700">
                  This specialized Reverence Summerlin knowledge means you'll receive guidance based on actual Reverence Summerlin experience, not general Las Vegas market knowledge. Whether evaluating Monument at Reverence opportunities or pricing Reverence Summerlin resale homes, my specialized expertise ensures accurate, valuable guidance for your Reverence Summerlin goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Involvement in Reverence Summerlin</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Active in Reverence Summerlin Community</h3>
            <p className="text-gray-700 mb-4">
              Beyond real estate transactions, I'm actively involved in the Reverence Summerlin community, participating in local events, supporting community organizations, and contributing to the area's growth and development. This Reverence Summerlin community involvement provides deeper connections and insights that benefit clients throughout their Reverence Summerlin real estate experiences.
            </p>
            <p className="text-gray-700 mb-4">
              My Reverence Summerlin community involvement includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Participation in Reverence Summerlin community events and activities</li>
              <li>Support for local Reverence Summerlin organizations and causes</li>
              <li>Membership in Reverence Summerlin professional and community groups</li>
              <li>Contributions to Reverence Summerlin area development and improvement</li>
              <li>Networking with Reverence Summerlin community leaders and influencers</li>
              <li>Staying informed about Reverence Summerlin area news and developments</li>
            </ul>
            <p className="text-gray-700">
              This Reverence Summerlin community involvement ensures I stay connected to local trends, opportunities, and developments that affect Reverence Summerlin real estate. Whether you're buying Monument at Reverence or selling in Reverence Summerlin, this community knowledge provides valuable context for your real estate decisions.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Work With Dr. Jan Duffy for Your Reverence Summerlin Real Estate Needs</h2>
          <p className="text-gray-700 mb-6">
            Ready to experience the difference that specialized Reverence Summerlin expertise makes in your real estate journey? Whether you're buying Monument at Reverence, selling a Reverence Summerlin property, or investing in the area, I bring the knowledge, skills, and dedication necessary for successful Reverence Summerlin transactions.
          </p>
          <p className="text-gray-700 mb-6">
            My proven track record in Reverence Summerlin real estate, combined with specialized Monument at Reverence expertise and a commitment to exceptional client service, ensures you'll receive the highest level of professional representation. From initial consultation through closing and beyond, I'm dedicated to helping you achieve your Reverence Summerlin real estate goals.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today to discuss your Reverence Summerlin real estate needs. I'll provide honest market insights, answer your questions about Monument at Reverence and other Reverence Summerlin communities, and outline how my specialized services can help you achieve the best possible outcome for your Reverence Summerlin real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/communities/monument-at-reverence">
                <Home className="w-5 h-5 mr-2" />
                Explore Monument at Reverence
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
