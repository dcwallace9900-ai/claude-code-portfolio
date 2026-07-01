import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Calendar } from 'lucide-react';

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{children}</h2>
      <div className="w-16 h-0.5 bg-gold-500"></div>
    </div>
  );
}

function ServiceCard({
  title,
  subtitle,
  fullEngagementItems,
  price,
  alacarte,
}: {
  title: string;
  subtitle: string;
  fullEngagementItems: string[];
  price: string;
  alacarte: { item: string; range: string }[];
}) {
  return (
    <div className="card p-6 mb-8">
      <h3 className="font-heading font-bold text-lg text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed font-sans mb-4">{subtitle}</p>

      <p className="text-xs font-semibold text-primary-800 uppercase tracking-widest mb-2 font-sans">Full Engagement</p>
      <ul className="space-y-1.5 mb-3">
        {fullEngagementItems.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
            <span className="text-gold-500 mt-1 flex-shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm font-medium text-primary-800 font-sans mb-5 italic">{price}</p>

      <p className="text-xs font-semibold text-accent-600 uppercase tracking-widest mb-2 font-sans">À la Carte</p>
      <ul className="space-y-1.5">
        {alacarte.map(({ item, range }, i) => (
          <li key={i} className="flex items-start justify-between gap-4 text-sm font-sans">
            <span className="text-gray-700">{item}</span>
            <span className="text-accent-600 font-medium flex-shrink-0">{range}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
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
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
            <div>
              <h1 className="font-heading font-bold text-4xl text-primary-900 mb-1">
                Wallace Technology <span className="text-accent-600">Consulting</span>
              </h1>
              <p className="text-gray-600 font-sans">Services & Engagement Guide</p>
            </div>
            <a
              href="/services.pdf"
              download
              className="inline-flex items-center px-5 py-2.5 bg-primary-800 text-white text-sm font-medium rounded-lg hover:bg-primary-900 transition-colors duration-200 flex-shrink-0"
            >
              Download PDF
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-sans">diana-wallace.com · Atlanta Metropolitan Area</p>
          <div className="w-24 h-1 bg-gold-500 mt-6 mb-6"></div>
          <p className="text-gray-700 leading-relaxed font-sans">
            Independent advisory for teams that need enterprise-grade readiness, technical
            documentation, and digital presence built right, without the overhead of a full-time hire.
            Every engagement starts with a scoping conversation, so the work below reflects typical
            structure and starting ranges rather than fixed pricing.
          </p>
        </div>

        {/* Services */}
        <ServiceCard
          title="Enterprise Readiness & Documentation Architecture"
          subtitle="For teams that need to scope, justify, and document complex technical deployments — the same kind of work that has supported Fortune 500 telecommunications and SaaS contract engagements."
          fullEngagementItems={[
            'Current-state and future-state requirements documentation',
            'Client-facing pitch decks and process documentation',
            'Readiness framework build-out and stakeholder alignment materials',
            'Scoping support that justifies contract value to leadership or clients',
          ]}
          price="Starting at $5,000, scaled to project complexity"
          alacarte={[
            { item: 'Requirements documentation only', range: '$1,500–$2,500' },
            { item: 'Level of Effort (LOE) estimate only', range: '$1,500–$2,000' },
            { item: 'Documentation audit / gap analysis', range: '$2,000–$3,500' },
          ]}
        />

        <ServiceCard
          title="AI-Enhanced Workflow Implementation"
          subtitle="For teams that want to use AI tools well, not just adopt them. Built on hands-on experience integrating Claude, Gemini, and NotebookLM into real documentation and content pipelines."
          fullEngagementItems={[
            'End-to-end workflow design integrating AI tools into an existing documentation or content pipeline',
            'Team training and onboarding to the new workflow',
          ]}
          price="$2,500–$6,000, or $150–$200/hour for scoped advisory work"
          alacarte={[
            { item: 'AI tool evaluation and recommendation for a specific use case', range: '$1,000–$1,800' },
            { item: 'One-time workflow setup and training session', range: '$750–$1,500' },
            { item: 'Prompt templates for a specific repeatable task', range: '$500–$1,200' },
          ]}
        />

        <ServiceCard
          title="Brand & Digital Presence Build"
          subtitle="Visual identity, copywriting, and site builds for founders and consultants who need to look as credible as the work they do."
          fullEngagementItems={[
            'Color palette, typography, and visual identity system',
            'Copywriting and messaging calibration across site, resume, and LinkedIn',
            'Single-page or multi-section site build',
          ]}
          price="$2,500–$5,000, scaled to scope"
          alacarte={[
            { item: 'Visual rebrand only (palette and typography, no new copy)', range: '$1,200–$2,000' },
            { item: 'Copywriting and messaging only (no visual work)', range: '$1,000–$2,200' },
            { item: 'Single-page site build', range: '$1,500–$2,800' },
          ]}
        />

        {/* Fractional Advisory */}
        <div className="card p-6 mb-10">
          <h3 className="font-heading font-bold text-lg text-primary-900 mb-2">Fractional Technical Enablement Advisory</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-sans mb-3">
            Ongoing, retainer-based support for teams that need senior-level documentation and
            readiness expertise periodically, without a full-time hire.
          </p>
          <p className="text-sm font-medium text-primary-800 font-sans italic">$2,000–$4,000/month, scoped to weekly hours and engagement depth</p>
        </div>

        {/* How Engagements Work */}
        <div className="mb-10">
          <SectionHeader>How Engagements Work</SectionHeader>
          <ol className="space-y-4">
            {[
              { n: '1', label: 'Scope', detail: "A focused conversation to understand the gap: what's broken, what's missing, what's slowing the team down." },
              { n: '2', label: 'Build', detail: 'Documentation, frameworks, or readiness systems built to the same standard used for Fortune 500 enterprise accounts.' },
              { n: '3', label: 'Hand off', detail: 'Clean, maintainable deliverables your team can own and extend without ongoing dependency.' },
            ].map(({ n, label, detail }) => (
              <li key={n} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-heading font-bold text-sm">
                  {n}
                </span>
                <div>
                  <span className="font-semibold text-primary-900 font-sans">{label} — </span>
                  <span className="text-gray-700 text-sm font-sans">{detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Closing */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 italic font-sans mb-6">Currently accepting clients.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Download PDF
              <Download className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://calendly.com/dcwallace9900/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors duration-200"
            >
              Book a Consultation
              <Calendar className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
