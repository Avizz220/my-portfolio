"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts, profile, projects } from "@/data/portfolioData";

const highlightLine =
  "Computer Engineering Undergraduate • University of Ruhuna • Passionate about Full-Stack Development";

const socialIconMap = {
  Email: Mail,
  Phone: Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
  Website: Globe,
};

type HeroProps = {
  shouldStartTyping: boolean;
};

export function Hero({ shouldStartTyping }: HeroProps) {
  const [typedLine, setTypedLine] = useState("");
  const liveDemoUrl = projects.find((project) => project.live)?.live;

  useEffect(() => {
    if (!shouldStartTyping) {
      setTypedLine("");
      return;
    }

    let index = 0;

    const typingTimer = setInterval(() => {
      index += 1;
      setTypedLine(highlightLine.slice(0, index));

      if (index >= highlightLine.length) {
        clearInterval(typingTimer);
      }
    }, 34);

    return () => clearInterval(typingTimer);
  }, [shouldStartTyping]);

  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200/80">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(15,118,110,0.16)_0%,rgba(15,118,110,0)_36%),radial-gradient(circle_at_84%_16%,rgba(29,78,216,0.14)_0%,rgba(29,78,216,0)_36%),radial-gradient(circle_at_55%_95%,rgba(148,163,184,0.25)_0%,rgba(148,163,184,0)_40%)]" />
        <div className="absolute inset-0 opacity-[0.42] [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 pb-18 pt-16 sm:px-8 sm:pb-20 sm:pt-18 lg:grid-cols-[1.34fr_0.9fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="inline-flex items-center rounded-full border border-teal-200/70 bg-teal-50/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Engineering Storyboard
          </p>
          <h1 className="accent-gradient-text mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.55rem] lg:leading-[1.02]">{profile.fullName}</h1>
          <p className="mt-5 max-w-2xl rounded-xl border border-slate-200/80 bg-white/85 px-4 py-3 text-base font-semibold leading-8 text-slate-700 shadow-sm">
            {typedLine}
            {typedLine.length < highlightLine.length ? <span className="ml-0.5 animate-pulse text-[var(--accent-2)]">|</span> : null}
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black/80 bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black"
              title="Go to projects section"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-black/80 bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black"
              title="Download CV"
            >
              Download CV
              <Download size={16} />
            </a>
            {liveDemoUrl ? (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black/80 bg-transparent px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-black"
                title="Open live demo"
              >
                Live Demo
                <ArrowRight size={16} />
              </a>
            ) : null}
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {contacts.map((contact) => {
              const Icon = socialIconMap[contact.label as keyof typeof socialIconMap];
              const isRevealOnly = contact.label === "Email" || contact.label === "Phone";

              if (isRevealOnly) {
                const revealValue = contact.label === "Email" ? "ahirushan629@gmail.com" : "0742850328";

                return (
                  <li key={contact.label}>
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-sm text-slate-700"
                      title={contact.label}
                    >
                      {Icon ? <Icon size={15} /> : null}
                      {revealValue}
                    </span>
                  </li>
                );
              }

              return (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    title={contact.label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-sm text-slate-700 transition hover:border-[var(--accent-2)] hover:text-[var(--accent-2)]"
                  >
                    {Icon ? <Icon size={15} /> : null}
                    {contact.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="space-y-4"
        >
          <figure className="section-shell relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/40 p-3">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-teal-100/50 to-transparent" aria-hidden />
            <Image
              src="/generated.png"
              alt="Profile photo of Avishka Hirushan"
              width={560}
              height={680}
              priority
              className="h-[300px] w-full rounded-2xl object-cover object-top sm:h-[340px]"
            />
          </figure>

          <aside className="section-shell bg-gradient-to-br from-white via-white to-blue-50/30 p-6 backdrop-blur sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Profile Snapshot</p>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Focus</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">Software Engineering Internships</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Academic Standing</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">CGPA 3.48 / 4.00 (up to 3rd semester)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Location</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{profile.locationNote}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">Availability</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">Open to SE, Full-Stack and Mobile roles</dd>
              </div>
            </dl>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}
