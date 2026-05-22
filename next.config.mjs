/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
