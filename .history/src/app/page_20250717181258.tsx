"use client"

// Layout Components
import Navigation from "../components/layout/Navigation"

// Section Components  
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import TechnologiesSection from "../components/sections/TechnologiesSection"
import SkillsSection from "../components/sections/SkillsSection"
import ContactSection from "../components/sections/ContactSection"
import CTASection from "../components/sections/CTASection"
import Footer from "../components/layout/Footer"

// Hooks
import { useActiveSection } from "../hooks/useScroll"

export default function Page() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologiesSection />
      <SkillsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  )
}
