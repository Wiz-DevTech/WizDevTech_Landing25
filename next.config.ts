import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    runtime: "edge",
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
