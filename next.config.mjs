/** @type {import('next').NextConfig} */
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
};

export default nextConfig;