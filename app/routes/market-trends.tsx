import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { config } from "~/lib/config";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Home, 
  Calendar, 
  BarChart3,
  PieChart,
  MapPin,
  Users,
  Building,
  ArrowUp,
  ArrowDown,
  Minus,
  Activity,
  Target,
  Award
} from "lucide-react";
import type { Route } from "./+types/market-trends";

export function meta() {
  return [
    { title: "Las Vegas Real Estate Market Trends | Dr. Jan Duffy" },
    { name: "description", content: "Stay informed with the latest Las Vegas real estate market trends, pricing data, and market insights from Dr. Jan Duffy. Make data-driven decisions." },
    { name: "keywords", content: "Las Vegas real estate trends, Summerlin market data, Las Vegas home prices, real estate market analysis, Dr. Jan Duffy" },
    { property: "og:title", content: "Las Vegas Real Estate Market Trends | Dr. Jan Duffy" },
    { property: "og:description", content: "Latest Las Vegas real estate market trends and pricing data." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${config.seo.siteUrl}/market-trends` },
  ];
}

const marketData = {
  overview: {
    medianPrice: 485000,
    priceChange: 8.5,
    avgDaysOnMarket: 18,
    daysChange: -12,
    inventory: 1.2,
    inventoryChange: -15,
    newListings: 1247,
    listingsChange: 5.2,
    closedSales: 1189,
    salesChange: 3.8
  },
  neighborhoods: [
    {
      name: "Summerlin West",
      medianPrice: 1200000,
      priceChange: 15.2,
      avgDaysOnMarket: 12,
      inventory: 0.8,
      marketStatus: "Hot",
      trend: "up"
    },
    {
      name: "Downtown Summerlin",
      medianPrice: 850000,
      priceChange: 13.5,
      avgDaysOnMarket: 15,
      inventory: 1.1,
      marketStatus: "Hot",
      trend: "up"
    },
    {
      name: "Henderson",
      medianPrice: 650000,
      priceChange: 12.8,
      avgDaysOnMarket: 18,
      inventory: 1.3,
      marketStatus: "Active",
      trend: "up"
    },
    {
      name: "North Las Vegas",
      medianPrice: 425000,
      priceChange: 9.2,
      avgDaysOnMarket: 22,
      inventory: 1.5,
      marketStatus: "Active",
      trend: "up"
    },
    {
      name: "Boulder City",
      medianPrice: 550000,
      priceChange: 7.8,
      avgDaysOnMarket: 25,
      inventory: 2.1,
      marketStatus: "Balanced",
      trend: "stable"
    }
  ],
  priceRanges: [
    { range: "Under $400K", count: 1247, percentage: 28, change: -5.2 },
    { range: "$400K - $600K", count: 1890, percentage: 42, change: 8.1 },
    { range: "$600K - $800K", count: 892, percentage: 20, change: 12.3 },
    { range: "$800K - $1M", count: 312, percentage: 7, change: 15.7 },
    { range: "Over $1M", count: 156, percentage: 3, change: 18.9 }
  ],
  trends: [
    {
      category: "Market Activity",
      metric: "Days on Market",
      value: 18,
      change: -12,
      unit: "days",
      description: "Properties selling faster than last year"
    },
    {
      category: "Inventory",
      metric: "Months of Supply",
      value: 1.2,
      change: -15,
      unit: "months",
      description: "Strong seller's market conditions"
    },
    {
      category: "Pricing",
      metric: "Median Price",
      value: 485000,
      change: 8.5,
      unit: "dollars",
      description: "Continued price appreciation"
    },
    {
      category: "Demand",
      metric: "Price per Sq Ft",
      value: 195,
      change: 6.2,
      unit: "per sq ft",
      description: "Increasing value per square foot"
    }
  ],
  forecasts: [
    {
      timeframe: "3 Months",
      prediction: "Continued price growth",
      confidence: "High",
      factors: ["Low inventory", "High demand", "Interest rate stability"]
    },
    {
      timeframe: "6 Months",
      prediction: "Moderate appreciation",
      confidence: "Medium",
      factors: ["Seasonal patterns", "Economic conditions", "New construction"]
    },
    {
      timeframe: "12 Months",
      prediction: "Market stabilization",
      confidence: "Medium",
      factors: ["Supply increase", "Affordability concerns", "Economic outlook"]
    }
  ]
};

export default function MarketTrends() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"3M" | "6M" | "12M" | "All">("All");
  const [selectedView, setSelectedView] = useState<"overview" | "neighborhoods" | "forecast">("overview");

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const getMarketStatusColor = (status: string) => {
    switch (status) {
      case "Hot": return "bg-red-100 text-red-800";
      case "Active": return "bg-blue-100 text-blue-800";
      case "Balanced": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Las Vegas Market Trends
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Real-time market data and insights to help you make informed real estate decisions
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* View Toggle */}
        <section className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <Button
                variant={selectedView === "overview" ? "default" : "ghost"}
                onClick={() => setSelectedView("overview")}
                className="px-6"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant={selectedView === "neighborhoods" ? "default" : "ghost"}
                onClick={() => setSelectedView("neighborhoods")}
                className="px-6"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Neighborhoods
              </Button>
              <Button
                variant={selectedView === "forecast" ? "default" : "ghost"}
                onClick={() => setSelectedView("forecast")}
                className="px-6"
              >
                <Target className="w-4 h-4 mr-2" />
                Forecast
              </Button>
            </div>
          </div>
        </section>

        {/* Market Overview */}
        {selectedView === "overview" && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    {getTrendIcon(marketData.overview.priceChange)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    ${marketData.overview.medianPrice.toLocaleString()}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Median Home Price</p>
                  <p className={`text-sm font-medium ${getTrendColor(marketData.overview.priceChange)}`}>
                    {marketData.overview.priceChange > 0 ? '+' : ''}{marketData.overview.priceChange}% vs last year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    {getTrendIcon(marketData.overview.daysChange)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {marketData.overview.avgDaysOnMarket}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Days on Market</p>
                  <p className={`text-sm font-medium ${getTrendColor(marketData.overview.daysChange)}`}>
                    {marketData.overview.daysChange > 0 ? '+' : ''}{marketData.overview.daysChange} days vs last year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-purple-600" />
                    </div>
                    {getTrendIcon(marketData.overview.inventoryChange)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {marketData.overview.inventory}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Months of Inventory</p>
                  <p className={`text-sm font-medium ${getTrendColor(marketData.overview.inventoryChange)}`}>
                    {marketData.overview.inventoryChange > 0 ? '+' : ''}{marketData.overview.inventoryChange}% vs last year
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-orange-600" />
                    </div>
                    {getTrendIcon(marketData.overview.salesChange)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {marketData.overview.closedSales.toLocaleString()}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Closed Sales</p>
                  <p className={`text-sm font-medium ${getTrendColor(marketData.overview.salesChange)}`}>
                    {marketData.overview.salesChange > 0 ? '+' : ''}{marketData.overview.salesChange}% vs last year
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Price Range Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Price Range Distribution
                </CardTitle>
                <CardDescription>
                  Current inventory breakdown by price range
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketData.priceRanges.map((range, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{range.range}</span>
                          <span className="text-sm text-gray-600">{range.count} homes</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full" 
                            style={{ width: `${range.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm text-gray-600">{range.percentage}% of inventory</span>
                          <span className={`text-sm font-medium ${getTrendColor(range.change)}`}>
                            {range.change > 0 ? '+' : ''}{range.change}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Key Market Trends
                </CardTitle>
                <CardDescription>
                  Important metrics driving the Las Vegas real estate market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {marketData.trends.map((trend, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{trend.metric}</h4>
                        <p className="text-sm text-gray-600">{trend.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-gray-900 mr-2">
                            {trend.value.toLocaleString()}
                          </span>
                          {getTrendIcon(trend.change)}
                        </div>
                        <p className={`text-sm font-medium ${getTrendColor(trend.change)}`}>
                          {trend.change > 0 ? '+' : ''}{trend.change}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Neighborhood Analysis */}
        {selectedView === "neighborhoods" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Neighborhood Market Analysis
                </CardTitle>
                <CardDescription>
                  Detailed market data by neighborhood
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Neighborhood</th>
                        <th className="text-center p-4 font-semibold">Median Price</th>
                        <th className="text-center p-4 font-semibold">Price Change</th>
                        <th className="text-center p-4 font-semibold">Days on Market</th>
                        <th className="text-center p-4 font-semibold">Inventory</th>
                        <th className="text-center p-4 font-semibold">Market Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketData.neighborhoods.map((neighborhood, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-medium">{neighborhood.name}</td>
                          <td className="text-center p-4">${neighborhood.medianPrice.toLocaleString()}</td>
                          <td className="text-center p-4">
                            <div className="flex items-center justify-center">
                              {getTrendIcon(neighborhood.priceChange)}
                              <span className={`ml-1 font-medium ${getTrendColor(neighborhood.priceChange)}`}>
                                +{neighborhood.priceChange}%
                              </span>
                            </div>
                          </td>
                          <td className="text-center p-4">{neighborhood.avgDaysOnMarket} days</td>
                          <td className="text-center p-4">{neighborhood.inventory} months</td>
                          <td className="text-center p-4">
                            <Badge className={getMarketStatusColor(neighborhood.marketStatus)}>
                              {neighborhood.marketStatus}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Market Forecast */}
        {selectedView === "forecast" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Market Forecast & Predictions
                </CardTitle>
                <CardDescription>
                  Expert analysis and predictions for the Las Vegas real estate market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {marketData.forecasts.map((forecast, index) => (
                    <Card key={index} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">{forecast.timeframe}</CardTitle>
                        <Badge 
                          className={
                            forecast.confidence === "High" 
                              ? "bg-green-100 text-green-800" 
                              : forecast.confidence === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {forecast.confidence} Confidence
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">{forecast.prediction}</h4>
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-gray-700">Key Factors:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {forecast.factors.map((factor, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expert Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Expert Market Insights
                </CardTitle>
                <CardDescription>
                  Analysis from Dr. Jan Duffy, Las Vegas Real Estate Expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Current Market Conditions</h4>
                    <p className="text-blue-800">
                      Las Vegas continues to experience strong demand with limited inventory. The market favors sellers, 
                      but opportunities exist for buyers who act quickly and work with experienced agents.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Investment Opportunities</h4>
                    <p className="text-green-800">
                      Summerlin West and Downtown Summerlin show the strongest appreciation potential. 
                      New construction communities like Monument at Reverence offer excellent value with modern amenities.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Buyer Strategy</h4>
                    <p className="text-yellow-800">
                      Get pre-approved, work with a local expert, and be prepared to move quickly. 
                      Properties in desirable neighborhoods are selling fast, often with multiple offers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact CTA */}
        <section className="mt-16">
          <Card className="bg-primary-600 text-white">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Need Personalized Market Analysis?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Get a customized market report for your specific neighborhood or property type. 
                Dr. Jan Duffy provides detailed analysis to help you make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Get Market Report
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
