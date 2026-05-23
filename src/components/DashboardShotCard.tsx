import { ArrowUpRight, ImagePlus } from 'lucide-react';

type DashboardShotCardProps = {
  title: string;
  description: string;
  tag: string;
};

export const DashboardShotCard = ({ title, description, tag }: DashboardShotCardProps) => (
  <div className="glass-panel overflow-hidden">
    <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,transparent,rgba(255,255,255,0.08))]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            {tag}
          </span>
          <ImagePlus className="h-5 w-5 text-white/80" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <div className="h-2 w-16 rounded-full bg-white/20" />
            <div className="mt-4 h-10 rounded-2xl bg-white/15" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <div className="h-2 w-14 rounded-full bg-white/20" />
            <div className="mt-4 h-10 rounded-2xl bg-white/15" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <div className="h-2 w-12 rounded-full bg-white/20" />
            <div className="mt-4 h-10 rounded-2xl bg-white/15" />
          </div>
          <div className="col-span-2 rounded-3xl border border-white/10 bg-white/10 p-3">
            <div className="h-28 rounded-[1.4rem] bg-white/10" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-3">
            <div className="h-28 rounded-[1.4rem] bg-white/10" />
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
      </div>
    </div>
  </div>
);
