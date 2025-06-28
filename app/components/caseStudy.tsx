interface CaseStudyProps {
  title: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  techStack: string[];
  timeline: string;
  role: string;
}

export function CaseStudy({
  title,
  summary,
  challenges,
  solutions,
  results,
  techStack,
  timeline,
  role,
}: CaseStudyProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mb-6 text-center">
        {title}
      </h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-10 text-center">
        {summary}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium">Timeline:</span> {timeline}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">
          <span className="font-medium">Role:</span> {role}
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Challenges
          </h2>
          <ul className="space-y-2">
            {challenges.map((challenge, index) => (
              <li
                key={index}
                className="text-neutral-700 dark:text-neutral-300 flex items-start"
              >
                <span className="mr-2">•</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Solutions
          </h2>
          <ul className="space-y-2">
            {solutions.map((solution, index) => (
              <li
                key={index}
                className="text-neutral-700 dark:text-neutral-300 flex items-start"
              >
                <span className="mr-2">•</span>
                {solution}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
            Results
          </h2>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li
                key={index}
                className="text-neutral-700 dark:text-neutral-300 flex items-start"
              >
                <span className="mr-2">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
