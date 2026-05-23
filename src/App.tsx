import { useEffect, useState } from 'react';
import { Footer } from './sections/Footer';
import { AboutSection } from './sections/AboutSection';
import { AttributionSection } from './sections/AttributionSection';
import { BudgetSection } from './sections/BudgetSection';
import { DashboardGallerySection } from './sections/DashboardGallerySection';
import { DataArchitectureSection } from './sections/DataArchitectureSection';
import { HeroSection } from './sections/HeroSection';
import { KpiAnalysisSection } from './sections/KpiAnalysisSection';
import { OverviewSection } from './sections/OverviewSection';
import { RecruiterCTASection } from './sections/RecruiterCTASection';
import { RecommendationsSection } from './sections/RecommendationsSection';
import { RegressionSection } from './sections/RegressionSection';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { useTheme } from './hooks/useTheme';

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
          <AboutSection />
          <OverviewSection />
          <DataArchitectureSection />
          <KpiAnalysisSection />
          <AttributionSection />
          <RegressionSection />
          <BudgetSection />
          <DashboardGallerySection />
          <RecommendationsSection />
          <RecruiterCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
