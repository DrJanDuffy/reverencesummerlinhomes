// Development configuration for Reference Summerlin Homes
export const config = {
  // Environment
  env: process.env.NODE_ENV || 'development',
  
  // API Endpoints
  apis: {
    realscout: {
      baseUrl: process.env.REALSCOUT_API_URL || 'https://api.realscout.com/v1',
      apiKey: process.env.REALSCOUT_API_KEY || '',
    },
    followUpBoss: {
      baseUrl: process.env.FOLLOW_UP_BOSS_API_URL || 'https://api.followupboss.com/v1',
      apiKey: process.env.FOLLOW_UP_BOSS_API_KEY || '',
    },
    homebot: {
      baseUrl: process.env.HOMEBOT_API_URL || 'https://api.homebot.com/v1',
      apiKey: process.env.HOMEBOT_API_KEY || '',
    },
  },
  
  // Las Vegas Market Configuration
  market: {
    city: 'Las Vegas',
    state: 'Nevada',
    zipCode: '89134',
    timeZone: 'America/Los_Angeles',
    marketId: process.env.LAS_VEGAS_MARKET_ID || 'las-vegas-nv',
  },
  
  // Feature Flags
  features: {
    propertySearch: process.env.ENABLE_PROPERTY_SEARCH === 'true',
    valuationTool: process.env.ENABLE_VALUATION_TOOL === 'true',
    blog: process.env.ENABLE_BLOG === 'true',
    neighborhoodGuides: process.env.ENABLE_NEIGHBORHOOD_GUIDES === 'true',
  },
  
  // Contact Information
  contact: {
    agentName: 'Dr. Janet Duffy',
    email: process.env.CONTACT_FORM_EMAIL || 'janet@reverencesummerlinhomes.com',
    phone: '(702) 555-0123',
    license: 'Nevada Real Estate License #12345',
  },
  
  // SEO Configuration
  seo: {
    siteName: 'Reference Summerlin Homes',
    siteUrl: process.env.SITE_URL || 'https://reverencesummerlinhomes.com',
    description: 'Las Vegas real estate expert Dr. Janet Duffy specializes in Summerlin homes, property valuations, and market insights.',
    keywords: [
      'Las Vegas real estate',
      'Summerlin homes',
      'Nevada realtor',
      'Dr. Janet Duffy',
      'property valuation',
      'Las Vegas market',
    ],
  },
  
  // Performance Configuration
  performance: {
    enableAnalytics: process.env.GOOGLE_ANALYTICS_ID ? true : false,
    analyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
    enableMaps: process.env.GOOGLE_MAPS_API_KEY ? true : false,
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  },
} as const

export type Config = typeof config

