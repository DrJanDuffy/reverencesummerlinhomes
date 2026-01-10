import type { Route } from './+types/buying-financing'
import { config } from '~/lib/config'

export function links() {
  return [{ rel: 'canonical', href: `${config.seo.siteUrl}/buying/financing` }]
}

export function meta() {
  return [
    { title: 'Home Financing Options | Dr. Jan Duffy' },
    {
      name: 'description',
      content:
        'Explore home financing options in Las Vegas. Dr. Jan Duffy connects you with trusted lenders and helps you understand conventional, VA, FHA, and jumbo loan options.',
    },
    {
      name: 'keywords',
      content:
        'home financing Las Vegas, mortgage options, home loans Las Vegas, mortgage broker Las Vegas',
    },
    { property: 'og:title', content: 'Home Financing Options | Dr. Jan Duffy' },
    {
      property: 'og:description',
      content:
        'Explore home financing options in Las Vegas. Dr. Jan Duffy connects you with trusted lenders and helps you understand conventional, VA, FHA, and jumbo loan options.',
    },
    { property: 'og:url', content: `${config.seo.siteUrl}/buying/financing` },
  ]
}

export default function Financing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Home Financing Options
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your financing options is crucial to making the right
            home buying decision. I'll help you explore all available loan
            programs and connect you with trusted lenders who understand the Las
            Vegas market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Conventional Loans
            </h3>
            <p className="text-gray-600 mb-4">
              Traditional financing with competitive rates and flexible terms
              for qualified buyers.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3-20% down payment</li>
              <li>• Fixed or adjustable rates</li>
              <li>• 15-30 year terms</li>
              <li>• No PMI with 20% down</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              VA Loans
            </h3>
            <p className="text-gray-600 mb-4">
              Special benefits for military veterans and active-duty personnel.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Zero down payment</li>
              <li>• No PMI required</li>
              <li>• Competitive rates</li>
              <li>• Flexible credit requirements</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              FHA Loans
            </h3>
            <p className="text-gray-600 mb-4">
              Government-backed loans with lower down payment requirements.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3.5% down payment</li>
              <li>• Flexible credit requirements</li>
              <li>• Government insured</li>
              <li>• First-time buyer friendly</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Jumbo Loans
            </h3>
            <p className="text-gray-600 mb-4">
              Financing for luxury homes exceeding conventional loan limits.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Higher loan amounts</li>
              <li>• Competitive rates</li>
              <li>• Flexible terms</li>
              <li>• Luxury home financing</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Pre-Approval Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Step 1: Gather Documents
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Recent pay stubs (2-3 months)</li>
                <li>• W-2 forms (2 years)</li>
                <li>• Bank statements (2-3 months)</li>
                <li>• Tax returns (2 years)</li>
                <li>• Employment verification</li>
                <li>• Credit report</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Step 2: Lender Review
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Credit score evaluation</li>
                <li>• Debt-to-income analysis</li>
                <li>• Employment verification</li>
                <li>• Asset verification</li>
                <li>• Loan program selection</li>
                <li>• Pre-approval letter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Get Pre-Approved?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Know Your Budget
              </h3>
              <p className="text-gray-600">
                Understand exactly how much home you can afford and shop with
                confidence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Competitive Advantage
              </h3>
              <p className="text-gray-600">
                Sellers prefer buyers who are pre-approved, giving you an edge
                in competitive markets.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Faster Closing
              </h3>
              <p className="text-gray-600">
                Pre-approval speeds up the loan process, helping you close on
                your dream home faster.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Pre-Approved Today
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
          href="/buying"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  )
}
