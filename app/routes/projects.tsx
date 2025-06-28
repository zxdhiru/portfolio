import { ProjectsSection } from "../components/projectsSection";
import type { Route } from "./+types/projects";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dhirendra's Projects" },
    {
      name: "description",
      content: "Explore Dhirendra's projects and case studies",
    },
  ];
}
export default function Projects() {
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-16">
        <ProjectsSection />
      </div>
    </main>
  );
}
