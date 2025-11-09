import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  images: {
    domains: ['picsum.photos'],
    formats: ['image/webp', 'image/avif']
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
