import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default async function ResellerPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  const content = {
    de: {
      hero: {
        badge: 'Wiederverkäufer Programm',
        title: 'Das weltweit beste IPTV Reseller Programm',
        subtitle: 'Verdienen Sie ganz einfach Geld durch den Verkauf eines superschnellen, supersicheren und äußerst zuverlässigen IPTV Dienstes'
      },
      features: [
        {
          icon: '📊',
          title: 'Reseller Dashboard',
          description: 'Eine einfache und unkomplizierte Benutzeroberfläche, die unseren Wiederverkäufern das beste Erlebnis bietet'
        },
        {
          icon: '🌐',
          title: 'Benutzerdefiniertes DNS',
          description: 'Passen Sie Ihre DNS-URL so an, dass sie zu Ihrem Markennamen passt, um die volle Kontrolle über Ihre Konten zu haben'
        },
        {
          icon: '🎁',
          title: 'Kostenlose Testkonten',
          description: 'Unbegrenzte Generierung kostenloser IPTV Testversionen für Ihre potenziellen Kunden'
        }
      ],
      credits: {
        title: 'Wie funktioniert das IPTV Panel?',
        subtitle: 'Berechnung der Kreditpunkte',
        items: [
          '1 Monatsabonnement = 1 Kreditpunkt',
          '3 Monatsabonnement = 3 Kreditpunkte',
          '6 Monatsabonnement = 6 Kreditpunkte',
          '1 Jahresabonnement = 12 Kreditpunkte'
        ]
      },
      packages: [
        {
          credits: '120 Leistungspunkte',
          price: '320€',
          popular: false
        },
        {
          credits: '240 Leistungspunkte',
          price: '610€',
          popular: true
        },
        {
          credits: '480 Leistungspunkte',
          price: '1.100€',
          popular: false
        },
        {
          credits: '600 Leistungspunkte',
          price: '1.290€',
          popular: false
        }
      ],
      cta: 'Jetzt Wiederverkäufer werden'
    },
    en: {
      hero: {
        badge: 'Reseller Program',
        title: 'The World\'s Best IPTV Reseller Program',
        subtitle: 'Easily earn money by selling a super-fast, super-secure, and highly reliable IPTV service'
      },
      features: [
        {
          icon: '📊',
          title: 'Reseller Dashboard',
          description: 'A simple and straightforward interface that provides our resellers with the best experience'
        },
        {
          icon: '🌐',
          title: 'Custom DNS',
          description: 'Customize your DNS URL to match your brand name for full control over your accounts'
        },
        {
          icon: '🎁',
          title: 'Free Trial Accounts',
          description: 'Unlimited generation of free IPTV trials for your potential customers'
        }
      ],
      credits: {
        title: 'How Does the IPTV Panel Work?',
        subtitle: 'Credit Points Calculation',
        items: [
          '1 Month subscription = 1 credit point',
          '3 Month subscription = 3 credit points',
          '6 Month subscription = 6 credit points',
          '1 Year subscription = 12 credit points'
        ]
      },
      packages: [
        {
          credits: '120 Credits',
          price: '€320',
          popular: false
        },
        {
          credits: '240 Credits',
          price: '€610',
          popular: true
        },
        {
          credits: '480 Credits',
          price: '€1,100',
          popular: false
        },
        {
          credits: '600 Credits',
          price: '€1,290',
          popular: false
        }
      ],
      cta: 'Become a Reseller Now'
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-purple-500/20 text-purple-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-6 border border-white/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {t.credits.title}
          </h2>
          <p className="text-xl text-yellow-400 font-semibold mb-8">
            {t.credits.subtitle}
          </p>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {t.credits.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-b from-white/5 to-transparent rounded-xl p-6 border ${
                  pkg.popular ? 'border-yellow-500' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    BELIEBT
                  </span>
                )}
                <h3 className="text-2xl font-black text-white mb-2">{pkg.credits}</h3>
                <p className="text-4xl font-black text-yellow-400 mb-6">{pkg.price}</p>
                <Link
                  href="https://wa.me/212608677633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold py-3 rounded-xl text-center hover:scale-105 transition-transform"
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}