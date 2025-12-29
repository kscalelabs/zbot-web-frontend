import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://zeroth.gg/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
