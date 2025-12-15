import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sitemap - Medicare+',
  description: 'Complete sitemap of Medicare+ website',
};

const SitemapPage = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const servicePages = [
    { name: 'Primary Care', path: '/services/primary-care' },
    { name: 'Specialist Care', path: '/services/specialist-care' },
    { name: 'Emergency Care', path: '/services/emergency-care' },
    { name: 'Diagnostic Services', path: '/services/diagnostic' },
    { name: 'Wellness Programs', path: '/services/wellness' },
    { name: 'Telemedicine', path: '/services/telemedicine' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sitemap
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore all the pages and services available on our website
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Main Pages */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  {mainPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        href={page.path}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Our Services
                </h2>
                <ul className="space-y-2">
                  {servicePages.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Legal
                </h2>
                <ul className="space-y-2">
                  {legalPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        href={page.path}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Looking for something specific?</h2>
            <p className="text-gray-600 mb-4">
              If you can't find what you're looking for, try using our search function or contact our support team for assistance.
            </p>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;