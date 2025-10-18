import type { Route } from "./+types/about";

export function meta() {
  return [
    { title: "About Dr. Janet Duffy | Las Vegas Real Estate Expert" },
    { name: "description", content: "Learn about Dr. Janet Duffy, Las Vegas real estate expert specializing in Summerlin and luxury properties." },
  ];
}

export default function AboutIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Dr. Janet Duffy</h1>
        <p className="text-xl text-gray-600">Las Vegas real estate expert specializing in Summerlin and luxury properties.</p>
      </div>
    </div>
  );
}
