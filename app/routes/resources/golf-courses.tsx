import type { Route } from "./+types/resources";

export function meta() {
  return [
    { title: "Las Vegas Golf Courses | Dr. Janet Duffy" },
    { name: "description", content: "Las Vegas golf courses guide. Dr. Janet Duffy helps you discover the best golf courses in Las Vegas." },
  ];
}

export default function GolfCourses() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas Golf Courses</h1>
        <p className="text-xl text-gray-600">Discover the best golf courses in Las Vegas.</p>
      </div>
    </div>
  );
}
