'use client';

import Link from 'next/link';

interface HowItWorksSectionProps {
  locale?: string;
}

export default function HowItWorksSection({ locale = 'de' }: HowItWorksSectionProps) {
  const content = {
    de: {
      title: 'So einfach starten Sie mit Deutsch-IPTV',
      subtitle: 'In nur 3 Schritten zu 26.000+ Kanälen - Setup in 5 Minuten garantiert',
      steps: [
        {
          number: '1',
          title: 'IPTV kaufen - Paket wählen',
          description: 'Wählen Sie die gewünschte Laufzeit (1, 3, 6 oder 12 Monate) und die Anzahl der Geräte. Kontaktieren Sie uns über WhatsApp oder Telegram - schnell und sicher.',
          benefits: [
            '💳 Sichere Zahlung garantiert',
            '📱 WhatsApp & Telegram Support',
            '✅ Sofortige Bestätigung',
            '🔒 Keine Vertragsbindung'
          ]
        },
        {
          number: '2',
          title: 'Zugangsdaten erhalten - In 5 Minuten',
          description: 'Sie erhalten Ihre Zugangsdaten innerhalb von 5 Minuten per E-Mail oder WhatsApp. Unser deutsches Support-Team hilft Ihnen bei der Installation - kostenlos!',
          benefits: [
            '⏱️ Lieferung in genau 5 Minuten',
            '📧 Per E-Mail & WhatsApp',
            '🎯 Kostenlose Installationshilfe',
            '🇩🇪 Deutscher Support 24/7'
          ]
        },
        {
          number: '3',
          title: 'Sofort schauen - Alle Inhalte genießen',
          description: 'Melden Sie sich an und genießen Sie sofort 26.000+ Kanäle, 190.000+ Filme & Serien. Auf allen Geräten - überall, jederzeit.',
          benefits: [
            '📺 26.000+ Live-Kanäle',
            '🎬 190.000+ Filme & Serien',
            '🌍 Auf allen Geräten verfügbar',
            '⚡ Keine Wartezeit - sofort starten'
          ]
        }
      ],
      cta: {
        primary: 'Jetzt IPTV kaufen und in 5 Minuten starten →',
        secondary: 'Zur kostenlosen Installationsanleitung →',
        helpText: 'Brauchen Sie Hilfe bei der Installation?'
      },
      trustBadge: '12.847+ zufriedene Kunden • 98% Erfolgsrate • Ø Setup: 4 Min'
    },
    en: {
      title: 'How to Start with German IPTV',
      subtitle: 'Just 3 steps to 26,000+ channels - 5-minute setup guaranteed',
      steps: [
        {
          number: '1',
          title: 'Buy IPTV - Choose Package',
          description: 'Select your preferred duration (1, 3, 6, or 12 months) and number of devices. Contact us via WhatsApp or Telegram - quick and secure.',
          benefits: [
            '💳 Secure payment guaranteed',
            '📱 WhatsApp & Telegram support',
            '✅ Instant confirmation',
            '🔒 No contract binding'
          ]
        },
        {
          number: '2',
          title: 'Receive Credentials - In 5 Minutes',
          description: 'You\'ll receive your login credentials within 5 minutes via email or WhatsApp. Our German support team helps with installation - free!',
          benefits: [
            '⏱️ Delivery in exactly 5 minutes',
            '📧 Via email & WhatsApp',
            '🎯 Free installation help',
            '🇩🇪 German support 24/7'
          ]
        },
        {
          number: '3',
          title: 'Start Watching - Enjoy All Content',
          description: 'Log in and immediately enjoy 26,000+ channels, 190,000+ movies & series. On all devices - anywhere, anytime.',
          benefits: [
            '📺 26,000+ live channels',
            '🎬 190,000+ movies & series',
            '🌍 Available on all devices',
            '⚡ No waiting - start now'
          ]
        }
      ],
      cta: {
        primary: 'Buy IPTV now and start in 5 minutes →',
        secondary: 'Go to free installation guide →',
        helpText: 'Need help with installation?'
      },
      trustBadge: '12,847+ satisfied customers • 98% success rate • Avg setup: 4 min'
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            {t.subtitle}
          </p>
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2">
            <p className="text-sm text-green-400 font-semibold">
              {t.trustBadge}
            </p>
          </div>
        </header>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 mb-12">
          {t.steps.map((step, index) => (
            <article 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6">
                <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl text-white shadow-2xl">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-2">
                  {step.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow Indicator (Desktop Only) */}
              {index < t.steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-yellow-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <footer className="text-center">
          <Link
            href="/iptv-preise-angebote-deutschland"
            className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-2xl mb-6"
          >
            {t.cta.primary}
          </Link>
          
          <div className="text-gray-400">
            <p className="mb-2">{t.cta.helpText}</p>
            <Link
              href="/installationsanleitung-iptv"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              {t.cta.secondary}
            </Link>
          </div>
        </footer>
      </div>

      {/* HowTo Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'IPTV Deutschland kaufen und einrichten',
            description: 'So starten Sie mit Deutsch-IPTV in 3 einfachen Schritten',
            totalTime: 'PT5M',
            step: [
              {
                '@type': 'HowToStep',
                name: 'IPTV Paket kaufen',
                text: 'Wählen Sie Ihr gewünschtes Paket und kontaktieren Sie uns über WhatsApp oder Telegram',
                url: 'https://deutsch-iptv.com/iptv-preise-angebote-deutschland'
              },
              {
                '@type': 'HowToStep',
                name: 'Zugangsdaten erhalten',
                text: 'Sie erhalten Ihre Zugangsdaten innerhalb von 5 Minuten per E-Mail oder WhatsApp'
              },
              {
                '@type': 'HowToStep',
                name: 'IPTV genießen',
                text: 'Melden Sie sich an und schauen Sie sofort 26.000+ Kanäle und 190.000+ Filme'
              }
            ]
          })
        }}
      />
    </section>
  );
}