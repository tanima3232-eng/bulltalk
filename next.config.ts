import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/market",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
