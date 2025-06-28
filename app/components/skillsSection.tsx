import reactLogo from "/react-native.png";
import reduxLogo from "/redux.png";
import javascriptLogo from "/javascript.png";
import typescriptLogo from "/typescript.png";
import htmlLogo from "/html.png";
import cssLogo from "/css.png";
import tailwindLogo from "/tailwindcss.png";
import nextjsLogo from "/nextjs.png";
import nodejsLogo from "/nodejs.png";
import expressLogo from "/express-js.png";
import mongoLogo from "/mongodb.png";
// import restLogo from "/rest.png"
// import jwtLogo from "/jwt.png"
import gitLogo from "/git.png";
import githubLogo from "/github.png";
import dockerLogo from "/docker.png";
import figmaLogo from "/figma.png";
import restLogo from "/rest.png";
import jwtLogo from "/jwt.png";
import postmanLogo from "/postman.png";

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", icon: reactLogo },
      { name: "Redux", icon: reduxLogo },
      { name: "JavaScript (ES6+)", icon: javascriptLogo },
      { name: "TypeScript", icon: typescriptLogo },
      { name: "HTML5", icon: htmlLogo },
      { name: "CSS3", icon: cssLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
      { name: "Next.js", icon: nextjsLogo },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", icon: nodejsLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "MongoDB", icon: mongoLogo },
      { name: "REST APIs", icon: restLogo },
      { name: "JWT Auth", icon: jwtLogo },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git", icon: gitLogo },
      { name: "GitHub", icon: githubLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "Figma", icon: figmaLogo },
      { name: "Postman", icon: postmanLogo },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-16 dark:bg-neutral-900"
      aria-labelledby="skills-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            id="skills-title"
            className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6"
          >
            <span className="inline-block mr-4" aria-hidden="true">
              🚀
            </span>
            My Skills
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            A blend of technologies and tools I use to craft modern, scalable
            web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 flex flex-col items-center border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-3xl mb-4" aria-hidden="true">
                {group.icon}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6 tracking-wide uppercase">
                {group.category}
              </h3>
              <ul
                className="w-full space-y-3"
                aria-label={`${group.category} skills`}
              >
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg  hover:bg-neutral-100 bg-neutral-700 transition-colors border border-gray-100/5 hover:text-neutral-800 text-neutral-200"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name + "Logo"}
                      loading="lazy"
                      className="h-6 aspect-square"
                    />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="mailto:zxdhiru.dev@gmail.com"
            className="inline-flex items-center px-8 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Let's Work Together!
          </a>
        </div>
      </div>
    </section>
  );
}
