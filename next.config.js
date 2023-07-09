/** @type {import('next').NextConfig} */
const nextConfig = {
  //swcMinify: true,
  //reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/tzu1pd8bi7co/1Flr57WezrXCKPTdLqeWZB/9dd5b582d206c219c270d110f12e7c78/banner-home-tablet_2x.jpg?fm=webp&fit=scale&w=640&h=548',
      },
    ],
    domains: ['images.ctfassets.net']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60', 
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig
