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
  
  // Environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
  },
});
