/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RPC_ENDPOINT: process.env.RPC_ENDPOINT,
  },
  images: {
    unoptimized: true,
  }
  // images.unoptimized = true,
}

module.exports = nextConfig
