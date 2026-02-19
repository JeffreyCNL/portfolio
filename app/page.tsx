import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-gray-700 dark:text-gray-300">Jeffrey</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            A software developer passionate about building modern web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a full-stack developer with experience building scalable web applications.
            I love working with modern technologies and creating user-friendly experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check out my latest work and side projects
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              View Projects →
            </Link>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn about my professional journey
            </p>
            <Link
              href="/work"
              className="mt-4 inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              View Experience →
            </Link>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Blog
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Read my thoughts on development and technology
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Read Blog →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
