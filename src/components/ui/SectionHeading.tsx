type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-9 sm:mb-10">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.2rem] sm:leading-tight">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">{subtitle}</p> : null}
    </header>
  );
}
