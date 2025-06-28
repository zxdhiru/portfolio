// Navbar component for the portfolio website
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Simple icons (SVG) for sun, moon, system
  const icons = {
    light: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth="2"/><path strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
    ),
    dark: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
    ),
    system: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M8 21h8"/></svg>
    ),
  };



  return (
    <nav
      className="w-full dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg fixed top-0 left-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-neutral-900 dark:text-white"
            
          >
            <span>ZXDHIRU</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                
              >
                <Link
                  to={link.href}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            
            className="md:hidden flex items-center p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6 text-neutral-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <div
              
              className="md:hidden overflow-hidden"
            >
              <div className="py-2 space-y-1">
                {navLinks.map((link, index) => (
                  <div
                    key={link.href}
                    
                  >
                    <Link
                      to={link.href}
                      className="block px-4 py-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
