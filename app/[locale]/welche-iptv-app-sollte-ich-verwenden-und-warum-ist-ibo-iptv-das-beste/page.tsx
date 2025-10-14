import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function IBOIPTVPage({
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
              Welche IPTV-App sollte ich verwenden? IBO IPTV
            </h1>
            <p className="text-xl text-gray-300">
              IBO IPTV ist der ultimative kostenlose IPTV-Player - der Game-Changer für Ihr Unterhaltungserlebnis!
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist IBO IPTV?</h2>
              <p className="text-gray-300 leading-relaxed">
                IBO IPTV ist ein leistungsstarker IPTV-Player, der ein nahtloses und unterbrechungsfreies Unterhaltungserlebnis bietet. Mit diesem Player bieten wir Ihnen eine All-in-One-Lösung für all Ihre Sehbedürfnisse, und das Beste daran? Er ist völlig KOSTENLOS mit unserem IPTV-Abonnement.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Kompatibilität mit allen Geräten</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl mb-2">📺</div>
                  <h3 className="text-lg font-bold text-white mb-1">Smart TVs</h3>
                  <p className="text-gray-400 text-sm">Android und andere Plattformen</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="text-lg font-bold text-white mb-1">Mobile</h3>
                  <p className="text-gray-400 text-sm">Android & iOS optimiert</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl mb-2">💻</div>
                  <h3 className="text-lg font-bold text-white mb-1">PC/Mac</h3>
                  <p className="text-gray-400 text-sm">Windows, Linux, macOS</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-3xl mb-2">🌐</div>
                  <h3 className="text-lg font-bold text-white mb-1">Browser</h3>
                  <p className="text-gray-400 text-sm">Ohne App-Installation</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Warum IBO IPTV?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">Hochwertiges Streaming</h3>
                    <p className="text-gray-300 text-sm">HD und 4K-Streaming für beste Bildqualität</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">Kein Puffern</h3>
                    <p className="text-gray-300 text-sm">Nahtlose Wiedergabe ohne Unterbrechungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">Globale Kanäle</h3>
                    <p className="text-gray-300 text-sm">Tausende Kanäle aus der ganzen Welt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <div>
                    <h3 className="text-white font-bold mb-1">Benutzerfreundlich</h3>
                    <p className="text-gray-300 text-sm">Intuitive Oberfläche für jeden</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Kostenlos mit unserem Abonnement</h2>
              <p className="text-gray-300 leading-relaxed">
                Das Beste daran? IBO IPTV ist komplett kostenlos mit Ihrem IPTV-Abonnement. Keine versteckten Gebühren, keine zusätzlichen Kosten. Melden Sie sich einfach für unseren IPTV-Service an, und Sie haben sofortigen Zugang zur App.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                IBO IPTV kostenlos erhalten
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Mit jedem IPTV-Abonnement enthalten
              </p>
              <div className="text-center">
                <Link
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  Jetzt starten →
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