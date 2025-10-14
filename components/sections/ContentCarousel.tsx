'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ContentCarouselProps {
  locale?: string;
}

// Content organized by row with only existing images
const carouselRows = [
  {
    id: 'german',
    title: { de: '🇩🇪 Deutsche Serien & Originals', en: '🇩🇪 German Series & Originals' },
    direction: 'ltr' as const,
    posters: [
      { id: 'das-boot', title: 'Das Boot', path: '/assets/movie_posters/countries/germany/das boot germany.webp', platform: 'German TV' },
      { id: 'dogs-berlin', title: 'Dogs of Berlin', path: '/assets/movie_posters/countries/germany/dogs berlin- germany.webp', platform: 'Netflix' },
      { id: 'wave', title: 'We Are the Wave', path: '/assets/movie_posters/countries/germany/we are the wave- germany.webp', platform: 'Netflix' },
    ]
  },
  {
    id: 'blockbusters',
    title: { de: '🎬 Blockbuster Streaming Hits', en: '🎬 Blockbuster Streaming Hits' },
    direction: 'rtl' as const,
    posters: [
      { id: 'squid-game', title: 'Squid Game', path: '/assets/movie_posters/general/netflix/squid game netflix.webp', platform: 'Netflix' },
      { id: 'dragons', title: 'House of Dragons', path: '/assets/movie_posters/general/hbo/house of dragons hbo.webp', platform: 'HBO' },
      { id: 'mandalorian', title: 'The Mandalorian', path: '/assets/movie_posters/general/disney/mandalorian disney.webp', platform: 'Disney+' },
      { id: 'boys', title: 'The Boys', path: '/assets/movie_posters/general/amazon/the boys prime video.webp', platform: 'Prime' },
      { id: 'money-heist', title: 'Money Heist', path: '/assets/movie_posters/general/netflix/money heist netflix.webp', platform: 'Netflix' },
      { id: 'last-us', title: 'The Last of Us', path: '/assets/movie_posters/general/hbo/last of us hbo.webp', platform: 'HBO' },
    ]
  },
  {
    id: 'prestige',
    title: { de: '👑 Premium & Prestige Serien', en: '👑 Premium & Prestige Series' },
    direction: 'ltr' as const,
    posters: [
      { id: 'succession', title: 'Succession', path: '/assets/movie_posters/general/hbo/succession hbo.webp', platform: 'HBO' },
      { id: 'crown', title: 'The Crown', path: '/assets/movie_posters/general/netflix/the crown netflix.webp', platform: 'Netflix' },
      { id: 'severance', title: 'Severance', path: '/assets/movie_posters/general/apple/severance apple.webp', platform: 'Apple TV+' },
      { id: 'detective', title: 'True Detective', path: '/assets/movie_posters/general/hbo/True detective HBO.webp', platform: 'HBO' },
      { id: 'ted-lasso', title: 'Ted Lasso', path: '/assets/movie_posters/general/apple/ted lasso appletv.webp', platform: 'Apple TV+' },
      { id: 'white-lotus', title: 'White Lotus', path: '/assets/movie_posters/general/hbo/White Lotus Season 3 HBO.webp', platform: 'HBO' },
    ]
  },
  {
    id: 'family',
    title: { de: '🌟 Familie & International', en: '🌟 Family & International' },
    direction: 'rtl' as const,
    posters: [
      { id: 'loki', title: 'Loki', path: '/assets/movie_posters/general/disney/loki disney.webp', platform: 'Disney+' },
      { id: 'ahsoka', title: 'Ahsoka', path: '/assets/movie_posters/general/disney/ahsoka disney.webp', platform: 'Disney+' },
      { id: 'percy', title: 'Percy Jackson', path: '/assets/movie_posters/general/disney/for perc jackson disney.webp', platform: 'Disney+' },
      { id: 'asterix', title: 'Asterix', path: '/assets/movie_posters/countries/france/astérix - france.webp', platform: 'European' },
      { id: 'torpedo', title: 'Torpedo', path: '/assets/movie_posters/countries/belgium/torpedo berlin- belgium.webp', platform: 'European' },
      { id: 'undercover', title: 'Undercover', path: '/assets/movie_posters/countries/holland/undercover dutch.webp', platform: 'Dutch TV' },
    ]
  }
];

