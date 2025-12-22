import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    runtime: 'edge',  // <-- This enables Edge Runtime globally
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
