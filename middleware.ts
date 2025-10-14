import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false // Disable auto-detection, force German default
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};