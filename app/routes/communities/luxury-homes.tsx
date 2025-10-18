import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "Luxury Homes Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Luxury homes for sale in Las Vegas. Dr. Janet Duffy specializes in high-end properties." },
  ];
}

export default function LuxuryHomes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Luxury Homes Las Vegas</h1>
        <p className="text-xl text-gray-600">Exclusive luxury properties in Las Vegas.</p>
      </div>
    </div>
  );
}
