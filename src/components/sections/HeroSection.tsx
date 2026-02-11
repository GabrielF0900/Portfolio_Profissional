"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ArrowRight, Github, Linkedin, Mail, Zap, Copy, Check } from "lucide-react"
import { useScrollToSection } from "../../hooks/useScroll"

export default function HeroSection() {
  const scrollToSection = useScrollToSection()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("falcaocruz.tech@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Disponível para novos projetos
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Gabriel Falcão
              <span className="block text-primary">da Cruz</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais e soluções inovadoras.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("projetos")}>
              Ver Projetos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 bg-transparent"
              onClick={() => setIsContactOpen(true)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Entrar em Contato
            </Button>

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogContent className="max-w-xs w-80">
                <DialogHeader>
                  <DialogTitle className="text-center">Entre em Contato</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-4 py-4">
                  <Mail className="w-12 h-12 text-primary" />
                  <p className="text-sm text-muted-foreground">Envie um email para:</p>
                  <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
                    <span className="font-medium">falcaocruz.tech@gmail.com</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      className="h-8 w-8 p-0"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <Button asChild className="mt-2">
                    <a href="mailto:falcaocruz.tech@gmail.com">
                      Abrir Cliente de Email
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
