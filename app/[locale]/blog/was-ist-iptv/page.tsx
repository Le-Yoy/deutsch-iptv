import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function WasIstIPTVPage({
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
              Was ist IPTV? Legal in Deutschland?
            </h1>
            <p className="text-xl text-gray-300">
              IPTV ist ein verwalteter Dienst, der über ein privates Netzwerk zuverlässiges Fernsehstreaming bietet. Erfahren Sie alles über IPTV.
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Was ist IPTV?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                IPTV ist ein verwalteter Dienst, der über ein privates Netzwerk zuverlässiges Fernsehstreaming bietet. Zu den Hauptmerkmalen gehören Live- und On-Demand-Inhalte sowie Multiscreen-Zugriff. Sie können auch Ihre Unterhaltungsaufstellung personalisieren.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Es kann auf einer Vielzahl von Geräten verwendet werden, einschließlich Smart-TVs. Es unterstützt auch Pause, Rückspulen und schnelle Vorspulen. Es verfügt über eine zeitversetzte TV-Funktion, mit der Sie Sendungen innerhalb eines bestimmten Zeitfensters wiederholen können.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Vorteile von IPTV für modernes Fernsehen</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                IPTV revolutioniert die Art und Weise, wie wir fernsehen, indem es Inhalte über Internetserver statt über Kabel- oder Satellitensysteme liefert.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <p className="text-gray-300">Unbegrenzter Zugriff auf Kanäle und Inhalte auf Abruf</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <p className="text-gray-300">Flexibilität und Komfort ohne umständliche Geräte</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <p className="text-gray-300">Kostengünstige Lösungen im Vergleich zu Kabelpaketen</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <p className="text-gray-300">Kompatibilität mit mehreren Geräten</p>
                </div>
              </div>
            </div>

            <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">IPTV in Deutschland legal oder illegal?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ja, IPTV ist in Deutschland legal, solange die Dienstanbieter im Rahmen der geltenden Gesetze agieren und über alle erforderlichen Sendelizenzen verfügen.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Es gibt verschiedene legale IPTV-Dienste im ganzen Land. Illegale IPTV-Dienste ohne Lizenzierung sind illegal und können schwerwiegende Folgen haben. Daher ist es wichtig, seriöse IPTV-Dienstanbieter auszuwählen.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Der beste IPTV-Dienst in Deutschland</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Deutschland bietet derzeit eine Fülle von IPTV-Diensten. deutsch-iptv.com könnte mit seiner großen Vielfalt an Inhaltsangeboten genau das ideale Benutzererlebnis bieten!
              </p>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Warum deutsch-iptv.com wählen?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Hochwertiger internationaler und lokaler Kanäle in HD</li>
                <li>• Keine Verzögerungen zwischen den Streams</li>
                <li>• Benutzerfreundlich und einfach zu bedienen</li>
                <li>• Flexibilität auf mehreren Plattformen</li>
                <li>• Zuverlässige Verbindung und hohe Streaming-Qualität</li>
                <li>• Schneller und hilfreicher Kundensupport</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Bereit für legales IPTV?
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Sicherer und zuverlässiger IPTV-Service in Deutschland
              </p>
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