import React from 'react';

const services = [
  {
    title: 'Primary Care',
    description: 'Comprehensive healthcare services for patients of all ages.',
    icon: '🏥'
  },
  {
    title: 'Specialist Care',
    description: 'Expert care from specialized medical professionals.',
    icon: '👨‍⚕️'
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency medical services when you need them most.',
    icon: '🚑'
  },
  {
    title: 'Diagnostic Services',
    description: 'Advanced diagnostic testing and imaging services.',
    icon: '🔍'
  },
  {
    title: 'Wellness Programs',
    description: 'Preventive care and health maintenance programs.',
    icon: '💪'
  },
  {
    title: 'Telemedicine',
    description: 'Virtual consultations from the comfort of your home.',
    icon: '💻'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs.
            Our team of experienced professionals is dedicated to providing the highest quality care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
