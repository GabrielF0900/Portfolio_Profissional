import * as React from "react";
("use client");

// Layout Components
import Navigation from "../layout/Navigation";

// Section Components
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import CertificationsSection from "../sections/CertificationsSection";
import ProjectsSection from "../sections/ProjectsSection";
import TechnologiesSection from "../sections/TechnologiesSection";
import SkillsSection from "../sections/SkillsSection";
import CTASection from "../sections/CTASection";
import Footer from "../layout/Footer";
import LastUpdateWidget from "../LastUpdateWidget";

// Hooks
import { useActiveSection } from "../../hooks/useScroll";

export default function Portfolio() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <TechnologiesSection />
      <SkillsSection />
      <CTASection />
      <Footer />
      <LastUpdateWidget />
    </div>
  );
}
