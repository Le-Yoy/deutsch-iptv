'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkTo() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let loaded = false;

    const loadTawk = () => {
      if (loaded) return;
      loaded = true;

      if (typeof window !== 'undefined') {
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
      }
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/67ae7c34825083258e14e233/1ik0pabrs';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    };

    const timer = setTimeout(loadTawk, 3000);
    window.addEventListener('scroll', loadTawk, { once: true });
    window.addEventListener('mousemove', loadTawk, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', loadTawk);
      window.removeEventListener('mousemove', loadTawk);
    };
  }, []);

  return null;
}