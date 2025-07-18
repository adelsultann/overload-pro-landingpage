// src/components/Icons.tsx
import React from 'react';

interface IconProps {
  className?: string;
}

export const DumbbellIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5" />
    <path d="M12 14h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5" />
    <path d="M12 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1" />
    <path d="M12 14v-4" />
    <path d="M18 6h-1" />
    <path d="M18 18h-1" />
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m18 9-5 5-4-4-3 3" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);