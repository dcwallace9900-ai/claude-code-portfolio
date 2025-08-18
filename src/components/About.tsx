import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, TrendingUp, Target } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    id: 'saas-strategy',
    title: 'SaaS Product Strategy',
    description: 'Architecting comprehensive documentation strategies that align with product roadmaps and business objectives.',
    icon: 'target'
  },
  {
    id: 'ai-workflows',
    title: 'AI-Enhanced Workflows',
    description: 'Implementing cutting-edge AI tools to streamline content creation, maintenance, and knowledge management.',
    icon: 'zap'
  },
  {
    id: 'developer-experience',
    title: 'Developer Experience',
    description: 'Creating intuitive, comprehensive documentation that accelerates developer onboarding and product adoption.',
    icon: 'users'
  },
  {
    id: 'customer-success',
    title: 'Product Adoption & Customer Success',
    description: 'Driving measurable efficiency improvements that directly impact customer satisfaction and product success.',
    icon: 'trending-up'
  }
];

const iconMap = {
  target: Target,
  zap: Zap,
  users: Users,
  'trending-up': TrendingUp
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
          <h2 className="heading-lg text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-body-lg text-gray-600 leading-relaxed">
                As a Technical Documentation Manager, I architect SaaS product strategy and implement 
                AI-enhanced workflows to revolutionize the documentation lifecycle. My focus is on 
                elevating the developer experience while also driving measurable efficiency for customers.
              </p>
              
              <p className="text-body-lg text-gray-600 leading-relaxed">
                By streamlining content creation and maintenance, I ensure documentation is always 
                current, comprehensive, and easy to navigate. My background in education and web 
                development gives me a strategic advantage in breaking down complex topics into 
                intuitive, engaging content.
              </p>
              
              <p className="text-body-lg text-gray-600 leading-relaxed">
                I thrive on collaborating with engineers and subject matter experts to deliver 
                documentation that is not only accurate but also a powerful tool for accelerating 
                product adoption and customer success. I am eager to connect with forward-thinking 
                teams committed to setting new standards for technical communication.
              </p>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-700 rounded-lg border border-primary-200">
                <span className="text-sm font-medium">
                  Ready to revolutionize your documentation strategy?
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card p-6 h-full hover:shadow-large hover:-translate-y-1 transition-all duration-300">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Hover effect decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Stats/Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid sm:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600">AI-First</div>
            <div className="text-gray-600">Approach to Documentation</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600">Cross-Functional</div>
            <div className="text-gray-600">Team Collaboration</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600">Results-Driven</div>
            <div className="text-gray-600">Strategy Implementation</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}