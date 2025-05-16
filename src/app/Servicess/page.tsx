'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import {
  FaCar,
  FaHospital,
  FaCalendarAlt,
  FaCalculator,
  FaBalanceScale,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight
} from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  cta: string;
  color: string;
  gradient: string;
  accentColor: string;
}

const services: Service[] = [
  {
    icon: FaCar,
    title: "Garage Management",
    description: "Revolutionize your auto shop with seamless inventory, customer, and service tracking.",
    features: [
      "Digital job cards & work orders",
      "Parts inventory management",
      "Customer vehicle history",
      "Technician performance tracking",
      "Integrated payment processing"
    ],
    cta: "Transform Your Garage",
    color: "blue",
    gradient: "from-blue-600 to-blue-800",
    accentColor: "blue-400"
  },
  {
    icon: FaHospital,
    title: "Hospital Management",
    description: "Streamline healthcare operations with advanced administrative tools.",
    features: [
      "Electronic health records (EHR)",
      "Staff & doctor scheduling",
      "Pharmacy inventory",
      "Insurance billing",
      "Patient portal"
    ],
    cta: "Modernize Healthcare",
    color: "green",
    gradient: "from-green-600 to-green-800",
    accentColor: "green-400"
  },
  {
    icon: FaCalendarAlt,
    title: "Appointment Booking",
    description: "Effortless scheduling for service-based businesses.",
    features: [
      "Online booking portal",
      "Calendar synchronization",
      "Automated reminders",
      "Resource allocation",
      "Mobile access"
    ],
    cta: "Streamline Scheduling",
    color: "purple",
    gradient: "from-purple-600 to-purple-800",
    accentColor: "purple-400"
  },
  {
    icon: FaCalculator,
    title: "Accounting",
    description: "Simplify financial management with powerful tools.",
    features: [
      "Invoicing & payments",
      "Expense tracking",
      "Payroll processing",
      "Tax preparation",
      "Financial reporting"
    ],
    cta: "Simplify Finances",
    color: "yellow",
    gradient: "from-yellow-600 to-yellow-800",
    accentColor: "yellow-400"
  },
  {
    icon: FaBalanceScale,
    title: "Advocate Services",
    description: "Organize your legal practice with intuitive case management.",
    features: [
      "Case tracking",
      "Document management",
      "Court date calendar",
      "Client communication",
      "Billing & invoicing"
    ],
    cta: "Organize Your Practice",
    color: "red",
    gradient: "from-red-600 to-red-800",
    accentColor: "red-400"
  }
];

interface ServiceSectionProps {
  service: Service;
  index: number;
}

const ServiceSection = ({ service, index }: ServiceSectionProps) => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className={clsx(
        "min-h-screen py-20 flex items-center justify-center bg-gradient-to-br relative overflow-hidden",
        service.gradient
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent" />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-xl"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/10 blur-xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-white"
        >
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className={clsx(
              "w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg",
              `bg-${service.accentColor}/20 backdrop-blur-md`,
              `text-${service.accentColor}`
            )}>
            <service.icon className="w-10 h-10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {service.title.split(' ').map((word, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {service.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
              className={clsx(
                "inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl",
                `bg-${service.accentColor} hover:bg-${service.accentColor}/90`,
                "group"
              )}
            >
              {service.cta}
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <button 
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center px-6 py-4 font-medium rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 backdrop-blur-md"
            >
              {expanded ? (
                <>
                  Show Less <FaChevronUp className="ml-2" />
                </>
              ) : (
                <>
                  Key Features <FaChevronDown className="ml-2" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div 
            onClick={() => setExpanded(!expanded)}
            className="cursor-pointer"
          >
            <AnimatePresence>
              {expanded ? (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-6"
                >
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 group relative overflow-hidden"
                    >
                      <div className={clsx(
                        "absolute inset-0 transition-all duration-300",
                        `group-hover:bg-${service.accentColor}/10`
                      )} />
                      <div className={clsx(
                        "w-12 h-12 rounded-full flex items-center justify-center mr-4 z-10 flex-shrink-0",
                        `bg-${service.accentColor}/20`,
                        `text-${service.accentColor}`
                      )}>
                        <FiCheckCircle className="w-6 h-6" />
                      </div>
                      <span className="text-white z-10 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="card"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={clsx(
                    "w-full h-80 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20",
                    "bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md",
                    "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  )}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className={clsx(
                        "w-32 h-32 opacity-30",
                        `text-${service.accentColor}`
                      )} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white">Key Features</h3>
                      <p className="text-white/80 mt-2">Click to explore {service.features.length} powerful features</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1 0"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative bg-gray-900 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-purple-900/20 to-transparent" 
        style={{ y: backgroundY }} 
      />
      
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: [0, 0.5, 0],
          }}
          transition={{ 
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 rounded-full bg-white/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 3 }}
            className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-8"
            >
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4"
              >
                Innovative Business Solutions
              </motion.span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
              Transform Your
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
              >
                Business Operations
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Discover cutting-edge tools tailored to supercharge your industry with seamless automation and management.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="#services"
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
              Explore Solutions <FaChevronDown className="ml-2 animate-bounce" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <div id="services">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;