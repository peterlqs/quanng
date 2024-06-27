import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  // Add localhost:3000 to allow images
  // images: {
  //   remotePatterns: [  {
  //     protocol: 'https',
  //     hostname: 'assets.example.com',
  //     port: '',
  //     pathname: '/account123/**',
  //   },],
  // },
  // images: {
  //   domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL]
  //     .filter(Boolean)
  //     .map((url) => url.replace(/https?:\/\//, '')),
  // },
}

export default withPayload(nextConfig)
