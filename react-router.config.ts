import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  presets: [vercelPreset()],
  
  // Real estate specific optimizations
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
  
  // Performance optimizations
  serverBuildTarget: "vercel",
  serverModuleFormat: "esm",
  
  // Asset handling
  assetsBuildDirectory: "build/client/assets",
  publicPath: "/assets/",
  
  // Development optimizations
  dev: {
    port: 5173,
    restart: true,
  },
  
  // Build optimizations
  buildDirectory: "build",
  serverBuildFile: "index.js",
  
  // Real estate specific routes
  routes: (defineRoute) => [
    defineRoute("/", "routes/home.tsx"),
    defineRoute("/properties", "routes/properties.tsx"),
    defineRoute("/properties/:id", "routes/property-detail.tsx"),
    defineRoute("/valuation", "routes/valuation.tsx"),
    defineRoute("/contact", "routes/contact.tsx"),
    defineRoute("/about", "routes/about.tsx"),
    defineRoute("/neighborhoods", "routes/neighborhoods.tsx"),
    defineRoute("/neighborhoods/:slug", "routes/neighborhood-detail.tsx"),
    defineRoute("/blog", "routes/blog.tsx"),
    defineRoute("/blog/:slug", "routes/blog-post.tsx"),
  ],
} satisfies Config;
