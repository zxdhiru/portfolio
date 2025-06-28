import { ContactSection } from "../components/contactSection";
import type { Route } from "./+types/contact";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Dhirendra" },
    { name: "description", content: "Get in touch with Dhirendra" },
  ];
}
export default function Contact() {
  return (
    <main className="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-16">
        <ContactSection />
      </div>
    </main>
  );
}
