type SectionFallbackProps = {
  label: string;
  compact?: boolean;
};

export const SectionFallback = ({ label, compact = false }: SectionFallbackProps) => (
  <section className={compact ? 'py-10' : 'section-space'}>
    <div className="container-shell">
      <div className="glass-panel p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="h-20 animate-pulse rounded-[24px] bg-primary/8" />
          <div className="h-20 animate-pulse rounded-[24px] bg-primary/8" />
          <div className="h-20 animate-pulse rounded-[24px] bg-primary/8" />
        </div>
      </div>
    </div>
  </section>
);
