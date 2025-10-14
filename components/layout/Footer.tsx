'use client';

import Link from 'next/link';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'de' }: FooterProps) {
  const content = {
    de: {
      description: 'Deutsch-IPTV - Ihr zuverlässiger IPTV Anbieter für Deutschland mit über 26.000+ Kanälen, 190.000+ VOD. IPTV kaufen und sofort auf allen Geräten streamen.',
      quickLinks: {
        title: '⚡ Schnellzugriff',
        links: [
          { text: 'IPTV Pakete & Preise', href: '/iptv-preise-angebote-deutschland' },
          { text: 'Installation Anleitung', href: '/installationsanleitung-iptv' },
          { text: 'Wiederverkäufer Programm', href: '/iptv-wiederverkaeufer' },
          { text: 'Häufige Fragen', href: '#faq' }
        ]
      },
      legal: {
        title: '📋 Rechtliches',
        links: [
          { text: 'Servicebedingungen', href: '/servicebedingungen' },
          { text: 'Rückerstattung', href: '/rueckerstattungsrichtlinie' },
          { text: 'Datenschutz', href: '/datenschutzrichtlinie' },
          { text: 'DMCA', href: '/dmca' },
          { text: 'Impressum', href: '/impressum' }
        ]
      },
      support: {
        title: '💬 Support 24/7',
        whatsapp: 'WhatsApp Support',
        telegram: 'Telegram Support',
        response: '⚡ 5 Min Antwortzeit',
        german: '🇩🇪 Deutscher Support'
      },
      trust: {
        customers: '12.847+ Aktive Nutzer',
        uptime: '99,9% Verfügbarkeit',
        setup: '5 Min Setup-Zeit',
        guarantee: '30 Tage Garantie'
      },
      cta: {
        title: 'Bereit für Premium IPTV?',
        button: 'Jetzt starten →',
        subtitle: 'Setup in 5 Minuten'
      },
      bottom: {
        copyright: '© 2025 Deutsch-IPTV. Alle Rechte vorbehalten.',
        badge: 'Made with ❤️ in Germany'
      }
    },
    en: {
      description: 'German IPTV - Your reliable IPTV provider for Germany with 26,000+ channels, 190,000+ VOD. Buy IPTV and stream instantly on all devices.',
      quickLinks: {
        title: '⚡ Quick Links',
        links: [
          { text: 'IPTV Packages & Pricing', href: '/iptv-preise-angebote-deutschland' },
          { text: 'Installation Guide', href: '/installationsanleitung-iptv' },
          { text: 'Reseller Program', href: '/iptv-wiederverkaeufer' },
          { text: 'FAQ', href: '#faq' }
        ]
      },
      legal: {
        title: '📋 Legal',
        links: [
          { text: 'Terms of Service', href: '/servicebedingungen' },
          { text: 'Refund Policy', href: '/rueckerstattungsrichtlinie' },
          { text: 'Privacy Policy', href: '/datenschutzrichtlinie' },
          { text: 'DMCA', href: '/dmca' },
          { text: 'Imprint', href: '/impressum' }
        ]
      },
      support: {
        title: '💬 Support 24/7',
        whatsapp: 'WhatsApp Support',
        telegram: 'Telegram Support',
        response: '⚡ 5 Min Response',
        german: '🇩🇪 German Support'
      },
      trust: {
        customers: '12,847+ Active Users',
        uptime: '99.9% Uptime',
        setup: '5 Min Setup',
        guarantee: '30 Day Guarantee'
      },
      cta: {
        title: 'Ready for Premium IPTV?',
        button: 'Start now →',
        subtitle: '5 minute setup'
      },
      bottom: {
        copyright: '© 2025 German IPTV. All rights reserved.',
        badge: 'Made with ❤️ in Germany'
      }
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">{t.cta.title}</h3>
            <p className="text-gray-400 mb-6">{t.cta.subtitle}</p>
            <Link 
              href="/iptv-preise-angebote-deutschland"
              className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
  <div className="flex items-center gap-2">
    <span className="text-3xl font-black">
      <span className="bg-gradient-to-r from-red-600 to-yellow-500 text-transparent bg-clip-text">
        DEUTSCH
      </span>
    </span>
    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
      TV
    </span>
  </div>
</Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              {t.description}
            </p>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-yellow-400 font-bold text-lg">{t.trust.customers}</p>
                <p className="text-gray-500 text-xs">Zufriedene Kunden</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-green-400 font-bold text-lg">{t.trust.uptime}</p>
                <p className="text-gray-500 text-xs">Immer online</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-blue-400 font-bold text-lg">{t.trust.setup}</p>
                <p className="text-gray-500 text-xs">Schneller Start</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-purple-400 font-bold text-lg">{t.trust.guarantee}</p>
                <p className="text-gray-500 text-xs">Geld zurück</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              {t.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {t.quickLinks.links.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              {t.legal.title}
            </h4>
            <ul className="space-y-3">
              {t.legal.links.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              {t.support.title}
            </h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/212608677633"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
              >
                <span className="text-xl">💬</span>
                {t.support.whatsapp}
              </a>
              <a 
                href="https://t.me/deutschiptv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
              >
                <span className="text-xl">✈️</span>
                {t.support.telegram}
              </a>
              <p className="text-gray-400 text-sm">{t.support.response}</p>
              <p className="text-gray-400 text-sm">{t.support.german}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">{t.bottom.copyright}</p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t.bottom.badge}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}