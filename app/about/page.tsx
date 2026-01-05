"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserMd, FaHeartbeat, FaHospital, FaStethoscope, FaClinicMedical, FaMicroscope, FaSyringe } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      id={id}
    >
      {children}
    </motion.div>
  );
};

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
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <SectionWrapper>
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              About MediCare+
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Delivering exceptional healthcare with compassion, innovation, and excellence since 2010.
            </motion.p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col md:flex-row items-center"
              variants={staggerContainer}
            >
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                variants={fadeInUp}
              >
                <motion.div 
                  className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/images/m4.jpg"
                    alt="Medical team"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                variants={fadeInUp}
              >
                <motion.h2 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  variants={fadeInUp}
                >
                  Our Story
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-6"
                  variants={fadeInUp}
                >
                  Founded in 2010, MediCare+ has grown from a small community clinic to a leading healthcare provider, serving thousands of patients with comprehensive medical services. Our journey has been guided by a commitment to excellence and a passion for improving lives.
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-8"
                  variants={fadeInUp}
                >
                  Today, we continue to expand our services and facilities while maintaining the personalized care and attention that has been our hallmark since the beginning. Our team of dedicated professionals works tirelessly to ensure that every patient receives the highest standard of care.
                </motion.p>
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-semibold text-blue-800">Our Mission</h4>
                    <p className="text-sm text-gray-600">To provide exceptional healthcare services that improve the health and well-being of our community.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-semibold text-green-800">Our Vision</h4>
                    <p className="text-sm text-gray-600">To be the most trusted healthcare provider, recognized for excellence in patient care and medical innovation.</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.id} 
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-gray-900 mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p className="text-gray-600">{stat.label}</motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Meet Our Expert Team
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-blue-600 mx-auto mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.p 
                className="text-gray-600 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Our team of highly skilled and compassionate healthcare professionals is dedicated to providing you with the best possible care.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {teamMembers.map((member, index) => {
                const delay = index * 0.1;
                return (
                  <motion.div 
                    key={member.id} 
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      delay: delay,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <motion.div 
                      className="relative h-64 w-full overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="p-6"
                      whileHover={{ backgroundColor: '#f8fafc' }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                variants={fadeInUp}
              >
                Our Core Values
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-blue-600 mx-auto mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.p 
                className="text-gray-600 max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                These principles guide everything we do and reflect our commitment to excellence in healthcare.
              </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {values.map((value, index) => {
                const colors = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-red-50'];
                const textColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-red-600'];
                return (
                  <motion.div 
                    key={index} 
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -10,
                      backgroundColor: colors[index % colors.length],
                      scale: 1.03
                    }}
                  >
                    <motion.div 
                      className={`w-12 h-12 ${colors[index % colors.length]} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.cloneElement(value.icon, { className: `w-6 h-6 ${textColors[index % textColors.length]}` })}
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p className="text-gray-600">{value.description}</motion.p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Experience Our Care?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Schedule an appointment today and take the first step toward better health and wellness.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/book')}
            >
              Book an Appointment
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-full transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}