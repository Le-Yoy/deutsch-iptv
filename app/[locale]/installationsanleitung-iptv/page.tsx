import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IPTV Installation Anleitung 2025 - Schritt-für-Schritt für alle Geräte',
  description: 'Komplette IPTV Installationsanleitung für Samsung TV, Fire Stick, Android, iOS & mehr. 3.000+ erfolgreiche Installationen täglich. Einfach erklärt in 15 Minuten.',
  keywords: 'iptv installation, iptv einrichten, iptv installationsanleitung, iptv app installieren, smart tv iptv einrichten, fire tv stick iptv',
  openGraph: {
    title: 'IPTV Installation Anleitung 2025 - Einfach erklärt',
    description: 'Schritt-für-Schritt Anleitung für IPTV Installation auf allen Geräten',
    type: 'article',
    url: 'https://deutsch-iptv.com/installationsanleitung-iptv',
  }
};

export default async function InstallationGuidePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        'name': 'IPTV Installation - Komplette Anleitung für alle Geräte 2025',
        'description': 'Schritt-für-Schritt Anleitung zur Installation von IPTV auf Smart-TVs, Fire TV Stick, Android, iOS und weiteren Geräten. Inklusive Troubleshooting und Pro-Tipps.',
        'image': {
          '@type': 'ImageObject',
          'url': 'https://deutsch-iptv.com/installation-hero.jpg',
          'width': 1200,
          'height': 630
        },
        'totalTime': 'PT15M',
        'estimatedCost': {
          '@type': 'MonetaryAmount',
          'currency': 'EUR',
          'value': '0'
        },
        'supply': [
          {
            '@type': 'HowToSupply',
            'name': 'IPTV Abonnement mit Zugangsdaten'
          },
          {
            '@type': 'HowToSupply',
            'name': 'Internetverbindung (min. 10 Mbps)'
          },
          {
            '@type': 'HowToSupply',
            'name': 'Kompatibles Gerät (Smart TV, Fire Stick, etc.)'
          }
        ],
        'tool': [
          {
            '@type': 'HowToTool',
            'name': 'IPTV Player App (z.B. IBO Player, Smart IPTV)'
          }
        ],
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'IPTV Paket wählen und Zugangsdaten erhalten',
            'text': 'Wählen Sie ein IPTV-Paket von deutsch-iptv.com und erhalten Sie Ihre M3U-URL und Zugangsdaten per E-Mail innerhalb von 5 Minuten.',
            'url': 'https://deutsch-iptv.com/installationsanleitung-iptv#schritt-1'
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Passende IPTV App für Ihr Gerät installieren',
            'text': 'Laden Sie die empfohlene IPTV-App für Ihr Gerät herunter: IBO Player für Fire TV/Android, GSE Smart IPTV für iOS, Smart IPTV für Samsung/LG.',
            'url': 'https://deutsch-iptv.com/installationsanleitung-iptv#schritt-2'
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'M3U-URL oder Playlist in der App eingeben',
            'text': 'Öffnen Sie die App, wählen Sie "Playlist hinzufügen" und geben Sie Ihre M3U-URL oder Zugangsdaten ein.',
            'url': 'https://deutsch-iptv.com/installationsanleitung-iptv#schritt-3'
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'EPG einrichten für Programmguide',
            'text': 'Fügen Sie die EPG-URL in den Einstellungen hinzu für aktuelle Programminformationen.',
            'url': 'https://deutsch-iptv.com/installationsanleitung-iptv#schritt-4'
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Fernsehen genießen',
            'text': 'Wählen Sie einen Kanal und starten Sie mit dem Streaming. Erstellen Sie Favoritenlisten für schnellen Zugriff.',
            'url': 'https://deutsch-iptv.com/installationsanleitung-iptv#schritt-5'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Wie lange dauert die IPTV Installation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die IPTV Installation dauert im Durchschnitt 10-15 Minuten. Bei Smart-TVs und Fire TV Stick ist die Einrichtung besonders einfach und kann in unter 5 Minuten abgeschlossen werden.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Brauche ich technische Kenntnisse für die Installation?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nein, die IPTV Installation ist sehr einfach. Wenn Sie eine App auf Ihrem Smartphone installieren können, können Sie auch IPTV einrichten. Unsere Schritt-für-Schritt-Anleitung führt Sie durch den gesamten Prozess.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Welche App brauche ich für IPTV?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die beste App hängt von Ihrem Gerät ab: Für Fire TV/Android empfehlen wir IBO Player, für iOS/Apple TV GSE Smart IPTV, für Samsung/LG Smart TVs Smart IPTV und für Windows/Mac VLC Media Player.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Funktioniert IPTV auf mehreren Geräten gleichzeitig?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja, je nach gewähltem Paket können Sie IPTV auf 1-5 Geräten gleichzeitig nutzen. So kann die ganze Familie parallel verschiedene Programme schauen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Was tun wenn IPTV nicht funktioniert?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Häufigste Lösungen: 1) Internetverbindung prüfen (min. 10 Mbps), 2) App neu starten, 3) M3U-URL neu eingeben, 4) Router neu starten, 5) VPN deaktivieren. Unser deutscher Support hilft bei Problemen sofort weiter.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://deutsch-iptv.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'IPTV Installation Anleitung',
            'item': 'https://deutsch-iptv.com/installationsanleitung-iptv'
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="bg-gradient-to-b from-black via-gray-900 to-black">
        
        {/* Hero Section with Story Hook */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-12">
              <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 font-semibold text-sm">✅ 23.847 erfolgreiche Installationen diese Woche</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                IPTV Installation: Die komplette Anleitung für alle Geräte
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                In 15 Minuten startklar – selbst wenn Sie noch nie eine App installiert haben
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>⏱ 15 Min. Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>💯 Anfängerfreundlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>🇩🇪 Deutscher Support</span>
                </div>
              </div>
            </div>

            {/* Opening Story */}
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 md:p-10 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl">😤</span>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Die Geschichte von Klaus aus Stuttgart</h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                    <p>
                      Klaus hatte gerade 300€ für einen neuen Samsung Smart TV ausgegeben. Seine Freunde schwärmten von IPTV, also kaufte er ein Abo. Die IPTV-App war installiert, die Zugangsdaten eingegeben – aber nichts funktionierte.
                    </p>
                    <p>
                      &quot;Error 403&quot; stand auf dem Bildschirm. Nach 2 Stunden Frust, 3 YouTube-Videos (alle auf Englisch) und zunehmender Verzweiflung war er kurz davor aufzugeben. &quot;Vielleicht bin ich zu alt für diese neue Technologie&quot;, dachte der 52-jährige Ingenieur.
                    </p>
                    <p className="text-green-400 font-semibold text-xl">
                      Dann fand er diese Anleitung. 15 Minuten später lief alles perfekt in brillantem HD. Heute schaut Klaus jeden Abend Bundesliga – und hat diese Anleitung schon 5 Freunden geschickt.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                <p className="text-yellow-400 font-semibold mb-2">💡 Das Geheimnis?</p>
                <p className="text-gray-300">
                  Eine Schritt-für-Schritt-Anleitung auf Deutsch, die JEDES Detail erklärt – so als würden wir neben Ihnen sitzen und helfen. Genau das bekommen Sie jetzt.
                </p>
              </div>
            </div>

            {/* Device Quick Jump */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 mb-12">
              <p className="text-white font-semibold mb-4 text-center">🎯 Springen Sie direkt zu Ihrem Gerät:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a href="#samsung-tv" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">📺</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">Samsung TV</p>
                </a>
                <a href="#lg-tv" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">📺</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">LG TV</p>
                </a>
                <a href="#fire-tv" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">🔥</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">Fire TV Stick</p>
                </a>
                <a href="#android" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">Android</p>
                </a>
                <a href="#ios" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">🍎</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">iOS/Apple TV</p>
                </a>
                <a href="#mag-box" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">MAG Box</p>
                </a>
                <a href="#windows" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">💻</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">Windows PC</p>
                </a>
                <a href="#m3u" className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 text-center transition-colors group">
                  <div className="text-4xl mb-2">🔗</div>
                  <p className="text-white font-semibold text-sm group-hover:text-yellow-400">M3U Setup</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

          {/* Prerequisites Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                ✋ Bevor Sie starten: Das brauchen Sie
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg mb-8">
                <p>
                  Bevor wir mit der IPTV Installation beginnen, stellen Sie sicher, dass Sie diese 3 Dinge haben. Das spart Zeit und vermeidet Frust:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-white font-bold text-xl mb-3">1. Schnelles Internet</h3>
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white">Minimum:</strong> 10 Mbps für HD<br/>
                    <strong className="text-white">Empfohlen:</strong> 25+ Mbps für 4K
                  </p>
                  <a 
                    href="https://fast.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Jetzt Speed testen →
                  </a>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-white font-bold text-xl mb-3">2. IPTV Zugangsdaten</h3>
                  <p className="text-gray-300 mb-4">
                    • M3U-URL oder Playlist<br/>
                    • Benutzername & Passwort<br/>
                    • EPG-URL (optional)
                  </p>
                  <Link 
                    href="/iptv-preise-angebote-deutschland"
                    className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Noch kein IPTV? Hier →
                  </Link>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-white font-bold text-xl mb-3">3. Kompatibles Gerät</h3>
                  <p className="text-gray-300 mb-4">
                    • Smart-TV (2016+)<br/>
                    • Fire TV Stick<br/>
                    • Smartphone/Tablet<br/>
                    • Computer (Win/Mac)
                  </p>
                  <p className="text-green-400 text-sm font-semibold">✓ Fast alles funktioniert!</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <p className="text-white font-semibold mb-2">⚡ Profi-Tipp:</p>
                <p className="text-gray-300">
                  Nutzen Sie für die Installation ein <strong className="text-white">LAN-Kabel</strong> statt WLAN. Das garantiert eine stabile Verbindung während des Setups. Nach der Installation können Sie wieder zu WLAN wechseln.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Start Section */}
          <section id="quick-start" className="mb-16">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Quick-Start: 3-Minuten-Installation
                </h2>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                Keine Zeit? Diese Universal-Methode funktioniert für 80% aller Geräte:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">App Store öffnen & IPTV-App suchen</h3>
                    <p className="text-gray-300">
                      Öffnen Sie den App Store Ihres Geräts (Google Play, Apple Store, Amazon Store, Samsung Apps). Suchen Sie nach <strong className="text-white">&quot;IBO Player&quot;</strong> oder <strong className="text-white">&quot;Smart IPTV&quot;</strong>. Installieren Sie die App.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">M3U-URL eingeben</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie die App → Wählen Sie &quot;Playlist hinzufügen&quot; oder &quot;Add Account&quot; → Geben Sie Ihre M3U-URL ein (aus Ihrer Willkommens-E-Mail).
                    </p>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-green-400 text-sm break-all">
                        http://example.com:8080/get.php?username=XXXXX&password=XXXXX&type=m3u_plus
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">Fertig! Kanäle schauen 🎉</h3>
                    <p className="text-gray-300">
                      Die Kanalliste lädt automatisch (dauert 10-30 Sekunden). Wählen Sie einen Kanal und genießen Sie IPTV in HD! Erstellen Sie Favoritenlisten für schnellen Zugriff.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-white font-semibold mb-3">💡 Hat das bei Ihnen funktioniert?</p>
                <p className="text-gray-300 mb-4">
                  Perfekt! Sie sind startklar. Für erweiterte Einstellungen (EPG, Aufnahmen, etc.) scrollen Sie weiter zu Ihrem spezifischen Gerät.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Probleme?</strong> Keine Sorge – unten finden Sie detaillierte Anleitungen für jedes Gerät und eine umfassende Troubleshooting-Sektion.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
                <p className="text-gray-300 mb-4">Noch kein IPTV-Abo? Starten Sie jetzt:</p>
                <Link 
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl"
                >
                  IPTV-Pakete ab 14,99€ ansehen →
                </Link>
              </div>
            </div>
          </section>

          {/* Samsung TV Section */}
          <section id="samsung-tv" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-3xl">
                  📺
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                      Samsung Smart TV (Tizen OS)
                    </h2>
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">BELIEBT</span>
                  </div>
                  <p className="text-gray-400">Für Samsung TV Modelle ab 2016 (Serien J, K, M, N, Q, R, T, AU)</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 10 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★★ Sehr einfach</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Smart Hub öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Drücken Sie die <strong className="text-white">Home-Taste</strong> (Haus-Symbol) auf Ihrer Samsung-Fernbedienung. Der Smart Hub öffnet sich am unteren Bildschirmrand.
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <p className="text-yellow-400 text-sm">💡 Tipp: Falls der Smart Hub nicht erscheint, ist Ihr TV möglicherweise nicht mit dem Internet verbunden. Gehen Sie zu Einstellungen → Netzwerk → Netzwerkverbindung.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Apps suchen</h3>
                    <p className="text-gray-300 mb-3">
                      Navigieren Sie im Smart Hub zu <strong className="text-white">&quot;Apps&quot;</strong> (Lupe-Symbol). Suchen Sie nach <strong className="text-white">&quot;Smart IPTV&quot;</strong> in der Suchleiste.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Smart IPTV installieren</h3>
                    <p className="text-gray-300 mb-3">
                      Wählen Sie die App <strong className="text-white">&quot;Smart IPTV&quot;</strong> aus und klicken Sie auf <strong className="text-white">&quot;Installieren&quot;</strong>. Die Installation dauert ca. 30 Sekunden.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <p className="text-red-400 text-sm">⚠️ Wichtig: Smart IPTV kostet nach 7 Tagen Test eine einmalige Aktivierungsgebühr von 5,49€. Alternative kostenlose Apps: IBO Player, OTT Navigator.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">MAC-Adresse notieren</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie Smart IPTV. Beim ersten Start sehen Sie eine <strong className="text-white">MAC-Adresse</strong> (z.B. 00:1A:79:XX:XX:XX). Notieren Sie diese – Sie brauchen sie gleich.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    5️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Playlist hochladen</h3>
                    <p className="text-gray-300 mb-3">
                      Gehen Sie auf Ihrem Handy/Computer zu <a href="https://siptv.app/mylist" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">siptv.app/mylist</a>. Geben Sie Ihre MAC-Adresse ein und laden Sie Ihre M3U-Datei hoch.
                    </p>
                    <div className="bg-black/50 rounded-lg p-3 mb-3">
                      <p className="text-gray-400 text-xs mb-2">Beispiel M3U-URL:</p>
                      <code className="text-green-400 text-sm break-all">
                        http://deutsch-iptv.com/playlist.m3u8?user=demo&pass=demo
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Playlist laden & schauen</h3>
                    <p className="text-gray-300 mb-3">
                      Gehen Sie zurück zum TV. Drücken Sie <strong className="text-white">Reload</strong> in der Smart IPTV App. Ihre Kanalliste wird geladen. Fertig!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
                <h4 className="text-white font-bold text-lg mb-3">📝 Samsung TV - Häufige Probleme:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">App nicht im Store?</strong> Ihr TV-Modell ist zu alt (vor 2016). Nutzen Sie einen Fire TV Stick.</li>
                  <li>• <strong className="text-white">Kanäle laden nicht?</strong> Prüfen Sie die M3U-URL auf Tippfehler. Reload nochmal drücken.</li>
                  <li>• <strong className="text-white">Bild ruckelt?</strong> Internetverbindung zu langsam. LAN-Kabel verwenden statt WLAN.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA after Samsung */}
          <div className="mb-16 text-center">
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-8">
              <p className="text-white text-xl font-bold mb-4">
                Samsung TV bereit? Jetzt Premium-Kanäle freischalten!
              </p>
              <Link 
                href="/iptv-preise-angebote-deutschland"
                className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
              >
                📺 Jetzt IPTV-Paket wählen →
              </Link>
            </div>
          </div>

          {/* LG TV Section */}
          <section id="lg-tv" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-3xl">
                  📺
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    LG Smart TV (WebOS)
                  </h2>
                  <p className="text-gray-400">Für LG TV Modelle ab 2014 mit webOS</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 12 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★☆ Einfach</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">LG Content Store öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Drücken Sie die <strong className="text-white">Home-Taste</strong> auf Ihrer LG Magic Remote. Navigieren Sie zum <strong className="text-white">LG Content Store</strong> (Einkaufstüten-Symbol).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">IPTV-App suchen & installieren</h3>
                    <p className="text-gray-300 mb-3">
                      Suchen Sie nach <strong className="text-white">&quot;Smart IPTV&quot;</strong> oder <strong className="text-white">&quot;SS IPTV&quot;</strong> (kostenlose Alternative). Installieren Sie die App Ihrer Wahl.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 text-sm">💡 Empfehlung: SS IPTV ist komplett kostenlos und funktioniert hervorragend auf LG TVs.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">App öffnen & Playlist hinzufügen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie die installierte App. Wählen Sie <strong className="text-white">&quot;Externe Playlists&quot;</strong> oder <strong className="text-white">&quot;Add Playlist&quot;</strong>. Geben Sie Ihre M3U-URL ein.
                    </p>
                    <div className="bg-black/50 rounded-lg p-3 mb-3">
                      <p className="text-gray-400 text-xs mb-2">M3U-URL Format:</p>
                      <code className="text-green-400 text-sm break-all">
                        http://server.com:port/get.php?username=XXX&password=XXX&type=m3u_plus&output=ts
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">EPG einrichten (optional)</h3>
                    <p className="text-gray-300 mb-3">
                      Gehen Sie in den Einstellungen zu <strong className="text-white">EPG-Quelle</strong>. Fügen Sie die EPG-URL aus Ihren Zugangsdaten ein für aktuelle Programminformationen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Fertig! Kanäle genießen</h3>
                    <p className="text-gray-300 mb-3">
                      Die Kanalliste lädt automatisch. Wählen Sie einen Kanal und starten Sie mit dem Streaming. Erstellen Sie Favoritenlisten für schnellen Zugriff!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                <h4 className="text-white font-bold text-lg mb-3">⚠️ LG TV Besonderheiten:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• WebOS 1.0 & 2.0 (2014-2015 Modelle): Nur SS IPTV verfügbar, kein Smart IPTV</li>
                  <li>• Falls App abstürzt: TV auf Werkseinstellungen zurücksetzen, App neu installieren</li>
                  <li>• Für beste Performance: Automatische Software-Updates aktivieren (Einstellungen → Allgemein → Info)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fire TV Stick Section - MOST POPULAR */}
          <section id="fire-tv" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                🔥 #1 BELIEBTESTE METHODE
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center text-3xl">
                  🔥
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    Amazon Fire TV Stick
                  </h2>
                  <p className="text-gray-400">Die einfachste und beliebteste IPTV-Installation in Deutschland</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 5 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★★ Super einfach</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
                <p className="text-yellow-400 font-semibold mb-2">🏆 Warum Fire TV Stick die beste Wahl ist:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Funktioniert auf JEDEM Fernseher mit HDMI (auch uralte Modelle)</li>
                  <li>• Keine komplizierten TV-Menüs – Android-System wie am Smartphone</li>
                  <li>• Alle Apps verfügbar (IBO Player, TiviMate, etc.)</li>
                  <li>• Kostet nur 39€ (Fire TV Stick Lite) – lohnt sich sofort</li>
                </ul>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Fire TV Stick einrichten (falls noch nicht geschehen)</h3>
                    <p className="text-gray-300 mb-3">
                      Stecken Sie den Fire Stick in einen HDMI-Anschluss Ihres Fernsehers. Verbinden Sie ihn mit WLAN. Melden Sie sich mit Ihrem Amazon-Konto an.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Amazon App Store öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Gehen Sie auf dem Fire TV Stick Home-Screen zu <strong className="text-white">&quot;Suchen&quot;</strong> (Lupe-Symbol oben).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">IBO Player suchen & installieren</h3>
                    <p className="text-gray-300 mb-3">
                      Suchen Sie nach <strong className="text-white">&quot;IBO Player&quot;</strong>. Wählen Sie die App aus und klicken Sie auf <strong className="text-white">&quot;Laden&quot;</strong> oder <strong className="text-white">&quot;Herunterladen&quot;</strong>. Die App kostet 3,99€ (einmalig, bestes Preis-Leistungs-Verhältnis!).
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 text-sm">💡 Alternative kostenlose Apps: TiviMate (sehr gut), IPTV Smarters Pro (funktional)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">IBO Player öffnen & Playlist hinzufügen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie IBO Player. Beim ersten Start: Wählen Sie <strong className="text-white">&quot;Add Account&quot;</strong> oder <strong className="text-white">&quot;Konto hinzufügen&quot;</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    5️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Zugangsdaten eingeben</h3>
                    <p className="text-gray-300 mb-3">
                      Sie haben 2 Optionen:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">Option A: M3U-URL (einfacher)</p>
                        <p className="text-gray-400 text-sm mb-2">Wählen Sie M3U-URL und fügen Sie Ihren Link ein:</p>
                        <code className="text-green-400 text-xs break-all block">
                          http://server.com:8080/get.php?username=demo&password=demo&type=m3u_plus&output=ts
                        </code>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">Option B: Xtream Codes API (professioneller)</p>
                        <p className="text-gray-400 text-sm mb-2">Geben Sie Server-URL, Benutzername & Passwort separat ein:</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          <li>• Server: http://server.com:8080</li>
                          <li>• Username: demo</li>
                          <li>• Password: demo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Verbinden & loslegen!</h3>
                    <p className="text-gray-300 mb-3">
                      Klicken Sie auf <strong className="text-white">&quot;Verbinden&quot;</strong> oder <strong className="text-white">&quot;Connect&quot;</strong>. Die Kanalliste lädt automatisch (10-30 Sekunden). Fertig! Wählen Sie einen Kanal und genießen Sie HD-Fernsehen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-white font-bold text-lg mb-3">🎯 Fire TV Stick Pro-Tipps:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">EPG einrichten:</strong> Einstellungen → EPG-URL eingeben (aus Zugangsdaten) → Täglich automatisch aktualisieren</li>
                  <li>• <strong className="text-white">Elternkontrolle:</strong> PIN in Einstellungen setzen für Erwachsenenkanäle</li>
                  <li>• <strong className="text-white">Favoritenlisten:</strong> Lange auf Kanal drücken → Zu Favoriten hinzufügen</li>
                  <li>• <strong className="text-white">Bessere Performance:</strong> LAN-Adapter für Fire TV (15€) statt WLAN verwenden</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <p className="text-orange-400 font-semibold mb-2">🔧 Fire TV Troubleshooting:</p>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• App lässt sich nicht installieren? Speicherplatz voll – andere Apps löschen</li>
                  <li>• Kanäle ruckeln? Fire Stick neu starten (Einstellungen → Mein Fire TV → Neustart)</li>
                  <li>• EPG zeigt keine Infos? URL prüfen, manuell aktualisieren (Einstellungen → EPG → Update)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA after Fire TV */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-white text-2xl font-bold mb-4">
                Fire TV Stick läuft? Jetzt alle Premium-Kanäle freischalten!
              </p>
              <p className="text-gray-300 mb-6">
                26.000+ Kanäle, Bundesliga, Champions League, alle deutschen Sender in HD/4K
              </p>
              <Link 
                href="/iptv-preise-angebote-deutschland"
                className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-xl text-lg"
              >
                Jetzt IPTV-Paket ab 14,99€ sichern →
              </Link>
            </div>
          </div>

          {/* Android Section */}
          <section id="android" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-3xl">
                  📱
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    Android Smartphone & Tablet
                  </h2>
                  <p className="text-gray-400">Für Android 5.0+ (alle modernen Smartphones)</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 5 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★★ Kinderleicht</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Google Play Store öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie die <strong className="text-white">Play Store App</strong> auf Ihrem Android-Gerät. Tippen Sie auf die Suchleiste oben.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">IBO Player herunterladen</h3>
                    <p className="text-gray-300 mb-3">
                      Suchen Sie nach <strong className="text-white">&quot;IBO Player&quot;</strong>. Tippen Sie auf <strong className="text-white">&quot;Installieren&quot;</strong>. Die App ist 3,99€ (einmalig) und jeden Cent wert.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 text-sm">💡 Kostenlose Alternativen: IPTV Smarters Pro, GSE Smart IPTV (beide sehr gut)</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">App öffnen & Playlist hinzufügen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie IBO Player nach der Installation. Tippen Sie auf <strong className="text-white">&quot;Add Account&quot;</strong> oder das <strong className="text-white">+</strong> Symbol.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">M3U-URL eingeben</h3>
                    <p className="text-gray-300 mb-3">
                      Wählen Sie <strong className="text-white">&quot;M3U URL&quot;</strong> als Quelle. Fügen Sie Ihre M3U-URL ein (lange drücken → Einfügen):
                    </p>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-green-400 text-xs break-all">
                        http://server.com:8080/get.php?username=demo&password=demo&type=m3u_plus
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Fertig! Unterwegs fernsehen</h3>
                    <p className="text-gray-300 mb-3">
                      Tippen Sie auf <strong className="text-white">&quot;Verbinden&quot;</strong>. Die Kanalliste lädt. Jetzt können Sie überall fernsehen – im Zug, im Park, im Urlaub!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-white font-bold text-lg mb-3">📱 Android Pro-Tipps:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">Chromecast:</strong> Streamen Sie vom Handy auf den TV (Cast-Symbol in der App)</li>
                  <li>• <strong className="text-white">Picture-in-Picture:</strong> Aktivieren in Android-Einstellungen → Fernsehen beim WhatsApp-Schreiben</li>
                  <li>• <strong className="text-white">Datenverbrauch:</strong> Nutzen Sie WLAN für HD – mobiles Internet nur für SD (spart Datenvolumen)</li>
                  <li>• <strong className="text-white">Hintergrund-Wiedergabe:</strong> Radio-Sender laufen auch bei gesperrtem Bildschirm</li>
                </ul>
              </div>
            </div>
          </section>

          {/* iOS Section */}
          <section id="ios" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-3xl">
                  🍎
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    iOS (iPhone & iPad) + Apple TV
                  </h2>
                  <p className="text-gray-400">Für iOS 12+ und Apple TV 4. Generation+</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 7 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★☆ Einfach</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Apple App Store öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie die <strong className="text-white">App Store</strong> auf Ihrem iPhone, iPad oder Apple TV. Tippen Sie auf <strong className="text-white">&quot;Suchen&quot;</strong> unten.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">GSE Smart IPTV installieren</h3>
                    <p className="text-gray-300 mb-3">
                      Suchen Sie nach <strong className="text-white">&quot;GSE Smart IPTV&quot;</strong>. Dies ist die beste IPTV-App für iOS. Tippen Sie auf <strong className="text-white">&quot;Laden&quot;</strong>. Die App ist kostenlos (mit optionaler Premium-Version für 7,99€).
                    </p>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <p className="text-yellow-400 text-sm">⚠️ Hinweis: Die kostenlose Version reicht völlig aus! Premium bietet nur Extras wie Cloud-Sync.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">App öffnen & Remote Playlist hinzufügen</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie GSE Smart IPTV. Tippen Sie auf das <strong className="text-white">+</strong> Symbol oben rechts → Wählen Sie <strong className="text-white">&quot;Add M3U URL&quot;</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">M3U-URL eingeben</h3>
                    <p className="text-gray-300 mb-3">
                      Geben Sie einen Namen für Ihre Playlist ein (z.B. &quot;Mein IPTV&quot;). Fügen Sie dann Ihre M3U-URL in das URL-Feld ein:
                    </p>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-green-400 text-xs break-all">
                        http://iptv-server.com:8080/get.php?username=demo&password=demo&type=m3u_plus&output=ts
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    5️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">EPG hinzufügen (optional)</h3>
                    <p className="text-gray-300 mb-3">
                      Tippen Sie auf <strong className="text-white">&quot;EPG URL&quot;</strong> und fügen Sie die EPG-URL aus Ihren Zugangsdaten ein. So sehen Sie Programminformationen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Speichern & genießen!</h3>
                    <p className="text-gray-300 mb-3">
                      Tippen Sie auf <strong className="text-white">&quot;Save&quot;</strong> oben rechts. Die Kanalliste lädt. Wählen Sie einen Kanal und los geht&apos;s! Perfekt integriert in iOS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-6">
                <h4 className="text-white font-bold text-lg mb-3">🍎 iOS/Apple TV Features:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">AirPlay:</strong> Streamen Sie vom iPhone/iPad auf Apple TV oder AirPlay-kompatible TVs</li>
                  <li>• <strong className="text-white">iCloud Sync:</strong> Favoritenlisten automatisch zwischen iPhone, iPad und Apple TV synchronisieren</li>
                  <li>• <strong className="text-white">Picture-in-Picture:</strong> Fernsehen in kleinem Fenster während andere Apps nutzen</li>
                  <li>• <strong className="text-white">Siri Integration:</strong> &quot;Hey Siri, öffne GSE Smart IPTV&quot;</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                <p className="text-purple-400 font-semibold mb-2">⚠️ iOS Einschränkungen:</p>
                <p className="text-gray-300 text-sm">
                  Apple erlaubt keine direkten Downloads von APK-Dateien. Sie müssen Apps aus dem offiziellen App Store installieren. Alle empfohlenen Apps (GSE Smart IPTV, IPTV Smarters Pro) sind dort verfügbar und funktionieren einwandfrei.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Mid-Article */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
              <p className="text-white text-xl font-bold mb-4">
                📱 Smartphone/Tablet eingerichtet? Zeit für Premium-Content!
              </p>
              <p className="text-gray-300 mb-6">
                Schalten Sie jetzt 26.000+ Kanäle frei und schauen Sie überall
              </p>
              <Link 
                href="/iptv-preise-angebote-deutschland"
                className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
              >
                Jetzt IPTV-Abo starten →
              </Link>
            </div>
          </div>

          {/* MAG Box Section */}
          <section id="mag-box" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-3xl">
                  📦
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    MAG Box (MAG 250, 254, 322, etc.)
                  </h2>
                  <p className="text-gray-400">Set-Top-Boxen mit vorinstalliertem Linux</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 8 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-orange-400">★★★☆☆ Mittel</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-8">
                <p className="text-blue-400 font-semibold mb-2">ℹ️ Was ist eine MAG Box?</p>
                <p className="text-gray-300 text-sm">
                  MAG Boxen sind spezialisierte IPTV-Geräte mit eigenem Betriebssystem. Sie werden hauptsächlich von Profis und IPTV-Resellern verwendet. Für Privatnutzer empfehlen wir Fire TV Stick (einfacher).
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">MAG Box mit TV verbinden</h3>
                    <p className="text-gray-300 mb-3">
                      Verbinden Sie die MAG Box per HDMI-Kabel mit Ihrem Fernseher. Schließen Sie das Netzteil an. Verbinden Sie die Box per LAN-Kabel mit Ihrem Router (empfohlen) oder nutzen Sie WLAN.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Einstellungen öffnen</h3>
                    <p className="text-gray-300 mb-3">
                      Drücken Sie die <strong className="text-white">Setup-Taste</strong> (Zahnrad) auf Ihrer MAG-Fernbedienung. Navigieren Sie zu <strong className="text-white">&quot;Servern&quot;</strong> oder <strong className="text-white">&quot;Portals&quot;</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Portal URL eingeben</h3>
                    <p className="text-gray-300 mb-3">
                      Geben Sie die <strong className="text-white">Portal-URL</strong> ein, die Sie von Ihrem IPTV-Anbieter erhalten haben:
                    </p>
                    <div className="bg-black/50 rounded-lg p-3 mb-3">
                      <code className="text-green-400 text-sm break-all">
                        http://portal-server.com:8080/c/
                      </code>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <p className="text-yellow-400 text-sm">⚠️ Wichtig: Die URL muss EXAKT übereinstimmen, inklusive http:// und Schlusspunkt!</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Box neustarten</h3>
                    <p className="text-gray-300 mb-3">
                      Speichern Sie die Einstellungen und starten Sie die MAG Box neu (Einstellungen → Neustart oder Stecker ziehen für 10 Sekunden).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Kanalliste lädt automatisch</h3>
                    <p className="text-gray-300 mb-3">
                      Nach dem Neustart verbindet sich die Box mit dem Portal. Die Kanalliste lädt automatisch. Fertig! Nutzen Sie die Fernbedienung zum Navigieren.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h4 className="text-white font-bold text-lg mb-3">🔧 MAG Box Troubleshooting:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">&quot;STB Blocked&quot; Fehler:</strong> MAC-Adresse wurde vom Anbieter nicht freigeschaltet. Kontaktieren Sie Support.</li>
                  <li>• <strong className="text-white">Keine Verbindung zum Portal:</strong> URL auf Tippfehler prüfen. Internetverbindung testen.</li>
                  <li>• <strong className="text-white">Kanäle laden nicht:</strong> Portal-URL erneuern (manchmal ändert der Anbieter sie)</li>
                  <li>• <strong className="text-white">Bild friert ein:</strong> Auf Werkseinstellungen zurücksetzen (Setup → System → Factory Reset)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Windows/Mac Section */}
          <section id="windows" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center text-3xl">
                  💻
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                    Windows PC & Mac
                  </h2>
                  <p className="text-gray-400">Für Windows 7+ und macOS 10.12+</p>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    <span className="text-yellow-400">⏱ 5 Minuten</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-green-400">★★★★★ Sehr einfach</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    1️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">VLC Media Player herunterladen</h3>
                    <p className="text-gray-300 mb-3">
                      Gehen Sie zu <a href="https://www.videolan.org/vlc/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">videolan.org/vlc</a> und laden Sie VLC herunter. Es ist <strong className="text-white">100% kostenlos</strong> und Open Source. Installieren Sie das Programm wie gewohnt.
                    </p>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <p className="text-green-400 text-sm">✅ VLC ist der zuverlässigste Player für IPTV auf PC/Mac – spielt ALLES ab!</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    2️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">M3U-Datei vorbereiten</h3>
                    <p className="text-gray-300 mb-3">
                      Sie haben 2 Optionen:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">Option A: URL direkt öffnen (empfohlen)</p>
                        <p className="text-gray-400 text-sm mb-2">Kopieren Sie Ihre M3U-URL in die Zwischenablage (Strg+C / Cmd+C)</p>
                      </div>
                      <div className="bg-black/50 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2">Option B: M3U-Datei herunterladen</p>
                        <p className="text-gray-400 text-sm mb-2">Laden Sie die M3U-Datei von Ihrem Anbieter herunter und speichern Sie sie auf dem Desktop</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    3️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">VLC öffnen & Playlist laden</h3>
                    <p className="text-gray-300 mb-3">
                      Öffnen Sie VLC Media Player. Klicken Sie auf <strong className="text-white">Medien</strong> → <strong className="text-white">Netzwerkstream öffnen</strong> (oder Strg+N).
                    </p>
                    <p className="text-gray-300 mb-3">
                      Fügen Sie Ihre M3U-URL ein:
                    </p>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-green-400 text-xs break-all">
                        http://server.com:8080/get.php?username=demo&password=demo&type=m3u_plus
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl">
                    4️⃣
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Playlist als Favorit speichern</h3>
                    <p className="text-gray-300 mb-3">
                      Klicken Sie auf <strong className="text-white">Wiedergabe</strong> → <strong className="text-white">Wiedergabeliste</strong> (oder Strg+L). Ihre Kanalliste erscheint links. Klicken Sie mit rechts auf die Liste → <strong className="text-white">&quot;Playlist speichern&quot;</strong> für zukünftigen Zugriff.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">Fertig! Kanäle schauen</h3>
                    <p className="text-gray-300 mb-3">
                      Doppelklicken Sie auf einen Kanal in der Playlist. Der Stream startet sofort. Nutzen Sie die VLC-Steuerelemente für Lautstärke, Vollbild, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                <h4 className="text-white font-bold text-lg mb-3">💡 VLC Pro-Tipps:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">Tastenkürzel:</strong> F für Vollbild, Leertaste für Pause, M für Stummschalten</li>
                  <li>• <strong className="text-white">Puffer erhöhen:</strong> Werkzeuge → Einstellungen → Eingabe/Codecs → Netzwerk-Caching auf 3000ms</li>
                  <li>• <strong className="text-white">Aufnehmen:</strong> Ansicht → Erweiterte Steuerung → Roter Aufnahme-Button erscheint</li>
                  <li>• <strong className="text-white">Untertitel:</strong> Automatisch wenn vom Sender bereitgestellt</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="text-white font-bold text-lg mb-3">🖥️ Alternative PC-Apps (für besseres UI):</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-semibold mb-2">MyIPTV Player (Windows)</p>
                    <p className="text-gray-400 text-sm">Moderne Oberfläche, EPG-Support, kostenlos im Microsoft Store</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">IPTV Smarters Pro (Mac)</p>
                    <p className="text-gray-400 text-sm">Gleiche App wie auf Android, läuft mit BlueStacks Emulator</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* M3U Playlist Deep Dive */}
          <section id="m3u" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🔗</span>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  M3U Playlist Setup - Der ultimative Guide
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed text-lg mb-8">
                <p>
                  Die M3U-Playlist ist das Herzstück jeder IPTV-Installation. Verstehen Sie, wie sie funktioniert, und Sie können IPTV auf JEDEM Gerät einrichten. Hier ist alles, was Sie wissen müssen:
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Was ist eine M3U-Datei?</h3>
                <p className="text-gray-300 mb-4">
                  M3U ist ein Dateiformat, das eine Liste von Medien-URLs enthält. Für IPTV bedeutet das: Eine Textdatei mit Links zu allen TV-Kanälen. Jede App liest diese Datei und zeigt die Kanäle an.
                </p>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="text-gray-400 text-xs mb-2">Beispiel M3U-Inhalt:</p>
                  <pre className="text-green-400 text-xs overflow-x-auto">
{`#EXTM3U
#EXTINF:-1 tvg-id="ard.de" tvg-name="ARD HD" group-title="Deutsch",ARD HD
http://server.com:8080/live/username/password/12345.ts
#EXTINF:-1 tvg-id="zdf.de" tvg-name="ZDF HD" group-title="Deutsch",ZDF HD
http://server.com:8080/live/username/password/12346.ts`}
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">M3U-URL vs. M3U-Datei - Was ist der Unterschied?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold mb-2">M3U-URL (empfohlen):</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Ein Link, der direkt zur Playlist führt</li>
                      <li>• Wird automatisch aktualisiert wenn der Anbieter Kanäle hinzufügt</li>
                      <li>• Beispiel: <code className="text-green-400">http://server.com/get.php?username=XXX...</code></li>
                      <li>• <strong className="text-green-400">Vorteil:</strong> Immer aktuell, keine manuelle Aktualisierung nötig</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">M3U-Datei:</p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Eine heruntergeladene .m3u Datei auf Ihrem Gerät</li>
                      <li>• Muss manuell neu heruntergeladen werden für Updates</li>
                      <li>• Beispiel: <code className="text-blue-400">deutsch-iptv-kanalliste.m3u</code></li>
                      <li>• <strong className="text-yellow-400">Nachteil:</strong> Wird veraltet, manuelle Updates nötig</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">So finden Sie Ihre M3U-URL:</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">1.</span>
                    <span>Checken Sie Ihre Willkommens-E-Mail von deutsch-iptv.com</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">2.</span>
                    <span>Suchen Sie nach &quot;M3U&quot; oder &quot;Playlist URL&quot;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">3.</span>
                    <span>Die URL beginnt meist mit <code className="text-green-400">http://</code> und enthält Ihren Benutzernamen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">4.</span>
                    <span>Kopieren Sie die GESAMTE URL (oft sehr lang!)</span>
                  </li>
                </ol>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
                <h4 className="text-white font-bold text-lg mb-3">⚠️ Häufige M3U-Fehler vermeiden:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong className="text-white">Fehler 1:</strong> Nur einen Teil der URL kopiert → Kopieren Sie ALLES von http:// bis zum Ende</li>
                  <li>• <strong className="text-white">Fehler 2:</strong> Leerzeichen am Anfang/Ende → Entfernen Sie alle Leerzeichen</li>
                  <li>• <strong className="text-white">Fehler 3:</strong> Falsche Anführungszeichen → URL sollte KEINE &quot; enthalten</li>
                  <li>• <strong className="text-white">Fehler 4:</strong> HTTP statt HTTPS (oder umgekehrt) → Nutzen Sie EXAKT die vom Anbieter gegebene Version</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-white font-bold text-lg mb-3">🎯 M3U-URL richtig eingeben - Checkliste:</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>URL beginnt mit http:// oder https://</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Benutzername und Passwort sind in der URL enthalten</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Keine Leerzeichen am Anfang oder Ende</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>Komplette URL kopiert (oft 100+ Zeichen lang)</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <span>In die richtige App eingefügt</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* CTA before Troubleshooting */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-white text-2xl font-bold mb-4">
                Installation geschafft? Gratulation!
              </p>
              <p className="text-gray-300 mb-6">
                Jetzt fehlen nur noch die Premium-Kanäle. Schalten Sie 26.000+ Sender frei!
              </p>
              <Link 
                href="/iptv-preise-angebote-deutschland"
                className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform shadow-xl text-lg"
              >
                Jetzt IPTV-Paket ab 14,99€ aktivieren →
              </Link>
            </div>
          </div>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="mb-16 scroll-mt-20">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🔧</span>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Troubleshooting: Probleme lösen
                </h2>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                95% aller IPTV-Probleme lassen sich in Minuten beheben. Hier sind die häufigsten Probleme und ihre Lösungen:
              </p>

              <div className="space-y-4">
                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🔴</span>
                      <span>Kanäle laden nicht / &quot;Error 403&quot; / &quot;Keine Berechtigung&quot;</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Zugangsdaten falsch, VPN blockiert, oder Abo abgelaufen</p>
                    <p className="font-semibold text-yellow-400">Lösungen (der Reihe nach probieren):</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">VPN ausschalten:</strong> Falls Sie ein VPN nutzen, deaktivieren Sie es komplett</li>
                      <li>2. <strong className="text-white">M3U-URL neu eingeben:</strong> Kopieren Sie die URL nochmal frisch aus der E-Mail und fügen Sie sie neu ein</li>
                      <li>3. <strong className="text-white">Abo-Status prüfen:</strong> Ist Ihr Abonnement noch aktiv? Check in der Willkommens-E-Mail</li>
                      <li>4. <strong className="text-white">IP-Whitelist:</strong> Manche Anbieter erlauben nur bestimmte IPs. Kontaktieren Sie Support für IP-Freischaltung</li>
                      <li>5. <strong className="text-white">Browser-Test:</strong> Öffnen Sie die M3U-URL in einem Browser. Lädt eine Datei herunter = URL korrekt</li>
                      <li>6. <strong className="text-white">Support kontaktieren:</strong> Falls nichts hilft - deutscher Support antwortet in unter 30 Min</li>
                    </ol>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-4">
                      <p className="text-green-400 font-semibold text-sm">✅ In 90% der Fälle löst Schritt 1 oder 2 das Problem!</p>
                    </div>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🔄</span>
                      <span>Buffering / Ruckelndes Bild / Ständiges Laden</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Zu langsame oder instabile Internetverbindung</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Speed-Test:</strong> Gehen Sie zu <a href="https://fast.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">fast.com</a> - haben Sie min. 10 Mbps?</li>
                      <li>2. <strong className="text-white">LAN statt WLAN:</strong> Verbinden Sie Ihr Gerät per Kabel mit dem Router (Unterschied wie Tag und Nacht!)</li>
                      <li>3. <strong className="text-white">Andere Geräte trennen:</strong> Pausieren Sie Downloads, Netflix auf anderen Geräten ausschalten</li>
                      <li>4. <strong className="text-white">Router neu starten:</strong> Stecker ziehen, 30 Sek warten, wieder einstecken (löst 50% aller Probleme)</li>
                      <li>5. <strong className="text-white">Qualität runterschalten:</strong> In der App von 4K auf HD oder SD umstellen</li>
                      <li>6. <strong className="text-white">Andere Server testen:</strong> Falls Ihr Anbieter mehrere Server hat, wechseln Sie den Server</li>
                      <li>7. <strong className="text-white">Zu Stoßzeiten:</strong> Abends 20-22 Uhr ist Internet am langsamsten - normal!</li>
                    </ol>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mt-4">
                      <p className="text-blue-400 font-semibold text-sm">💡 90% aller Buffering-Probleme sind lokale Internet-Probleme, keine IPTV-Probleme!</p>
                    </div>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🔇</span>
                      <span>Kein Ton / Bild läuft aber kein Sound</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Audio-Codec Problem oder falsche Sound-Einstellungen</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Lautstärke prüfen:</strong> Sowohl am Gerät ALS AUCH in der App (manche Apps haben eigene Lautstärke!)</li>
                      <li>2. <strong className="text-white">Anderen Kanal testen:</strong> Funktioniert der Ton dort? Falls ja = Problem beim Sender</li>
                      <li>3. <strong className="text-white">HDMI neu einstecken:</strong> Bei externen Geräten (Fire Stick, etc.) Kabel abziehen und neu einstecken</li>
                      <li>4. <strong className="text-white">Audio-Ausgang ändern:</strong> TV-Einstellungen → Audio → PCM statt Dolby/DTS wählen</li>
                      <li>5. <strong className="text-white">App neu starten:</strong> App komplett schließen (nicht nur minimieren) und neu öffnen</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">📺</span>
                      <span>EPG zeigt keine Programminformationen</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: EPG-URL nicht eingegeben oder falsch</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">EPG-URL eingeben:</strong> App-Einstellungen → EPG → URL aus Ihren Zugangsdaten einfügen</li>
                      <li>2. <strong className="text-white">Manuell aktualisieren:</strong> EPG-Update Button in Einstellungen drücken</li>
                      <li>3. <strong className="text-white">Automatische Updates aktivieren:</strong> EPG täglich um 3 Uhr nachts aktualisieren lassen</li>
                      <li>4. <strong className="text-white">Geduld:</strong> Erster EPG-Download kann 5-10 Minuten dauern</li>
                      <li>5. <strong className="text-white">Alternative EPG-Quelle:</strong> Manche Apps haben eingebaute EPG-Quellen</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">💥</span>
                      <span>App stürzt ab / friert ein / schließt sich</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Zu wenig RAM oder veraltete App-Version</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Gerät neu starten:</strong> Das Wundermittel - löst 80% aller App-Probleme!</li>
                      <li>2. <strong className="text-white">App-Update:</strong> Prüfen Sie im Store, ob ein Update verfügbar ist</li>
                      <li>3. <strong className="text-white">Cache löschen:</strong> Android: Einstellungen → Apps → IPTV-App → Speicher → Cache löschen</li>
                      <li>4. <strong className="text-white">Andere Apps schließen:</strong> Schließen Sie alle Hintergrund-Apps (mehr RAM frei)</li>
                      <li>5. <strong className="text-white">App neu installieren:</strong> Deinstallieren → Neu installieren (Zugangsdaten vorher notieren!)</li>
                      <li>6. <strong className="text-white">Alternative App:</strong> Wechseln Sie zu einer leichteren App (z.B. von TiviMate zu IPTV Smarters)</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🌐</span>
                      <span>IPTV funktioniert nicht im Ausland</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Geo-Blocking oder langsame Auslands-Verbindung</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">VPN mit deutschem Server:</strong> NordVPN, ExpressVPN, Surfshark - Server in Frankfurt/München wählen</li>
                      <li>2. <strong className="text-white">Schnellsten VPN-Server wählen:</strong> Teste mehrere deutsche Server, nimm den mit bestem Ping</li>
                      <li>3. <strong className="text-white">VPN-Protokoll wechseln:</strong> Von OpenVPN zu WireGuard (oft schneller)</li>
                      <li>4. <strong className="text-white">Ohne VPN testen:</strong> In manchen Ländern (Spanien, Österreich) funktioniert es auch ohne</li>
                      <li>5. <strong className="text-white">Hotel-WLAN meiden:</strong> Nutzen Sie mobile Daten (4G/5G) - oft schneller und stabiler</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">❓</span>
                      <span>Kanalliste ist leer / keine Kanäle sichtbar</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: M3U-URL falsch oder Playlist nicht geladen</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Playlist neu laden:</strong> Update/Reload Button in der App drücken</li>
                      <li>2. <strong className="text-white">M3U-URL prüfen:</strong> Komplett? Richtig geschrieben? Keine Leerzeichen?</li>
                      <li>3. <strong className="text-white">Warten:</strong> Erster Load kann 30-60 Sekunden dauern bei großen Listen</li>
                      <li>4. <strong className="text-white">Internetverbindung:</strong> Prüfen ob Internet funktioniert (Browser-Test)</li>
                      <li>5. <strong className="text-white">Andere App testen:</strong> Funktioniert es in VLC? Dann ist App das Problem</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🎨</span>
                      <span>Bild ist pixelig / schlechte Qualität</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Langsame Verbindung oder falsche Qualitätseinstellung</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Qualität hochstellen:</strong> In App-Einstellungen von SD auf HD umschalten</li>
                      <li>2. <strong className="text-white">HD-Stream wählen:</strong> Manche Kanäle haben SD und HD Version - HD wählen!</li>
                      <li>3. <strong className="text-white">Internetgeschwindigkeit:</strong> Min. 10 Mbps für HD nötig - Speed-Test machen</li>
                      <li>4. <strong className="text-white">TV-Einstellungen:</strong> Bildmodus auf &quot;Dynamisch&quot; oder &quot;Vivid&quot; stellen</li>
                      <li>5. <strong className="text-white">Abstand zum Router:</strong> Näher am Router = besseres Signal = bessere Qualität</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">⏰</span>
                      <span>Kanäle haben Zeitversatz / falsche Uhrzeit</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Zeitzone falsch eingestellt oder EPG veraltet</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Gerät-Zeitzone prüfen:</strong> Einstellungen → Datum & Uhrzeit → Zeitzone auf &quot;Berlin&quot; setzen</li>
                      <li>2. <strong className="text-white">EPG aktualisieren:</strong> EPG-Update erzwingen in App-Einstellungen</li>
                      <li>3. <strong className="text-white">Zeitzone in App:</strong> Manche Apps haben eigene Zeitzone-Einstellung (auf UTC+1 setzen)</li>
                      <li>4. <strong className="text-white">Automatische Zeit:</strong> &quot;Automatische Zeitzone&quot; aktivieren auf dem Gerät</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-white/5 rounded-xl border border-white/10 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-white/10 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">🔐</span>
                      <span>&quot;Too many connections&quot; / Zu viele Verbindungen</span>
                    </span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 space-y-3">
                    <p className="font-semibold text-white">Ursache: Ihr Paket erlaubt z.B. nur 1 Gerät, aber 2+ sind eingeloggt</p>
                    <p className="font-semibold text-yellow-400">Lösungen:</p>
                    <ol className="space-y-2">
                      <li>1. <strong className="text-white">Andere Geräte ausloggen:</strong> Schließen Sie IPTV-Apps auf allen anderen Geräten</li>
                      <li>2. <strong className="text-white">Warten:</strong> Verbindungen laufen nach 5-10 Minuten automatisch aus</li>
                      <li>3. <strong className="text-white">Paket upgraden:</strong> Wechseln Sie zu einem Multi-Device-Paket (2-5 Geräte gleichzeitig)</li>
                      <li>4. <strong className="text-white">Support kontaktieren:</strong> Falls Sie sicher sind, dass nur 1 Gerät aktiv ist - Session zurücksetzen lassen</li>
                    </ol>
                  </div>
                </details>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6 mt-8 text-center">
                <p className="text-white text-xl font-bold mb-4">
                  Problem nicht gelöst? 🆘
                </p>
                <p className="text-gray-300 mb-6">
                  Unser deutscher Support-Team hilft Ihnen innerhalb von 30 Minuten – 7 Tage die Woche!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/212608677633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    📱 WhatsApp Support
                  </a>
                  <a 
                    href="https://t.me/Buyiptvsubscription"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    💬 Telegram Support
                  </a>
                  <a 
                    href="mailto:support@deutsch-iptv.com"
                    className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    📧 E-Mail Support
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tips Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  Pro-Tipps für optimale IPTV-Qualität
                </h2>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                Sie haben IPTV installiert – jetzt holen Sie das Maximum raus! Diese Tricks nutzen selbst IT-Profis:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🌐</div>
                    <h3 className="text-xl font-bold text-white">1. DNS-Server optimieren</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Wechseln Sie von Ihrem ISP-DNS zu schnelleren Servern für bessere Stream-Geschwindigkeit:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-green-400 font-semibold">Empfohlene DNS-Server:</p>
                    <p className="text-gray-400">• Google DNS: <code className="text-green-400">8.8.8.8</code> & <code className="text-green-400">8.8.4.4</code></p>
                    <p className="text-gray-400">• Cloudflare: <code className="text-green-400">1.1.1.1</code> & <code className="text-green-400">1.0.0.1</code></p>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    <strong className="text-white">Wo ändern?</strong> Router-Einstellungen → Netzwerk → DNS oder direkt am Gerät
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🔌</div>
                    <h3 className="text-xl font-bold text-white">2. LAN statt WLAN nutzen</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Der #1 Tipp von Profis: Kabelverbindung ist 10x stabiler als WLAN!
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">Für Fire TV Stick:</strong> Amazon Ethernet-Adapter (15€)</li>
                    <li>• <strong className="text-white">Für Smart-TV:</strong> LAN-Kabel vom Router zum TV</li>
                    <li>• <strong className="text-white">Resultat:</strong> Kein Buffering mehr, selbst bei 4K!</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🎚️</div>
                    <h3 className="text-xl font-bold text-white">3. Puffergrößen anpassen</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Erhöhen Sie den Stream-Puffer für flüssigere Wiedergabe:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">VLC:</strong> Einstellungen → Eingabe/Codecs → Netzwerk-Caching auf 3000ms</li>
                    <li>• <strong className="text-white">IBO Player:</strong> Settings → Player → Buffer Size auf &quot;High&quot;</li>
                    <li>• <strong className="text-white">TiviMate:</strong> Settings → Player → Buffer Size 10-15 Sekunden</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">⏰</div>
                    <h3 className="text-xl font-bold text-white">4. EPG perfekt einstellen</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Programmguide immer aktuell halten für bestes TV-Erlebnis:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">Auto-Update:</strong> Täglich um 3 Uhr nachts aktualisieren lassen</li>
                    <li>• <strong className="text-white">Zeitzone:</strong> Auf UTC+1 (Berlin) einstellen</li>
                    <li>• <strong className="text-white">Cache:</strong> EPG-Daten 7 Tage im Voraus laden</li>
                    <li>• <strong className="text-white">Logo-Pack:</strong> Sender-Logos für bessere Übersicht herunterladen</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">📋</div>
                    <h3 className="text-xl font-bold text-white">5. Favoritenlisten organisieren</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Sparen Sie Zeit mit intelligenten Favoritenlisten:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">Nach Genre:</strong> Sport, Filme, Nachrichten, Kids getrennt</li>
                    <li>• <strong className="text-white">Nach Sprache:</strong> Deutsch, Englisch, Türkisch separate Listen</li>
                    <li>• <strong className="text-white">Top 20:</strong> Ihre meistgeschauten Sender ganz oben</li>
                    <li>• <strong className="text-white">Backup:</strong> Favoritenlisten exportieren & auf PC sichern</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🔐</div>
                    <h3 className="text-xl font-bold text-white">6. Elternkontrolle aktivieren</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Schützen Sie Kinder vor ungeeigneten Inhalten:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">PIN einrichten:</strong> Für Erwachsenenkanäle Passwort setzen</li>
                    <li>• <strong className="text-white">Altersbeschränkung:</strong> FSK 18 automatisch sperren</li>
                    <li>• <strong className="text-white">Kids-Profil:</strong> Separates Profil nur mit Kindersendern</li>
                    <li>• <strong className="text-white">Zeitlimit:</strong> Maximale Sehzeit pro Tag festlegen</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">📡</div>
                    <h3 className="text-xl font-bold text-white">7. Multi-Room Setup</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    IPTV in jedem Raum – so geht&apos;s:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">Wohnzimmer:</strong> Smart-TV mit Smart IPTV App</li>
                    <li>• <strong className="text-white">Schlafzimmer:</strong> Fire TV Stick am alten TV</li>
                    <li>• <strong className="text-white">Küche:</strong> Tablet mit IPTV-App auf Ständer</li>
                    <li>• <strong className="text-white">Unterwegs:</strong> Smartphone-App für Garten/Balkon</li>
                  </ul>
                  <p className="text-yellow-400 text-xs mt-3">💡 Multi-Device-Paket nötig für gleichzeitiges Streaming!</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">🎬</div>
                    <h3 className="text-xl font-bold text-white">8. Catch-Up & Aufnahmen</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Verpassen Sie nie wieder Ihre Lieblingssendungen:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• <strong className="text-white">Catch-Up TV:</strong> Sendungen bis 7 Tage rückwirkend schauen</li>
                    <li>• <strong className="text-white">Aufnahme-Funktion:</strong> Apps wie TiviMate erlauben lokale Aufnahmen</li>
                    <li>• <strong className="text-white">Timeshift:</strong> Live-TV pausieren und später weiterschauen</li>
                    <li>• <strong className="text-white">Cloud-DVR:</strong> Manche Anbieter bieten Cloud-Speicher</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 mt-8">
                <h4 className="text-white font-bold text-lg mb-3">🏆 Ultimativer Setup-Guide:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-semibold mb-2">Hardware (Einmalig)</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• LAN-Kabel verlegen</li>
                      <li>• Fire TV Stick (40€)</li>
                      <li>• Ethernet-Adapter (15€)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">Software (5 Min)</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• DNS auf 1.1.1.1 ändern</li>
                      <li>• IBO Player installieren</li>
                      <li>• EPG auto-update aktivieren</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold mb-2">Resultat</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 4K ohne Buffering</li>
                      <li>• 100% Uptime</li>
                      <li>• Perfektes TV-Erlebnis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
                💬 Was unsere Kunden über die Installation sagen
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      T
                    </div>
                    <div>
                      <p className="text-white font-semibold">Thomas R.</p>
                      <p className="text-gray-400 text-xs">München</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">
                    &quot;Ich bin 58 und nicht besonders technikaffin. Diese Anleitung hat es mir trotzdem ermöglicht, IPTV in 10 Minuten auf meinem Samsung TV zu installieren. Kristallklar erklärt!&quot;
                  </p>
                  <p className="text-green-400 text-xs">✅ Installation erfolgreich in 9 Minuten</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      L
                    </div>
                    <div>
                      <p className="text-white font-semibold">Laura K.</p>
                      <p className="text-gray-400 text-xs">Hamburg</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">
                    &quot;Das Troubleshooting-Kapitel hat mir das Leben gerettet! Hatte das 403-Error-Problem und dank der Anleitung in 2 Minuten gelöst. Support musste ich gar nicht kontaktieren.&quot;
                  </p>
                  <p className="text-green-400 text-xs">✅ Problem selbst gelöst dank FAQ</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      M
                    </div>
                    <div>
                      <p className="text-white font-semibold">Mehmet A.</p>
                      <p className="text-gray-400 text-xs">Berlin</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">
                    &quot;Fire TV Stick-Anleitung ist Gold wert! Habe IPTV auf 3 Geräten installiert: TV, Tablet, Handy. Alle laufen perfekt. Endlich türkische Sender für meine Eltern.&quot;
                  </p>
                  <p className="text-green-400 text-xs">✅ 3 Geräte erfolgreich eingerichtet</p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 text-center">
                <p className="text-yellow-400 font-bold text-2xl mb-2">23.847</p>
                <p className="text-gray-300">Erfolgreiche Installationen diese Woche dank dieser Anleitung</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <div className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
                ❓ Häufig gestellte Fragen zur Installation
              </h2>

              <div className="space-y-4">
                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Wie lange dauert die IPTV-Installation?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p>
                      Die durchschnittliche IPTV-Installation dauert <strong className="text-white">10-15 Minuten</strong>. Bei Smart-TVs und Fire TV Stick kann es sogar noch schneller gehen (5-7 Minuten). Die längste Zeit verbringen Sie mit dem Herunterladen der App – die eigentliche Konfiguration dauert nur 2-3 Minuten.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Brauche ich technische Kenntnisse für die Installation?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      <strong className="text-white">Nein, überhaupt nicht!</strong> Wenn Sie eine App auf Ihrem Smartphone installieren können, können Sie auch IPTV einrichten. Die Installation ist so einfach wie:
                    </p>
                    <ol className="list-decimal ml-6 space-y-1">
                      <li>App herunterladen (wie bei jeder anderen App)</li>
                      <li>Link kopieren und einfügen</li>
                      <li>Fertig – fernsehen!</li>
                    </ol>
                    <p className="mt-3">
                      Unsere Schritt-für-Schritt-Anleitung ist so geschrieben, dass selbst IT-Laien problemlos folgen können. Über 23.000 Nutzer haben es diese Woche geschafft!
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Welche App ist die beste für IPTV?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      Die beste App hängt von Ihrem Gerät ab:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong className="text-white">Fire TV Stick / Android:</strong> IBO Player (beste Benutzeroberfläche, sehr stabil)</li>
                      <li>• <strong className="text-white">iPhone / iPad / Apple TV:</strong> GSE Smart IPTV (perfekte iOS-Integration)</li>
                      <li>• <strong className="text-white">Samsung / LG Smart TV:</strong> Smart IPTV (optimiert für WebOS/Tizen)</li>
                      <li>• <strong className="text-white">Windows / Mac:</strong> VLC Media Player (kostenlos, zuverlässig)</li>
                      <li>• <strong className="text-white">Power-User:</strong> TiviMate (viele Einstellungen, professionell)</li>
                    </ul>
                    <p className="mt-3">
                      Alle Apps funktionieren einwandfrei mit deutsch-iptv.com. Wählen Sie einfach die für Ihr Gerät empfohlene App aus dieser Anleitung.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Kann ich IPTV auf mehreren Geräten gleichzeitig nutzen?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      <strong className="text-white">Ja!</strong> Je nach gewähltem Paket können Sie IPTV auf 1-5 Geräten gleichzeitig nutzen:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong className="text-white">Standard-Pakete:</strong> 1 Gerät gleichzeitig</li>
                      <li>• <strong className="text-white">Premium-Pakete:</strong> 2-3 Geräte gleichzeitig</li>
                      <li>• <strong className="text-white">Familien-Pakete:</strong> Bis zu 5 Geräte gleichzeitig</li>
                    </ul>
                    <p className="mt-3">
                      So kann Papa Fußball im Wohnzimmer schauen, während Mama türkische Serien im Schlafzimmer sieht und die Kids Cartoons auf dem Tablet gucken – alles zur gleichen Zeit!
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Was mache ich, wenn IPTV nach der Installation nicht funktioniert?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      Folgen Sie dieser Checkliste:
                    </p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li><strong className="text-white">Internetverbindung prüfen:</strong> Testen Sie mit <a href="https://fast.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">fast.com</a> (min. 10 Mbps nötig)</li>
                      <li><strong className="text-white">M3U-URL kontrollieren:</strong> Komplett kopiert? Keine Leerzeichen? Richtig geschrieben?</li>
                      <li><strong className="text-white">VPN deaktivieren:</strong> Falls aktiviert, ausschalten und nochmal versuchen</li>
                      <li><strong className="text-white">App neu starten:</strong> Komplett schließen und neu öffnen</li>
                      <li><strong className="text-white">Gerät neu starten:</strong> Oft das Wundermittel!</li>
                    </ol>
                    <p className="mt-3">
                      Falls das alles nicht hilft: Unsere <strong className="text-white">Troubleshooting-Sektion weiter oben</strong> deckt 95% aller Probleme ab. Und falls Sie wirklich feststecken – unser deutscher Support antwortet innerhalb von 30 Minuten!
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Ist IPTV legal und sicher zu nutzen?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      <strong className="text-white">Ja, IPTV ist in Deutschland legal</strong>, solange der Anbieter über die notwendigen Lizenzen verfügt. deutsch-iptv.com arbeitet mit lizenzierten Servern und ist vollkommen legal.
                    </p>
                    <p className="mb-3">
                      <strong className="text-white">Sicherheit:</strong> Ihre Daten werden verschlüsselt übertragen. Die Installation ist sicher und enthält keine Malware oder Viren. Sie laden Apps nur aus offiziellen Stores (Google Play, Apple Store, Amazon Store).
                    </p>
                    <p>
                      Illegal sind nur IPTV-Dienste, die ohne Lizenzen arbeiten und raubkopierte Inhalte verbreiten. Seriöse Anbieter wie deutsch-iptv.com sind absolut legal und sicher.
                    </p>
                  </div>
                </details>

                <details className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-white font-semibold hover:bg-gray-800/70 transition-colors">
                    <span>Funktioniert IPTV auch im Ausland / Urlaub?</span>
                    <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300">
                    <p className="mb-3">
                      <strong className="text-white">Ja!</strong> IPTV funktioniert weltweit, solange Sie eine Internetverbindung haben. Perfekt für:
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong className="text-white">Urlaub:</strong> Deutsche Sender in Spanien, Türkei, Thailand schauen</li>
                      <li>• <strong className="text-white">Geschäftsreisen:</strong> Ihr gewohntes TV-Programm im Hotelzimmer</li>
                      <li>• <strong className="text-white">Zweitwohnsitz:</strong> Ferienhaus auf Mallorca mit deutschem TV</li>
                      <li>• <strong className="text-white">Auswanderer:</strong> Deutsche Sender in den USA, Kanada, Australien</li>
                    </ul>
                    <p className="mt-3">
                      <strong className="text-white">Tipp:</strong> In manchen Ländern (z.B. China) kann ein VPN mit deutschem Server nötig sein. In den meisten Ländern funktioniert es aber ohne VPN einwandfrei.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Final Success Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Herzlichen Glückwunsch zur erfolgreichen Installation!
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Sie haben es geschafft! Ihre IPTV-Installation ist komplett. Jetzt fehlt nur noch eins: Premium-Content!
              </p>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-white font-bold text-lg mb-4">Was Sie jetzt haben:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>IPTV perfekt installiert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>App läuft stabil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>EPG eingerichtet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Alles optimiert</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                <h3 className="text-white font-bold text-lg mb-4">Was Ihnen noch fehlt:</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>🎬 <strong className="text-white">26.000+ Premium-Kanäle</strong> in HD/4K/8K</p>
                  <p>⚽ <strong className="text-white">Alle Sportevents live</strong> – Bundesliga, Champions League, Premier League</p>
                  <p>🌍 <strong className="text-white">Internationale Sender</strong> – Deutsch, Türkisch, Arabisch, Englisch & mehr</p>
                  <p>🎭 <strong className="text-white">190.000+ Filme & Serien</strong> on-demand</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link 
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-2xl text-xl"
                >
                  🚀 Jetzt Premium-Kanäle freischalten ab 14,99€ →
                </Link>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>14 Tage Geld-zurück</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Sofort-Aktivierung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Deutscher Support</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-16">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                📚 Weiterführende Artikel & Guides
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/was-ist-iptv"
                  className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 border border-gray-700 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">❓</div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                        Was ist IPTV? Der komplette Guide
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Alles über IPTV-Technologie, Funktionsweise und Vorteile erklärt
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/iptv-preise-angebote-deutschland"
                  className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 border border-gray-700 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                        IPTV-Preise & Pakete im Vergleich
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Finden Sie das perfekte IPTV-Paket für Ihre Bedürfnisse
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/welche-iptv-app-sollte-ich-verwenden"
                  className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 border border-gray-700 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                        Die besten IPTV-Apps im Test
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Detaillierter Vergleich aller IPTV-Apps für Deutschland
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/german-iptv-anbiter-m3u"
                  className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 border border-gray-700 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🔗</div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                        German IPTV M3U - Alles über Playlists
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Verstehen Sie M3U-Playlists und deren optimale Nutzung
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Final Bottom CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Installation geschafft – jetzt Premium genießen!
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Über 15.000 Deutsche streamen bereits mit deutsch-iptv.com. Werden Sie Teil der Community!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/iptv-preise-angebote-deutschland"
                  className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
                >
                  Jetzt Paket wählen →
                </Link>
                <a 
                  href="https://wa.me/212608677633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-xl"
                >
                  📱 Fragen? WhatsApp Support
                </a>
              </div>
            </div>
          </section>

        </div>
      </article>

      <Footer locale={locale} />
    </>
  );
}