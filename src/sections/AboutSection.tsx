import {
  BarChart3,
  Code2,
  Database,
  LayoutDashboard,
  LineChart,
  PieChart,
  Sigma,
  Table2,
  Target,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projectTimeline, siteConfig, skills } from '../data/portfolioData';

const skillIcons: Record<string, LucideIcon> = {
  Python: Code2,
  SQL: Database,
  'Power BI': LayoutDashboard,
  Tableau: LayoutDashboard,
  Excel: Table2,
  'Regression Modeling': Sigma,
  'Marketing Analytics': Target,
  'ETL Pipelines': Workflow,
  'Data Visualization': BarChart3,
  'Attribution Modeling': PieChart,
};

const fallbackSkillIcon: LucideIcon = LineChart;

export const AboutSection = () => (
  <section id="about" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="A business analyst profile built around analytical rigor and executive communication."
          description={siteConfig.bio}
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel h-full p-8">
            <h3 className="text-2xl font-bold text-foreground">Professional Snapshot</h3>
            <p className="mt-4 text-base leading-8 text-muted">
              I focus on the part of analytics business leaders care about most: converting raw operational data into
              clear tradeoffs, quantified findings, and recommendations that can actually be acted on. This case study
              is structured so decision-makers can understand both the technical execution and the business judgment
              behind it.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">{siteConfig.shortNote}</p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Core Skills</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill.label] || fallbackSkillIcon;
                  return (
                    <span
                      key={skill.label}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-strong/80 px-4 py-2 text-sm font-semibold text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Delivery Timeline</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">How the project was executed end to end</h3>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {projectTimeline.map((entry) => (
                <div key={entry.phase} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                    {entry.phase}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{entry.period}</p>
                  <h4 className="mt-2 text-lg font-bold text-foreground">{entry.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-muted">{entry.description}</p>
                  <p className="mt-3 text-sm font-semibold text-foreground">{entry.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
