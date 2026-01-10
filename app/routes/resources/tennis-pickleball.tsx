import type { Route } from "./+types/resources";
import { config } from "~/lib/config";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/resources/tennis-pickleball` },
  ];
}

export function meta() {
  return [
    { title: "Las Vegas Tennis & Pickleball | Dr. Jan Duffy" },
    { name: "description", content: "Las Vegas tennis and pickleball courts. Dr. Jan Duffy helps you find the best courts in Las Vegas." },
    { property: "og:url", content: `${config.seo.siteUrl}/resources/tennis-pickleball` },
  ];
}

export default function TennisPickleball() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Las Vegas Tennis & Pickleball</h1>
        <p className="text-xl text-gray-600">Find the best tennis and pickleball courts in Las Vegas.</p>
      </div>
    </div>
  );
}
