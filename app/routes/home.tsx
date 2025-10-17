import { Meta, Links } from "react-router";
import { Link } from "react-router";
import { config } from "~/lib/config";
import { HeroSection } from "~/components/HeroSection";
import { FeaturedCommunities } from "~/components/FeaturedCommunities";
import { RelocationSection } from "~/components/RelocationSection";
import { VideoSection } from "~/components/VideoSection";
import { TestimonialsSection } from "~/components/TestimonialsSection";
import { BlogSection } from "~/components/BlogSection";
import { ContactSection } from "~/components/ContactSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Dr. Janet Duffy - Las Vegas Real Estate Expert | Reference Summerlin Homes" },
    { name: "description", content: config.seo.description },
    { name: "keywords", content: config.seo.keywords.join(", ") },
    { property: "og:title", content: "Dr. Janet Duffy - Las Vegas Real Estate Expert" },
    { property: "og:description", content: config.seo.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: config.seo.siteUrl },
  ];
};

export const links: LinksFunction = () => [
  { rel: "canonical", href: config.seo.siteUrl },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Welcome to Summerlin */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Summerlin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Summerlin is one of the most desirable places to live in the Las Vegas area, 
              offering a perfect blend of modern convenience and natural beauty. As a local 
              real estate expert, I often tell clients that Summerlin truly has something for 
              everyone—whether you're drawn to its scenic views of Red Rock Canyon, its 
              top-tier schools, or its vibrant dining and shopping scene.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Well-Planned Neighborhoods</h3>
              <p className="text-gray-600">
                The community is known for its well-planned neighborhoods, gorgeous parks, 
                and a peaceful, upscale atmosphere that feels a world away from the Strip.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top-Tier Schools</h3>
              <p className="text-gray-600">
                Summerlin boasts some of the best schools in Nevada, making it an ideal 
                choice for families looking to provide quality education for their children.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Beauty</h3>
              <p className="text-gray-600">
                With stunning views of Red Rock Canyon and access to hiking trails, 
                Summerlin offers the perfect balance of urban convenience and natural beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <FeaturedCommunities />

      {/* Relocation Section */}
      <RelocationSection />

      {/* Video Section */}
      <VideoSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Latest Blog Posts */}
      <BlogSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}