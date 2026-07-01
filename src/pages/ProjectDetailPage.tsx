import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const projectData = {
  apkudo: {
    company: 'Apkudo — Device Intelligence',
    title: 'Head of Customer Education & Readiness',
    metric: '20+',
    metricLabel: 'Concurrent Workstreams',
    challenge:
      'Establishing enterprise readiness infrastructure from the ground up to stabilize Tier-1 accounts and scale revenue-driving engagements across major telcos.',
    system:
      'Governs 20+ concurrent workstreams, integrates AI into technical enablement workflows, and enforces ISO/ISMS security standards, reporting directly to the COO to align with executive business priorities.',
    impact:
      'Stabilized Tier-1 telecommunications accounts through targeted readiness playbooks, and built the documentation infrastructure that supported a major demand planning platform initiative as it scaled from a mid-market to a large-scale enterprise engagement.',
    behindTheWork:
      'A large-scale platform initiative required replacing a fragmented, multi-source data environment with a centralized architecture. I built the client-facing pitch decks, current-state and future-state requirements, and process documentation that scoped the work and justified contract value, then served as subject matter expert in live pitch sessions to close the engagement.',
    tags: ['Customer Readiness Frameworks', 'Enterprise Enablement', 'AI Documentation', 'COO-Level Reporting'],
    linkedinUrl: 'https://www.linkedin.com/in/dc-wallace/details/experience/',
    artifacts: [
      {
        id: 'product-brief',
        title: 'AI Platform Product Brief',
        description: 'Executive-facing brief justifying a native AI platform build over a legacy SaaS alternative, with cost analysis and phased ROI projection.',
        path: '/projects/apkudo/product-brief',
      },
      {
        id: 'current-state',
        title: 'Current State Process Evaluation',
        description: 'Formal documentation of existing demand planning operations, system constraints, and critical pain points, produced to inform a multi-phase platform modernization.',
        path: '/projects/apkudo/current-state',
      },
      {
        id: 'future-state',
        title: 'Future State AI Integration Requirements',
        description: 'Technical requirements document specifying the architecture, functional requirements, and AI integration specifications for a new autonomous planning agent.',
        path: '/projects/apkudo/future-state',
      },
      {
        id: 'discovery-questionnaire',
        title: 'Supply Planner Discovery Questionnaire',
        description: 'Structured discovery document designed to surface warehouse-floor execution gaps and system disconnects, used to inform UI/UX design and data pipeline requirements.',
        path: '/projects/apkudo/discovery-questionnaire',
      },
    ],
  },
  '84-51': {
    company: '84.51° / Kroger — Retail Data Science',
    title: 'Developer Experience (DX) Lead & Senior Technical Writer',
    metric: '+25%',
    metricLabel: 'Developer Usability',
    challenge:
      'Enhancing the external developer experience and standardizing the knowledge base ecosystem across the Kroger Ad Platform.',
    system:
      'Led the technical enablement strategy for APIs, SDKs, and Developer Portals and spearheaded the cross-functional enterprise tooling evaluation process.',
    impact:
      'Improved developer usability by 25% and drove ADA and WCAG accessibility initiatives that raised content accessibility and usability scores by 40%.',
    behindTheWork:
      'Led cross-functional vendor evaluation and selection for enterprise knowledge base tooling, balancing budget constraints against engineering team needs. Mentored junior writers and defined documentation standards to keep quality consistent across quarterly release cycles.',
    tags: ['API & SDK Documentation', 'Developer Portals', 'ADA/WCAG Accessibility', 'Enterprise Tooling'],
    linkedinUrl: null,
  },
  blackbaud: {
    company: 'Blackbaud — Nonprofit Software as a Service (SaaS)',
    title: 'Cloud Migration Strategist & Technical Writer',
    metric: '30%',
    metricLabel: 'Reduction in Migration Time',
    challenge:
      'Architecting enterprise readiness playbooks to guide the customer base and external developers through a large-scale platform transition across the SKY API ecosystem.',
    system:
      'Drove revenue enablement by migrating the developer portal to a docs-as-code workflow. Established cross-functional contribution guidelines for engineering teams and built self-serve learning pathways for the API ecosystem.',
    impact:
      'Led the customer-facing education initiative that successfully reduced customer transition time by 30% and unified the user journey.',
    behindTheWork:
      'The migration moved customers off a desktop-based system with known security vulnerabilities and onto the cloud. Built blog posts, how-to guides, and adoption content to drive customer uptake, and partnered with engineering to develop Python scripting that replaced manual, individual customer migrations with a faster, team-based process, the mechanism behind the 30% time reduction.',
    tags: ['Docs-as-Code', 'Cloud Migration', 'Developer Portal', 'Customer Education'],
    linkedinUrl: null,
  },
};

export default function ProjectDetailPage({ projectId }: { projectId: string }) {
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <section className="section-padding bg-white min-h-screen">
        <div className="container max-w-4xl">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary-700 text-sm mb-8 transition-colors duration-200">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Home
          </Link>
          <p className="text-gray-600">Project not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center text-gray-500 hover:text-primary-700 text-sm mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          Back to Strategic Outcomes
        </Link>

        <p className="text-accent-600 text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
          {project.company}
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-6">
          {project.title}
        </h1>
        <div className="w-24 h-1 bg-gold-500 mb-8"></div>

        <div className="flex items-center gap-4 mb-10">
          <div className="bg-primary-800 rounded-xl px-6 py-4 text-center">
            <div className="font-heading font-bold text-3xl text-gold-400">{project.metric}</div>
            <div className="text-gray-300 text-sm">{project.metricLabel}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">The Challenge</p>
            <p className="text-gray-700 leading-relaxed font-sans">{project.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">The System</p>
            <p className="text-gray-700 leading-relaxed font-sans">{project.system}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-accent-600 uppercase tracking-widest mb-2 font-sans">The Impact</p>
            <p className="text-gray-800 leading-relaxed font-medium font-sans">{project.impact}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 font-sans">Behind the Work</p>
          <p className="text-gray-700 leading-relaxed text-lg font-sans">{project.behindTheWork}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent-50 text-accent-700 text-sm font-medium rounded-full border border-accent-100 font-sans"
            >
              {tag}
            </span>
          ))}
        </div>

        {'artifacts' in project && project.artifacts && project.artifacts.length > 0 ? (
          <button
            onClick={() => {
              const el = document.getElementById('work-samples');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200 animate-breathe"
          >
            Explore Work Samples
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        ) : project.linkedinUrl ? (
          <a
            href={project.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200"
          >
            View on LinkedIn
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        ) : (
          <span className="inline-flex items-center px-6 py-3 text-gray-400 font-medium opacity-60 cursor-not-allowed">
            Work Sample — Coming Soon
          </span>
        )}

        {'artifacts' in project && project.artifacts && project.artifacts.length > 0 && (
          <div id="work-samples" className="mt-12">
            <h2 className="font-heading font-bold text-2xl text-primary-900 mb-2">
              Work Samples
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mb-6"></div>
            <p className="text-gray-600 mb-6 font-sans">
              The following artifacts were produced as part of this engagement.
              All work samples have been sanitized to protect client
              confidentiality.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.artifacts.map((artifact) => (
                <Link
                  key={artifact.id}
                  to={artifact.path}
                  className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-accent-300 hover:shadow-soft transition-all duration-200 group"
                >
                  <h3 className="font-heading font-semibold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                    {artifact.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">
                    {artifact.description}
                  </p>
                  <span className="inline-flex items-center mt-3 text-accent-600 text-sm font-medium">
                    View artifact
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
