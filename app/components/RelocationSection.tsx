import { Link } from "react-router";

export function RelocationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Relocating from California?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's face it, California isn't what it used to be. From wildfires to increasingly 
              high tax rates, it might be time to leave California for Las Vegas. And with today's 
              real estate market in Las Vegas, you can get a lot more house here in Summerlin 
              compared to nearly anywhere in California.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              As someone who specializes in helping Californians relocate to Las Vegas, I know 
              what it takes to help you make the transition. I've helped hundreds of families 
              successfully relocate from California to Summerlin and the Las Vegas Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/relocate/california"
                className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Relocate From California
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-primary-600 hover:text-white transition-colors text-center"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No State Income Tax</h3>
              <p className="text-gray-600">Save thousands annually with Nevada's tax-friendly environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lower Cost of Living</h3>
              <p className="text-gray-600">Get more house for your money in Las Vegas compared to California.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-Round Sunshine</h3>
              <p className="text-gray-600">Enjoy 300+ days of sunshine and mild winters.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Economy</h3>
              <p className="text-gray-600">Las Vegas offers diverse job opportunities and business growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

