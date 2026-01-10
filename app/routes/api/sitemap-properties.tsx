import type { Route } from './+types/sitemap-properties'
import { config } from '~/lib/config'

export async function loader() {
  const baseUrl = config.seo.siteUrl
  const currentDate = new Date().toISOString()

  // Mock property data - in production, this would come from your MLS/API
  const properties = [
    {
      id: 'monument-reverence-luxury-home-1',
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      community: 'Monument at Reverence',
    },
    {
      id: 'summerlin-west-family-home-2',
      price: 850000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2400,
      community: 'Summerlin West',
    },
    {
      id: 'the-ridges-luxury-estate-3',
      price: 2100000,
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      community: 'The Ridges',
    },
    {
      id: 'red-rock-country-club-golf-home-4',
      price: 1650000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3800,
      community: 'Red Rock Country Club',
    },
    {
      id: 'skye-canyon-modern-home-5',
      price: 750000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      community: 'Skye Canyon',
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/properties</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${properties
  .map(
    property => `  <url>
    <loc>${baseUrl}/properties/${property.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/images/properties/${property.id}-hero.jpg</image:loc>
      <image:title>${property.bedrooms} Bed ${property.bathrooms} Bath Home in ${property.community}</image:title>
      <image:caption>Beautiful ${property.sqft} sqft home in ${property.community}, Las Vegas - $${property.price.toLocaleString()}</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/properties/${property.id}-exterior.jpg</image:loc>
      <image:title>${property.community} Home Exterior</image:title>
      <image:caption>Exterior view of luxury home in ${property.community}</image:caption>
    </image:image>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour since properties change frequently
    },
  })
}
