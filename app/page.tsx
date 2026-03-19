import Link from 'next/link';

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '$6M+', label: 'Annual Cost Savings Delivered' },
  { value: '30%', label: 'User Growth Driven' },
];

const skills = ['Go', 'Python', 'AWS', 'TypeScript', 'React', 'Docker', 'PostgreSQL', 'LLM Integration'];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="animate-fade-in-up">
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
            Software Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
            Jeffrey Lee
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Backend-focused engineer with a track record of building scalable systems.
            Experienced with Go, Python, and AWS — from microservices to production LLM integrations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200 shadow-sm"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:border-gray-500 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/work"
              className="px-5 py-2.5 text-gray-500 dark:text-gray-400 text-sm font-semibold hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              View Experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
          Core Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Full background →
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Read my writing →
          </Link>
        </div>
      </section>
    </main>
  );
}
