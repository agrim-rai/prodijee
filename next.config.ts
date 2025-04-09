import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: 'https://www.prodijee.in',
      permanent: true, // 301 redirect for SEO
    },
  ],
};

export default nextConfig;
