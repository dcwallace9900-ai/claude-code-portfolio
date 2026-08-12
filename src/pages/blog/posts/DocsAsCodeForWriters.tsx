import BlogPostLayout from '../BlogPostLayout';
import { blogPosts } from '../../../data/blogPosts';
import { useDocumentMeta } from '../../../hooks/useDocumentMeta';

const post = blogPosts.find((p) => p.slug === 'docs-as-code-for-writers')!;

const vocabulary = [
  {
    term: 'Git',
    description: (
      <>
        Track Changes and version history, but far more powerful and never lossy. Git remembers
        every version of every file, who changed what, and when. You can always see the old
        version, compare two versions, or roll back a mistake. If you've ever kept{' '}
        <Code>final_v2_ACTUAL_final.docx</Code>, Git is the cure for that.
      </>
    ),
  },
  {
    term: 'Repository (repo)',
    description: (
      <>
        The shared folder where all the docs live, with the full history attached. One source of
        truth for the whole team, instead of files scattered across inboxes and drives.
      </>
    ),
  },
  {
    term: 'Markdown',
    description: (
      <>
        Formatting with a few plain-text symbols instead of toolbar buttons. <Code># Heading</Code>{' '}
        makes a heading. <Code>**bold**</Code> makes bold. <Code>- item</Code> makes a bullet.
        That's most of it. You can learn the entire everyday set in about ten minutes, and it keeps
        your formatting consistent because there's no font menu to fight.
      </>
    ),
  },
  {
    term: 'Commit',
    description: (
      <>
        Hitting save, but with a note. Each commit is a saved snapshot plus a short message
        explaining what you changed, like <Code>Fix broken link in setup guide</Code>. Those
        messages become a readable history of the doc's life.
      </>
    ),
  },
  {
    term: 'Branch',
    description: (
      <>
        A working draft that's separate from the published version. You make your edits on a
        branch, so the live docs stay untouched until your work is ready. Like editing a copy
        instead of the master file, except the system keeps them cleanly linked.
      </>
    ),
  },
  {
    term: 'Pull request (PR)',
    description: (
      <>
        Sending your draft out for review before it goes live. A PR bundles your changes and says
        "here's what I want to publish, please review." People comment, you revise, and once it's
        approved it gets merged in. It's the review cycle you already run, just formalized and
        traceable.
      </>
    ),
  },
  {
    term: 'Merge',
    description: (
      <>
        Accepting the tracked changes. Once your PR is approved, merging folds your edits into the
        official docs. Approved, published, done.
      </>
    ),
  },
  {
    term: 'CI / CD (the pipeline)',
    description: (
      <>
        The robot assistant that publishes for you. When your change is merged, an automated
        process builds the site and pushes it live, no manual copy-paste, no "who updated the
        portal?" It can also check your work on the way, flagging broken links or style-guide
        violations before readers ever see them.
      </>
    ),
  },
  {
    term: 'Static site generator',
    description: (
      <>
        The tool that turns your Markdown files into a real documentation website. You write plain
        text, it produces the polished, navigable site. Common ones you'll hear named are
        Docusaurus, MkDocs, and Hugo.
      </>
    ),
  },
];

const whyItsWorthIt = [
  {
    title: 'Your docs stop rotting',
    body: 'When docs live next to the code, they get updated in the same review as the feature. Stale documentation is largely a symptom of docs living somewhere the engineers never look.',
  },
  {
    title: 'You get a real review trail',
    body: 'Every change is attributed, discussed, and reversible. When someone asks "why does the doc say this," you have the history. No more mystery edits.',
  },
  {
    title: 'You publish without begging',
    body: "Merge, and it's live. No ticket to a web team, no waiting, no manual reformatting. The pipeline does the boring part.",
  },
  {
    title: 'You earn credibility with engineers',
    body: "Working in their system, speaking their vocabulary, means you're in the room where the product is actually discussed. That's where the best documentation decisions get made, and where writers who want to grow into leadership need to be.",
  },
];

const firstWeekSteps = [
  {
    lead: 'Learn Markdown first.',
    rest: "It's the one piece you'll use every single day, and it's the easiest. An hour with a cheat sheet and you're fluent enough.",
  },
  {
    lead: 'Get the repo onto your machine and open it.',
    rest: 'Ask a friendly engineer to help you clone it once. Then just read the existing docs to see how they\'re structured.',
  },
  {
    lead: 'Make one tiny change on a branch.',
    rest: "Fix a typo. Don't touch anything scary. The goal is to feel the loop, not to ship something big.",
  },
  {
    lead: 'Open your first pull request.',
    rest: "Watch it get reviewed and merged. Once you've done the full loop once, the fear evaporates. It's just Track Changes with better manners.",
  },
  {
    lead: 'Ask for a walkthrough of the pipeline.',
    rest: "You don't need to build it, just understand what happens when your change merges, so publishing stops feeling like magic.",
  },
];

