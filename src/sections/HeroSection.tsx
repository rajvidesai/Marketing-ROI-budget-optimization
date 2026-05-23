import { ArrowDownCircle, Download, Mail, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroMetrics, siteConfig } from '../data/portfolioData';
import { KPIStatCard } from '../components/KPIStatCard';
import { Reveal } from '../components/Reveal';

const heroIcons = [TrendingUp, Sparkles, ArrowDownCircle, Mail];

export const HeroSection = () => (
  <section id="hero" className="relative overflow-hidden section-space">
    <div className="container-shell">
      <div className="glass-panel overflow-hidden bg-hero-glow p-6 sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Executive Case Study</span>
              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-[4.3rem]">
                {siteConfig.roleHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">{siteConfig.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#project-overview"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary"
                >
                  View Project
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="#recruiter-cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-6 py-3.5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </div>

              <div className="mt-8 rounded-[24px] border border-border/60 bg-surface/70 p-5">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
                  <span className="rounded-full bg-success/10 px-3 py-1 text-success">Attribution + Regression</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Power BI Storytelling</span>
                  <span className="rounded-full bg-warning/10 px-3 py-1 text-warning">Budget Reallocation Strategy</span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                  This site is designed to help recruiters understand my analytical thinking quickly: the commercial
                  problem, the data model, the KPI logic, the modeling choices, and the business recommendation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="glass-panel relative overflow-hidden p-6">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-secondary/15 blur-3xl" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">North Star Metric</p>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    Incremental Revenue per $ Spent
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                    A capital allocation framework that separates historical revenue ownership from true spend response.
                  </p>
                  <div className="mt-6 flex items-end gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Dataset window</p>
                      <p className="mt-2 text-xl font-bold text-foreground">Jul 2025 - Jan 2026</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Modeled budget</p>
                      <p className="mt-2 text-xl font-bold text-foreground">$10.92M</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {heroMetrics.map((metric, index) => {
                  const Icon = heroIcons[index % heroIcons.length];
                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.55 }}
                    >
                      <KPIStatCard icon={Icon} value={metric.value} label={metric.label} detail={metric.detail} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
