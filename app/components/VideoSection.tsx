import { Link } from "react-router";

const videos = [
  {
    title: "Grand Park at Summerlin West Construction Update October 2025",
    thumbnail: "/images/videos/grand-park-update.jpg",
    duration: "8:45",
    views: "1.2K",
    publishedAt: "2025-10-15",
  },
  {
    title: "Exploring Future Construction Projects in Summerlin West October 2025",
    thumbnail: "/images/videos/future-construction.jpg",
    duration: "12:30",
    views: "856",
    publishedAt: "2025-10-10",
  },
  {
    title: "Ascension Summerlin Toll Brothers Sales Incentives For September 2025",
    thumbnail: "/images/videos/ascension-incentives.jpg",
    duration: "6:20",
    views: "2.1K",
    publishedAt: "2025-09-28",
  },
  {
    title: "Toll Brothers The Loughton Summerlin Project September 2025",
    thumbnail: "/images/videos/loughton-project.jpg",
    duration: "9:15",
    views: "1.5K",
    publishedAt: "2025-09-20",
  },
  {
    title: "Astra Summerlin First Look At The New Phase Of Custom Lots August 2025",
    thumbnail: "/images/videos/astra-custom-lots.jpg",
    duration: "7:45",
    views: "1.8K",
    publishedAt: "2025-08-25",
  },
  {
    title: "Brand New Summerlin Gated Community By Pulte Homes July 2025 Update",
    thumbnail: "/images/videos/pulte-community.jpg",
    duration: "10:30",
    views: "3.2K",
    publishedAt: "2025-07-30",
  },
];

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Latest Videos from My YouTube Channel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In addition to being a real estate agent in Summerlin and the Las Vegas Valley, 
            I am also a FAA licensed drone pilot and take frequent flights around the community. 
            In my videos, you'll find the latest information about new subdivisions, new construction 
            areas and everything happening in Summerlin and The Las Vegas Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="200"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                  <div className="bg-white rounded-full p-3">
                    <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{video.views} views</span>
                  <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/resources/youtube"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            View All Videos on YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}

