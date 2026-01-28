"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react"
import { useScrollToSection } from "../../hooks/useScroll"

export default function HeroSection() {
  const scrollToSection = useScrollToSection()

  return (
    <section id="inicio" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 space-grid opacity-30" />
      
      {/* Radial Glow Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary">Disponivel para novos projetos</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in">
              <span className="text-foreground">Gabriel Falcao</span>
              <span className="block text-primary text-glow mt-2">da Cruz</span>
            </h1>
            
            {/* Subtitle with Space Theme */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Desenvolvedor Full Stack & Cloud Architect
            </p>
            <p className="text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto flex items-center justify-center gap-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Explorando a fronteira entre o codigo e a nuvem</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan group transition-all duration-300"
              onClick={() => scrollToSection("projetos")}
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Ver Missoes
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 bg-transparent border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300" 
              asChild
            >
              <a href="mailto:gabrielfalcaocruz123@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Entrar em Contato
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in">
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full w-14 h-14 p-0 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:glow-cyan-sm transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-full w-14 h-14 p-0 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:glow-cyan-sm transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden lg:block">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
