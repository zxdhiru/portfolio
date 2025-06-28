

export function HeroSection() {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center py-20 sm:py-16 border-b border-gray-600/15 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-500/20 dark:to-neutral-900"
      aria-labelledby="hero-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div
            
          >
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight"
            >
              <span
                className="block mb-4"
                
              >
                Dhirendra Rana
              </span>
              <span
                className="text-lg sm:text-xl font-medium text-[var(--color-secondary)] tracking-wide"
               
              >
                Full Stack MERN Developer in India
              </span>
            </h1>
          </div>

          <div
           
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-[var(--color-secondary)] max-w-3xl mx-auto leading-relaxed">
              Welcome! I&apos;m{" "}
              <strong className="text-[var(--color-foreground)]">
                Dhirendra (Dhiru) Rana
              </strong>
              , a passionate{" "}
              <strong className="text-[var(--color-foreground)]">
                Full Stack MERN Developer
              </strong>{" "}
              specializing in building robust, scalable, and user-friendly web
              applications.
            </p>
            <p className="text-base sm:text-lg text-[var(--color-secondary)] max-w-2xl mx-auto">
              I am dedicated to crafting seamless user experiences, optimizing
              website performance, and solving real-world problems with clean,
              efficient code.
            </p>
          </div>

          <nav
            
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Hero navigation"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-white text-neutral-800 font-semibold  transition-colors shadow-lg hover:shadow-xl"
              title="View Dhirendra Rana's Projects"
            >
              View Projects
            </a>
            <a
              href="mailto:zxdhiru.dev@gmail.com"
              className="px-8 py-3 rounded-xl border-2  transition-colors shadow-lg hover:shadow-xl"
              title="Contact Dhirendra Rana"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
