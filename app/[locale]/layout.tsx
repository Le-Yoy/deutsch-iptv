import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import TawkTo from '@/components/TawkTo';
import { faviconSvgString } from '@/components/ui/Favicon';
import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'IPTV Deutschland - Bester Anbieter 2025 | Ab 14,99€ kaufen',
  description: 'IPTV Deutschland ✓ 26.000+ Kanäle ✓ Champions League Live & Bundesliga ✓ Netflix, Sky, DAZN ✓ 4K/8K Qualität ✓ Jetzt ab 14,99€ testen',
  keywords: 'iptv deutschland, deutsch iptv, iptv kaufen, iptv anbieter deutsch, german iptv',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DEUTSCH IPTV',
  url: 'https://deutsch-iptv.com',
  logo: 'https://deutsch-iptv.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212608677633',
    contactType: 'customer service',
    areaServed: 'DE',
    availableLanguage: ['German', 'English']
  }
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'IPTV Deutschland Premium',
  description: 'Premium IPTV mit 26.000+ Kanälen',
  brand: {
    '@type': 'Brand',
    name: 'DEUTSCH IPTV'
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '14.99',
    highPrice: '295.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock'
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  // Encode SVG for data URI
  const encodedFavicon = encodeURIComponent(faviconSvgString)
    .replace(/'/g, '%27')
    .replace(/"/g, '%27');

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Inline SVG Favicon for immediate loading */}
        <link rel="icon" type="image/svg+xml" href={`data:image/svg+xml,${encodedFavicon}`} />
        
        {/* Fallback Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#DC2626" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body 
        className="min-h-screen antialiased bg-black font-sans"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <TawkTo />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}