import {
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BarChart3, CircleDollarSign, TrendingUp, Users2 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { channelPerformance, monthlyTrend } from '../data/portfolioData';

const colors = ['#2563eb', '#ea580c', '#0f766e', '#64748b', '#16a34a'];

const metricCards = [
  {
    icon: CircleDollarSign,
    label: 'Best Attributed ROAS',
    value: '12.68x',
    note: 'Organic produced exceptional efficiency with minimal direct spend.',
  },
  {
    icon: TrendingUp,
    label: 'Strongest Revenue Driver',
    value: '$44.21M',
    note: 'Search generated the largest revenue footprint across the analysis window.',
  },
  {
    icon: Users2,
    label: 'Peak Conversion Rate',
    value: '4.31%',
    note: 'Email delivered the strongest conversion behavior among paid channels.',
  },
  {
    icon: BarChart3,
    label: 'Largest Spend Risk',
    value: '0.64x',
    note: 'Paid Social absorbed heavy budget while underperforming on attributed return.',
  },
];

export const KpiAnalysisSection = () => (
  <section id="kpi-analysis" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="KPI & Performance Analysis"
          title="Interactive dashboard-style views that surface efficiency, trends, and where spend is under pressure."
          description="These visuals are styled like an executive scorecard: channel performance, monthly revenue and spend movement, and the KPI patterns that inform capital allocation."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.label} delay={index * 0.05}>
              <div className="glass-panel p-6">
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-2xl font-extrabold text-foreground">{card.value}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{card.label}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{card.note}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Revenue Trend</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Revenue vs. spend by month</h3>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Values in $M
              </span>
            </div>

            <div className="mt-8 h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrend}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '18px',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      background: 'rgba(15, 23, 42, 0.92)',
                      color: '#fff',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ fill: '#2563eb', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="spend"
                    stroke="#0f766e"
                    strokeWidth={3}
                    dot={{ fill: '#0f766e', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Channel Performance</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">Revenue and spend by channel</h3>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                Actual dataset aggregates
              </span>
            </div>

            <div className="mt-8 h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelPerformance} barGap={10}>
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
                  <Bar dataKey="spend" radius={[10, 10, 0, 0]} fill="#94a3b8" />
                  <Bar dataKey="revenue" radius={[10, 10, 0, 0]}>
                    {channelPerformance.map((entry, index) => (
                      <Cell key={entry.channel} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid gap-5 lg:grid-cols-5">
          {channelPerformance.map((channel) => (
            <div key={channel.channel} className="glass-panel p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{channel.channel}</p>
              <p className="mt-4 text-3xl font-extrabold text-foreground">{channel.roas.toFixed(2)}x</p>
              <p className="mt-2 text-sm text-muted">ROAS</p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <p>Revenue: ${channel.revenue.toFixed(2)}M</p>
                <p>Spend: ${channel.spend.toFixed(2)}M</p>
                <p>CVR: {channel.cvr.toFixed(2)}%</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
