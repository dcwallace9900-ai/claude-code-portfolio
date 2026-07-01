import ArtifactLayout from './ArtifactLayout';

export default function ApkudoProductBrief() {
  return (
    <ArtifactLayout
      artifactType="Executive Product Brief"
      title="AI-Driven Inventory Optimization Agent: Platform Product Brief"
      context="This brief was written to justify a native AI platform build over a
      legacy enterprise SaaS alternative for an Enterprise Telecommunications
      Client's reverse logistics operations. It was presented to executive
      stakeholders to secure investment approval for a multi-phase
      implementation. The brief demonstrates technical program writing at the
      intersection of business case development, AI architecture, and
      operational strategy."
    >
      <Section title="Executive Summary">
        <p>
          The client's reverse logistics bottleneck is not a lack of capable
          forecasting tools. It is a lack of integrated execution. Legacy
          implementations of comparable enterprise SaaS solutions carry
          significant multi-year costs and implementation timelines. By building
          this architecture natively on a centralized platform, the platform
          provider delivers the foundational first three phases at a fraction of
          that cost, driving substantial annual cost avoidance through eliminated
          subscription fees and support overhead.
        </p>
        <p>
          Today, manual data translation acts as the connective tissue, dragging
          down decision-making, obscuring receipt visibility, and introducing
          error risk. The Inventory Optimization Agent is an autonomous execution
          layer built to bridge these gaps.
        </p>
      </Section>

      <Section title="Core Problem Statements: The Execution Gap">
        <p>
          Executing existing models requires disproportionate manual effort
          across three core areas:
        </p>

        <SubSection title="1. The Human Translation Bottleneck">
          <p>
            The existing forecasting engine generates unconstrained forecasts,
            which planners must manually merge with physical yield data to feed
            the optimization engine. Optimization is further hindered because
            planners must hand-key thousands of safety stock parameters prior
            to each execution cycle.
          </p>
        </SubSection>

        <SubSection title="2. ERP Lags, Exceptions, and Orphan Receipts">
          <p>
            ERP SLA dependencies force planners to make inventory decisions
            using 24 to 48 hour old data. This lag, combined with mismatches
            between the Warehouse Management System (WMS) and the Enterprise
            Resource Planning system (ERP) driven by Overage, Shortage, and
            Discrepancy (OSD) SLA delays, generates unresolved temporary
            records requiring manual validation.
          </p>
        </SubSection>

        <SubSection title="3. Eligibility Matrix Version Control and Cap Volumes">
          <p>
            The physical routing matrix lives in chained Excel spreadsheets.
            A planner's local update instantly alters downstream volume,
            bypassing formal, system-locked approval gates. This is a critical
            governance failure that the Inventory Optimization Agent resolves in
            Phase 1.
          </p>
        </SubSection>
      </Section>

      <Section title="The Solution: Inventory Optimization Agent">
        <p>
          The Agent is an intelligent bridge that continuously ingests data,
          updates models, and generates operational outputs without manual
          intervention.
        </p>
        <ul>
          <li>
            <strong>Continuous Integration:</strong> Bridges the gap between
            unconstrained demand forecasts, reverse logistics yield data, and
            optimization engine outputs to produce real-time plans.
          </li>
          <li>
            <strong>Unified Data Ingestion:</strong> Tracking at the item
            identifier level directly from ERP, data warehouse, and WMS
            resolves receipt mismatches at intake rather than through
            downstream reconciliation.
          </li>
          <li>
            <strong>Automated Governance:</strong> System-locked approval gates
            replace manual spreadsheet updates, ensuring downstream volume
            changes are captured, attributed, and auditable.
          </li>
        </ul>
      </Section>

      <Section title="High-Value Use Cases and Business Impact">
        <p>
          Replacing manual workarounds with automated execution drives
          immediate ROI across the client's operations:
        </p>
        <ul>
          <li>
            <strong>Operations and Planning:</strong> Automating ERP
            cross-referencing and legacy transaction processes reclaims 40 to
            60% of weekly planning capacity currently spent on manual data
            reconciliation.
          </li>
          <li>
            <strong>OEM Partner Management:</strong> Exposing live yield
            projections and routing dispositions through a Partner Portal in
            Phase 1 replaces manual commit files, accelerating OEM
            negotiations and reducing forecast lag.
          </li>
          <li>
            <strong>Governance and Auditability:</strong> Digitalized
            eligibility and substitution matrices with role-based access
            control eliminate the version control failures that currently
            drive untracked liquidations and margin erosion.
          </li>
        </ul>
      </Section>
    </ArtifactLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{title}</h2>
      <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
      <div className="space-y-4 text-gray-700 leading-relaxed font-sans">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 pl-4 border-l-2 border-accent-200">
      <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">{title}</h3>
      <div className="text-gray-700 leading-relaxed font-sans">{children}</div>
    </div>
  );
}
