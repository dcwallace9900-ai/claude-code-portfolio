import ArtifactLayout from './ArtifactLayout';

export default function ApkudoFutureState() {
  return (
    <ArtifactLayout
      artifactType="Future State Requirements Document"
      title="AI Integration Requirements: Future State Architecture"
      context="This requirements document defines the future state architecture,
      functional specifications, and AI integration requirements for an
      autonomous inventory optimization agent built for an Enterprise
      Telecommunications Client. It was produced to provide granular
      specifications for developers and data engineers. It demonstrates
      the ability to translate complex business requirements into structured
      technical documentation at the intersection of AI, cloud architecture,
      and enterprise operations."
    >
      <Section title="Purpose">
        <p>
          To define the future state architecture, functional requirements,
          and AI integration specifications for an autonomous Inventory
          Optimization Agent. This document outlines the technical transition from manual,
          chained spreadsheet processes to a fully autonomous platform,
          providing granular specifications for developers and data engineers.
        </p>
      </Section>

      <Section title="Overview">
        <p>
          This document formalizes the future state technical requirements for
          an AI-driven Inventory Optimization Agent. It establishes the baseline for
          how the new architecture will automatically ingest source data,
          execute optimization algorithms without manual parameter entry,
          reconcile ERP and WMS disconnects, and systematically push production
          requirements to downstream fulfillment operations.
        </p>
      </Section>

      <Section title="AI Agent Functional Specifications">
        <SubSection title="Linkages and SLA Tracking">
          <p>
            The Agent must establish and maintain automated linkages between
            all upstream data sources and downstream execution systems. SLA
            tracking must surface exceptions in real time rather than through
            batch reconciliation, enabling planners to act on deviations within
            the same planning cycle they occur.
          </p>
        </SubSection>

        <SubSection title="Configuration and Override Governance">
          <p>
            All planner-initiated configuration changes and manual overrides must
            pass through system-locked approval gates before altering downstream
            volume. Override reason codes must be captured at the point of entry
            and attributed to the initiating planner for auditability. This
            governance layer replaces the current state in which local
            spreadsheet edits instantly propagate without approval or attribution.
          </p>
        </SubSection>

        <SubSection title="Data Columns and Ownership">
          <p>
            Each data column in the planning interface must have a defined owner,
            a system of record, and a documented update frequency. Ownership
            must be formally assigned and documented prior to platform launch
            to prevent the current state issue of planners operating on data
            of unknown provenance or latency.
          </p>
        </SubSection>

        <SubSection title="Notifications and System Updates">
          <p>
            The Agent must surface threshold-based notifications for supply
            shortages, cap volume events, and OSD exceptions. Notifications
            must be actionable, meaning they must include sufficient context
            for a planner to make a decision without navigating to a separate
            system to gather additional data.
          </p>
        </SubSection>

        <SubSection title="Weekly Review Process">
          <p>
            The platform must support a structured weekly review workflow,
            surfacing exceptions across thousands of active SKUs in a
            prioritized, planner-facing interface. The review process should
            reduce the current weekly task burden by automating data
            preparation, leaving planners to focus on exception management
            rather than data reconciliation.
          </p>
        </SubSection>
      </Section>

      <Section title="Notification Triggers and Configuration">
        <p>
          Notification triggers must be configurable by planner role and
          SKU category. At minimum, the following trigger types must be
          supported at launch:
        </p>
        <ul>
          <li>Cap volume threshold reached or exceeded</li>
          <li>OSD exception generated requiring manual resolution</li>
          <li>OEM commit file received or overdue</li>
          <li>Safety stock threshold breach in finished goods inventory</li>
          <li>Optimization engine parameter override submitted for approval</li>
        </ul>
      </Section>

      <Section title="Data Migration and Legacy Records">
        <p>
          Legacy parameter files and historical planning records must be
          migrated to the centralized platform before decommissioning manual
          spreadsheet workflows. A migration validation checklist must confirm
          data integrity across all SKU families before planners transition
          to the new interface. Parallel operation of legacy and new systems
          must be supported through at least Phase 3 to ensure operational
          continuity.
        </p>
      </Section>

      <Section title="Security Requirements">
        <p>
          All data ingestion pipelines must comply with applicable data
          security standards. Proprietary network information must be filtered
          prior to integration with any third-party tooling or external partner
          systems. Role-based access control must be implemented at the data
          layer, not only at the interface layer, to prevent unauthorized
          access to sensitive planning parameters.
        </p>
      </Section>

      <Section title="Optimization Timeline and Engine Deprecation Strategy">
        <p>
          The existing optimization engine must remain licensed and operational
          through Phase 3 to ensure data security and operational continuity
          during the transition. The technical replacement of the optimization
          engine is targeted for Phase 4, and the statistical forecasting engine
          will continue to run in parallel until Phase 5, when the AI-driven
          optimization layer is fully validated and stable.
        </p>
      </Section>

      <Section title="Open Architecture Questions">
        <ul>
          <li>
            How do contracted cloud infrastructure workstreams map to internal
            project phases? Current mapping reveals significant misalignment
            between contracted workstream numbering and internal phase
            definitions.
          </li>
          <li>
            What is the recommended sequencing for migrating across distinct
            product family types given that each operates on entirely separate
            optimization logic?
          </li>
          <li>
            Does the future AI agent require a direct integration with the
            customer-facing substitution interface to prevent downstream
            circular shortages caused by Care agents offering device options
            that violate the constrained substitution matrix?
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
