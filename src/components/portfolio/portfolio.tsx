"use client";

// Layout Components
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

// Section Components
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import CertificationsSection from "../sections/CertificationsSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import SkillsSection from "../sections/SkillsSection";
import CTASection from "../sections/CTASection";

// Widgets & Global Components
import ScrollToTop from "../ScrollToTop";

// Hooks
import { useActiveSection } from "../../hooks/useScroll";

export default function Portfolio() {
  const activeSection = useActiveSection();

  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden bg-[var(--surface-base)]">
        {/* 1. Navegação fixa no topo */}
        <Navigation activeSection={activeSection} />

        {/* 2. Conteúdo Principal */}
        <main className="w-full max-w-full overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <CertificationsSection />
          <ProjectsSection />
          <TechnologiesSection />
          <SkillsSection />
          <CTASection />
        </main>

        {/* 3. Rodapé */}
        <Footer />
      </div>
      {/* ScrollToTop - Canto Inferior Direito */}
      <ScrollToTop />
    </>
  );
}
