import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', port: '' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/(.*)\\.env(.*)',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
      },
      {
        source: '/(.*)\\.environment(.*)',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
      },
      {
        source: '/(.*)admin(.*)',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: false,
      },
    ];
  },
};

export default withPlaiceholder(nextConfig);
