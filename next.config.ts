import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "framerusercontent.com",
      "images.unsplash.com",
      "cdn.prod.website-files.com",
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
