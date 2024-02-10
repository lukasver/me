const { withPlausibleProxy } = require('next-plausible');
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', port: '' },
    ],
  },
};

module.exports = withMDX(withPlausibleProxy()(nextConfig));
