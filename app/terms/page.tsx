import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Your Healthcare Provider',
  description: 'Review our terms and conditions for using our healthcare services and website.',
};

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: December 16, 2023</p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="space-y-8">
                <Section title="Introduction">
                  <p className="mb-4">
                    Welcome to MediCare+. These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                </Section>

                <Section title="Medical Disclaimer">
                  <p className="mb-4">
                    The content provided through our Services, including text, graphics, images, and other material, is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </Section>

                <Section title="Use of Services">
                  <p className="mb-2">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                    <li>To transmit any advertising or promotional material without our prior written consent</li>
                    <li>To impersonate or attempt to impersonate MediCare+, a MediCare+ employee, another user, or any other person or entity</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
                  </ul>
                </Section>

                <Section title="Appointments and Cancellations">
                  <p className="mb-2">When scheduling appointments through our Services:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>You must provide accurate and complete information</li>
                    <li>You agree to arrive on time for scheduled appointments</li>
                    <li>You must provide at least 24 hours' notice for cancellations or rescheduling</li>
                    <li>Repeated missed appointments may result in limitations on your ability to schedule future appointments</li>
                  </ul>
                </Section>

                <Section title="Intellectual Property">
                  <p className="mb-4">
                    The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by MediCare+, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </Section>

                <Section title="Limitation of Liability">
                  <p className="mb-4">
                    In no event will MediCare+, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Services, any websites linked to them, any content on the Services, or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
                  </p>
                </Section>

                <Section title="Indemnification">
                  <p className="mb-4">
                    You agree to defend, indemnify, and hold harmless MediCare+, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
                  </p>
                </Section>

                <Section title="Governing Law and Jurisdiction">
                  <p className="mb-4">
                    These Terms and your use of the Services are governed by and construed in accordance with the laws of the State of New York without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of New York.
                  </p>
                </Section>

                <Section title="Changes to Terms">
                  <p className="mb-4">
                    We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
                  </p>
                </Section>

                <Section title="Contact Us">
                  <p className="mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="mb-2">MediCare+</p>
                  <p className="mb-2">123 Medical Center Drive, Suite 100</p>
                  <p className="mb-2">New York, NY 10001</p>
                  <p className="mb-2">Email: legal@medicalcenter.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
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
  <section className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="text-gray-600">
      {children}
    </div>
  </section>
);

export default TermsOfService;