"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
  images?: string[];
  index: number;
};

export function ProjectCard({ title, description, stack, github, live, featured, images, index }: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = Boolean(images && images.length > 0);

  useEffect(() => {
    if (!images || images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_22px_46px_-36px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.24)_0%,rgba(15,118,110,0)_70%)]" />
        <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16)_0%,rgba(29,78,216,0)_70%)]" />
      </div>

      <div className="relative flex h-full flex-col">
        {hasImages ? (
          <div className="relative mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="relative h-48 w-full sm:h-52">
              {images?.map((image, imageIndex) => (
                <Image
                  key={`${title}-${image}`}
                  src={image}
                  alt={`${title} screenshot ${imageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-700 ${imageIndex === activeImage ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>

            {images && images.length > 1 ? (
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-900/60 px-2 py-1" aria-label="Project image indicators">
                {images.map((_, dotIndex) => (
                  <button
                    key={`${title}-dot-${dotIndex}`}
                    type="button"
                    onClick={() => setActiveImage(dotIndex)}
                    className={`h-1.5 rounded-full transition-all ${dotIndex === activeImage ? "w-4 bg-white" : "w-1.5 bg-white/55"}`}
                    aria-label={`Show screenshot ${dotIndex + 1} for ${title}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[1.28rem] font-semibold leading-snug tracking-tight text-slate-900">{title}</h3>
          {featured ? (
            <span className="rounded-full border border-blue-100 bg-gradient-to-r from-teal-50 to-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
              Featured
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

        <ul className="mt-5 flex flex-wrap gap-2.5">
          {stack.map((tech) => (
            <li key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6 text-sm font-semibold text-slate-900">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            title={`Open ${title} GitHub repository`}
            className="btn-secondary inline-flex items-center gap-2 px-4 py-2"
          >
            <Github size={16} />
            GitHub
          </a>
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              title={`Open ${title} live site`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-black/80 bg-transparent px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
