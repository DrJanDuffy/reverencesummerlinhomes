import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { 
  Calculator, 
  DollarSign, 
  Home, 
  TrendingUp, 
  Shield, 
  Users,
  Phone,
  Mail
} from "lucide-react";
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
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculatePayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      return principal / numPayments;
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculatePayment();
  const totalInterest = (monthlyPayment * loanTerm * 12) - (homePrice - downPayment);
  const propertyTax = homePrice * 0.01 / 12; // 1% annual property tax
  const insurance = 150; // Average monthly insurance
  const totalMonthlyPayment = monthlyPayment + propertyTax + insurance;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">
              Mortgage Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your monthly mortgage payments and explore different financing options to find the perfect home within your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-6 h-6 text-primary-600" />
                Mortgage Calculator
              </CardTitle>
              <CardDescription>
                Enter your details to calculate your monthly payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="homePrice">Home Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="homePrice"
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="pl-10"
                    placeholder="500,000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="pl-10"
                    placeholder="100,000"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Down payment percentage: {((downPayment / homePrice) * 100).toFixed(1)}%
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="pl-10"
                    placeholder="6.5"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term</Label>
                <select
                  id="loanTerm"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value={30}>30 years</option>
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                </select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary-600" />
                Payment Breakdown
              </CardTitle>
              <CardDescription>
                Your estimated monthly costs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">Total Monthly Payment:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${totalMonthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Principal & Interest: ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal & Interest:</span>
                  <span className="font-semibold">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Taxes:</span>
                  <span className="font-semibold">${propertyTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance:</span>
                  <span className="font-semibold">${insurance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-semibold">${(homePrice - downPayment).toLocaleString('en-US')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest:</span>
                  <span className="font-semibold">${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-xl mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary-600" />
              Financing Options
            </CardTitle>
            <CardDescription>
              Explore different loan programs available in Las Vegas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conventional Loans</h3>
                <p className="text-gray-600 mb-4">
                  Traditional financing with competitive rates and flexible terms for qualified buyers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• 3-20% down payment</li>
                  <li>• Fixed or adjustable rates</li>
                  <li>• 15-30 year terms</li>
                  <li>• PMI required if <20% down</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">VA Loans</h3>
                <p className="text-gray-600 mb-4">
                  Special benefits for military veterans and active-duty personnel with zero down payment options.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Zero down payment</li>
                  <li>• No PMI required</li>
                  <li>• Competitive rates</li>
                  <li>• Flexible credit requirements</li>
                </ul>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">FHA Loans</h3>
                <p className="text-gray-600 mb-4">
                  Government-backed loans with lower down payment requirements for first-time buyers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• 3.5% down payment</li>
                  <li>• Flexible credit requirements</li>
                  <li>• Government insured</li>
                  <li>• Higher loan limits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Pre-Approved?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let Dr. Janet Duffy connect you with trusted lenders to get pre-approved for your Las Vegas home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                <Phone className="w-5 h-5 mr-2" />
                Call {config.contact.phone}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Mail className="w-5 h-5 mr-2" />
                Get Pre-Approved
              </Button>
            </div>
          </CardContent>
        </Card>
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
