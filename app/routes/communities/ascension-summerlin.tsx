import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "Ascension Summerlin | Dr. Janet Duffy" },
    { name: "description", content: "Ascension Summerlin homes for sale. Dr. Janet Duffy helps you find luxury homes in this premier Summerlin community." },
  ];
}

export default function AscensionSummerlin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Ascension Summerlin</h1>
        <p className="text-xl text-gray-600">Luxury homes in Ascension Summerlin.</p>
      </div>
    </div>
  );
}
