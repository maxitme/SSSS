import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  //enabled: process.env.ANALYZE === 'false',
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

