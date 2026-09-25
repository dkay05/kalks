import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This app lives in a monorepo with its own lockfile; pin the root so
  // Next does not try to infer a workspace root from the parent folders.
  turbopack: {
    root: import.meta.dirname,
  },
  outputFileTracingRoot: import.meta.dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add CDN / CMS hostnames here when real assets are wired in.
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Canonical aliases so marketing links never break.
      { source: "/signup", destination: "/register", permanent: true },
      { source: "/sign-in", destination: "/login", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
