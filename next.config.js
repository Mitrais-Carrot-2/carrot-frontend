/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  env: {
    API_URL: "http://localhost:8181/api/",
    NEXT_PUBLIC_API_URL: "http://localhost:8181/api/"
  },
  // basePath: "http://localhost:8181/api",
};

module.exports = nextConfig;
