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
import TechnologiesSection from "../src/components/sections/TechnologiesSection";
import SkillsSection from "../src/components/sections/SkillsSection";
import CTASection from "../src/components/sections/CTASection";
import Footer from "../src/components/layout/Footer";

// Space Components
import StarField from "../components/space/StarField";

// Hooks
import { useActiveSection } from "../src/hooks/useScroll";
import ScrollToTop from "../src/components/ScrollToTop";

export default function Page() {
  const activeSection = useActiveSection();

  return (
    <>
      {/* Deep Space Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1424] to-[#0a0f1a] -z-20" />
      
      {/* Nebula Effects */}
      <div className="fixed inset-0 nebula-bg -z-10 pointer-events-none" />
      
      {/* Star Field Animation */}
      <StarField />
      
      {/* Main Content */}
      <div className="relative min-h-screen">
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
      </div>
      <ScrollToTop />
    </>
  );
}
