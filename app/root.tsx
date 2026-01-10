import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction, MetaFunction } from "react-router";
import { config } from "~/lib/config";
import "./app.css";

export const links: LinksFunction = () => [
  // Preconnect to external origins for faster resource loading (critical path)
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "preconnect", href: "https://www.googletagmanager.com" },
  { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
  // Load fonts asynchronously with font-display: swap (already in URL)
  // Using only essential font weights to reduce payload (400, 600, 700)
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;600;700&display=swap" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => [
  // Basic meta tags
  { title: config.seo.siteName },
  { name: "description", content: config.seo.description },
  { name: "keywords", content: config.seo.keywords.join(", ") },
  { name: "author", content: config.agent.name },
  { name: "robots", content: "index, follow" },
  { name: "language", content: "en-US" },
  { name: "revisit-after", content: "7 days" },
  
  // Open Graph meta tags
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: config.seo.siteName },
  { property: "og:title", content: config.seo.siteName },
  { property: "og:description", content: config.seo.description },
  { property: "og:url", content: config.seo.siteUrl },
  { property: "og:image", content: `${config.seo.siteUrl}/images/og-image.svg` },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: `${config.agent.name} - Las Vegas Real Estate Expert` },
  { property: "og:locale", content: "en_US" },
  
  // Twitter Card meta tags
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@drjanetduffy" },
  { name: "twitter:creator", content: "@drjanetduffy" },
  { name: "twitter:title", content: config.seo.siteName },
  { name: "twitter:description", content: config.seo.description },
  { name: "twitter:image", content: `${config.seo.siteUrl}/images/twitter-image.svg` },
  { name: "twitter:image:alt", content: `${config.agent.name} - Las Vegas Real Estate Expert` },
  
  // Additional SEO meta tags
  { name: "geo.region", content: "US-NV" },
  { name: "geo.placename", content: "Las Vegas" },
  { name: "geo.position", content: "36.1699;-115.1398" },
  { name: "ICBM", content: "36.1699, -115.1398" },
  
  // Business/Local SEO
  { name: "business:contact_data:street_address", content: config.agent.office.address },
  { name: "business:contact_data:locality", content: config.agent.office.city },
  { name: "business:contact_data:region", content: config.agent.office.state },
  { name: "business:contact_data:postal_code", content: config.agent.office.zip },
  { name: "business:contact_data:country_name", content: "United States" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": config.agent.name,
              "description": config.seo.description,
              "url": config.seo.siteUrl,
              "telephone": config.contact.phone,
              "email": config.contact.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": config.agent.office.address,
                "addressLocality": config.agent.office.city,
                "addressRegion": config.agent.office.state,
                "postalCode": config.agent.office.zip,
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Las Vegas",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Nevada"
                  }
                },
                {
                  "@type": "City",
                  "name": "Summerlin",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Nevada"
                  }
                }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certified Summerlin Specialist"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Featured Pulte Homes Agent"
                }
              ],
              "knowsAbout": [
                "Las Vegas Real Estate",
                "Summerlin Real Estate",
                "New Construction",
                "Home Buying",
                "Home Selling",
                "Relocation Services"
              ],
              "image": `${config.seo.siteUrl}/images/dr-janet-duffy.svg`,
              "sameAs": [
                config.social.facebook,
                config.social.instagram,
                config.social.linkedin,
                config.social.youtube
              ]
            })
          }}
        />
        
        {/* RealScout Office Listings Widget Script - Load once for all widgets */}
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
        
        {/* RealScout Widget Styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: #0e64c8;
                width: 100%;
              }
              
              /* Ensure widget is responsive */
              realscout-office-listings * {
                box-sizing: border-box;
              }
            `,
          }}
        />
        
        {/* Google Analytics - Deferred to improve LCP and reduce main thread blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Defer Google Analytics loading until after page interactive (reduces TBT)
              if ('requestIdleCallback' in window) {
                // Use requestIdleCallback if available (Chrome, Edge)
                requestIdleCallback(function() {
                  loadGoogleAnalytics();
                }, { timeout: 2000 });
              } else {
                // Fallback: load after page load event
                window.addEventListener('load', function() {
                  setTimeout(loadGoogleAnalytics, 1000);
                });
              }
              
              function loadGoogleAnalytics() {
                // Load Google Tag Manager asynchronously
                var script = document.createElement('script');
                script.async = true;
                script.defer = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9HKNXWWHTR';
                document.head.appendChild(script);
                
                script.onload = function() {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-9HKNXWWHTR', {
                    'send_page_view': false,
                    'anonymize_ip': true,
                    'transport_type': 'beacon'
                  });
                  // Send pageview manually after initialization
                  gtag('event', 'page_view', {
                    'send_to': 'G-9HKNXWWHTR'
                  });
                };
              }
            `
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}