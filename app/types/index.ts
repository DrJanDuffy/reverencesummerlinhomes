// Real Estate Domain Types for Reverence Summerlin Homes

export interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  lotSize?: number
  yearBuilt?: number
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'luxury'
  status: 'for-sale' | 'pending' | 'sold' | 'off-market'
  description: string
  images: PropertyImage[]
  features: string[]
  neighborhood: string
  schoolDistrict?: string
  hoaFee?: number
  listingDate: string
  lastUpdated: string
  mlsNumber?: string
  virtualTourUrl?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface PropertyImage {
  id: string
  url: string
  alt: string
  caption?: string
  isPrimary: boolean
  order: number
}

export interface Neighborhood {
  id: string
  name: string
  slug: string
  description: string
  zipCodes: string[]
  averagePrice: number
  priceRange: {
    min: number
    max: number
  }
  amenities: string[]
  schools: School[]
  images: PropertyImage[]
  marketTrends: MarketTrend[]
}

export interface School {
  id: string
  name: string
  type: 'elementary' | 'middle' | 'high'
  rating: number
  distance: number
  address: string
}

export interface MarketTrend {
  period: string
  averagePrice: number
  medianPrice: number
  daysOnMarket: number
  inventory: number
  pricePerSqFt: number
}

export interface ValuationRequest {
  address: string
  city: string
  state: string
  zipCode: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  lotSize?: number
  yearBuilt?: number
  propertyType: Property['propertyType']
  recentImprovements?: string[]
}

export interface ValuationResult {
  estimatedValue: number
  valueRange: {
    low: number
    high: number
  }
  confidence: 'high' | 'medium' | 'low'
  factors: ValuationFactor[]
  comparableProperties: Property[]
  lastUpdated: string
}

export interface ValuationFactor {
  factor: string
  impact: 'positive' | 'negative' | 'neutral'
  description: string
  value: number
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  propertyInterest?: string
  budget?: number
  timeline?: 'immediate' | '3-months' | '6-months' | '1-year' | 'exploring'
  preferredContact: 'email' | 'phone' | 'text'
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  category: 'market-update' | 'neighborhood-spotlight' | 'buying-guide' | 'selling-guide' | 'investment'
  featuredImage?: PropertyImage
  seoTitle?: string
  seoDescription?: string
}

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  source: 'website' | 'referral' | 'social' | 'advertisement'
  status: 'new' | 'contacted' | 'qualified' | 'nurturing' | 'converted'
  interests: string[]
  budget?: number
  timeline?: ContactForm['timeline']
  notes?: string
  createdAt: string
  updatedAt: string
  assignedAgent?: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Validation Types
export interface ValidationError {
  field: string
  message: string
}

export interface FormState<T> {
  data: T
  errors: ValidationError[]
  isSubmitting: boolean
  isDirty: boolean
}

// Search and Filter Types
export interface PropertySearchFilters {
  priceMin?: number
  priceMax?: number
  bedrooms?: number
  bathrooms?: number
  squareFeetMin?: number
  squareFeetMax?: number
  propertyType?: Property['propertyType'][]
  neighborhoods?: string[]
  zipCodes?: string[]
  features?: string[]
  sortBy?: 'price' | 'squareFeet' | 'bedrooms' | 'newest' | 'daysOnMarket'
  sortOrder?: 'asc' | 'desc'
}

export interface SearchResult<T> {
  results: T[]
  total: number
  filters: PropertySearchFilters
  suggestions?: string[]
}

