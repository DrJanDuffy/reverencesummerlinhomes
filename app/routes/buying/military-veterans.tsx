import type { Route } from "./+types/buying-military-veterans";
import { config } from "~/lib/config";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Shield, 
  Home, 
  DollarSign, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Award,
  Users,
  Star,
  FileText,
  TrendingUp,
  Calendar,
  CreditCard
} from "lucide-react";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/buying/military-veterans` },
  ];
}

export function meta() {
  return [
    { title: "Military Veterans Home Buying in Reverence Summerlin | VA Loans | Dr. Jan Duffy" },
    { name: "description", content: "Specialized real estate services for military veterans buying homes in Reverence Summerlin. Dr. Jan Duffy understands VA loans, military relocation to Reverence Summerlin, and veteran-friendly communities." },
    { name: "keywords", content: "VA loan Reverence Summerlin, military veterans Reverence Summerlin, veteran home buying Las Vegas, VA loan Las Vegas, military relocation Reverence Summerlin, veteran-friendly Reverence Summerlin" },
    { property: "og:title", content: "Military Veterans Home Buying in Reverence Summerlin | VA Loans" },
    { property: "og:description", content: "Specialized real estate services for military veterans buying homes in Reverence Summerlin. Dr. Jan Duffy understands VA loans and military relocation to Reverence Summerlin." },
    { property: "og:url", content: `${config.seo.siteUrl}/buying/military-veterans` },
  ];
}

export default function MilitaryVeterans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 text-white">Veteran-Owned Business</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Military Veterans Home Buying in Reverence Summerlin
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you for your service! I'm honored to help military veterans and active-duty personnel find their perfect home in Reverence Summerlin. With specialized knowledge of VA loans, military relocation to Reverence Summerlin, and veteran-friendly communities, I'll make your transition smooth and stress-free.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Reverence Summerlin Is Perfect for Military Veterans</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              Reverence Summerlin has become a premier destination for military veterans and active-duty personnel relocating to Las Vegas. The Reverence Summerlin area offers an exceptional combination of quality housing, strong veteran community, proximity to military installations, and lifestyle amenities that appeal to service members and their families. Whether you're stationed at Nellis Air Force Base, transitioning to civilian life, or retiring in Reverence Summerlin, this community provides an ideal environment for military families.
            </p>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin market includes communities like Monument at Reverence, which features quality construction from builders like Pulte Homes, known for creating veteran-friendly homes. Properties in Reverence Summerlin offer excellent value for VA loan buyers, with many homes meeting VA appraisal requirements and offering features important to military families, such as security, quality schools, and community amenities.
            </p>
            <p className="text-gray-700">
              As your Reverence Summerlin real estate specialist, I understand the unique needs of military homebuyers. From navigating VA loan requirements specific to Reverence Summerlin properties to coordinating PCS moves and temporary housing, I'll ensure your home buying experience in Reverence Summerlin is seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>VA Loan Expertise for Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized knowledge of VA loan requirements for Reverence Summerlin properties, including Monument at Reverence homes. I understand VA appraisal standards, funding fees, and eligibility requirements specific to the Reverence Summerlin market.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Military Relocation to Reverence Summerlin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive support for PCS moves to Las Vegas, including temporary housing assistance, area orientation for Reverence Summerlin, and coordination with military relocation resources. I'll help you understand what makes Reverence Summerlin ideal for military families.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Veteran-Friendly Reverence Summerlin Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to Reverence Summerlin neighborhoods with strong veteran populations, military discounts, and veteran support services. I'll help you find Reverence Summerlin communities that welcome and support military families.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive VA Loan Benefits for Reverence Summerlin Homebuyers</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Understanding VA Loans in Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              VA loans offer military veterans and active-duty personnel exceptional benefits when purchasing Reverence Summerlin homes. These government-backed loans provide advantages that make homeownership in Reverence Summerlin more accessible and affordable for those who have served our country. As your Reverence Summerlin real estate expert, I'll help you maximize these benefits throughout your home buying process.
            </p>
            <p className="text-gray-700 mb-4">
              For Reverence Summerlin properties, VA loans offer several key advantages over conventional financing. Whether you're considering Monument at Reverence new construction or established Reverence Summerlin homes, understanding these benefits helps you make informed decisions about your purchase. I'll guide you through every aspect of using your VA loan eligibility in the Reverence Summerlin market.
            </p>
            <p className="text-gray-700">
              The Reverence Summerlin market is particularly well-suited for VA loan buyers. Many properties in Reverence Summerlin meet VA appraisal requirements, and the area's quality construction and community amenities align well with what military families seek. From Monument at Reverence to established Reverence Summerlin neighborhoods, I'll help you find VA-eligible properties that meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Zero Down Payment for Reverence Summerlin Homes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  One of the most significant VA loan benefits for Reverence Summerlin homebuyers is the ability to purchase with zero down payment. Qualified veterans can buy Reverence Summerlin properties, including Monument at Reverence homes, without saving for a traditional down payment, making homeownership in Reverence Summerlin immediately accessible.
                </p>
                <p className="text-gray-700 mb-4">
                  This benefit is especially valuable in the Reverence Summerlin market, where quality homes command premium prices. By eliminating the down payment requirement, VA loans allow you to purchase Reverence Summerlin homes that might otherwise require years of saving. For Monument at Reverence properties and other Reverence Summerlin communities, this opens opportunities for immediate homeownership.
                </p>
                <p className="text-gray-700">
                  However, while no down payment is required for Reverence Summerlin VA loans, you may still need funds for closing costs, prepaid expenses, and potential VA funding fees. I'll help you understand all costs associated with purchasing your Reverence Summerlin home using a VA loan, ensuring no surprises during closing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">No PMI Required for Reverence Summerlin Properties</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Unlike conventional loans for Reverence Summerlin homes, VA loans don't require private mortgage insurance (PMI), regardless of loan amount or down payment. This saves Reverence Summerlin VA loan borrowers hundreds of dollars monthly compared to conventional financing, significantly reducing the cost of homeownership in Reverence Summerlin.
                </p>
                <p className="text-gray-700 mb-4">
                  For Reverence Summerlin properties, the PMI savings can be substantial, particularly for higher-priced homes in communities like Monument at Reverence. Over the life of a Reverence Summerlin mortgage, eliminating PMI saves thousands of dollars, making VA loans an excellent choice for qualified buyers purchasing Reverence Summerlin homes.
                </p>
                <p className="text-gray-700">
                  This benefit applies to all Reverence Summerlin VA loans, whether you're buying Monument at Reverence new construction or established Reverence Summerlin properties. Combined with other VA loan advantages, the elimination of PMI makes Reverence Summerlin homeownership more affordable for military families.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Competitive Interest Rates for Reverence Summerlin VA Loans</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  VA loans for Reverence Summerlin properties typically offer lower interest rates than conventional loans, reducing monthly payments and total interest paid over the loan term. These competitive rates make Reverence Summerlin homes more affordable for VA loan borrowers, whether purchasing Monument at Reverence or other Reverence Summerlin communities.
                </p>
                <p className="text-gray-700 mb-4">
                  The government backing of VA loans allows lenders to offer better rates for Reverence Summerlin purchases, as the risk is mitigated by VA guarantee. For Reverence Summerlin homebuyers using VA loans, these lower rates translate to significant long-term savings, making quality Reverence Summerlin homes more accessible to military families.
                </p>
                <p className="text-gray-700">
                  When shopping for Reverence Summerlin VA loans, I'll help you compare rates from multiple VA-approved lenders. Rates can vary for Reverence Summerlin purchases, so working with an experienced Reverence Summerlin real estate agent who understands VA financing ensures you secure the best terms for your Reverence Summerlin home purchase.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-xl">Flexible Credit Requirements for Reverence Summerlin</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  VA loans for Reverence Summerlin properties feature more lenient credit score requirements compared to conventional loans, helping more veterans qualify for Reverence Summerlin homeownership. While conventional Reverence Summerlin loans typically require credit scores of 620-640 or higher, VA loans may accept lower scores with compensating factors.
                </p>
                <p className="text-gray-700 mb-4">
                  This flexibility is particularly valuable in the Reverence Summerlin market, where quality homes may require higher loan amounts. VA loan credit flexibility allows qualified veterans to purchase Reverence Summerlin properties, including Monument at Reverence homes, even with less-than-perfect credit histories, making Reverence Summerlin homeownership more accessible.
                </p>
                <p className="text-gray-700">
                  However, while VA loans offer more flexible credit requirements for Reverence Summerlin purchases, maintaining good credit still provides better rates and terms. I'll help you understand how your credit affects your Reverence Summerlin VA loan options and guide you through improving your credit position if needed before purchasing your Reverence Summerlin home.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Military Relocation Services for Reverence Summerlin</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">PCS Move Support to Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              Permanent Change of Station (PCS) moves to Las Vegas and the Reverence Summerlin area require specialized real estate support. As your Reverence Summerlin relocation specialist, I provide comprehensive assistance for military families transitioning to the area. From initial area orientation to finding your perfect Reverence Summerlin home, I'll ensure your PCS move is as smooth as possible.
            </p>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin area offers excellent proximity to Nellis Air Force Base, making it an ideal location for active-duty personnel stationed in Las Vegas. Whether you're coming from another state or overseas, understanding Reverence Summerlin's location, schools, amenities, and housing options is essential for a successful relocation.
            </p>
            <p className="text-gray-700 mb-4">
              My PCS relocation services for Reverence Summerlin include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Virtual tours and area orientation for Reverence Summerlin before you arrive</li>
              <li>Temporary housing assistance while searching for your Reverence Summerlin home</li>
              <li>Comprehensive Reverence Summerlin market analysis including Monument at Reverence and other communities</li>
              <li>School information and district details for Reverence Summerlin area</li>
              <li>Commute analysis from Reverence Summerlin to Nellis Air Force Base and other installations</li>
              <li>Community introductions and local resources for military families in Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              I understand the time constraints and stress associated with PCS moves, especially when relocating to a new area like Reverence Summerlin. My goal is to make your transition to Reverence Summerlin as seamless as possible, ensuring you find the right home quickly while feeling confident about your Reverence Summerlin community choice.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Temporary Housing and Short-Term Solutions for Reverence Summerlin</h3>
            <p className="text-gray-700 mb-4">
              When relocating to Reverence Summerlin, temporary housing may be necessary while you search for your permanent home. I can help connect you with short-term rental options in or near Reverence Summerlin, including furnished apartments, extended-stay hotels, and temporary housing specifically designed for military families transitioning to the area.
            </p>
            <p className="text-gray-700 mb-4">
              Understanding temporary housing options near Reverence Summerlin is important, as this allows you time to thoroughly explore the Reverence Summerlin market, including Monument at Reverence and other communities, without feeling rushed into a decision. Temporary housing near Reverence Summerlin also provides the opportunity to experience the area before committing to a specific Reverence Summerlin neighborhood.
            </p>
            <p className="text-gray-700">
              For active-duty personnel with specific timing requirements, I'll coordinate temporary housing in the Reverence Summerlin area that accommodates your schedule while we search for your permanent Reverence Summerlin home. This ensures a smooth transition without gaps in housing as you settle into the Reverence Summerlin area.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Area Orientation for Reverence Summerlin Military Families</h3>
            <p className="text-gray-700 mb-4">
              Understanding the Reverence Summerlin area is crucial for military families making permanent moves. I provide comprehensive area orientation covering all aspects of Reverence Summerlin living, from schools and healthcare to shopping, dining, and recreation. This orientation helps you feel confident about your Reverence Summerlin community choice and ensures you understand what makes Reverence Summerlin ideal for military families.
            </p>
            <p className="text-gray-700 mb-4">
              Key areas covered in Reverence Summerlin orientation include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>School districts serving Reverence Summerlin and quality ratings</li>
              <li>Healthcare facilities accessible from Reverence Summerlin, including military-friendly providers</li>
              <li>Shopping and dining options in and near Reverence Summerlin</li>
              <li>Recreation and entertainment opportunities for families in Reverence Summerlin</li>
              <li>Commute routes from Reverence Summerlin to Nellis Air Force Base and other installations</li>
              <li>Military resources and support services available to Reverence Summerlin residents</li>
              <li>Veteran organizations and community groups in the Reverence Summerlin area</li>
            </ul>
            <p className="text-gray-700">
              This comprehensive orientation ensures you understand all aspects of Reverence Summerlin living before making your home purchase decision. I'll help you evaluate Reverence Summerlin communities, including Monument at Reverence, based on your family's specific needs and preferences, ensuring your Reverence Summerlin home supports your military lifestyle.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Veteran-Friendly Communities in Reverence Summerlin</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Reverence Summerlin Appeals to Military Veterans</h3>
            <p className="text-gray-700 mb-4">
              Reverence Summerlin has developed a strong reputation among military veterans for several reasons. The Reverence Summerlin area offers quality housing, excellent schools, strong community values, and proximity to military installations that appeal to veterans transitioning to civilian life or relocating for new assignments. These factors make Reverence Summerlin particularly attractive to military families seeking stability and quality of life.
            </p>
            <p className="text-gray-700 mb-4">
              Communities like Monument at Reverence exemplify the quality construction and thoughtful planning that appeal to military families. These Reverence Summerlin developments offer modern homes, community amenities, and established neighborhoods that provide the stability and security military families value. The Reverence Summerlin market includes options ranging from new construction in Monument at Reverence to established neighborhoods with mature landscaping and settled communities.
            </p>
            <p className="text-gray-700 mb-4">
              The Reverence Summerlin area's veteran-friendly reputation extends beyond housing to include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Strong veteran presence in Reverence Summerlin communities, creating natural support networks</li>
              <li>Military-friendly businesses and services throughout the Reverence Summerlin area</li>
              <li>Veteran organizations and community groups active in Reverence Summerlin</li>
              <li>Schools familiar with military family needs and frequent relocations</li>
              <li>Healthcare providers with experience serving military families in Reverence Summerlin</li>
              <li>Community events and activities welcoming to military families in Reverence Summerlin</li>
            </ul>
            <p className="text-gray-700">
              These factors combine to create an environment where military veterans feel welcomed and supported in Reverence Summerlin. As your Reverence Summerlin real estate specialist, I'll help you identify communities that best match your family's values and lifestyle preferences within the Reverence Summerlin area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Monument at Reverence for Military Families</CardTitle>
                <Badge variant="secondary" className="mt-2">New Construction</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Monument at Reverence represents an excellent option for military families seeking new construction in Reverence Summerlin. Built by Pulte Homes, Monument at Reverence homes feature quality construction, modern floor plans, and builder warranties that appeal to military buyers using VA loans. The community's location within Reverence Summerlin provides convenient access to amenities while maintaining a sense of security and community.
                </p>
                <p className="text-gray-700">
                  For military families, Monument at Reverence offers the advantage of new construction warranties and modern amenities, reducing immediate maintenance concerns that can be challenging during deployments or frequent moves. The Reverence Summerlin location ensures access to quality schools and community resources important to military families.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Established Reverence Summerlin Neighborhoods</CardTitle>
                <Badge variant="secondary" className="mt-2">Mature Communities</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Established Reverence Summerlin neighborhoods offer mature landscaping, settled communities, and proven property values that appeal to military veterans seeking stability. These Reverence Summerlin areas often feature larger lots, mature trees, and established community amenities that provide immediate lifestyle benefits.
                </p>
                <p className="text-gray-700">
                  For military families, established Reverence Summerlin neighborhoods offer the advantage of proven schools, established community infrastructure, and predictable property values. These Reverence Summerlin communities appeal to veterans planning longer-term residence or retirement in the area.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">VA Loan Process for Reverence Summerlin Homebuyers</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 1: Obtain Your VA Certificate of Eligibility for Reverence Summerlin</h3>
              </div>
              <p className="text-gray-700">
                Before searching for Reverence Summerlin homes, you'll need your VA Certificate of Eligibility (COE), which confirms your VA loan entitlement. This certificate is essential for purchasing Reverence Summerlin properties, including Monument at Reverence homes, using VA financing. I can help you obtain your COE and understand your entitlement limits for Reverence Summerlin purchases.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 2: Get Pre-Approved with a VA Lender for Reverence Summerlin</h3>
              </div>
              <p className="text-gray-700">
                Working with a VA-approved lender familiar with the Reverence Summerlin market is crucial. I can recommend lenders experienced with Reverence Summerlin VA loans who understand local market conditions, including Monument at Reverence properties. Pre-approval helps you understand your Reverence Summerlin home buying budget and strengthens your offers in the competitive Reverence Summerlin market.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 3: Search for Reverence Summerlin Properties</h3>
              </div>
              <p className="text-gray-700">
                I'll help you search for Reverence Summerlin homes that meet VA loan requirements and your family's needs. This includes evaluating Reverence Summerlin properties for VA eligibility, understanding Reverence Summerlin market conditions, and identifying communities like Monument at Reverence that appeal to military families. My Reverence Summerlin market expertise ensures you see the best available options.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 4: VA Appraisal and Inspection for Reverence Summerlin Homes</h3>
              </div>
              <p className="text-gray-700">
                VA loans for Reverence Summerlin properties require VA appraisals to ensure properties meet minimum property requirements and confirm value. I'll coordinate the VA appraisal process for your Reverence Summerlin home, whether it's Monument at Reverence new construction or an established Reverence Summerlin property. I'll also help you understand inspection requirements and negotiate any needed repairs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Step 5: Closing on Your Reverence Summerlin Home</h3>
              </div>
              <p className="text-gray-700">
                The closing process for Reverence Summerlin VA loans includes specific requirements and documentation. I'll coordinate with your lender, title company, and other parties to ensure a smooth closing on your Reverence Summerlin property. My experience with Reverence Summerlin VA loan closings ensures all requirements are met efficiently, whether you're purchasing Monument at Reverence or another Reverence Summerlin home.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Reverence Summerlin Home Search Today</h2>
          <p className="text-gray-700 mb-6">
            Ready to find your perfect home in Reverence Summerlin? Dr. Jan Duffy brings specialized military relocation expertise, comprehensive VA loan knowledge, and deep Reverence Summerlin market understanding to every veteran's home buying journey. Whether you're seeking Monument at Reverence new construction or established Reverence Summerlin neighborhoods, I'll create a customized home search strategy designed to meet your family's unique needs.
          </p>
          <p className="text-gray-700 mb-6">
            My proven track record helping military families in Reverence Summerlin, combined with cutting-edge market knowledge and personalized service, ensures your home buying experience is efficient, successful, and stress-free. I understand the unique aspects of military relocation to Reverence Summerlin and will leverage this knowledge throughout your transaction.
          </p>
          <p className="text-gray-700 mb-8">
            Contact me today for a complimentary consultation about buying your Reverence Summerlin home with a VA loan. I'll provide an honest Reverence Summerlin market overview, discuss your home buying goals, and outline how my specialized services can help you achieve the best possible outcome for your Reverence Summerlin property purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule VA Loan Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/buying">
                <Home className="w-5 h-5 mr-2" />
                Explore Reverence Summerlin Homes
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
          href="/buying" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  );
}