const fears = [
  {
    q: 'Do I need to learn to code?',
    a: "No. You need Markdown and a handful of Git actions. That's a workflow, not programming.",
  },
  {
    q: 'Will I break the live docs?',
    a: "That's the whole point of branches and pull requests. Your work is isolated and reviewed before anything publishes. The system is designed to make breaking things hard.",
  },
  {
    q: 'The command line terrifies me.',
    a: 'You can do almost all of this through a visual app like VS Code or GitHub Desktop, with buttons instead of typed commands. The terminal is optional for a long time.',
  },
  {
    q: 'What if I forget the steps?',
    a: 'Everyone keeps a cheat sheet. Nobody memorizes Git. Muscle memory comes from repetition, not study.',
  },
];

export default function DocsAsCodeForWriters() {
  useDocumentMeta(
    "Docs-as-Code for Writers Who Aren't Engineers | Diana Wallace",
    post.excerpt
  );

  return (
    <BlogPostLayout title={post.title} date={post.date} tags={post.tags}>
      <p className="text-lg text-gray-600 leading-relaxed font-sans mb-10">
        Your team wants to move docs into Git. The tooling looks like it was built for developers,
        because it was. Here's what all of it actually means, in plain writer terms, and why it
        ends up making your job easier.
      </p>

      <Section title="First, the reassuring part">
        <p>
          Docs-as-code sounds like it requires you to become a programmer. It doesn't. It's a
          workflow, not a coding job. You'll still spend your day writing, editing, and thinking
          about the reader. What changes is <em>where</em> your writing lives and <em>how</em> it
          gets reviewed and published.
        </p>
        <p>
          The whole idea in one sentence: treat documentation the same way engineers treat their
          code, so docs get the same version history, review, and automated publishing that code
          already gets. That's it. Everything below is just the vocabulary.
        </p>
        <Callout>
          <strong className="text-primary-900">The mindset shift:</strong> you're not learning to
          code. You're learning to work inside the same system your engineers already use, so your
          docs stop living in a silo and start moving at the speed of the product.
        </Callout>
      </Section>

      <Section
        title="The vocabulary, translated"
        subtitle="Every scary term, explained in language you already own."
      >
        <div className="space-y-4">
          {vocabulary.map((item) => (
            <VocabPair key={item.term} term={item.term}>
              {item.description}
            </VocabPair>
          ))}
        </div>
      </Section>

      <Section
        title="Why this is worth it for you"
        subtitle="The payoff isn't abstract. It's your day getting better."
      >
        {whyItsWorthIt.map((item) => (
          <div key={item.title} className="mb-6 last:mb-0">
            <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">
              {item.title}
            </h3>
            <p>{item.body}</p>
          </div>
        ))}
      </Section>

      <Section title="Your first week, realistically">
        <ol className="space-y-6 mb-8">
          {firstWeekSteps.map((step, i) => (
            <li key={step.lead} className="flex gap-4">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary-800 text-gold-400 font-heading font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="pt-1.5">
                <strong className="text-primary-900">{step.lead}</strong> {step.rest}
              </p>
            </li>
          ))}
        </ol>
        <Callout>
          <strong className="text-primary-900">The one tool worth learning early:</strong> a good
          text editor like VS Code. It shows your Markdown preview side by side, highlights Git
          changes, and makes the whole thing feel less like a command line and more like a
          familiar writing surface.
        </Callout>
      </Section>

      <Section title="Fears, addressed honestly">
        <div className="space-y-5">
          {fears.map((fear) => (
            <div key={fear.q} className="flex gap-3">
              <span className="text-accent-600 font-heading font-bold flex-shrink-0">Q.</span>
              <p>
                <strong className="text-primary-900">{fear.q}</strong> {fear.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="The bottom line">
        <p>
          Docs-as-code isn't a demotion of writing into engineering. It's an upgrade of writing
          into the workflow where modern products actually get built. You keep doing the hard,
          human part, deciding what to say and how to make it clear. The tooling just handles
          versioning, review, and publishing so that part stops being your problem.
        </p>
        <p>
          Start with Markdown. Make one small change. Open one pull request. The rest is
          repetition, and you already have the only skill that can't be automated: knowing what
          the reader needs.
        </p>
      </Section>
    </BlogPostLayout>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <h2 className="font-heading font-bold text-2xl text-primary-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500 font-sans mb-4">{subtitle}</p>}
      <div className="w-12 h-0.5 bg-gold-500 mb-6"></div>
      <div className="space-y-4 text-gray-700 leading-relaxed font-sans">{children}</div>
    </div>
  );
}

function VocabPair({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <h3 className="font-heading font-bold text-lg text-primary-900 mb-1">{term}</h3>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 font-sans">
        Think of it as
      </p>
      <p className="text-gray-700 leading-relaxed font-sans">{children}</p>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-50 border-l-4 border-gold-500 rounded-r-lg p-5 text-gray-700 leading-relaxed font-sans">
      {children}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-sm text-accent-700 bg-accent-50 px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}
