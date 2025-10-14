import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function IPTVDeutschlandPage({
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
              IPTV Deutschland: Top Anbieter für bestes Streaming 2025
            </h1>
            <p className="text-xl text-gray-300">
              Genießen Sie alle Lieblingssendungen und Live-Sportereignisse direkt auf Ihrem Fernseher, Smartphone oder Tablet - ohne teure Kabelverträge.
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist IPTV?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                IPTV ist die Abkürzung für „Internet Protocol Television&quot;, also Fernsehen über das Internet. Der Unterschied zum klassischen Fernsehen besteht darin, dass die Übertragung Ihrer Sendungen über die Internetverbindung erfolgt.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Das Interessanteste ist, dass Sie jederzeit und überall auf das Netzwerk zugreifen können. Bei IPTV können Sie das Programm so erstellen, dass Sie auf Abruf auf jeden beliebigen Kanal zugreifen können.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Wie funktioniert IPTV?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                IPTV funktioniert über eine Internetverbindung. Inhalte werden in kleinen Datenpaketen über das Modem gesendet, ähnlich dem Streaming von Videos auf YouTube oder Netflix.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Sie benötigen lediglich ein Gerät, das IPTV unterstützt - einen Smart TV, Laptop oder speziellen IPTV-Decoder. Nachdem Sie verbunden sind, haben Sie Zugriff auf eine Vielzahl von Kanälen und Inhalten auf Abruf.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ist IPTV in Deutschland legal?</h2>
              <p className="text-gray-300 leading-relaxed">
                Ja, IPTV ist in Deutschland legal, sofern Sie legale Anbieter verwenden. Wählen Sie einen IPTV-Anbieter von einem seriösen Akteur mit Lizenzen für die Inhalte. So stellen Sie sicher, dass Sie die Dienste rechtmäßig nutzen.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Vorteile von IPTV</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Flexibilität und Mobilität</h3>
                  <p className="text-gray-300 text-sm">
                    Mit IPTV sind Sie nicht an einen festen Ort gebunden. Schauen Sie auf Smartphone, Tablet oder Laptop - überall.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Verschiedene Inhalte</h3>
                  <p className="text-gray-300 text-sm">
                    Von internationalen Sendern bis zu spezialisierten Themenkanälen - eine gesamte Auswahl an Filmen, Serien, Nachrichten und mehr.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">Personalisiertes Erlebnis</h3>
                  <p className="text-gray-300 text-sm">
                    IPTV merkt sich Ihre Playlisten und macht Empfehlungen basierend auf Ihren Sehgewohnheiten.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Bereit für IPTV Deutschland?
              </h2>
              <div className="text-center">
                <Link
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
                >
                  Jetzt IPTV kaufen →
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