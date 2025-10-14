'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  const locale = pathname.startsWith('/en') ? 'en' : 'de';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/iptv-preise-angebote-deutschland', label: t('packages') },
    { href: '/installationsanleitung-iptv', label: t('installation') },
    { href: '/iptv-wiederverkaeufer', label: t('reseller') },
    { href: '/blog', label: t('blog') }
  ];

  const isActive = (href: string) => {
    const cleanPath = pathname.replace('/en', '') || '/';
    return cleanPath === href;
  };

  const switchLanguage = (newLocale: string) => {
    startTransition(() => {
      const currentPath = pathname.replace('/en', '');
      const targetPath = newLocale === 'en' ? `/en${currentPath || '/'}` : (currentPath || '/');
      router.push(targetPath);
      router.refresh();
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-200">
            <Logo className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-1 py-1 transition-opacity duration-200 ${isPending ? 'opacity-50' : 'opacity-100'}`}>
              <button
                onClick={() => switchLanguage('de')}
                disabled={isPending}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  locale === 'de' ? 'bg-white/10 text-white scale-105' : 'text-white/60 hover:text-white/80'
                }`}
              >
                <span className="text-base">🇩🇪</span>
                <span className="hidden md:inline">DE</span>
              </button>
              <button
                onClick={() => switchLanguage('en')}
                disabled={isPending}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  locale === 'en' ? 'bg-white/10 text-white scale-105' : 'text-white/60 hover:text-white/80'
                }`}
              >
                <span className="text-base">🇬🇧</span>
                <span className="hidden md:inline">EN</span>
              </button>
            </div>
            
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
  className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200"
>
              <div className="w-6 h-5 relative flex flex-col justify-center">
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
                <span className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(link.href) ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}