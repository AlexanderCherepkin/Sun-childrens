import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const baseConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.STRAPI_HOSTNAME || "localhost",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "static-maps.yandex.ru",
        pathname: "/1.x/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    scrollRestoration: true,
    inlineCss: true,
  },
};

const nextConfig = process.env.ANALYZE === "true" ? withBundleAnalyzer({ openAnalyzer: false })(baseConfig) : baseConfig;

export default nextConfig;
