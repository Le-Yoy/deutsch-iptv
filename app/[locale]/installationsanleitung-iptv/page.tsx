import HowItWorksSection from '@/components/sections/HowItWorksSection';
import Footer from '@/components/layout/Footer';


export default async function InstallationGuidePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  const content = {
    de: {
      hero: {
        title: 'IPTV Installation Anleitung',
        subtitle: 'Schritt-für-Schritt Anleitung für die Installation auf allen Geräten',
        badge: 'Einfache Installation'
      },
      devices: [
        {
          icon: '📱',
          name: 'Android & iOS',
          description: 'Installation auf Smartphone und Tablet'
        },
        {
          icon: '📺',
          name: 'Smart TV',
          description: 'Samsung, LG, Android TV'
        },
        {
          icon: '🎮',
          name: 'Amazon Fire TV',
          description: 'Fire Stick & Fire TV Cube'
        },
        {
          icon: '💻',
          name: 'PC & Mac',
          description: 'Windows, macOS, Linux'
        }
      ]
    },
    en: {
      hero: {
        title: 'IPTV Installation Guide',
        subtitle: 'Step-by-step guide for installation on all devices',
        badge: 'Easy Installation'
      },
      devices: [
        {
          icon: '📱',
          name: 'Android & iOS',
          description: 'Installation on smartphone and tablet'
        },
        {
          icon: '📺',
          name: 'Smart TV',
          description: 'Samsung, LG, Android TV'
        },
        {
          icon: '🎮',
          name: 'Amazon Fire TV',
          description: 'Fire Stick & Fire TV Cube'
        },
        {
          icon: '💻',
          name: 'PC & Mac',
          description: 'Windows, macOS, Linux'
        }
      ]
    }
  };

  const t = content[locale as 'de' | 'en'];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/20 text-green-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>

          {/* Devices Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {t.devices.map((device, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="text-4xl mb-2">{device.icon}</div>
                <h3 className="text-white font-bold text-sm mb-1">{device.name}</h3>
                <p className="text-gray-400 text-xs">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (reuse existing component) */}
      <HowItWorksSection locale={locale} />

      <Footer locale={locale} />
    </>
  );
}