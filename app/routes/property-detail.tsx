import { Link } from "react-router";
import type { Route } from "./+types/property-detail";
import { config } from "~/lib/config";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Calendar,
  Home,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Award,
  Shield,
  Search
} from "lucide-react";

export async function links({ params }: Route.LinksArgs) {
  const { id } = await params;
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/properties/${id}` },
  ];
}

export async function meta({ params }: Route.MetaArgs) {
  const { id } = await params;
  // Get property title from the slug for better SEO
  const propertyTitle = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return [
    { title: `${propertyTitle} | Reverence Summerlin Property | Dr. Jan Duffy` },
    { name: "description", content: `View detailed information about this Reverence Summerlin property. Dr. Jan Duffy provides expert guidance for your real estate needs in Reverence Summerlin and Monument at Reverence.` },
    { name: "keywords", content: `Reverence Summerlin property, ${propertyTitle}, Las Vegas property details, home for sale Reverence Summerlin, property information Monument at Reverence` },
    { property: "og:title", content: `${propertyTitle} | Reverence Summerlin Property | Dr. Jan Duffy` },
    { property: "og:description", content: `View detailed information about this Reverence Summerlin property. Dr. Jan Duffy provides expert guidance for your real estate needs.` },
    { property: "og:url", content: `${config.seo.siteUrl}/properties/${id}` },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // In a real application, you would fetch property data from MLS or database based on slug
  // For now, we'll return mock data based on the property ID/slug
  
  const { id } = await params;
  
  // Mock property data - matches the sitemap property IDs
  // In a real app, this would be a database query using the slug
  const mockProperties: Record<string, {
    id: string;
    slug: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    neighborhood: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    lotSize: number;
    yearBuilt: number;
    propertyType: string;
    description: string;
    features: string[];
    images: string[];
    status: string;
    mlsNumber: string;
    community?: string;
  }> = {
    "1": {
      id: "1",
      slug: "1",
      address: "123 Summerlin Parkway",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
      neighborhood: "Summerlin West",
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2800,
      lotSize: 0.25,
      yearBuilt: 2015,
      propertyType: "Single Family",
      description: "Stunning home in prestigious Summerlin community featuring modern amenities and mountain views. This beautifully maintained property offers spacious living areas, gourmet kitchen, and private backyard perfect for entertaining.",
      features: [
        "Gourmet Kitchen with Granite Countertops",
        "Master Suite with Walk-in Closet",
        "Private Backyard with Pool",
        "Two-Car Garage",
        "Energy Efficient Appliances",
        "Hardwood Floors Throughout",
        "Fireplace in Living Room",
        "Updated Bathrooms"
      ],
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
      ],
      status: "For Sale",
      mlsNumber: "12345678"
    },
    "monument-reverence-luxury-home-1": {
      id: "monument-reverence-luxury-home-1",
      slug: "monument-reverence-luxury-home-1",
      address: "1234 Reverence Parkway",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
      neighborhood: "Monument at Reverence",
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3200,
      lotSize: 0.3,
      yearBuilt: 2024,
      propertyType: "Single Family",
      community: "Monument at Reverence",
      description: "Exceptional new construction home in Monument at Reverence, Reverence Summerlin, featuring Pulte Homes quality construction and modern design. This luxury Reverence Summerlin property offers energy-efficient features, smart home technology, and access to world-class amenities. Located in the heart of Reverence Summerlin, this Monument at Reverence home represents premier living in Las Vegas.",
      features: [
        "Guard-Gated Monument at Reverence Community",
        "Energy-Efficient Pulte Homes Construction",
        "Smart Home Technology Throughout",
        "Gourmet Kitchen with Premium Finishes",
        "Master Suite with Luxury Bathroom",
        "Spacious Great Room with High Ceilings",
        "Private Backyard with Mountain Views",
        "Two-Car Garage with Storage",
        "Pulte's 10-Year Warranty",
        "Access to Reverence Summerlin Amenities"
      ],
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
      ],
      status: "For Sale",
      mlsNumber: "MR2024001"
    },
    "summerlin-west-family-home-2": {
      id: "summerlin-west-family-home-2",
      slug: "summerlin-west-family-home-2",
      address: "456 Summerlin West Drive",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
      neighborhood: "Summerlin West",
      price: 850000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2400,
      lotSize: 0.22,
      yearBuilt: 2018,
      propertyType: "Single Family",
      community: "Summerlin West",
      description: "Beautiful family home in Summerlin West, Reverence Summerlin area, featuring modern amenities and excellent school proximity. This Reverence Summerlin property offers comfortable living spaces, updated kitchen, and private backyard perfect for families. Located in a desirable Reverence Summerlin neighborhood with access to top-rated schools and community amenities.",
      features: [
        "Updated Kitchen with Stainless Appliances",
        "Family-Friendly Floor Plan",
        "Private Backyard with Play Area",
        "Two-Car Garage",
        "Energy Efficient Systems",
        "Proximity to Reverence Summerlin Schools",
        "Access to Community Amenities",
        "Low Maintenance Landscaping"
      ],
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
      ],
      status: "For Sale",
      mlsNumber: "SW2024002"
    },
    "the-ridges-luxury-estate-3": {
      id: "the-ridges-luxury-estate-3",
      slug: "the-ridges-luxury-estate-3",
      address: "789 The Ridges Boulevard",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
      neighborhood: "The Ridges",
      price: 2100000,
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 4500,
      lotSize: 0.5,
      yearBuilt: 2021,
      propertyType: "Single Family",
      community: "The Ridges",
      description: "Stunning luxury estate in The Ridges, Reverence Summerlin area, featuring panoramic golf course views and exceptional craftsmanship. This premier Reverence Summerlin property offers resort-style living with expansive indoor-outdoor spaces, premium finishes throughout, and access to The Ridges' exclusive amenities. This Reverence Summerlin estate represents the pinnacle of luxury living in Las Vegas, with golf course frontage and mountain views creating an unparalleled setting.",
      features: [
        "Golf Course Views in The Ridges",
        "Resort-Style Pool and Spa",
        "Gourmet Kitchen with Top-of-Line Appliances",
        "Luxury Master Suite with Private Balcony",
        "Wine Cellar and Tasting Room",
        "Home Theater with Premium Sound",
        "Smart Home Technology Throughout",
        "Guest Casita with Private Entrance",
        "Three-Car Garage with Custom Storage",
        "Expansive Outdoor Living Areas",
        "Private Putting Green",
        "Access to The Ridges Country Club"
      ],
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
      ],
      status: "For Sale",
      mlsNumber: "TR2024003"
    },
    "red-rock-country-club-golf-home-4": {
      id: "red-rock-country-club-golf-home-4",
      slug: "red-rock-country-club-golf-home-4",
      address: "321 Red Rock Drive",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
      neighborhood: "Red Rock Country Club",
      price: 1650000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3800,
      lotSize: 0.35,
      yearBuilt: 2020,
      propertyType: "Single Family",
      community: "Red Rock Country Club",
      description: "Exceptional golf course home in Red Rock Country Club, Reverence Summerlin area, featuring direct golf course access and luxury finishes. This prestigious Reverence Summerlin property offers championship golf course views, updated interiors, and access to Red Rock Country Club amenities. Located in one of Reverence Summerlin's most exclusive communities, this Red Rock Country Club home provides the ultimate golf lifestyle experience in the Reverence Summerlin area.",
      features: [
        "Direct Golf Course Access in Red Rock Country Club",
        "Championship Golf Course Views",
        "Luxury Kitchen with Premium Finishes",
        "Master Suite with Golf Course Views",
        "Updated Interiors Throughout",
        "Expansive Outdoor Living Spaces",
        "Private Patio Overlooking Golf Course",
        "Three-Car Garage",
        "Energy Efficient Systems",
        "Access to Red Rock Country Club Facilities",
        "Proximity to Reverence Summerlin Amenities",
        "Private Club Membership Available"
      ],
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
      ],
      status: "For Sale",
      mlsNumber: "RR2024004"
    },
    "skye-canyon-modern-home-5": {
      id: "skye-canyon-modern-home-5",
      slug: "skye-canyon-modern-home-5",
      address: "654 Skye Canyon Way",
      city: "Las Vegas",
      state: "NV",
      zip: "89129",
      neighborhood: "Skye Canyon",
      price: 750000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2200,
      lotSize: 0.2,
      yearBuilt: 2022,
      propertyType: "Single Family",
      community: "Skye Canyon",
      description: "Modern new construction home in Skye Canyon, near Reverence Summerlin, featuring innovative design and energy-efficient features. This contemporary property offers smart home technology, modern finishes, and access to Skye Canyon's recreational amenities. While technically in Skye Canyon, this property offers proximity to Reverence Summerlin amenities and represents excellent value in the Summerlin area.",
      features: [
        "Smart Home Technology",
        "Energy-Efficient Construction",
        "Modern Open Floor Plan",
        "Updated Kitchen with Stainless Appliances",
        "Master Suite with Walk-in Closet",
        "Private Backyard",
        "Two-Car Garage",
        "Low Maintenance Landscaping",
        "Access to Skye Canyon Amenities",
        "Proximity to Reverence Summerlin"
      ],
      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
      ],
      status: "For Sale",
      mlsNumber: "SC2024005"
    }
  };
  
  const property = mockProperties[id];
  
  if (!property) {
    throw new Response("Property not found", { status: 404 });
  }
  
  return { property };
}

export default function PropertyDetail({ loaderData }: Route.ComponentProps) {
  const { property } = loaderData;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link 
            to="/properties" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2"
          >
            ← Back to Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={property.images[0]}
                  alt={property.address}
                  className="w-full h-96 object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="800"
                  height="400"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary-600 text-white">
                    {property.status}
                  </Badge>
                </div>
                {property.community && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {property.community}
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  {property.neighborhood && property.neighborhood.includes("Reverence Summerlin") && (
                    <Badge variant="secondary" className="mb-2">Reverence Summerlin</Badge>
                  )}
                  {property.community === "Monument at Reverence" && (
                    <Badge variant="secondary" className="mb-2 bg-primary-100 text-primary-800">Monument at Reverence</Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {property.address}
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  {property.neighborhood}, {property.city}, {property.state} {property.zip}
                </p>
                {property.community && (
                  <p className="text-lg text-gray-700 mb-6">
                    Located in {property.community}
                    {property.community === "Monument at Reverence" && " in Reverence Summerlin"}
                  </p>
                )}
                
                <div className="text-4xl font-bold text-primary-600 mb-6">
                  ${property.price.toLocaleString()}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bed className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Bath className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Square className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.squareFeet.toLocaleString()}</div>
                    <div className="text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Home className="w-6 h-6 text-primary-600 mr-2" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{property.lotSize}</div>
                    <div className="text-gray-600">Acres</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Description</h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {property.description}
                  </p>
                  {(property.community === "Monument at Reverence" || property.neighborhood?.includes("Reverence Summerlin")) && (
                    <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-700">
                        This property is located in the Reverence Summerlin area, one of Las Vegas's most desirable master-planned communities. Reverence Summerlin offers exceptional amenities, top-rated schools, and convenient access to shopping, dining, and recreation. Whether you're seeking Monument at Reverence new construction or established Reverence Summerlin neighborhoods, this property represents the quality and lifestyle that defines Reverence Summerlin living.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Images</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${property.address} - Image ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="200"
                        onClick={() => {
                          // In a real app, this would open a lightbox
                          window.open(image, '_blank');
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Dr. Jan Duffy for Your Reverence Summerlin Property?</h3>
                  <p className="text-gray-700 mb-4">
                    As your Reverence Summerlin real estate expert, I bring specialized knowledge of Monument at Reverence, established Reverence Summerlin neighborhoods, and the greater Las Vegas market to every property transaction. Whether you're buying this Reverence Summerlin property or exploring other opportunities, my expertise ensures you make informed decisions.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Deep Reverence Summerlin market knowledge including Monument at Reverence</li>
                    <li>Expert negotiation protecting your interests in Reverence Summerlin transactions</li>
                    <li>Comprehensive Reverence Summerlin market analysis and property valuation</li>
                    <li>Personalized service tailored to your Reverence Summerlin real estate goals</li>
                  </ul>
                  <Button asChild className="mt-4">
                    <Link to="/contact">
                      Contact About This Reverence Summerlin Property
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">MLS Number:</span>
                  <span className="font-medium">{property.mlsNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built:</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lot Size:</span>
                  <span className="font-medium">{property.lotSize} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-medium">{property.squareFeet.toLocaleString()} sq ft</span>
                </div>
                {property.community && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Community:</span>
                    <span className="font-medium">{property.community}</span>
                  </div>
                )}
                {(property.community === "Monument at Reverence" || property.neighborhood?.includes("Reverence Summerlin")) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Badge className="mb-2">Reverence Summerlin Property</Badge>
                    <p className="text-sm text-gray-600">
                      This property is located in the Reverence Summerlin area, one of Las Vegas's premier master-planned communities.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule a Showing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-100 mb-4">
                  Interested in this Reverence Summerlin property? Contact me to schedule a private showing or get more information about this property and other Reverence Summerlin opportunities.
                </p>
                <div className="space-y-2">
                  <Button asChild className="w-full bg-white text-primary-700 hover:bg-primary-50">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Dr. Jan Duffy
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <a href={`tel:+1${config.contact.phone.replace(/\D/g, '')}`} aria-label={`Call ${config.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call {config.contact.phone}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Get Pre-Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ready to make an offer on this Reverence Summerlin property? Get pre-approved for financing to strengthen your position and move forward with confidence.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/buying/financing">
                    <Award className="w-4 h-4 mr-2" />
                    Get Pre-Approved
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {(property.community === "Monument at Reverence" || property.neighborhood?.includes("Monument at Reverence")) && (
              <Card className="border-l-4 border-primary-600">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary-600" />
                    Monument at Reverence Specialist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    As the featured on-site agent for Monument at Reverence in Reverence Summerlin, I have exclusive access and insights into this premier Pulte Homes community. I can provide detailed information about Monument at Reverence floor plans, availability, and builder incentives.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/communities/monument-at-reverence">
                      Learn More About Monument at Reverence
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Explore More Reverence Summerlin Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/properties">
                    <Search className="w-4 h-4 mr-2" />
                    View All Properties
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/communities/monument-at-reverence">
                    <Home className="w-4 h-4 mr-2" />
                    Monument at Reverence
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/buying">
                    <Home className="w-4 h-4 mr-2" />
                    Buying in Reverence Summerlin
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but the property you're looking for could not be found. The property may have been sold or the link may be incorrect.
        </p>
        <div className="space-y-3">
          <Button asChild>
            <Link to="/properties">
              View Available Properties
            </Link>
          </Button>
          <Button asChild variant="outline" className="ml-3">
            <Link to="/contact">
              Contact Dr. Jan Duffy
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
