import { Button } from "@/components/ui/button";
import { Github, Linkedin, Clock, Orbit, Sparkles } from "lucide-react";
import { getLastUpdateFormatted } from "@/constants/lastUpdate";

export default function Footer() {
  const lastUpdate = getLastUpdateFormatted();

  return (
    <footer className="py-12 relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Last Update Widget */}
          <div className="mb-8 pb-8 border-b border-border/50">
            <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30" />
                <Clock className="relative w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">
                  Ultima Atualizacao
                </p>
                <p className="text-sm font-medium text-foreground">
                  {lastUpdate}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm text-green-400 font-medium">
                  Ativo
                </span>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Orbit className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">
                  Gabriel Falcao da Cruz
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Full Stack Developer & Cloud Architect
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/gabrielfalcaodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                asChild
              >
                <a
                  href="https://github.com/GabrielF0900"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              2025 Gabriel Falcao da Cruz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
