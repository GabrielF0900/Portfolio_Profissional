"use client";

import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { event } from "@/lib/gtag";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CTASection.module.css";

const PRIMARY_EMAIL = "falcaocruz.tech@gmail.com";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });

      /* =========================================
         1. INTRODUÇÃO (COLUNA ESQUERDA)
         ========================================= */
      timeline.fromTo(
        [
          `.${styles.eyebrow}`,
          `.${styles.title}`,
          `.${styles.accentLine}`,
          `.${styles.description}`,
          `.${styles.circuit}`,
        ],
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity",
        }
      );

      /* =========================================
         2. PAINEL DE CONTATO (COLUNA DIREITA)
         ========================================= */
      timeline.fromTo(
        [
          `.${styles.emailCard}`,
          `.${styles.socialCard}`,
          `.${styles.statement}`,
        ],
        {
          opacity: 0,
          x: 24,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity",
        },
        "-=0.45"
      );
    },
    { scope: sectionRef }
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_EMAIL);

      setCopied(true);

      toast.success("E-mail copiado", {
        description: PRIMARY_EMAIL,
        duration: 2500,
      });

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Não foi possível copiar o e-mail.");
    }
  };

  const handleEmailClick = () => {
    event("clique_link_externo", {
      destino: "contato",
    });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.backgroundGrid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.contactGrid}>
          {/* COLUNA ESQUERDA */}
          <div className={styles.intro}>
            <div className={styles.eyebrow}>
              <Send aria-hidden="true" />
              <span>CONTATO</span>
            </div>

            <h2 id="contact-title" className={styles.title}>
              Vamos trabalhar
              <br />
              <span>juntos?</span>
            </h2>

            <div className={styles.accentLine} aria-hidden="true" />

            <p className={styles.description}>
              Estou aberto a novos desafios, oportunidades e projetos onde
              tecnologia, arquitetura e boas decisões possam gerar impacto
              real.
            </p>

            <div className={styles.circuit} aria-hidden="true">
              <span className={styles.circuitLineA} />
              <span className={styles.circuitLineB} />
              <span className={styles.circuitLineC} />
              <span className={styles.circuitDotA} />
              <span className={styles.circuitDotB} />
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className={styles.contactPanel}>
            <div className={styles.emailCard}>
              <div className={styles.emailIcon}>
                <Mail aria-hidden="true" />
              </div>

              <div className={styles.emailContent}>
                <span className={styles.cardLabel}>EMAIL PRINCIPAL</span>

                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className={styles.emailAddress}
                  onClick={handleEmailClick}
                >
                  {PRIMARY_EMAIL}
                </a>

                <span className={styles.emailMeta}>
                  Canal direto para oportunidades e projetos
                </span>
              </div>

              <button
                type="button"
                className={styles.copyButton}
                onClick={handleCopyEmail}
                aria-label={
                  copied ? "E-mail copiado" : "Copiar endereço de e-mail"
                }
              >
                {copied ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
              </button>
            </div>

            <div className={styles.socialGrid}>
              <a
                href="https://www.linkedin.com/in/gabrielfalcaodev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                onClick={() =>
                  event("clique_link_externo", {
                    destino: "linkedin",
                  })
                }
              >
                <span className={styles.socialIcon}>
                  <Linkedin aria-hidden="true" />
                </span>

                <span className={styles.socialContent}>
                  <span className={styles.cardLabel}>LINKEDIN</span>
                  <span className={styles.socialValue}>
                    /in/gabrielfalcaodev
                  </span>
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className={styles.socialArrow}
                />
              </a>

              <a
                href="https://github.com/GabrielF0900"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
                onClick={() =>
                  event("clique_link_externo", {
                    destino: "github",
                  })
                }
              >
                <span className={styles.socialIcon}>
                  <Github aria-hidden="true" />
                </span>

                <span className={styles.socialContent}>
                  <span className={styles.cardLabel}>GITHUB</span>
                  <span className={styles.socialValue}>/GabrielF0900</span>
                </span>

                <ArrowUpRight
                  aria-hidden="true"
                  className={styles.socialArrow}
                />
              </a>
            </div>

            <div className={styles.statement}>
              <span className={styles.statementLine} aria-hidden="true" />

              <ShieldCheck aria-hidden="true" />

              <p>
                Vamos construir{" "}
                <strong>soluções escaláveis</strong> e de alto impacto.
              </p>

              <span className={styles.statementLine} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}