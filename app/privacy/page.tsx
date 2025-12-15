import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Privacy Policy | Your Healthcare Provider',
  description: 'Learn how we protect and manage your personal and health information in compliance with privacy laws.',
};

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 15, 2023</p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-8">
                <Section title="Introduction">
                  <p className="mb-4">
                    At Your Healthcare Provider, we are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.
                  </p>
                </Section>

                <Section title="Information We Collect">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Personal identification information (name, email, phone number, date of birth)</li>
                    <li>Health information and medical history</li>
                    <li>Insurance and payment information</li>
                    <li>Usage data and website interaction information</li>
                    <li>Cookies and tracking technologies data</li>
                  </ul>
                </Section>

                <Section title="How We Use Your Information">
                  <p className="mb-4">We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provide and manage healthcare services</li>
                    <li>Process appointments and send reminders</li>
                    <li>Process payments and insurance claims</li>
                    <li>Improve our services and website</li>
                    <li>Comply with legal obligations</li>
                    <li>Send important updates and health-related information</li>
                  </ul>
                </Section>

                <Section title="Information Sharing and Disclosure">
                  <p className="mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Healthcare providers involved in your treatment</li>
                    <li>Insurance companies for payment processing</li>
                    <li>Legal authorities when required by law</li>
                    <li>Service providers who assist in our operations</li>
                  </ul>
                  <p className="mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </Section>

                <Section title="Your Rights">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access your personal information</li>
                    <li>Request corrections to your information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to certain uses of your information</li>
                    <li>Request restrictions on processing</li>
                    <li>Receive your data in a portable format</li>
                  </ul>
                </Section>

                <Section title="Data Security">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and regular security assessments.
                  </p>
                </Section>

                <Section title="Cookies and Tracking">
                  <p className="mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse all or some browser cookies, but this may affect certain features of our website.
                  </p>
                  <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                    Learn more about our Cookie Policy
                  </Link>
                </Section>

                <Section title="Changes to This Policy">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                  </p>
                </Section>

                <Section title="Contact Us">
                  <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="space-y-1">
                    <li>Email: privacy@yourhealthcareprovider.com</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Address: 123 Healthcare St, Medical District, City, State, ZIP</li>
                  </ul>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Reusable Section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">{title}</h2>
    <div className="text-gray-600">
      {children}
    </div>
  </section>
);

export default PrivacyPolicy;