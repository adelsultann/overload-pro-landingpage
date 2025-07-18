// src/components/Features.tsx
import React from 'react';
import { DumbbellIcon, ChartIcon, ShieldIcon } from './Icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-charcoal-medium">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold">Features Designed For <span className="text-neon-green">You</span></h3>
          <p className="text-gray-muted mt-4 max-w-2xl mx-auto">
            Everything you need to progress, nothing you don't. Simple, powerful, and effective.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-charcoal-light p-8 rounded-2xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 inline-block bg-charcoal-dark p-4 rounded-xl">
              <DumbbellIcon className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-2xl font-bold text-neon-green mb-3">Workout Logging</h4>
            <p className="text-gray-muted">
              Intuitively log your sets, reps, and weight. Our clean interface lets you focus on your lift, not the app.
            </p>
          </div>
          <div className="bg-charcoal-light p-8 rounded-2xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 inline-block bg-charcoal-dark p-4 rounded-xl">
              <ChartIcon className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-2xl font-bold text-neon-green mb-3">Progress Tracking</h4>
            <p className="text-gray-muted">
              Visualize your strength gains with beautiful, easy-to-read charts. See how far you've come and stay motivated.
            </p>
          </div>
          <div className="bg-charcoal-light p-8 rounded-2xl border border-gray-700/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 inline-block bg-charcoal-dark p-4 rounded-xl">
              <ShieldIcon className="w-8 h-8 text-neon-green" />
            </div>
            <h4 className="text-2xl font-bold text-neon-green mb-3">Data Privacy</h4>
            <p className="text-gray-muted">
              Your workout data is yours alone. We believe in privacy-first development, with no trackers and no ads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;