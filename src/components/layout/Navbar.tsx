"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolioData";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(item.id);
            }
          });
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="#top" className="inline-flex flex-col leading-none" title="Go to top">
          <span className="accent-gradient-text text-base font-semibold tracking-tight">{profile.fullName}</span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Portfolio</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/90 px-2 py-1 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.5)] md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:text-slate-950"
                title={`Jump to ${item.label}`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 shadow-sm md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-slate-200 bg-white/95 px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  onClick={() => setIsOpen(false)}
                  title={`Jump to ${item.label}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
