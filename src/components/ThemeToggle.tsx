import { Moon, SunMedium } from 'lucide-react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/80 text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
    aria-label="Toggle dark mode"
  >
    {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
  </button>
);
