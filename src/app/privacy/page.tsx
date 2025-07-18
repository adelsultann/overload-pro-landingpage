// src/app/privacy/page.tsx
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-accent-green">Privacy Policy</h1>
      <div className="space-y-5 text-base leading-7">
        <p><strong>Effective Date:</strong>2025</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">1. What Information We Collect</h2>
        <p>
          <strong>Email Address:</strong> We only collect your email address when you register or log in. We do not ask for your name or any other personal details.<br/>
          <strong>Analytics Data:</strong> We use Google Analytics to understand how people use our app and website. This data is anonymized.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
        <p>
          <strong>Email Address:</strong> Used only to create/manage your account.<br/>
          <strong>Analytics:</strong> Used to improve performance and features.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Sharing</h2>
        <p>
          We do not share your data with third parties, except as required by law or to provide core app services.
        </p>
        <h2 className="text-xl font-semibold mt-4 mb-2">4. Data Security</h2>
        <p>Your data is stored securely using industry-standard practices.</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">5. Your Choices</h2>
        <p>You can delete your account at any time, and block analytics tracking via your browser/device settings.</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">6. Children’s Privacy</h2>
        <p>We do not knowingly collect info from children under 13. Contact us if you have concerns.</p>
        <h2 className="text-xl font-semibold mt-4 mb-2">7. Changes to this Policy</h2>
        <p>Updates will be posted on this page.</p>
       
      </div>
    </div>
  );
}
