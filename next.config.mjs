/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    async rewrites() {
      return [
        {
          source: '/v1/appointment/:path*',
          destination: 'http://localhost:8080/v1/appointment/:path*',
        },
      ]
    },
  }
export default nextConfig