import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // If no locale in URL, default to German
  if (!locale) locale = defaultLocale;
  
  if (!locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
