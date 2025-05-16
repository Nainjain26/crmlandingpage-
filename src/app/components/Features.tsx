'use client';
import { motion } from 'framer-motion';

import { FaChartLine, FaUsers, FaBoxes, FaMoneyBillWave, FaSyncAlt, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaChartLine,
    title: "Advanced Analytics",
    description: "Real-time business insights with customizable dashboards and reports."
  },
  {
    icon: FaUsers,
    title: "Customer Management",
    description: "Centralize all customer interactions and data in one unified platform."
  },
  {
    icon: FaBoxes,
    title: "Inventory Control",
    description: "Automated inventory tracking with low stock alerts and reordering."
  },
  {
    icon: FaMoneyBillWave,
    title: "Financial Integration",
    description: "Seamless connection between sales, invoices, and accounting."
  },
  {
    icon: FaSyncAlt,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline business processes."
  },
  {
    icon: FaShieldAlt,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access controls and encryption."
  }
];
 
const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8  bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Powerful Features</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Designed for Growth
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Everything you need to manage your business efficiently and scale without limits.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;