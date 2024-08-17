/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { removeConsole: false },
  images: { remotePatterns: [{ hostname: 'cdn.shopify.com' }] },
  reactStrictMode: true,
};

module.exports = nextConfig;
