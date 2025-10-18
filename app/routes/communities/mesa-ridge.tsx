import type { Route } from "./+types/communities";

export function meta() {
  return [
    { title: "Mesa Ridge | Dr. Janet Duffy" },
    { name: "description", content: "Mesa Ridge homes for sale. Dr. Janet Duffy helps you find homes in Mesa Ridge." },
  ];
}

export default function MesaRidge() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mesa Ridge</h1>
        <p className="text-xl text-gray-600">Homes in Mesa Ridge.</p>
      </div>
    </div>
  );
}
