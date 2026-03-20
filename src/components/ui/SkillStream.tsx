"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SkillStreamProps = {
  skills: string[];
  visibleCount?: number;
};

export function SkillStream({ skills, visibleCount = 5 }: SkillStreamProps) {
  const [displayQueue, setDisplayQueue] = useState<Array<{ id: number; text: string }>>([]);
  const idCounterRef = useRef(0);
  const nextIndexRef = useRef(0);

  useEffect(() => {
    if (skills.length === 0) {
      setDisplayQueue([]);
      return;
    }

    const initialCount = Math.min(visibleCount, skills.length);
    const initialQueue = Array.from({ length: initialCount }, (_, index) => ({
      id: idCounterRef.current++,
      text: skills[index],
    }));

    setDisplayQueue(initialQueue);
    nextIndexRef.current = initialCount % skills.length;
  }, [skills, visibleCount]);

  useEffect(() => {
    if (skills.length <= visibleCount) {
      return;
    }

    const timer = setInterval(() => {
      setDisplayQueue((prev) => {
        if (prev.length === 0) {
          return prev;
        }

        const nextSkill = skills[nextIndexRef.current % skills.length];
        nextIndexRef.current = (nextIndexRef.current + 1) % skills.length;

        return [...prev.slice(1), { id: idCounterRef.current++, text: nextSkill }];
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [skills, visibleCount]);

  const sizeClasses = [
    "h-12 px-5 text-sm",
    "h-14 px-6 text-base",
    "h-11 px-4 text-sm",
    "h-13 px-5 text-sm",
    "h-10 px-4 text-xs",
    "h-12 px-5 text-sm",
  ];

  return (
    <div className="section-shell relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-50 p-5 text-slate-900 sm:p-7">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-300/28 blur-2xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-300/24 blur-2xl" />
        <div className="absolute left-1/2 top-[58%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/45" />
        <div className="absolute left-1/2 top-[58%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/40" />
      </div>

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Live Skill Stream</p>
        <p className="mt-2 text-sm text-slate-700">Rotating technologies in continuous upward motion.</p>
      </div>

      <div className="relative mt-6 min-h-[300px] sm:min-h-[340px]">
        <AnimatePresence initial={false}>
          <ul className="space-y-3" aria-label="Animated engineering skills">
            {displayQueue.map((item, index) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.96, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, scale: 0.92, filter: "blur(3px)" }}
                transition={{ duration: 0.58, ease: [0.22, 0.65, 0.2, 1] }}
                className="flex"
                style={{ marginLeft: `${(index % 3) * 14}px` }}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-full border font-semibold shadow-[0_12px_26px_-20px_rgba(0,0,0,0.26)] backdrop-blur-sm ${sizeClasses[index % sizeClasses.length]} ${
                    index % 3 === 0
                      ? "border-teal-300 bg-teal-50 text-teal-800"
                      : index % 3 === 1
                        ? "border-blue-300 bg-blue-50 text-blue-800"
                        : "border-slate-300 bg-white text-slate-800"
                  }`}
                >
                  {item.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      </div>
      <p className="relative mt-3 text-xs text-slate-600">Skills rotate one-by-one in a continuous upward flow.</p>
    </div>
  );
}
