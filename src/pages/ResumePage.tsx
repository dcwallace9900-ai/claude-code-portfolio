import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{children}</h2>
      <div className="w-16 h-0.5 bg-gold-500"></div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-primary-700 text-sm mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          Back to Home
        </Link>

        {/* Page header */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="font-heading font-bold text-4xl text-primary-900 mb-1">Diana Wallace</h1>
              <p className="text-accent-600 font-semibold font-sans">
                Technical Program Lead | Enterprise Readiness & Cross-Functional Delivery | SAFe 5
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200 flex-shrink-0"
            >
              Download PDF
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-sans">
            dcwallace9900@gmail.com · Atlanta Metropolitan Area · diana-wallace.com ·{' '}
            <a href="https://www.linkedin.com/in/dc-wallace/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">LinkedIn</a>
          </p>
          <div className="w-24 h-1 bg-gold-500 mt-6"></div>
        </div>

        {/* Professional Summary */}
        <div className="mb-10">
          <SectionHeader>Professional Summary</SectionHeader>
          <p className="text-gray-700 leading-relaxed font-sans">
            Senior technical program and documentation leader with 8+ years of experience directing
            cross-functional delivery across Development, QA, and client-facing teams for Fortune 500
            telecommunications and SaaS accounts. Operates as a matrix leader, coordinating engineering,
            testing, and documentation workstreams, to stabilize Tier-1 enterprise relationships and
            accelerate contract delivery. Combines a formal background in learning science with deep
            technical fluency to translate complex engineering work into enterprise-ready outcomes.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-10">
          <SectionHeader>Core Competencies</SectionHeader>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: 'Program Leadership', items: 'Cross-Functional Delivery, Matrix Leadership, Client Liaison, Stakeholder Alignment' },
              { label: 'Enterprise Governance', items: 'Readiness Frameworks, Headcount Planning, Performance Rubrics, ISO/ISMS Compliance' },
              { label: 'Technical Enablement', items: 'API/Developer Experience (DX), Docs-as-Code, AI-Enhanced Workflows, ADA/WCAG Standards' },
              { label: 'Adoption Strategy', items: 'Adult Learning Theory, Cognitive Load Management, Onboarding Curriculum Design' },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="text-sm font-semibold text-primary-800 font-sans mb-0.5">{label}</p>
                <p className="text-sm text-gray-600 font-sans">{items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-10">
          <SectionHeader>Professional Experience</SectionHeader>
          <div className="space-y-10">

            {/* Apkudo */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading font-semibold text-lg text-primary-900">Technical Documentation Manager</h3>
                <span className="text-gray-500 text-sm font-sans flex-shrink-0">Mar 2025 – Present · Remote</span>
              </div>
              <p className="text-accent-600 font-semibold text-sm font-sans mb-1">Apkudo</p>
              <p className="text-gray-500 text-sm italic font-sans mb-3">Device intelligence and supply chain platform serving Fortune 500 telecommunications clients.</p>
              <p className="text-gray-700 text-sm font-sans mb-3">
                Functioning as technical program lead and primary client liaison for Tier-1 telecommunications accounts, translating client requirements into actionable delivery plans across Development, QA, and Documentation.
              </p>
              <ul className="space-y-2">
                {[
                  'Directs Cross-Functional Delivery: Cleared historical delivery backlogs and aligned client expectations with Development, QA, and Documentation teams, relying on matrix leadership rather than formal management authority, to establish Customer Readiness Frameworks for Tier-1 accounts.',
                  "Drives Revenue-Enabling Documentation & Client Engagement: Built the client-facing pitch decks, current-state and future-state requirements, and process documentation for T-Mobile's Demand Planning Centralized Platform initiative for a multi-source data environment, scoping the work and justifying contract value, then served as subject matter expert in live pitch sessions to close the engagement.",
                  'Governs Enterprise Workstreams: Manages a portfolio of 20+ concurrent enterprise workstreams, reporting directly to the COO to align program strategy with executive business priorities.',
                  'Integrates AI Into Delivery: Deploys Gemini AI across documentation and program workflows to accelerate delivery timelines across all active workstreams.',
                  'Enforces Security & Compliance: Maintains ISO and ISMS security standards across device intelligence initiatives for Tier-1 telecommunications partners.',
                  "Builds Organizational Infrastructure: Develops headcount justification, organizational roadmap, and performance rubrics to support Apkudo's ability to scale its Fortune 500 client base.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                    <span className="text-gold-500 mt-1.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 84.51° */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading font-semibold text-lg text-primary-900">Developer Experience (DX) Lead & Senior Technical Writer</h3>
                <span className="text-gray-500 text-sm font-sans flex-shrink-0">Mar 2023 – Jul 2024 · Remote</span>
              </div>
              <p className="text-accent-600 font-semibold text-sm font-sans mb-1">84.51° (Kroger)</p>
              <p className="text-gray-500 text-sm italic font-sans mb-3">Data science and analytics subsidiary of Kroger, powering retail media and shopper intelligence.</p>
              <ul className="space-y-2">
                {[
                  'Led Developer Experience Strategy: Directed documentation strategy for the Kroger Ad Platform, including developer portals and SDK guides, improving developer usability by 25%.',
                  'Directed Enterprise Tooling Decisions: Led cross-functional vendor evaluation and selection for enterprise knowledge base tooling, managing budget constraints and presenting recommendations to engineering leadership.',
                  'Championed Accessibility Compliance: Drove ADA/WCAG initiatives across the documentation ecosystem, raising content accessibility and inclusivity scores by 40%.',
                  'Mentored & Standardized: Developed performance rubrics, defined documentation standards, and mentored junior writers to ensure consistency across quarterly release cycles.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                    <span className="text-gold-500 mt-1.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blackbaud */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading font-semibold text-lg text-primary-900">Cloud Migration Strategist & Technical Writer</h3>
                <span className="text-gray-500 text-sm font-sans flex-shrink-0">Sep 2021 – Mar 2023 · Remote</span>
              </div>
              <p className="text-accent-600 font-semibold text-sm font-sans mb-1">Blackbaud</p>
              <p className="text-gray-500 text-sm italic font-sans mb-3">Leading cloud software provider for the nonprofit sector, serving organizations globally.</p>
              <ul className="space-y-2">
                {[
                  'Led Customer-Facing Migration Strategy: Directed the customer education initiative for a security-driven migration from desktop-based project management to the cloud, replacing a legacy system with known security vulnerabilities, and built blog posts, how-to guides, and adoption content to drive customer uptake of the new platform.',
                  'Engineered Migration Efficiency: Partnered with the engineering team to develop Python scripting that replaced manual, individual customer migrations with a faster, team-based process, reducing customer transition time by 30%.',
                  'Modernized Documentation Workflows: Implemented docs-as-code principles across the developer portal and API ecosystem, improving content discoverability and streamlining engineering workflows.',
                  'Established Cross-Functional Standards: Built contribution guidelines for engineering teams and self-serve learning pathways for the API ecosystem.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                    <span className="text-gold-500 mt-1.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Argo AI */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-heading font-semibold text-lg text-primary-900">Technical Writer</h3>
                <span className="text-gray-500 text-sm font-sans flex-shrink-0">Mar 2018 – Sep 2021 · Remote</span>
              </div>
              <p className="text-accent-600 font-semibold text-sm font-sans mb-1">Argo AI</p>
              <p className="text-gray-500 text-sm italic font-sans mb-3">Ford and Volkswagen-backed, $12.4B SAE Level 4 autonomous vehicle company.</p>
              <ul className="space-y-2">
                {[
                  'Authored Critical Systems Documentation: Developed API documentation and internal onboarding programs for perception, localization, and sensor fusion engineering teams.',
                  'Supported Enterprise Deployments: Partnered with robotics teams to document safety and testing procedures supporting self-driving vehicle deployments with Ford, Volkswagen, and Lyft.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                    <span className="text-gold-500 mt-1.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mb-10">
          <SectionHeader>Education & Certifications</SectionHeader>
          <div className="space-y-3">
            {[
              { title: 'B.A. in Education, Magna Cum Laude', org: 'University of North Florida', detail: 'ESOL Endorsement; focus on learning theory, cognitive load, and curriculum design' },
              { title: 'Certified SAFe 5 Practitioner', org: 'Scaled Agile, Inc.', detail: 'Enterprise Agile Program Management' },
              { title: 'Full-Stack Web & Mobile Development', org: 'NuCamp Coding Bootcamp', detail: 'HTML, CSS, JavaScript, React, APIs' },
              { title: 'AI for Everyone', org: 'DeepLearning.AI', detail: 'Enterprise AI Strategy & Workflow Automation' },
              { title: 'Instructional Design Essentials', org: 'Coursera', detail: 'Adult Learning Science & Curriculum Architecture' },
            ].map(({ title, org, detail }) => (
              <div key={title} className="flex items-start gap-2 text-sm font-sans">
                <span className="text-gold-500 mt-1 flex-shrink-0">—</span>
                <span>
                  <span className="font-semibold text-primary-900">{title}</span>
                  <span className="text-gray-500"> | {org}</span>
                  {detail && <span className="text-gray-500"> — {detail}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-10">
          <SectionHeader>Tools & Technologies</SectionHeader>
          <div className="space-y-3">
            {[
              { label: 'Program & Project Management', items: 'SAFe/Agile, Jira, ClickUp, Smartsheet, Lattice, Microsoft Teams' },
              { label: 'Strategy & Analytics', items: 'Data & Learning Analytics (Looker, Google Analytics, CSAT, NPS, Time-to-Value), Data-Driven Content Strategy' },
              { label: 'Enterprise Knowledge Management', items: 'MadCap Flare, Confluence, SharePoint, Markdown' },
              { label: 'Learning & Content Production', items: 'Enterprise LMS (Docebo), Digital Adoption Platforms (DAP - WalkMe), Articulate 360, Camtasia, Snagit' },
              { label: 'CRM & Customer Success Integrations', items: 'Microsoft Dynamics 365, HubSpot' },
              { label: 'Development & AI', items: 'Claude Code, ChatGPT, Gemini AI, NotebookLM, RESTful APIs, JSON, XML, HTML/CSS, JavaScript, Git/GitHub, CI/CD, Azure DevOps' },
            ].map(({ label, items }) => (
              <div key={label} className="flex items-start gap-2 text-sm font-sans">
                <span className="text-gold-500 mt-1 flex-shrink-0">—</span>
                <span>
                  <span className="font-semibold text-primary-900">{label}:</span>
                  <span className="text-gray-600"> {items}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200"
          >
            Download PDF Version
            <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
