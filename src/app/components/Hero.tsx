// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import AppStoreIcon from '../assets/app-store.png';
import GooglePlay from '../assets/google-play.png';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-dark opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent z-0"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 neon-text">
          Overload Pro
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-6">
          Unlock your true potential. Track your workouts, smash your goals, and get stronger with every session.
        </p>

        {/* Text */}
        <p className="text-2xl md:text-3xl font-bold text-neon-green mb-2">
          Start Your Journey
        </p>

        {/* Store Icons */}
        <div className="flex space-x-4 items-center">
          {/* App Store Icon */}
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >

             <img src={AppStoreIcon.src} alt="App Store Icon" height={300} width={300} />
          </a>

          {/* Google Play Icon */}
          <a
            href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
<img src={GooglePlay.src} alt="Google Play Icon" height={300} width={300} />

          </a>

           
         
        </div>
      </div>
    </section>
  );
};

export default Hero;