import Footer from '@/components/layout/Footer';

export default async function ImpressumPage({
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
            {isGerman ? 'Impressum' : 'Legal Notice'}
          </h1>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  {isGerman ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
                </h2>
                <p className="font-semibold text-yellow-400">Deutsch-IPTV.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isGerman ? 'Kontakt' : 'Contact'}
                </h3>
                <ul className="space-y-1">
                  <li>WhatsApp: +212 608 677 633</li>
                  <li>Telegram: @deutschiptv</li>
                  <li>E-Mail: contact@deutsch-iptv.com</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isGerman ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 Abs. 2 RStV'}
                </h3>
                <p>Deutsch-IPTV.com</p>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {isGerman ? 'Haftungsausschluss' : 'Disclaimer'}
                </h3>
                <p className="text-sm leading-relaxed">
                  {isGerman 
                    ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                    : 'The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}