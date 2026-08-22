"use client";

import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationItems } from "../../constants/navigation";
import { useScrollToSection } from "../../hooks/useScroll";
import { NavigationItem } from "../../types";
import { event } from "@/lib/gtag";

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

  const handleDownloadCV = () => {
    event("download_cv");
    const link = document.createElement("a");
    link.href = "/CV_GabrielFalcaoJava.pdf";
    link.download = "CV_GabrielFalcaoJava.pdf";
    link.click();
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      <a href="#inicio" className="skip-link">
        Ir para o conteúdo
      </a>
      <nav
        data-site-nav
        aria-label="Navegação principal"
        className="site-nav fixed inset-x-0 top-0 z-40 h-20 border-b border-[var(--border-subtle)] bg-[var(--nav-background)] backdrop-blur-xl"
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 xl:px-14">
          <button
            type="button"
            onClick={() => handleSectionClick("inicio")}
            className="group flex shrink-0 items-baseline gap-2 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--surface-base)]"
            aria-label="Voltar ao início"
          >
            <span className="text-lg font-semibold tracking-[-0.035em] text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]">
              Gabriel Falcão
            </span>
            <span className="hidden text-xs font-medium text-[var(--text-muted)] sm:inline">
              Backend Java
            </span>
          </button>

          <div className="hidden min-w-0 items-center gap-1 xl:flex">
            {navigationItems.map((item: NavigationItem) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
            <button
              type="button"
              onClick={handleDownloadCV}
              className="nav-download group"
            >
              <Download aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              Baixar CV
            </button>
            <ThemeToggle />
            <a
              href="https://github.com/GabrielF0900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => event("clique_link_externo", { destino: "github" })}
              className="nav-icon-button"
              aria-label="Abrir GitHub em nova aba"
            >
              <Github aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielfalcaodev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => event("clique_link_externo", { destino: "linkedin" })}
              className="nav-icon-button"
              aria-label="Abrir LinkedIn em nova aba"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>

          <button
            type="button"
            className="nav-icon-button xl:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-navigation fixed inset-x-0 top-20 z-30 border-b border-[var(--border-subtle)] bg-[var(--surface-base)] px-5 pb-6 pt-3 shadow-2xl xl:hidden ${isMenuOpen ? "mobile-navigation-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mx-auto grid max-w-[1440px] gap-1">
          {navigationItems.map((item: NavigationItem) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              tabIndex={isMenuOpen ? 0 : -1}
              className={`mobile-nav-link ${activeSection === item.id ? "mobile-nav-link-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-3 grid grid-cols-[1fr_auto_auto_auto] gap-2 border-t border-[var(--border-subtle)] pt-4">
            <button
              type="button"
              onClick={handleDownloadCV}
              tabIndex={isMenuOpen ? 0 : -1}
              className="nav-download justify-center"
            >
              <Download aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              Baixar CV
            </button>
            <ThemeToggle />
            <a
              href="https://github.com/GabrielF0900"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMenuOpen ? 0 : -1}
              className="nav-icon-button"
              aria-label="Abrir GitHub em nova aba"
            >
              <Github aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielfalcaodev/"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isMenuOpen ? 0 : -1}
              className="nav-icon-button"
              aria-label="Abrir LinkedIn em nova aba"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
