import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function M3UPage({
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
              German IPTV - IPTV M3u Playlist Deutsch
            </h1>
            <p className="text-xl text-gray-300">
              Alles über M3U Playlists und wie Sie den besten German IPTV Anbieter wählen.
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist eine M3u?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ein M3u ist ein Link, der in Medien verwendet wird, um Streaming-Kanäle über IPTV anzusehen. Sie müssen ihn nicht herunterladen. Kopieren Sie ihn einfach und fügen Sie ihn in einen beliebigen App-Player ein, der IPTV unterstützt.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Von einem M3u können Sie auch die Xtream Codes erhalten, da dieser aus drei wichtigen Elementen besteht: dem Host (Serveradresse im HTTP-Format), dem Benutzernamen und dem Passwort.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">So wählen Sie den besten German IPTV Anbieter</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>Optimierte Inhalte für deutsche Zuschauer mit vielen Kategorien</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>24 Stunden kostenlose Testversion zur Qualitätsprüfung</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>IPTV mit EPG und stabiler Qualität</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>Garantie während der gesamten Abonnementlaufzeit</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>Server in Deutschland mit über 300 Hosts</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl mt-1">✓</span>
                  <p>Keine IP-Sperren - nutzen Sie das Angebot jederzeit und überall</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Schauen Sie sich unser IPTV Angebot an
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Buchen Sie das beste IPTV Abo für sich
              </p>
              <div className="text-center">
                <Link
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  Jetzt buchen →
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