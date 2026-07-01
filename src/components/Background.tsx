import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Brain, Code, BookOpen, FileText, ChevronDown } from 'lucide-react';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'safe-practitioner',
    title: 'Certified SAFe 5 Practitioner',
    issuer: 'Scaled Agile, Inc.',
    description: 'Expertise in Agile methodologies to improve documentation workflows in fast-paced environments.',
    expandedDetail: 'SAFe (Scaled Agile Framework) is a widely recognized standard for managing complex projects and programs across large organizations, similar in spirit to a PMP, but built specifically for Agile, cross-team environments.',
    icon: 'award'
  },
  {
    id: 'ai-everyone',
    title: 'AI for Everyone',
    issuer: 'DeepLearning.AI',
    description: 'Understanding of AI concepts and their impact on industries, enhancing technical content creation',
    icon: 'brain'
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Web & Mobile Development',
    issuer: 'NuCamp Coding Bootcamp',
    description: 'Hands-on experience with front-end and back-end technologies, enabling effective developer documentation',
    icon: 'code'
  },
  {
    id: 'instructional-design',
    title: 'Instructional Design Essentials',
    issuer: 'Coursera',
    description: 'Proficiency in creating engaging and effective learning materials for diverse audiences',
    icon: 'book-open'
  },
  {
    id: 'grant-writing',
    title: 'Advanced Grant Proposal Writing',
    issuer: 'Florida State College',
    description: 'Skilled in crafting clear, persuasive documentation for funding and business proposals',
    icon: 'file-text'
  }
];

const iconMap = {
  award: Award,
  brain: Brain,
  code: Code,
  'book-open': BookOpen,
  'file-text': FileText
};

const whyItems = [
  {
    icon: BookOpen,
    title: 'Educational Foundation',
    desc: 'Understanding how people learn enables me to create more effective documentation',
    iconClass: 'bg-primary-800 border-2 border-gold-400 text-white',
  },
  {
    icon: Code,
    title: 'Technical Expertise',
    desc: "Hands-on development experience allows me to speak the developer's language",
    iconClass: 'bg-primary-800 border-2 border-gold-400 text-white',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Leveraging AI tools to revolutionize documentation workflows and efficiency',
    iconClass: 'bg-primary-800 border-2 border-gold-400 text-white',
  },
];

export default function Background() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => setExpandedId(prev => (prev === id ? null : id));

  return (
    <section id="background" className="py-12 lg:py-16 bg-gradient-soft">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="heading-lg text-gray-900 mb-6">
            My <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            A strong foundation in education combined with cutting-edge technical expertise
            to deliver exceptional documentation strategies.
          </p>
        </motion.div>

        {/* Two-column: Education + Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 mb-8"
        >
          {/* Education card */}
          <div className="card p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-800 border-2 border-gold-400 text-white rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <h4 className="text-lg font-semibold text-primary-600 mb-0.5">
                  Bachelor of Arts in Education
                </h4>
                <p className="text-gray-700 mb-2">University of North Florida</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    Magna Cum Laude
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    ESOL Endorsement
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Strong foundation in educational theory, instructional design, and effective
                  communication strategies that directly enhance my approach to technical
                  documentation and knowledge transfer.
                </p>
              </div>
            </div>
          </div>

          {/* Why This Background Matters — vertical stack */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Why This Background Matters
            </h3>
            <div className="space-y-4">
              {whyItems.map(({ icon: Icon, title, desc, iconClass }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h3 className="heading-md text-gray-900 mb-3">Professional Certifications</h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development to stay at the forefront of
              technical documentation and industry best practices.
            </p>
          </motion.div>

          {/* Compact list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="divide-y divide-gray-200 bg-white rounded-xl shadow-soft max-w-4xl mx-auto"
          >
            {certifications.map((cert) => {
              const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
              const isExpanded = expandedId === cert.id;
              return (
                <div key={cert.id}>
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => toggle(cert.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(cert.id)}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <IconComponent className="h-5 w-5 text-gold-600 flex-shrink-0" />
                      <div className="min-w-0">
                        <span className="font-semibold text-primary-900 text-sm">{cert.title}</span>
                        <span className="text-gray-500 text-sm ml-2">— {cert.issuer}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-accent-600 font-sans font-medium flex-shrink-0 ml-4 select-none">
                      {isExpanded ? 'Close' : 'Details'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex ml-1"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-12 space-y-1">
                          <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                          {cert.expandedDetail && (
                            <p className="text-gray-500 text-sm leading-relaxed">{cert.expandedDetail}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
