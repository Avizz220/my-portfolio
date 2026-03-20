"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Layers3, Target } from "lucide-react";
import { useEffect, useState } from "react";

const highlights = [
  {
    title: "Academic Performance",
    value: "CGPA 3.48 / 4.00",
    detail: "Up to 3rd semester",
    icon: GraduationCap,
  },
  {
    title: "Technical Projects",
    value: "05 Delivered",
    detail: "Web, mobile, desktop and DevOps",
    icon: BriefcaseBusiness,
  },
  {
    title: "Skill Domains",
    value: "08 Core Areas",
    detail: "Frontend to infrastructure workflows",
    icon: Layers3,
  },
  {
    title: "Internship Focus",
    value: "SE / Full-Stack / Mobile",
    detail: "Recruiter-ready role alignment",
    icon: Target,
  },
];

export function QuickHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const getRelativeSlot = (index: number) => {
    const total = highlights.length;
    const raw = (index - activeIndex + total) % total;

    if (raw === 0) {
      return "center";
    }

    if (raw === 1) {
      return "right";
    }

    if (raw === total - 1) {
      return "left";
    }

    return "hidden";
  };

  const slotStyles = {
    left: { x: -330, scale: 0.84, opacity: 0.5, zIndex: 2 },
    center: { x: 0, scale: 1, opacity: 1, zIndex: 4 },
    right: { x: 330, scale: 0.84, opacity: 0.5, zIndex: 2 },
    hidden: { x: 560, scale: 0.74, opacity: 0, zIndex: 1 },
  } as const;

  return (
    <section className="mx-auto -mt-10 w-full max-w-6xl px-5 sm:px-8 lg:px-10" aria-label="Quick recruiter highlights">
      <div className="grid gap-3 sm:grid-cols-2 xl:hidden">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="section-shell bg-white/95 p-4 backdrop-blur sm:p-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                <Icon size={14} className="text-[var(--accent)]" />
                {item.title}
              </div>
              <p className="mt-3 text-base font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-xs text-slate-600">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="relative hidden h-[220px] items-center justify-center overflow-hidden xl:flex">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          const slot = getRelativeSlot(index);
          const isCenter = slot === "center";

          return (
            <motion.article
              key={item.title}
              initial={false}
              animate={slotStyles[slot]}
              transition={{ duration: 0.75, ease: [0.22, 0.65, 0.2, 1] }}
              className={`section-shell absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 p-5 backdrop-blur ${
                isCenter ? "bg-white shadow-[0_28px_52px_-30px_rgba(15,23,42,0.56)]" : "bg-white/92"
              }`}
              style={{ zIndex: slotStyles[slot].zIndex }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                <Icon size={14} className="text-[var(--accent)]" />
                {item.title}
              </div>
              <p className={`mt-3 font-semibold tracking-tight text-slate-900 ${isCenter ? "text-3xl" : "text-2xl"}`}>{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
