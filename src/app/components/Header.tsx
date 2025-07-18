// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Overload <span className="text-neon-green">Pro</span></h1>
        <a href="#contact" className="hidden sm:inline-block bg-neon-green text-charcoal-dark font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;