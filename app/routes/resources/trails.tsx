import type { Route } from './+types/resources'
import { config } from '~/lib/config'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/resources/trails` }]
}

export function meta() {
  return [
    { title: 'Las Vegas Trails | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        'Las Vegas hiking trails guide. Dr. Jan Duffy helps you discover the best trails in Las Vegas.',
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/resources/trails` },
  ]
}

export default function Trails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Las Vegas Trails
        </h1>
        <p className="text-xl text-gray-600">
          Discover the best hiking trails in Las Vegas.
        </p>
      </div>
    </div>
  )
}
