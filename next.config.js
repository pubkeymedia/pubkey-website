/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 'cdn.shopify.com' }] },
  reactStrictMode: true,
};

module.exports = nextConfig;
