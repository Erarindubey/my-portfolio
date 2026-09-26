import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: '/arindubey/portfolio',
  devIndicators: false,
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/arindubey/portfolio',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
