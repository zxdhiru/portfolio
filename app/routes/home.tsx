import type { Route } from "./+types/home";
import { HeroSection } from "~/components/heroSection";
import { ProjectsSection } from "~/components/projectsSection";
import { AboutSection } from "~/components/aboutSection";
import { SkillsSection } from "~/components/skillsSection";
import { ContactSection } from "~/components/contactSection";
import { submitQuery } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dhirendra's Portfolio" },
    { name: "description", content: "Welcome to Dhirendra's Portfolio" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let title = formData.get("name");
  let email = formData.get("email");
  let phone = formData.get("phone");
  let message = formData.get("message");
  const phoneNumber =
    typeof phone === "string" && phone.trim() !== "" && !isNaN(Number(phone))
      ? Number(phone)
      : 0;
  const query = await submitQuery(
    title as string,
    email as string,
    phoneNumber,
    message as string
  );
  return query;
}

export default function Home({ actionData }: Route.ComponentProps) {
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
            <ContactSection
              actionData={actionData}
              loaderData={undefined}
              params={{}}
              matches={[
                {
                  id: "root",
                  params: {},
                  pathname: "/",
                  data: undefined,
                  handle: undefined,
                },
                {
                  id: "routes/home",
                  params: {},
                  pathname: "/home",
                  data: undefined,
                  handle: undefined,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
