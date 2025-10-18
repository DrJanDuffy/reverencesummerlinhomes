import type { Route } from "./+types/selling-foreclosure-avoidance";

export function meta() {
  return [
    { title: "Foreclosure Avoidance | Dr. Janet Duffy" },
    { name: "description", content: "Avoid foreclosure with Dr. Janet Duffy's expert guidance. Explore loan modifications, short sales, and other alternatives to keep your Las Vegas home." },
    { name: "keywords", content: "foreclosure avoidance Las Vegas, loan modification, short sale, foreclosure help Las Vegas" },
    { property: "og:title", content: "Foreclosure Avoidance | Dr. Janet Duffy" },
    { property: "og:description", content: "Avoid foreclosure with Dr. Janet Duffy's expert guidance. Explore loan modifications, short sales, and other alternatives to keep your Las Vegas home." },
  ];
}

export default function ForeclosureAvoidance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Foreclosure Avoidance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Facing foreclosure can be overwhelming, but you have options. Dr. Janet Duffy provides compassionate guidance and expert assistance to help you explore alternatives to foreclosure and protect your Las Vegas home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Loan Modification</h3>
            <p className="text-gray-600">
              Work with your lender to modify loan terms, reduce payments, or extend the loan period to make payments more manageable.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Short Sale</h3>
            <p className="text-gray-600">
              Sell your home for less than what you owe with lender approval, avoiding foreclosure and minimizing credit impact.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Deed in Lieu</h3>
            <p className="text-gray-600">
              Voluntarily transfer your property to the lender to satisfy the mortgage debt and avoid foreclosure proceedings.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Steps to Avoid Foreclosure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Act Quickly</h3>
              <p className="text-gray-600 mb-4">
                Time is critical when facing foreclosure. Contact me immediately to discuss your options and develop a strategy.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Don't ignore foreclosure notices</li>
                <li>• Gather financial documents</li>
                <li>• Contact your lender</li>
                <li>• Seek professional help</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Explore Options</h3>
              <p className="text-gray-600 mb-4">
                Multiple alternatives exist beyond foreclosure. I'll help you understand each option and choose the best path forward.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Loan modification programs</li>
                <li>• Forbearance agreements</li>
                <li>• Short sale opportunities</li>
                <li>• Refinancing options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How I Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lender Negotiation</h3>
              <p className="text-gray-600">
                I'll work directly with your lender to negotiate favorable terms and explore all available options to keep you in your home.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation Support</h3>
              <p className="text-gray-600">
                Help you gather and organize all necessary financial documents required for loan modification or other programs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-600">
                Provide accurate market valuations to support short sale negotiations and ensure you receive fair treatment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emotional Support</h3>
              <p className="text-gray-600">
                Navigate this difficult time with compassionate guidance and professional expertise to reduce stress and anxiety.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Help Now
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
          href="/selling" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Selling Guide
        </a>
      </div>
    </div>
  );
}
