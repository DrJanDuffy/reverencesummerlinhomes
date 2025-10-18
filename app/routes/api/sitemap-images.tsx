import type { Route } from "./+types/sitemap-images";
import { config } from "~/lib/config";

export async function loader() {
  const baseUrl = config.seo.siteUrl;
  const currentDate = new Date().toISOString();

  // Key images for SEO
  const images = [
    {
      loc: `${baseUrl}/images/og-image.svg`,
      title: "Dr. Janet Duffy - Las Vegas Real Estate Expert",
      caption: "Dr. Janet Duffy, Featured Pulte Homes Agent specializing in Las Vegas and Summerlin real estate"
    },
    {
      loc: `${baseUrl}/images/twitter-image.svg`,
      title: "Dr. Janet Duffy Real Estate Services",
      caption: "Expert real estate services in Las Vegas, Summerlin, and Monument at Reverence"
    },
    {
      loc: `${baseUrl}/images/dr-janet-duffy.svg`,
      title: "Dr. Janet Duffy Professional Headshot",
      caption: "Dr. Janet Duffy, Licensed Real Estate Agent serving Las Vegas and Summerlin"
    },
    {
      loc: `${baseUrl}/images/communities/monument-at-reverence-hero.jpg`,
      title: "Monument at Reverence Community",
      caption: "Luxury homes in Monument at Reverence, Las Vegas"
    },
    {
      loc: `${baseUrl}/images/communities/summerlin-west-hero.jpg`,
      title: "Summerlin West Community",
      caption: "Beautiful homes in Summerlin West, Las Vegas"
    },
    {
      loc: `${baseUrl}/images/communities/the-ridges-hero.jpg`,
      title: "The Ridges Luxury Community",
      caption: "Luxury estates in The Ridges, Las Vegas"
    },
    {
      loc: `${baseUrl}/images/communities/red-rock-country-club-hero.jpg`,
      title: "Red Rock Country Club",
      caption: "Golf course homes in Red Rock Country Club, Las Vegas"
    },
    {
      loc: `${baseUrl}/images/communities/skye-canyon-hero.jpg`,
      title: "Skye Canyon Community",
      caption: "Modern homes in Skye Canyon, Las Vegas"
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(image => `  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
