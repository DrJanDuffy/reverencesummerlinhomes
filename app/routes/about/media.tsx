import type { Route } from "./+types/about";

export function meta() {
  return [
    { title: "Dr. Janet Duffy Media | Las Vegas Real Estate Expert" },
    { name: "description", content: "Dr. Janet Duffy media appearances and press coverage. Las Vegas real estate expert in the news." },
  ];
}

export default function Media() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dr. Janet Duffy Media</h1>
        <p className="text-xl text-gray-600">Media appearances and press coverage.</p>
      </div>
    </div>
  );
}
