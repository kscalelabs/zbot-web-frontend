import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        // destination: "https://zeroth.gg/:path*",
        destination: "https://zeroth0.com/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
