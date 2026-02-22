export default function About() {
  const skills = [
    'Go',
    'Python',
    'AWS',
    'Docker',
    'Kubernetes',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know more about my background and interests
          </p>
        </div>

        {/* Personal Introduction */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Introduction
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hello! I&apos;m a passionate software developer with a love for creating
              innovative web applications. I enjoy solving complex problems and
              turning ideas into reality through code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My journey in software development started with curiosity.
              The curiosity has drove me to self-taught myself all the way to become a professional developer and evolved into a career focused on building user-friendly, scalable
              applications. I&apos;m always eager to learn new technologies and
              improve my craft.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-110 hover:shadow-md transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.05}s`, animationFillMode: 'both' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Science - Mechanical Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-0">
                National Chiao Tung University
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Master of Science - Mechanical Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-0">
                University of Washington
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Interests
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, I enjoy exploring new technologies, reading tech blogs, and staying up-to-date
              with the latest trends in AI and Computer Science. I also love playing basketball,
              badminton, and spending time with friends and family.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
