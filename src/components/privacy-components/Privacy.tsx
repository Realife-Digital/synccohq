import React from "react";

export default function PrivacyContent() {
  return (
    <>
      <div className="space-y-4 text-justify">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p>Efffective Date: January 4th, 2025</p>
        <p>
          Realife Digital Concept is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and share information
          about you when you use our services.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-justify">
          <li>
            Information We Collect
            <p>
              Personal Information: Name, email address, phone number, and
              billing details. Non-Personal Information: Usage data, cookies,
              and analytics.
            </p>
          </li>
          <li>
            How We Use Your Information
            <p>To deliver and manage our services. </p>
            <p>To communicate updates, offers, and support.</p>
            <p>To improve our website and user experience.</p>
          </li>
          <li>
            Sharing Your Information
            <p>
              We do not sell or share your information with third parties,
              except:
            </p>
            <p>When required by law or to protect our legal rights.</p>
            <p>
              With service providers who assist in delivering our services
              (e.g., payment processors).
            </p>
          </li>
          <li>
            Data Security
            <p>
              We use industry-standard measures to protect your data. However,
              no method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </li>
          <li>
            Your Rights
            <p>
              {" "}
              You can access, update, or delete your personal information by
              contacting us.
            </p>
            <p> You can opt out of marketing communications at any time.</p>
          </li>
          <li>
            Changes to This Policy
            <p>
              We may update this Privacy Policy periodically. Continued use of
              our services constitutes acceptance of the revised policy.
            </p>
          </li>
          <li>
            Contact Us
            <p>
              If you have questions about this policy, please contact us at
              [Insert Contact Email].
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}
