import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { postComponents } from './blog/postRegistry';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const PostComponent = slug ? postComponents[slug] : undefined;

  if (!PostComponent) {
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
          <p className="text-gray-600">Post not found.</p>
        </div>
      </section>
    );
  }

  return <PostComponent />;
}
