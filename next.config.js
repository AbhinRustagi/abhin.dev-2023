/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    removeConsole: true,
  },
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'dummyimage.com'],
  },
}

module.exports = nextConfig
