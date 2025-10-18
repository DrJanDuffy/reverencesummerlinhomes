import type { Route } from "./+types/resources";

export function meta() {
  return [
    { title: "Las Vegas Real Estate Blog | Dr. Janet Duffy" },
    { name: "description", content: "Las Vegas real estate blog with market insights, tips, and local information from Dr. Janet Duffy." },
  ];
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas Real Estate Blog</h1>
        <p className="text-xl text-gray-600">Market insights and tips from Dr. Janet Duffy.</p>
      </div>
    </div>
  );
}
