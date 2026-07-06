import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development" && process.env.CLOUDFLARE_DEV === "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { setupDevPlatform } = require("@cloudflare/next-on-pages/next-dev");
  void setupDevPlatform();
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
