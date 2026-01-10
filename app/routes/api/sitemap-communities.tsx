import type { Route } from './+types/sitemap-communities'
import { config } from '~/lib/config'
import { communitiesData } from '~/lib/data'

export async function loader({ request }: Route.LoaderArgs) {
  try {
    // Safety check for config
    if (!config?.seo?.siteUrl) {
      throw new Error('Missing required config.seo.siteUrl')
    }
    if (!communitiesData || !Array.isArray(communitiesData)) {
      throw new Error('Missing or invalid communitiesData')
    }

    const baseUrl = config.seo.siteUrl
    const currentDate = new Date().toISOString()

  // List of community IDs that have actual route files (exclude communities without pages)
  const validCommunityIds = [
    'monument-at-reverence',
    'summerlin-west',
    'downtown-summerlin',
    'the-ridges',
    'red-rock-country-club',
    'new-construction',
    'mesa-ridge',
    'the-peaks',
    'reverence-summerlin',
    'kestrel',
    'skye-canyon',
    'henderson',
    'boulder-city',
    'ascension-summerlin',
    'astra-la-madre-peaks',
    'luxury-homes',
  ]

  // Filter communities to only include those with actual route files
  const communityPages = communitiesData
    .filter(community => validCommunityIds.includes(community.id))
    .map(community => ({
      url: `/communities/${community.id}`,
      priority: community.id === 'monument-at-reverence' ? '0.9' : '0.8',
      changefreq: 'weekly',
      images: [
        {
          loc: `${baseUrl}/images/communities/${community.id}-hero.jpg`,
          title: `${community.name} - Las Vegas Real Estate`,
          caption: `Beautiful homes in ${community.name}, Las Vegas`,
        },
        {
          loc: `${baseUrl}/images/communities/${community.id}-aerial.jpg`,
          title: `${community.name} Aerial View`,
          caption: `Aerial view of ${community.name} community`,
        },
      ],
    }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${communityPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${page.images
  .map(
    image => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`
  )
  .join('\n')}
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
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    const errorStack =
      error instanceof Error && process.env.NODE_ENV === 'development'
        ? error.stack
        : undefined

    console.error('Sitemap communities generation error:', {
      message: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString(),
    })

    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <message>Sitemap generation failed</message>
  ${process.env.NODE_ENV === 'development' ? `<details>${errorMessage}</details>` : ''}
</error>`,
      {
        status: 500,
        headers: {
          'Content-Type': 'application/xml',
          'Cache-Control': 'no-cache',
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
export default function SitemapCommunities() {
  return null // This route is handled by the loader
}
