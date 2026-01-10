import { Form, useActionData, useNavigation } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { config } from "~/lib/config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Send,
  MessageCircle,
  Calendar,
  Users,
  Home,
  TrendingUp
} from "lucide-react";
import type { Route } from "./+types/contact";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/contact` },
  ];
}

export function meta() {
  return [
    { title: "Contact Dr. Jan Duffy | Reverence Summerlin Real Estate Expert | Las Vegas" },
    { name: "description", content: "Contact Dr. Jan Duffy for expert real estate services in Reverence Summerlin, Monument at Reverence, and Las Vegas. Get personalized assistance for buying, selling, or relocating to Reverence Summerlin." },
    { name: "keywords", content: "contact Reverence Summerlin real estate, Dr. Jan Duffy contact, Monument at Reverence agent, Reverence Summerlin real estate consultation, Las Vegas real estate contact" },
    { property: "og:title", content: "Contact Dr. Jan Duffy | Reverence Summerlin Real Estate Expert" },
    { property: "og:description", content: "Contact Dr. Jan Duffy for expert real estate services in Reverence Summerlin, Monument at Reverence, and Las Vegas. Get personalized assistance for buying, selling, or relocating to Reverence Summerlin." },
    { property: "og:url", content: `${config.seo.siteUrl}/contact` },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  // In a real application, you would:
  // 1. Validate the form data
  // 2. Send email notification
  // 3. Store in CRM system
  // 4. Send confirmation to user
  
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  const service = formData.get("service");
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Thank you for your message! I'll get back to you within 24 hours."
  };
}

export default function Contact() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Reverence Summerlin Expert</Badge>
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact Dr. Jan Duffy: Your Reverence Summerlin Real Estate Expert
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your Reverence Summerlin real estate journey? I'm here to help with personalized guidance for buying Monument at Reverence, selling in Reverence Summerlin, or relocating to the Las Vegas area.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Contact Dr. Jan Duffy for Reverence Summerlin Real Estate?</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-4">
              When you contact Dr. Jan Duffy for Reverence Summerlin real estate needs, you're reaching out to a certified Summerlin specialist with deep expertise in Reverence Summerlin communities, Monument at Reverence new construction, and the greater Las Vegas market. My specialization in Reverence Summerlin real estate means you'll receive guidance based on actual market experience, not just general Las Vegas knowledge.
            </p>
            <p className="text-gray-700 mb-4">
              Whether you're interested in buying Monument at Reverence, selling a Reverence Summerlin property, or investing in the area, contacting me provides access to specialized Reverence Summerlin expertise that benefits every transaction. As the featured on-site agent for Monument at Reverence, I offer unique insights into this premier Reverence Summerlin community that other agents simply can't provide.
            </p>
            <p className="text-gray-700">
              My Reverence Summerlin specialization includes comprehensive knowledge of Monument at Reverence floor plans, Reverence Summerlin market trends, pricing strategies, and transaction processes specific to the area. When you contact me about Reverence Summerlin real estate, you're connecting with an expert who understands the nuances that make Reverence Summerlin desirable and the factors that drive successful transactions in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Monument at Reverence Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As the featured on-site agent for Monument at Reverence in Reverence Summerlin, I provide exclusive access and insights into this premier Pulte Homes community. Contact me to learn more about Monument at Reverence opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Reverence Summerlin Market Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep knowledge of Reverence Summerlin real estate markets, including Monument at Reverence, established neighborhoods, and investment opportunities. Contact me for comprehensive Reverence Summerlin market analysis.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-primary-600">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <CardTitle>Personalized Reverence Summerlin Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every Reverence Summerlin client receives personalized attention and dedicated service throughout their transaction. Contact me to experience the difference that specialized Reverence Summerlin expertise makes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services Available in Reverence Summerlin</h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Reverence Summerlin Real Estate Services</h3>
            <p className="text-gray-700 mb-4">
              When you contact me about Reverence Summerlin real estate, you're accessing a full range of services designed to meet your needs, whether buying Monument at Reverence, selling in Reverence Summerlin, or investing in the area. My Reverence Summerlin services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Monument at Reverence new construction consultations and purchases in Reverence Summerlin</li>
              <li>Reverence Summerlin home buying assistance, including established neighborhoods</li>
              <li>Comprehensive Reverence Summerlin market analysis and property valuations</li>
              <li>Strategic pricing and marketing for Reverence Summerlin home sales</li>
              <li>Reverence Summerlin investment property analysis and opportunities</li>
              <li>VA loan assistance for military veterans buying in Reverence Summerlin</li>
              <li>Reverence Summerlin relocation services for families moving to the area</li>
              <li>Monument at Reverence floor plan consultations and selection guidance</li>
            </ul>
            <p className="text-gray-700">
              These comprehensive Reverence Summerlin services ensure that whether you're buying Monument at Reverence, selling in Reverence Summerlin, or investing in the area, you'll receive expert guidance tailored to your specific needs and goals. Contact me to discuss which Reverence Summerlin services best match your real estate objectives.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Contact Me About Reverence Summerlin Real Estate</h3>
            <p className="text-gray-700 mb-4">
              Contacting me about Reverence Summerlin real estate is easy and convenient. Whether you prefer phone, email, or the contact form below, I'm available to discuss your Reverence Summerlin real estate needs, whether buying Monument at Reverence, selling in Reverence Summerlin, or investing in the area.
            </p>
            <p className="text-gray-700 mb-4">
              For urgent Reverence Summerlin inquiries, especially regarding Monument at Reverence availability or time-sensitive Reverence Summerlin opportunities, calling or texting is the fastest way to reach me. For general Reverence Summerlin questions or to schedule consultations, the contact form provides a convenient way to share your needs and preferred contact method.
            </p>
            <p className="text-gray-700">
              My office is located at the Monument at Reverence Sales Office in Reverence Summerlin, providing convenient access for in-person meetings about Monument at Reverence or other Reverence Summerlin real estate needs. Contact me today to schedule your Reverence Summerlin consultation and begin your real estate journey.
            </p>
          </div>
        </section>

        {/* Success Message */}
        {actionData?.success && (
          <Card className="mb-8 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                  <p className="text-green-700">{actionData.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-6 h-6 text-primary-600" />
                Send Me a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form method="post" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(702) 555-0123"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="buying">Buying a Home</option>
                      <option value="selling">Selling a Home</option>
                      <option value="relocation">Relocation Assistance</option>
                      <option value="valuation">Home Valuation</option>
                      <option value="investment">Real Estate Investment</option>
                      <option value="monument">Monument at Reverence</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeline">When are you looking to buy/sell?</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="just-looking">Just looking</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Price Range (if buying)</Label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select price range</option>
                    <option value="under-500k">Under $500K</option>
                    <option value="500k-750k">$500K - $750K</option>
                    <option value="750k-1m">$750K - $1M</option>
                    <option value="1m-1.5m">$1M - $1.5M</option>
                    <option value="over-1.5m">Over $1.5M</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell me about your real estate needs, preferred neighborhoods, or any questions you have..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{config.contact.phone}</p>
                    <p className="text-sm text-gray-500">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{config.contact.email}</p>
                    <p className="text-sm text-gray-500">I respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">{config.agent.office.fullAddress}</p>
                    <p className="text-sm text-gray-500">Monument at Reverence Sales Office</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Home className="w-4 h-4 mr-2" />
                  Get Home Valuation
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Market Analysis
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Dr. Jan Duffy?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Certified Summerlin Specialist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Featured Pulte Homes Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Local Market Expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Personalized Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Professional Network</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
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
          href="/contact" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Try Again
        </a>
      </div>
    </div>
  );
}
