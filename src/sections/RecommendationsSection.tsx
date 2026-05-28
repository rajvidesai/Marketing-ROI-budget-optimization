import { CheckCircle2, Compass, LineChart, MoveRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { recommendations } from '../data/portfolioData';

const recommendationIcons = [Compass, LineChart, CheckCircle2, MoveRight];

export const RecommendationsSection = () => (
  <section id="final-recommendations" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Final Business Recommendations"
          title="An executive summary that closes the case with findings, actions, and next steps."
          description="This final section is the recruiter-friendly synthesis: what was learned, what should change, and how the business should operationalize the recommendation."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {recommendations.map((recommendation, index) => {
          const Icon = recommendationIcons[index % recommendationIcons.length];
          return (
            <Reveal key={recommendation.title} delay={index * 0.05}>
              <div className="glass-panel h-full p-7">
                <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground">{recommendation.title}</h3>
                <p className="mt-4 text-sm leading-8 text-muted">{recommendation.detail}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="glass-panel p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Key Finding</p>
              <p className="mt-3 text-2xl font-bold text-foreground">Overspend was concentrated in Paid Social.</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Measured Gap</p>
              <p className="mt-3 text-2xl font-bold text-foreground">38.44% spend share vs. 17.84% revenue share.</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Next Step</p>
              <p className="mt-3 text-2xl font-bold text-foreground">Pilot reallocation and validate performance weekly.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
