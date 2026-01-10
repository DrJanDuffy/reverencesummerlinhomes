import { Link } from 'react-router'

const communities = [
  {
    name: 'Ascension Summerlin',
    slug: 'ascension-summerlin',
    description:
      'Brand new gated community located at Tropicana and Town Center in the heart of Summerlin South.',
    image: '/images/communities/ascension-summerlin.jpg',
    priceRange: '$800,000 - $1,200,000',
  },
  {
    name: 'Summerlin West',
    slug: 'summerlin-west',
    description:
      'With over 5,000 acres and still growing, Summerlin West will have 14 villages when completed.',
    image: '/images/communities/summerlin-west.jpg',
    priceRange: '$600,000 - $2,500,000',
  },
  {
    name: 'Summerlin Luxury Homes',
    slug: 'luxury-homes',
    description:
      'From modern design to custom visions, find your perfect luxury home in Summerlin.',
    image: '/images/communities/luxury-homes.jpg',
    priceRange: '$1,500,000 - $5,000,000',
  },
  {
    name: 'The Ridges',
    slug: 'the-ridges',
    description:
      'Exclusive gated community offering luxury homes with stunning mountain views.',
    image: '/images/communities/the-ridges.jpg',
    priceRange: '$2,000,000 - $8,000,000',
  },
  {
    name: 'Downtown Summerlin',
    slug: 'downtown-summerlin',
    description:
      'Urban living in the heart of Summerlin with shopping, dining, and entertainment.',
    image: '/images/communities/downtown-summerlin.jpg',
    priceRange: '$400,000 - $1,000,000',
  },
  {
    name: 'Reverence Summerlin',
    slug: 'reverence-summerlin',
    description:
      'New construction community offering modern homes with resort-style amenities.',
    image: '/images/communities/reverence-summerlin.jpg',
    priceRange: '$700,000 - $1,500,000',
  },
]

export function FeaturedCommunities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse neighborhoods that make Summerlin one of Las
            Vegas' most sought-after communities. Each area offers unique
            amenities and lifestyle options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map(community => (
            <div
              key={community.slug}
              className="community-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <div className="image-container relative h-48 overflow-hidden">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="200"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-accent-500 text-white px-3 py-1 rounded-md text-xs font-bold uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {community.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {community.description}
                </p>
                <div className="price text-primary font-bold text-lg mb-4">
                  {community.priceRange}
                </div>
                <Link
                  to={`/communities/${community.slug}`}
                  className="cta-link inline-flex items-center gap-2 text-accent-500 font-semibold hover:gap-3 transition-all"
                  aria-label={`Learn more about ${community.name}`}
                >
                  Learn More About {community.name}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/communities"
            className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-3 rounded-lg font-bold text-lg uppercase tracking-wide shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 transition-all"
          >
            View All Communities
          </Link>
        </div>
      </div>
    </section>
  )
}
