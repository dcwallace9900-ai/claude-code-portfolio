import { motion } from 'framer-motion';
import { Target, Brain, Cpu, Users } from 'lucide-react';

const pillars = [
  {
    id: 'revenue-enablement',
    icon: Target,
    title: 'Revenue Enablement',
    description:
      'Frameworks that directly support enterprise contract closures and reduce time-to-value.',
    iconClass: 'bg-accent-100 text-accent-600 group-hover:bg-accent-600 group-hover:text-white',
    titleHoverClass: 'group-hover:text-accent-600',
  },
  {
    id: 'learning-science',
    icon: Brain,
    title: 'Learning Science',
    description:
      'Applying adult learning theory to technical stacks to create lasting behavior change.',
    iconClass: 'bg-accent-100 text-accent-600 group-hover:bg-accent-600 group-hover:text-white',
    titleHoverClass: 'group-hover:text-accent-600',
  },
  {
    id: 'ai-first-workflows',
    icon: Cpu,
    title: 'AI-First Workflows',
    description:
      'Integrating AI (Gemini, Claude, NotebookLM) to maximize team output and accelerate delivery.',
    iconClass: 'bg-accent-100 text-accent-600 group-hover:bg-accent-600 group-hover:text-white',
    titleHoverClass: 'group-hover:text-accent-600',
  },
  {
    id: 'program-governance',
    icon: Users,
    title: 'Program Governance',
    description:
      'Building headcount roadmaps, performance rubrics, and documentation standards from zero.',
    iconClass: 'bg-accent-100 text-accent-600 group-hover:bg-accent-600 group-hover:text-white',
    titleHoverClass: 'group-hover:text-accent-600',
  },
];

const pillarContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const pillarItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            From Education to{' '}
            <span className="text-gradient">Enterprise</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 leading-relaxed font-sans">
              I don't pretend that every technology I document is fascinating to me. I've documented
              autonomous vehicles, retail data platforms, and enterprise telecommunications. The
              subject matter changes, but what doesn't change is the standard I hold for the work
              itself.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-sans">
              What I care about is the person on the other end of it: the engineer drowning in
              undocumented systems, the new hire trying to get up to speed before their first big
              deadline, the client trying to understand what they're paying for. That's the job I
              show up for, the one where someone needed a person who could walk into real complexity
              and build order out of it.
            </p>
          </motion.div>

          {/* Core Pillars Grid — staggered fade-in */}
          <motion.div
            variants={pillarContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.id} variants={pillarItem} className="group">
                  <div className="card p-4 h-full hover:shadow-large hover:-translate-y-1 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 transition-all duration-300 ${pillar.iconClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className={`font-heading font-semibold text-lg text-gray-900 mb-2 transition-colors duration-300 ${pillar.titleHoverClass}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
