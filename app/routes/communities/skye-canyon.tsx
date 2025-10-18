import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "Skye Canyon | Dr. Janet Duffy" },
    { name: "description", content: "Skye Canyon homes for sale. Dr. Janet Duffy helps you find homes in Skye Canyon." },
  ];
}

export default function SkyeCanyon() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Skye Canyon</h1>
        <p className="text-xl text-gray-600">Homes in Skye Canyon.</p>
      </div>
    </div>
  );
}
