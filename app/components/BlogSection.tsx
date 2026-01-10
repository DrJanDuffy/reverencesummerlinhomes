import { Link } from "react-router";

const blogPosts = [
  {
    title: "How a Short Sale Can Save Your Credit Score",
    excerpt: "Falling behind on your mortgage doesn't make you irresponsible; it makes you human. Life happens. A job loss, a medical emergency, a divorce, or an unexpected expense can throw even...",
    author: "Dr. Jan Duffy",
    publishedAt: "2025-10-10",
    category: "Selling",
    image: "/images/blog/short-sale-credit.jpg",
    slug: "short-sale-save-credit-score",
  },
  {
    title: "How to Avoid Foreclosing On Your Las Vegas Home",
    excerpt: "Owning a home in Las Vegas is more than just a milestone. It's proof of your hard work, your stability, your story. But when life hits hard, job loss, medical...",
    author: "Dr. Jan Duffy",
    publishedAt: "2025-09-19",
    category: "Selling",
    image: "/images/blog/avoid-foreclosure.jpg",
    slug: "avoid-foreclosing-las-vegas-home",
  },
  {
    title: "Why The Peaks Summerlin Exemplifies Luxury Real Estate",
    excerpt: "Luxury real estate in Las Vegas has taken many forms over the years, but few communities offer the complete package like The Peaks in Summerlin. This neighborhood is not just...",
    author: "Dr. Jan Duffy",
    publishedAt: "2025-09-13",
    category: "Communities",
    image: "/images/blog/peaks-luxury.jpg",
    slug: "peaks-summerlin-luxury-real-estate",
  },
  {
    title: "5 Reasons to Consider Mesa Ridge in Summerlin",
    excerpt: "If you've been searching for a place to call home in Las Vegas that offers more than just a house, Mesa Ridge in Summerlin deserves your attention. Built by Toll...",
    author: "Dr. Jan Duffy",
    publishedAt: "2025-08-25",
    category: "Communities",
    image: "/images/blog/mesa-ridge.jpg",
    slug: "reasons-consider-mesa-ridge-summerlin",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News in Summerlin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest real estate news, market insights, and community 
            updates from Summerlin and the Las Vegas Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </time>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link
                    to={`/resources/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/resources/blog"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

