import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils';

const metrics = [
  { value: '20+', label: 'Concurrent Enterprise Workstreams' },
  { value: 'Tier-1', label: 'Enterprise Contracts Supported' },
  { value: '30%', label: 'Reduction in Migration Time' },
  { value: 'Fortune 500', label: 'T-Mobile, AT&T, Verizon' },
];

export default function Hero() {
  const handleViewWork = () => {
    scrollToSection('projects');
  };

  const handleContact = () => {
    scrollToSection('contact');
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Animated background blobs — warm, very subtle on light bg */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -50, 25, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-1/4 w-96 h-96 bg-gold-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -35, 20, 0], y: [0, 45, -30, 0], scale: [1, 0.9, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 left-1/4 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-10 pointer-events-none"
      />

      <div className="container relative z-10 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Credential line — primary visual element, large serif */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-accent-600 mb-4 leading-relaxed"
            >
              Technical Program Lead, Enterprise Readiness & Cross-Functional Delivery, SAFe 5
            </motion.p>

            {/* Supporting sentence — smaller, sans-serif */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="font-sans text-lg md:text-xl text-primary-900 mt-4 mb-10 leading-relaxed"
            >
              I help people feel confident with complicated technology, whether they're building it or using it.
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleViewWork}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white font-medium rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 ease-in-out group"
                aria-label="View strategic outcomes"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={handleContact}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent-500 hover:text-accent-600 transition-all duration-200 group"
                aria-label="Contact Diana Wallace"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <Link
                to="/resume"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent-500 hover:text-accent-600 transition-all duration-200 group"
                aria-label="View Diana Wallace's resume"
              >
                Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full opacity-20"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-stone-200 to-transparent rounded-full opacity-10"></div>
              <div className="relative w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gray-100 shadow-large overflow-hidden border-2 border-gold-300 animate-photo-glow">
                <img
                  src="/profile.png"
                  alt="Diana Wallace — Technical Program Lead, Enterprise Readiness"
                  className="w-full h-full object-cover bg-[radial-gradient(circle,_#FBF8F2_0%,_#F3EEE3_100%)]"
                  style={{ objectPosition: 'center 20%' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 w-full border-t border-gray-200 bg-gray-50/80 backdrop-blur-sm"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                className="py-6 px-6 text-center"
              >
                <div className="font-heading font-bold text-2xl lg:text-3xl text-accent-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm font-sans">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


    </section>
  );
}
