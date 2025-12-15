"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Doctors component with no SSR to avoid hydration issues
const Doctors = dynamic(() => import('./Doctors'), { 
  ssr: false,
  loading: () => <div>Loading doctors...</div>
});

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
 
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    content: 'The care I received was exceptional. The doctors took their time to explain everything and made me feel comfortable throughout my treatment.',
    rating: 5,
    image: '/images/d1.jpg',
      },
      {
        id: 2,
    name: 'Maria G.',
    role: 'Patient',
    content: 'Professional staff and clean facilities. I was seen right at my appointment time and the service was very thorough.',
    rating: 5,
    image: '/images/d2.jpg',
    
  },
  {
      id: 3,
    name: 'Robert T.',
    role: 'Patient',
    content: 'The hospital facilities are top-notch. Clean, modern, and well-equipped. Made my recovery much more comfortable.',
    rating: 4,
    image: '/images/d3.jpg',
    
  }
];

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on component mount (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // We'll use all testimonials
  const filteredTestimonials = testimonials;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Hear from our valued patients about their experiences at our medical center.
          </p>
          
        </div>
        
        <div className="mb-12">
          {isClient && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {filteredTestimonials.length > 0 ? (
                filteredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="relative h-[600px] bg-white rounded-xl shadow-lg overflow-hidden transition duration-500 transform hover:scale-105">
                    {/* Top 60% - Background Image */}
                    <div className="h-[60%] w-full relative">
                      <Image
                        src={testimonial.image}
                        alt="Background"
                        fill
                        className="object-cover"
                      />
                      {/* Dark overlay for better text visibility */}
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                      
                      {/* Profile Image */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom 40% - Details Card */}
                    <div className="h-[40%] p-6 pt-16 flex flex-col justify-between">
                      <div>
                        {/* Name */}
                        <h3 className="text-center font-bold text-lg text-gray-800">{testimonial.name}</h3>
                        
                        {/* Role */}
                        <p className="text-center text-sm text-gray-500 mb-3">{testimonial.role}</p>
                        
                        {/* Quote */}
                        <p className="text-center text-gray-700 text-sm line-clamp-3">"{testimonial.content}"</p>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center mt-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${star <= testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={star <= testimonial.rating ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500">No testimonials found.</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/testimonials" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
