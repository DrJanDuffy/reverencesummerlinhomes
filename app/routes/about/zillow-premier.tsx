import type { Route } from "./+types/about";

export function meta() {
  return [
    { title: "Dr. Janet Duffy Zillow Premier | Las Vegas Real Estate Expert" },
    { name: "description", content: "Dr. Janet Duffy Zillow Premier agent. Las Vegas real estate expert with Zillow Premier status." },
  ];
}

export default function ZillowPremier() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dr. Janet Duffy Zillow Premier</h1>
        <p className="text-xl text-gray-600">Zillow Premier agent status.</p>
      </div>
    </div>
  );
}
