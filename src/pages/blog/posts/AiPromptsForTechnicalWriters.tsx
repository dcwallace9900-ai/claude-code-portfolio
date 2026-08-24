import BlogPostLayout from '../BlogPostLayout';
import { blogPosts } from '../../../data/blogPosts';
import { useDocumentMeta } from '../../../hooks/useDocumentMeta';

const post = blogPosts.find((p) => p.slug === 'ai-prompts-for-technical-writers')!;

const patterns = [
  {
    title: 'Give it a role and an audience',
    body: 'Ask it to "explain webhooks" and it will, to no one in particular, which means badly. Tell it who is writing and who is reading, and the whole thing snaps into focus. Naming the reader is the single cheapest upgrade you will ever make to a prompt.',
    prompts: [
      { label: 'Instead of', text: 'Explain webhooks.' },
      {
        label: 'Try',
        text: "You are writing developer documentation for engineers who are new to our platform but comfortable with REST APIs. Explain what a webhook is and when they would use one, in plain language, no marketing tone.",
      },
    ],
  },
  {
    title: 'Feed it the source of truth',
    body: 'Left to its own devices, AI will happily invent an API field that has never existed and describe it beautifully. Do not let it freelance. Paste the real spec, schema, or release notes and tell it to use only what you gave it. This is the line between a draft you can fact-check and a short work of fiction.',
    prompts: [
      {
        label: 'Try',
        text: 'Here is the API response schema. [paste it] Using only these fields, draft a reference table with each field name, its type, and a one-line description. Do not add fields that are not in the schema.',
      },
    ],
  },
  {
    title: 'Ask for structure, not prose',
    body: 'Honestly, AI is often better at scaffolding than sentences. Let it build the outline, the table, the checklist, the headings, and keep the actual writing for yourself, where your judgment earns its keep. Let the intern stack the shelves. You decide what goes on them.',
    prompts: [
      {
        label: 'Try',
        text: 'Draft an outline for a getting-started guide for this feature. Give me the section headings and one line on what each section should cover. Do not write the full content yet.',
      },
    ],
  },
  {
    title: 'Constrain the format hard',
    body: 'Given no rules, AI writes like a press release apologizing for itself. Long, hedged, vaguely corporate. So box it in. Voice, length, person, reading level, all of it. The tighter the leash, the more it sounds like documentation and the less it sounds like a company promising to "reimagine synergy."',
    prompts: [
      {
        label: 'Try',
        text: 'Rewrite this in plain language. Active voice, second person, present tense. No sentence longer than 20 words. Assume the reader is smart but has never used this product.',
      },
    ],
  },
  {
    title: 'Use it to critique, not just to write',
    body: 'Plot twist: one of the best uses is not writing at all. Paste your own draft and ask it to play the confused first-time reader, the one you can never get on a call when you need them. It will tell you exactly where a real person would get lost, without the scheduling headache.',
    prompts: [
      {
        label: 'Try',
        text: 'Here is a paragraph from my docs. [paste it] You are a developer reading this for the first time. What is confusing? What questions would you still have? What would make you give up and file a support ticket?',
      },
    ],
  },
  {
    title: 'Hand it the tedious parts',
    body: 'Some documentation work is just chores: building error-code tables, drafting example values, listing edge cases to test, writing the boilerplate skeleton nobody enjoys. This is where AI is a gift and the risk is low, because you can eyeball the output and catch a mistake in about two seconds. Delegate the drudgery. Keep the thinking.',
    prompts: [
      {
        label: 'Try',
        text: 'Here is a list of error codes and their meanings. [paste it] Draft a troubleshooting table with three columns: error code, likely cause, and what the user should try first.',
      },
    ],
  },
];

const firstWeekSteps = [
  {
    lead: 'Pick one small, low-risk task.',
    rest: 'An error-message table, a rough outline, a plain-language rewrite of one clunky paragraph. Do not start with your most important doc.',
  },
  {
    lead: 'Write the prompt with context.',
    rest: 'Name the audience, paste the source material, set the format. Notice how much better the result is than a one-liner.',
  },
  {
    lead: 'Edit ruthlessly and verify everything.',
    rest: 'Treat the output like a first draft from your confident, lying coworker, because it is. Check every technical claim against the real source. Skipping this is how wrong docs get shipped with your name on them.',
  },
  {
    lead: 'Iterate with follow-ups.',
    rest: 'You do not need the perfect prompt up front. Get a draft, then say "shorter," "less formal," "add an example here." The conversation is the tool.',
  },
  {
    lead: 'Save the prompts that work.',
    rest: 'When a prompt gives you a good result, keep it. You are building a small personal library of repeatable moves, which is where the real time savings compound.',
  },
];

