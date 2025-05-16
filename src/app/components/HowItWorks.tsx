'use client';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiSettings, FiTrendingUp } from 'react-icons/fi';
import { useRef } from 'react';

const steps = [
  {
    icon: FiUploadCloud,
    title: "Setup in minutes",
    description: "Get started quickly with our intuitive onboarding process. Import your existing data or start fresh.",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    textColor: "text-purple-200"
  },
  {
    icon: FiSettings,
    title: "Customize workflows",
    description: "Tailor the system to your business processes with our flexible configuration options.",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    textColor: "text-indigo-200"
  },
  {
    icon: FiTrendingUp,
    title: "Grow your business",
    description: "Scale effortlessly as your business grows with our enterprise-ready platform.",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    textColor: "text-blue-200"
  }
];

const HowItWorks = () => {
  const scrollRef = useRef(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Unlock CRMERP&apos;s Power
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Three simple steps to revolutionize your business operations.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="md:flex space-x-6  space-y-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="  snap-center"
              >
                <motion.div
                  className="relative bg-white rounded-2xl shadow-xl overflow-hidden"
                  whileHover={{ y: -10, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className={`h-32 ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    <div className="mt-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-opacity-10 ${step.color} ${step.textColor}`}>
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                  {/* Parallax Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent opacity-20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
         
        </div>

        {/* Video Section */}
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="mt-16 relative"
>
  <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto transform -rotate-3">
    <div className="md:flex items-center">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">See CRMERP Live</h3>
        <p className="text-gray-600 mb-6 text-sm">
          Dive into our 2-minute demo to witness CRMERP&apos;s magic in action.
        </p>
        <motion.button
          className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-indigo-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          Watch Now 
        </motion.button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <iframe
          className="w-full h-48 rounded-lg" 
          src="https://www.youtube.com/embed/RY32wSQDekE?si=u_TrxlNVKpgTjjtx" 
          title="CRMERP Product Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl shadow-lg transform rotate-3 z-0"></div>
</motion.div>
      </div>

      {/* Custom Scrollbar Hide CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;