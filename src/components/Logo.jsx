import React from 'react';

const Logo = ({ className = '', size = 'medium' }) => {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-xs' },
    medium: { container: 'w-10 h-10', text: 'text-sm' },
    large: { container: 'w-16 h-16', text: 'text-xl' },
  };

  const current_size = sizes[size] || sizes.medium;

  return (
    <div className={`${current_size.container} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" filter="url(#shadow)"/>

        {/* Inner Circle Border */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>

        {/* Text - Initials MAC */}
        <text
          x="50"
          y="60"
          fontSize="32"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="1"
        >
          MAC
        </text>

        {/* Decorative element - Translation symbol */}
        <g transform="translate(50, 20) scale(0.15)" fill="white" opacity="0.8">
          <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
