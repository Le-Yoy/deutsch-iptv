'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  
  const isEnglish = pathname.startsWith('/en');
  
  const handleSwitch = () => {
    const newPath = isEnglish 
      ? pathname.replace('/en', '') || '/'
      : '/en' + pathname;
    
    // Save preference to localStorage (like IPTV2BELGIE)
    localStorage.setItem('preferred-language', isEnglish ? 'de' : 'en');
    
    router.push(newPath);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all"
      title={isEnglish ? "Deutsch" : "English"}
    >
      <span className="text-xl opacity-50">
        {isEnglish ? '🇬🇧' : '🇩🇪'}
      </span>
      
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01" />
      </svg>
      
      <span className="text-xl">
        {isEnglish ? '🇩🇪' : '🇬🇧'}
      </span>
    </button>
  );
}
