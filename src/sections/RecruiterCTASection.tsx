import { ArrowUpRight, Download, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { siteConfig } from '../data/portfolioData';

export const RecruiterCTASection = () => (
  <section id="recruiter-cta" className="section-space">
    <div className="container-shell">
      <Reveal>
        <div className="glass-panel overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Let's Connect</span>
              <h2 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                Hiring for business analytics, marketing strategy, or BI storytelling?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                I built this portfolio to make my thinking legible fast: how I frame the commercial problem, structure
                the data, evaluate tradeoffs, and communicate recommendations to stakeholders.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-primary"
                >
                  <Send className="h-4 w-4" />
                  Email Me
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-surface/80 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/25 bg-[#0A66C2]/10 px-4 py-2 text-sm font-semibold text-[#0A66C2] transition hover:-translate-y-0.5 hover:bg-[#0A66C2] hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-500/20 bg-slate-900/5 px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-foreground hover:text-background dark:bg-slate-100/5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-[24px] border border-border/60 bg-surface/70 p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
                      <p className="mt-1 text-base font-bold text-foreground">{siteConfig.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-[#0A66C2]/20 bg-[linear-gradient(135deg,rgba(10,102,194,0.12),rgba(10,102,194,0.04))] p-5 transition hover:-translate-y-1 hover:border-[#0A66C2]/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">LinkedIn</p>
                      <p className="mt-1 text-base font-bold text-foreground">Professional profile</p>
                      <p className="mt-1 text-sm text-muted">{siteConfig.linkedInDisplay}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#0A66C2]" />
                </div>
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-[24px] border border-slate-500/20 bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(15,23,42,0.02))] p-5 transition hover:-translate-y-1 hover:border-primary/40 dark:bg-[linear-gradient(135deg,rgba(148,163,184,0.08),rgba(148,163,184,0.02))]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-foreground" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">GitHub</p>
                      <p className="mt-1 text-base font-bold text-foreground">Project repository and code samples</p>
                      <p className="mt-1 text-sm text-muted">{siteConfig.githubDisplay}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="rounded-[24px] border border-border/60 bg-surface/70 p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Resume</p>
                      <p className="mt-1 text-base font-bold text-foreground">Download PDF</p>
                      <p className="mt-1 text-sm text-muted">Updated portfolio resume for recruiter sharing.</p>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-primary" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
