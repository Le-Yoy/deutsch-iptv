'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { trackLead, trackButtonClick, getDeviceType } from '@/lib/analytics';



function CheckoutContent() {
  const t = useTranslations('checkout');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  // Detect locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : 'de';

  // Get URL parameters
  const packageName = searchParams.get('package');
  const duration = searchParams.get('duration');
  const devices = searchParams.get('devices');
  const packagePrice = searchParams.get('price');

  // Build display name based on locale
  const displayName = packageName && duration && devices
    ? locale === 'de'
      ? `${packageName} (${duration}, ${devices} ${devices === '1' ? 'Gerät' : 'Geräte'})`
      : `${packageName} (${duration}, ${devices} ${devices === '1' ? 'device' : 'devices'})`
    : packageName;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && packageName && packagePrice) {
      trackLead({
        packageName: displayName || packageName,
        packagePrice: packagePrice,
        location: 'checkout_page_view',
        deviceType: getDeviceType(),
        pageUrl: typeof window !== 'undefined' ? window.location.href : ''
      });
    }
  }, [mounted, packageName, packagePrice, displayName]);

  const handleWhatsAppClick = () => {
    setContactClicked(true);
    
    trackButtonClick({
      platform: 'whatsapp',
      packageName: displayName || packageName || 'Unknown',
      packagePrice: packagePrice || 'Unknown',
      location: 'checkout_page',
      deviceType: getDeviceType(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : ''
    });

    const whatsappNumber = '+212608677633';
    const message = locale === 'de'
      ? `Hallo, ich möchte ${displayName} für ${packagePrice} kaufen`
      : `Hello, I want to purchase ${displayName} for ${packagePrice}`;
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleTelegramClick = () => {
    setContactClicked(true);
    
    trackButtonClick({
      platform: 'telegram',
      packageName: displayName || packageName || 'Unknown',
      packagePrice: packagePrice || 'Unknown',
      location: 'checkout_page',
      deviceType: getDeviceType(),
      pageUrl: typeof window !== 'undefined' ? window.location.href : ''
    });

    const telegramUsername = 'Buyiptvsubscription';
    const message = locale === 'de'
      ? `Hallo, ich möchte ${displayName} für ${packagePrice} kaufen`
      : `Hello, I want to purchase ${displayName} for ${packagePrice}`;
    const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    window.open(telegramLink, '_blank');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!packageName || !packagePrice) {
    const pricingPageUrl = locale === 'de' 
      ? '/iptv-preise-angebote-deutschland' 
      : '/en/iptv-preise-angebote-deutschland';

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('noPackageTitle')}
          </h1>
          <p className="text-gray-400 mb-6">
            {t('noPackageDesc')}
          </p>
          <Link
            href={pricingPageUrl}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
          >
            {t('goToPackages')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 md:pt-32 pb-8 md:pb-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-green-400 font-semibold text-sm">
              {t('secureBadge')}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {t('headline')}
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            {t('subheadline')}
          </p>
        </div>

        {/* Selected Package Card */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <p className="text-sm text-gray-400 mb-2">{t('selectedPackage')}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">{displayName}</h2>
              <p className="text-gray-400 text-sm">{t('instantActivation')}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                {packagePrice}
              </p>
              <p className="text-xs text-gray-400">{t('oneTime')}</p>
            </div>
          </div>
        </div>

        {/* Why Contact Us First */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
            <span className="text-2xl md:text-3xl">💬</span>
            {t('whyContactTitle')}
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-3 md:gap-4">
              <div className="text-xl md:text-2xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-white font-bold mb-1 text-sm md:text-base">{t('instantActivationTitle')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('instantActivationDesc')}
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="text-xl md:text-2xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="text-white font-bold mb-1 text-sm md:text-base">{t('securePaymentTitle')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('securePaymentDesc')}
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="text-xl md:text-2xl flex-shrink-0">👤</div>
              <div>
                <h3 className="text-white font-bold mb-1 text-sm md:text-base">{t('personalSupportTitle')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('personalSupportDesc')}
                </p>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4">
              <div className="text-xl md:text-2xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-white font-bold mb-1 text-sm md:text-base">{t('guaranteeTitle')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('guaranteeDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
            💳 {t('paymentMethodsTitle')}
          </h3>
          <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap">
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg">
              <span className="text-blue-600 font-bold text-xs md:text-sm">PayPal</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg">
              <span className="text-gray-800 font-bold text-xs md:text-sm">🏦 Bank</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg">
              <span className="text-gray-800 font-bold text-xs md:text-sm">₿ Crypto</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-lg">
              <span className="text-gray-800 font-bold text-xs md:text-sm">💳 Card</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
            🔢 {t('howItWorksTitle')}
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-blue-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                1
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">{t('step1Title')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('step1Desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-blue-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                2
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">{t('step2Title')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('step2Desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-blue-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                3
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">{t('step3Title')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('step3Desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-green-500 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base">
                ✓
              </div>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">{t('step4Title')}</h3>
                <p className="text-gray-300 text-xs md:text-sm">
                  {t('step4Desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            {t('whatsappCta')}
          </button>

          <button
            onClick={handleTelegramClick}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-5 md:py-6 px-6 md:px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-3 text-base md:text-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {t('telegramCta')}
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <p className="text-gray-400 text-xs md:text-sm mb-1">
            {t('socialProofRating')}
          </p>
          <p className="text-green-400 text-xs font-medium">
            {t('socialProofQuote')}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}