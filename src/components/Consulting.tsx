import { motion } from 'framer-motion';
import { Briefcase, Cpu, Sparkles, FileText, Calendar } from 'lucide-react';

const services = [
  {
    id: 'readiness-frameworks',
    icon: Briefcase,
    hook: "Your platform is ready. Your documentation isn't.",
    title: 'Enterprise Readiness & Documentation Architecture',
    description:
      'Current-state and future-state requirements, readiness frameworks, and the pitch materials that turn complex deployments into closed contracts.',
  },
  {
    id: 'ai-workflows',
    icon: Cpu,
    hook: "You know AI could help. You just don't have the hours to figure out how.",
    title: 'AI-Enhanced Workflow Implementation',
    description:
      "Workflow design and team training that turns AI tools into a real part of how your team works, not just another app nobody opens.",
  },
  {
    id: 'brand-digital-presence',
    icon: Sparkles,
    hook: "You've outgrown your current site. It's time you looked like it.",
    title: 'Brand & Digital Presence Build',
    description:
      'Visual identity, copywriting, and a site that makes the first impression match the actual caliber of the work.',
  },
];

export default function Consulting() {
  return (
    <section id="consulting" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary-900 mb-6">
            Wallace Technology <span className="text-accent-600">Consulting</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-body-lg text-gray-700 max-w-3xl mx-auto font-sans">
            Independent advisory for teams that need enterprise readiness,
            technical documentation, and customer education built right —
            without the overhead of a full-time hire.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-100 text-gold-700 rounded-xl mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm italic text-accent-600 mb-2 font-sans leading-snug">
                  {service.hook}
                </p>
                <h3 className="font-heading font-semibold text-lg text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs: Services PDF + Book a Consultation */}
        {/* TODO: Replace href="#" on Book a Consultation with real Calendly link when available */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://canva.link/p2j75wknwlinxc6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            View Services & Pricing
            <FileText className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            Book a Consultation
            <Calendar className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* How engagements work */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-heading font-semibold text-2xl text-primary-900 text-center mb-8">
            How engagements work
          </h3>
          <ol className="max-w-2xl mx-auto space-y-5">
            {[
              {
                step: '1',
                label: 'Scope',
                detail:
                  "A focused conversation to understand the gap: what's broken, what's missing, what's slowing the team down.",
              },
              {
                step: '2',
                label: 'Build',
                detail:
                  'Documentation, frameworks, or readiness systems built to the same standard used for Fortune 500 enterprise accounts.',
              },
              {
                step: '3',
                label: 'Hand off',
                detail:
                  'Clean, maintainable deliverables your team can own and extend without ongoing dependency.',
              },
            ].map(({ step, label, detail }) => (
              <li key={step} className="flex items-start gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-heading font-bold text-base">
                  {step}
                </span>
                <div>
                  <span className="font-semibold text-primary-900 font-sans">{label} — </span>
                  <span className="text-gray-700 text-sm leading-relaxed font-sans">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Credibility line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-sm italic max-w-2xl mx-auto mb-10 font-sans"
        >
          Built on the same frameworks used to support Fortune 500 telecommunications and SaaS
          accounts — now available for teams that need enterprise-grade readiness without the
          enterprise-grade headcount.
        </motion.p>

        <div className="text-center">
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Discuss a Project
          </button>
        </div>
      </div>
    </section>
  );
}
