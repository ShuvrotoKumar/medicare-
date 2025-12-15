import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative text-white h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Healthcare background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center relative z-10">
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
      </div>
    </section>
  );
};

export default Hero;
