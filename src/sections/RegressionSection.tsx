import { BarChart, Bar, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Activity, CalendarRange, FlaskConical, Sigma } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { regressionFeatures, regressionImpacts, regressionMetrics } from '../data/portfolioData';

const impactColors = ['#0f766e', '#2563eb', '#16a34a', '#ea580c'];

export const RegressionSection = () => (
  <section id="regression-modeling" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Regression Modeling"
          title="A forward-looking model to estimate marginal revenue response, not just historical reporting."
          description="The regression layer complements attribution by estimating how daily revenue responds to channel spend after accounting for promotional periods and seasonality."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {regressionMetrics.map((metric, index) => {
          const icons = [Sigma, Activity, FlaskConical, CalendarRange];
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={metric.label} delay={index * 0.05}>
              <div className="glass-panel p-6">
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{metric.label}</p>
                <p className="mt-2 text-3xl font-extrabold text-foreground">{metric.value}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel h-full p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Features Used</p>
            <h3 className="mt-3 text-2xl font-bold text-foreground">Model setup and controls</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {regressionFeatures.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-border/70 bg-surface-strong/80 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[24px] border border-warning/20 bg-warning/10 p-5">
              <p className="text-sm font-semibold text-warning">Interpretation summary</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                The model shows diminishing returns across channels but materially stronger elasticity for Email and
                Search. Paid Social appears saturated relative to its budget share, which supports a reallocation
                recommendation rather than a full channel cut.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Feature Impact</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Relative modeled elasticity</h3>
              </div>
            </div>
            <div className="mt-8 h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regressionImpacts} layout="vertical" margin={{ left: 24 }}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" horizontal={false} />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis
                    dataKey="feature"
                    type="category"
                    stroke="#64748b"
                    tickLine={false}
                    axisLine={false}
                    width={110}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '18px',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      background: 'rgba(15, 23, 42, 0.92)',
                      color: '#fff',
                    }}
                  />
                  <Bar dataKey="coefficient" radius={[0, 10, 10, 0]}>
                    {regressionImpacts.map((impact, index) => (
                      <Cell key={impact.feature} fill={impactColors[index % impactColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid gap-5 lg:grid-cols-4">
          {regressionImpacts.map((impact) => (
            <div key={impact.feature} className="glass-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{impact.feature}</p>
              <p className="mt-3 text-3xl font-extrabold text-foreground">{impact.coefficient.toFixed(2)}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{impact.narrative}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
