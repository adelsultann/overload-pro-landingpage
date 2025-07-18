// src/app/page.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Privacy from './components/Privacy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-charcoal-dark text-white font-sans antialiased">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Privacy />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}