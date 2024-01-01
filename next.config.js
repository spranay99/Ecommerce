/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.goat.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
