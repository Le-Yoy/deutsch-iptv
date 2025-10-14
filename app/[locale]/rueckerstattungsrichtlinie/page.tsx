import Footer from '@/components/layout/Footer';

export default async function RefundPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const isGerman = locale === 'de';

  return (
    <>
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {isGerman ? 'Rückerstattungsrichtlinie von DEUTSCH-IPTV' : 'Refund Policy'}
          </h1>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                {isGerman 
                  ? 'Bitte lesen Sie unsere Rückerstattungsrichtlinie sorgfältig durch, bevor Sie einen Kauf tätigen. Durch die Nutzung unserer Dienste stimmen Sie den folgenden Bedingungen zu.'
                  : 'Please read our refund policy carefully before making a purchase. By using our services, you agree to the following terms.'}
              </p>
            </div>

            <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>⚠️</span>
                {isGerman ? 'Rückerstattung nach 7 Tagen nicht möglich' : '7-Day Refund Window'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Nach Abschluss eines Kaufs bieten wir eine Rückerstattung nur innerhalb von 7 Tagen nach der Zahlung an. Nach Ablauf dieser Frist können wir keine Erstattungen gewähren, unabhängig von den Gründen.'
                  : 'After completing a purchase, we offer refunds only within 7 days of payment. After this period, we cannot grant refunds regardless of the reasons.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? 'Haftungsausschluss bei Nutzung auf mehreren Geräten' : 'Multi-Device Usage Disclaimer'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Unsere IPTV-Linien sind für die Nutzung auf einem einzigen Gerät vorgesehen. Die Verwendung auf mehreren Geräten gleichzeitig kann zu einer Sperrung des Dienstes führen. In solchen Fällen erfolgt keine Rückerstattung.'
                  : 'Our IPTV lines are intended for use on a single device. Using on multiple devices simultaneously may result in service suspension. No refunds will be issued in such cases.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? 'Keine Verantwortung für ungeeignete Geräte' : 'No Responsibility for Unsuitable Devices'}
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>• {isGerman ? 'Wir übernehmen keine Verantwortung für Probleme durch ungeeignete oder inkompatible Geräte' : 'We assume no responsibility for issues caused by unsuitable or incompatible devices'}</li>
                <li>• {isGerman ? 'Eine stabile Internetverbindung ist erforderlich' : 'A stable internet connection is required'}</li>
                <li>• {isGerman ? 'Keine Erstattung bei schlechter WLAN-Verbindung' : 'No refunds for poor WiFi connection issues'}</li>
              </ul>
            </div>

            <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? 'Technischer Support' : 'Technical Support'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wir bieten technischen Support, um sicherzustellen, dass unser Dienst reibungslos funktioniert. Bitte kontaktieren Sie uns bei Problemen, bevor Sie eine Rückerstattung beantragen.'
                  : 'We provide technical support to ensure our service works smoothly. Please contact us if you experience issues before requesting a refund.'}
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {isGerman ? 'Kontakt' : 'Contact'}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-yellow-400">WhatsApp:</span> +212608677633</li>
                <li>• <span className="text-yellow-400">Telegram:</span> @deutschiptv</li>
                <li>• <span className="text-yellow-400">Email:</span> contact@deutsch-iptv.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}