import type { Route } from "./+types/home";
import { HeroSection } from "~/components/heroSection";
import { ProjectsSection } from "~/components/projectsSection";
import { AboutSection } from "~/components/aboutSection";
import { SkillsSection } from "~/components/skillsSection";
import { ContactSection } from "~/components/contactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dhirendra's Portfolio" },
    { name: "description", content: "Welcome to Dhirendra's Portfolio" },
  ];
}

export default function Home() {
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      {/* Modern glassy floating card for hero */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      {/* Section container with modern spacing and fade-in */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="animate-fade-in-up">
            <ProjectsSection />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <SkillsSection />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <AboutSection projects="#projects" />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <ContactSection />
          </div>
        </div>
      </section>
    </main>
  );
}
