import ArtifactLayout from '../apkudo/ArtifactLayout';

export default function CampaignReportingHowTo() {
  return (
    <ArtifactLayout
      artifactType="How-To Guide"
      title="View campaign performance"
      backTo="/projects/84-51"
      backLabel="Back to 84.51° / Kroger Case Study"
    >
      <p className="text-gray-700 leading-relaxed font-sans mb-10">
        Monitor and evaluate your advertising campaign through detailed
        reporting. This guide covers how to access, read, filter, and export
        your campaign performance data.
      </p>

      <Section title="Access campaign reports">
        <p className="mb-3">To open a report:</p>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Select Reports from the top navigation.</li>
          <li>Select the View Report tile.</li>
          <li>Select a campaign name to open its report in a new tab.</li>
        </ol>
      </Section>

      <Section title="Report pages">
        <p className="mb-3">Toggle between pages to view:</p>
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            <strong>Performance Summary:</strong> An overview of results,
            including ROAS (Return on Ad Spend) and Total Sales.
          </li>
          <li>
            <strong>Daily Metrics:</strong> A daily breakdown of Spend,
            Impressions, and Sales from the campaign start date to today.
          </li>
          <li>
            <strong>Audience Breakdown:</strong> The ROAS trend for each
            audience segment defined during setup.
          </li>
          <li>
            <strong>Device Breakdown:</strong> Performance by device,
            including metric and ROAS trends.
          </li>
          <li>
            <strong>Product Contribution:</strong> The products driving the
            highest percentage of sales.
          </li>
          <li>
            <strong>Metric Glossary:</strong> A definition for every metric
            used in the report.
          </li>
        </ul>
      </Section>

      <Section title="Filter, sort, and view data">
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            <strong>Toggle:</strong> Select a tab on the left of the
            reporting window to switch pages.
          </li>
          <li>
            <strong>Sort:</strong> Select a column header to sort by that
            metric.
          </li>
          <li>
            <strong>Focus:</strong> Hover over any table or chart and select
            Focus Mode to expand it, or select the ellipsis and choose Show
            as Table.
          </li>
          <li>
            <strong>Filter:</strong> Use the filters on the right to change
            the campaign or narrow the date range.
          </li>
        </ul>
      </Section>

      <Section title="Export data">
        <p className="mb-3">To export raw data for a chart or visual:</p>
        <ol className="list-decimal list-outside pl-5 space-y-2">
          <li>Hover over the table or chart to show additional options.</li>
          <li>Select the ellipsis and choose Export Data.</li>
          <li>Select Export to save the file to your Downloads folder.</li>
        </ol>
      </Section>

      <Section title="Best practices">
        <ul className="list-disc list-outside pl-5 space-y-2">
          <li>
            Review Daily Metrics and Audience Breakdown regularly to catch
            trends early.
          </li>
          <li>
            Use Device Breakdown and Product Contribution to guide budget
            and creative decisions.
          </li>
          <li>Check the Metric Glossary whenever a metric is unfamiliar.</li>
        </ul>
      </Section>

      <p className="text-xs text-gray-400 mt-12 pt-6 border-t border-gray-200 font-sans">
        Representative sample. Proprietary product names and metrics removed.
      </p>
    </ArtifactLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-primary-900 mb-2">{title}</h2>
      <div className="w-12 h-0.5 bg-gold-500 mb-4"></div>
      <div className="text-gray-700 leading-relaxed font-sans">{children}</div>
    </div>
  );
}
