import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { formatBlogDate } from '../../utils';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  tags?: string[];
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, date, tags, children }: BlogPostLayoutProps) {
  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-500 hover:text-primary-700 text-sm mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-2">
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest font-sans">
            Blog
          </span>
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-3">
          {title}
        </h1>

        <p className="text-gray-500 text-sm font-sans mb-6">{formatBlogDate(date)}</p>

        <div className="w-24 h-1 bg-gold-500 mb-10"></div>

        <div className="prose prose-gray max-w-none">
          {children}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent-50 text-accent-700 text-sm font-medium rounded-full border border-accent-100 font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
