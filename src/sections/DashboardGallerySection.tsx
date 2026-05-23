import { DashboardShotCard } from '../components/DashboardShotCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { dashboardGallery } from '../data/portfolioData';

export const DashboardGallerySection = () => (
  <section id="dashboard-gallery" className="section-space">
    <div className="container-shell space-y-12">
      <Reveal>
        <SectionHeading
          eyebrow="Dashboard Gallery"
          title="Power BI dashboard views prepared for real screenshot exports."
          description="The gallery now points to concrete Power BI export filenames. If a screenshot is present, the card shows it; if not, the layout falls back to the polished mock frame automatically."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {dashboardGallery.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.05}>
            <DashboardShotCard
              title={card.title}
              description={card.description}
              tag={card.tag}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              href={card.href}
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="glass-panel p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Customization Note</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-muted">
            Export Power BI screenshots into `public/dashboard/` using these filenames:
            `executive-summary.png`, `channel-deep-dive.png`, and `modeling-lens.png`. The gallery will automatically
            switch from the mock frame to the real screenshot without any extra code changes.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
