"use client";

import { useRef } from "react";
import {
  ArrowRight,
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
        gsap.set(
          [
            "[data-hero-reveal]",
            "[data-architecture-shell]",
            "[data-architecture-node]",
            "[data-architecture-signal]",
          ].join(", "),
          { clearProps: "all" },
        );

        gsap.set("[data-architecture-path]", {
          strokeDashoffset: 0,
        });

        return;
      }

      gsap.set("[data-architecture-path]", {
        strokeDasharray: 1,
        strokeDashoffset: 1,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .from("[data-hero-reveal]", {
          y: 20,
          opacity: 0,
          duration: 0.58,
          stagger: 0.09,
        })
        .from(
          "[data-architecture-shell]",
          {
            opacity: 0,
            x: 26,
            duration: 0.78,
          },
          0.3,
        )
        .from(
          "[data-architecture-node]",
          {
            opacity: 0,
            y: 15,
            scale: 0.965,
            duration: 0.52,
            stagger: 0.075,
          },
          0.5,
        )
        .to(
          "[data-architecture-path]",
          {
            strokeDashoffset: 0,
            duration: 0.78,
            stagger: 0.075,
            ease: "power2.inOut",
          },
          0.7,
        )
        .from(
          "[data-architecture-signal]",
          {
            opacity: 0,
            scale: 0,
            transformOrigin: "center center",
            duration: 0.25,
            stagger: 0.04,
          },
          1,
        );
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
          <div data-hero-reveal className={styles.availability}>
            <Zap aria-hidden="true" />
            <span>Disponível para novos projetos</span>
          </div>

          <h1 id="hero-title" className={styles.heading}>
            <span data-hero-reveal className={styles.namePrimary}>
              Gabriel Falcão
            </span>

            <span data-hero-reveal className={styles.nameSecondary}>
              da Cruz
            </span>

            <span
              data-hero-reveal
              className={styles.headingDivider}
              aria-hidden="true"
            />

            <span data-hero-reveal className={styles.role}>
              <strong>BACKEND</strong>
              <em>JAVA.</em>
            </span>
          </h1>

          <div
            data-hero-reveal
            className={styles.stack}
            aria-label="Especialidades principais"
          >
            <span>Spring Boot</span>
            <i aria-hidden="true" />
            <span>Sistemas Distribuídos</span>
            <i aria-hidden="true" />
            <span>AWS</span>
          </div>

          <p data-hero-reveal className={styles.description}>
            Desenvolvedor Backend Java com foco em soluções robustas e
            escaláveis. Atuação com <strong>Spring Boot</strong>,{" "}
            <strong>Spring Security</strong> e{" "}
            <strong>Spring Data JPA</strong>, aplicando arquitetura{" "}
            <strong>Cloud-Native na AWS</strong>. Também utilizo{" "}
            <strong>Node.js/TypeScript</strong> como stack complementar.
          </p>

          <div data-hero-reveal className={styles.actions}>
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

          <div data-hero-reveal className={styles.socials}>
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
