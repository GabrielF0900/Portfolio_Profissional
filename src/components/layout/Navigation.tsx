"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X, Download, Orbit, Sparkles } from "lucide-react";
import { navigationItems } from "../../constants/navigation";
import { useScrollToSection } from "../../hooks/useScroll";
import { NavigationItem } from "../../types";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/curriculo-gabriel-falcao.pdf");
      if (!response.ok) {
        throw new Error("Erro ao baixar o curriculo");
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "curriculo-gabriel-falcao.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erro ao baixar curriculo:", error);
      alert("Erro ao baixar o curriculo. Tente novamente.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Space Icon */}
          <button
            onClick={() => handleSectionClick("inicio")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Orbit className="w-6 h-6 text-primary group-hover:animate-spin-slow transition-all" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              Gabriel Falcao
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item: NavigationItem) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 rounded-lg border border-primary/30 glow-cyan-sm" />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              size="sm"
              onClick={handleDownloadCV}
              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30 hover:glow-cyan transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar CV
            </Button>
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item: NavigationItem) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-4 pt-4 border-t border-border/50 mt-2">
                <Button
                  size="sm"
                  onClick={handleDownloadCV}
                  className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar CV
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
                  <a
                    href="https://www.linkedin.com/in/gabrielfalcaodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild>
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
          </div>
        )}
      </div>
    </nav>
  );
}
