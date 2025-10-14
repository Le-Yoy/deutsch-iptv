import Footer from '@/components/layout/Footer';

export default async function TermsPage({
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
            {isGerman ? 'Servicebedingungen von DEUTSCH IPTV' : 'Terms of Service'}
          </h1>
          <p className="text-gray-400 mb-8">
            {isGerman ? 'Gültigkeitsdatum: 17. Januar 2025' : 'Effective Date: January 17, 2025'}
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                {isGerman 
                  ? 'Willkommen bei https://deutsch-iptv.com/. Durch den Zugriff auf oder die Nutzung unserer Website oder Dienste erklären Sie sich damit einverstanden, diese Nutzungsbedingungen einzuhalten. Bitte lesen Sie diese Bedingungen sorgfältig durch.'
                  : 'Welcome to https://deutsch-iptv.com/. By accessing or using our website or services, you agree to comply with these Terms of Service. Please read these terms carefully.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '1. Berechtigung' : '1. Eligibility'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Sie müssen mindestens 18 Jahre alt sein, um unsere Dienste nutzen zu können. Durch die Nutzung unserer Dienste erklären und garantieren Sie, dass Sie die Berechtigungskriterien erfüllen.'
                  : 'You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet the eligibility requirements.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '2. Nutzung der Dienste' : '2. Use of Services'}
              </h2>
              <p className="text-gray-300 mb-4">
                {isGerman ? 'Verbotene Aktivitäten - Sie verpflichten sich, Folgendes zu unterlassen:' : 'Prohibited Activities - You agree not to:'}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• {isGerman ? 'Nutzung unserer Dienste für illegale Zwecke' : 'Use our services for illegal purposes'}</li>
                <li>• {isGerman ? 'Teilnahme an Aktivitäten, die den Betrieb der Dienste stören' : 'Engage in activities that disrupt service operations'}</li>
                <li>• {isGerman ? 'Versuch, unbefugten Zugriff auf unsere Systeme zu erlangen' : 'Attempt unauthorized access to our systems'}</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '3. Geistiges Eigentum' : '3. Intellectual Property'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Alle Inhalte, einschließlich, aber nicht beschränkt auf Texte, Grafiken, Logos und Software, sind Eigentum von deutsch-iptv.com oder seiner Lizenzgeber und durch Urheberrechte geschützt.'
                  : 'All content, including but not limited to text, graphics, logos, and software, is the property of deutsch-iptv.com or its licensors and protected by copyright laws.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '4. Zahlungen und Abonnements' : '4. Payments and Subscriptions'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Alle Preise für unsere Dienste sind auf unserer Website angegeben und können sich ändern. Bitte überprüfen Sie unsere Rückerstattungsrichtlinie.'
                  : 'All prices for our services are listed on our website and subject to change. Please review our refund policy.'}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-3">
                {isGerman ? '5. Haftungsbeschränkung' : '5. Limitation of Liability'}
              </h2>
              <p className="text-gray-300">
                {isGerman 
                  ? 'Im größtmöglichen gesetzlich zulässigen Umfang haften wir nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus der Nutzung unserer Dienste ergeben.'
                  : 'To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.'}
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {isGerman ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-yellow-400">E-Mail:</span> contact@deutsch-iptv.com</li>
                <li>• <span className="text-yellow-400">WhatsApp:</span> +212608677633</li>
                <li>• <span className="text-yellow-400">Telegram:</span> @deutschiptv</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}