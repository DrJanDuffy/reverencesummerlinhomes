import type { Route } from "./+types/about";
import { config } from "~/lib/config";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Award, 
  Star, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Users,
  Home,
  Target,
  Zap,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/about/zillow-premier` },
  ];
}

export function meta() {
  return [
    { title: "Dr. Jan Duffy Zillow Premier Agent | Reverence Summerlin Real Estate | Las Vegas" },
    { name: "description", content: "Dr. Jan Duffy is a Zillow Premier Agent specializing in Reverence Summerlin real estate, Monument at Reverence, and Las Vegas luxury properties. Certified Summerlin specialist with proven results." },
    { name: "keywords", content: "Zillow Premier Agent Reverence Summerlin, Dr. Jan Duffy Zillow Premier, Zillow Premier Las Vegas, Monument at Reverence Zillow Premier, Summerlin Zillow Premier agent" },
    { property: "og:title", content: "Dr. Jan Duffy Zillow Premier Agent | Reverence Summerlin Real Estate" },
    { property: "og:description", content: "Dr. Jan Duffy is a Zillow Premier Agent specializing in Reverence Summerlin real estate, Monument at Reverence, and Las Vegas luxury properties." },
    { property: "og:url", content: `${config.seo.siteUrl}/about/zillow-premier` },
  ];
}

export default function ZillowPremier() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 text-white">Zillow Premier Agent</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dr. Jan Duffy: Zillow Premier Agent for Reverence Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized as a Zillow Premier Agent, Dr. Jan Duffy brings exceptional real estate expertise to Reverence Summerlin, Monument at Reverence, and throughout Las Vegas. This prestigious designation reflects proven results, client satisfaction, and outstanding performance in Reverence Summerlin real estate.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Zillow Premier Agent Means for Reverence Summerlin Clients</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Zillow Premier Agent status is awarded to top-performing real estate professionals who demonstrate exceptional results, client satisfaction, and market expertise. For Reverence Summerlin clients, this designation means working with an agent who has proven success in the Las Vegas market, including specialized expertise in Reverence Summerlin communities like Monument at Reverence and throughout the Summerlin area.
            </p>
            <p className="text-gray-700 mb-4">
              As a Zillow Premier Agent specializing in Reverence Summerlin, I've earned this prestigious recognition through consistent performance, satisfied clients, and outstanding results in Reverence Summerlin real estate transactions. This Premier Agent status in Reverence Summerlin reflects not just sales volume but client satisfaction, market knowledge, and professional excellence that benefits every Reverence Summerlin client I serve.
            </p>
            <p className="text-gray-700">
              When you work with a Zillow Premier Agent for your Reverence Summerlin real estate needs, you're choosing an agent who has demonstrated excellence in helping clients buy and sell properties in the Las Vegas market. This Premier Agent expertise in Reverence Summerlin means you'll receive the highest level of professional service, market knowledge, and results-driven performance throughout your Reverence Summerlin transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Proven Results in Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Zillow Premier Agent status reflects consistent success in Reverence Summerlin real estate transactions, including Monument at Reverence sales and successful listings throughout the Reverence Summerlin market. This proven track record benefits every Reverence Summerlin client.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Client Satisfaction in Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Premier Agent designation requires exceptional client reviews and satisfaction ratings, reflecting the quality service Reverence Summerlin clients receive. This satisfaction standard ensures every Reverence Summerlin client enjoys exceptional experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Market Expertise in Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Zillow Premier Agents demonstrate deep market knowledge, including specialized expertise in Reverence Summerlin communities like Monument at Reverence. This expertise provides valuable insights for Reverence Summerlin clients throughout their transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Zillow Premier Agent Matters for Reverence Summerlin Real Estate</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Verified Performance in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              Zillow Premier Agent status is not just a marketing designation—it's a verified recognition of proven performance in real estate transactions. For Reverence Summerlin clients, this means working with an agent whose results are confirmed through actual sales data, client reviews, and performance metrics that demonstrate success in the Las Vegas market, including specialized expertise in Reverence Summerlin communities.
            </p>
            <p className="text-gray-700 mb-4">
              This verified performance in Reverence Summerlin real estate means clients can trust that their Premier Agent has:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Successfully completed numerous Reverence Summerlin transactions</li>
              <li>Achieved excellent results for Reverence Summerlin buyers and sellers</li>
              <li>Received positive feedback from satisfied Reverence Summerlin clients</li>
              <li>Demonstrated consistent performance in Reverence Summerlin markets</li>
              <li>Maintained high standards of professional service in Reverence Summerlin</li>
              <li>Stayed current with Reverence Summerlin market trends and conditions</li>
            </ul>
            <p className="text-gray-700">
              This verified Premier Agent performance in Reverence Summerlin provides confidence that you're working with a proven professional who has demonstrated ability to deliver results. Whether buying Monument at Reverence or selling in Reverence Summerlin, this verified expertise ensures you receive the highest quality representation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enhanced Visibility for Reverence Summerlin Listings</h3>
            <p className="text-gray-700 mb-4">
              Zillow Premier Agent status provides enhanced visibility for Reverence Summerlin listings on Zillow, one of the most popular real estate websites used by homebuyers searching for properties in Las Vegas and Summerlin. This enhanced visibility means Reverence Summerlin sellers' properties receive maximum exposure to qualified buyers actively searching for homes in the area, including those specifically interested in Reverence Summerlin communities like Monument at Reverence.
            </p>
            <p className="text-gray-700 mb-4">
              For Reverence Summerlin sellers, this Premier Agent visibility advantage includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Premium placement of Reverence Summerlin listings on Zillow search results</li>
              <li>Enhanced profile visibility showcasing Premier Agent status for Reverence Summerlin</li>
              <li>Increased exposure to buyers searching for Reverence Summerlin properties</li>
              <li>Better positioning for Monument at Reverence and other Reverence Summerlin listings</li>
              <li>Access to Zillow Premier Agent marketing tools for Reverence Summerlin properties</li>
              <li>Professional credibility that attracts serious Reverence Summerlin buyers</li>
            </ul>
            <p className="text-gray-700">
              This enhanced Premier Agent visibility for Reverence Summerlin listings translates to more showings, qualified leads, and faster sales at competitive prices. Whether listing Monument at Reverence new construction or established Reverence Summerlin homes, Premier Agent status provides valuable marketing advantages that benefit sellers throughout their Reverence Summerlin transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Proven Success in Reverence Summerlin Markets</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent status reflects demonstrated success in real estate transactions, including proven results in Reverence Summerlin markets. This proven success means Reverence Summerlin clients work with an agent who has successfully navigated numerous transactions, understands Reverence Summerlin market dynamics, and consistently delivers results for clients buying and selling in the area.
                </p>
                <p className="text-gray-700">
                  This proven Premier Agent success in Reverence Summerlin includes experience with Monument at Reverence new construction, established Reverence Summerlin neighborhoods, and various property types throughout the area. Whether buying your first Reverence Summerlin home or selling an investment property, this proven success provides confidence in your agent's ability to achieve your Reverence Summerlin real estate goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Client-Focused Service in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent designation requires exceptional client satisfaction, reflecting a commitment to client-focused service that benefits every Reverence Summerlin client. This client focus means Reverence Summerlin buyers and sellers receive personalized attention, clear communication, and dedicated service throughout their transactions, whether purchasing Monument at Reverence or selling in Reverence Summerlin.
                </p>
                <p className="text-gray-700">
                  This client-focused Premier Agent approach in Reverence Summerlin ensures that every client's unique needs, goals, and preferences are understood and addressed. From initial Reverence Summerlin consultation through closing and beyond, Premier Agent status reflects a commitment to exceptional service that puts Reverence Summerlin clients' interests first in every transaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Zillow Premier Agent Commitment to Reverence Summerlin Clients</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence in Every Reverence Summerlin Transaction</h3>
            <p className="text-gray-700 mb-4">
              As a Zillow Premier Agent specializing in Reverence Summerlin, I'm committed to maintaining the highest standards of excellence in every transaction. This Premier Agent commitment to Reverence Summerlin excellence means that whether you're buying Monument at Reverence, selling in Reverence Summerlin, or investing in the area, you'll receive the same level of professional expertise, personalized service, and results-driven performance that earned Premier Agent recognition.
            </p>
            <p className="text-gray-700 mb-4">
              This Premier Agent commitment to Reverence Summerlin excellence includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Comprehensive Reverence Summerlin market knowledge and analysis</li>
              <li>Strategic pricing and marketing for Reverence Summerlin properties</li>
              <li>Expert negotiation protecting Reverence Summerlin client interests</li>
              <li>Clear communication throughout Reverence Summerlin transactions</li>
              <li>Professional representation for Monument at Reverence and other Reverence Summerlin communities</li>
              <li>Dedicated service ensuring Reverence Summerlin client satisfaction</li>
            </ul>
            <p className="text-gray-700">
              This Premier Agent commitment to Reverence Summerlin excellence ensures that every client receives the highest quality real estate service, regardless of transaction size or complexity. Whether navigating Monument at Reverence new construction contracts or negotiating Reverence Summerlin resale transactions, Premier Agent standards guarantee exceptional service throughout your Reverence Summerlin experience.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Continued Education and Reverence Summerlin Market Expertise</h3>
            <p className="text-gray-700 mb-4">
              Maintaining Zillow Premier Agent status requires ongoing education, market knowledge, and professional development. For Reverence Summerlin clients, this means working with an agent who continuously updates their expertise, stays current with Reverence Summerlin market trends, and maintains cutting-edge knowledge of real estate practices that benefit clients throughout their Reverence Summerlin transactions.
            </p>
            <p className="text-gray-700 mb-4">
              This continued Premier Agent education in Reverence Summerlin includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Regular training on Reverence Summerlin market trends and conditions</li>
              <li>Updates on Monument at Reverence and other Reverence Summerlin developments</li>
              <li>Professional development in real estate best practices for Reverence Summerlin</li>
              <li>Technology training for enhanced Reverence Summerlin client service</li>
              <li>Networking with other Premier Agents sharing Reverence Summerlin insights</li>
              <li>Continuing education maintaining Reverence Summerlin market expertise</li>
            </ul>
            <p className="text-gray-700">
              This continued Premier Agent education ensures Reverence Summerlin clients benefit from the latest market knowledge, technology tools, and professional practices. Whether buying Monument at Reverence or selling in Reverence Summerlin, this ongoing education provides valuable advantages that help clients achieve their Reverence Summerlin real estate goals more effectively.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Zillow Premier Agent Tools and Resources for Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              As a Zillow Premier Agent, I have access to advanced tools and resources that enhance service for Reverence Summerlin clients. These Premier Agent tools provide valuable advantages for buyers searching for Reverence Summerlin properties and sellers marketing Reverence Summerlin homes, including Monument at Reverence listings and other Reverence Summerlin communities.
            </p>
            <p className="text-gray-700 mb-4">
              Premier Agent tools and resources benefiting Reverence Summerlin clients include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Advanced analytics for Reverence Summerlin market insights</li>
              <li>Enhanced marketing capabilities for Reverence Summerlin listings</li>
              <li>Lead management systems connecting Reverence Summerlin buyers and sellers</li>
              <li>Professional photography and virtual tour services for Reverence Summerlin properties</li>
              <li>Marketing materials showcasing Reverence Summerlin homes effectively</li>
              <li>Technology platforms streamlining Reverence Summerlin transactions</li>
            </ul>
            <p className="text-gray-700">
              These Premier Agent tools and resources provide Reverence Summerlin clients with advantages unavailable through standard real estate services. Whether buying Monument at Reverence or selling in Reverence Summerlin, these Premier Agent resources enhance the entire real estate experience, making transactions more efficient and successful for Reverence Summerlin clients.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Working with a Zillow Premier Agent in Reverence Summerlin</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Proven Expertise in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent status demonstrates proven expertise in real estate transactions, including specialized knowledge of Reverence Summerlin markets. This proven Premier Agent expertise in Reverence Summerlin means clients receive guidance based on actual experience and successful results, not just general market knowledge.
                </p>
                <p className="text-gray-700">
                  This proven Premier Agent expertise in Reverence Summerlin includes understanding of Monument at Reverence new construction, established Reverence Summerlin neighborhoods, market trends, pricing strategies, and transaction processes specific to Reverence Summerlin real estate. Whether buying or selling in Reverence Summerlin, this proven expertise provides valuable advantages throughout your transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Enhanced Marketing for Reverence Summerlin Properties</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent status provides enhanced marketing capabilities that benefit Reverence Summerlin sellers. This Premier Agent marketing advantage means Reverence Summerlin listings, including Monument at Reverence properties, receive maximum visibility and exposure to qualified buyers actively searching for homes in the area.
                </p>
                <p className="text-gray-700">
                  This enhanced Premier Agent marketing for Reverence Summerlin properties includes premium placement on Zillow, professional photography and virtual tours, targeted advertising, and marketing materials that showcase Reverence Summerlin homes effectively. For Monument at Reverence sellers, this Premier Agent marketing ensures properties reach the right buyers at the right time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Client Satisfaction in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent designation requires exceptional client satisfaction, reflecting a commitment to service excellence that benefits every Reverence Summerlin client. This Premier Agent commitment to Reverence Summerlin client satisfaction means buyers and sellers receive personalized attention, clear communication, and dedicated service throughout their transactions.
                </p>
                <p className="text-gray-700">
                  This Premier Agent client satisfaction focus in Reverence Summerlin ensures that whether you're purchasing Monument at Reverence or selling in Reverence Summerlin, you'll experience service that exceeds expectations. Premier Agent standards guarantee that Reverence Summerlin clients' needs are prioritized and their goals are achieved through exceptional professional representation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Professional Credibility in Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Zillow Premier Agent status provides professional credibility that benefits Reverence Summerlin clients throughout their transactions. This Premier Agent credibility means other professionals, including lenders, inspectors, and title companies, recognize the quality and reliability associated with Premier Agent representation in Reverence Summerlin.
                </p>
                <p className="text-gray-700">
                  This Premier Agent professional credibility in Reverence Summerlin facilitates smoother transactions, better terms, and more efficient processes for Monument at Reverence buyers and Reverence Summerlin sellers. The respect and recognition associated with Premier Agent status in Reverence Summerlin provides valuable advantages that enhance the entire real estate experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience the Zillow Premier Agent Difference in Reverence Summerlin</h2>
          <p className="text-gray-700 mb-6">
            Ready to experience the difference that Zillow Premier Agent expertise makes in your Reverence Summerlin real estate journey? Whether you're buying Monument at Reverence, selling a Reverence Summerlin property, or investing in the area, Premier Agent status reflects proven results, client satisfaction, and professional excellence that benefits every Reverence Summerlin client.
          </p>
          <p className="text-gray-700 mb-6">
            My Zillow Premier Agent recognition, combined with specialized Reverence Summerlin expertise and a commitment to exceptional service, ensures you'll receive the highest level of professional representation. From initial consultation through closing and beyond, Premier Agent standards guarantee exceptional service throughout your Reverence Summerlin transaction.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today to discuss your Reverence Summerlin real estate needs and discover how Zillow Premier Agent expertise can benefit your Monument at Reverence purchase or Reverence Summerlin sale. I'll provide honest market insights, answer your questions about Premier Agent services, and outline how my specialized expertise can help you achieve the best possible outcome for your Reverence Summerlin real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Premier Agent Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                <Award className="w-5 h-5 mr-2" />
                Learn More About My Services
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
