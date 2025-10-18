import type { Route } from "./+types/resources";

export function meta() {
  return [
    { title: "Las Vegas Resources | Dr. Janet Duffy" },
    { name: "description", content: "Las Vegas resources including schools, golf courses, trails, and more. Dr. Janet Duffy provides comprehensive local information." },
  ];
}

export default function ResourcesIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas Resources</h1>
        <p className="text-xl text-gray-600">Everything you need to know about living in Las Vegas.</p>
      </div>
    </div>
  );
}
