/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  basePath: "http://localhost:8181/api/",
};

module.exports = nextConfig;
