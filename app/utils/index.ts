// Utility functions for Reverence Summerlin Homes

import type { Property, ValuationRequest, ContactForm } from '~/types'

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format large numbers with K/M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Format square footage
 */
export function formatSquareFeet(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft) + ' sq ft'
}

/**
 * Calculate price per square foot
 */
export function calculatePricePerSqFt(price: number, squareFeet: number): number {
  return Math.round(price / squareFeet)
}

/**
 * Format price per square foot
 */
export function formatPricePerSqFt(pricePerSqFt: number): string {
  return `$${pricePerSqFt.toLocaleString()}/sq ft`
}

/**
 * Generate property slug from address
 */
export function generatePropertySlug(property: Pick<Property, 'address' | 'city' | 'state'>): string {
  const address = property.address
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim()
  
  const city = property.city.toLowerCase().replace(/\s+/g, '-')
  const state = property.state.toLowerCase()
  
  return `${address}-${city}-${state}`
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (US format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  return phoneRegex.test(phone)
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
  }
  return phone
}

/**
 * Calculate days on market
 */
export function calculateDaysOnMarket(listingDate: string): number {
  const listing = new Date(listingDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - listing.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

/**
 * Generate meta description for property
 */
export function generatePropertyMetaDescription(property: Property): string {
  const { bedrooms, bathrooms, squareFeet, price, city, state } = property
  return `${bedrooms} bed, ${bathrooms} bath, ${formatSquareFeet(squareFeet)} home in ${city}, ${state} for ${formatCurrency(price)}. View details and schedule a showing.`
}

/**
 * Generate meta description for neighborhood
 */
export function generateNeighborhoodMetaDescription(name: string, averagePrice: number): string {
  return `Discover ${name} neighborhood in Las Vegas. Average home price: ${formatCurrency(averagePrice)}. Find homes, schools, amenities, and market trends.`
}

/**
 * Sanitize HTML content
 */
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a proper library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Check if property is new listing (less than 7 days)
 */
export function isNewListing(listingDate: string): boolean {
  return calculateDaysOnMarket(listingDate) <= 7
}

/**
 * Check if property is price reduced
 */
export function isPriceReduced(property: Property): boolean {
  // This would need to be implemented based on your data structure
  // that tracks price history
  return false
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format relative time (e.g., "2 days ago")
 */
export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - d.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`
  return `${Math.ceil(diffDays / 365)} years ago`
}

/**
 * Validate contact form
 */
export function validateContactForm(form: ContactForm): string[] {
  const errors: string[] = []
  
  if (!form.name.trim()) {
    errors.push('Name is required')
  }
  
  if (!form.email.trim()) {
    errors.push('Email is required')
  } else if (!isValidEmail(form.email)) {
    errors.push('Please enter a valid email address')
  }
  
  if (form.phone && !isValidPhone(form.phone)) {
    errors.push('Please enter a valid phone number')
  }
  
  if (!form.message.trim()) {
    errors.push('Message is required')
  }
  
  return errors
}

/**
 * Validate valuation request
 */
export function validateValuationRequest(request: ValuationRequest): string[] {
  const errors: string[] = []
  
  if (!request.address.trim()) {
    errors.push('Address is required')
  }
  
  if (!request.city.trim()) {
    errors.push('City is required')
  }
  
  if (!request.state.trim()) {
    errors.push('State is required')
  }
  
  if (!request.zipCode.trim()) {
    errors.push('ZIP code is required')
  }
  
  if (request.bedrooms < 0) {
    errors.push('Number of bedrooms must be 0 or greater')
  }
  
  if (request.bathrooms < 0) {
    errors.push('Number of bathrooms must be 0 or greater')
  }
  
  if (request.squareFeet <= 0) {
    errors.push('Square footage must be greater than 0')
  }
  
  return errors
}

