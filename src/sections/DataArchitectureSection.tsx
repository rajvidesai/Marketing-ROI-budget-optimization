import { Database, FileCog, GitBranchPlus, ShieldCheck } from 'lucide-react';
import { ExpandableCard } from '../components/ExpandableCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { dataSources, factTables, pipelineStages } from '../data/portfolioData';

const architectureStages = [
  { icon: Database, label: 'Raw Source Layer' },
  { icon: FileCog, label: 'Cleaning & Standardization' },
  { icon: GitBranchPlus, label: 'Fact Table Modeling' },
  { icon: ShieldCheck, label: 'Decision Outputs' },
];

export const DataArchitectureSection = () => (
  <section id="data-architecture" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Data Architecture & ETL"
          title="Structured data engineering that makes the analytics trustworthy."
          description="This section is intentionally designed to showcase not just charts, but the rigor behind them: raw sources, cleaning controls, fact-table design, and the analytical handoff into dashboards and models."
        />
      </Reveal>

      <Reveal>
        <div className="glass-panel p-8">
          <div className="grid gap-5 lg:grid-cols-4">
            {architectureStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="relative rounded-[24px] border border-border/60 bg-surface/70 p-5">
                  <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{stage.label}</h3>
                  {index < architectureStages.length - 1 && (
                    <div className="mt-5 hidden h-px bg-gradient-to-r from-primary/50 to-transparent lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-panel h-full p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Source Inventory</p>
            <div className="mt-6 space-y-4">
              {dataSources.map((source) => (
                <div key={source.title} className="rounded-[22px] border border-border/60 bg-surface/60 p-5">
                  <h3 className="text-base font-bold text-foreground">{source.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{source.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5">
            {pipelineStages.map((stage) => (
              <ExpandableCard
                key={stage.title}
                title={stage.title}
                summary={stage.summary}
                details={stage.details}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {factTables.map((table) => (
            <div key={table.name} className="glass-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{table.name}</p>
              <p className="mt-4 text-lg font-bold text-foreground">{table.grain}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{table.purpose}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
