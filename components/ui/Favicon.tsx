'use client';

export default function Favicon({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="favicon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      
      {/* TV Screen Background */}
      <rect x="4" y="8" width="24" height="16" rx="2" fill="url(#favicon-gradient)" />
      
      {/* TV Screen Inner */}
      <rect x="6" y="10" width="20" height="12" rx="1" fill="#000000" opacity="0.3" />
      
      {/* Play Button */}
      <path d="M13 14L19 17L13 20V14Z" fill="white" />
      
      {/* Signal Waves */}
      <path d="M22 4C24.5 6.5 24.5 10.5 22 13" stroke="url(#favicon-gradient)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M25 2C28 5 28 12 25 15" stroke="url(#favicon-gradient)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// Export as string for inline use
export const faviconSvgString = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#DC2626"/><stop offset="50%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#EF4444"/></linearGradient></defs><rect x="4" y="8" width="24" height="16" rx="2" fill="url(#fg)"/><rect x="6" y="10" width="20" height="12" rx="1" fill="#000" opacity="0.3"/><path d="M13 14L19 17L13 20V14Z" fill="white"/><path d="M22 4C24.5 6.5 24.5 10.5 22 13" stroke="url(#fg)" stroke-width="2" stroke-linecap="round" opacity="0.8"/><path d="M25 2C28 5 28 12 25 15" stroke="url(#fg)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/></svg>`;