import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Car,
  Calendar,
  Star,
  Heart,
  Share2,
  Phone,
  Mail,
  Play,
  Eye,
  ExternalLink
} from "lucide-react";
import type { Route } from "./+types/properties";
import { config } from "~/lib/config";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/properties` },
  ];
}

export function meta() {
  return [
    { title: "Las Vegas Properties for Sale | Dr. Jan Duffy" },
    { name: "description", content: "Browse Las Vegas and Summerlin properties for sale. Dr. Jan Duffy helps you find the perfect home with expert guidance and local market knowledge." },
    { name: "keywords", content: "Las Vegas homes for sale, Summerlin properties, Las Vegas real estate listings" },
    { property: "og:title", content: "Las Vegas Properties for Sale | Dr. Jan Duffy" },
    { property: "og:description", content: "Browse Las Vegas and Summerlin properties for sale. Dr. Jan Duffy helps you find the perfect home with expert guidance and local market knowledge." },
    { property: "og:url", content: `${config.seo.siteUrl}/properties` },
  ];
}

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [priceRange, setPriceRange] = useState("Any Price");
  const [bedrooms, setBedrooms] = useState("Any Bedrooms");
  const [sortBy, setSortBy] = useState("Price: Low to High");

  // Enhanced property data
  const allProperties = [
    {
      id: 1,
      address: "123 Summerlin Parkway",
      city: "Las Vegas",
      neighborhood: "Summerlin West",
      price: 750000,
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2800,
      garage: 2,
      yearBuilt: 2018,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      status: "For Sale",
      daysOnMarket: 15,
      features: ["Pool", "Mountain Views", "Updated Kitchen"],
      description: "Beautiful family home in prestigious Summerlin West with stunning mountain views and modern amenities.",
      virtualTour: "https://my.matterport.com/show/?m=example123",
      videoTour: "https://www.youtube.com/embed/example123"
    },
    {
      id: 2,
      address: "456 Red Rock Drive",
      city: "Las Vegas",
      neighborhood: "Red Rock Country Club",
      price: 950000,
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 3200,
      garage: 3,
      yearBuilt: 2020,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
      status: "For Sale",
      daysOnMarket: 8,
      features: ["Golf Course Views", "Pool", "Wine Cellar"],
      description: "Luxury home with golf course views in the exclusive Red Rock Country Club community.",
      virtualTour: "https://my.matterport.com/show/?m=example456",
      videoTour: "https://www.youtube.com/embed/example456"
    },
    {
      id: 3,
      address: "789 Mountain View Lane",
      city: "Henderson",
      neighborhood: "Green Valley",
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2200,
      garage: 2,
      yearBuilt: 2015,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
      status: "For Sale",
      daysOnMarket: 22,
      features: ["Mountain Views", "Updated Bathrooms", "Large Yard"],
      description: "Charming home in Henderson with mountain views and a spacious backyard perfect for families."
    },
    {
      id: 4,
      address: "321 Reverence Way",
      city: "Las Vegas",
      neighborhood: "Monument at Reverence",
      price: 525000,
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 1654,
      garage: 2,
      yearBuilt: 2024,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400",
      status: "For Sale",
      daysOnMarket: 3,
      features: ["New Construction", "Guard Gated", "Energy Efficient"],
      description: "Brand new townhome in Monument at Reverence with modern finishes and energy-efficient features."
    },
    {
      id: 5,
      address: "654 Downtown Plaza",
      city: "Las Vegas",
      neighborhood: "Downtown Summerlin",
      price: 425000,
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1200,
      garage: 1,
      yearBuilt: 2019,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400",
      status: "For Sale",
      daysOnMarket: 12,
      features: ["Walkable", "Urban Living", "Modern Finishes"],
      description: "Contemporary condo in Downtown Summerlin with walkable access to shopping and dining."
    },
    {
      id: 6,
      address: "987 The Ridges Boulevard",
      city: "Las Vegas",
      neighborhood: "The Ridges",
      price: 1200000,
      bedrooms: 6,
      bathrooms: 5,
      squareFeet: 4500,
      garage: 3,
      yearBuilt: 2021,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400",
      status: "For Sale",
      daysOnMarket: 5,
      features: ["Luxury", "Golf Course Views", "Smart Home"],
      description: "Stunning luxury home in The Ridges with panoramic golf course views and smart home technology."
    }
  ];

  // Filter properties based on search criteria
  const filteredProperties = allProperties.filter(property => {
    const matchesSearch = property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "All Cities" || property.city === selectedCity;
    const matchesPrice = priceRange === "Any Price" || 
      (priceRange === "$400K - $600K" && property.price >= 400000 && property.price <= 600000) ||
      (priceRange === "$600K - $800K" && property.price >= 600000 && property.price <= 800000) ||
      (priceRange === "$800K - $1M" && property.price >= 800000 && property.price <= 1000000) ||
      (priceRange === "$1M+" && property.price >= 1000000);
    const matchesBedrooms = bedrooms === "Any Bedrooms" ||
      (bedrooms === "2+ Bedrooms" && property.bedrooms >= 2) ||
      (bedrooms === "3+ Bedrooms" && property.bedrooms >= 3) ||
      (bedrooms === "4+ Bedrooms" && property.bedrooms >= 4) ||
      (bedrooms === "5+ Bedrooms" && property.bedrooms >= 5);

    return matchesSearch && matchesCity && matchesPrice && matchesBedrooms;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Newest First":
        return b.yearBuilt - a.yearBuilt;
      case "Days on Market":
        return a.daysOnMarket - b.daysOnMarket;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Las Vegas Properties for Sale
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes in Las Vegas and Summerlin. Dr. Jan Duffy provides expert guidance to help you find the perfect property that meets your needs and budget.
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary-600" />
              Search & Filter Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-6">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by address or neighborhood..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <select 
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option>All Cities</option>
                <option>Las Vegas</option>
                <option>Henderson</option>
                <option>Summerlin</option>
              </select>
              
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option>Any Price</option>
                <option>$400K - $600K</option>
                <option>$600K - $800K</option>
                <option>$800K - $1M</option>
                <option>$1M+</option>
              </select>
              
              <select 
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option>Any Bedrooms</option>
                <option>2+ Bedrooms</option>
                <option>3+ Bedrooms</option>
                <option>4+ Bedrooms</option>
                <option>5+ Bedrooms</option>
              </select>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Days on Market</option>
              </select>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Showing {sortedProperties.length} of {allProperties.length} properties
              </p>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary-600 text-white">
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    <Calendar className="w-3 h-3 mr-1" />
                    {property.daysOnMarket} days on market
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {property.address}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.neighborhood}, {property.city}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {property.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    ${property.price.toLocaleString()}
                  </span>
                  <div className="text-right text-sm text-gray-600">
                    <p>Built {property.yearBuilt}</p>
                    <p>{property.squareFeet.toLocaleString()} sq ft</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.squareFeet.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-1" />
                    <span>{property.garage}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link to={`/properties/${property.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Virtual Tour Buttons */}
                  {(property.virtualTour || property.videoTour) && (
                    <div className="flex gap-2">
                      {property.virtualTour && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => window.open(property.virtualTour, '_blank')}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Virtual Tour
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                      {property.videoTour && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => window.open(property.videoTour, '_blank')}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Video Tour
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedProperties.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or contact Dr. Jan Duffy for personalized assistance.
              </p>
              <Button asChild>
                <Link to="/contact">Get Personalized Search</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact CTA */}
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding Your Dream Home?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Dr. Jan Duffy provides personalized property search services and expert guidance throughout your home buying journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                <Phone className="w-5 h-5 mr-2" />
                Call {config.contact.phone}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
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
