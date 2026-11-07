/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/islandsnow-react',
  assetPrefix: '/islandsnow-react/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
