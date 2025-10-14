'use client';

export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="5" y="15" width="35" height="28" rx="4" fill="url(#logoGradient)" opacity="0.95" />
        <rect x="9" y="19" width="27" height="20" rx="2" fill="white" opacity="0.3" />
        <line x1="22.5" y1="19" x2="22.5" y2="39" stroke="white" strokeWidth="0.5" opacity="0.4"/>
        <line x1="9" y1="29" x2="36" y2="29" stroke="white" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="16" cy="49" r="3" fill="url(#logoGradient)" />
        <circle cx="29" cy="49" r="3" fill="url(#logoGradient)" />
      </g>
      
      <text x="50" y="40" fontFamily="Inter, -apple-system, sans-serif" fontSize="28" fontWeight="900" fill="url(#textGradient)" letterSpacing="-1">
        DEUTSCH
      </text>
      
      <g>
        <rect x="195" y="22" width="42" height="18" rx="9" fill="url(#badgeGradient)" />
        <text x="216" y="34" fontFamily="Inter, -apple-system, sans-serif" fontSize="11" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="0.5">
          IPTV
        </text>
      </g>
      
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        
        <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  );
}