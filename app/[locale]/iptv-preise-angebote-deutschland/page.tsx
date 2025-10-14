import PackagesSection from '@/components/sections/PackagesSection';

export const metadata = {
  title: 'IPTV Preise & Angebote Deutschland - Ab 14,99€/Monat',
  description: 'Beste IPTV Pakete in Deutschland. 26.000+ Kanäle, Bundesliga, Champions League, Netflix & Sky inklusive.',
};

export default async function PricingPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
          {locale === 'de' ? 'IPTV Preise & Angebote' : 'IPTV Prices & Offers'}
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          {locale === 'de' 
            ? '26.000+ Kanäle, 190.000+ VOD, alle Geräte unterstützt. Keine Vertragsbindung.'
            : '26,000+ channels, 190,000+ VOD, all devices supported. No contract.'}
        </p>
      </div>
      <PackagesSection locale={locale} />
    </div>
  );
}
