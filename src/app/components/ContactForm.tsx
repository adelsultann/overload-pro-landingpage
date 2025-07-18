// src/components/ContactForm.tsx
"use client";

import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.message || 'Failed to send message.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-charcoal-medium">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-charcoal-light p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-700/50">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold">Get In Touch</h3>
            <p className="text-gray-muted mt-2">Have a question or feedback? We'd love to hear from you.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full bg-charcoal-dark text-white p-4 rounded-lg border border-gray-600 focus:border-neon-green focus:ring-2 focus:ring-neon-green outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full bg-charcoal-dark text-white p-4 rounded-lg border border-gray-600 focus:border-neon-green focus:ring-2 focus:ring-neon-green outline-none transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formState.message}
                onChange={handleInputChange}
                className="w-full bg-charcoal-dark text-white p-4 rounded-lg border border-gray-600 focus:border-neon-green focus:ring-2 focus:ring-neon-green outline-none transition-colors"
                required
              ></textarea>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neon-green text-charcoal-dark font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitMessage && (
              <p
                className={`mt-4 text-center ${
                  submitMessage.includes('Thank you') ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;