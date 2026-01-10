import type { Route } from "./+types/about";
import { config } from "~/lib/config";

export function links() {
  return [
    { rel: "canonical", href: `${config.seo.siteUrl}/about/reviews` },
  ];
}

export function meta() {
  return [
    { title: "Dr. Jan Duffy Reviews | Las Vegas Real Estate Expert" },
    { name: "description", content: "Read reviews and testimonials from Dr. Jan Duffy's clients. Las Vegas real estate expert reviews." },
    { property: "og:url", content: `${config.seo.siteUrl}/about/reviews` },
  ];
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dr. Jan Duffy Reviews</h1>
        <p className="text-xl text-gray-600">Client reviews and testimonials.</p>
      </div>
    </div>
  );
}
