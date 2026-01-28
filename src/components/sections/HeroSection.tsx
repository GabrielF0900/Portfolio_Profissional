"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Terminal, Zap, Radio, Cpu } from "lucide-react"
import { useScrollToSection } from "../../hooks/useScroll"
import { useEffect, useState, useRef } from "react"

// Professional subtle glitch effect
function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [glitchState, setGlitchState] = useState<"idle" | "glitch1" | "glitch2">("idle")
  
  useEffect(() => {
    const triggerGlitch = () => {
      const sequence = async () => {
        setGlitchState("glitch1")
        await new Promise(r => setTimeout(r, 50))
        setGlitchState("glitch2")
        await new Promise(r => setTimeout(r, 30))
        setGlitchState("glitch1")
        await new Promise(r => setTimeout(r, 40))
        setGlitchState("idle")
        await new Promise(r => setTimeout(r, 80))
        setGlitchState("glitch2")
        await new Promise(r => setTimeout(r, 30))
        setGlitchState("idle")
      }
      sequence()
    }
    
    const interval = setInterval(triggerGlitch, 5000)
    // Initial glitch after mount
    setTimeout(triggerGlitch, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text */}
      <span className="relative z-10">{text}</span>
      
      {/* Cyan layer */}
      <span 
        className={`absolute inset-0 text-cyan-400 transition-all duration-75 ${
          glitchState === "glitch1" 
            ? "opacity-80 translate-x-[2px] translate-y-[-1px]" 
            : glitchState === "glitch2"
            ? "opacity-60 translate-x-[-1px] translate-y-[1px]"
            : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {text}
      </span>
      
      {/* Blue layer */}
      <span 
        className={`absolute inset-0 text-sky-500 transition-all duration-75 ${
          glitchState === "glitch1" 
            ? "opacity-60 translate-x-[-2px] translate-y-[1px]" 
            : glitchState === "glitch2"
            ? "opacity-40 translate-x-[1px] translate-y-[-1px]"
            : "opacity-0"
        }`}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  )
}

// Typewriter effect for terminal text
function TypewriterText({ text, delay = 40, onComplete }: { text: string; delay?: number; onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    } else {
      onComplete?.()
      // Keep cursor blinking after completion
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }
  }, [currentIndex, text, delay, onComplete])

  return (
    <span className="font-mono">
      {displayedText}
      <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
    </span>
  )
}

// Animated data stream decoration
function DataStream({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    canvas.width = 100
    canvas.height = 200
    
    const chars = "01アイウエオカキクケコ"
    const drops: number[] = []
    const fontSize = 10
    const columns = canvas.width / fontSize
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
    
    const draw = () => {
      ctx.fillStyle = "rgba(5, 10, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = "rgba(34, 211, 238, 0.4)"
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i] += 0.5
      }
    }
    
    const interval = setInterval(draw, 60)
    return () => clearInterval(interval)
  }, [])
  
  return <canvas ref={canvasRef} className={`opacity-30 ${className}`} />
}

export default function HeroSection() {
  const scrollToSection = useScrollToSection()
  const [mounted, setMounted] = useState(false)
  const [systemReady, setSystemReady] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden pt-16 min-h-screen flex items-center">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Animated hex grid overlay */}
      <div className="absolute inset-0 hex-grid opacity-10 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Data streams on sides */}
      <div className="absolute left-0 top-0 h-full opacity-50 pointer-events-none hidden lg:block">
        <DataStream />
      </div>
      <div className="absolute right-0 top-0 h-full opacity-50 pointer-events-none hidden lg:block">
        <DataStream />
      </div>
      
      {/* Corner Decorations - FUI style */}
      <div className="absolute top-20 left-4 md:left-8">
        <div className="w-24 h-24 md:w-32 md:h-32 border-l border-t border-primary/30" />
        <div className="absolute top-0 left-0 w-3 h-3 bg-primary/50" />
      </div>
      <div className="absolute bottom-20 right-4 md:right-8">
        <div className="w-24 h-24 md:w-32 md:h-32 border-r border-b border-primary/30" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary/50" />
      </div>
      
      {/* Horizontal scan lines */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-3 cyber-glass px-5 py-2.5 rounded-full text-sm font-medium mb-10 animate-fade-in fui-corners">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider">
                SYS.STATUS: ONLINE
              </span>
              <span className="text-primary/30">|</span>
              <Radio className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-primary font-mono text-xs">
                DISPONIVEL PARA PROJETOS
              </span>
            </div>
            
            {/* Terminal Header */}
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {mounted && (
                  <TypewriterText 
                    text="// CARREGANDO PERFIL..." 
                    delay={35} 
                    onComplete={() => setSystemReady(true)}
                  />
                )}
              </span>
              <Cpu className="w-5 h-5 text-primary animate-spin-slow" />
            </div>
            
            {/* Main Title - Futuristic but Readable */}
            <div className={`transition-all duration-700 ${systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-black tracking-tight mb-6">
                <span className="text-foreground block leading-none">
                  GABRIEL
                </span>
                <span className="text-primary text-neon block mt-2 leading-none">
                  <GlitchText text="FALCAO" />
                </span>
              </h1>
            </div>
            
            {/* Subtitle with Professional Glitch Effect */}
            <div className={`mb-6 transition-all duration-700 delay-100 ${systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Zap className="w-5 h-5 text-primary hidden sm:block" />
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-space tracking-wide">
                  <GlitchText 
                    text="Cloud Architect & Full Stack Developer" 
                    className="text-foreground/90"
                  />
                </p>
                <Zap className="w-5 h-5 text-primary hidden sm:block" />
              </div>
            </div>
            
            {/* Tagline Panel */}
            <div className={`transition-all duration-700 delay-200 ${systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="fui-panel inline-block px-6 py-4 rounded-lg mb-10 fui-corners">
                <p className="text-sm md:text-base text-muted-foreground font-mono">
                  <span className="text-primary mr-2">{'>'}</span>
                  <span className="text-foreground/80">Construindo infraestrutura escalavel na nuvem</span>
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground/60 font-mono">
                  <span>AWS</span>
                  <span className="text-primary/40">|</span>
                  <span>Azure</span>
                  <span className="text-primary/40">|</span>
                  <span>GCP</span>
                  <span className="text-primary/40">|</span>
                  <span>Kubernetes</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              size="lg" 
              className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow group transition-all duration-300 font-mono uppercase tracking-wider relative overflow-hidden"
              onClick={() => scrollToSection("projetos")}
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-2">[</span>
                Acessar Missoes
                <span className="ml-2">]</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 bg-transparent border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 font-mono uppercase tracking-wider group" 
              asChild
            >
              <a href="mailto:gabrielfalcaocruz123@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Iniciar Contato
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-4 transition-all duration-700 delay-400 ${systemReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-lg w-14 h-14 p-0 text-muted-foreground hover:text-primary cyber-glass hover:neon-glow-sm transition-all duration-300 group"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="rounded-lg w-14 h-14 p-0 text-muted-foreground hover:text-primary cyber-glass hover:neon-glow-sm transition-all duration-300 group"
              asChild
            >
              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 hidden lg:block ${systemReady ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float">
              <span className="text-xs font-mono uppercase tracking-widest text-primary/60">SCROLL.DOWN</span>
              <div className="w-6 h-10 border border-primary/30 rounded-full p-1 cyber-glass">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
