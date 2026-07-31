import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'apkudo',
    detailPath: 'apkudo',
    tabLabel: 'Apkudo',
    icon: Building2,
    company: 'Apkudo — Device Intelligence',
    title: 'Head of Customer Education & Readiness',
    metric: '20+',
    metricLabel: 'Concurrent Workstreams',
    linkedinUrl: 'https://www.linkedin.com/in/dc-wallace/details/experience/',
  },
  {
    id: 'kroger',
    detailPath: '84-51',
    tabLabel: '84.51° / Kroger',
    icon: TrendingUp,
    company: '84.51° / Kroger — Retail Data Science',
    title: 'Developer Experience (DX) Lead & Senior Technical Writer',
    metric: '+25%',
    metricLabel: 'Developer Usability',
    linkedinUrl: null,
  },
  {
    id: 'blackbaud',
    detailPath: 'blackbaud',
    tabLabel: 'Blackbaud',
    icon: Zap,
    company: 'Blackbaud — Nonprofit SaaS',
    title: 'Cloud Migration Strategist & Technical Writer',
    metric: '30%',
    metricLabel: 'Reduction in Migration Time',
    linkedinUrl: null,
  },
];

export default function ProjectsTeaser() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);

  const selectTab = (id: string) => setSelectedId(id);

  const study = caseStudies.find(s => s.id === selectedId)!;
  const Icon = study.icon;

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Strategic <span className="text-gradient">Outcomes</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            A track record of building education programs that move the needle on enterprise growth,
            developer experience, and customer retention.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-2"
        >
          <div className="inline-flex items-center gap-1 bg-primary-50 rounded-2xl p-2">
            {caseStudies.map((s) => (
              <button
                key={s.id}
                onClick={() => selectTab(s.id)}
                className={`px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-sans rounded-xl transition-all duration-200 cursor-pointer ${
                  selectedId === s.id
                    ? 'bg-white text-primary-900 font-bold shadow-soft border border-gold-300'
                    : 'text-primary-900/60 font-medium hover:text-primary-900'
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab preview line */}
        <p className="text-center text-sm text-gray-500 italic mb-6 font-sans">
          {selectedId === 'apkudo' && 'A Tier-1 telecom engagement, built from the ground up.'}
          {selectedId === 'kroger' && 'A 25% usability gain across a major developer platform.'}
          {selectedId === 'blackbaud' && 'A 30% faster migration, powered by custom tooling.'}
        </p>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
              <div className="grid lg:grid-cols-4">
                {/* Metric Sidebar */}
                <div className="bg-primary-800 p-8 flex flex-col items-center justify-center text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 rounded-xl mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="font-heading font-bold text-4xl text-primary-400 mb-1">
                    {study.metric}
                  </div>
                  <div className="text-gray-400 text-sm font-sans">{study.metricLabel}</div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8">
                  <p className="text-primary-600 text-sm font-semibold font-sans uppercase tracking-widest mb-2">
                    {study.company}
                  </p>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
                    {study.title}
                  </h3>

                  <Link
                    to={`/projects/${study.detailPath}`}
                    className="inline-flex items-center px-4 py-2 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200 animate-breathe"
                  >
                    View the Project
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-accent-600 rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Ready to make education a competitive advantage?
            </h3>
            <p className="text-accent-100 mb-6 font-sans">
              Let's discuss how strategic education programs can accelerate your product's growth.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-50 text-accent-700 font-medium rounded-lg hover:bg-white transition-all duration-200 ease-in-out"
            >
              Start the Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
