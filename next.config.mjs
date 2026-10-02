/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath so the statically-exported site works as a GitHub project page
  // (served from https://girishlade111.github.io/landing-page-with-animated-hero/)
  basePath: '/landing-page-with-animated-hero',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
