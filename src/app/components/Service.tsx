'use client';
import Link from 'next/link';
import { FaCar, FaHospital, FaCalendarAlt, FaCalculator, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  slug: string;
  short: string;
  color: string;
  iconColor: string; 
};

const services: Service[] = [
  {
    icon: FaCar,
    title: "Garage Management",
    slug: "garage-management",
    short: "Streamline garage operations with ease.",
    color: "from-blue-300 to-blue-500",
    iconColor: "text-blue-500" 
  },
  {
    icon: FaHospital,
    title: "Hospital Management",
    slug: "hospital-management",
    short: "Efficient tools for medical institutions.",
    color: "from-green-300 to-green-500",
    iconColor: "text-green-500" 
  },
  {
    icon: FaCalendarAlt,
    title: "Appointment Booking",
    slug: "appointment-booking",
    short: "Hassle-free booking and scheduling.",
    color: "from-purple-300 to-purple-500",
    iconColor: "text-purple-500"
  },
  {
    icon: FaCalculator,
    title: "Accounting",
    slug: "accounting",
    short: "Smart financial tools for your business.",
    color: "from-red-300 to-red-500",
    iconColor: "text-red-500" 
  },
  {
    icon: FaBalanceScale,
    title: "Advocate Services",
    slug: "advocate-services",
    short: "Modern case and document tracking.",
    color: "from-yellow-300 to-yellow-500",
    iconColor: "text-yellow-500" 
  }
];

interface ServiceItemProps {
  service: Service;
  index: number;
}

const ServiceItem = ({ service, index }: ServiceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl p-8 h-full bg-gradient-to-br ${service.color} text-white`}
    >
      <div className="absolute -right-11 -top-10 w-32 h-32 rounded-full bg-white bg-opacity-10"></div>
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-xl ${service.iconColor} bg-white bg-opacity-20 flex items-center justify-center mb-6`}>
          <service.icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="mb-6 opacity-90">{service.short}</p>
        <Link
          href="/Servicess"
          className="inline-flex items-center px-5 py-2 rounded-full bg-white text-gray-600 bg-opacity-20 hover:bg-opacity-30 transition-all border border-white border-opacity-30"
        >
          Know More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};


const ServicesList = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Innovative solutions tailored to your business needs
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
          
          {/* Extra special card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Need something specific? We build custom software solutions tailored to your unique business requirements.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all font-medium"
              >
                Get a Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;