import ArtifactLayout from './ArtifactLayout';

export default function ApkudoDiscovery() {
  return (
    <ArtifactLayout
      artifactType="Discovery Questionnaire"
      title="Supply Planner and Warehouse Operations Discovery Questionnaire"
      context="This questionnaire was designed to surface warehouse-floor execution
      gaps, system disconnects, and operational realities not visible in
      top-level planning data. It was used to conduct structured discovery
      interviews with supply planners and warehouse operations managers as
      part of a reverse logistics modernization program for an Enterprise
      Telecommunications Client. It demonstrates the ability to design
      discovery frameworks that translate operational complexity into
      structured requirements inputs."
    >
      <Section title="Purpose and Objectives">
        <p>
          As a platform modernization program progresses into future-state
          design, discovery focus shifts toward engaging the people closest to
          physical execution: supply planners and warehouse operations managers.
        </p>
        <p>
          While demand planning establishes unconstrained baseline requirements,
          actual execution is governed by physical warehouse transactions,
          warehouse management systems, and vendor constraints. This
          questionnaire is designed to uncover and document the operational
          realities, system latency, and manual workarounds that occur between
          the warehouse floor and the enterprise ERP. Insights gathered directly
          inform user experience design, data pipeline architecture, and
          automated execution features.
        </p>
      </Section>

      <Section title="Part 1: Warehouse Management System and Inbound Receiving">
        <p className="text-sm text-gray-500 italic mb-4 font-sans">
          Goal: Establish the technical and operational boundaries of the
          warehouse management system during initial product intake and triage.
        </p>
        <ul>
          <li>
            What are the exact technical boundaries of the WMS? Where does WMS
            tracking end and where does the ERP take over?
          </li>
          <li>
            What physical action or systematic scan on the warehouse floor
            officially triggers a received status in the WMS? Is this status
            communicated to the ERP in real time or compiled in a batch data
            transfer?
          </li>
          <li>
            Why does the initial receipt process rely primarily on carrier
            tracking numbers rather than immediate item-level barcode scanning?
            What throughput or physical constraints on the dock prevent immediate
            item-level validation?
          </li>
          <li>
            How are carton counts determined in the WMS, and does packaging
            variability impact downstream processing speed or disposition
            planning?
          </li>
          <li>
            When planners manually intervene to change physical routing rules,
            what are the most common business justifications for those overrides?
            (Context: A dropdown of reason codes is required for the new UI
            to enforce governance.)
          </li>
        </ul>
      </Section>

      <Section title="Part 2: ERP and WMS Data Disconnects">
        <p className="text-sm text-gray-500 italic mb-4 font-sans">
          Goal: Map the systematic delay, data latency, and manual
          reconciliation processes associated with exception events.
        </p>
        <ul>
          <li>
            What is the typical elapsed time between an item being received
            in the WMS and its corresponding receipt confirmation in the ERP?
            Do processing delays routinely exceed 24 to 48 hours, and how does
            this lag affect daily supply planning?
          </li>
          <li>
            When an item arrives without a readable return authorization, in
            an unexpected packaging configuration, or as part of a multi-device
            trade-in shipment, how and why is a temporary unresolved record
            generated? What manual effort is required to resolve it?
          </li>
          <li>
            Can you walk through the step-by-step workflow of resolving an
            Overage, Shortage, or Discrepancy exception? How many systems must
            a planner log into to correct a single discrepancy?
          </li>
          <li>
            How often do items remain permanently disconnected between the ERP
            and WMS? What is the financial or operational impact of this
            stranded inventory on physical warehouse capacity?
          </li>
          <li>
            How would having immediate, automated visibility of real-time
            inventory at the item identifier level change your approach to
            managing shortages and expediting critical repair needs?
          </li>
        </ul>
      </Section>

      <Section title="Part 3: Purchase Order Generation and Vendor Workflows">
        <p className="text-sm text-gray-500 italic mb-4 font-sans">
          Goal: Detail the tactical execution of weekly repair plans, vendor
          repair commitments, and manual ERP transactions.
        </p>
        <ul>
          <li>
            Planners currently cross-reference system-generated purchase orders
            against manually created ones. What is the business purpose of this
            reconciliation, and how long does it take each week?
          </li>
          <li>
            Can you describe the specific steps and business rules associated
            with executing vendor subcontracting transactions in the ERP? Are
            these always manual or are there partially automated background jobs?
          </li>
          <li>
            How often do OEMs fail to meet their weekly repair commitments due
            to part shortages? How do planners manually adjust optimization
            parameters when a vendor falls short?
          </li>
          <li>
            The optimization model uses a statically assigned discount parameter
            to estimate the yield of in-flight repair purchase orders. Who sets
            this parameter, and how frequently is it reconciled against actual
            real-time yield data from vendor sites?
          </li>
        </ul>
      </Section>

      <Section title="Part 4: Kitting, Inventory Roll-Forward, and Special Operations">
        <p className="text-sm text-gray-500 italic mb-4 font-sans">
          Goal: Understand the physical and systematic execution of finished
          goods preparation and special handling operations.
        </p>
        <ul>
          <li>
            Walk through the week-over-week kitting workflow. How are kitting
            targets set, communicated to the floor, and tracked against actual
            throughput?
          </li>
          <li>
            How is in-progress inventory tracked between triage operations and
            fulfillment operations? Is there currently a systematic roll-forward
            view, or is this visibility gap managed manually?
          </li>
          <li>
            What operational data would you want surfaced on a planning dashboard
            that you cannot currently access without manually pulling from
            multiple systems?
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
