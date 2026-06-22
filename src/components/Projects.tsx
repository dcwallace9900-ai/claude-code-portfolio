import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, TrendingUp, Zap, ChevronDown, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 'apkudo',
    tabLabel: 'Apkudo',
    icon: Building2,
    company: 'Apkudo — Device Intelligence',
    title: 'Head of Customer Education & Readiness',
    challenge:
      'Establishing enterprise readiness infrastructure from the ground up to stabilize Tier-1 accounts and scale revenue-driving engagements across major telcos.',
    system:
      'Governed 20+ concurrent workstreams, integrated AI into technical enablement workflows, and enforced ISO/ISMS security standards — reporting directly to the COO to align with executive business priorities.',
    impact:
      "Stabilized Tier-1 accounts AT&T and Verizon through targeted readiness playbooks, and built the documentation infrastructure that supported T-Mobile's Demand Planning Centralized Platform initiative as it scaled from a $20M to $40M engagement.",
    expandedDetail:
      'The Demand Planning initiative required replacing a fragmented, multi-source data environment with a centralized platform. I built the client-facing pitch decks, current-state and future-state requirements, and process documentation that scoped the work and justified contract value, then served as subject matter expert in live pitch sessions to close the engagement.',
    metric: '20+',
    metricLabel: 'Concurrent Workstreams',
    tags: ['Customer Readiness Frameworks', 'Enterprise Enablement', 'AI Documentation', 'COO-Level Reporting'],
  },
  {
    id: 'kroger',
    tabLabel: '84.51° / Kroger',
    icon: TrendingUp,
    company: '84.51° / Kroger — Retail Data Science',
    title: 'Developer Experience (DX) Lead & Senior Technical Writer',
    challenge:
      'Enhancing the external developer experience and standardizing the knowledge base ecosystem across the Kroger Ad Platform.',
    system:
      'Led the technical enablement strategy for APIs, SDKs, and Developer Portals and spearheaded the cross-functional enterprise tooling evaluation process.',
    impact:
      'Improved developer usability by 25% and drove ADA and WCAG accessibility initiatives that raised content accessibility and usability scores by 40%.',
    expandedDetail:
      'Led cross-functional vendor evaluation and selection for enterprise knowledge base tooling, balancing budget constraints against engineering team needs. Mentored junior writers and defined documentation standards to keep quality consistent across quarterly release cycles.',
    metric: '+25%',
    metricLabel: 'Developer Usability',
    tags: ['API & SDK Documentation', 'Developer Portals', 'ADA/WCAG Accessibility', 'Enterprise Tooling'],
  },
  {
    id: 'blackbaud',
    tabLabel: 'Blackbaud',
    icon: Zap,
    company: 'Blackbaud — Nonprofit SaaS',
    title: 'Cloud Migration Strategist & Technical Writer',
    challenge:
      'Architecting enterprise readiness playbooks to guide the customer base and external developers through a large-scale platform transition across the SKY API ecosystem.',
    system:
      'Drove revenue enablement by migrating the developer portal to a docs-as-code workflow. Established cross-functional contribution guidelines for engineering teams and built self-serve learning pathways for the API ecosystem.',
    impact:
      'Led the customer-facing education initiative that successfully reduced customer transition time by 30% and unified the user journey.',
    expandedDetail:
      'The migration moved customers off a desktop-based system with known security vulnerabilities and onto the cloud. Built blog posts, how-to guides, and adoption content to drive customer uptake, and partnered with engineering to develop Python scripting that replaced manual, individual customer migrations with a faster, team-based process — the mechanism behind the 30% time reduction.',
    metric: '30%',
    metricLabel: 'Reduction in Migration Time',
    tags: ['Docs-as-Code', 'Cloud Migration', 'Developer Portal', 'Customer Education'],
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState(caseStudies[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const selectTab = (id: string) => {
    setSelectedId(id);
    setExpandedId(null);
  };

  const study = caseStudies.find(s => s.id === selectedId)!;
  const Icon = study.icon;
  const isExpanded = expandedId === study.id;

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
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
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
          className="flex justify-center border-b border-gray-200 mb-2"
        >
          {caseStudies.map((s) => (
            <button
              key={s.id}
              onClick={() => selectTab(s.id)}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-all duration-200 font-sans -mb-px ${
                selectedId === s.id
                  ? 'border-accent-600 text-primary-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'
              }`}
            >
              {s.tabLabel}
            </button>
          ))}
        </motion.div>

        {/* Tab preview line */}
        <p className="text-center text-sm text-gray-500 italic mb-6 font-sans">
          {selectedId === 'apkudo' && 'A $40M telecom engagement, built from the ground up.'}
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
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                    {study.title}
                  </h3>

                  <a
                    href="https://www.linkedin.com/in/dc-wallace/details/experience/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200 mb-6 animate-breathe"
                  >
                    View the Project
                    <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>

                  <div className="grid sm:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                        The Challenge
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-sans">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                        The System
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-sans">
                        {study.system}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2 font-sans">
                        The Impact
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium font-sans">
                        {study.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpandedId(prev => (prev === study.id ? null : study.id))}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors duration-200 font-sans"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Collapse' : 'Read the full story'}
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="inline-flex"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  {/* Expanded detail */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 pt-5 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                            Behind the Work
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed font-sans">
                            {study.expandedDetail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
