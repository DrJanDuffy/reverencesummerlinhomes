import type { Route } from './+types/selling-short-sales'
import { config } from '~/lib/config'

export function links() {
  return [
    { rel: 'canonical', href: `${config.seo.siteUrl}/selling/short-sales` },
  ]
}

export function meta() {
  return [
    { title: 'Short Sales | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        "Navigate short sales with Dr. Jan Duffy's expert guidance. Professional short sale assistance for Las Vegas homeowners facing financial hardship.",
    },
    {
      name: 'keywords',
      content:
        'short sale Las Vegas, short sale agent, short sale help, Las Vegas short sales',
    },
    { property: 'og:title', content: 'Short Sales | Dr. Jan Duffy' },
    {
      property: 'og:description',
      content:
        "Navigate short sales with Dr. Jan Duffy's expert guidance. Professional short sale assistance for Las Vegas homeowners facing financial hardship.",
    },
    {
      property: 'og:url',
      content: `${config.seo.siteUrl}/selling/short-sales`,
    },
  ]
}

export default function ShortSales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Short Sales</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A short sale can be a viable alternative to foreclosure when you owe
            more on your mortgage than your home is worth. Dr. Jan Duffy
            provides expert guidance through the complex short sale process in
            Las Vegas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Lender Approval
            </h3>
            <p className="text-gray-600">
              Navigate the lender approval process with expert negotiation
              skills and comprehensive documentation support.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Market Valuation
            </h3>
            <p className="text-gray-600">
              Accurate market analysis to support your short sale application
              and ensure fair treatment from lenders.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Documentation
            </h3>
            <p className="text-gray-600">
              Complete assistance with all required paperwork including
              financial statements, hardship letters, and lender forms.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Short Sale Process
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Evaluate your financial situation and determine if a short
                  sale is the right option for your circumstances.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Documentation
                </h3>
                <p className="text-gray-600">
                  Gather all required financial documents including tax returns,
                  bank statements, and hardship documentation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lender Submission
                </h3>
                <p className="text-gray-600">
                  Submit your short sale package to the lender and begin the
                  approval process with professional representation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Marketing & Sale
                </h3>
                <p className="text-gray-600">
                  Market your home professionally and negotiate with qualified
                  buyers while maintaining lender approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Short Sale Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Avoid Foreclosure
              </h3>
              <p className="text-gray-600">
                Prevent the devastating impact of foreclosure on your credit
                score and future home buying ability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Debt Relief
              </h3>
              <p className="text-gray-600">
                Potentially eliminate the difference between what you owe and
                what the home sells for.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Fresh Start
              </h3>
              <p className="text-gray-600">
                Move forward with your life without the burden of an underwater
                mortgage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Professional Support
              </h3>
              <p className="text-gray-600">
                Navigate the complex process with expert guidance and lender
                negotiation skills.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Start Short Sale Process
          </a>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but there was an error loading this page.
        </p>
        <a
          href="/selling"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Selling Guide
        </a>
      </div>
    </div>
  )
}
