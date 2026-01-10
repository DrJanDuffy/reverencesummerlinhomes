import type { Route } from './+types/communities'

export function meta() {
  return [
    { title: 'Las Vegas Communities | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        "Explore Las Vegas's premier communities with Dr. Jan Duffy. From Summerlin to Henderson, find your perfect neighborhood.",
    },
  ]
}

export default function CommunitiesIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Las Vegas Communities
        </h1>
        <p className="text-xl text-gray-600">
          Discover the best neighborhoods in Las Vegas and Summerlin.
        </p>
      </div>
    </div>
  )
}
