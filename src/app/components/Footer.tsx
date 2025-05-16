import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              <Link href="/" className="flex items-center">
                <span className="sr-only">CRMERP</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3">CE</div>
                <span>CRMERP</span>
              </Link>
            </h3>
            <p className="text-gray-400 mb-4">
              The complete business management solution combining CRM with powerful ERP modules.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Solutions', 'Pricing', 'Testimonials', 'Case Studies'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Blog', 'Help Center', 'Community'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/resources/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">123 Business Ave</p>
              <p className="mb-2">Suite 400</p>
              <p className="mb-2">San Francisco, CA 94107</p>
              <p className="mb-2">Email: <Link href="mailto:info@crmerp.com" className="hover:text-purple-400 transition-colors">info@crmerp.com</Link></p>
              <p>Phone: <Link href="tel:+11234567890" className="hover:text-purple-400 transition-colors">(123) 456-7890</Link></p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} CRMERP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;