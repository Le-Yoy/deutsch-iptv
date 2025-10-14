'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FAQSectionProps {
  locale?: string;
}

interface FAQItem {
  id: string;
  category: 'trust' | 'technical' | 'comparison' | 'purchase';
  question: string;
  answer: string | React.ReactNode;
}

export default function FAQSection({ locale = 'de' }: FAQSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Open first 3 questions by default for SEO
    setExpandedItems(new Set(['legal', 'trust', 'comparison']));
  }, []);

  const toggleQuestion = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const faqData: Record<'de' | 'en', { title: string; subtitle: string; categories: Record<string, string>;
 items: FAQItem[] }> = {
    de: {
      title: 'Alles über IPTV Deutschland - Ihre Fragen beantwortet',
      subtitle: 'Von Reddit-Nutzern empfohlen als bester deutscher IPTV Anbieter',
      categories: {
        all: 'Alle Fragen',
        trust: '🛡️ Vertrauen & Sicherheit',
        technical: '⚙️ Technik & Setup',
        comparison: '🔍 Vergleich',
        purchase: '💳 Kauf & Support'
      },
      items: [
        {
          id: 'legal',
          category: 'trust',
          question: 'Ist IPTV in Deutschland legal und sicher zu nutzen?',
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Ja, IPTV selbst ist vollkommen legal</strong> - es ist einfach eine moderne Art, Fernsehen über das Internet zu empfangen. 
                Bei Deutsch-IPTV garantieren wir einen sicheren und transparenten Service.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-sm">
                  ✅ <strong>SSL-verschlüsselte Verbindungen</strong> - Ihre Daten sind geschützt<br/>
                  ✅ <strong>GDPR-konform</strong> - Deutsche Datenschutzstandards<br/>
                  ✅ <strong>Keine versteckten Kosten</strong> - Transparente Preise<br/>
                  ✅ <strong>30-Tage Geld-zurück-Garantie</strong> - Kein Risiko für Sie
                </p>
              </div>
              <p className="text-sm">
                Mehr über unsere Sicherheitsmaßnahmen erfahren Sie in unserer{' '}
                <Link href="/datenschutzrichtlinie" className="text-yellow-400 hover:underline">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>
          )
        },
        {
          id: 'trust',
          category: 'trust',
          question: 'Warum wird Deutsch-IPTV auf Reddit als bester IPTV Anbieter Deutschland empfohlen?',
          answer: (
            <div className="space-y-3">
              <p>
                Wir rangieren auf <strong>Platz #2 für &quot;best IPTV Germany Reddit&quot;</strong> - das bedeutet, 
                echte Nutzer diskutieren und empfehlen unseren Service in unabhängigen Foren.
              </p>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">12.847+</div>
                  <div className="text-xs text-gray-400">Aktive Nutzer</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-gray-400">Zufriedenheit</div>
                </div>
              </div>
              <p className="text-sm">
                Reddit-Nutzer schätzen besonders: Deutsche Support-Sprache, stabile Verbindungen, 
                faire Preise und unsere Flexibilität ohne Vertragsbindung.
              </p>
            </div>
          )
        },
        {
          id: 'comparison',
          category: 'comparison',
          question: 'Was unterscheidet Deutsch IPTV von kostenlosen IPTV Apps oder anderen Anbietern?',
          answer: (
            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Feature</th>
                      <th className="px-3 py-2">Deutsch-IPTV</th>
                      <th className="px-3 py-2 text-gray-500">Kostenlose Apps</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Zuverlässigkeit</td>
                      <td className="px-3 py-2 text-center">✅ 99,9% Uptime</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ Häufige Ausfälle</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Kanäle</td>
                      <td className="px-3 py-2 text-center">✅ 26.000+ HD/4K</td>
                      <td className="px-3 py-2 text-center text-gray-500">⚠️ Begrenzt, SD</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Support</td>
                      <td className="px-3 py-2 text-center">✅ 24/7 Deutsch</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ Kein Support</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Buffering</td>
                      <td className="px-3 py-2 text-center">✅ Keine Unterbrechungen</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ Ständiges Buffering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="text-yellow-400 hover:underline">
                  → Unsere Pakete ansehen und IPTV kaufen
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'devices',
          category: 'technical',
          question: 'Auf welchen Geräten funktioniert deutscher IPTV Service?',
          answer: (
            <div className="space-y-3">
              <p><strong>Deutsch-IPTV funktioniert auf allen modernen Geräten:</strong></p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div>📺 Samsung Smart TV</div>
                <div>📺 LG Smart TV</div>
                <div>🍎 Apple TV</div>
                <div>📱 iPhone/iPad</div>
                <div>🤖 Android Geräte</div>
                <div>🔥 Amazon Fire TV</div>
                <div>💻 Windows PC</div>
                <div>💻 MacBook</div>
                <div>📦 MAG Box</div>
              </div>
              <p className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                💡 <strong>Tipp:</strong> Sie können IPTV auf bis zu 5 Geräten gleichzeitig nutzen - 
                perfekt für die ganze Familie! <Link href="#packages" className="text-yellow-400 hover:underline">Siehe Multi-Device Pakete →</Link>
              </p>
            </div>
          )
        },
        {
          id: 'internet-speed',
          category: 'technical',
          question: 'Welche Internetgeschwindigkeit brauche ich für IPTV Deutschland?',
          answer: (
            <div className="space-y-3">
              <p>Die benötigte Geschwindigkeit hängt von der Streaming-Qualität ab:</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>SD Qualität (480p)</span>
                  <span className="text-yellow-400 font-bold">3-5 Mbit/s</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>HD Qualität (1080p)</span>
                  <span className="text-yellow-400 font-bold">8-10 Mbit/s</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>4K/UHD Qualität</span>
                  <span className="text-yellow-400 font-bold">25+ Mbit/s</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                <strong>Empfehlung:</strong> Für optimale Erfahrung mit mehreren Geräten empfehlen wir mindestens 50 Mbit/s.
                Die meisten deutschen Haushalte haben bereits ausreichende Geschwindigkeit.
              </p>
            </div>
          )
        },
        {
          id: 'installation',
          category: 'technical',
          question: 'Wie installiere ich IPTV? Ist es kompliziert?',
          answer: (
            <div className="space-y-3">
              <p><strong>Nein, es ist kinderleicht!</strong> Installation dauert nur 5 Minuten:</p>
              <ol className="space-y-2 text-sm">
                <li>1️⃣ <strong>IPTV kaufen</strong> - Wählen Sie Ihr Paket</li>
                <li>2️⃣ <strong>Zugangsdaten erhalten</strong> - Sofort per E-Mail</li>
                <li>3️⃣ <strong>App installieren</strong> - Wir zeigen Ihnen genau welche</li>
                <li>4️⃣ <strong>Login & Fernsehen</strong> - Das war&apos;s schon!</li>
              </ol>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-sm">
                  🎯 <strong>Kostenloser Support:</strong> Unser deutsches Support-Team hilft Ihnen 
                  bei der Einrichtung - kostenlos und in Ihrer Sprache!
                </p>
              </div>
              <p className="text-sm">
                <Link href="/installationsanleitung-iptv" className="text-yellow-400 hover:underline">
                  → Detaillierte Installationsanleitung ansehen
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'channels',
          category: 'comparison',
          question: 'Welche Kanäle und Inhalte bekomme ich mit Deutsch IPTV?',
          answer: (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-yellow-400 mb-2">📺 Live TV</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Alle deutschen Sender</li>
                    <li>• Sky Sports & Cinema</li>
                    <li>• DAZN</li>
                    <li>• Internationale Kanäle</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-yellow-400 mb-2">🎬 Streaming</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Netflix Inhalte</li>
                    <li>• Amazon Prime</li>
                    <li>• Disney+</li>
                    <li>• HBO Max</li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-bold text-lg">
                26.000+ Kanäle • 190.000+ VOD • Bundesliga • Champions League
              </p>
            </div>
          )
        },
        {
          id: 'pricing',
          category: 'purchase',
          question: 'Was kostet IPTV bei Deutsch-IPTV? Gibt es versteckte Kosten?',
          answer: (
            <div className="space-y-3">
              <p><strong>Transparente Preise ohne versteckte Kosten:</strong></p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">1 Monat</div>
                  <div className="text-yellow-400">14,99€</div>
                </div>
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">3 Monate</div>
                  <div className="text-yellow-400">34,99€</div>
                </div>
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">6 Monate</div>
                  <div className="text-yellow-400">44,99€</div>
                </div>
                <div className="bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded p-2 border border-yellow-500/30">
                  <div className="font-bold">12 Monate</div>
                  <div className="text-yellow-400 font-bold">64,99€</div>
                </div>
              </div>
              <p className="text-sm text-green-400">
                ✅ Keine Setup-Gebühren • ✅ Keine versteckten Kosten • ✅ Keine Vertragsbindung
              </p>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-lg inline-block hover:scale-105 transition-transform">
                  IPTV kaufen - Jetzt starten →
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'guarantee',
          category: 'trust',
          question: 'Was ist wenn ich nicht zufrieden bin? Gibt es eine Geld-zurück-Garantie?',
          answer: (
            <div className="space-y-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-green-400 mb-2">
                  ✅ 30 Tage Geld-zurück-Garantie
                </p>
                <p className="text-sm">
                  Nicht zufrieden? Sie bekommen Ihr Geld zurück - ohne Fragen, ohne Kleingedrucktes.
                </p>
              </div>
              <p className="text-sm">
                Das ist unser Versprechen: Sie testen Deutsch-IPTV völlig risikofrei. 
                Wenn Sie innerhalb von 30 Tagen nicht 100% zufrieden sind, erstatten wir den vollen Kaufpreis.
              </p>
            </div>
          )
        },
        {
          id: 'contract',
          category: 'purchase',
          question: 'Gibt es eine Vertragsbindung oder kann ich jederzeit kündigen?',
          answer: (
            <div className="space-y-3">
              <p className="font-bold text-green-400">
                ❌ Keine Vertragsbindung • ✅ Jederzeit kündbar • ✅ Volle Flexibilität
              </p>
              <p className="text-sm">
                Bei Deutsch-IPTV gibt es <strong>keine versteckten Verträge oder Mindestlaufzeiten</strong>. 
                Sie kaufen ein Paket (1, 3, 6 oder 12 Monate) und es läuft automatisch aus - 
                keine automatische Verlängerung, keine Kündigungsfristen.
              </p>
              <p className="text-sm text-gray-400">
                Das unterscheidet uns von traditionellen TV-Anbietern mit ihren 24-Monats-Verträgen!
              </p>
            </div>
          )
        },
        {
          id: 'support',
          category: 'purchase',
          question: 'Bietet Deutsch-IPTV deutschen Kundensupport?',
          answer: (
            <div className="space-y-3">
              <p><strong>Ja! Unser Support-Team spricht Deutsch:</strong></p>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">💬</div>
                  <div className="text-xs">WhatsApp Support</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">📧</div>
                  <div className="text-xs">E-Mail Support</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-xs">24/7 verfügbar</div>
                </div>
              </div>
              <p className="text-sm">
                Durchschnittliche Antwortzeit: <strong className="text-yellow-400">5 Minuten</strong> • 
                Zufriedenheit: <strong className="text-green-400">98%</strong>
              </p>
            </div>
          )
        },
        {
          id: 'buffering',
          category: 'technical',
          question: 'Was mache ich bei Buffering-Problemen?',
          answer: (
            <div className="space-y-3">
              <p><strong>Buffering ist bei uns selten, aber hier sind Lösungen:</strong></p>
              <ol className="space-y-2 text-sm">
                <li>1️⃣ <strong>Internet prüfen:</strong> Mindestens 10 Mbit/s für HD</li>
                <li>2️⃣ <strong>Server wechseln:</strong> Wir haben mehrere Server zur Auswahl</li>
                <li>3️⃣ <strong>Cache leeren:</strong> App-Cache und Neustart</li>
                <li>4️⃣ <strong>Support kontaktieren:</strong> Wir helfen sofort!</li>
              </ol>
              <p className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                💡 <strong>99,9% Uptime-Garantie:</strong> Unsere Server sind optimiert für Deutschland 
                und bieten stabile Streams ohne Unterbrechungen.
              </p>
            </div>
          )
        },
        {
          id: 'multiple-devices',
          category: 'technical',
          question: 'Kann ich IPTV auf mehreren Geräten gleichzeitig nutzen?',
          answer: (
            <div className="space-y-3">
              <p><strong>Ja! Perfekt für Familien:</strong></p>
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4">
                <p className="text-sm mb-3">Unsere Multi-Device Pakete:</p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>1 Gerät:</strong> Basis-Paket für Einzelnutzer</li>
                  <li>• <strong>2 Geräte:</strong> Perfekt für Paare (+10€)</li>
                  <li>• <strong>3 Geräte:</strong> Ideal für kleine Familien (+20€)</li>
                  <li>• <strong>5 Geräte:</strong> Komplette Hausversorgung (+40€)</li>
                </ul>
              </div>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="text-yellow-400 hover:underline">
                  → Multi-Device Pakete ansehen
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'abroad',
          category: 'technical',
          question: 'Funktioniert IPTV auch im Ausland oder nur in Deutschland?',
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Ja, Deutsch-IPTV funktioniert weltweit!</strong> Nehmen Sie Ihre deutschen 
                Lieblingssender mit in den Urlaub oder auf Geschäftsreisen.
              </p>
              <p className="text-sm bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                🌍 Verfügbar in: EU, USA, Asien, überall wo Sie Internet haben!
              </p>
            </div>
          )
        },
        {
          id: 'start',
          category: 'purchase',
          question: 'Wie kann ich jetzt starten und IPTV kaufen?',
          answer: (
            <div className="space-y-3">
              <p className="font-bold text-yellow-400">In 3 einfachen Schritten:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold">Paket wählen</div>
                    <div className="text-sm text-gray-400">1, 3, 6 oder 12 Monate</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold">Kontakt aufnehmen</div>
                    <div className="text-sm text-gray-400">WhatsApp oder Telegram</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold">Sofort schauen</div>
                    <div className="text-sm text-gray-400">Aktivierung in 5 Minuten</div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link href="/iptv-preise-angebote-deutschland" className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-2xl">
                  Jetzt IPTV kaufen →
                </Link>
              </div>
            </div>
          )
        }
      ]
    },
    en: {
      title: 'Everything about German IPTV - Your Questions Answered',
      subtitle: 'Recommended by Reddit users as the best German IPTV provider',
      categories: {
        all: 'All Questions',
        trust: '🛡️ Trust & Security',
        technical: '⚙️ Technical & Setup',
        comparison: '🔍 Comparison',
        purchase: '💳 Purchase & Support'
      },
      items: [
        {
          id: 'legal',
          category: 'trust',
          question: 'Is IPTV legal and safe to use in Germany?',
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Yes, IPTV itself is completely legal</strong> - it is simply a modern way to receive television via the Internet. 
                At Deutsch-IPTV, we guarantee a secure and transparent service.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-sm">
                  ✅ <strong>SSL-encrypted connections</strong> - Your data is protected<br/>
                  ✅ <strong>GDPR compliant</strong> - German data protection standards<br/>
                  ✅ <strong>No hidden costs</strong> - Transparent pricing<br/>
                  ✅ <strong>30-day money-back guarantee</strong> - No risk for you
                </p>
              </div>
              <p className="text-sm">
                Learn more about our security measures in our{' '}
                <Link href="/datenschutzrichtlinie" className="text-yellow-400 hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          )
        },
        {
          id: 'trust',
          category: 'trust',
          question: 'Why is Deutsch-IPTV recommended on Reddit as the best German IPTV provider?',
          answer: (
            <div className="space-y-3">
              <p>
                We rank <strong>#2 for &quot;best IPTV Germany Reddit&quot;</strong> - which means 
                real users discuss and recommend our service in independent forums.
              </p>
              <div className="grid grid-cols-2 gap-3 my-3">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-yellow-400">12,847+</div>
                  <div className="text-xs text-gray-400">Active Users</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </div>
              <p className="text-sm">
                Reddit users especially appreciate: German support language, stable connections, 
                fair prices, and our flexibility without contract binding.
              </p>
            </div>
          )
        },
        {
          id: 'comparison',
          category: 'comparison',
          question: 'What distinguishes Deutsch IPTV from free IPTV apps or other providers?',
          answer: (
            <div className="space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Feature</th>
                      <th className="px-3 py-2">Deutsch-IPTV</th>
                      <th className="px-3 py-2 text-gray-500">Free Apps</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Reliability</td>
                      <td className="px-3 py-2 text-center">✅ 99.9% Uptime</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ Frequent Outages</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Channels</td>
                      <td className="px-3 py-2 text-center">✅ 26,000+ HD/4K</td>
                      <td className="px-3 py-2 text-center text-gray-500">⚠️ Limited, SD</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Support</td>
                      <td className="px-3 py-2 text-center">✅ 24/7 German</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ No Support</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-2">Buffering</td>
                      <td className="px-3 py-2 text-center">✅ No Interruptions</td>
                      <td className="px-3 py-2 text-center text-gray-500">❌ Constant Buffering</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="text-yellow-400 hover:underline">
                  → View our packages and buy IPTV
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'devices',
          category: 'technical',
          question: 'On which devices does German IPTV service work?',
          answer: (
            <div className="space-y-3">
              <p><strong>Deutsch-IPTV works on all modern devices:</strong></p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                <div>📺 Samsung Smart TV</div>
                <div>📺 LG Smart TV</div>
                <div>🍎 Apple TV</div>
                <div>📱 iPhone/iPad</div>
                <div>🤖 Android Devices</div>
                <div>🔥 Amazon Fire TV</div>
                <div>💻 Windows PC</div>
                <div>💻 MacBook</div>
                <div>📦 MAG Box</div>
              </div>
              <p className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                💡 <strong>Tip:</strong> You can use IPTV on up to 5 devices simultaneously - 
                perfect for the whole family! <Link href="#packages" className="text-yellow-400 hover:underline">See Multi-Device Packages →</Link>
              </p>
            </div>
          )
        },
        {
          id: 'internet-speed',
          category: 'technical',
          question: 'What internet speed do I need for IPTV in Germany?',
          answer: (
            <div className="space-y-3">
              <p>The required speed depends on the streaming quality:</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>SD Quality (480p)</span>
                  <span className="text-yellow-400 font-bold">3-5 Mbit/s</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>HD Quality (1080p)</span>
                  <span className="text-yellow-400 font-bold">8-10 Mbit/s</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded">
                  <span>4K/UHD Quality</span>
                  <span className="text-yellow-400 font-bold">25+ Mbit/s</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                <strong>Recommendation:</strong> For optimal experience with multiple devices, we recommend at least 50 Mbit/s.
                Most German households already have sufficient speed.
              </p>
            </div>
          )
        },
        {
          id: 'installation',
          category: 'technical',
          question: 'How do I install IPTV? Is it complicated?',
          answer: (
            <div className="space-y-3">
              <p><strong>No, it&apos;s super easy!</strong> Installation takes only 5 minutes:</p>
              <ol className="space-y-2 text-sm">
                <li>1️⃣ <strong>Buy IPTV</strong> - Choose your package</li>
                <li>2️⃣ <strong>Receive credentials</strong> - Instantly via email</li>
                <li>3️⃣ <strong>Install app</strong> - We show you exactly which one</li>
                <li>4️⃣ <strong>Login & Watch</strong> - That&apos;s it!</li>
              </ol>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-sm">
                  🎯 <strong>Free Support:</strong> Our German support team helps you 
                  with setup - free and in your language!
                </p>
              </div>
              <p className="text-sm">
                <Link href="/installationsanleitung-iptv" className="text-yellow-400 hover:underline">
                  → View detailed installation guide
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'channels',
          category: 'comparison',
          question: 'Which channels and content do I get with Deutsch IPTV?',
          answer: (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-yellow-400 mb-2">📺 Live TV</div>
                  <ul className="space-y-1 text-xs">
                    <li>• All German channels</li>
                    <li>• Sky Sports & Cinema</li>
                    <li>• DAZN</li>
                    <li>• International channels</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="font-bold text-yellow-400 mb-2">🎬 Streaming</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Netflix content</li>
                    <li>• Amazon Prime</li>
                    <li>• Disney+</li>
                    <li>• HBO Max</li>
                  </ul>
                </div>
              </div>
              <p className="text-center font-bold text-lg">
                26,000+ Channels • 190,000+ VOD • Bundesliga • Champions League
              </p>
            </div>
          )
        },
        {
          id: 'pricing',
          category: 'purchase',
          question: 'How much does IPTV cost at Deutsch-IPTV? Are there hidden costs?',
          answer: (
            <div className="space-y-3">
              <p><strong>Transparent prices without hidden costs:</strong></p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">1 Month</div>
                  <div className="text-yellow-400">€14.99</div>
                </div>
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">3 Months</div>
                  <div className="text-yellow-400">€34.99</div>
                </div>
                <div className="bg-white/5 rounded p-2">
                  <div className="font-bold">6 Months</div>
                  <div className="text-yellow-400">€44.99</div>
                </div>
                <div className="bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded p-2 border border-yellow-500/30">
                  <div className="font-bold">12 Months</div>
                  <div className="text-yellow-400 font-bold">€64.99</div>
                </div>
              </div>
              <p className="text-sm text-green-400">
                ✅ No setup fees • ✅ No hidden costs • ✅ No contract binding
              </p>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-2 rounded-lg inline-block hover:scale-105 transition-transform">
                  Buy IPTV - Start now →
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'guarantee',
          category: 'trust',
          question: 'What if I am not satisfied? Is there a money-back guarantee?',
          answer: (
            <div className="space-y-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-lg font-bold text-green-400 mb-2">
                  ✅ 30-Day Money-Back Guarantee
                </p>
                <p className="text-sm">
                  Not satisfied? You get your money back - no questions asked, no fine print.
                </p>
              </div>
              <p className="text-sm">
                This is our promise: You test Deutsch-IPTV completely risk-free. 
                If you are not 100% satisfied within 30 days, we refund the full purchase price.
              </p>
            </div>
          )
        },
        {
          id: 'contract',
          category: 'purchase',
          question: 'Is there a contract binding or can I cancel anytime?',
          answer: (
            <div className="space-y-3">
              <p className="font-bold text-green-400">
                ❌ No contract binding • ✅ Cancel anytime • ✅ Full flexibility
              </p>
              <p className="text-sm">
                At Deutsch-IPTV there are <strong>no hidden contracts or minimum terms</strong>. 
                You buy a package (1, 3, 6, or 12 months) and it expires automatically - 
                no automatic renewal, no cancellation periods.
              </p>
              <p className="text-sm text-gray-400">
                This distinguishes us from traditional TV providers with their 24-month contracts!
              </p>
            </div>
          )
        },
        {
          id: 'support',
          category: 'purchase',
          question: 'Does Deutsch-IPTV offer German customer support?',
          answer: (
            <div className="space-y-3">
              <p><strong>Yes! Our support team speaks German:</strong></p>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">💬</div>
                  <div className="text-xs">WhatsApp Support</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">📧</div>
                  <div className="text-xs">Email Support</div>
                </div>
                <div className="bg-white/5 rounded p-3">
                  <div className="text-2xl mb-1">🔧</div>
                  <div className="text-xs">24/7 Available</div>
                </div>
              </div>
              <p className="text-sm">
                Average response time: <strong className="text-yellow-400">5 minutes</strong> • 
                Satisfaction: <strong className="text-green-400">98%</strong>
              </p>
            </div>
          )
        },
        {
          id: 'buffering',
          category: 'technical',
          question: 'What should I do if I experience buffering problems?',
          answer: (
            <div className="space-y-3">
              <p><strong>Buffering is rare with us, but here are solutions:</strong></p>
              <ol className="space-y-2 text-sm">
                <li>1️⃣ <strong>Check internet:</strong> At least 10 Mbit/s for HD</li>
                <li>2️⃣ <strong>Switch server:</strong> We have multiple servers to choose from</li>
                <li>3️⃣ <strong>Clear cache:</strong> App cache and restart</li>
                <li>4️⃣ <strong>Contact support:</strong> We help immediately!</li>
              </ol>
              <p className="text-sm bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                💡 <strong>99.9% Uptime Guarantee:</strong> Our servers are optimized for Germany 
                and provide stable streams without interruptions.
              </p>
            </div>
          )
        },
        {
          id: 'multiple-devices',
          category: 'technical',
          question: 'Can I use IPTV on multiple devices simultaneously?',
          answer: (
            <div className="space-y-3">
              <p><strong>Yes! Perfect for families:</strong></p>
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4">
                <p className="text-sm mb-3">Our Multi-Device Packages:</p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>1 Device:</strong> Basic package for single users</li>
                  <li>• <strong>2 Devices:</strong> Perfect for couples (+€10)</li>
                  <li>• <strong>3 Devices:</strong> Ideal for small families (+€20)</li>
                  <li>• <strong>5 Devices:</strong> Complete household coverage (+€40)</li>
                </ul>
              </div>
              <p className="text-sm">
                <Link href="/iptv-preise-angebote-deutschland" className="text-yellow-400 hover:underline">
                  → View Multi-Device Packages
                </Link>
              </p>
            </div>
          )
        },
        {
          id: 'abroad',
          category: 'technical',
          question: 'Does IPTV work abroad or only in Germany?',
          answer: (
            <div className="space-y-3">
              <p>
                <strong>Yes, Deutsch-IPTV works worldwide!</strong> Take your favorite German 
                channels with you on vacation or business trips.
              </p>
              <p className="text-sm bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                🌍 Available in: EU, USA, Asia, anywhere you have internet!
              </p>
            </div>
          )
        },
        {
          id: 'start',
          category: 'purchase',
          question: 'How can I start now and buy IPTV?',
          answer: (
            <div className="space-y-3">
              <p className="font-bold text-yellow-400">In 3 simple steps:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-bold">Choose package</div>
                    <div className="text-sm text-gray-400">1, 3, 6, or 12 months</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-bold">Get in touch</div>
                    <div className="text-sm text-gray-400">WhatsApp or Telegram</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-bold">Watch immediately</div>
                    <div className="text-sm text-gray-400">Activation in 5 minutes</div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link href="/iptv-preise-angebote-deutschland" className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-2xl">
                  Buy IPTV Now →
                </Link>
              </div>
            </div>
          )
        }
      ]
    }
  };

  const data = faqData[locale as 'de' | 'en'];
  
  const filteredItems = data.items.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof item.answer === 'string' ? item.answer : 'See our website for detailed answer'
      }
    }))
  };

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            {data.subtitle}
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder={locale === 'de' ? 'Suchen Sie Ihre Frage...' : 'Search your question...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(data.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
                aria-expanded={expandedItems.has(item.id)}
              >
                <h3 className="text-base md:text-lg font-semibold text-white pr-2">
                  {item.question}
                </h3>
                <svg 
                  className={`w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${
                    expandedItems.has(item.id) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems.has(item.id) && (
                <div className="px-6 pb-6 text-gray-300 animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-12 text-center p-6 bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-2xl border border-yellow-500/20">
          <p className="text-lg font-bold text-white mb-4">
            {locale === 'de' 
              ? 'Bereit für das beste IPTV Deutschland?' 
              : 'Ready for the best German IPTV?'}
          </p>
          <Link
            href="/iptv-preise-angebote-deutschland"
            className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform shadow-2xl"
          >
            {locale === 'de' ? 'Jetzt IPTV kaufen →' : 'Buy IPTV Now →'}
          </Link>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Animation Style */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}