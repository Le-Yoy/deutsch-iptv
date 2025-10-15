'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackLead, getDeviceType } from '@/lib/analytics';

const heroSlides = [
  {
    id: 'bundesliga-deutschland',
    desktop: '/assets/hero/bundesliga-desktop.webp',
    mobile: '/assets/hero/bundesliga-mobile.webp',
    content: {
      de: {
        headline: 'IPTV Deutschland - Bundesliga Live',
        subheadline: 'Alle 306 Spiele + DFB-Pokal in 4K/8K',
        description: 'Der beste deutsche IPTV Anbieter. Bayern, BVB, Leipzig - jedes Spiel, jedes Tor. Sky Sport und DAZN inklusive.',
        cta: 'IPTV kaufen ab 14,99€',
        badge: '⚽ #1 IPTV in Deutschland'
      },
      en: {
        headline: 'German IPTV - Bundesliga Live',
        subheadline: 'All 306 matches + DFB Cup in 4K/8K',
        description: 'The best German IPTV provider. Bayern, BVB, Leipzig - every match, every goal. Sky Sport and DAZN included.',
        cta: 'Buy IPTV from €14.99',
        badge: '⚽ #1 IPTV in Germany'
      }
    },
    features: ['Bundesliga', 'Sky Sport', 'DAZN', '4K/8K']
  },
  {
    id: 'entertainment-streaming',
    desktop: '/assets/hero/entertainment.webp',
    mobile: '/assets/hero/entertainment-mobile.webp',
    content: {
      de: {
        headline: 'Deutsch IPTV mit Netflix & Sky',
        subheadline: '26.000+ Kanäle, 190.000+ Filme & Serien',
        description: 'IPTV kaufen mit allen Streaming-Diensten. Netflix, Sky Cinema, Disney+, Amazon Prime - alles in einem Abo.',
        cta: 'Jetzt IPTV Deutschland testen',
        badge: '🎬 Beste IPTV Anbieter 2025'
      },
      en: {
        headline: 'German IPTV with Netflix & Sky',
        subheadline: '26,000+ channels, 190,000+ movies & series',
        description: 'Buy IPTV with all streaming services. Netflix, Sky Cinema, Disney+, Amazon Prime - all in one subscription.',
        cta: 'Try German IPTV now',
        badge: '🎬 Best IPTV Provider 2025'
      }
    },
    features: ['Netflix 4K', 'Sky Cinema', 'Disney+', 'Prime Video']
  },
  {
    id: 'champions-league',
    desktop: '/assets/sports/football/champions-league.webp',
    mobile: '/assets/sports/football/champions-mobile.webp',
    content: {
      de: {
        headline: 'IPTV Deutsch - Champions League',
        subheadline: 'Alle Spiele deutscher Teams in Europa',
        description: 'Champions League, Europa League, Conference League. Erlebe deutschen Fußball auf höchstem Niveau in Ultra HD.',
        cta: 'IPTV Anbieter wählen',
        badge: '🏆 Sky & DAZN inklusive'
      },
      en: {
        headline: 'German IPTV - Champions League',
        subheadline: 'All German teams in Europe',
        description: 'Champions League, Europa League, Conference League. Experience German football at the highest level in Ultra HD.',
        cta: 'Choose IPTV provider',
        badge: '🏆 Sky & DAZN included'
      }
    },
    features: ['Champions League', 'Europa League', 'Conference', 'Ultra HD']
  }
];

interface HeroSectionProps {
  locale?: string;
}

export default function HeroSection({ locale = 'de' }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const scrollToPackages = () => {
    trackLead({
      packageName: 'Hero CTA Click',
      packagePrice: 'N/A',
      location: 'hero_section',
      deviceType: getDeviceType(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : ''
    });
    
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      const sectionTop = packagesSection.offsetTop;
      const sectionHeight = packagesSection.offsetHeight;
      const viewportHeight = window.innerHeight;
      const offset = sectionTop + (sectionHeight / 2) - (viewportHeight / 2);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return <div className="h-screen bg-gradient-to-br from-gray-900 to-black" />;
  }

  const slide = heroSlides[currentSlide];
  const content = slide.content[locale as 'de' | 'en'] || slide.content.de;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={slide.mobile} />
          <Image
            src={slide.desktop}
            alt={`IPTV Deutschland - ${slide.id}`}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            quality={75}
            sizes="(max-width: 768px) 100vw, 100vw"
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content - Left Aligned Desktop, Contained Mobile */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
          <div className="max-w-[60%] md:max-w-2xl lg:max-w-3xl">
            {/* Badge */}
            <div className="inline-block mb-4 md:mb-6">
              <span className="text-yellow-400 font-bold text-xs md:text-sm bg-black/70 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                {content.badge}
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 text-white leading-tight">
              {content.headline}
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-400 font-bold mb-3 md:mb-4">
              {content.subheadline}
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <button
                onClick={scrollToPackages}
                className="group relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl text-sm md:text-base lg:text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{content.cta}</span>
                <svg 
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <Link
                href="/iptv-preise-angebote-deutschland"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                📺 <span className="ml-2">Alle Pakete</span>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {slide.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-black/60 backdrop-blur-sm rounded-lg px-2 md:px-3 py-1.5 md:py-2 border border-white/20 hover:border-white/40 transition-colors"
                >
                  <span className="text-xs md:text-sm text-white/90 flex items-center gap-1.5">
                    <span className="text-green-400 text-sm">✓</span>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSlideChange(idx)}
            aria-label={`Go to slide ${idx + 1}: ${heroSlides[idx].id}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-10 md:w-12 bg-gradient-to-r from-red-600 to-yellow-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}