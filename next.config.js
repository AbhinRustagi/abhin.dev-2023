/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    removeConsole: true,
  },
  env: {
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
  },
}

module.exports = nextConfig
