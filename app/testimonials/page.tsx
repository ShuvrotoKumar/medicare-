'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { FaStar, FaRegStar, FaQuoteLeft, FaFilter, FaUserMd, FaProcedures, FaHospital } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  date: string;
  category: 'all' | 'doctors' | 'services' | 'facility';
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    image: '/images/avatar1.jpg',
    rating: 5,
    content: 'The care I received was exceptional. The doctors were attentive and took the time to explain everything clearly. The facility is clean and modern.',
    date: '2023-11-15',
    category: 'doctors'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Patient',
    image: '/images/avatar2.jpg',
    rating: 4,
    content: 'The medical staff was professional and caring. The wait times were reasonable, and the facility was well-maintained. Would definitely recommend.',
    date: '2023-11-10',
    category: 'facility'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Patient',
    image: '/images/avatar3.jpg',
    rating: 5,
    content: 'The nursing team was incredibly supportive during my recovery. They were always available to answer questions and provided excellent care.',
    date: '2023-11-05',
    category: 'services'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Patient',
    image: '/images/avatar4.jpg',
    rating: 5,
    content: 'The specialist I saw was extremely knowledgeable and made me feel at ease. The entire process from check-in to check-out was smooth.',
    date: '2023-10-28',
    category: 'doctors'
  },
  {
    id: 5,
    name: 'Lisa Wong',
    role: 'Patient',
    image: '/images/avatar5.jpg',
    rating: 4,
    content: 'The facility is well-equipped with modern technology. The staff was friendly and professional throughout my treatment.',
    date: '2023-10-20',
    category: 'facility'
  },
  {
    id: 6,
    name: 'Robert Taylor',
    role: 'Patient',
    image: '/images/avatar6.jpg',
    rating: 5,
    content: 'The after-care service was outstanding. The follow-up calls showed they genuinely care about their patients\' well-being.',
    date: '2023-10-15',
    category: 'services'
  },
];

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'doctors' | 'services' | 'facility'>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [testimonialRefs, setTestimonialRefs] = useState<Array<React.RefObject<HTMLDivElement>>>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    category: 'doctors',
    content: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set isMounted to true on component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter testimonials based on active filter using useMemo
  const filteredTestimonials = useMemo(() => {
    return activeFilter === 'all' 
      ? testimonials 
      : testimonials.filter(testimonial => testimonial.category === activeFilter);
  }, [activeFilter]);

  // Create refs for each testimonial
  useEffect(() => {
    setTestimonialRefs((prevRefs) => 
      Array(filteredTestimonials.length)
        .fill(null)
        .map((_, i) => prevRefs[i] || React.createRef<HTMLDivElement>())
    );
  }, [filteredTestimonials.length]);

  // Handle filter change
  const handleFilterChange = (filter: 'all' | 'doctors' | 'services' | 'facility') => {
    setIsLoading(true);
    setActiveFilter(filter);
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      rating: 5,
      category: 'doctors',
      content: ''
    });
    
    // Reset submission status after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value, 10) : value
    }));
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating 
        ? <FaStar key={i} className="text-yellow-400 inline" /> 
        : <FaRegStar key={i} className="text-yellow-400 inline" />
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'doctors':
        return <FaUserMd className="mr-1" />;
      case 'services':
        return <FaProcedures className="mr-1" />;
      case 'facility':
        return <FaHospital className="mr-1" />;
      default:
        return null;
    }
  };

  // Set up intersection observer for animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Only observe if we're on the client side
    const currentRefs = testimonialRefs;
    currentRefs.forEach((ref) => {
      if (ref && ref.current) observer.observe(ref.current);
    });

    // Cleanup function
    return () => {
      currentRefs.forEach((ref) => {
        if (ref && ref.current) observer.unobserve(ref.current);
      });
    };
  }, [testimonialRefs, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear what our patients have to say about their experiences with our healthcare services.
          </p>
        </div>
      </div>

      <motion.div 
        className="py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4" ref={containerRef}>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleFilterChange('all')}
              disabled={isLoading}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaFilter className="mr-2" /> All Testimonials
            </button>
            <button
              onClick={() => handleFilterChange('doctors')}
              disabled={isLoading}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'doctors' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaUserMd className="mr-2" /> Doctors
            </button>
            <button
              onClick={() => handleFilterChange('services')}
              disabled={isLoading}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'services' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaProcedures className="mr-2" /> Services
            </button>
            <button
              onClick={() => handleFilterChange('facility')}
              disabled={isLoading}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === 'facility' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaHospital className="mr-2" /> Facility
            </button>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredTestimonials.length} {filteredTestimonials.length === 1 ? 'testimonial' : 'testimonials'}
              {activeFilter !== 'all' && ` in ${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}`}
            </p>
            {/* Debug info - remove this later */}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, index) => {
                return (
                <motion.div
                  key={testimonial.id}
                  ref={testimonialRefs[index]}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.16, 0.77, 0.47, 0.97]
                    } 
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-yellow-400 mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="inline-flex items-center text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {getCategoryIcon(testimonial.category)}
                        {testimonial.category.charAt(0).toUpperCase() + testimonial.category.slice(1)}
                      </span>
                    </div>
                    
                    <div className="relative">
                      <FaQuoteLeft className="text-gray-200 text-3xl absolute -left-2 -top-2" />
                      <p className="text-gray-700 relative z-10 pl-6">{testimonial.content}</p>
                    </div>
                    
                    <div className="mt-4 text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          {/* Submit Testimonial */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h2>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  Thank you for your feedback! Your testimonial has been submitted for review.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rating *
                    </label>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className="cursor-pointer">
                          <input
                            type="radio"
                            name="rating"
                            value={star}
                            checked={formData.rating === star}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <FaStar 
                            className={`text-2xl ${formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="doctors">Doctors</option>
                      <option value="services">Services</option>
                      <option value="facility">Facility</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Testimonial *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      rows={4}
                      required
                      value={formData.content}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Share your experience with us..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Submit Testimonial
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;