"use client";

import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { event } from "@/lib/gtag";
import { useScrollToSection } from "@/hooks/useScroll";

type HeroActionsProps = {
  actionsClassName: string;
  buttonClassName: string;
  primaryClassName: string;
  secondaryClassName: string;
  socialsClassName: string;
};

export default function HeroActions({
  actionsClassName,
  buttonClassName,
  primaryClassName,
  secondaryClassName,
  socialsClassName,
}: HeroActionsProps) {
  const scrollToSection = useScrollToSection();

  return (
    <>
      <div className={actionsClassName}>
        <button
          type="button"
          onClick={() => scrollToSection("projetos")}
          className={`${buttonClassName} ${primaryClassName}`}
        >
          <span>Ver projetos</span>
          <ArrowRight aria-hidden="true" />
        </button>

        <a
          href="/CV_GabrielFalcaoJava.pdf"
          download="CV_GabrielFalcaoJava.pdf"
          onClick={() => event("download_cv")}
          className={`${buttonClassName} ${secondaryClassName}`}
        >
          <span>Baixar CV</span>
          <Download aria-hidden="true" />
        </a>
      </div>

      <div className={socialsClassName}>
        <a
          href="https://github.com/GabrielF0900"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => event("clique_link_externo", { destino: "github" })}
        >
          <Github aria-hidden="true" />
          <span>/GabrielF0900</span>
        </a>

        <a
          href="https://www.linkedin.com/in/gabrielfalcaodev/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => event("clique_link_externo", { destino: "linkedin" })}
        >
          <Linkedin aria-hidden="true" />
          <span>/in/gabrielfalcaodev</span>
        </a>
      </div>
    </>
  );
}
