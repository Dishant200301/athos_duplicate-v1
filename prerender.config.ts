/**
 * PRERENDER CONFIGURATION
 * 
 * This file defines which routes should be statically prerendered for SEO.
 * Each route will generate a static HTML file with full content visible to:
 * - Search engines (Google, Bing, etc.)
 * - Web scrapers
 * - Social media bots (Facebook, Twitter, LinkedIn)
 * 
 * WHY: Client-side React apps render empty HTML by default.
 * This configuration ensures real HTML content is generated at build time.
 */

export const prerenderRoutes = [
  // ✅ PUBLIC ROUTES - These will be prerendered
  {
    path: '/',
    title: 'Athos Collagen - Premium Fish Collagen Peptide & Fish Gelatin Manufacturer',
    description: 'Leading manufacturer and exporter of premium quality Fish Collagen Peptide and Fish Gelatin. World-class marine collagen products for health and wellness globally.',
  },
  {
    path: '/about',
    title: 'About Us - Athos Collagen | Leading Fish Collagen Manufacturer',
    description: 'Learn about Athos Collagen Pvt. Ltd., India\'s leading manufacturer of premium Fish Collagen Peptide and Fish Gelatin. Our mission, vision, facilities, and certifications.',
  },
  {
    path: '/fish-collagen-peptide',
    title: 'Fish Collagen Peptide - Athos Collagen | Premium Marine Collagen',
    description: 'Discover Athos Fish Collagen Peptide - premium quality marine collagen with high bioavailability. Benefits for skin, joints, hair, and overall wellness.',
  },
  {
    path: '/fish-gelatin',
    title: 'Fish Gelatin - Athos Collagen | Premium Quality Marine Gelatin',
    description: 'Explore Athos Fish Gelatin for pharmaceutical and food industry applications. High purity, biocompatible, and versatile marine gelatin products.',
  },
  {
    path: '/applications/fish-collagen-peptide',
    title: 'Fish Collagen Peptide Applications - Athos Collagen',
    description: 'Explore diverse applications of Athos Fish Collagen Peptide in nutraceuticals, food & beverages, cosmetics, pharmaceuticals, pet food, agriculture, and biotechnology.',
  },
  {
    path: '/applications/fish-gelatin',
    title: 'Fish Gelatin Applications - Athos Collagen',
    description: 'Discover applications of Athos Fish Gelatin in pharmaceutical and food industries. High purity, biocompatible marine gelatin for capsules, tablets, food products, and more.',
  },
  {
    path: '/contact',
    title: 'Contact Us - Athos Collagen | Get in Touch',
    description: 'Contact Athos Collagen for inquiries about Fish Collagen Peptide and Fish Gelatin. Reach out to our team for product information and business inquiries.',
  },
  {
    path: '/inquiry',
    title: 'Product Inquiry - Athos Collagen | Request Information',
    description: 'Submit your inquiry for Athos Fish Collagen Peptide and Fish Gelatin products. Get detailed information and pricing for your business needs.',
  },
  // ✅ BLOG PAGES
  {
    path: '/blog',
    title: 'Blog - Athos Collagen | Marine Collagen Insights & Research',
    description: 'Expert insights on fish collagen, marine collagen peptides, gelatin manufacturing, and industry trends. Educational content for manufacturers and buyers.',
  },
];

// ❌ PRIVATE ROUTES - These will NOT be prerendered
// Add any admin, dashboard, or authenticated routes here
export const excludedRoutes = [
  '/admin',
  '/dashboard',
  '/login',
];

/**
 * Get all routes that should be prerendered
 * @returns Array of route paths
 */
export function getPrerenderedPaths(): string[] {
  return prerenderRoutes.map(route => route.path);
}

/**
 * Get route metadata for SEO
 * @param path - Route path
 * @returns Route metadata or undefined
 */
export function getRouteMetadata(path: string) {
  return prerenderRoutes.find(route => route.path === path);
}
