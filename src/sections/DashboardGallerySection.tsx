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
    </div>
  </section>
);
