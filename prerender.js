/**
 * SINGLE INDEX.HTML BUILD SCRIPT
 * 
 * This script ensures we use ONLY ONE index.html file for the entire SPA.
 * 
 * WHAT IT DOES:
 * 1. Verifies the build completed successfully
 * 2. Removes any duplicate index.html files created in subdirectories
 * 3. Ensures only the root index.html exists
 * 4. Relies on .htaccess to route all requests to root index.html
 * 
 * WHY:
 * - Prevents EISDIR errors on the server
 * - Uses client-side routing (React Router) for all navigation
 * - SEO is handled by React Helmet updating meta tags dynamically
 * - Single source of truth for the HTML template
 * 
 * USAGE:
 * npm run build (automatically runs this after vite build)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, 'dist');
const rootIndexPath = path.join(distPath, 'index.html');

/**
 * Recursively find and remove all index.html files except the root one
 */
function removeNestedIndexFiles(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const fullPath = path.join(directory, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      // Check if this directory has an index.html
      const indexPath = path.join(fullPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        fs.unlinkSync(indexPath);
        console.log(`🗑️  Removed: ${path.relative(distPath, indexPath)}`);
        
        // Remove the directory if it's now empty
        const remainingItems = fs.readdirSync(fullPath);
        if (remainingItems.length === 0) {
          fs.rmdirSync(fullPath);
          console.log(`🗑️  Removed empty directory: ${path.relative(distPath, fullPath)}`);
        }
      }
      
      // Recursively check subdirectories
      removeNestedIndexFiles(fullPath);
    }
  }
}

/**
 * Main build cleanup function
 */
function cleanupBuild() {
  console.log('\n🚀 Starting build cleanup for single index.html setup...\n');
  
  // Check if dist folder exists
  if (!fs.existsSync(distPath)) {
    console.error('❌ dist folder not found. Run `vite build` first.');
    process.exit(1);
  }
  
  // Check if root index.html exists
  if (!fs.existsSync(rootIndexPath)) {
    console.error('❌ Root index.html not found in dist folder.');
    process.exit(1);
  }
  
  console.log('✅ Found root index.html\n');
  console.log('🔍 Scanning for nested index.html files...\n');
  
  // Remove all nested index.html files
  removeNestedIndexFiles(distPath);
  
  console.log('\n✨ Build cleanup complete!\n');
  console.log('📁 Final structure:');
  console.log('   dist/');
  console.log('   ├── index.html (SINGLE SOURCE OF TRUTH)');
  console.log('   ├── assets/');
  console.log('   │   ├── *.js');
  console.log('   │   └── *.css');
  console.log('   └── images/');
  console.log('       └── ...\n');
  console.log('🎯 All routes will be handled by:');
  console.log('   1. Root index.html (serves the React app)');
  console.log('   2. React Router (client-side routing)');
  console.log('   3. .htaccess (redirects all requests to index.html)');
  console.log('   4. React Helmet (dynamic SEO meta tags)\n');
}

// Run cleanup
cleanupBuild();
