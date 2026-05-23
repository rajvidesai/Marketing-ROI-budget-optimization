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
          title="A premium gallery layout ready for your Power BI screenshots and storytelling panels."
          description="The cards below are styled as polished placeholders so the site deploys beautifully now, while making it easy to replace each frame later with real dashboard exports."
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
            Export Power BI screenshots into `public/dashboard/`, then add each file path to the matching
            `imageSrc` field in `src/data/portfolioData.ts`. The card layout automatically switches from the mock frame
            to the real screenshot without changing any section code.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
