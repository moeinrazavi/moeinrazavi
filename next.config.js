/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  
  // For GitHub Pages - update 'moeinrazavi' to your repo name if different
  basePath: isProd ? '/moeinrazavi' : '',
  assetPrefix: isProd ? '/moeinrazavi/' : '',
  
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
