import type { NextConfig } from "next";

// Only use basePath if explicitly set via environment variable
// For Vercel root domain deployment, leave this empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Remove static export for Vercel - it handles Next.js apps natively
  // output: "export", // Commented out for Vercel deployment
  ...(basePath && { basePath }),
  ...(basePath && { assetPrefix: basePath }),
  images: {
    unoptimized: basePath ? true : false, // Only unoptimized if using basePath
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
    ],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
