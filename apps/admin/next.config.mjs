import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
// Baked at `next build`; use .env.local GATEWAY_INTERNAL_URL=http://127.0.0.1:8000 for local `next dev`.
const gatewayTarget = process.env.GATEWAY_INTERNAL_URL || 'http://gateway:8000';
const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // This app lives in the KALKS monorepo with its own lockfile; pin the root
  // so Next does not infer a workspace root from parent folders.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  ...(isDev && {
    experimental: {
      staleTimes: { dynamic: 0, static: 0 },
    },
  }),
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${gatewayTarget.replace(/\/$/, '')}/api/:path*`,
      },
    ];
  },
  async headers() {
    if (!isDev) return [];
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
    ];
  },
};

export default nextConfig;
