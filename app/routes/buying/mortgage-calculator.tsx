import type { Route } from "./+types/buying-mortgage-calculator";

export function meta() {
  return [
    { title: "Mortgage Calculator | Dr. Janet Duffy" },
    { name: "description", content: "Calculate your monthly mortgage payments for Las Vegas homes. Dr. Janet Duffy's mortgage calculator helps you understand financing options and budget for your new home." },
    { name: "keywords", content: "mortgage calculator Las Vegas, home loan calculator, mortgage payment calculator, Las Vegas mortgage rates" },
    { property: "og:title", content: "Mortgage Calculator | Dr. Janet Duffy" },
    { property: "og:description", content: "Calculate your monthly mortgage payments for Las Vegas homes. Dr. Janet Duffy's mortgage calculator helps you understand financing options and budget for your new home." },
  ];
}

export default function MortgageCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your monthly mortgage payments and explore different financing options to find the perfect home within your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Calculator</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="homePrice" className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price
                </label>
                <input
                  type="number"
                  id="homePrice"
                  name="homePrice"
                  placeholder="500,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <input
                  type="number"
                  id="downPayment"
                  name="downPayment"
                  placeholder="100,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  id="interestRate"
                  name="interestRate"
                  step="0.01"
                  placeholder="6.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (years)
                </label>
                <select
                  id="loanTerm"
                  name="loanTerm"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="30">30 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                </select>
              </div>
              
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Calculate Payment
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Breakdown</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Payment:</span>
                <span className="font-semibold text-lg">$2,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Principal & Interest:</span>
                <span>$2,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Property Taxes:</span>
                <span>$200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance:</span>
                <span>$100</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="text-gray-600">Total Interest:</span>
                <span>$450,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Conventional Loans</h3>
              <p className="text-gray-600 mb-4">
                Traditional financing with competitive rates and flexible terms for qualified buyers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3-20% down payment</li>
                <li>• Fixed or adjustable rates</li>
                <li>• 15-30 year terms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">VA Loans</h3>
              <p className="text-gray-600 mb-4">
                Special benefits for military veterans and active-duty personnel with zero down payment options.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zero down payment</li>
                <li>• No PMI required</li>
                <li>• Competitive rates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">FHA Loans</h3>
              <p className="text-gray-600 mb-4">
                Government-backed loans with lower down payment requirements for first-time buyers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3.5% down payment</li>
                <li>• Flexible credit requirements</li>
                <li>• Government insured</li>
              </ul>
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
  );
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
        <a 
          href="/buying" 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Return to Buying Guide
        </a>
      </div>
    </div>
  );
}
