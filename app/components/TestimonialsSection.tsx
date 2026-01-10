import { Link } from "react-router";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Summerlin West",
    rating: 5,
    text: "Dr. Jan Duffy made our relocation from California seamless. Her knowledge of Summerlin communities and attention to detail helped us find the perfect home. We couldn't be happier with our decision to work with her.",
    image: "/images/testimonials/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    location: "The Ridges",
    rating: 5,
    text: "As first-time homebuyers, we were nervous about the process. Dr. Jan guided us through every step and helped us understand the Las Vegas market. Her expertise and patience made all the difference.",
    image: "/images/testimonials/michael-chen.jpg",
  },
  {
    name: "Jennifer Martinez",
    location: "Downtown Summerlin",
    rating: 5,
    text: "Dr. Jan helped us sell our home quickly and for top dollar. Her marketing strategy and professional network ensured we had multiple offers within days. Highly recommend her services!",
    image: "/images/testimonials/jennifer-martinez.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What My Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            their experience working with me in the Las Vegas real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about/reviews"
            className="inline-block bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

