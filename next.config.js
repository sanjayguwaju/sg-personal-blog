/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["asset.cloudinary.com", "res.cloudinary.com"],
  }
}; 
