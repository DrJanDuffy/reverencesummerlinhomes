import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  
  // Performance optimizations
  build: {
    target: "es2022",
    minify: "esbuild",
    sourcemap: false, // Disable sourcemaps in production
    cssCodeSplit: true, // Split CSS for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-slot'],
        },
      },
    },
    // Increase chunk size warning limit (our bundles are reasonable)
    chunkSizeWarningLimit: 1000,
  },
  
  // Development optimizations
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: true,
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router"],
    exclude: ["@react-router/dev"],
  },
  
  // Performance: Reduce main thread work
  esbuild: {
    legalComments: 'none',
    treeShaking: true,
    target: 'es2022',
  },
  
  // Environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
  },
});
