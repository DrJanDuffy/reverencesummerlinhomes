import type { Route } from "./+types/relocate";

export function meta() {
  return [
    { title: "Relocate from New York to Las Vegas | Dr. Janet Duffy" },
    { name: "description", content: "Moving from New York to Las Vegas? Dr. Janet Duffy helps NYC residents relocate to Las Vegas." },
  ];
}

export default function RelocateNewYork() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Relocate from New York to Las Vegas</h1>
        <p className="text-xl text-gray-600">Trade NYC hustle for Las Vegas lifestyle.</p>
      </div>
    </div>
  );
}
