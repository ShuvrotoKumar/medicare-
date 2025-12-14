"use client";

import React from 'react';
import { FaUserMd, FaHeartbeat, FaHospital, FaStethoscope, FaClinicMedical, FaMicroscope, FaSyringe } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    image: '/images/d3.jpg',
    bio: 'Board-certified physician with over 15 years of experience in internal medicine and healthcare leadership.'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Head of Cardiology',
    image: '/images/d2.jpg',
    bio: 'Renowned cardiologist specializing in interventional procedures and preventive cardiology.'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Pediatric Specialist',
    image: '/images/d1.jpg',
    bio: 'Dedicated pediatrician with a passion for children\'s health and wellness.'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    role: 'Orthopedic Surgeon',
    image: '/images/d4.jpg',
    bio: 'Expert in minimally invasive joint replacement and sports medicine.'
  }
];

const stats = [
  { id: 1, value: '15+', label: 'Years Experience', icon: <FaStethoscope className="w-8 h-8 text-blue-600" /> },
  { id: 2, value: '50+', label: 'Expert Doctors', icon: <FaUserMd className="w-8 h-8 text-green-600" /> },
  { id: 3, value: '10K+', label: 'Happy Patients', icon: <FaHeartbeat className="w-8 h-8 text-purple-600" /> },
  { id: 4, value: '24/7', label: 'Emergency Care', icon: <FaHospital className="w-8 h-8 text-red-600" /> },
];

const values = [
  {
    title: 'Patient-Centered Care',
    description: 'We put our patients at the heart of everything we do, providing personalized and compassionate care.',
    icon: <FaHeartbeat className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Medical Excellence',
    description: 'Our team of board-certified physicians stays at the forefront of medical advancements.',
    icon: <FaClinicMedical className="w-6 h-6 text-green-600" />
  },
  {
    title: 'Advanced Technology',
    description: 'We utilize cutting-edge diagnostic tools and treatment options for better outcomes.',
    icon: <FaMicroscope className="w-6 h-6 text-purple-600" />
  },
  {
    title: 'Comprehensive Services',
    description: 'From preventive care to specialized treatments, we offer a full spectrum of medical services.',
    icon: <FaSyringe className="w-6 h-6 text-red-600" />
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare+</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Delivering exceptional healthcare with compassion, innovation, and excellence since 2010.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/m4.jpg"
                  alt="Medical team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, MediCare+ has grown from a small community clinic to a leading healthcare provider, serving thousands of patients with comprehensive medical services. Our journey has been guided by a commitment to excellence and a passion for improving lives.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we continue to expand our services and facilities while maintaining the personalized care and attention that has been our hallmark since the beginning. Our team of dedicated professionals works tirelessly to ensure that every patient receives the highest standard of care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Our Mission</h4>
                  <p className="text-sm text-gray-600">To provide exceptional healthcare services that improve the health and well-being of our community.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Our Vision</h4>
                  <p className="text-sm text-gray-600">To be the most trusted healthcare provider, recognized for excellence in patient care and medical innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of highly skilled and compassionate healthcare professionals is dedicated to providing you with the best possible care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and reflect our commitment to excellence in healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule an appointment today and take the first step toward better health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors">
              Book an Appointment
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}