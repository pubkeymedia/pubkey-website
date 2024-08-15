import React from 'react';
import styles from './Privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img 
          src="/images/privacy/pubkey_signboard_logo_black.png" 
          alt="PubKey Logo" 
          className={styles.logo}
        />
      </header>
      <main className={styles.main}>
      <h1>PubKey Privacy Policy</h1>
        <p><strong>Effective Date: August 15, 2024</strong></p>

        <p>PubKey NYC LLC  ("we," "our," or "us") is committed to protecting the privacy of our website visitors and users ("you" or "your"). This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and engage with our lead generation activities.</p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Sign up for our newsletter or mailing list.</li>
          <li>Submit a contact form or inquiry.</li>
          <li>Register for events or promotions.</li>
          <li>Engage with our social media accounts.</li>
          <li>Participate in surveys or feedback forms.</li>
        </ul>

        <p>The personal information we may collect includes, but is not limited to:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Job title</li>
        </ul>

        <p>Any other information you choose to provide.</p>

        <h2>2. How We Use Your Information</h2>
        <p>The personal information we collect may be used for the following purposes:</p>
        <ul>
          <li>To respond to your inquiries and provide you with information or services you request.</li>
          <li>To send you marketing communications, such as newsletters, promotions, and event invitations, if you have opted to receive them.</li>
          <li>To improve our website, products, and services based on your feedback and interactions.</li>
          <li>To analyze website traffic and user behavior to enhance the user experience.</li>
          <li>To comply with legal obligations and enforce our terms and conditions.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us with website hosting, email marketing, data analysis, and other business operations. These providers are required to protect your information and use it only for the purposes we specify.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation, or legal process, or if we believe it is necessary to protect the rights, property, or safety of our website, users, or others.</li>
        </ul>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We may use cookies and other tracking technologies to collect information about your browsing activities on our website. This information helps us understand how you use our website and allows us to customize your experience. You can control the use of cookies through your browser settings, but please note that disabling cookies may affect the functionality of our website.</p>

        <h2>5. Your Rights and Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access, Update, or Delete Your Information:</strong> You may request access to the personal information we hold about you and ask us to update or delete it by contacting us at [insert contact information].</li>
          <li><strong>Opt-Out of Marketing Communications:</strong> You may opt-out of receiving marketing communications from us at any time by following the unsubscribe instructions in the emails we send or by contacting us directly.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

        <h2>7. Children's Privacy</h2>
        <p>Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete it.</p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our website with the effective date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
        <p>Email: info@port8333.io</p>
        <p>Address: 85 Washington Place, New York, NY 10011</p>
      </main>
    </div>
  );
}