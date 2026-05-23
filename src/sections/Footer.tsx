import { Github, Linkedin, Mail } from 'lucide-react';
import { navItems, siteConfig } from '../data/portfolioData';

export const Footer = () => (
  <footer className="border-t border-border/60 py-8">
    <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Rajvi Desai Portfolio</p>
        <p className="mt-2 text-sm text-muted">
          Marketing ROI case study built with React, Tailwind CSS, Framer Motion, and executive-style storytelling.
        </p>
      </div>

      <nav className="flex flex-wrap gap-4">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="text-sm font-semibold text-muted transition hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground transition hover:border-primary/40 hover:text-primary"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" />
        </a>
        <a
          href={siteConfig.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0A66C2]/25 bg-[#0A66C2]/10 text-[#0A66C2] transition hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/20 bg-slate-900/5 text-foreground transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background dark:bg-slate-100/5"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);
