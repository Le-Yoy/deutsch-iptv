'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CheckoutModal from '@/components/CheckoutModal';
import { trackLead, getDeviceType } from '@/lib/analytics';


interface Package {
  name: string;
  duration: string;
  basePrice: number;
}

const packages: Package[] = [
  { name: 'SILBER-PAKET', duration: '1 MONAT', basePrice: 14.99 },
  { name: 'GOLD-PAKET', duration: '3 MONATE', basePrice: 34.99 },
  { name: 'PLATINUM-PAKET', duration: '6 MONATE', basePrice: 44.99 },
  { name: 'DIAMANT-PAKET', duration: '12 MONATE', basePrice: 64.99 }
];

// Correct pricing matrix
const pricingMatrix: Record<number, Record<number, number>> = {
  14.99: { 1: 14.99, 2: 24.99, 3: 34.99, 4: 44.99, 5: 54.99 },
  34.99: { 1: 34.99, 2: 54.99, 3: 74.99, 4: 94.99, 5: 114.99 },
  44.99: { 1: 44.99, 2: 69.99, 3: 110.00, 4: 142.50, 5: 175.00 },
  64.99: { 1: 64.99, 2: 124.99, 3: 180.00, 4: 237.50, 5: 295.00 }
};

// Dynamic recommendations based on device count
const featuredRecommendations: Record<number, { packageIndex: number; badge: { de: string; en: string } }> = {
  1: { 
    packageIndex: 3, // DIAMANT
    badge: { 
      de: '👑 BESTER JAHRESPREIS',
      en: '👑 BEST YEARLY VALUE'
    }
  },
  2: { 
    packageIndex: 2, // PLATINUM
    badge: { 
      de: '💑 PERFEKT FÜR PAARE',
      en: '💑 PERFECT FOR COUPLES'
    }
  },
  3: { 
    packageIndex: 2, // PLATINUM
    badge: { 
      de: '👨‍👩‍👧 FAMILIENEMPFEHLUNG',
      en: '👨‍👩‍👧 FAMILY CHOICE'
    }
  },
  4: { 
    packageIndex: 1, // GOLD
    badge: { 
      de: '🏠 GANZES HAUS VERSORGT',
      en: '🏠 WHOLE HOME COVERED'
    }
  },
  5: { 
    packageIndex: 3, // DIAMANT
    badge: { 
      de: '🎯 MAXIMALER WERT',
      en: '🎯 MAXIMUM VALUE'
    }
  }
};

// Dynamic content based on devices and package duration
const getChannelCount = (devices: number, duration: string): string => {
  const baseChannels = 26000;
  const deviceBonus = (devices - 1) * 3500;
  const durationBonus = duration === '12 MONATE' ? 15000 : 
                        duration === '6 MONATE' ? 8000 : 
                        duration === '3 MONATE' ? 4000 : 0;
  
  const total = baseChannels + deviceBonus + durationBonus;
  return `+${(total / 1000).toFixed(0)}.000`;
};

const getVODCount = (devices: number, duration: string): string => {
  const baseVOD = 190000;
  const deviceBonus = (devices - 1) * 15000;
  const durationBonus = duration === '12 MONATE' ? 50000 : 
                        duration === '6 MONATE' ? 30000 : 
                        duration === '3 MONATE' ? 15000 : 0;
  
  const total = baseVOD + deviceBonus + durationBonus;
  return `+${(total / 1000).toFixed(0)}.000`;
};

interface PackagesSectionProps {
  locale?: string;
}

