// In pages/contact.js, update ContactPage
'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { ComponentType, SVGProps } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';
import CtaSection from '../components/Cta';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setShowModal(true);
    reset(); // Clear form
  };

  const renderIcon = (IconComponent: ComponentType<SVGProps<SVGSVGElement>>) =>  {
    if (!IconComponent) return null;
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 py-24 px-4 sm:px-6 lg:px-8" id="contact">
      {/* Particle Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 60, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bg-purple-400 rounded-full"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <TypeAnimation
            sequence={[
              'Get in Touch',
              2000,
              'Let’s Connect',
              2000,
              'Reach Out Today',
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our ERP-integrated CRM? Reach out, and let’s discuss how we can help your business thrive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: PhoneIcon,
                title: 'Call Us',
                details: ['+1 (555) 123-4567', '24/7 Support Available'],
              },
              {
                icon: EnvelopeIcon,
                title: 'Email Us',
                details: ['hello@erp-crm.com', 'support@erp-crm.com'],
              },
              {
                icon: MapPinIcon,
                title: 'Visit Us',
                details: ['123 Innovation Blvd', 'San Francisco, CA 94107'],
                map: (
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019020323558!2d-122.41941568468157!3d37.77492977975896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e5f7b57%3A0x6b9d7f7b7f7f7f7f!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1631234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                  <div className="bg-white border border-purple-200 rounded-2xl p-6 shadow-md hover:shadow-purple-300/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                        {renderIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                        {item.details.map((detail, j) => (
                          <p key={j} className={`text-gray-${j === 0 ? '600' : '500'} text-sm`}>{detail}</p>
                        ))}
                        {item.map}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: ChatBubbleOvalLeftIcon, href: 'https://whatsapp.com', label: 'WhatsApp' },
                  { icon: PaperAirplaneIcon, href: 'https://telegram.org', label: 'Telegram' },
                  { icon: LifebuoyIcon, href: '/support', label: 'Support' },
                ].map((social, i) => (
                  <motion.div
                    key={social.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-purple-100 text-purple-600 p-3 rounded-full shadow-md hover:shadow-purple-400/50 transition-all"
                  >
                    <Link href={social.href} aria-label={social.label}>
                      {renderIcon(social.icon)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-purple-100/30 border border-purple-300/50 rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Your Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg bg-white border border-purple-300 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg bg-white border border-purple-300 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject', { required: 'Subject is required' })}
                  className={`w-full px-4 py-3 rounded-lg bg-white border border-purple-300 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${
                    errors.subject ? 'border-red-500' : ''
                  }`}
                  placeholder="What's this about?"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 rounded-lg bg-white border border-purple-300 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Type your message here..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: isSubmitting ? '' : '0 0 15px rgba(167, 139, 250, 0.5)' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-medium hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                  </motion.span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

       
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            >
              <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
              <p className="mt-2 text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
              Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className='mt-10'><CtaSection/></div>
    </div>
  );
};

export default ContactPage;