import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type ExpandableCardProps = {
  title: string;
  summary: string;
  details: string[];
};

export const ExpandableCard = ({ title, summary, details }: ExpandableCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-panel p-6">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen((current) => !current)}
      >
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted">{summary}</p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-primary transition ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="mt-5 space-y-3 border-t border-border/60 pt-5">
          {details.map((detail) => (
            <p key={detail} className="text-sm leading-7 text-muted">
              {detail}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