const platformColors: Record<string, string> = {
  'Netflix': 'bg-red-600',
  'HBO': 'bg-purple-600',
  'Disney+': 'bg-blue-600',
  'Prime': 'bg-blue-500',
  'Apple TV+': 'bg-gray-600',
  'German TV': 'bg-yellow-600',
  'European': 'bg-indigo-600',
  'Dutch TV': 'bg-orange-600',
};

export default function ContentCarousel({ locale = 'de' }: ContentCarouselProps) {
  const [canLoadImages, setCanLoadImages] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Load images after exactly 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanLoadImages(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const content = {
    de: {
      title: 'Unbegrenzter Zugriff auf Premium-Inhalte',
      subtitle: 'Netflix, HBO, Disney+ und deutsche Serien - 26.000+ Filme & Serien in einem Abo',
      cta: {
        heading: 'Bereit, alles zu streamen?',
        subtext: 'Alle Premium-Inhalte warten auf Sie',
        button: 'Jetzt alle Inhalte freischalten →'
      }
    },
    en: {
      title: 'Unlimited Access to Premium Content',
      subtitle: 'Netflix, HBO, Disney+ and German Series - 26,000+ Movies & Series in one subscription',
      cta: {
        heading: 'Ready to stream everything?',
        subtext: 'All premium content awaits you',
        button: 'Unlock all content now →'
      }
    }
  };

  const t = content[locale as 'de' | 'en'];

  interface Poster {
  id: string;
  title: string;
  path: string;
  platform: string;
}

const PosterCard = ({ poster }: { poster: Poster }) => (
    <div className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4">
      <div className="relative group w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px]">
        <Image
          src={poster.path}
          alt={`${poster.title} auf Deutsch-IPTV streamen - ${poster.platform}`}
          width={220}
          height={330}
          className="rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-110 object-cover aspect-[2/3]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        <div className={`absolute top-2 left-2 ${platformColors[poster.platform] || 'bg-gray-600'} text-white text-xs px-2 py-1 rounded-md font-semibold backdrop-blur-sm bg-opacity-90`}>
          {poster.platform}
        </div>
        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-bold">
          4K
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      {/* Header - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          {t.title}
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Carousel Rows - Full Width with Edge Gradients */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Carousel Rows */}
        <div className="space-y-8 md:space-y-12">
          {carouselRows.map((row) => (
            <div key={row.id}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {row.title[locale as 'de' | 'en'] || row.title.de}
              </h3>
              
              {canLoadImages ? (
                <div className="flex overflow-hidden">
                  <div className={`flex ${row.direction === 'ltr' ? 'animate-scroll-ltr' : 'animate-scroll-rtl'}`}>
                    {[...row.posters, ...row.posters, ...row.posters, ...row.posters].map((poster, idx) => (
                      <PosterCard key={`${poster.id}-${idx}`} poster={poster} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex overflow-hidden">
                  <div className="flex gap-4 px-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] aspect-[2/3] bg-gray-800 rounded-lg animate-pulse" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section - Contained */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-2xl p-8 border border-yellow-500/20">
          
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Premium IPTV Content Deutschland',
            numberOfItems: 32
          })
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-ltr {
          animation: scroll-ltr 60s linear infinite;
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 60s linear infinite;
        }
        
        ${isPaused ? `
          .animate-scroll-ltr,
          .animate-scroll-rtl {
            animation-play-state: paused;
          }
        ` : ''}
      `}</style>
    </section>
  );
}