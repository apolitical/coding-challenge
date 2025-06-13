/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*", // NestJS runs on port 3000
      },
    ];
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
