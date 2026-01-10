import type { Route } from "./+types/relocate";
import { config } from "~/lib/config";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/relocate/summerlin` },
  ];
}

export function meta() {
  return [
    { title: "Relocate to Summerlin | Dr. Jan Duffy" },
    { name: "description", content: "Relocating to Summerlin? Dr. Jan Duffy helps families find the perfect home in Summerlin, Las Vegas's premier community." },
    { property: "og:url", content: `${config.seo.siteUrl}/relocate/summerlin` },
  ];
}

export default function RelocateSummerlin() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Relocate to Summerlin</h1>
        <p className="text-xl text-gray-600">Discover Summerlin, Las Vegas's premier master-planned community.</p>
      </div>
    </div>
  );
}
