"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaStethoscope, FaHeartbeat, FaTooth, FaBrain, FaBone, FaEye, FaLungs, FaProcedures, FaUserMd, FaClinicMedical, FaMicroscope, FaSyringe, FaArrowDown } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Comprehensive heart care including diagnostics, treatment, and prevention of cardiovascular diseases.',
    icon: <FaHeartbeat className="w-12 h-12 text-blue-600 mb-4" />,
    features: [
      'Echocardiograms',
      'Stress Testing',
      'Cardiac Catheterization',
      'Pacemaker Implantation'
    ],
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 2,
    title: 'Dentistry',
    description: 'Complete dental care for all ages, from routine checkups to advanced procedures.',
    icon: <FaTooth className="w-12 h-12 text-green-600 mb-4" />,
    features: [
      'Teeth Cleaning',
      'Dental Implants',
      'Cosmetic Dentistry',
      'Root Canal Therapy'
    ],
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700'
  },
  {
    id: 3,
    title: 'Neurology',
    description: 'Expert care for disorders of the nervous system, including the brain and spinal cord.',
    icon: <FaBrain className="w-12 h-12 text-purple-600 mb-4" />,
    features: [
      'EEG Testing',
      'Nerve Conduction Studies',
      'Botulinum Toxin Therapy',
      'Migraine Treatment'
    ],
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    id: 4,
    title: 'Orthopedics',
    description: 'Specialized care for musculoskeletal system including bones, joints, and muscles.',
    icon: <FaBone className="w-12 h-12 text-red-600 mb-4" />,
    features: [
      'Joint Replacement',
      'Sports Medicine',
      'Spinal Surgery',
      'Fracture Care'
    ],
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    buttonColor: 'bg-red-600 hover:bg-red-700'
  },
  {
    id: 5,
    title: 'Ophthalmology',
    description: 'Comprehensive eye care including vision correction and treatment of eye diseases.',
    icon: <FaEye className="w-12 h-12 text-amber-500 mb-4" />,
    features: [
      'Cataract Surgery',
      'LASIK',
      'Glaucoma Treatment',
      'Retinal Care'
    ],
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-500',
    buttonColor: 'bg-amber-500 hover:bg-amber-600'
  },
  {
    id: 6,
    title: 'Pulmonology',
    description: 'Expert care for respiratory conditions and diseases of the lungs.',
    icon: <FaLungs className="w-12 h-12 text-teal-600 mb-4" />,
    features: [
      'Asthma Treatment',
      'COPD Management',
      'Sleep Studies',
      'Lung Function Testing'
    ],
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    buttonColor: 'bg-teal-600 hover:bg-teal-700'
  }
];

const features = [
  {
    icon: <FaUserMd className="w-8 h-8 text-blue-600" />,
    title: 'Expert Doctors',
    description: 'Board-certified specialists with years of experience'
  },
  {
    icon: <FaClinicMedical className="w-8 h-8 text-blue-600" />,
    title: 'Modern Equipment',
    description: 'State-of-the-art medical technology for accurate diagnosis'
  },
  {
    icon: <FaMicroscope className="w-8 h-8 text-blue-600" />,
    title: 'Advanced Labs',
    description: 'In-house laboratory for quick test results'
  },
  {
    icon: <FaSyringe className="w-8 h-8 text-blue-600" />,
    title: 'Emergency Care',
    description: '24/7 emergency medical services available'
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-blue-700 text-white py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Medical Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Comprehensive healthcare services designed to meet all your medical needs with compassion and excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 animate-bounce"
          >
            <FaArrowDown className="w-8 h-8 mx-auto text-blue-200" />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional healthcare with the latest technology and experienced professionals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of specialized medical services to meet your healthcare needs. 
              Our team of experts is dedicated to providing the highest quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${service.bgColor} hover:shadow-xl`}
                onClick={() => toggleCard(service.id)}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * (index % 3) + Math.floor(index / 3) * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-8 cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-white shadow-md mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {expandedCard === service.id 
                        ? service.description 
                        : `${service.description.substring(0, 80)}...`}
                    </p>
                    <button 
                      className={`mt-2 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors ${service.buttonColor}`}
                    >
                      {expandedCard === service.id ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                  
                  {expandedCard === service.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold mb-3 text-gray-700">Key Procedures:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-700 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help With Your Health?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of healthcare professionals is here to provide you with personalized care and treatment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href='/book' className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors">
              Book an Appointment
            </Link>
            <Link href='/contact' className="border-2 border-white text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-full transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}