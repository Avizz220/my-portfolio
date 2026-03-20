import { profile } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-white/70 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:px-8 lg:px-10">
        <p className="font-medium text-slate-700">{profile.fullName}</p>
        <p>Built with Next.js, Tailwind CSS, Framer Motion, and Lucide React.</p>
      </div>
    </footer>
  );
}
