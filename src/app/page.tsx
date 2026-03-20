"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, ExternalLink, Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickHighlights } from "@/components/sections/QuickHighlights";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillStream } from "@/components/ui/SkillStream";
import {
  certificates,
  contacts,
  courses,
  education,
  languages,
  leadershipHighlights,
  profile,
  projects,
  skillCategories,
  softSkills,
} from "@/data/portfolioData";

const sectionReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contactIconMap = {
  Email: Mail,
  Phone: Phone,
  GitHub: Github,
  LinkedIn: Linkedin,
  Website: Globe,
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[var(--surface)] text-slate-800">
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            key="intro-transition"
            className="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-800"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.9, 0.2, 1] }}
            />
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-slate-900 via-slate-900 to-blue-800"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.9, 0.2, 1] }}
            />
            <motion.figure
              className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/20 shadow-[0_26px_60px_-28px_rgba(0,0,0,0.65)] sm:w-[260px]"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
            >
              <Image
                src="/generated.png"
                alt="Intro profile visual"
                width={620}
                height={760}
                priority
                className="h-[280px] w-full object-cover sm:h-[340px]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent px-4 pb-4 pt-7 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-200">Portfolio</p>
                <p className="mt-1 text-sm font-semibold">Avishka Hirushan</p>
              </figcaption>
            </motion.figure>
            <motion.p
              className="absolute left-1/2 top-[calc(50%+210px)] w-full -translate-x-1/2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-100 sm:top-[calc(50%+252px)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
            >
              Computer Engineering Undergraduate • University of Ruhuna
            </motion.p>
            <motion.div
              className="absolute left-1/2 top-1/2 h-0.5 w-56 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-300 via-white to-blue-300"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.65, delay: 0.45 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <QuickHighlights />

      <main className="mx-auto w-full max-w-6xl space-y-20 px-5 py-14 sm:space-y-24 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
        <motion.section
          id="about"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading eyebrow="About Me" title="Professional Summary" subtitle={profile.summary} />
          <div className="section-shell p-6 sm:p-7">
            <p className="text-base leading-8 text-slate-700">
              Seeking internship opportunities in software engineering, full-stack development, mobile application development,
              and related IT fields to contribute effectively while strengthening practical industry skills.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">Career Objective</span>
              {languages.map((language) => (
                <span key={language} className="rounded-full border border-slate-200 px-3 py-1 text-slate-700">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading eyebrow="Education" title="Academic Background" />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            {education.map((item) => (
              <article
                key={item.school}
                className={`rounded-2xl border p-6 sm:p-7 ${
                  item.primary
                    ? "border-teal-200 bg-teal-50/50 shadow-[0_16px_44px_-28px_rgba(13,148,136,0.42)]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.school}</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">{item.degree}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.focus}</p>
                <p className="mt-4 text-sm font-semibold text-[var(--accent)]">{item.note}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading
            eyebrow="Technical Skills"
            title="Engineering Stack"
            subtitle="A balanced foundation across application engineering, infrastructure workflows, and collaborative software delivery."
          />
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.4fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SkillStream skills={skillCategories.flatMap((category) => category.items)} visibleCount={6} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillCategories.map((category, catIndex) => (
                <article
                  key={category.category}
                  className="section-shell bg-white p-5 sm:p-6"
                >
                  <div className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                    {`0${catIndex + 1}`.slice(-2)}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{category.category}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={`${category.category}-${item}`}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <div className="section-shell bg-gradient-to-r from-teal-50 via-white to-blue-50 p-5 sm:col-span-2 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">Engineering Approach</p>
                <p className="mt-3 text-sm leading-7 text-slate-800">
                  Combining frontend, backend, DevOps, and collaboration practices to deliver complete solutions that are reliable, maintainable, and production-oriented.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading
            eyebrow="Projects"
            title="Technical Work"
            subtitle="Selected work demonstrating full-stack delivery, mobile engineering, and production-focused software practices."
          />
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="leadership"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading eyebrow="Leadership" title="Leadership & Soft Skills" />
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            <article className="section-shell p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-900">Rextro 2025 Publicity Team Leadership</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {leadershipHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="section-shell bg-slate-50/70 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-900">Core Professional Strengths</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <li key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.section>

        <motion.section
          id="courses"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading eyebrow="Learning" title="Courses & Self-Learning" />
          <div className="section-shell p-6 sm:p-7">
            <ul className="flex flex-wrap gap-3">
              {courses.map((course) => (
                <li key={course} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="certificates"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading eyebrow="Credentials" title="Certificates" />
          <div className="section-shell p-6 sm:p-7">
            <h3 className="text-lg font-semibold text-slate-900">{certificates.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{certificates.description}</p>
            <a
              href={certificates.link}
              target="_blank"
              rel="noreferrer"
              title="Open certificate folder"
              className="btn-secondary mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
            >
              Open Google Drive Folder
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="scroll-mt-28"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let Us Connect"
            subtitle="Available for internship opportunities in Software Engineering, Full-Stack Development, and Mobile Application Development."
          />

          <div className="section-shell p-6 sm:p-7">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((item) => {
                const Icon = contactIconMap[item.label as keyof typeof contactIconMap];

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      title={item.label}
                      className="group flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-teal-700"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-teal-700">
                        {Icon ? <Icon size={16} /> : null}
                        {item.label}
                      </span>
                      <ArrowUpRight size={14} className="text-slate-500 transition group-hover:text-teal-700" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cvPath}
                download
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                title="Download CV"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="https://github.com/Avizz220"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                title="Open GitHub profile"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
