/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'
const cspHeader = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src 'self' ${isDev ? "'unsafe-eval' " : ''}https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https://*.supabase.co https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-src 'none'",
].join('; ')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Mantém o Unsplash se ainda for usar provisoriamente
      },
      {
        protocol: 'https',
        hostname: 'ukghebfwessjubykqqwb.supabase.co', // Substitua pelo ID do seu projeto Supabase (está na sua NEXT_PUBLIC_SUPABASE_URL)
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=()'
          },
          {
            key: 'Content-Security-Policy',
            // Adicione 'unsafe-inline' à lista do script-src
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ]
  },
};

export default nextConfig;