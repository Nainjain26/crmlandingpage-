"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer a wide range of services including web development, digital marketing, SEO, and more tailored to your business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary based on scope, but typically range from 2 to 6 weeks. We'll provide a detailed timeline after discussing your requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer maintenance packages to ensure your product runs smoothly after launch with regular updates and bug fixes.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We specialize in modern redesigns that improve performance, UX, and conversions.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-purple-50 dark:from-[#0f172a] dark:to-[#1e293b]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 dark:text-white group"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-full bg-purple-200 dark:bg-purple-900 p-2 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition"
                >
                  <FiChevronDown className="w-5 h-5 text-purple-600 dark:text-white" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 text-gray-600 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
