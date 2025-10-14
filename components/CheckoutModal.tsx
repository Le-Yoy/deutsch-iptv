'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
}

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  packageName, 
  packagePrice 
}: CheckoutModalProps) {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'de';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const whatsappNumber = '+212608677633';
  const telegramUsername = 'Buyiptvsubscription';
  
  const message = locale === 'de' 
    ? `Hallo, ich möchte ${packageName} für ${packagePrice} kaufen`
    : `Hello, I want to purchase ${packageName} for ${packagePrice}`;
  
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  const telegramLink = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

const handleLiveChat = () => {
  onClose();
};

  const content = {
    de: {
      headline: 'Fast fertig! 🎯',
      subheadline: 'Aktivierung in nur 5 Minuten',
      instruction: 'Wählen Sie Ihre bevorzugte Kontaktmethode:',
      whatsapp: 'WhatsApp Chat starten',
      telegram: 'Telegram Chat starten',
      livechat: 'Live Support Chat',
      trust1: 'Sofort-Aktivierung',
      trust2: '24/7 Support',
      trust3: 'Sichere Zahlung',
      customers: 'Über 10.000+ zufriedene Kunden',
      noRegistration: 'Keine Registrierung nötig',
      package: 'Ihr Paket'
    },
    en: {
      headline: 'Almost there! 🎯',
      subheadline: 'Active in just 5 minutes',
      instruction: 'Choose your preferred contact method:',
      whatsapp: 'Start WhatsApp Chat',
      telegram: 'Start Telegram Chat',
      livechat: 'Live Support Chat',
      trust1: 'Instant activation',
      trust2: '24/7 Support',
      trust3: 'Secure payment',
      customers: 'Over 10,000+ happy customers',
      noRegistration: 'No registration needed',
      package: 'Your Package'
    }
  };

  const t = content[locale as 'de' | 'en'];

  if (!mounted) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-black p-6 md:p-8 shadow-2xl transition-all border border-gray-800">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center mb-6">
                  <Dialog.Title as="h3" className="text-3xl font-black text-white mb-2">
                    {t.headline}
                  </Dialog.Title>
                  <p className="text-green-400 font-medium">
                    ⚡ {t.subheadline}
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur rounded-2xl p-4 mb-6 border border-white/10">
                  <p className="text-sm text-gray-400 mb-1">{t.package}:</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">{packageName}</span>
                    <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                      {packagePrice}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center">
                    <div className="text-green-400 text-xs">✓ {t.trust1}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs">✓ {t.trust2}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 text-xs">✓ {t.trust3}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm text-center mb-4">
                  {t.instruction}
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 text-white font-bold shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {t.whatsapp}
                  </a>

                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-white font-bold shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    {t.telegram}
                  </a>

                  <button
                    onClick={handleLiveChat}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 text-white font-bold shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {t.livechat}
                  </button>
                </div>

                <div className="mt-6 text-center space-y-1">
                  <p className="text-xs text-gray-400">
                    {t.customers}
                  </p>
                  <p className="text-xs text-green-400 font-medium">
                    ✓ {t.noRegistration}
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

