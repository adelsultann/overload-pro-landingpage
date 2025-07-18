// src/components/Privacy.tsx
import React from 'react';

const Privacy: React.FC = () => {
    return (
        <section id="privacy" className="py-20 sm:py-32 bg-charcoal-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-charcoal-light p-8 sm:p-12 rounded-2xl border border-gray-700/50">
                    <h3 className="text-3xl font-bold text-neon-green mb-6">Privacy Policy</h3>
                    <div className="space-y-4 text-white">
                        <p>Your privacy is paramount at Overload Pro. We are committed to protecting your personal information and being transparent about what information we collect and how we use it.</p>
                        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All workout data you input into the app is stored securely and is only accessible by you. We do not use third-party trackers or advertising services within our application.</p>
                        <p>Our goal is to provide a tool that helps you achieve your fitness goals without compromising your privacy. If you have any questions about our policy, please feel free to contact us.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Privacy;