"use client";

import { useRef } from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollToSection } from "../../hooks/useScroll";
import { event } from "@/lib/gtag";
import HeroArchitectureDiagram from "./HeroArchitectureDiagram";

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
        gsap.set("[data-hero-reveal], [data-architecture-node]", {
          clearProps: "all",
        });
        gsap.set("[data-architecture-path]", { strokeDashoffset: 0 });
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-hero-reveal]", {
          y: 28,
          opacity: 0,
          duration: 0.72,
          stagger: 0.11,
        })
        .from(
          "[data-architecture-shell]",
          { scale: 0.94, opacity: 0, duration: 0.8 },
          0.34,
        )
        .from(
          "[data-architecture-node]",
          {
            scale: 0.82,
            opacity: 0,
            duration: 0.58,
            stagger: 0.1,
          },
          0.58,
        )
        .to(
          "[data-architecture-path]",
          {
            strokeDashoffset: 0,
            duration: 0.72,
            stagger: 0.12,
            ease: "power2.inOut",
          },
          0.76,
        )
        .from(
          "[data-architecture-signal]",
          { scale: 0, opacity: 0, duration: 0.32, stagger: 0.08 },
          1.14,
        );
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-surface relative flex min-h-[100dvh] items-center overflow-hidden pt-20"
    >
      <div className="hero-ambient" aria-hidden="true" />

      <div className="hero-layout relative mx-auto grid w-full max-w-[1600px] items-center gap-14 px-5 py-12 sm:px-8 md:py-16 lg:px-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-0 xl:px-14">
        <div className="hero-copy relative z-[2] max-w-3xl">
          <p
            data-hero-reveal
            className="hero-identity mb-5 text-sm font-semibold text-[var(--text-secondary)] sm:text-base"
          >
            Gabriel Falcão da Cruz
          </p>

          <h1
            id="hero-title"
            data-hero-reveal
            className="hero-title w-full max-w-6xl text-[clamp(3rem,6vw,5.65rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[var(--text-primary)]"
          >
            <span className="hero-title-kicker block">Desenvolvedor</span>
            <span className="hero-title-primary block">Backend <em>Java.</em></span>
          </h1>

          <div data-hero-reveal className="hero-specialties" aria-label="Especialidades principais">
            <span>Spring Boot</span>
            <span>Sistemas Distribuídos</span>
            <span>AWS</span>
          </div>

          <p
            data-hero-reveal
            className="hero-description mt-7 max-w-[34rem] text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
          >
            Construo soluções robustas e escaláveis com Spring Boot, segurança,
            dados e arquitetura cloud-native na AWS.
          </p>

          <div
            data-hero-reveal
            className="hero-actions mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollToSection("projetos")}
              className="hero-button hero-button-primary group"
            >
              Ver projetos
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </button>
            <button
              type="button"
              onClick={handleDownloadCV}
              className="hero-button hero-button-secondary group"
            >
              Baixar CV
              <Download
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                strokeWidth={1.75}
              />
            </button>
          </div>

          <div data-hero-reveal className="hero-socials hidden xl:flex">
            <a
              href="https://github.com/GabrielF0900"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => event("clique_link_externo", { destino: "github" })}
            >
              <Github aria-hidden="true" />
              github.com/GabrielF0900
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielfalcaodev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => event("clique_link_externo", { destino: "linkedin" })}
            >
              <Linkedin aria-hidden="true" />
              /in/gabrielfalcaodev
            </a>
          </div>
        </div>

        <div className="hero-architecture-stage">
          <HeroArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
