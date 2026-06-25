import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async rewrites() {
    // On Vercel: backend service is mounted at /_/backend (experimentalServices)
    // Locally:  backend runs on localhost:5000
    const dest = process.env.VERCEL
      ? "/_/backend/api/:path*"
      : `${process.env.BACKEND_URL || "http://localhost:5000"}/api/:path*`;

    return [{ source: "/api/:path*", destination: dest }];
  },
};

export default nextConfig;
