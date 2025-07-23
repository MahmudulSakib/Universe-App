// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    // ✅ disables ESLint at build time
  },
  typescript: {
    // ✅ Skip type checking during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
