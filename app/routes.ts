import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("./routes/home"),
  },
  {
    path: "/buying",
    children: [
      {
        index: true,
        lazy: () => import("./routes/buying/index"),
      },
      {
        path: "new-home",
        lazy: () => import("./routes/buying/new-home"),
      },
      {
        path: "military-veterans",
        lazy: () => import("./routes/buying/military-veterans"),
      },
      {
        path: "mortgage-calculator",
        lazy: () => import("./routes/buying/mortgage-calculator"),
      },
      {
        path: "financing",
        lazy: () => import("./routes/buying/financing"),
      },
    ],
  },
  {
    path: "/selling",
    children: [
      {
        index: true,
        lazy: () => import("./routes/selling/index"),
      },
      {
        path: "foreclosure-avoidance",
        lazy: () => import("./routes/selling/foreclosure-avoidance"),
      },
      {
        path: "short-sales",
        lazy: () => import("./routes/selling/short-sales"),
      },
      {
        path: "marketing",
        lazy: () => import("./routes/selling/marketing"),
      },
    ],
  },
  {
    path: "/relocate",
    children: [
      {
        index: true,
        lazy: () => import("./routes/relocate/index"),
      },
      {
        path: "summerlin",
        lazy: () => import("./routes/relocate/summerlin"),
      },
      {
        path: "california",
        lazy: () => import("./routes/relocate/california"),
      },
      {
        path: "los-angeles",
        lazy: () => import("./routes/relocate/los-angeles"),
      },
      {
        path: "san-francisco",
        lazy: () => import("./routes/relocate/san-francisco"),
      },
      {
        path: "new-york",
        lazy: () => import("./routes/relocate/new-york"),
      },
      {
        path: "seattle",
        lazy: () => import("./routes/relocate/seattle"),
      },
      {
        path: "phoenix",
        lazy: () => import("./routes/relocate/phoenix"),
      },
      {
        path: "chicago",
        lazy: () => import("./routes/relocate/chicago"),
      },
    ],
  },
  {
    path: "/communities",
    children: [
      {
        index: true,
        lazy: () => import("./routes/communities/index"),
      },
      {
        path: "ascension-summerlin",
        lazy: () => import("./routes/communities/ascension-summerlin"),
      },
      {
        path: "astra-la-madre-peaks",
        lazy: () => import("./routes/communities/astra-la-madre-peaks"),
      },
      {
        path: "summerlin-west",
        lazy: () => import("./routes/communities/summerlin-west"),
      },
      {
        path: "luxury-homes",
        lazy: () => import("./routes/communities/luxury-homes"),
      },
      {
        path: "the-ridges",
        lazy: () => import("./routes/communities/the-ridges"),
      },
      {
        path: "red-rock-country-club",
        lazy: () => import("./routes/communities/red-rock-country-club"),
      },
      {
        path: "new-construction",
        lazy: () => import("./routes/communities/new-construction"),
      },
      {
        path: "mesa-ridge",
        lazy: () => import("./routes/communities/mesa-ridge"),
      },
      {
        path: "the-peaks",
        lazy: () => import("./routes/communities/the-peaks"),
      },
      {
        path: "downtown-summerlin",
        lazy: () => import("./routes/communities/downtown-summerlin"),
      },
      {
        path: "reverence-summerlin",
        lazy: () => import("./routes/communities/reverence-summerlin"),
      },
      {
        path: "kestrel",
        lazy: () => import("./routes/communities/kestrel"),
      },
      {
        path: "skye-canyon",
        lazy: () => import("./routes/communities/skye-canyon"),
      },
      {
        path: "henderson",
        lazy: () => import("./routes/communities/henderson"),
      },
    ],
  },
  {
    path: "/resources",
    children: [
      {
        index: true,
        lazy: () => import("./routes/resources/index"),
      },
      {
        path: "blog",
        lazy: () => import("./routes/resources/blog"),
      },
      {
        path: "youtube",
        lazy: () => import("./routes/resources/youtube"),
      },
      {
        path: "golf-courses",
        lazy: () => import("./routes/resources/golf-courses"),
      },
      {
        path: "schools",
        lazy: () => import("./routes/resources/schools"),
      },
      {
        path: "trails",
        lazy: () => import("./routes/resources/trails"),
      },
      {
        path: "tennis-pickleball",
        lazy: () => import("./routes/resources/tennis-pickleball"),
      },
      {
        path: "pools",
        lazy: () => import("./routes/resources/pools"),
      },
    ],
  },
  {
    path: "/about",
    children: [
      {
        index: true,
        lazy: () => import("./routes/about/index"),
      },
      {
        path: "media",
        lazy: () => import("./routes/about/media"),
      },
      {
        path: "reviews",
        lazy: () => import("./routes/about/reviews"),
      },
      {
        path: "zillow-premier",
        lazy: () => import("./routes/about/zillow-premier"),
      },
    ],
  },
  {
    path: "/contact",
    lazy: () => import("./routes/contact"),
  },
  {
    path: "/valuation",
    lazy: () => import("./routes/valuation"),
  },
  {
    path: "/properties",
    lazy: () => import("./routes/properties"),
  },
  {
    path: "/properties/:id",
    lazy: () => import("./routes/property-detail"),
  },
];