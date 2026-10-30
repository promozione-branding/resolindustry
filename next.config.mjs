/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF where supported (smaller than WebP), fall back to WebP.
    formats: ["image/avif", "image/webp"],
    // Optimized images are immutable per URL; cache them for 30 days.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
