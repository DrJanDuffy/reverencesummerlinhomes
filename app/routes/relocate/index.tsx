import type { Route } from "./+types/relocate";

export function meta() {
  return [
    { title: "Relocate to Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Expert relocation services to Las Vegas and Summerlin. Dr. Janet Duffy helps families and professionals relocate to Nevada with personalized assistance." },
    { name: "keywords", content: "relocate to Las Vegas, Las Vegas relocation, Summerlin relocation, Nevada relocation, Dr. Janet Duffy" },
    { property: "og:title", content: "Relocate to Las Vegas | Dr. Janet Duffy" },
    { property: "og:description", content: "Expert relocation services to Las Vegas and Summerlin. Dr. Janet Duffy helps families and professionals relocate to Nevada with personalized assistance." },
  ];
}

export default function RelocateIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Relocate to Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make Las Vegas your new home with expert guidance from Dr. Janet Duffy. 
            Whether you're relocating from California, New York, or anywhere else, 
            I'll help you find the perfect neighborhood and home in Las Vegas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">From California</h3>
            <p className="text-gray-600 mb-4">
              Escape California's high taxes and cost of living. Las Vegas offers 
              no state income tax, affordable housing, and a thriving economy.
            </p>
            <a href="/relocate/california" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">From New York</h3>
            <p className="text-gray-600 mb-4">
              Trade the hustle and bustle for Las Vegas's vibrant lifestyle. 
              Lower cost of living with world-class entertainment and dining.
            </p>
            <a href="/relocate/new-york" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">From Seattle</h3>
            <p className="text-gray-600 mb-4">
              Enjoy Las Vegas's sunny weather year-round. No more rainy winters, 
              just beautiful desert landscapes and outdoor recreation.
            </p>
            <a href="/relocate/seattle" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More →
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Las Vegas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Housing</h3>
              <p className="text-gray-600">More house for your money compared to major coastal cities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No State Income Tax</h3>
              <p className="text-gray-600">Keep more of your hard-earned money</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-Round Sunshine</h3>
              <p className="text-gray-600">300+ days of sunshine annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Economy</h3>
              <p className="text-gray-600">Diverse industries and job opportunities</p>
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
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
