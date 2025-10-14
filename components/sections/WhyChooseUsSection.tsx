'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface WhyChooseUsSectionProps {
  locale?: string;
}

export default function WhyChooseUsSection({ locale = 'de' }: WhyChooseUsSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [activeCustomers, setActiveCustomers] = useState(12847);

  useEffect(() => {
    setMounted(true);
    // Simulate active users counter
    const interval = setInterval(() => {
      setActiveCustomers(prev => prev + Math.floor(Math.random() * 10) - 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    de: {
      headline: 'Warum über 12.000+ Deutsche uns vertrauen',
      subheadline: 'Der führende IPTV Anbieter für deutsches Fernsehen - von Nutzern auf Reddit empfohlen',
      benefits: [
        {
          icon: '🏆',
          title: 'Reddit-Empfohlen',
          description: 'Platz #2 für "best IPTV Germany Reddit" - von echten Nutzern bestätigt',
          highlight: true
        },
        {
          icon: '⚡',
          title: 'Sofort-Aktivierung',
          description: 'IPTV kaufen und in 5 Minuten fernsehen - garantiert einfach',
          highlight: false
        },
        {
          icon: '🇩🇪',
          title: 'Deutscher Support',
          description: '24/7 Support auf Deutsch - wir sprechen Ihre Sprache',
          highlight: false
        },
        {
          icon: '📺',
          title: 'Überall schauen',
          description: 'Funktioniert auf allen Geräten - Deutsch IPTV ohne Grenzen',
          highlight: false
        },
        {
          icon: '✅',
          title: '30 Tage Garantie',
          description: 'Nicht zufrieden? Geld zurück - ohne Fragen',
          highlight: false
        },
        {
          icon: '🔒',
          title: 'Sicher & Legal',
          description: 'Zuverlässige IPTV Deutschland Lösung mit stabilem Service',
          highlight: false
        }
      ],
      stats: {
        customers: 'Aktive Nutzer',
        uptime: '99,9% Verfügbarkeit',
        support: '5 Min Support-Zeit',
        satisfaction: '98% Zufriedenheit'
      },
      cta: {
        primary: 'Jetzt IPTV kaufen',
        secondary: 'Mehr erfahren',
        trust: 'Keine Kreditkarte für Test erforderlich'
      }
    },
    en: {
      headline: 'Why 12,000+ Germans trust us',
      subheadline: 'The leading German IPTV provider - recommended by users on Reddit',
      benefits: [
        {
          icon: '🏆',
          title: 'Reddit-Recommended',
          description: '#2 for "best IPTV Germany Reddit" - verified by real users',
          highlight: true
        },
        {
          icon: '⚡',
          title: 'Instant Activation',
          description: 'Buy IPTV and watch in 5 minutes - guaranteed easy',
          highlight: false
        },
        {
          icon: '🇩🇪',
          title: 'German Support',
          description: '24/7 support in German - we speak your language',
          highlight: false
        },
        {
          icon: '📺',
          title: 'Watch Anywhere',
          description: 'Works on all devices - German IPTV without limits',
          highlight: false
        },
        {
          icon: '✅',
          title: '30 Day Guarantee',
          description: 'Not satisfied? Money back - no questions',
          highlight: false
        },
        {
          icon: '🔒',
          title: 'Safe & Legal',
          description: 'Reliable German IPTV solution with stable service',
          highlight: false
        }
      ],
      stats: {
        customers: 'Active Users',
        uptime: '99.9% Uptime',
        support: '5 Min Support Time',
        satisfaction: '98% Satisfaction'
      },
      cta: {
        primary: 'Buy IPTV Now',
        secondary: 'Learn More',
        trust: 'No credit card required for trial'
      }
    }
  };

  const t = content[locale as 'de' | 'en'];

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t.headline}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subheadline}
          </p>
        </header>

        {/* Live Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
              {activeCustomers.toLocaleString()}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">{t.stats.customers}</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-green-400">
              {t.stats.uptime}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {locale === 'de' ? 'Immer online' : 'Always online'}
            </div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-blue-400">
              {t.stats.support}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {locale === 'de' ? 'Schneller Support' : 'Fast support'}
            </div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">
              {t.stats.satisfaction}
            </div>
            <div className="text-xs md:text-sm text-gray-400 mt-1">
              {locale === 'de' ? 'Zufriedene Kunden' : 'Happy customers'}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {t.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                benefit.highlight
                  ? 'bg-gradient-to-br from-red-600/20 to-yellow-500/20 border-2 border-yellow-500/50'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {benefit.highlight && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    TOP
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-green-500/20">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <div className="text-white font-bold">
                  {locale === 'de' ? '30 Tage Geld-zurück-Garantie' : '30 Day Money Back Guarantee'}
                </div>
                <div className="text-xs text-gray-400">
                  {locale === 'de' ? 'Kein Risiko - Testen Sie uns' : 'No risk - Try us out'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔒</span>
              <div className="text-left">
                <div className="text-white font-bold">
                  {locale === 'de' ? 'Sichere Zahlung' : 'Secure Payment'}
                </div>
                <div className="text-xs text-gray-400">
                  {locale === 'de' ? 'SSL-verschlüsselt' : 'SSL encrypted'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <footer className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/iptv-preise-angebote-deutschland"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl text-lg shadow-2xl hover:scale-105 hover:shadow-red-500/25 transition-all duration-300"
            >
              {t.cta.primary}
            </Link>
            <Link
              href="/installationsanleitung-iptv"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              {t.cta.secondary}
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            {t.cta.trust}
          </p>
        </footer>
      </div>
    </section>
  );
}