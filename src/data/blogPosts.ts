export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'docs-as-code-for-writers',
    title: "Docs-as-Code for Writers Who Aren't Engineers",
    date: '2026-08-12',
    excerpt:
      "Your team wants to move docs into Git, and the tooling looks like it was built for developers. Here's what all of it actually means, in plain writer terms.",
    tags: ['Technical Writing', 'Docs-as-Code', 'Developer Experience'],
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
