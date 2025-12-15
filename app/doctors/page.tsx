"use client";

import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { FaSearch, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaStar, FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const specialties = [
  'All Specialties',
  'Cardiology',
  'Neurology',
  'Dentistry',
  'Ophthalmology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology'
];

interface Appointment {
  date: string;
  time: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  available: string;
  address: string;
  phone: string;
  email: string;
  bio: string;
  education: string;
  certifications: string[];
  languages: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.9,
    reviews: 128,
    image: '/images/d1.jpg',
    available: 'Mon, Wed, Fri',
    address: '123 Medical Center Drive, Suite 101',
    phone: '(555) 123-4567',
    email: 'dr.johnson@medicare.com',
    bio: 'Board-certified cardiologist with extensive experience in interventional cardiology and heart failure management.',
    education: 'MD, Harvard Medical School',
    certifications: ['FACC', 'FSCAI'],
    languages: ['English', 'Spanish']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    experience: 12,
    rating: 4.8,
    reviews: 98,
    image: '/images/d2.jpg',
    available: 'Tue, Thu, Sat',
    address: '456 Brain & Spine Center, Suite 205',
    phone: '(555) 234-5678',
    email: 'dr.chen@medicare.com',
    bio: 'Specializes in treating complex neurological disorders including epilepsy, stroke, and multiple sclerosis.',
    education: 'MD, Johns Hopkins University',
    certifications: ['FAAN', 'FAHS'],
    languages: ['English', 'Mandarin']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: 10,
    rating: 4.9,
    reviews: 156,
    image: '/images/d3.jpg',
    available: 'Mon-Fri',
    address: '789 Children\'s Health Center',
    phone: '(555) 345-6789',
    email: 'dr.rodriguez@medicare.com',
    bio: 'Passionate about children\'s health and wellness, providing compassionate care for patients from birth through adolescence.',
    education: 'MD, Stanford University',
    certifications: ['FAAP'],
    languages: ['English', 'Spanish', 'French']
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    experience: 18,
    rating: 4.7,
    reviews: 112,
    image: '/images/d4.jpg',
    available: 'Mon, Wed, Fri',
    address: '321 Bone & Joint Center, Suite 150',
    phone: '(555) 456-7890',
    email: 'dr.wilson@medicare.com',
    bio: 'Expert in minimally invasive joint replacement and sports medicine procedures.',
    education: 'MD, Mayo Clinic College of Medicine',
    certifications: ['ABOS', 'AAOS'],
    languages: ['English']
  },
  {
    id: 5,
    name: 'Dr. Lisa Wong',
    specialty: 'Dermatologist',
    experience: 9,
    rating: 4.8,
    reviews: 87,
    image: '/images/m5.jpg',
    available: 'Tue, Thu, Sat',
    address: '654 Skin Care Center, Suite 220',
    phone: '(555) 567-8901',
    email: 'dr.wong@medicare.com',
    bio: 'Specializes in medical and cosmetic dermatology, with expertise in skin cancer prevention and treatment.',
    education: 'MD, University of California, San Francisco',
    certifications: ['FAAD'],
    languages: ['English', 'Cantonese']
  },
  {
    id: 6,
    name: 'Dr. Robert Taylor',
    specialty: 'Ophthalmologist',
    experience: 14,
    rating: 4.9,
    reviews: 134,
    image: '/images/m6.jpg',
    available: 'Mon-Fri',
    address: '987 Vision Center, Suite 300',
    phone: '(555) 678-9012',
    email: 'dr.taylor@medicare.com',
    bio: 'Specializes in cataract surgery, LASIK, and treatment of retinal diseases.',
    education: 'MD, Duke University',
    certifications: ['AAO'],
    languages: ['English', 'Spanish']
  }
];

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All Specialties');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [appointment, setAppointment] = useState<Appointment>({ date: '', time: '' });
  const [reason, setReason] = useState('');

  const filteredDoctors = doctors.filter((doctor: Doctor) => {
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                           doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSpecialty && matchesSearch;
  });

  const handleBookAppointment = (doctor: Doctor): void => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleSubmitAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDoctor) return;
    
    // Here you would typically send the appointment request to your backend
    alert(`Appointment booked with ${selectedDoctor.name} on ${appointment.date} at ${appointment.time}`);
    setShowModal(false);
    setAppointment({ date: '', time: '' });
    setReason('');
  };

  const renderStars = (rating: number) => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  const doctorCardsRef = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const currentRefs = Object.values(doctorCardsRef.current).filter(Boolean) as HTMLDivElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [filteredDoctors]);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .doctor-card {
          opacity: 0;
        }
      `}</style>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Doctors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet our team of highly qualified and experienced healthcare professionals dedicated to your well-being.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="block w-full md:w-64 px-3 py-3 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div 
                key={doctor.id} 
                ref={el => {
                  if (el) {
                    doctorCardsRef.current[doctor.id] = el;
                  } else {
                    delete doctorCardsRef.current[doctor.id];
                  }
                }}
                className="doctor-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${doctor.id * 0.1}s` }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {doctor.rating}
                      <FaStar className="ml-1 text-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    {doctor.address.split(',')[0]}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.bio}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium text-gray-700">{doctor.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{doctor.reviews} reviews</span>
                    </div>
                    <button
                      onClick={() => handleBookAppointment(doctor)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No doctors found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Appointment Modal */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Book an Appointment</h3>
                  <p className="text-gray-600">Schedule a consultation with {selectedDoctor.name}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedDoctor.image}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{selectedDoctor.name}</h4>
                  <p className="text-blue-600 mb-2">{selectedDoctor.specialty}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaPhoneAlt className="mr-2 text-blue-500" />
                    {selectedDoctor.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaEnvelope className="mr-2 text-blue-500" />
                    {selectedDoctor.email}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <form onSubmit={handleSubmitAppointment}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={appointment.date}
                        onChange={(e) => setAppointment(prev => ({ ...prev, date: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        value={appointment.time}
                        onChange={(e) => setAppointment(prev => ({ ...prev, time: e.target.value }))}
                        required
                      >
                        <option value="">Select a time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Visit
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Please describe the reason for your visit..."
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}