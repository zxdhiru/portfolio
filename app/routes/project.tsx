import { useParams } from "react-router";
import { CaseStudy } from "../components/caseStudy";
import type { Route } from "./+types/project";
export function meta({}: Route.MetaArgs) {
  const title = "Project Case Study";
  return [
    { title: title },
    { name: "description", content: "Welcome to Dhirendra's Portfolio" },
  ];
}
const caseStudies = [
  {
    id: 1,
    title: "Portfolio Website",
    summary:
      "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
    challenges: [
      "Implementing a responsive design that works seamlessly across all devices",
      "Creating a performant dark mode with smooth transitions",
      "Ensuring accessibility while maintaining visual appeal",
    ],
    solutions: [
      "Used Tailwind CSS for responsive design and dark mode implementation",
      "Implemented CSS transitions for smooth theme switching",
      "Followed WCAG guidelines for accessibility",
    ],
    results: [
      "Achieved 100% responsive design across all devices",
      "Improved user experience with smooth theme transitions",
      "Perfect Lighthouse accessibility score",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    timeline: "4 weeks",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "MERN Blog Platform",
    summary:
      "A full-featured blogging platform built with the MERN stack, supporting rich text editing and real-time comments.",
    challenges: [
      "Building a secure authentication system",
      "Implementing real-time updates for comments",
      "Optimizing database queries for performance",
    ],
    solutions: [
      "Used JWT for secure authentication",
      "Implemented WebSocket for real-time features",
      "Created efficient MongoDB indexes and pagination",
    ],
    results: [
      "Reduced page load time by 60%",
      "Increased user engagement by 40%",
      "Successfully handling 1000+ daily active users",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    timeline: "8 weeks",
    role: "Full Stack Developer",
  },
  {
    id: 3,
    title: "Task Manager App",
    summary:
      "A productivity app with drag-and-drop task management, reminders, and team collaboration features.",
    challenges: [
      "Creating smooth drag-and-drop interactions",
      "Implementing real-time updates across team members",
      "Building a reliable notification system",
    ],
    solutions: [
      "Used React DnD for drag-and-drop functionality",
      "Implemented Redux for state management",
      "Created a service worker for notifications",
    ],
    results: [
      "Improved team productivity by 30%",
      "Reduced task completion time by 25%",
      "95% positive user feedback",
    ],
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    timeline: "6 weeks",
    role: "Full Stack Developer",
  },
];

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.id === Number(id));

  if (!caseStudy) {
    return (
      <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Case Study Not Found
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">
            The requested case study does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="dark:bg-neutral-900 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-16">
        <CaseStudy {...caseStudy} />
      </div>
    </main>
  );
}
