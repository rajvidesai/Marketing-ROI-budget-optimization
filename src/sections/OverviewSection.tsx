import { ArrowRight, CircleHelp, Flag, Target, TrendingUp } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { northStarMetric, overviewCards, stakeholderQuestions } from '../data/portfolioData';

const overviewIcons = [Flag, Target, CircleHelp, TrendingUp];

export const OverviewSection = () => (
  <section id="project-overview" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Project Overview"
          title="A marketing investment problem framed like a real consulting case, not a classroom exercise."
          description="The site tells the story in the same sequence an executive team would consume it: business problem, measurement logic, analytical evidence, and recommendation."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((card, index) => {
          const Icon = overviewIcons[index % overviewIcons.length];
          return (
            <Reveal key={card.title} delay={index * 0.05}>
              <div className="glass-panel h-full p-6">
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <p className="mt-5 text-sm font-semibold text-foreground">{card.stat}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-panel h-full p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">North Star Metric</p>
            <h3 className="mt-3 text-3xl font-bold text-foreground">{northStarMetric.title}</h3>
            <p className="mt-4 text-base leading-8 text-muted">{northStarMetric.description}</p>

            <div className="mt-8 rounded-[24px] border border-success/20 bg-success/10 p-5">
              <p className="text-sm font-semibold text-success">Business impact emphasis</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                Leadership does not need another descriptive dashboard. It needs a budget view that quantifies how much
                revenue the next dollar is likely to create and where current allocation is inefficient.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-panel p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Stakeholder Questions</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">What decision-makers needed answered</h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {stakeholderQuestions.map((question, index) => (
                <div key={question} className="flex gap-4 rounded-[22px] border border-border/60 bg-surface/60 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm leading-7 text-muted">{question}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      <span>Decision angle</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
