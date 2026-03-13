import { motion } from 'framer-motion';
import { Target, Brain, Cpu, Users } from 'lucide-react';

const pillars = [
  {
    id: 'revenue-enablement',
    icon: Target,
    title: 'Revenue Enablement',
    description:
      'Frameworks that directly support enterprise contract closures and reduce time-to-value.',
  },
  {
    id: 'learning-science',
    icon: Brain,
    title: 'Learning Science',
    description:
      'Applying adult learning theory to technical stacks to create lasting behavior change.',
  },
  {
    id: 'ai-first-workflows',
    icon: Cpu,
    title: 'AI-First Workflows',
    description:
      'Integrating AI (Gemini, Claude, NotebookLM) to maximize team output and accelerate delivery.',
  },
  {
    id: 'program-governance',
    icon: Users,
    title: 'Program Governance',
    description:
      'Building headcount roadmaps, performance rubrics, and documentation standards from zero.',
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
    <section id="about" className="section-padding bg-white">
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
            Built for Longevity,{' '}
            <span className="text-gradient">Designed for Scale.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Philosophy Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-base text-gray-600 leading-relaxed font-inter">
              Great education programs are built for longevity, not just the launch. Drawing on a
              formal foundation in learning science and deep technical fluency, I bridge the gap
              between complex engineering and the end-user.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-inter">
              A truly scalable system must be accessible by design. By driving compliance with the
              Americans with Disabilities Act (ADA) and Web Content Accessibility Guidelines (WCAG),
              and adhering to strict enterprise governance like Information Security Management Systems
              (ISMS) and International Organization for Standardization (ISO) protocols, I ensure
              technical knowledge is universally secure and intuitive.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-inter">
              From autonomous vehicles (SAE Level 4) to device intelligence, I design self-sustaining
              learning pathways that accelerate product adoption, reduce onboarding friction, and
              directly support business growth.
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
                  <div className="card p-6 h-full hover:shadow-large hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
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
