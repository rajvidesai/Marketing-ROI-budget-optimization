import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, siteConfig } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-soft">
            BA
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-muted">PORTFOLIO CASE STUDY</p>
            <p className="text-sm font-bold text-foreground">{siteConfig.name}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={siteConfig.resumeUrl}
            className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass-panel p-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-primary/10 hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                className="rounded-2xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
