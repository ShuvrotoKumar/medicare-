import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    image: '/images/d1.jpg',
    experience: '15 years',
    bio: 'Specializes in interventional cardiology and preventive care.'
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    image: '/images/d2.jpg',
    experience: '12 years',
    bio: 'Expert in treating complex neurological disorders.'
  },
  {
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    image: '/images/d3.jpg',
    experience: '10 years',
    bio: 'Dedicated to children\'s health and wellness.'
  },
  {
    name: 'Dr. Robert Taylor',
    specialty: 'Orthopedic Surgeon',
    image: '/images/d4.jpg',
    experience: '18 years',
    bio: 'Specializes in joint replacement and sports medicine.'
  }
];

const Doctors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced medical professionals
            dedicated to providing exceptional healthcare services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={doctor.image}
                  alt={`Dr. ${doctor.name}, ${doctor.specialty}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {doctor.bio}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Experience:</span>
                  <span className="font-medium">{doctor.experience}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href='/doctors' className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
            View All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
