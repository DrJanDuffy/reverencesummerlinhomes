import type { RouteConfig } from "@react-router/dev/routes";
import {
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("routes/_layout.tsx", [
    index("routes/home.tsx"),
    
    // Buying section
    ...prefix("buying", [
      index("routes/buying/index.tsx"),
      route("new-home", "routes/buying/new-home.tsx"),
      route("military-veterans", "routes/buying/military-veterans.tsx"),
      route("mortgage-calculator", "routes/buying/mortgage-calculator.tsx"),
      route("financing", "routes/buying/financing.tsx"),
    ]),
    
    // Selling section
    ...prefix("selling", [
      index("routes/selling/index.tsx"),
      route("foreclosure-avoidance", "routes/selling/foreclosure-avoidance.tsx"),
      route("short-sales", "routes/selling/short-sales.tsx"),
      route("marketing", "routes/selling/marketing.tsx"),
    ]),
    
    // Relocation section
    ...prefix("relocate", [
      index("routes/relocate/index.tsx"),
      route("summerlin", "routes/relocate/summerlin.tsx"),
      route("california", "routes/relocate/california.tsx"),
      route("los-angeles", "routes/relocate/los-angeles.tsx"),
      route("san-francisco", "routes/relocate/san-francisco.tsx"),
      route("new-york", "routes/relocate/new-york.tsx"),
      route("seattle", "routes/relocate/seattle.tsx"),
      route("phoenix", "routes/relocate/phoenix.tsx"),
      route("chicago", "routes/relocate/chicago.tsx"),
    ]),
    
    // Communities section
    ...prefix("communities", [
      index("routes/communities/index.tsx"),
      route("ascension-summerlin", "routes/communities/ascension-summerlin.tsx"),
      route("astra-la-madre-peaks", "routes/communities/astra-la-madre-peaks.tsx"),
      route("summerlin-west", "routes/communities/summerlin-west.tsx"),
      route("luxury-homes", "routes/communities/luxury-homes.tsx"),
      route("the-ridges", "routes/communities/the-ridges.tsx"),
      route("red-rock-country-club", "routes/communities/red-rock-country-club.tsx"),
      route("new-construction", "routes/communities/new-construction.tsx"),
      route("mesa-ridge", "routes/communities/mesa-ridge.tsx"),
      route("the-peaks", "routes/communities/the-peaks.tsx"),
      route("downtown-summerlin", "routes/communities/downtown-summerlin.tsx"),
      route("reverence-summerlin", "routes/communities/reverence-summerlin.tsx"),
      route("kestrel", "routes/communities/kestrel.tsx"),
      route("skye-canyon", "routes/communities/skye-canyon.tsx"),
      route("henderson", "routes/communities/henderson.tsx"),
    ]),
    
    // Resources section
    ...prefix("resources", [
      index("routes/resources/index.tsx"),
      route("blog", "routes/resources/blog.tsx"),
      route("youtube", "routes/resources/youtube.tsx"),
      route("golf-courses", "routes/resources/golf-courses.tsx"),
      route("schools", "routes/resources/schools.tsx"),
      route("trails", "routes/resources/trails.tsx"),
      route("tennis-pickleball", "routes/resources/tennis-pickleball.tsx"),
      route("pools", "routes/resources/pools.tsx"),
    ]),
    
    // Core routes
    route("contact", "routes/contact.tsx"),
    route("valuation", "routes/valuation.tsx"),
    route("properties", "routes/properties.tsx"),
    route("properties/:id", "routes/property-detail.tsx"),
  ]),
  
  // About section (outside layout)
  ...prefix("about", [
    index("routes/about/index.tsx"),
    route("media", "routes/about/media.tsx"),
    route("reviews", "routes/about/reviews.tsx"),
    route("zillow-premier", "routes/about/zillow-premier.tsx"),
  ]),
] satisfies RouteConfig;