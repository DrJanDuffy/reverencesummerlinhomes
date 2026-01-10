import type { Route } from "./+types/resources";

export function meta() {
  return [
    { title: "Las Vegas Schools | Dr. Jan Duffy" },
    { name: "description", content: "Las Vegas schools guide. Dr. Jan Duffy helps you find the best schools in Las Vegas and Summerlin." },
  ];
}

export default function Schools() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas Schools</h1>
        <p className="text-xl text-gray-600">Find the best schools in Las Vegas and Summerlin.</p>
      </div>
    </div>
  );
}
