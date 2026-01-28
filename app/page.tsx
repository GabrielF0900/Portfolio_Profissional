"use client";
import * as React from "react";

// Layout Components
import Navigation from "../src/components/layout/Navigation";

// Section Components
import HeroSection from "../src/components/sections/HeroSection";
import AboutSection from "../src/components/sections/AboutSection";
import ExperienceSection from "../src/components/sections/ExperienceSection";
import CertificationsSection from "../src/components/sections/CertificationsSection";
import ProjectsSection from "../src/components/sections/ProjectsSection";
import TechRadarSection from "../src/components/sections/TechRadarSection";
import SkillsSection from "../src/components/sections/SkillsSection";
import CTASection from "../src/components/sections/CTASection";
import Footer from "../src/components/layout/Footer";

// Space Components
import NebulaBackground from "../components/space/NebulaBackground";

// Hooks
import { useActiveSection } from "../src/hooks/useScroll";
import ScrollToTop from "../src/components/ScrollToTop";

export default function Page() {
  const activeSection = useActiveSection();

  return (
    <>
      {/* Deep Space Nebula Background */}
      <NebulaBackground />
      
      {/* Scan Lines Overlay */}
      <div className="fixed inset-0 scan-lines pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative min-h-screen">
        <Navigation activeSection={activeSection} />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <TechRadarSection />
        <SkillsSection />
        <CTASection />
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
