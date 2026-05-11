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
import LastUpdateWidget from "../LastUpdateWidget";
import Notifications from "../notifications/Notifications";
import ScrollToTop from "../ScrollToTop";

// Hooks
import { useActiveSection } from "../../hooks/useScroll";

export default function Portfolio() {
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden">
      <Navigation activeSection={activeSection} />

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

      <Footer />

      {/* --- CAMADA DE OVERLAY (WIDGETS FLUTUANTES) --- */}

      {/* 1. Notificações (Journal) - Canto Superior Direito, abaixo do Menu */}
      <div className="fixed top-24 right-6 z-[9999]">
        <Notifications />
      </div>

      {/* 2. LastUpdateWidget - Canto Superior Esquerdo */}
      <div className="fixed bottom-6 left-6 z-40 opacity-90 hover:opacity-100 transition-opacity duration-300 block">
      <LastUpdateWidget />
      </div>

      {/* 3. ScrollToTop - Canto Inferior Direito (Padrão) */}
      <ScrollToTop />
    </div>
  );
}
