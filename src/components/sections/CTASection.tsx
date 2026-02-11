"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";

export default function CTASection() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("falcaocruz.tech@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estou sempre aberto a novos desafios e oportunidades interessantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8"
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
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
