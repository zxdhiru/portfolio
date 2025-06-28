import { SkillsSection } from "../components/skillsSection";
import type { Route } from "./+types/skills";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dhirendra's Skills" },
    {
      name: "description",
      content: "Explore Dhirendra's skills and expertise",
    },
  ];
}
export default function Skills() {
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
    <div className="flex-1 flex flex-col justify-center py-16">
      <SkillsSection />
    </div>
  </main>
  );
}
