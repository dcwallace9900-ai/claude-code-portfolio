import ArtifactLayout from './ArtifactLayout';

export default function ApkudoCurrentState() {
  return (
    <ArtifactLayout
      artifactType="Current State Process Evaluation"
      title="Inventory Optimization: Current State Process Evaluation"
      context="This document was produced to formalize the existing state of reverse
      logistics inventory optimization operations for an Enterprise Telecommunications
      Client. It captures manual processes, disparate toolsets, and critical
      system constraints to inform a multi-phase platform modernization
      initiative. It demonstrates the ability to translate complex, multi-system
      operational environments into structured, executive-ready documentation
      from zero existing artifacts."
    >
      <Section title="Purpose">
        <p>
          To formalize current state operations for an Enterprise
          Telecommunications Client's Reverse Logistics Inventory Optimization function,
          detailing existing forecasting methodologies, inventory optimization
          frameworks, and critical system pain points to inform a centralized
          platform integration program.
        </p>
      </Section>

      <Section title="Executive Summary">
        <p>
          The client's reverse logistics planning operates on sophisticated,
          custom-built forecasting and optimization models spanning thousands of
          active SKUs. However, the overall ecosystem is highly fragmented. A
          lack of a single source of truth forces heavy reliance on manual
          spreadsheet workarounds to bridge gaps between disparate data sources
          across ERP, data warehouse, and warehouse management systems.
        </p>
        <p>
          This manual bottleneck introduces critical business risks: latent data,
          missing approval gates, and increased operational overhead. This
          document defines the existing technical debt and system constraints
          that the upcoming centralized platform implementation is designed to
          resolve.
        </p>
      </Section>

      <Section title="Overview">
        <p>
          The client's current reverse logistics planning functions operate on a
          robust but fragmented framework. Two distinct planning functions govern
          the operation:
        </p>
        <ul>
          <li>
            <strong>Demand Planning</strong> serves as the intelligence layer,
            identifying how much inventory is required across all demand channels.
          </li>
          <li>
            <strong>Supply Planning</strong> consumes those requirements to plan
            facility production and supply fulfillment across physical warehouse
            operations.
          </li>
        </ul>
        <p>
          Both functions consume data from disparate operational processes, but
          they operate as separate functional layers. The primary operational
          bottleneck is the absence of a unified source of truth and a highly
          manual planning cycle. Planners rely primarily on chained manual
          spreadsheet tracking, with limited use of analytical applications
          restricted to specific functional areas.
        </p>
      </Section>

      <Section title="Current Capabilities and Operational Processes">
        <SubSection title="Daily and Weekly Planning Workflows">
          <ul>
            <li>
              <strong>Siloed Supply Planner Workflows:</strong> Planners operate
              with significant variability in individual, highly customized
              spreadsheets tailored to specific product families. This prevents
              cross-coverage and knowledge transfer across the team.
            </li>
            <li>
              <strong>OEM Interaction Cadence:</strong> The client provides
              Original Equipment Manufacturers with a 12-week, SKU-level
              forward-looking forecast and receives a weekly commit file
              detailing expected repair capacity in return.
            </li>
            <li>
              <strong>Eligibility Matrix Management:</strong> An eligibility
              matrix dictates the physical disposition of devices upon receipt.
              Currently this matrix is a manually maintained spreadsheet,
              representing a critical single point of failure and governance gap.
            </li>
            <li>
              <strong>Daily Tasks:</strong> Monitoring supply shortages,
              mitigating exception spikes, and generating operational
              requirements including yielded supply forecasts, kitting plans,
              cross-dock planning, and unmet demand forecasts.
            </li>
            <li>
              <strong>Weekly Tasks:</strong> Generating OEM repair plans and
              three-way purchase orders for vendor repairs, with planners
              frequently performing manual ERP transaction workarounds.
            </li>
          </ul>
        </SubSection>

        <SubSection title="Planning Methodologies">
          <ul>
            <li>
              <strong>Forecasting Complexity:</strong> Reverse logistics
              forecasting operates as a dual-sided challenge. Planners
              simultaneously forecast unpredictable inbound supply streams and
              outbound demand requirements, often with limited lead time for
              either variable.
            </li>
            <li>
              <strong>SKU-Level Modeling:</strong> Planning and forecasting
              operate at a granular SKU level, with device conditions separated
              by material type and a strict product hierarchy.
            </li>
            <li>
              <strong>Planning Cadence Constraint:</strong> Due to the manually
              intensive nature of the data models, major planning cycle updates
              are restricted to a monthly cadence. However, planners must manage
              weekly inventory fluctuations against this monthly locked plan,
              which frequently becomes outdated within weeks of publication.
            </li>
            <li>
              <strong>Optimization Engine Parameters:</strong> The optimization
              model operates on highly granular manual inputs from planners,
              including repair cycle week parameters and safety stock multipliers.
              Safety stock targets are calculated dynamically from the current
              week's demand plus the forward two-week demand.
            </li>
          </ul>
        </SubSection>
      </Section>

      <Section title="System Constraints and Pain Points">
        <ul>
          <li>
            <strong>Fragmented Data Ecosystem:</strong> Deep fragmentation across
            the data environment represents the primary long-term obstacle.
            Accessing, merging, and relying on latent data sources throttles
            operational speed across all planning functions.
          </li>
          <li>
            <strong>Chained Spreadsheet Architecture and Data Loss Risk:</strong>{' '}
            The output of one large spreadsheet acts as the manual input for the
            next in a chain. This architecture creates severe operational risk.
            In one documented instance, a planner accidentally deleted an entire
            spreadsheet without a backup, requiring the team to manually rebuild
            the model logic from scratch.
          </li>
          <li>
            <strong>Missing Foundational Input Artifact:</strong> The foundational
            input file for the entire optimization engine is a manually maintained
            parameter file covering thousands of SKUs. This file represents a
            massive single point of failure and was missing from discovery
            artifacts at the outset of this engagement.
          </li>
          <li>
            <strong>Eligibility Matrix Volatility:</strong> Weekly updates to
            upstream eligibility matrices instantly alter incoming volume. When
            manual cap volumes are reached mid-month, physical warehouse routing
            automatically shifts outside the constrained build plan, forcing
            untracked dispositions that erode margin.
          </li>
          <li>
            <strong>ERP/WMS Disconnects and Exception Management:</strong>{' '}
            Disconnects between the warehouse management system and the ERP are
            driven by SLA processing delays and exceptions requiring manual
            reconciliation. These discrepancies generate temporary unresolved
            records that require individual planner intervention to resolve.
          </li>
          <li>
            <strong>Work-In-Progress Visibility Gap:</strong> Planners currently
            lack a systematic view of in-progress inventory between triage
            operations and fulfillment operations, creating blind spots in
            supply planning.
          </li>
        </ul>
      </Section>

      <Section title="Open Questions and Resolved Findings">
        <SubSection title="Open Items Pending Client Confirmation">
          <ul>
            <li>
              Original RFP requirements were placeholder-generated to initiate
              budget approval. Discovery has effectively rewritten the true
              business requirements. Formal deprecation of the old RFP scope
              requires executive alignment.
            </li>
            <li>
              Whether the future AI agent requires an API connection to the
              customer-facing substitution tool to prevent Care agents from
              offering device options that violate the constrained substitution
              matrix.
            </li>
          </ul>
        </SubSection>

        <SubSection title="Resolved Findings">
          <ul>
            <li>
              Phase 1 will prioritize a standardized web UI and digitalized
              eligibility and substitution matrices before deploying complex AI
              optimization models.
            </li>
            <li>
              ERP/WMS disconnects are driven by OSD workflows requiring manual
              validation, not by system architecture failures.
            </li>
            <li>
              The primary gaps are not algorithmic accuracy but process speed.
              The manual nature of existing models creates a reactive monthly
              planning cycle that cannot accommodate real-time fluctuations.
            </li>
            <li>
              Cap volume enforcement defaults to untracked dispositions
              automatically when thresholds are reached mid-month, bypassing
              build plans and eroding margin.
            </li>
          </ul>
        </SubSection>
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
