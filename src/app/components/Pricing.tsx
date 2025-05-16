'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';


const plans = [
  {
    name: 'Starter',
    price: { monthly: '₹1999', annual: '₹1799' },
    period: { monthly: '/month', annual: '/month (billed annually)' },
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 10 users',
      'Basic CRM features',
      'Email support',
      'API access',
      'Basic reporting',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: { monthly: '₹7779', annual: '₹6999' },
    period: { monthly: '/month', annual: '/month (billed annually)' },
    description: 'For growing businesses with more needs',
    features: [
      'Up to 50 users',
      'Advanced CRM + ERP',
      'Priority support',
      'Custom workflows',
      'Advanced analytics',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    period: { monthly: '', annual: '' },
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited users',
      'Full CRM + ERP suite',
      '24/7 dedicated support',
      'Custom integrations',
      'On-premise options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];




const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Choose the plan that works best for your business needs.
          </p>
          {/* Monthly/Annual Toggle */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${!isAnnual ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-purple-300'}`}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${isAnnual ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-purple-300'}`}
              aria-pressed={isAnnual}
            >
              Annual (Save 10%)
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-purple-600' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-1 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 transform translate-x-2 -translate-y-2 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="ml-1 text-lg sm:text-xl font-medium text-gray-500">
                    {isAnnual ? plan.period.annual : plan.period.monthly}
                  </span>
                </div>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FiCheck className="flex-shrink-0 w-5 h-5 text-purple-500" aria-hidden="true" />
                      <span className="ml-2 text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                    className={`w-full block text-center px-4 sm:px-6 py-3 border border-transparent rounded-md text-sm sm:text-base font-medium ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'} shadow-sm transition-colors focus:ring-2 focus:ring-purple-500 focus:outline-none`}
                    aria-label={`Choose ${plan.name} plan`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        

        


        
      </div>
    </section>
  );
};

export default Pricing;