const fears = [
  {
    q: 'Will this replace me?',
    a: 'It replaces your keyboard, not your brain. AI can produce a sentence. It cannot decide what the reader needs, notice the draft is quietly wrong, or put its name on the accuracy of what ships. That is you. That was always the hard part, and it still is.',
  },
  {
    q: "Isn't using it cheating?",
    a: 'Is spell-check cheating? Is autocomplete? Is a calculator? It is a tool. The craft was never the typing. The craft is knowing what good looks like and refusing to ship anything less.',
  },
  {
    q: "It gets things wrong, so what's the point?",
    a: 'Correct, it does, constantly, which is exactly why you never ship its work unchecked. The point is speed on the parts you can verify fast, not blind faith. The human review is not a workaround. It is the feature.',
  },
  {
    q: "Won't everything start sounding the same?",
    a: 'Only if you let it drive. Left alone, yes, it defaults to beige. So you constrain it hard and edit it back into your voice and your team\'s standards. The mush is the default setting, not your destiny.',
  },
];

export default function AiPromptsForTechnicalWriters() {
  useDocumentMeta('AI Prompts for Technical Writers | Diana Wallace', post.excerpt);

  return (
    <BlogPostLayout title={post.title} date={post.date} tags={post.tags} motif={post.motif}>
      <p className="text-lg text-gray-600 leading-relaxed font-sans mb-10">
        A bad prompt gets you a paragraph that sounds smart and says nothing. A good one gets you a
        real draft. Here is how to write prompts that actually pull their weight, without handing
        over the part of the job that makes you good at it.
      </p>

      <Section title="Your new coworker is brilliant and lies constantly">
        <p>
          Picture the most confident person you have ever worked with. They will answer any
          question instantly, in complete sentences, with total conviction. They are also wrong
          roughly a third of the time and they will never once tell you which third. That is AI.
          That is your new coworker. Say hi.
        </p>
        <p>
          Here is the good news, and it is genuinely good news. This coworker is a phenomenal
          typist and a terrible judge. It will draft anything you ask for in seconds and it cannot
          tell whether the draft is true, whether it helps the reader, or whether it should exist at
          all. Which means the valuable work, deciding what to say and catching when the answer is
          nonsense, is still yours. You did not get replaced. You got an intern who never sleeps and
          never learns. Manage accordingly.
        </p>
        <Callout>
          <strong className="text-primary-900">The whole game in one sentence:</strong> What you get
          out is decided by what you put in. Ask a vague question, get a vague answer that wastes
          everyone's afternoon. Hand it the audience, the real source material, and firm
          constraints, and it hands you back something you can actually work with. Effort in,
          effort out. It is almost rude how simple this is.
        </Callout>
      </Section>

      <Section
        title="Six moves that do the heavy lifting"
        subtitle="Small habits, each one is the difference between a prompt that works and a prompt that wastes your time."
      >
        <div className="space-y-4">
          {patterns.map((pattern) => (
            <PatternCard key={pattern.title} title={pattern.title} body={pattern.body}>
              {pattern.prompts.map((p, i) => (
                <PromptBlock key={i} label={p.label}>
                  {p.text}
                </PromptBlock>
              ))}
            </PatternCard>
          ))}
        </div>
      </Section>

      <Section
        title="A quick before and after"
        subtitle="Same request, two ways. Watch what a little context does."
      >
        <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2">
          The weak prompt
        </h3>
        <PromptBlock>Write documentation for our login feature.</PromptBlock>
        <p className="mt-3">
          You will get four confident paragraphs that could describe literally any login feature on
          earth, plus a specific detail or two that are simply made up. You gave it nothing to be
          right about, so it improvised. Bold of it.
        </p>

        <h3 className="font-heading font-semibold text-lg text-primary-800 mb-2 mt-8">
          The strong prompt
        </h3>
        <PromptBlock>
          You are writing end-user help documentation for a non-technical audience. Here are the
          actual steps to log in, including the two-factor flow. [paste steps] Write a clear,
          numbered walkthrough. Second person, present tense, plain language. Call out the one place
          users commonly get stuck, which is entering the code before it refreshes.
        </PromptBlock>
        <p className="mt-3">
          Now you get a draft worth editing, because you handed over the audience, the real steps,
          the format, and the exact spot people get stuck. The AI did the typing. You did the
          thinking. That is the correct division of labor, and it is the whole point.
        </p>
      </Section>

      <Section title="How to start this week">
        <ol className="space-y-6 mb-2">
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
      </Section>

      <Section title="The questions everyone asks, answered">
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
          AI is not a shortcut around the craft. It is a shortcut around the typing, which are very
          different things. The writer who knows the reader, knows the product, and knows what
          clear actually looks like will run circles around anyone hoping the machine will just
          figure it out.
        </p>
        <p>
          Your judgment is the whole advantage. The prompt is just how you put it to work faster.
          Start small, stay skeptical of the output, and keep the part of the job that was always
          the point, deciding what to say and making it clear.
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

function PatternCard({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
      <h3 className="font-heading font-bold text-lg text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed font-sans mb-4">{body}</p>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function PromptBlock({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="bg-primary-800 text-gray-100 rounded-lg px-4 py-3.5 font-mono text-sm leading-relaxed">
      {label && (
        <span className="block text-gold-400 text-[11px] font-sans font-semibold uppercase tracking-widest mb-1.5">
          {label}
        </span>
      )}
      {children}
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
