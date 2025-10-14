import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isGerman = params.locale === 'de';
  
  return {
    title: isGerman 
      ? 'DEUTSCH IPTV - Beste IPTV Deutschland 2025 | IPTV Kaufen'
      : 'DEUTSCH IPTV - Best IPTV Germany 2025 | Buy IPTV',
    description: isGerman
      ? 'DEUTSCH IPTV ✓ 26.000+ Kanäle ✓ Bundesliga & Champions League ✓ 4K/8K Qualität. Jetzt ab 14,99€!'
      : 'DEUTSCH IPTV ✓ 26,000+ Channels ✓ Bundesliga & Champions League ✓ 4K/8K Quality. From €14.99!',
    keywords: ['iptv deutsch', 'deutsch iptv', 'iptv deutschland', 'iptv kaufen', 'german iptv'],
  };
}
