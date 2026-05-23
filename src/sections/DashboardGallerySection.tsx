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
          description="The gallery now uses the actual Power BI exports from the project. Each card opens the full screenshot and still falls back gracefully if an image is ever missing."
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
            The portfolio is currently wired to four screenshot files in `public/dashboard/`: `executive-summary.png`,
            `channel-deep-dive.png`, `modeling-lens.png`, and `segments-opportunities.png`. Replacing any of those
            files updates the gallery instantly without changing component code.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
