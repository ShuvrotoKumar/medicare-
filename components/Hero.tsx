import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health is Our Top Priority
          </h1>
          <p className="text-xl mb-8">
            Providing the highest quality healthcare with compassion and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href='/book' className="bg-white text-blue-700 hover:bg-blue-100 font-semibold py-3 px-6 rounded-lg transition duration-300">
              Book an Appointment
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/m1.jpg"
              alt="Professional healthcare provider"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
