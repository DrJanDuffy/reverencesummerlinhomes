import type { Route } from "./+types/relocate";

export function meta() {
  return [
    { title: "Relocate from California to Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Moving from California to Las Vegas? Dr. Janet Duffy helps California residents relocate to Las Vegas with expert guidance on neighborhoods, taxes, and lifestyle." },
  ];
}

export default function RelocateCalifornia() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Relocate from California to Las Vegas</h1>
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Escape California's high taxes and cost of living. Las Vegas offers no state income tax, 
            affordable housing, and a thriving economy.
          </p>
        </div>
      </div>
    </div>
  );
}
