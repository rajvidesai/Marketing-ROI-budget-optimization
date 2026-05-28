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
import { AlertTriangle, ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { allocationComparison, scenarioPlanning } from '../data/portfolioData';

export const BudgetSection = () => (
  <section id="budget-strategy" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Budget Reallocation Strategy"
          title="A consulting-style recommendation that moves money with discipline, not guesswork."
          description="The recommendation is grounded first in verified descriptive performance, then pressure-tested with the regression diagnostic and practical channel-risk considerations."
        />
      </Reveal>

      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Allocation Comparison</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Current vs. proposed mix</h3>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                Fixed monthly budget
              </span>
            </div>

            <div className="mt-8 h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={allocationComparison}>
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
                  <Bar dataKey="current" fill="#94a3b8" radius={[10, 10, 0, 0]} name="Current %" />
                  <Bar dataKey="proposed" fill="#2563eb" radius={[10, 10, 0, 0]} name="Recommended %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            <div className="glass-panel p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Executive Recommendation</p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">Shift capital from saturation into elasticity</h3>
                </div>
                <BriefcaseBusiness className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                Reduce Paid Social from 38.4% to 20.0%, increase Email from 5.1% to 15.0%, and increase Search from
                46.1% to 55.0%. Keep Referral and Organic broadly stable while monitoring spillover effects on funnel
                quality.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-success/20 bg-success/10 p-4">
                  <p className="text-sm font-semibold text-success">Measured opportunity</p>
                  <p className="mt-2 text-3xl font-extrabold text-foreground">-20.59 pts</p>
                </div>
                <div className="rounded-[22px] border border-primary/20 bg-primary/10 p-4">
                  <p className="text-sm font-semibold text-primary">Strategic rationale</p>
                  <p className="mt-2 text-sm leading-7 text-muted">Shift testing attention toward channels with stronger observed efficiency and more stable capture behavior.</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Assumptions & Risks</p>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">What leaders should watch after launch</h3>
                </div>
                <AlertTriangle className="h-6 w-6 text-warning" />
              </div>
              <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                <p>Scale Email in measured increments to avoid fatigue and rising unsubscribes.</p>
                <p>Track whether reduced Paid Social volume weakens future Search and Email performance.</p>
                <p>Re-check coefficient stability monthly as seasonality, promotion mix, and creative quality evolve.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {scenarioPlanning.map((scenario) => (
            <div key={scenario.name} className="glass-panel p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">{scenario.name}</p>
                  <p className="mt-3 text-3xl font-extrabold text-foreground">{scenario.uplift}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{scenario.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
