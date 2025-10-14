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
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67ae7c34825083258e14e233/1ik0pabrs';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    return () => {
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      tawkScript?.remove();
      delete window.Tawk_API;
      delete window.Tawk_LoadStart;
    };
  }, []);

  return null;
}