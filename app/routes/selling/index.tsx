import type { Route } from "./+types/selling-index";
import { config } from "~/lib/config";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  Camera, 
  FileText, 
  Shield, 
  Users, 
  MapPin,
  CheckCircle,
  Award,
  DollarSign,
  Clock,
  Phone,
  Mail
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/selling` },
  ];
}

export function meta() {
  return [
    { title: "Selling Your Home in Reverence Summerlin | Dr. Jan Duffy" },
    { name: "description", content: "Expert guidance for selling your home in Reverence Summerlin and Las Vegas. Dr. Jan Duffy provides comprehensive selling services including marketing, pricing strategy, and foreclosure avoidance in the Reverence Summerlin area." },
    { name: "keywords", content: "sell home Reverence Summerlin, selling homes Reverence Summerlin, Reverence Summerlin real estate, home selling Las Vegas, Summerlin home sales, real estate agent Reverence Summerlin" },
    { property: "og:title", content: "Selling Your Home in Reverence Summerlin | Dr. Jan Duffy" },
    { property: "og:description", content: "Expert guidance for selling your home in Reverence Summerlin and Las Vegas. Dr. Jan Duffy provides comprehensive selling services including marketing, pricing strategy, and foreclosure avoidance." },
    { property: "og:url", content: `${config.seo.siteUrl}/selling` },
  ];
}

export default function SellingIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Reverence Summerlin Expert</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selling Your Home in Reverence Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your home's value in the Reverence Summerlin market with Dr. Jan Duffy's comprehensive selling services. From strategic pricing to professional marketing and seamless closing, I'll guide you through every step of selling your Reverence Summerlin property.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Dr. Jan Duffy for Selling Your Reverence Summerlin Home?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Reverence Summerlin Market Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep understanding of the Reverence Summerlin real estate market, including Monument at Reverence and surrounding Summerlin communities. I know what buyers are looking for in Reverence Summerlin properties and how to position your home for maximum value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Strategic Pricing for Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive comparative market analysis (CMA) specific to Reverence Summerlin homes. I'll analyze recent sales in your area, including Monument at Reverence and similar Summerlin properties, to determine the optimal listing price.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Professional Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High-quality professional photography, virtual tours, and targeted marketing campaigns highlighting your Reverence Summerlin home's unique features. We showcase properties through multiple channels to reach qualified buyers interested in Reverence Summerlin living.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding the Reverence Summerlin Market</h3>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin area represents one of Las Vegas's most desirable residential communities, featuring master-planned neighborhoods like Monument at Reverence. When selling in Reverence Summerlin, it's essential to understand the unique characteristics that make this area attractive to buyers. The Reverence Summerlin market includes both established homes and new construction from builders like Pulte Homes, creating a diverse inventory that appeals to various buyer segments.
            </p>
            <p className="text-gray-700 mb-4">
              Properties in Reverence Summerlin benefit from the community's reputation for quality construction, excellent schools, and proximity to amenities. As your Reverence Summerlin real estate specialist, I leverage my deep knowledge of local market trends, including seasonal patterns, buyer preferences, and pricing strategies specific to the Reverence Summerlin area. This expertise ensures your home is positioned correctly in the market to attract serious buyers.
            </p>
            <p className="text-gray-700">
              Recent sales data in Reverence Summerlin shows consistent demand, particularly for homes that highlight the area's lifestyle advantages. Whether your property is in Monument at Reverence, one of the established Summerlin neighborhoods, or newer construction, I'll help you capitalize on what makes Reverence Summerlin homes desirable to today's buyers.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Selling Services for Reverence Summerlin Homes</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Analysis and Pricing Strategy</h3>
            <p className="text-gray-700 mb-4">
              One of the most critical aspects of selling your Reverence Summerlin home is pricing it correctly from the start. Overpricing can lead to extended days on market and ultimately lower final sale prices, while underpricing means leaving money on the table. My comprehensive market analysis for Reverence Summerlin properties includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Detailed review of recent Reverence Summerlin home sales, including Monument at Reverence properties</li>
              <li>Analysis of active listings and pending sales in your specific Reverence Summerlin neighborhood</li>
              <li>Comparison with similar homes in Summerlin communities to establish competitive positioning</li>
              <li>Evaluation of your home's unique features, upgrades, and condition relative to the Reverence Summerlin market</li>
              <li>Consideration of current market trends affecting Reverence Summerlin real estate values</li>
              <li>Strategic pricing recommendations designed to maximize your return while ensuring competitive market position</li>
            </ul>
            <p className="text-gray-700">
              This thorough analysis ensures your Reverence Summerlin home is priced to attract qualified buyers quickly while maximizing your investment return. I'll explain every aspect of the pricing strategy so you feel confident in the listing price we set together.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Marketing and Staging</h3>
            <p className="text-gray-700 mb-4">
              Effective marketing is essential for selling your Reverence Summerlin home at top dollar. My comprehensive marketing approach showcases your property's best features and highlights what makes Reverence Summerlin living exceptional. The marketing strategy includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Professional photography and videography capturing your Reverence Summerlin home's interior and exterior</li>
              <li>Virtual tours and 3D walkthroughs allowing remote buyers to explore your property</li>
              <li>Strategic staging recommendations to maximize your home's appeal to Reverence Summerlin buyers</li>
              <li>Listing placement on major real estate platforms, including MLS, Zillow, Realtor.com, and specialized Reverence Summerlin property sites</li>
              <li>Targeted digital marketing campaigns reaching buyers actively searching for Reverence Summerlin homes</li>
              <li>Social media promotion highlighting your property's features and Reverence Summerlin location advantages</li>
              <li>Professional print marketing materials for open houses and broker tours</li>
              <li>Open house events designed to showcase your Reverence Summerlin home to qualified buyers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For Monument at Reverence properties, I emphasize the builder's reputation, community amenities, and the prestige of living in this premier Reverence Summerlin development. For established homes in Reverence Summerlin, I highlight the neighborhood's maturity, established landscaping, and potential for customization.
            </p>
            <p className="text-gray-700">
              Staging recommendations are tailored to help buyers envision themselves living in your Reverence Summerlin home. This may involve decluttering, furniture arrangement, minor updates, or professional staging services. The goal is to present your property in its best light while showcasing the lifestyle benefits of Reverence Summerlin living.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Negotiation and Transaction Management</h3>
            <p className="text-gray-700 mb-4">
              Once offers start coming in on your Reverence Summerlin home, expert negotiation skills become critical. I'll guide you through evaluating each offer, considering not just the price but also terms, contingencies, and buyer qualifications. My negotiation experience in the Reverence Summerlin market helps ensure you receive the best possible terms.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout the transaction, I'll manage every detail of the closing process for your Reverence Summerlin property:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Coordination with buyer's agents and lenders</li>
              <li>Management of inspections and repair negotiations</li>
              <li>Appraisal coordination and value support for your Reverence Summerlin home</li>
              <li>Title and escrow coordination ensuring smooth closing</li>
              <li>Regular communication keeping you informed every step of the way</li>
              <li>Problem-solving for any issues that arise during the transaction</li>
            </ul>
            <p className="text-gray-700">
              My goal is to make selling your Reverence Summerlin home as stress-free as possible. You'll have a dedicated advocate managing all aspects of the transaction while you focus on your next steps.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Services for Reverence Summerlin Sellers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Foreclosure Avoidance in Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If you're facing financial difficulties with your Reverence Summerlin property, I can help explore options including short sales, loan modifications, and other alternatives. I understand the unique challenges and work compassionately to find solutions.
                </p>
                <Button asChild variant="outline">
                  <Link to="/selling/foreclosure-avoidance">Learn About Foreclosure Avoidance</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Short Sales for Reverence Summerlin Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Navigating short sales requires specialized expertise, especially for Reverence Summerlin homes. I'll guide you through lender negotiations and documentation requirements while protecting your interests throughout the process.
                </p>
                <Button asChild variant="outline">
                  <Link to="/selling/short-sales">Learn About Short Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Preparing Your Reverence Summerlin Home for Sale</h3>
            <p className="text-gray-700 mb-4">
              Proper preparation is crucial for achieving maximum value when selling your Reverence Summerlin home. I'll provide a comprehensive home preparation checklist tailored to the Reverence Summerlin market. This includes both cosmetic improvements and strategic investments that yield the best return on investment.
            </p>
            <p className="text-gray-700 mb-4">
              For Reverence Summerlin homes, particularly those in Monument at Reverence, buyers expect certain standards and features. I'll help you identify which improvements matter most to Reverence Summerlin buyers and which investments will pay off during the sale. Common preparation tasks include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Deep cleaning and decluttering to showcase your Reverence Summerlin home's space</li>
              <li>Minor repairs addressing any deferred maintenance items</li>
              <li>Paint updates in neutral, modern colors appealing to Reverence Summerlin buyers</li>
              <li>Landscaping improvements highlighting your home's curb appeal</li>
              <li>Kitchen and bathroom updates if needed to compete with other Reverence Summerlin listings</li>
              <li>Staging to help buyers envision living in your Reverence Summerlin property</li>
              <li>Energy efficiency improvements that appeal to environmentally conscious Reverence Summerlin buyers</li>
            </ul>
            <p className="text-gray-700">
              I'll help prioritize these improvements based on your budget and timeline, ensuring every dollar spent enhances your Reverence Summerlin home's marketability and value. The goal is to position your property competitively within the Reverence Summerlin market while maximizing your net proceeds from the sale.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Reverence Summerlin Homes Are in High Demand</h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Appeal of Reverence Summerlin Living</h3>
            <p className="text-gray-700 mb-4">
              Understanding why buyers want Reverence Summerlin homes helps position your property effectively. The Reverence Summerlin area offers an exceptional combination of location, amenities, and lifestyle that attracts diverse buyer demographics. When marketing your Reverence Summerlin home, I emphasize these unique advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Premier location within the master-planned Summerlin community, recognized nationally for excellence</li>
              <li>Monument at Reverence provides access to Pulte Homes' quality construction and builder warranty</li>
              <li>Proximity to top-rated schools serving the Reverence Summerlin area</li>
              <li>Extensive trail systems and parks perfect for active Reverence Summerlin residents</li>
              <li>Close to shopping, dining, and entertainment in Downtown Summerlin</li>
              <li>Scenic mountain views and natural desert landscapes surrounding Reverence Summerlin</li>
              <li>Strong sense of community and neighbor involvement in Reverence Summerlin neighborhoods</li>
              <li>Excellent property value retention and appreciation potential in Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              These factors contribute to strong buyer interest in Reverence Summerlin properties, which translates to faster sales and competitive pricing when homes are properly positioned and marketed. As your Reverence Summerlin real estate expert, I'll ensure these advantages are highlighted throughout the marketing and showing process.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Market Trends Affecting Reverence Summerlin Home Sales</h3>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin real estate market operates within broader Las Vegas and Summerlin market trends, while also maintaining unique characteristics specific to this prestigious area. Current trends affecting Reverence Summerlin home sales include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Strong demand for quality construction and newer homes, benefiting Monument at Reverence properties</li>
              <li>Increased interest in energy-efficient features and smart home technology in Reverence Summerlin</li>
              <li>Growing appeal to remote workers seeking quality of life in Reverence Summerlin</li>
              <li>Interest from out-of-state buyers relocating to Las Vegas and choosing Reverence Summerlin</li>
              <li>Demand for properties with outdoor living spaces appealing to Reverence Summerlin's climate</li>
              <li>Appreciation for community amenities and lifestyle benefits unique to Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              These trends inform how I price and market your Reverence Summerlin home, ensuring we appeal to the most active buyer segments while positioning your property as a premier choice in the Reverence Summerlin market.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Reverence Summerlin Selling Timeline</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Week 1-2: Preparation Phase</h3>
              </div>
              <p className="text-gray-700">
                Initial consultation to assess your Reverence Summerlin home, market analysis and pricing strategy development, home preparation recommendations, and professional photography scheduling. During this phase, I'll complete a thorough market analysis of similar Reverence Summerlin properties to establish optimal pricing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Camera className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Week 2-3: Marketing Launch</h3>
              </div>
              <p className="text-gray-700">
                Professional photography and virtual tour creation, listing preparation and MLS entry, launch of digital marketing campaigns targeting Reverence Summerlin buyers, open house preparation, and broker preview events. Your Reverence Summerlin home will be showcased across all major platforms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Week 3-6: Active Marketing</h3>
              </div>
              <p className="text-gray-700">
                Regular showings and open houses, ongoing marketing optimization based on buyer feedback, offer review and negotiation, and buyer qualification verification. I'll maintain active communication about all showing activity and feedback on your Reverence Summerlin property.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Week 6-10: Transaction Management</h3>
              </div>
              <p className="text-gray-700">
                Inspection coordination and negotiation, appraisal support for your Reverence Summerlin home value, title and escrow coordination, final walkthrough, and closing coordination. I'll handle every detail to ensure a smooth closing on your Reverence Summerlin property.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Reverence Summerlin Home Sale Today</h2>
          <p className="text-gray-700 mb-6">
            Ready to sell your Reverence Summerlin home with confidence? Dr. Jan Duffy brings deep local expertise, comprehensive marketing strategies, and dedicated service to every Reverence Summerlin property listing. Whether your home is in Monument at Reverence, an established Summerlin neighborhood, or another Reverence Summerlin community, I'll create a customized selling strategy designed to maximize your return.
          </p>
          <p className="text-gray-700 mb-6">
            My proven track record in the Reverence Summerlin market, combined with cutting-edge marketing techniques and personalized service, ensures your home sale experience is efficient, profitable, and stress-free. I understand the unique aspects of selling in Reverence Summerlin and will leverage this knowledge throughout your transaction.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today for a complimentary consultation about selling your Reverence Summerlin home. I'll provide an honest market analysis, discuss your selling goals, and outline how my services can help you achieve the best possible outcome for your Reverence Summerlin property sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/valuation">
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Home Valuation
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
        <a 
          href="/selling" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Selling Guide
        </a>
      </div>
    </div>
  );
}
