import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function IPTVAnbieterPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  return (
    <>
      <article className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <span className="inline-block bg-red-600/20 text-red-400 text-sm font-bold px-3 py-1 rounded-full mb-4">
              August 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              IPTV: Alle Anbieter, Tarife, Vorteile & Aktionen
            </h1>
            <p className="text-xl text-gray-300">
              IPTV hat sich zu einer der beliebtesten Optionen für Fernsehen in Deutschland entwickelt. Entdecken Sie die besten Anbieter, Tarife und Aktionen.
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist IPTV?</h2>
              <p className="text-gray-300 leading-relaxed">
                IPTV ist eine Technologie, die es ermöglicht, Fernsehsignale über das Internet zu empfangen. Anstatt klassische Satelliten- oder Kabelanschlüsse zu verwenden, streamt IPTV Inhalte über das Internetprotokoll. Eine stabile Internetverbindung ist alles, was Sie brauchen.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Die besten IPTV-Anbieter</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">MagentaTV</h3>
                  <p className="text-gray-300 mb-3">
                    Über 100 Sender, Netflix und Amazon Prime inklusive, Multi-Screen-Unterstützung.
                  </p>
                  <p className="text-white">
                    <strong>Tarife:</strong> Smart: 10€ | Premium: 20€
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">1&1 Digital-TV</h3>
                  <p className="text-gray-300 mb-3">
                    Über 80 Sender, flexible Paketwahl, kostengünstig für Einsteiger.
                  </p>
                  <p className="text-white">
                    <strong>Tarife:</strong> Basic: 7,99€ | Plus: 12,99€
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Zattoo</h3>
                  <p className="text-gray-300 mb-3">
                    Kostenlose Basisversion verfügbar, hohe Benutzerfreundlichkeit.
                  </p>
                  <p className="text-white">
                    <strong>Tarife:</strong> Free: 0€ | Premium: 9,99€
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Vorteile von IPTV</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl mb-2">📱</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Flexibilität</h3>
                  <p className="text-gray-300 text-sm">
                    Streamen Sie auf allen Geräten - TV, Smartphone, Tablet.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌍</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Vielfalt</h3>
                  <p className="text-gray-300 text-sm">
                    Tausende Kanäle aus der ganzen Welt.
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💰</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Günstig</h3>
                  <p className="text-gray-300 text-sm">
                    Oft günstiger als Kabel oder Satellit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Jetzt IPTV kaufen
              </h2>
              <p className="text-gray-300 text-center mb-6">
                26.000+ Kanäle, 190.000+ Filme & Serien
              </p>
              <div className="text-center">
                <Link
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  Pakete ansehen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer locale={locale} />
    </>
  );
}