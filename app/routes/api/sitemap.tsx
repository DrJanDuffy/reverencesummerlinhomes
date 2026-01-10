import type { Route } from './+types/sitemap'
import { config } from '~/lib/config'
import { communitiesData } from '~/lib/data'

export async function loader() {
  try {
    const baseUrl = config.seo.siteUrl
    const currentDate = new Date().toISOString()

  // Static pages with enhanced priorities for real estate
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/buying', priority: '0.9', changefreq: 'weekly' },
    { url: '/selling', priority: '0.9', changefreq: 'weekly' },
    { url: '/relocate', priority: '0.8', changefreq: 'monthly' },
    { url: '/communities', priority: '0.9', changefreq: 'weekly' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/valuation', priority: '0.8', changefreq: 'weekly' },
    { url: '/properties', priority: '0.9', changefreq: 'daily' },
  ]

  // Buying pages with enhanced SEO priorities
  const buyingPages = [
    { url: '/buying/new-home', priority: '0.8', changefreq: 'weekly' },
    {
      url: '/buying/military-veterans',
      priority: '0.7',
      changefreq: 'monthly',
    },
    {
      url: '/buying/mortgage-calculator',
      priority: '0.8',
      changefreq: 'monthly',
    },
    { url: '/buying/financing', priority: '0.8', changefreq: 'monthly' },
  ]

  // Selling pages
  const sellingPages = [
    {
      url: '/selling/foreclosure-avoidance',
      priority: '0.7',
      changefreq: 'monthly',
    },
    { url: '/selling/short-sales', priority: '0.7', changefreq: 'monthly' },
    { url: '/selling/marketing', priority: '0.7', changefreq: 'monthly' },
  ]

  // Note: Community pages are listed in sitemap-communities.xml to avoid duplicates
  // Community pages should not be included in the main sitemap.xml

  // Relocation pages with location-specific priorities
  const relocationPages = [
    { url: '/relocate/summerlin', priority: '0.8', changefreq: 'monthly' },
    { url: '/relocate/california', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/los-angeles', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/san-francisco', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/new-york', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/seattle', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/phoenix', priority: '0.7', changefreq: 'monthly' },
    { url: '/relocate/chicago', priority: '0.7', changefreq: 'monthly' },
  ]

  // Resource pages with content-focused priorities
  const resourcePages = [
    { url: '/resources/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/resources/youtube', priority: '0.6', changefreq: 'weekly' },
    { url: '/resources/schools', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/golf-courses', priority: '0.5', changefreq: 'monthly' },
    { url: '/resources/trails', priority: '0.5', changefreq: 'monthly' },
    {
      url: '/resources/tennis-pickleball',
      priority: '0.5',
      changefreq: 'monthly',
    },
    { url: '/resources/pools', priority: '0.5', changefreq: 'monthly' },
  ]

  // About pages
  const aboutPages = [
    { url: '/about/media', priority: '0.6', changefreq: 'monthly' },
    { url: '/about/reviews', priority: '0.7', changefreq: 'weekly' },
    { url: '/about/zillow-premier', priority: '0.6', changefreq: 'monthly' },
  ]

  const allPages = [
    ...staticPages,
    ...buyingPages,
    ...sellingPages,
    // Community pages excluded - they're in sitemap-communities.xml
    ...relocationPages,
    ...resourcePages,
    ...aboutPages,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
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
