/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export only for production builds to avoid
  // dev-time restrictions on dynamic routes.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
