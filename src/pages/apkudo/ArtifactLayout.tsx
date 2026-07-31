import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ArtifactLayoutProps {
  title: string;
  artifactType: string;
  context?: string;
  confidentialityNote?: string;
  backTo?: string;
  backLabel?: string;
  children: React.ReactNode;
}

export default function ArtifactLayout({
  title,
  artifactType,
  context,
  confidentialityNote = 'Client names and proprietary system identifiers have been replaced with generic equivalents to protect confidentiality.',
  backTo = '/projects/apkudo',
  backLabel = 'Back to Apkudo Case Study',
  children,
}: ArtifactLayoutProps) {
  return (
    <section className="section-padding bg-white min-h-screen">
      <div className="container max-w-4xl">
        <Link
          to={backTo}
          className="inline-flex items-center text-gray-500 hover:text-primary-700 text-sm mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          {backLabel}
        </Link>

        <div className="mb-2">
          <span className="text-accent-600 text-xs font-semibold uppercase tracking-widest font-sans">
            {artifactType}
          </span>
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-3">
          {title}
        </h1>
        <div className="w-24 h-1 bg-gold-500 mb-6"></div>

        {context && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              <span className="font-semibold text-primary-900">Context: </span>
              {context}
            </p>
            {confidentialityNote && (
              <p className="text-xs text-gray-400 mt-2 font-sans">
                {confidentialityNote}
              </p>
            )}
          </div>
        )}

        <div className="prose prose-gray max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
