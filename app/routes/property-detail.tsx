import { Link } from "react-router";
import type { Route } from "./+types/property-detail";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Property Details | Dr. Janet Duffy` },
    { name: "description", content: "View detailed information about this Las Vegas property. Dr. Janet Duffy provides expert guidance for your real estate needs." },
    { name: "keywords", content: "Las Vegas property details, home for sale, property information" },
    { property: "og:title", content: `Property Details | Dr. Janet Duffy` },
    { property: "og:description", content: "View detailed information about this Las Vegas property. Dr. Janet Duffy provides expert guidance for your real estate needs." },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  // In a real application, you would fetch property data from MLS or database
  // For now, we'll return mock data based on the property ID
  
  const propertyId = params.id;
  
  // Mock property data - in a real app, this would be a database query
  const mockProperties = {
    "1": {
      id: 1,
      address: "123 Summerlin Parkway",
      city: "Las Vegas",
      state: "NV",
      zip: "89134",
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
    }
  };
  
  const property = mockProperties[propertyId as keyof typeof mockProperties];
  
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
            className="text-blue-600 hover:text-blue-800 font-medium"
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
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.status}
                </div>
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.address}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {property.city}, {property.state} {property.zip}
                </p>
                
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  ${property.price.toLocaleString()}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{property.squareFeet.toLocaleString()}</div>
                    <div className="text-gray-600">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{property.lotSize}</div>
                    <div className="text-gray-600">Acres</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${property.address} - Image ${index + 2}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
              <div className="space-y-3">
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
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Schedule a Showing</h2>
              <p className="text-gray-600 mb-4">
                Interested in this property? Contact me to schedule a private showing or get more information.
              </p>
              <a 
                href="/contact" 
                className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Dr. Janet Duffy
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Get Pre-Approved</h2>
              <p className="text-gray-600 mb-4">
                Ready to make an offer? Get pre-approved for financing to strengthen your position.
              </p>
              <a 
                href="/buying/financing" 
                className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Get Pre-Approved
              </a>
            </div>
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
          href="/properties" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Back to Properties
        </a>
      </div>
    </div>
  );
}
