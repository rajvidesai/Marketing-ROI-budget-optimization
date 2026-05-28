import { useState } from 'react';
import { ArrowRight, ChevronDown, CircleHelp, Flag, Target, TrendingUp } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { northStarMetric, overviewCards, stakeholderQuestions } from '../data/portfolioData';

const overviewIcons = [Flag, Target, CircleHelp, TrendingUp];

export const OverviewSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section id="project-overview" className="section-space">
      <div className="container-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Project Overview"
            title="A marketing investment case structured the way an executive team would want to review it."
            description="The story moves from business problem to measurement logic to evidence and recommendation so a recruiter can quickly judge both analytical depth and business judgment."
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
                  Leadership does not need another descriptive dashboard. It needs a view of where the current budget is
                  inefficient, which channels merit protection, and what should be tested next.
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
                {stakeholderQuestions.map((item, index) => {
                  const isOpen = openQuestion === index;

                  return (
                    <div key={item.question} className="rounded-[22px] border border-border/60 bg-surface/60 p-5">
                      <div className="flex gap-4">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm leading-7 text-muted">{item.question}</p>
                          <button
                            type="button"
                            onClick={() => setOpenQuestion(isOpen ? null : index)}
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-foreground"
                            aria-expanded={isOpen}
                          >
                            <span>Decision angle</span>
                            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                          </button>

                          {isOpen && (
                            <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/8 p-4">
                              <p className="text-sm leading-7 text-muted">{item.decisionAngle}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
