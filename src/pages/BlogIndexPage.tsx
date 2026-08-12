import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getSortedBlogPosts } from '../data/blogPosts';
import { formatBlogDate } from '../utils';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function BlogIndexPage() {
  useDocumentMeta(
    'Blog | Diana Wallace — Technical Documentation Manager',
    'Field notes on technical writing, docs-as-code, and developer experience from Diana Wallace, a Technical Documentation Manager specializing in API and developer documentation.'
  );

  const posts = getSortedBlogPosts();

  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container max-w-5xl">
        <p className="text-accent-600 text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
          Blog
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-3">
          Notes on Documentation & Developer Experience
        </h1>
        <div className="w-24 h-1 bg-gold-500 mb-6"></div>
        <p className="text-gray-600 max-w-2xl mb-12 font-sans">
          Field notes on technical writing, docs-as-code, and building documentation that
          developers actually use.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-accent-300 hover:shadow-soft hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
            >
              <p className="text-gray-400 text-xs font-sans uppercase tracking-widest mb-2">
                {formatBlogDate(post.date)}
              </p>
              <h2 className="font-heading font-bold text-xl text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-sans mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-accent-50 text-accent-700 text-xs font-medium rounded-full border border-accent-100 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center text-accent-600 text-sm font-medium">
                Read
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
