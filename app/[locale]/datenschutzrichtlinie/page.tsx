import Footer from '@/components/layout/Footer';

export default async function PrivacyPage({
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
            {isGerman ? 'Datenschutzerklärung für Deutsch-IPTV.com' : 'Privacy Policy'}
          </h1>
          <p className="text-gray-400 mb-8">
            {isGerman ? 'Gültigkeitsdatum: 17. Januar 2025' : 'Effective Date: January 17, 2025'}
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                {isGerman 
                  ? 'Wir schätzen Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Informationen sammeln, nutzen und schützen.'
                  : 'We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect information.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '1. Welche Informationen wir sammeln' : '1. Information We Collect'}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    {isGerman ? 'Persönliche Informationen:' : 'Personal Information:'}
                  </h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• {isGerman ? 'Name' : 'Name'}</li>
                    <li>• {isGerman ? 'E-Mail-Adresse' : 'Email address'}</li>
                    <li>• {isGerman ? 'Kontaktdaten (Telefon, WhatsApp, Telegram)' : 'Contact details (Phone, WhatsApp, Telegram)'}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    {isGerman ? 'Nicht-persönliche Informationen:' : 'Non-Personal Information:'}
                  </h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• {isGerman ? 'IP-Adresse' : 'IP address'}</li>
                    <li>• {isGerman ? 'Browsertyp und -version' : 'Browser type and version'}</li>
                    <li>• {isGerman ? 'Besuchte Seiten' : 'Pages visited'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '2. Wie wir Ihre Informationen verwenden' : '2. How We Use Your Information'}
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>• {isGerman ? 'Zur Bereitstellung von Diensten und Verwaltung Ihrer Abonnements' : 'To provide services and manage your subscriptions'}</li>
                <li>• {isGerman ? 'Zur Verbesserung der Nutzererfahrung' : 'To improve user experience'}</li>
                <li>• {isGerman ? 'Für Kommunikation und Updates' : 'For communication and updates'}</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '3. Weitergabe Ihrer Informationen' : '3. Sharing Your Information'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wir verkaufen, vermieten oder tauschen Ihre persönlichen Informationen nicht an Dritte. Wir können Ihre Informationen nur an Dienstleister weitergeben, die uns bei der Bereitstellung unserer Dienste unterstützen.'
                  : 'We do not sell, rent, or trade your personal information to third parties. We may share your information only with service providers who help us deliver our services.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '4. Sicherheit Ihrer Informationen' : '4. Security of Your Information'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wir ergreifen angemessene Maßnahmen, um Ihre persönlichen Informationen vor unbefugtem Zugriff zu schützen. Dennoch ist keine Datenübertragung über das Internet vollkommen sicher.'
                  : 'We take reasonable measures to protect your personal information from unauthorized access. However, no data transmission over the internet is completely secure.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '5. Ihre Rechte' : '5. Your Rights'}
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>• {isGerman ? 'Zugriff und Berichtigung Ihrer Daten' : 'Access and correction of your data'}</li>
                <li>• {isGerman ? 'Löschung Ihrer persönlichen Daten' : 'Deletion of your personal data'}</li>
                <li>• {isGerman ? 'Abmeldung von Werbemitteilungen' : 'Opt-out of marketing communications'}</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '6. Cookies und Tracking-Technologien' : '6. Cookies and Tracking Technologies'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wir verwenden Cookies und ähnliche Technologien, um Ihr Surferlebnis zu verbessern. Sie können Ihre Cookie-Einstellungen über Ihre Browsereinstellungen verwalten.'
                  : 'We use cookies and similar technologies to enhance your browsing experience. You can manage cookie settings through your browser settings.'}
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {isGerman ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-yellow-400">WhatsApp:</span> +212608677633</li>
                <li>• <span className="text-yellow-400">Telegram:</span> @deutschiptv</li>
                <li>• <span className="text-yellow-400">E-Mail:</span> contact@deutsch-iptv.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}