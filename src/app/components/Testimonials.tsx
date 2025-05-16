'use client';
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Retail Solutions",
    quote: "CRMERP transformed our operations. We've seen a 40% increase in efficiency and customer satisfaction since implementation.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    position: "Operations Director",
    quote: "The integration between CRM and inventory management saved us countless hours and reduced errors significantly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emma Rodriguez",
    position: "CFO, TechStart",
    quote: "Financial reporting became so much easier with all our data in one place. Highly recommend this solution.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-purple-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;