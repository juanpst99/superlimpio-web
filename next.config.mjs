// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'], // AÑADIR ESTA LÍNEA
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 año
  },
   // Comprimir automáticamente
  compress: true,
  
  // Optimizar fuentes
  optimizeFonts: true,
  
  // Habilitar SWC minify
  swcMinify: true,
  
  // Cache de imágenes
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};
export default nextConfig;