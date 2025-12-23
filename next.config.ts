import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add this for Cloudflare Pages/Workers
  output: 'export', // This generates static HTML files
  // Optional: If you have images, add this
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;