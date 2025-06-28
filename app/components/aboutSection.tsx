

export function AboutSection({ projects }: { projects: string }) {
  return (
    <section
      id="about"
      className="py-4 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      aria-labelledby="about-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          
          className="text-center space-y-8 flex flex-col justify-center items-center"
        >
          <img
            src="./dhiru.jpg"
            className="h-36 rounded-full grayscale object-contain aspect-square"
            loading="lazy"
            alt="Dhirendra"
          ></img>
          <h2
            id="about-title"
            className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6"
          >
            About Me
          </h2>
          <p
            
            className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
          >
            Hello! I'm{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              Dhirendra Rana
            </span>
            , also known as Dhiru. I'm a passionate Full Stack MERN Developer
            with a knack for building robust, scalable, and user-friendly web
            applications.
          </p>
          <p
            
            className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
          >
            My expertise lies in the{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              MongoDB, Express, React, and Node.js
            </span>{" "}
            stack, and I love solving real-world problems with clean, efficient
            code. I enjoy collaborating with teams, learning new technologies,
            and continuously improving my skills.
          </p>
          <div
            
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
             
              href={projects}
              className="px-8 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Projects
            </a>
            <a
              
              href="mailto:zxdhiru.dev@gmail.com"
              className="px-8 py-3 rounded-xl border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
