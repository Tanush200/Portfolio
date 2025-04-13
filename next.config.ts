import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // No pathname specified, so all paths are allowed
      },
    ],
  },
};

export default nextConfig;
