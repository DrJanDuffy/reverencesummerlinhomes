import type { Route } from "./+types/buying-military-veterans";

export function meta() {
  return [
    { title: "Military Veterans Home Buying | Dr. Janet Duffy" },
    { name: "description", content: "Specialized real estate services for military veterans in Las Vegas. Dr. Janet Duffy understands VA loans, military relocation, and veteran-friendly communities." },
    { name: "keywords", content: "VA loan Las Vegas, military veterans real estate, veteran home buying, military relocation Las Vegas" },
    { property: "og:title", content: "Military Veterans Home Buying | Dr. Janet Duffy" },
    { property: "og:description", content: "Specialized real estate services for military veterans in Las Vegas. Dr. Janet Duffy understands VA loans, military relocation, and veteran-friendly communities." },
  ];
}

export default function MilitaryVeterans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Military Veterans Home Buying
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you for your service! I'm honored to help military veterans and active-duty personnel find their perfect home in Las Vegas. With specialized knowledge of VA loans and military relocation, I'll make your transition smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">VA Loan Expertise</h3>
            <p className="text-gray-600">
              Navigate VA loan benefits including zero down payment options, competitive interest rates, and no PMI requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Military Relocation</h3>
            <p className="text-gray-600">
              Specialized assistance for PCS moves, temporary housing, and understanding local military resources and communities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Veteran-Friendly Communities</h3>
            <p className="text-gray-600">
              Access to neighborhoods with strong veteran populations, military discounts, and veteran support services.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">VA Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Zero Down Payment</h3>
              <p className="text-gray-600">
                Qualified veterans can purchase a home with no down payment, making homeownership more accessible.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">No PMI Required</h3>
              <p className="text-gray-600">
                VA loans don't require private mortgage insurance, saving you hundreds of dollars each month.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                VA loans typically offer lower interest rates than conventional loans, reducing your monthly payment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Flexible Credit Requirements</h3>
              <p className="text-gray-600">
                More lenient credit score requirements compared to conventional loans, helping more veterans qualify.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Your VA Loan Process
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
