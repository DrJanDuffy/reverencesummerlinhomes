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
  
  // Enable streaming/deferred loading (PPR-like behavior)
  // This allows React Router to stream responses and defer non-critical data
  // Similar to Next.js Partial Prerendering for better performance
  
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
  
} satisfies Config;
