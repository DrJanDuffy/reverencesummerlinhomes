import type { Route } from "./+types/resources";

export function meta() {
  return [
    { title: "Las Vegas YouTube Channel | Dr. Janet Duffy" },
    { name: "description", content: "Dr. Janet Duffy's YouTube channel with Las Vegas real estate videos and market updates." },
  ];
}

export default function YouTube() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas YouTube Channel</h1>
        <p className="text-xl text-gray-600">Real estate videos and market updates.</p>
      </div>
    </div>
  );
}
