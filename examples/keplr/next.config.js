/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      path: false,
      net: false,
      child_process: false,
      "find-free-ports": false
    };
    return config;
  },
}

module.exports = nextConfig
