"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  category: string;
  items: string[];
  index: number;
};

export function SkillCard({ category, items, index }: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group rounded-2xl border border-slate-200/85 bg-white p-6 shadow-[0_16px_36px_-28px_rgba(15,23,42,0.45)] transition-colors duration-300 hover:border-teal-200"
    >
      <div className="mb-1 inline-flex items-center rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
        {category}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:border-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
