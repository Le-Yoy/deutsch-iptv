/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-forwarded-for',
            value: 'request-ip',
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');

export default withNextIntl(nextConfig);