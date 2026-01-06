import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/m2.jpg"
                alt="Our medical team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply transition duration-500 transform hover:scale-110"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Medical Center
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              Welcome to our state-of-the-art medical facility where we combine cutting-edge technology with compassionate care. 
              Our team of dedicated healthcare professionals is committed to providing exceptional medical services to our community.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Board-certified physicians and specialists
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  State-of-the-art diagnostic equipment
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Patient-centered approach to care
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/about' className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </Link>
              <Link href='/doctors' className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
