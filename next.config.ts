import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://finevo.ch/:path*",
      },
    ];
  },
};

export default nextConfig;
