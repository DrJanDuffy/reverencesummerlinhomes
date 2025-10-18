import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "New Construction Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "New construction homes in Las Vegas. Dr. Janet Duffy helps you find new build homes." },
  ];
}

export default function NewConstruction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">New Construction Las Vegas</h1>
        <p className="text-xl text-gray-600">Brand new homes in Las Vegas.</p>
      </div>
    </div>
  );
}
