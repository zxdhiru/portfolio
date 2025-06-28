import { Form, useActionData } from "react-router";
import { useState } from "react";

export function ContactSection() {
  const [name, seName] = useState("");
  const [email, seEmail] = useState("");
  const [message, seMessage] = useState("");

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      email,
      message,
    });
  };
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      aria-labelledby="contact-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="contact-title"
            className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6"
          >
            Contact Me
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300">
            Interested in working together or have any questions? Feel free to
            reach out!
          </p>
        </div>

        <div className="space-y-6">
          <Form
            method="post"
            className="space-y-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-8 sm:p-10"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-shadow"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-shadow"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-shadow resize-none"
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors text-lg shadow-lg hover:shadow-xl"
              onClick={handleFormSubmit}
              aria-label="Send Message"
            >
              Send Message
            </button>
          </Form>
        </div>

        <div className="mt-8 text-center">
          <a
            href="mailto:zxdhiru.dev@gmail.com"
            className="inline-flex items-center px-8 py-3 rounded-xl border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Or email me directly
          </a>
        </div>
      </div>
    </section>
  );
}
