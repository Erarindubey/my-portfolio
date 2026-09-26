import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath: '/arindubey/portfolio',
  devIndicators: false,
  output: "standalone",
};

export default nextConfig;
