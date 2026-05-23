import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Layers3, MousePointerClick, ShoppingCart } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { attributionComparison, funnelStages } from '../data/portfolioData';

const funnelIcons = [MousePointerClick, Layers3, ShoppingCart];

export const AttributionSection = () => (
  <section id="attribution-analysis" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Attribution Analysis"
          title="A side-by-side view of what channels close revenue versus what channels assist the journey."
          description="Last-touch attribution offers clarity on revenue ownership, while blended performance reminds the business not to starve upper-funnel channels that create demand upstream."
        />
      </Reveal>

      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">ROAS Comparison</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Attributed vs. blended ROAS</h3>
              </div>
            </div>

            <div className="mt-8 h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attributionComparison}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="channel" stroke="#64748b" tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '18px',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      background: 'rgba(15, 23, 42, 0.92)',
                      color: '#fff',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="attributedRoas" fill="#2563eb" radius={[10, 10, 0, 0]} name="Attributed ROAS" />
                  <Bar dataKey="blendedRoas" fill="#0f766e" radius={[10, 10, 0, 0]} name="Blended ROAS" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Interpretation Layer</p>
            <div className="mt-6 space-y-4">
              {attributionComparison.map((item) => (
                <div key={item.channel} className="rounded-[22px] border border-border/60 bg-surface/60 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-foreground">{item.channel}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {item.attributedRoas.toFixed(2)}x vs. {item.blendedRoas.toFixed(2)}x
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.interpretation}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {funnelStages.map((stage, index) => {
            const Icon = funnelIcons[index % funnelIcons.length];
            return (
              <div key={stage.label} className="glass-panel p-6">
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{stage.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{stage.value}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{stage.note}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  </section>
);
