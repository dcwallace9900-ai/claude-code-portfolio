import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Code, Lightbulb, ExternalLink, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'user-guide',
    title: 'User Guide',
    category: 'Product & User Documentation',
    description: 'User-friendly instructions to help navigate product features and functionality.',
    details: 'Comprehensive user documentation designed with a user-first approach, featuring intuitive navigation, progressive disclosure, and contextual help. Includes interactive tutorials, troubleshooting guides, and best practices for optimal user experience.',
    icon: 'book-open',
    tags: ['User Experience', 'Product Onboarding', 'Interactive Design'],
    link: 'https://www.canva.com/design/DAGSLMdPTuU/VUs_clY_ioRd18YI0c66JA/view?utm_content=DAGSLMdPTuU&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'instructional-manual',
    title: 'Instructional Manual',
    category: 'Product & User Documentation',
    description: 'In-depth documentation designed for comprehensive learning and skill development.',
    details: 'In-depth instructional materials that combine educational theory with practical application. Features modular content structure, assessment checkpoints, and adaptive learning paths to accommodate different learning styles and skill levels.',
    icon: 'book-open',
    tags: ['Educational Design', 'Comprehensive Learning', 'Skill Development'],
    link: 'https://www.canva.com/design/DAGSP3Zmf08/zRLTRNicbA-RcxNZXRdIAg/view?utm_content=DAGSP3Zmf08&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    category: 'Technical & Developer Documentation',
    description: 'Technical documentation for developers integrating with APIs and services.',
    details: 'Developer-focused API documentation with interactive code examples, comprehensive endpoint descriptions, authentication guides, and SDKs. Includes live testing environments and code generation tools for multiple programming languages.',
    icon: 'code',
    tags: ['API Design', 'Developer Tools', 'Integration Support'],
    link: 'https://www.canva.com/design/DAGSLeq0lAA/uuiuawYQZwtUkRW8JOu6ig/view?utm_content=DAGSLeq0lAA&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'release-notes',
    title: 'Release Notes',
    category: 'Technical & Developer Documentation',
    description: 'Clear communication of product updates, features, and enhancements.',
    details: 'Structured release communications that clearly communicate product changes, impact assessments, and migration guides. Features categorized updates, visual changelogs, and automated distribution to relevant stakeholder groups.',
    icon: 'code',
    tags: ['Change Management', 'Product Updates', 'Communication Strategy'],
    link: 'https://www.canva.com/design/DAGSLTxqhE4/OMIj6pNzgyyz5dZ0nLIvFA/view?utm_content=DAGSLTxqhE4&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Technical & Developer Documentation',
    description: 'Modern portfolio website built with React, TypeScript, and Tailwind CSS featuring responsive design and smooth animations.',
    details: 'A production-ready portfolio website built using modern web technologies. Demonstrates technical skills through clean code architecture, TypeScript implementation, and accessibility best practices. Features interactive animations, mobile-first responsive design, and optimized performance. Key features include React + TypeScript architecture, Tailwind CSS design system, Framer Motion animations, WCAG 2.1 AA accessibility compliance, mobile-first responsive design, and production-ready code quality. Tech stack: React, TypeScript, Tailwind CSS, Framer Motion, Vite.',
    icon: 'code',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Accessibility'],
    link: 'https://github.com/dcwallace9900-ai/claude-code-portfolio'
  },
  {
    id: 'content-article',
    title: 'Content Article',
    category: 'Thought Leadership & Strategy',
    description: 'Industry insights and best practices for effective training and documentation.',
    details: 'Thought leadership content that positions expertise in documentation strategy and industry trends. Includes research-backed insights, case studies, and actionable recommendations for improving organizational documentation practices.',
    icon: 'lightbulb',
    tags: ['Industry Insights', 'Best Practices', 'Strategic Thinking'],
    link: 'https://www.canva.com/design/DAGSLQII4vU/p0J-OZUFOLf53UdcbzTN9w/view?utm_content=DAGSLQII4vU&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'product-roadmap',
    title: 'Product Roadmap',
    category: 'Thought Leadership & Strategy',
    description: 'Strategic overview of product vision, timeline, and development priorities.',
    details: 'Strategic documentation that communicates product vision, timeline, and priorities to internal teams and external stakeholders. Features visual roadmapping, dependency tracking, and alignment with business objectives.',
    icon: 'lightbulb',
    tags: ['Strategic Planning', 'Product Vision', 'Stakeholder Communication'],
    link: 'https://www.canva.com/design/DAGSLo8e5PY/mn6Ynv4Z_Xaw7XowMpQgUg/view?utm_content=DAGSLo8e5PY&utm_campaign=designshare&utm_medium=link&utm_source=editor'
  },
  {
    id: 'blog',
    title: 'Blog',
    category: 'Thought Leadership & Strategy',
    description: 'Technical writing insights covering documentation strategy, AI workflows, and industry trends.',
    details: 'A comprehensive blog showcasing expertise in technical documentation, AI-enhanced workflows, and industry best practices. Features in-depth articles on documentation strategy, emerging technologies, and thought leadership insights that drive innovation in the documentation space.',
    icon: 'lightbulb',
    tags: ['Content Strategy', 'Technical Writing', 'Web Development'],
    link: 'https://dcwallace9900-ai.github.io/claude-code-blog-post/'
  },
  {
    id: 'claude-code-guide',
    title: 'Claude Code Getting Started Guide',
    category: 'Thought Leadership & Strategy',
    description: 'Step-by-step tutorial for building portfolio websites with Claude Code in under an hour.',
    details: 'A complete beginner-to-intermediate guide covering Claude Code installation, authentication, project creation, Git workflows, and GitHub deployment. Includes troubleshooting sections and professional development best practices. Key features include 60-minute development timeline, 800+ lines of production code generation, professional Git workflow integration, Cursor IDE setup and integration, and deployment to GitHub Pages. Target audience: Developers new to AI-assisted coding workflows.',
    icon: 'book-open',
    tags: ['Technical Writing', 'Developer Education', 'AI Workflows', 'Tutorial Design'],
    link: 'https://dcwallace9900-ai.github.io/claude-code-getting-started/'
  }
];

const categories = [
  'All Projects',
  'Product & User Documentation',
  'Technical & Developer Documentation',
  'Thought Leadership & Strategy'
];

const iconMap = {
  'book-open': BookOpen,
  'code': Code,
  'lightbulb': Lightbulb
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
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
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of documentation excellence across product, technical, and strategic initiatives.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-medium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card p-6 h-full hover:shadow-large hover:-translate-y-2 transition-all duration-300">
                    {/* Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 text-sm font-medium mb-3">
                      {project.category}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                            +{project.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                        {React.createElement(iconMap[selectedProject.icon as keyof typeof iconMap], { className: "h-8 w-8" })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {selectedProject.title}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {selectedProject.category}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.details}
                      </p>
                    </div>

                    {/* Tags */}
                    {selectedProject.tags && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full group inline-flex items-center justify-center"
                      >
                        View Project Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-soft rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Documentation?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can implement these strategies for your organization.
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