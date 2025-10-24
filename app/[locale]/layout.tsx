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
  title: '🔥 IPTV ab 4,89€/Monat - 26.000+ Kanäle | Bundesliga & Netflix 4K',
  description: '⚡ Sofort-Start in 5 Min! Bundesliga, Champions League, Netflix, Sky in 4K. 14 Tage testen ohne Risiko. Über 18.000 Deutsche nutzen uns bereits. Jetzt 50% Rabatt sichern!',
  keywords: 'iptv deutschland, deutsch iptv, iptv kaufen, iptv anbieter deutsch, german iptv, iptv subscription, iptv germany, bundesliga iptv, netflix iptv',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.svg'
  },
  manifest: '/site.webmanifest'
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
  },
  sameAs: [
    'https://wa.me/212608677633',
    'https://t.me/Buyiptvsubscription'
  ]
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'IPTV Deutschland Premium - 26.000+ Kanäle',
  description: 'Premium IPTV mit 26.000+ Kanälen in 4K/8K Qualität. Bundesliga, Champions League, Netflix, Sky, DAZN und mehr.',
  image: 'https://deutsch-iptv.com/logo.png',
  brand: {
    '@type': 'Brand',
    name: 'DEUTSCH IPTV'
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '4.89',
    highPrice: '295.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    offerCount: '4'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '18000',
    bestRating: '5',
    worstRating: '1'
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Inline SVG Favicon - Priority load */}
        <link 
          rel="icon" 
          type="image/svg+xml" 
          href={`data:image/svg+xml,${encodedFavicon}`} 
        />
        
        {/* PNG Fallbacks for older browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Shortcut icon fallback */}
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Structured Data - Product */}
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