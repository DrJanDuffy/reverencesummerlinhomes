import type { Route } from "./+types/buying-new-home";

export function meta() {
  return [
    { title: "New Home Construction in Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Explore new home construction options in Las Vegas and Summerlin. Dr. Janet Duffy helps you navigate the new home buying process with builder relationships and construction expertise." },
    { name: "keywords", content: "new homes Las Vegas, new construction Summerlin, home builders Las Vegas, new home communities" },
    { property: "og:title", content: "New Home Construction in Las Vegas | Dr. Janet Duffy" },
    { property: "og:description", content: "Explore new home construction options in Las Vegas and Summerlin. Dr. Janet Duffy helps you navigate the new home buying process with builder relationships and construction expertise." },
  ];
}

export default function NewHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            New Home Construction in Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest new home communities and construction projects in Las Vegas and Summerlin. I'll help you navigate the new home buying process and connect you with trusted builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customization Options</h3>
            <p className="text-gray-600">
              Choose from floor plans, finishes, and upgrades to create your perfect home from the ground up.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Builder Relationships</h3>
            <p className="text-gray-600">
              Access to preferred builders with proven track records and quality construction standards.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Warranty Protection</h3>
            <p className="text-gray-600">
              New homes come with comprehensive warranties covering structural elements and major systems.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">New Home Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Summerlin West</h3>
              <p className="text-gray-600 mb-4">
                Premier master-planned community with new construction homes featuring modern amenities and scenic mountain views.
              </p>
              <a href="/communities/summerlin-west" className="text-blue-600 hover:text-blue-800 font-medium">
                View Community →
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Skye Canyon</h3>
              <p className="text-gray-600 mb-4">
                Innovative community with smart home technology and energy-efficient new construction options.
              </p>
              <a href="/communities/skye-canyon" className="text-blue-600 hover:text-blue-800 font-medium">
                View Community →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Explore New Home Options
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
          href="/buying" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  );
}
