import type { Route } from "./+types/relocate";
import { config } from "~/lib/config";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/relocate/chicago` },
  ];
}

export function meta() {
  return [
    { title: "Relocate from Chicago to Las Vegas | Dr. Jan Duffy" },
    { name: "description", content: "Moving from Chicago to Las Vegas? Dr. Jan Duffy helps Chicago residents relocate to Las Vegas." },
    { property: "og:url", content: `${config.seo.siteUrl}/relocate/chicago` },
  ];
}

export default function RelocateChicago() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Relocate from Chicago to Las Vegas</h1>
        <p className="text-xl text-gray-600">Escape Chicago winters for Las Vegas warmth.</p>
      </div>
    </div>
  );
}
