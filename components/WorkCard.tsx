export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies?: string[];
}

interface WorkCardProps {
  work: WorkExperience;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:border-l-0 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>

      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {work.role}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
            {work.duration}
          </span>
        </div>

        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {work.company}
        </h4>

        <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
          {work.description}
        </p>

        {/* Technologies */}
        {work.technologies && work.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
