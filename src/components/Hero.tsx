import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils';

const metrics = [
  { value: '20+', label: 'Concurrent Enterprise Workstreams' },
  { value: '$M+', label: 'Enterprise Contracts Supported' },
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated background blobs — light colors for visibility on dark bg */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -50, 25, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-1/4 w-96 h-96 bg-primary-300 rounded-full filter blur-3xl opacity-20 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -35, 20, 0], y: [0, 45, -30, 0], scale: [1, 0.9, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 left-1/4 w-96 h-96 bg-sky-300 rounded-full filter blur-3xl opacity-15 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-10 pointer-events-none"
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
            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-primary-400 font-semibold text-lg mb-3 tracking-wide font-inter"
            >
              Diana Wallace
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Architecting customer education for{' '}
              <span className="text-primary-400">scalable growth.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl font-inter"
            >
              I build the education systems and documentation frameworks that turn complex technical
              products into intuitive customer experiences, moving organizations from reactive support
              to proactive enablement.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleViewWork}
                className="btn-primary group"
                aria-label="View strategic outcomes"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={handleContact}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-200 rounded-lg font-medium hover:border-primary-500 hover:text-primary-400 transition-all duration-200 group"
                aria-label="Contact Diana Wallace"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href="https://www.canva.com/design/DAGK-OKt0Sg/qjWFsNJU7rTWYtoiX97l7Q/view?utm_content=DAGK-OKt0Sg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-200 rounded-lg font-medium hover:border-primary-500 hover:text-primary-400 transition-all duration-200 group"
                aria-label="View Diana Wallace's resume (opens in new tab)"
              >
                Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                <span className="sr-only">Opens in new tab</span>
              </a>
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
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full opacity-20"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-700 to-primary-900 rounded-full opacity-10"></div>
              <div className="relative w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary-700 to-gray-800 flex items-center justify-center shadow-large overflow-hidden border-2 border-primary-800">
                <img
                  src="/profile.png"
                  alt="Diana Wallace - Customer Education & Technical Enablement Leader"
                  className="w-full h-full object-cover rounded-full"
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
        transition={{ delay: 0.85, duration: 0.8 }}
        className="relative z-10 w-full border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-800">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                className="py-6 px-6 text-center"
              >
                <div className="font-poppins font-bold text-2xl lg:text-3xl text-primary-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm font-inter">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
