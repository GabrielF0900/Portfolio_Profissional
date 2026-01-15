"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
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
        throw new Error("Erro ao baixar o currículo");
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
      console.error("Erro ao baixar currículo:", error);
      alert("Erro ao baixar o currículo. Tente novamente.");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick("inicio")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Gabriel Falcão
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item: NavigationItem) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCV}
              className="text-slate-600 dark:text-white border-slate-300 dark:border-slate-600 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Baixar CV
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-white hover:text-primary dark:hover:text-slate-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-white hover:text-primary dark:hover:text-slate-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item: NavigationItem) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-3 py-2 rounded-md text-left text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-2 px-3 pt-2 border-t border-slate-200 dark:border-slate-700">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadCV}
                  className="text-slate-600 dark:text-white border-slate-300 dark:border-slate-600 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar CV
                </Button>
                <ThemeToggle />
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/gabrielfalcaodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white hover:text-primary dark:hover:text-slate-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/GabrielF0900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-white hover:text-primary dark:hover:text-slate-200"
                  >
                    <Github className="w-4 h-4" />
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
