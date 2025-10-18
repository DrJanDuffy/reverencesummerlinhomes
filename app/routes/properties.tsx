import { Link } from "react-router";
import type { Route } from "./+types/properties";

export function meta() {
  return [
    { title: "Las Vegas Properties for Sale | Dr. Janet Duffy" },
    { name: "description", content: "Browse Las Vegas and Summerlin properties for sale. Dr. Janet Duffy helps you find the perfect home with expert guidance and local market knowledge." },
    { name: "keywords", content: "Las Vegas homes for sale, Summerlin properties, Las Vegas real estate listings" },
    { property: "og:title", content: "Las Vegas Properties for Sale | Dr. Janet Duffy" },
    { property: "og:description", content: "Browse Las Vegas and Summerlin properties for sale. Dr. Janet Duffy helps you find the perfect home with expert guidance and local market knowledge." },
  ];
}

export default function Properties() {
  // Mock property data - in a real app, this would come from a loader
  const properties = [
    {
      id: 1,
      address: "123 Summerlin Parkway",
      city: "Las Vegas",
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2800,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      status: "For Sale"
    },
    {
      id: 2,
      address: "456 Red Rock Drive",
      city: "Las Vegas",
      price: 950000,
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 3200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
      status: "For Sale"
    },
    {
      id: 3,
      address: "789 Mountain View Lane",
      city: "Henderson",
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2200,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
      status: "For Sale"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Las Vegas Properties for Sale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes in Las Vegas and Summerlin. Dr. Janet Duffy provides expert guidance to help you find the perfect property that meets your needs and budget.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-4">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by city"
              >
                <option>All Cities</option>
                <option>Las Vegas</option>
                <option>Summerlin</option>
                <option>Henderson</option>
              </select>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by price range"
              >
                <option>Any Price</option>
                <option>$500K - $750K</option>
                <option>$750K - $1M</option>
                <option>$1M+</option>
              </select>
              <select 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by bedrooms"
              >
                <option>Any Bedrooms</option>
                <option>3+ Bedrooms</option>
                <option>4+ Bedrooms</option>
                <option>5+ Bedrooms</option>
              </select>
            </div>
            <div className="text-sm text-gray-600">
              Showing {properties.length} properties
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.status}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {property.address}
                </h3>
                <p className="text-gray-600 mb-3">{property.city}, NV</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{property.bedrooms} bed</span>
                  <span>{property.bathrooms} bath</span>
                  <span>{property.squareFeet.toLocaleString()} sq ft</span>
                </div>
                
                <Link
                  to={`/properties/${property.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? I can help you find properties that match your specific criteria.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Personalized Search
          </a>
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
          Try Again
        </a>
      </div>
    </div>
  );
}
