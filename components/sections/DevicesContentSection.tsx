'use client';

import { useEffect, useRef, useState } from 'react';

// Device list with icons
const devices = [
  { name: 'Samsung TV', icon: '📺' },
  { name: 'LG Smart TV', icon: '📺' },
  { name: 'Apple TV', icon: '🍎' },
  { name: 'Android TV', icon: '📱' },
  { name: 'Fire TV', icon: '🔥' },
  { name: 'Chromecast', icon: '📡' },
  { name: 'MAG Box', icon: '📦' },
  { name: 'iPhone', icon: '📱' },
  { name: 'iPad', icon: '💻' },
  { name: 'Android', icon: '🤖' },
  { name: 'Windows PC', icon: '🖥️' },
  { name: 'MacBook', icon: '💻' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Roku', icon: '📺' },
  { name: 'Xbox', icon: '🎮' },
  { name: 'PlayStation', icon: '🎮' },
];

// Content brands list
const contentBrands = [
  { name: 'Netflix', icon: '🎬' },
  { name: 'Amazon Prime', icon: '📺' },
  { name: 'Disney+', icon: '🏰' },
  { name: 'HBO Max', icon: '🎭' },
  { name: 'Paramount+', icon: '⛰️' },
  { name: 'Apple TV+', icon: '🍎' },
  { name: 'BeIN Sports', icon: '⚽' },
  { name: 'Sky Sports', icon: '☁️' },
  { name: 'DAZN', icon: '🥊' },
  { name: 'ESPN', icon: '🏈' },
  { name: 'Eurosport', icon: '🏆' },
  { name: 'Discovery+', icon: '🌍' },
  { name: 'Peacock', icon: '🦚' },
  { name: 'Hulu', icon: '💚' },
  { name: 'Bundesliga', icon: '⚽' },
  { name: 'Champions League', icon: '🏆' },
  { name: 'Premier League', icon: '🦁' },
  { name: 'La Liga', icon: '🇪🇸' },
  { name: 'Serie A', icon: '🇮🇹' },
];

interface DevicesContentSectionProps {
  locale?: string;
}

export default function DevicesContentSection({ locale = 'de' }: DevicesContentSectionProps) {
  const devicesRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const content = {
    de: {
      title: 'Funktioniert überall. Hat alles.',
      subtitle: 'Kompatibel mit allen Geräten. Zugriff auf alle Premium-Inhalte.',
      devices: 'Unterstützte Geräte',
      content: 'Premium Inhalte'
    },
    en: {
      title: 'Works everywhere. Has everything.',
      subtitle: 'Compatible with all devices. Access to all premium content.',
      devices: 'Supported Devices',
      content: 'Premium Content'
    }
  };

  const t = content[locale as 'de' | 'en'];

  useEffect(() => {
    const animateScroll = () => {
      if (isPaused) return;

      // Animate devices (left to right)
      if (devicesRef.current) {
        const scrollElement = devicesRef.current;
        const scrollWidth = scrollElement.scrollWidth / 2;
        
        if (scrollElement.scrollLeft >= scrollWidth) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 0.5;
        }
      }

      // Animate content (right to left)
      if (contentRef.current) {
        const scrollElement = contentRef.current;
        const scrollWidth = scrollElement.scrollWidth / 2;
        
        if (scrollElement.scrollLeft <= 0) {
          scrollElement.scrollLeft = scrollWidth;
        } else {
          scrollElement.scrollLeft -= 0.5;
        }
      }
    };

    const animationId = setInterval(animateScroll, 20);
    return () => clearInterval(animationId);
  }, [isPaused]);

  const MarqueeCard = ({ item }: { item: { name: string; icon: string } }) => (
    <div className="flex-shrink-0 mx-1 sm:mx-2">
      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <span className="text-lg sm:text-2xl">{item.icon}</span>
          <span className="text-white/90 font-medium whitespace-nowrap text-xs sm:text-base">{item.name}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {t.title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Marquees Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Devices Marquee */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">
              {t.devices}
            </span>
          </div>
          <div 
            ref={devicesRef}
            className="flex overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex animate-marquee-ltr">
              {[...devices, ...devices].map((device, idx) => (
                <MarqueeCard key={`device-${idx}`} item={device} />
              ))}
            </div>
          </div>
        </div>

        {/* Content Brands Marquee */}
        <div>
          <div className="text-center mb-4">
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">
              {t.content}
            </span>
          </div>
          <div 
            ref={contentRef}
            className="flex overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex animate-marquee-rtl">
              {[...contentBrands, ...contentBrands].map((brand, idx) => (
                <MarqueeCard key={`brand-${idx}`} item={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
          <span className="text-yellow-400">✓</span>
          <span className="text-white font-medium text-xs sm:text-base">
            {locale === 'de' 
              ? 'Einmal zahlen, überall schauen'
              : 'Pay once, watch everywhere'}
          </span>
        </div>
      </div>

      {/* CSS Animation Fallback */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-ltr {
          animation: marquee-ltr 60s linear infinite;
        }
        
        .animate-marquee-rtl {
          animation: marquee-rtl 60s linear infinite;
        }
        
        ${isPaused ? `
          .animate-marquee-ltr,
          .animate-marquee-rtl {
            animation-play-state: paused;
          }
        ` : ''}
      `}</style>
    </section>
  );
}