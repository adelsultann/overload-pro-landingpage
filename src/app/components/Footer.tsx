// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal-dark py-8">
            <div className="container mx-auto px-6 text-center text-gray-soft">
                <div className="w-1/4 mx-auto mb-4 border-t border-gray-800"></div>
                <p>&copy; {new Date().getFullYear()} Overload Pro. All Rights Reserved.</p>
                <p className="text-sm mt-1">Built for strength, designed for focus.</p>
            </div>
           
        </footer>
    );
};

export default Footer;