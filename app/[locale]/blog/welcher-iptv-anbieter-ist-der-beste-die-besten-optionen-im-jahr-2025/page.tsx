import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function BesterAnbieterPage({
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
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Welcher IPTV Anbieter ist der beste? - 2025
            </h1>
            <p className="text-xl text-gray-300">
              In der heutigen Welt des digitalen Streamings wird IPTV immer populärer. Finden Sie den idealen Anbieter für Ihre Bedürfnisse.
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist IPTV?</h2>
              <p className="text-gray-300 leading-relaxed">
                IPTV steht für Internet Protocol Television und bezeichnet die Übertragung von Fernsehsignalen über das Internet anstelle des traditionellen Kabelfernsehens. IPTV bietet eine Vielzahl von Kanälen, einschließlich Sport, Filme, Serien und mehr.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Warum IPTV kaufen?</h2>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">•</span>
                  <p><strong className="text-white">Flexibilität:</strong> Fernsehen jederzeit und überall genießen</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">•</span>
                  <p><strong className="text-white">Vielfalt:</strong> Tausende von Kanälen und On-Demand-Inhalten</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">•</span>
                  <p><strong className="text-white">Kostengünstig:</strong> Günstiger als Kabel oder Satellit</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Top IPTV Anbieter</h2>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">Deutsch-IPTV.com</h3>
                  <p className="text-gray-300 mb-4">
                    Der führende Anbieter von IPTV-Diensten in Deutschland mit über 26.000 Kanälen.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Große Kanalvielfalt aus allen Bereichen</li>
                    <li>✓ Stabile Verbindung und hohe Streaming-Qualität</li>
                    <li>✓ Benutzerfreundliche Oberfläche</li>
                    <li>✓ Exklusive On-Demand-Inhalte</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Wie finde ich den besten Anbieter?</h2>
              <div className="space-y-3 text-gray-300">
                <p>• <strong className="text-white">Preis-Leistungs-Verhältnis:</strong> Gute Kanalvielfalt zu fairem Preis</p>
                <p>• <strong className="text-white">Qualität:</strong> Stabile Verbindung ohne Pufferzeiten</p>
                <p>• <strong className="text-white">Kundenservice:</strong> Guter Support bei Problemen</p>
                <p>• <strong className="text-white">Kompatibilität:</strong> Funktioniert auf allen Geräten</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Bereit für Premium IPTV?
              </h2>
              <div className="text-center">
                <Link
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  IPTV jetzt kaufen →
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