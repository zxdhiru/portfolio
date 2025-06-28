import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React, showcasing my projects, skills, and contact information. Responsive and dark mode supported.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/zxdhiru/portfolio",
    demo: "#",
    caseStudyUrl: "/projects/1",
    image: "/project1.avif",
    ariaLabel: "View Portfolio Website project details",
  },
  {
    title: "MERN Blog Platform",
    description:
      "A full-stack blog platform where users can create, edit, and comment on posts. Features authentication and RESTful APIs.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/zxdhiru/mern-blog",
    demo: "#",
    caseStudyUrl: "/projects/2",
    image: "/project2.avif",
    ariaLabel: "View MERN Blog Platform project details",
  },
  {
    title: "Task Manager App",
    description:
      "A productivity app to manage daily tasks with drag-and-drop, deadlines, and reminders. Built for seamless user experience.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://github.com/zxdhiru/task-manager",
    demo: "#",
    caseStudyUrl: "/projects/3",
    image: "/project3.avif",
    ariaLabel: "View Task Manager App project details",
  },
];

export function ProjectsSection() {

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      aria-labelledby="projects-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          
          className="text-center mb-20"
        >
          <h2
            id="projects-title"
            className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div
          
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <article
              key={idx}
              
              className="group bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-between"
              aria-labelledby={`project-${idx}-title`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  
                />
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h3
                  id={`project-${idx}-title`}
                  className="text-2xl font-bold text-neutral-900 dark:text-white"
                >
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full text-sm font-medium text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex-1" /> */}
                <div className="flex gap-4 pt-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition text-sm text-center"
                    aria-label={`View code for ${project.title}`}
                  >
                    View Code
                  </a>
                  <Link
                    to={project.caseStudyUrl}
                    className="flex-1 px-4 py-2.5 rounded-lg border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-sm text-center"
                    aria-label={project.ariaLabel}
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
