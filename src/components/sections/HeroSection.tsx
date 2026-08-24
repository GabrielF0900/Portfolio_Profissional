"use client";

import { useRef } from "react";
import {
  ArrowRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollToSection } from "../../hooks/useScroll";
import { event } from "@/lib/gtag";
import HeroBackendOrbit from "./HeroBackendOrbit";
import styles from "./HeroSection.module.css";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const scrollToSection = useScrollToSection();

  const handleDownloadCV = () => {
    event("download_cv");

    const link = document.createElement("a");
    link.href = "/CV_GabrielFalcaoJava.pdf";
    link.download = "CV_GabrielFalcaoJava.pdf";
    link.click();
  };

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set("[data-hero-animate]", { clearProps: "all" });

        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline.from("[data-hero-animate]", {
        y: 16,
        opacity: 0,
        duration: 0.45,
        stagger: 0.06,
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      aria-labelledby="hero-title"
      className={styles.hero}
    >
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.topGrid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.copy}>
          <div data-hero-animate className={styles.heroMetaRow}>
            <div className={styles.sectionMarker}>
              <span className={styles.sectionMarkerIcon} aria-hidden="true">
                <Code2 />
              </span>
              <span className={styles.sectionMarkerNumber}>01</span>
              <span className={styles.sectionMarkerSlash} aria-hidden="true">/</span>
              <span className={styles.sectionMarkerLabel}>INÍCIO</span>
            </div>

            <div className={styles.availability}>
              <Zap aria-hidden="true" />
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          <h1 id="hero-title" className={styles.heading}>
            <span className={styles.namePrimary}>
              Gabriel Falcão
            </span>

            <span className={styles.nameSecondary}>
              da Cruz
            </span>

            <span
              className={styles.headingDivider}
              aria-hidden="true"
            />

            <span className={styles.role}>
              <strong>BACKEND</strong>
              <em>JAVA.</em>
            </span>
          </h1>

          <div
            data-hero-animate
            className={styles.stack}
            aria-label="Especialidades principais"
          >
            <span>Spring Boot</span>
            <i aria-hidden="true" />
            <span>Sistemas Distribuídos</span>
            <i aria-hidden="true" />
            <span>AWS</span>
          </div>

          <p className={styles.description}>
            Desenvolvedor Backend Java com foco em soluções robustas e
            escaláveis. Atuação com <strong>Spring Boot</strong>,{" "}
            <strong>Spring Security</strong> e{" "}
            <strong>Spring Data JPA</strong>, aplicando arquitetura{" "}
            <strong>Cloud-Native na AWS</strong>. Também utilizo{" "}
            <strong>Node.js/TypeScript</strong> como stack complementar.
          </p>

          <div data-hero-animate className={styles.actions}>
            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              <span>Ver projetos</span>
              <ArrowRight aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleDownloadCV}
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              <span>Baixar CV</span>
              <Download aria-hidden="true" />
            </button>
          </div>

          <div data-hero-animate className={styles.socials}>
            <a
              href="https://github.com/GabrielF0900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                event("clique_link_externo", { destino: "github" })
              }
            >
              <Github aria-hidden="true" />
              <span>/GabrielF0900</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gabrielfalcaodev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                event("clique_link_externo", { destino: "linkedin" })
              }
            >
              <Linkedin aria-hidden="true" />
              <span>/in/gabrielfalcaodev</span>
            </a>
          </div>
        </div>

        <div className={styles.architectureStage}>
          <HeroBackendOrbit />
        </div>
      </div>
    </section>
  );
}
