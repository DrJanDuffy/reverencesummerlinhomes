import type { Route } from "./+types/sitemap";
import { config } from "~/lib/config";
import { communitiesData } from "~/lib/data";

export async function loader() {
  const baseUrl = config.seo.siteUrl;
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/buying", priority: "0.9", changefreq: "monthly" },
    { url: "/selling", priority: "0.9", changefreq: "monthly" },
    { url: "/relocate", priority: "0.8", changefreq: "monthly" },
    { url: "/communities", priority: "0.9", changefreq: "weekly" },
    { url: "/resources", priority: "0.7", changefreq: "weekly" },
    { url: "/about", priority: "0.6", changefreq: "monthly" },
    { url: "/contact", priority: "0.8", changefreq: "monthly" },
    { url: "/valuation", priority: "0.7", changefreq: "monthly" },
  ];

  // Community pages
  const communityPages = communitiesData.map(community => ({
    url: `/communities/${community.id}`,
    priority: community.id === "monument-at-reverence" ? "0.9" : "0.7",
    changefreq: "weekly"
  }));

  // Relocation pages
  const relocationPages = [
    { url: "/relocate/summerlin", priority: "0.8", changefreq: "monthly" },
    { url: "/relocate/california", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/los-angeles", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/san-francisco", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/new-york", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/seattle", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/phoenix", priority: "0.7", changefreq: "monthly" },
    { url: "/relocate/chicago", priority: "0.7", changefreq: "monthly" },
  ];

  // Resource pages
  const resourcePages = [
    { url: "/resources/blog", priority: "0.6", changefreq: "weekly" },
    { url: "/resources/youtube", priority: "0.5", changefreq: "monthly" },
    { url: "/resources/schools", priority: "0.6", changefreq: "monthly" },
    { url: "/resources/golf-courses", priority: "0.5", changefreq: "monthly" },
    { url: "/resources/trails", priority: "0.5", changefreq: "monthly" },
    { url: "/resources/tennis-pickleball", priority: "0.5", changefreq: "monthly" },
    { url: "/resources/pools", priority: "0.5", changefreq: "monthly" },
  ];

  const allPages = [...staticPages, ...communityPages, ...relocationPages, ...resourcePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