export default function PackagesSection({ locale = 'de' }: PackagesSectionProps) {
  const router = useRouter();
  const [selectedDevices, setSelectedDevices] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({ name: '', price: '' });

const handlePackageClick = (name: string, price: string, duration: string) => {
  // Track the lead
  trackLead({
    packageName: `${name} - ${duration} - ${selectedDevices} ${selectedDevices === 1 ? 'Gerät' : 'Geräte'}`,
    packagePrice: price,
    location: 'packages_section',
    deviceType: getDeviceType(),
    pageUrl: typeof window !== 'undefined' ? window.location.href : ''
  });

  // Navigate with simple params that survive language switch
  router.push(`/checkout?package=${encodeURIComponent(name)}&duration=${encodeURIComponent(duration)}&devices=${selectedDevices}&price=${encodeURIComponent(price)}`);
};

  const getPrice = (basePrice: number): string => {
    const price = pricingMatrix[basePrice]?.[selectedDevices] || basePrice;
    return price.toFixed(2).replace('.', ',');
  };

  const getFeaturedPackageIndex = (): number => {
    return featuredRecommendations[selectedDevices]?.packageIndex ?? -1;
  };

  const getFeaturedBadge = (): string => {
    const badge = featuredRecommendations[selectedDevices]?.badge;
    return badge ? badge[locale as 'de' | 'en'] : '';
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {locale === 'de' ? 'ENTDECKEN SIE UNSERE IPTV PREISE' : 'DISCOVER OUR IPTV PRICES'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {locale === 'de' 
              ? `Optimiert für ${selectedDevices} ${selectedDevices === 1 ? 'Gerät' : 'Geräte'} - Die besten IPTV Angebote in Deutschland`
              : `Optimized for ${selectedDevices} ${selectedDevices === 1 ? 'device' : 'devices'} - The best IPTV offers in Germany`}
          </p>
        </div>

        {/* Device Tabs - Responsive Wrapping */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="inline-flex flex-wrap justify-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-700 gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedDevices(num)}
                className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedDevices === num
                    ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                aria-label={`${num} ${num === 1 ? 'Gerät' : 'Geräte'}`}
              >
                {num} {num === 1 ? 'GERÄT' : 'GERÄTE'}
              </button>
            ))}
          </div>
        </div>

        {/* Package Cards - Perfect Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packages.map((pkg, idx) => {
            const price = getPrice(pkg.basePrice);
            const isFeatured = getFeaturedPackageIndex() === idx;
            const channelCount = getChannelCount(selectedDevices, pkg.duration);
            const vodCount = getVODCount(selectedDevices, pkg.duration);
            
            return (
              <div
                key={idx}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 ${
                  isFeatured 
                    ? 'border-yellow-400 shadow-yellow-400/20 shadow-lg ring-2 ring-yellow-400/50' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-red-600 to-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
                      {getFeaturedBadge()}
                    </span>
                  </div>
                )}

                {/* Package Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{pkg.duration}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                    {price}€
                  </span>
                  {isFeatured && selectedDevices === 1 && pkg.duration === '12 MONATE' && (
                    <p className="text-xs text-green-400 mt-1">
                      {locale === 'de' ? 'Spare 47% gegenüber Monatspreis' : 'Save 47% vs monthly'}
                    </p>
                  )}
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => handlePackageClick(pkg.name, `${price}€`, pkg.duration)}
                  className={`w-full py-2.5 sm:py-3 font-bold rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base ${
                    isFeatured 
                      ? 'bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white hover:shadow-2xl'
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white hover:shadow-xl'
                  }`}
                  aria-label={`${pkg.name} für ${price}€ kaufen`}
                >
                  {isFeatured && locale === 'de' ? 'JETZT ZUSCHLAGEN' : isFeatured ? 'GET IT NOW' : 'IPTV kaufen'}
                </button>

                {/* Dynamic Features */}
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold">{channelCount} Kanäle</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold">{vodCount} VOD</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300">HD/4K/8K IPTV</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300">
                      {selectedDevices > 1 
                        ? `${selectedDevices} ${locale === 'de' ? 'Geräte gleichzeitig' : 'devices simultaneously'}`
                        : locale === 'de' ? 'Alle Geräte' : 'All devices'}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300">PPV-Kanäle</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300">{locale === 'de' ? 'Kein Vertrag' : 'No contract'}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mt-0.5 mr-2 text-sm">✓</span>
                    <span className="text-xs sm:text-sm text-gray-300">24/7 Support</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
                  <div className="flex justify-center items-center gap-2 opacity-60">
                    <span className="text-xs text-gray-400">💳 Visa • PayPal • Crypto</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section with Dynamic Message */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            ✓ {locale === 'de' ? 'Keine Vertragsbindung' : 'No contract'} 
            ✓ {locale === 'de' ? 'Sofort-Aktivierung' : 'Instant activation'} 
            ✓ {locale === 'de' ? '24/7 deutscher Support' : '24/7 German support'}
          </p>
          {selectedDevices > 2 && (
            <p className="text-yellow-400 text-sm mt-2 font-medium">
              {locale === 'de' 
                ? `💡 Tipp: Bei ${selectedDevices} Geräten empfehlen wir ${featuredRecommendations[selectedDevices].packageIndex === 3 ? 'das Jahresabo' : 'einen längeren Zeitraum'} für maximale Ersparnis`
                : `💡 Tip: For ${selectedDevices} devices we recommend ${featuredRecommendations[selectedDevices].packageIndex === 3 ? 'the yearly plan' : 'a longer period'} for maximum savings`}
            </p>
          )}
        </div>
      </div>

      {/* Checkout Modal - KEPT FOR BACKUP (not used) */}
      {modalOpen && (
        <CheckoutModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
        />
      )}
    </section>
  );
}