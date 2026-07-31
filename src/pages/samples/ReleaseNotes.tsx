import ArtifactLayout from '../apkudo/ArtifactLayout';

const entries = [
  {
    date: 'July 24, 2024',
    title: 'Combined onsite and offsite advertising',
    description:
      'Launched the ability to run onsite and offsite advertising together, so brands can reach shoppers across a fragmented media landscape from a single campaign.',
  },
  {
    date: 'July 15, 2024',
    title: 'Category Recommender',
    description:
      'Introduced the Category Recommender, which streamlines category selection for targeted onsite display ads with data-driven recommendations. This simplifies campaign setup and sharpens targeting.',
  },
  {
    date: 'July 9, 2024',
    title: 'Keyword bid modifier',
    description:
      'Added the ability to boost eligible keywords from product listing ads across search and browse placements using selected products. For details, see Manage boosted keywords.',
  },
  {
    date: 'July 8, 2024',
    title: 'Interface update',
    description:
      'When you create a campaign or ad group, all action buttons now appear on the left, and the Continue button remains on the right.',
  },
];

export default function ReleaseNotes() {
  return (
    <ArtifactLayout
      artifactType="Release Notes"
      title="Release Notes: What's New"
      backTo="/projects/84-51"
      backLabel="Back to 84.51° / Kroger Case Study"
    >
      <p className="text-gray-700 leading-relaxed font-sans mb-10">
        Release notes are a key resource for staying current with the
        platform. Check back regularly for new features, improvements, and
        interface changes.
      </p>

      <Section title="July 2024">
        <div className="space-y-8">
          {entries.map((entry) => (
            <div key={entry.title} className="pl-4 border-l-2 border-gold-500">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1 font-sans">
                {entry.date}
              </p>
              <h3 className="font-heading font-semibold text-lg text-primary-900 mb-2">
                {entry.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
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
