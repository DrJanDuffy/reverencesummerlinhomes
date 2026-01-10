import { reactRouter } from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],

  // Performance optimizations
  build: {
    target: 'es2022',
    minify: 'esbuild',
    sourcemap: false, // Disable sourcemaps in production
    cssCodeSplit: true, // Split CSS for better caching
    rollupOptions: {
      output: {
        // Use function-based manualChunks to avoid external module errors
        // React/React-DOM are external for SSR builds, so we only chunk UI libraries
        manualChunks(id) {
          // Only chunk UI vendor libraries (not React/React-DOM which are external)
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'ui-icons'
            }
            if (id.includes('@radix-ui')) {
              return 'ui-components'
            }
            if (
              id.includes('class-variance-authority') ||
              id.includes('clsx') ||
              id.includes('tailwind-merge')
            ) {
              return 'ui-utils'
            }
            // Let other node_modules be bundled by default (React Router handles React externals)
          }
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
    include: ['react', 'react-dom', 'react-router'],
    exclude: ['@react-router/dev'],
  },

  // Performance: Reduce main thread work
  esbuild: {
    legalComments: 'none',
    treeShaking: true,
    target: 'es2022',
  },

  // Environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
})
