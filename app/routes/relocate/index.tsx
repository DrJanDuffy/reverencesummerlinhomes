import type { Route } from "./+types/relocate";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { config } from "~/lib/config";
import { 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  DollarSign, 
  TrendingUp, 
  Sun, 
  Briefcase,
  GraduationCap,
  Car,
  Plane,
  ArrowRight,
  CheckCircle,
  Users,
  Award
} from "lucide-react";

export function meta() {
  return [
    { title: "Relocate to Las Vegas | Expert Relocation Services | Dr. Janet Duffy" },
    { name: "description", content: "Expert relocation services to Las Vegas and Summerlin. Dr. Janet Duffy helps families and professionals relocate to Nevada with personalized assistance and market insights." },
    { name: "keywords", content: "relocate to Las Vegas, Las Vegas relocation, Summerlin relocation, Nevada relocation, Dr. Janet Duffy, California to Las Vegas, New York to Las Vegas" },
    { property: "og:title", content: "Relocate to Las Vegas | Dr. Janet Duffy" },
    { property: "og:description", content: "Expert relocation services to Las Vegas and Summerlin. Dr. Janet Duffy helps families and professionals relocate to Nevada with personalized assistance." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${config.seo.siteUrl}/relocate` },
  ];
}

const relocationData = [
  {
    from: "California",
    to: "Las Vegas",
    savings: "$15,000+",
    description: "Escape high taxes and cost of living",
    link: "/relocate/california",
    icon: <Sun className="w-8 h-8 text-orange-500" />,
    benefits: ["No state income tax", "50% lower housing costs", "No traffic jams", "Better weather"]
  },
  {
    from: "New York",
    to: "Las Vegas", 
    savings: "$20,000+",
    description: "Lower cost of living with vibrant lifestyle",
    link: "/relocate/new-york",
    icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    benefits: ["No state income tax", "Affordable housing", "World-class entertainment", "Outdoor recreation"]
  },
  {
    from: "Seattle",
    to: "Las Vegas",
    savings: "$12,000+", 
    description: "Sunny weather year-round",
    link: "/relocate/seattle",
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    benefits: ["300+ sunny days", "No rainy winters", "Lower taxes", "Growing tech sector"]
  },
  {
    from: "Chicago",
    to: "Las Vegas",
    savings: "$10,000+",
    description: "Escape harsh winters",
    link: "/relocate/chicago", 
    icon: <Sun className="w-8 h-8 text-blue-500" />,
    benefits: ["Mild winters", "No snow shoveling", "Lower taxes", "Entertainment capital"]
  },
  {
    from: "Phoenix",
    to: "Las Vegas",
    savings: "$5,000+",
    description: "Similar climate, better opportunities",
    link: "/relocate/phoenix",
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    benefits: ["No state income tax", "Entertainment industry", "Growing economy", "Unique lifestyle"]
  },
  {
    from: "San Francisco",
    to: "Las Vegas",
    savings: "$25,000+",
    description: "Massive cost savings",
    link: "/relocate/san-francisco",
    icon: <DollarSign className="w-8 h-8 text-green-600" />,
    benefits: ["80% lower housing costs", "No state income tax", "Tech opportunities", "No commute stress"]
  }
];

const costComparison = [
  { item: "Median Home Price", california: "$850,000", lasVegas: "$485,000", savings: "43%" },
  { item: "State Income Tax", california: "13.3%", lasVegas: "0%", savings: "$15,000+" },
  { item: "Sales Tax", california: "7.25%", lasVegas: "8.25%", savings: "Similar" },
  { item: "Gas Prices", california: "$4.50/gal", lasVegas: "$3.20/gal", savings: "29%" },
  { item: "Utilities", california: "$200/month", lasVegas: "$150/month", savings: "25%" }
];

export default function RelocateIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Relocate to Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Make Las Vegas your new home with expert guidance from Dr. Janet Duffy. 
              Save thousands annually while enjoying world-class amenities and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                <Phone className="w-5 h-5 mr-2" />
                Start Your Relocation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MapPin className="w-5 h-5 mr-2" />
                View Communities
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Relocation Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Are You Relocating From?
            </h2>
            <p className="text-xl text-gray-600">
              Get personalized relocation guidance based on your current location
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relocationData.map((relocation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    {relocation.icon}
                    <Badge className="bg-green-100 text-green-800">
                      Save {relocation.savings}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {relocation.from} → Las Vegas
                  </CardTitle>
                  <CardDescription className="text-base">
                    {relocation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {relocation.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to={relocation.link}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost of Living Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how much you can save by relocating to Las Vegas
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-primary-50">
              <CardTitle className="text-center text-2xl text-primary-800">
                California vs Las Vegas Cost Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Item</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">California</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Las Vegas</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-green-600">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {costComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.item}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.california}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.lasVegas}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-green-600">{item.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Las Vegas */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Las Vegas?
            </h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of living in America's entertainment capital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Housing</h3>
                <p className="text-gray-600">More house for your money compared to major coastal cities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No State Income Tax</h3>
                <p className="text-gray-600">Keep more of your hard-earned money</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-Round Sunshine</h3>
                <p className="text-gray-600">300+ days of sunshine annually</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Economy</h3>
                <p className="text-gray-600">Diverse industries and job opportunities</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Relocation Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Relocation Services
            </h2>
            <p className="text-xl text-gray-600">
              Dr. Janet Duffy provides end-to-end relocation assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Neighborhood Matching</h3>
                  <p className="text-gray-600">Find the perfect community based on your lifestyle and budget</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">School District Research</h3>
                  <p className="text-gray-600">Comprehensive analysis of top-rated schools and districts</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Market Analysis</h3>
                  <p className="text-gray-600">Detailed insights into local market trends and pricing</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Moving Coordination</h3>
                  <p className="text-gray-600">Connect you with trusted moving companies and services</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Virtual Tours</h3>
                  <p className="text-gray-600">Explore properties remotely before your move</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Local Connections</h3>
                  <p className="text-gray-600">Access to trusted contractors, services, and professionals</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Post-Move Support</h3>
                  <p className="text-gray-600">Ongoing assistance as you settle into your new home</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Investment Guidance</h3>
                  <p className="text-gray-600">Expert advice on building wealth through real estate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="bg-primary-600 text-white">
            <CardContent className="text-center py-12">
              <Award className="w-16 h-16 mx-auto mb-4 text-primary-200" />
              <h3 className="text-2xl font-bold mb-4">Ready to Relocate to Las Vegas?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Let Dr. Janet Duffy guide you through every step of your relocation journey. 
                From finding the perfect neighborhood to closing on your dream home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {config.contact.phone}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="w-5 h-5 mr-2" />
                  Email {config.contact.email}
                </Button>
              </div>
            </CardContent>
          </Card>
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
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
