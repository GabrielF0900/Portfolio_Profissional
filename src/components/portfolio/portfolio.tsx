"use client";

import * as React from "react";

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
import Notifications from "../notifications/Notifications";
import ScrollToTop from "../ScrollToTop";

// Hooks
import { useActiveSection } from "../../hooks/useScroll";

export default function Portfolio() {
  const activeSection = useActiveSection();

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden">
        {/* 1. Navegação fixa no topo */}
        <Navigation activeSection={activeSection} />

        {/* 2. Conteúdo Principal */}
        <main>
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

      {/* --- CAMADA DE OVERLAY (WIDGETS FLUTUANTES) FORA DO DIV RELATIVE --- */}

      {/* Notifications (Journal) - Posicionado no Canto Superior Direito */}
      <div
        style={{ position: "fixed", top: "80px", right: "20px", zIndex: 50 }}
      >
        <Notifications />
      </div>

      {/* ScrollToTop - Canto Inferior Direito */}
      <ScrollToTop />
    </>
  );
}
