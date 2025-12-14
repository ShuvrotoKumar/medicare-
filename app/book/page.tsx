'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, MessageSquare, Stethoscope, ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
type FormData = {
  name: string;
  email: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
};

const departments = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dermatology',
  'Ophthalmology',
];

const doctors = {
  'Cardiology': ['Dr. John Smith', 'Dr. Sarah Johnson'],
  'Neurology': ['Dr. Michael Brown', 'Dr. Emily Davis'],
  'Orthopedics': ['Dr. Robert Wilson', 'Dr. Jennifer Lee'],
  'Pediatrics': ['Dr. David Miller', 'Dr. Lisa Taylor'],
  'Dermatology': ['Dr. James Anderson', 'Dr. Maria Garcia'],
  'Ophthalmology': ['Dr. Thomas Clark', 'Dr. Patricia White'],
};

export default function BookAppointment() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState<string[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>();

  const handleDepartmentSelect = (department: string) => {
    setSelectedDepartment(department);
    setSelectedDoctor('');
    setValue('department', department);
    setAvailableDoctors(doctors[department as keyof typeof doctors] || []);
    setShowDepartmentDropdown(false);
  };

  const handleDoctorSelect = (doctor: string) => {
    setSelectedDoctor(doctor);
    setValue('doctor', doctor);
    setShowDoctorDropdown(false);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Appointment booked:', data);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    alert('Appointment Booked Successfully!\n\nWe\'ve sent a confirmation to your email address.');
    // Reset form after successful booking
    setSelectedDepartment('');
    setSelectedDoctor('');
    setValue('name', '');
    setValue('email', '');
    setValue('phone', '');
    setValue('department', '');
    setValue('doctor', '');
    setValue('date', '');
    setValue('time', '');
    setValue('message', '');
    setIsSuccess(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
            <p className="text-gray-600">Great doctor if you need your family member to get immediate assistance, emergency treatment, or a simple consultation.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9\+\-\s]*$/,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                {/* Department Dropdown */}
                <div className="relative">
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
                    >
                      <span className="flex items-center">
                        <Stethoscope className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" />
                        <span className="block truncate">{selectedDepartment || 'Select Department'}</span>
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </span>
                    </button>
                    <input type="hidden" {...register('department', { required: 'Department is required' })} />
                    {showDepartmentDropdown && (
                      <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                        <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {departments.map((dept) => (
                            <li
                              key={dept}
                              className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                              onClick={() => handleDepartmentSelect(dept)}
                            >
                              <div className="flex items-center">
                                <span className="font-normal block truncate">{dept}</span>
                              </div>
                              {selectedDepartment === dept && (
                                <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                  <Check className="h-5 w-5" />
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {errors.department && <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>}
                </div>

                {/* Doctor Dropdown */}
                <div className="relative">
                  <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                    Doctor
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-50"
                      onClick={() => setShowDoctorDropdown(!showDoctorDropdown)}
                      disabled={!selectedDepartment}
                    >
                      <span className="flex items-center">
                        <User className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" />
                        <span className="block truncate">
                          {selectedDoctor || (selectedDepartment ? 'Select Doctor' : 'Select Department First')}
                        </span>
                      </span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </span>
                    </button>
                    <input type="hidden" {...register('doctor', { required: 'Doctor is required' })} />
                    {showDoctorDropdown && availableDoctors.length > 0 && (
                      <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
                        <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                          {availableDoctors.map((doctor) => (
                            <li
                              key={doctor}
                              className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                              onClick={() => handleDoctorSelect(doctor)}
                            >
                              <div className="flex items-center">
                                <span className="font-normal block truncate">{doctor}</span>
                              </div>
                              {selectedDoctor === doctor && (
                                <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                  <Check className="h-5 w-5" />
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {errors.doctor && <p className="mt-1 text-sm text-red-600">{errors.doctor.message}</p>}
                </div>

                {/* Date Picker */}
                <div className="relative">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Date
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      {...register('date', { required: 'Date is required' })}
                      min={new Date().toISOString().split('T')[0]}
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                    />
                  </div>
                  {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
                </div>

                {/* Time Picker */}
                <div className="relative">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Appointment Time
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="time"
                      id="time"
                      {...register('time', { required: 'Time is required' })}
                      min="09:00"
                      max="17:00"
                      step="1800"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                    />
                  </div>
                  {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message (Optional)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute top-3 left-0 pl-3">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={3}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md border"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}