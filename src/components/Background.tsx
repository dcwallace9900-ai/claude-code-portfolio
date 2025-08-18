import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, Code, BookOpen, FileText } from 'lucide-react';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'safe-practitioner',
    title: 'Certified SAFe 5 Practitioner',
    issuer: 'Scaled Agile, Inc.',
    description: 'Expertise in Agile methodologies to improve documentation workflows in fast-paced environments',
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

export default function Background() {
  return (
    <section id="background" className="section-padding bg-gradient-soft">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-6">
            My <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            A strong foundation in education combined with cutting-edge technical expertise 
            to deliver exceptional documentation strategies.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card max-w-4xl mx-auto p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-semibold text-primary-600 mb-1">
                      Bachelor of Arts in Education
                    </h4>
                    <p className="text-lg text-gray-700 mb-1">University of North Florida</p>
                    <div className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                      Magna Cum Laude
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Strong foundation in educational theory, instructional design, and effective 
                    communication strategies that directly enhance my approach to technical documentation 
                    and knowledge transfer.
                  </p>
                </div>
              </div>
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
            className="text-center mb-12"
          >
            <h3 className="heading-md text-gray-900 mb-4">Professional Certifications</h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development to stay at the forefront of 
              technical documentation and industry best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card p-6 h-full hover:shadow-large hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600 font-medium text-sm mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Hover effect decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why This Background Matters
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mx-auto flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Educational Foundation</h4>
                <p className="text-sm text-gray-600">
                  Understanding how people learn enables me to create more effective documentation
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mx-auto flex items-center justify-center">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Technical Expertise</h4>
                <p className="text-sm text-gray-600">
                  Hands-on development experience allows me to speak the developer's language
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mx-auto flex items-center justify-center">
                  <Brain className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900">AI Integration</h4>
                <p className="text-sm text-gray-600">
                  Leveraging AI tools to revolutionize documentation workflows and efficiency
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}