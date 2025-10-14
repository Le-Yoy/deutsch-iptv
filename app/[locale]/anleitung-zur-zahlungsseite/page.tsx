import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default async function PaymentPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  return (
    <>
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-black text-white mb-6 text-center">
            Wie bezahlen?
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Kontaktieren Sie uns über WhatsApp oder Telegram
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              href="https://wa.me/212608677633"
              target="_blank"
              className="bg-green-900 rounded-xl p-8 text-center hover:bg-green-800"
            >
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-green-400">+212 608 677 633</p>
            </Link>

            <Link
              href="https://t.me/deutschiptv"
              target="_blank"
              className="bg-blue-900 rounded-xl p-8 text-center hover:bg-blue-800"
            >
              <div className="text-6xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
              <p className="text-blue-400">@deutschiptv</p>
            </Link>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Zahlungsmethoden</h2>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <div className="text-4xl mb-2">💳</div>
                <p className="text-white text-sm">PayPal</p>
              </div>
              <div>
                <div className="text-4xl mb-2">💳</div>
                <p className="text-white text-sm">Karte</p>
              </div>
              <div>
                <div className="text-4xl mb-2">₿</div>
                <p className="text-white text-sm">Crypto</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🏦</div>
                <p className="text-white text-sm">Bank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}