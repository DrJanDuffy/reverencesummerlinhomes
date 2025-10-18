import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "The Ridges | Dr. Janet Duffy" },
    { name: "description", content: "The Ridges homes for sale. Dr. Janet Duffy helps you find luxury homes in The Ridges." },
  ];
}

export default function TheRidges() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">The Ridges</h1>
        <p className="text-xl text-gray-600">Luxury homes in The Ridges.</p>
      </div>
    </div>
  );
}
