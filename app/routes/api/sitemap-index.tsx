import type { Route } from './+types/sitemap-index'
import { config } from '~/lib/config'

export async function loader({ request }: Route.LoaderArgs) {
  try {
    const baseUrl = config.seo.siteUrl
    const currentDate = new Date().toISOString()

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-communities.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-properties.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`

    return new Response(sitemapIndex, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    console.error('Sitemap index generation error:', error)
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap generation failed</error>',
      {
        status: 500,
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    )
  }
}

export function ErrorBoundary() {
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><error>Sitemap unavailable</error>',
    {
      status: 500,
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  )
}

// Default export for Vercel serverless function compatibility
export default function SitemapIndex() {
  return null // This route is handled by the loader
}
