import WorkCard, { WorkExperience } from '@/components/WorkCard';
import workData from '@/data/work.json';

export default function Work() {
  const workExperiences: WorkExperience[] = workData as WorkExperience[];

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the roles I&apos;ve held throughout my career.
          </p>
        </div>

        {/* Timeline */}
        {workExperiences.length > 0 ? (
          <div className="relative">
            {workExperiences.map((work, index) => (
              <div
                key={work.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-600 dark:text-gray-400">
              No work experience to display yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
