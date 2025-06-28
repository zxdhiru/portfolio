import { AboutSection } from "../components/aboutSection";
import type { Route } from "./+types/about";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Dhirendra" },
    { name: "description", content: "Welcome to Dhirendra's Portfolio" },
  ];
}
export default function About() {
  const projects = "/projects";
  return (
<main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-16">
      <AboutSection projects={projects} />
      </div>
    </main>
        // <ContactSection />
  );
}
