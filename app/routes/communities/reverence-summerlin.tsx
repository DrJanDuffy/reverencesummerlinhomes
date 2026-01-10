import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "Reverence Summerlin | Dr. Jan Duffy" },
    { name: "description", content: "Reverence Summerlin homes for sale. Dr. Jan Duffy helps you find homes in Reverence Summerlin." },
  ];
}

export default function ReverenceSummerlin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Reverence Summerlin</h1>
        <p className="text-xl text-gray-600">Homes in Reverence Summerlin.</p>
      </div>
    </div>
  );
}
