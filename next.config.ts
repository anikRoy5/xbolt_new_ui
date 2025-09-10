import type { NextConfig } from 'next';
 
const isProd = process.env.NODE_ENV === 'production';
console.log({
  node_env: process.env.NODE_ENV,
  isProd
});
 
const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: isProd ? '/xbolt-landing' : '',
  assetPrefix: isProd ? '/xbolt-landing' : '',
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '*' }
    ]
  }
};
 
export default nextConfig;