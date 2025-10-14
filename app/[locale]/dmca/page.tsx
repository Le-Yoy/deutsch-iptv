import Footer from '@/components/layout/Footer';

export default async function DMCAPage({
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
            {isGerman ? 'DMCA von IPTV Deutschland' : 'DMCA Policy'}
          </h1>
          <p className="text-gray-400 mb-8">
            {isGerman ? 'Gültig ab: 17. Januar 2025' : 'Effective Date: January 17, 2025'}
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-8">
              <p className="text-gray-300 leading-relaxed">
                {isGerman 
                  ? 'Diese Digital Millennium Copyright Act (DMCA) Richtlinie gilt für die Website https://deutsch-iptv.com/. Wir respektieren die geistigen Eigentumsrechte anderer und verpflichten uns zur Einhaltung der Urheberrechtsgesetze, einschließlich des DMCA.'
                  : 'This Digital Millennium Copyright Act (DMCA) Policy applies to the website https://deutsch-iptv.com/. We respect the intellectual property rights of others and are committed to complying with copyright laws, including the DMCA.'}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {isGerman ? '1. Meldung einer behaupteten Rechtsverletzung' : '1. Notification of Claimed Infringement'}
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <p className="text-gray-300 mb-4">
                {isGerman 
                  ? 'Wenn Sie ein Urheberrechtsinhaber sind oder berechtigt sind, in dessen Namen zu handeln, können Sie eine Meldung über eine behauptete Rechtsverletzung gemäß dem DMCA einreichen. Ihre Meldung muss folgende Informationen enthalten:'
                  : 'If you are a copyright owner or authorized to act on behalf of one, you may submit a notification of claimed infringement under the DMCA. Your notification must include the following information:'}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• {isGerman ? 'Identifizierung des urheberrechtlich geschützten Werks' : 'Identification of the copyrighted work'}</li>
                <li>• {isGerman ? 'Identifizierung des rechtsverletzenden Materials und dessen Standort' : 'Identification of the infringing material and its location'}</li>
                <li>• {isGerman ? 'Ihre Kontaktinformationen' : 'Your contact information'}</li>
                <li>• {isGerman ? 'Eine Erklärung über Ihren guten Glauben' : 'A good faith statement'}</li>
                <li>• {isGerman ? 'Ihre physische oder elektronische Unterschrift' : 'Your physical or electronic signature'}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {isGerman ? '2. Gegenmitteilung' : '2. Counter-Notification'}
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wenn Sie glauben, dass Inhalte versehentlich oder durch Fehlidentifizierung entfernt wurden, können Sie eine Gegenmitteilung einreichen.'
                  : 'If you believe that content was removed by mistake or misidentification, you may submit a counter-notification.'}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">
              {isGerman ? '3. Wiederholte Rechtsverletzer' : '3. Repeat Infringers'}
            </h2>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6">
              <p className="text-gray-300">
                {isGerman 
                  ? 'Wir behalten uns das Recht vor, Konten zu kündigen oder den Zugang für Nutzer zu sperren, die wiederholt gegen Urheberrechte verstoßen.'
                  : 'We reserve the right to terminate accounts or block access to users who are found to be repeat infringers of copyright laws.'}
              </p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">
                {isGerman ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </h3>
              <p className="text-gray-300 mb-2">
                {isGerman ? 'E-Mail:' : 'Email:'} <a href="mailto:contact@deutsch-iptv.com" className="text-yellow-400 hover:text-yellow-300">contact@deutsch-iptv.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}