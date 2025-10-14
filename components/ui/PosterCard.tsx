'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PosterCardProps {
  poster: {
    id: string;
    title: string;
    path: string;
    platform: string;
  };
  canLoad: boolean;
  locale?: string;
}

const platformColors = {
  netflix: 'bg-red-600',
  hbo: 'bg-purple-600',
  disney: 'bg-blue-600',
  prime: 'bg-blue-500',
  apple: 'bg-gray-600',
  german: 'bg-yellow-600',
  ard: 'bg-green-600',
  european: 'bg-indigo-600',
};

const platformNames = {
  netflix: 'Netflix',
  hbo: 'HBO Max',
  disney: 'Disney+',
  prime: 'Prime Video',
  apple: 'Apple TV+',
  german: 'German TV',
  ard: 'ARD',
  european: 'European',
};

export default function PosterCard({ poster, canLoad, locale = 'de' }: PosterCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const altText = locale === 'de'
    ? `${poster.title} auf Deutsch-IPTV streamen - ${platformNames[poster.platform as keyof typeof platformNames]}`
    : `Stream ${poster.title} on German IPTV - ${platformNames[poster.platform as keyof typeof platformNames]}`;

  return (
    <div 
      className="flex-shrink-0 group cursor-pointer"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="relative w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300">
        {canLoad && !imageError ? (
          <>
            {/* Skeleton Loader */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
            )}
            
            {/* Poster Image */}
            <Image
              src={poster.path}
              alt={altText}
              fill
              sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 220px"
              className="object-cover"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />

            {/* Platform Badge */}
            <div className={`absolute top-2 left-2 ${platformColors[poster.platform as keyof typeof platformColors]} text-white text-xs px-2 py-1 rounded-md font-semibold backdrop-blur-sm bg-opacity-90`}>
              {platformNames[poster.platform as keyof typeof platformNames]}
            </div>

            {/* 4K Badge */}
            <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-md font-bold">
              4K
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <div>
                <p className="text-white font-semibold text-sm mb-1">{poster.title}</p>
                <p className="text-yellow-400 text-xs">
                  {locale === 'de' ? 'Jetzt ansehen →' : 'Watch now →'}
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Placeholder while loading or error */
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <div className="text-gray-600 text-4xl">🎬</div>
          </div>
        )}
      </div>
    </div>
  );
}