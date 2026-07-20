import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


/**
 * VITE CONFIGURATION WITH STATIC PRERENDERING
 * 
 * This configuration enables:
 * 1. Normal SPA behavior for users (client-side routing)
 * 2. Static HTML generation for SEO (prerendered at build time)
 * 3. Full content visibility for search engines and scrapers
 * 
 * HOW IT WORKS:
 * - During development: Normal Vite dev server
 * - During build: Generates static HTML files for each route
 * - After deployment: Bots see HTML, users get SPA experience
 */

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },

  /**
   * PLUGINS
   * - react(): Enables React with SWC for fast refresh
   */
  plugins: [
    react(),

  ].filter(Boolean),

  /**
   * PATH ALIASES
   * Allows importing with @ instead of relative paths
   * Example: import Component from '@/components/Component'
   */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  /**
   * BUILD CONFIGURATION
   * - outDir: Where built files go
   * - emptyOutDir: Clean dist folder before build
   * - sourcemap: Generate source maps for debugging
   */
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,

    /**
     * ROLLUP OPTIONS
     * Controls how the app is bundled
     */
    rollupOptions: {
      // Ensure proper code splitting
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));