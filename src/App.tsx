import { Suspense, lazy, useEffect, useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionFallback } from './components/SectionFallback';
import { useTheme } from './hooks/useTheme';

const AboutSection = lazy(() => import('./sections/AboutSection').then((module) => ({ default: module.AboutSection })));
const OverviewSection = lazy(() =>
  import('./sections/OverviewSection').then((module) => ({ default: module.OverviewSection })),
);
const DataArchitectureSection = lazy(() =>
  import('./sections/DataArchitectureSection').then((module) => ({ default: module.DataArchitectureSection })),
);
const KpiAnalysisSection = lazy(() =>
  import('./sections/KpiAnalysisSection').then((module) => ({ default: module.KpiAnalysisSection })),
);
const AttributionSection = lazy(() =>
  import('./sections/AttributionSection').then((module) => ({ default: module.AttributionSection })),
);
const RegressionSection = lazy(() =>
  import('./sections/RegressionSection').then((module) => ({ default: module.RegressionSection })),
);
const BudgetSection = lazy(() =>
  import('./sections/BudgetSection').then((module) => ({ default: module.BudgetSection })),
);
const DashboardGallerySection = lazy(() =>
  import('./sections/DashboardGallerySection').then((module) => ({ default: module.DashboardGallerySection })),
);
const RecommendationsSection = lazy(() =>
  import('./sections/RecommendationsSection').then((module) => ({ default: module.RecommendationsSection })),
);
const RecruiterCTASection = lazy(() =>
  import('./sections/RecruiterCTASection').then((module) => ({ default: module.RecruiterCTASection })),
);
const Footer = lazy(() => import('./sections/Footer').then((module) => ({ default: module.Footer })));

function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ScrollProgress />
      <div className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_45%)]" />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionFallback label="Loading profile summary" />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading project overview" />}>
            <OverviewSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading architecture narrative" />}>
            <DataArchitectureSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading KPI dashboard" />}>
            <KpiAnalysisSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading attribution analysis" />}>
            <AttributionSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading regression insights" />}>
            <RegressionSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading budget strategy" />}>
            <BudgetSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading dashboard gallery" />}>
            <DashboardGallerySection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading recommendations" />}>
            <RecommendationsSection />
          </Suspense>
          <Suspense fallback={<SectionFallback label="Loading contact section" />}>
            <RecruiterCTASection />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback label="Loading footer" compact />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
