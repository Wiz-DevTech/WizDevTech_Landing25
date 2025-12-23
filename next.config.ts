import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // NO output: 'export' since you have Edge Runtime API
  images: {
    unoptimized: true,
  },
  // Optional: Configure for Edge Runtime
  experimental: {
    // If you want to use Edge Runtime for all pages
  },
};

export default nextConfig;