'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute rounded-4xl inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-95"></div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your business ?
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-purple-100 mx-auto">
            Join thousands of businesses that have streamlined their operations with our platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='sm:mb-0 mb-4'
            >
              <Link
                href="/#"
                className="w-full  sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all"
              >
                Start Free Trial
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#"
                className="w-full sm:w-auto px-8 py-4 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:bg-opacity-10 md:py-4 md:text-lg md:px-10 transition-all"
              >
                Live Demo
              </Link>
            </motion.div>
          </div>
          <p className="mt-5 text-sm text-purple-200">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;