import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogData from '@/data/blog.json';
import { BlogPost } from '@/components/BlogCard';
import { getBlogPostContent } from '@/lib/markdown';
import MarkdownContent from '@/components/MarkdownContent';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const posts: BlogPost[] = blogData as BlogPost[];
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const markdownContent = getBlogPostContent(params.slug);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <time dateTime={post.date}>{formattedDate}</time>
              {post.author && (
                <>
                  <span>•</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          {markdownContent ? (
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <MarkdownContent content={markdownContent} />
            </div>
          ) : (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                <p className="text-xl mb-6">{post.description}</p>
                <p className="mb-4">
                  This blog post doesn't have markdown content yet. The markdown file
                  should be located at <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">content/blog/{params.slug}.md</code>
                </p>
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
