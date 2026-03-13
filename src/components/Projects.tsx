import { motion } from 'framer-motion';
import { Building2, TrendingUp, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: 'apkudo',
    icon: Building2,
    company: 'Apkudo — Device Intelligence',
    title: 'Scaling from Zero for Fortune 500 Telcos',
    challenge:
      'Building a customer education and documentation function from scratch to support rapidly growing enterprise engagements.',
    system:
      'Governed 20+ concurrent workstreams and integrated AI into documentation workflows, reporting directly to the COO to align with executive business priorities.',
    impact:
      'Architected the Customer Readiness Frameworks that directly enabled multi-million dollar contracts with T-Mobile, AT&T, and Verizon.',
    metric: '20+',
    metricLabel: 'Concurrent Workstreams',
    tags: ['Customer Readiness Frameworks', 'Enterprise Enablement', 'AI Documentation', 'COO-Level Reporting'],
  },
  {
    id: 'kroger',
    icon: TrendingUp,
    company: '84.51° / Kroger — Retail Data Science',
    title: 'Developer Experience (DX) & Tooling Strategy',
    challenge:
      'Enhancing the external developer experience and standardizing the knowledge base ecosystem across the Kroger Ad Platform.',
    system:
      'Led the documentation strategy for APIs, SDKs, and Developer Portals and spearheaded the cross-functional enterprise tooling evaluation process.',
    impact:
      'Improved developer usability by 25% and drove ADA and WCAG accessibility initiatives that raised content accessibility and usability scores by 40%.',
    metric: '+25%',
    metricLabel: 'Developer Usability',
    tags: ['API & SDK Documentation', 'Developer Portals', 'ADA/WCAG Accessibility', 'Enterprise Tooling'],
  },
  {
    id: 'blackbaud',
    icon: Zap,
    company: 'Blackbaud — Nonprofit Software as a Service (SaaS)',
    title: 'Program Managing Cloud Migration Education',
    challenge:
      'Educating the customer base and external developers on a massive platform transition across the SKY API ecosystem.',
    system:
      'Overhauled legacy content silos by migrating the developer portal to a docs-as-code workflow. Established cross-functional contribution guidelines for engineering teams and built self-serve learning paths for the API ecosystem.',
    impact:
      'Led the customer-facing education initiative that successfully reduced customer transition time by 30% and unified the user journey.',
    metric: '30%',
    metricLabel: 'Reduction in Migration Time',
    tags: ['Docs-as-Code', 'Cloud Migration', 'Developer Portal', 'Customer Education'],
  },
];

export default function Projects() {
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
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Strategic <span className="text-gradient">Outcomes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            A track record of building education programs that move the needle on enterprise growth,
            developer experience, and customer retention.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden transition-all duration-300 hover:border-primary-500 hover:shadow-[0_0_0_1px_#0284c7,0_20px_40px_-10px_rgba(2,132,199,0.18)]">
                  <div className="grid lg:grid-cols-4">
                    {/* Metric Sidebar */}
                    <div className="bg-gray-900 p-8 flex flex-col items-center justify-center text-center lg:rounded-none">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 rounded-xl mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="font-poppins font-bold text-4xl text-primary-400 mb-1">
                        {study.metric}
                      </div>
                      <div className="text-gray-400 text-sm font-inter">{study.metricLabel}</div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8">
                      <p className="text-primary-600 text-sm font-semibold font-inter uppercase tracking-widest mb-2">
                        {study.company}
                      </p>
                      <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                        {study.title}
                      </h3>

                      <div className="grid sm:grid-cols-3 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-inter">
                            The Challenge
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed font-inter">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-inter">
                            The System
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed font-inter">
                            {study.system}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2 font-inter">
                            The Impact
                          </p>
                          <p className="text-gray-700 text-sm leading-relaxed font-medium font-inter">
                            {study.impact}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100 font-inter"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="font-poppins font-bold text-2xl text-white mb-4">
              Ready to make education a competitive advantage?
            </h3>
            <p className="text-gray-400 mb-6 font-inter">
              Let's discuss how strategic education programs can accelerate your product's growth.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Start the Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
