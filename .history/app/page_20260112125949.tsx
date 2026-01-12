

"use client"
import * as React from "react"

// Layout Components
import Navigation from "../src/components/layout/Navigation"

// Section Components  
import HeroSection from "../src/components/sections/HeroSection"
import AboutSection from "../src/components/sections/AboutSection"
import ExperienceSection from "../src/components/sections/ExperienceSection"
import CertificationsSection from "../src/components/sections/CertificationsSection"
import ProjectsSection from "../src/components/sections/ProjectsSection"
import TechnologiesSection from "../src/components/sections/TechnologiesSection"
import SkillsSection from "../src/components/sections/SkillsSection"
import CTASection from "../src/components/sections/CTASection"
import Footer from "../src/components/layout/Footer"

// Hooks
import { useActiveSection } from "../src/hooks/useScroll"

export default function Page() {
  const activeSection = useActiveSection()

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
    </div>
  )
}
