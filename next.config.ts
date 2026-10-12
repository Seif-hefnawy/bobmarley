import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // تحذير: ده هيخلي Next.js يتجاهل أخطاء الـ ESLint وقت الـ Build
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
