import type { Route } from "./+types/sitemap-communities";
import { config } from "~/lib/config";
import { communitiesData } from "~/lib/data";

export async function loader() {
  const baseUrl = config.seo.siteUrl;
  const currentDate = new Date().toISOString();

  // Community pages with enhanced SEO data
  const communityPages = communitiesData.map(community => ({
    url: `/communities/${community.id}`,
    priority: community.id === "monument-at-reverence" ? "0.9" : "0.8",
    changefreq: "weekly",
    images: [
      {
        loc: `${baseUrl}/images/communities/${community.id}-hero.jpg`,
        title: `${community.name} - Las Vegas Real Estate`,
        caption: `Beautiful homes in ${community.name}, Las Vegas`
      },
      {
        loc: `${baseUrl}/images/communities/${community.id}-aerial.jpg`,
        title: `${community.name} Aerial View`,
        caption: `Aerial view of ${community.name} community`
      }
    ]
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${communityPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${page.images.map(image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
