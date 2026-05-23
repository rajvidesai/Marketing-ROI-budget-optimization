import type { LucideIcon } from 'lucide-react';

type KPIStatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  detail: string;
};

export const KPIStatCard = ({ icon: Icon, value, label, detail }: KPIStatCardProps) => (
  <div className="glass-panel relative overflow-hidden p-5">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-success" />
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-2xl font-extrabold tracking-tight text-foreground">{value}</p>
        <p className="mt-2 text-sm font-semibold text-foreground">{label}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
      </div>
      <span className="rounded-2xl bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </span>
    </div>
  </div>
);
