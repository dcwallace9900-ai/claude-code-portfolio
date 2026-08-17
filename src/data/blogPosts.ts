export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  motif: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'docs-as-code-for-writers',
    title: "Docs-as-Code for Writers Who Aren't Engineers",
    date: '2026-08-17',
    excerpt:
      "Your team wants to move docs into Git, and the tooling looks like it was built for developers. Here's what all of it actually means, in plain writer terms.",
    tags: ['Technical Writing', 'Docs-as-Code', 'Developer Experience'],
    motif: 'branch-merge',
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
