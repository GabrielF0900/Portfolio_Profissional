"use client";

import {
  ArrowUpRight,
  Clock3,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { event } from "@/lib/gtag";
import { getLastUpdateFormatted } from "@/constants/lastUpdate";

import styles from "./Footer.module.css";

const footerNavigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Skills", href: "#skills" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const footerRef =
    useRef<HTMLElement>(null);

  const lastUpdate =
    getLastUpdateFormatted();

  useGSAP(
    () => {
      if (!footerRef.current) {
        return;
      }

      const reduceMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      if (reduceMotion) {
        return;
      }

      gsap.registerPlugin(
        ScrollTrigger
      );

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger:
              footerRef.current,

            start:
              "top 84%",

            once:
              true,

            invalidateOnRefresh:
              true,
          },
        });

      /* =========================================
         1. IDENTIDADE ENTRA DA ESQUERDA
         ========================================= */

      timeline.fromTo(
        `.${styles.identity}`,
        {
          opacity: 0,
          x: -34,
        },
        {
          opacity: 1,
          x: 0,

          duration: 0.68,

          ease:
            "power3.out",

          clearProps:
            "transform,opacity",
        }
      );

      /* =========================================
         2. MONOGRAMA MATERIALIZA
         ========================================= */

      timeline.fromTo(
        `.${styles.monogram}`,
        {
          opacity: 0,
          scale: 0.82,
          rotate: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,

          duration: 0.58,

          ease:
            "back.out(1.3)",

          clearProps:
            "transform,opacity",
        },

        "-=0.44"
      );

      /*
       * Os quatro cantos são montados
       * sequencialmente.
       */

      timeline.fromTo(
        [
          `.${styles.cornerTL}`,
          `.${styles.cornerTR}`,
          `.${styles.cornerBR}`,
          `.${styles.cornerBL}`,
        ],
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 0.24,

          stagger: 0.055,

          ease:
            "back.out(1.8)",

          clearProps:
            "transform,opacity",
        },

        "-=0.45"
      );

      /* =========================================
         3. TEXTO IDENTIDADE
         ========================================= */

      timeline.fromTo(
        [
          `.${styles.nameRow}`,
          `.${styles.role}`,
          `.${styles.bio}`,
        ],
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.45,

          stagger: 0.075,

          ease:
            "power2.out",

          clearProps:
            "transform,opacity",
        },

        "-=0.28"
      );

      /* =========================================
         4. COLUNAS
         ========================================= */

      timeline.fromTo(
        `.${styles.column}`,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.52,

          stagger: 0.1,

          ease:
            "power3.out",

          clearProps:
            "transform,opacity",
        },

        "-=0.24"
      );

      /* =========================================
         5. UPDATE PANEL
         ========================================= */

      timeline.fromTo(
        `.${styles.updatePanel}`,
        {
          opacity: 0,
          x: 28,
          scaleX: 0.985,
        },
        {
          opacity: 1,
          x: 0,
          scaleX: 1,

          duration: 0.58,

          ease:
            "power3.out",

          clearProps:
            "transform,opacity",
        },

        "-=0.18"
      );

      timeline.fromTo(
        `.${styles.updateIcon}`,
        {
          opacity: 0,
          scale: 0.72,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 0.36,

          ease:
            "back.out(1.6)",

          clearProps:
            "transform,opacity",
        },

        "-=0.34"
      );

      timeline.fromTo(
        `.${styles.activeStatus}`,
        {
          opacity: 0,
          x: 8,
        },
        {
          opacity: 1,
          x: 0,

          duration: 0.34,

          ease:
            "power2.out",

          clearProps:
            "transform,opacity",
        },

        "-=0.25"
      );

      /* =========================================
         6. BASE DO FOOTER
         ========================================= */

      timeline.fromTo(
        `.${styles.bottomBar}`,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.46,

          ease:
            "power2.out",

          clearProps:
            "transform,opacity",
        },

        "-=0.14"
      );
    },

    {
      scope: footerRef,
    }
  );

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
    >
      <div
        className={styles.footerArchitecture}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* =========================
              IDENTIDADE
              ========================= */}

          <div className={styles.identity}>
            <div
              className={styles.monogram}
              aria-hidden="true"
            >
              <span
                className={styles.monogramGlow}
              />

              <span
                className={styles.cornerTL}
              />

              <span
                className={styles.cornerTR}
              />

              <span
                className={styles.cornerBL}
              />

              <span
                className={styles.cornerBR}
              />

              <span className={styles.gf}>
                GF
              </span>
            </div>

            <div
              className={styles.identityText}
            >
              <div className={styles.nameRow}>
                <span
                  className={styles.statusDot}
                  aria-hidden="true"
                />

                <h2>
                  Gabriel Falcão da Cruz
                </h2>
              </div>

              <p className={styles.role}>
                Backend Java | Spring Boot |
                AWS Solutions Architect
                Associate (SAA-C03)
              </p>

              <p className={styles.bio}>
                Desenvolvedor Backend com foco
                em soluções robustas e
                escaláveis. Atuação com Spring
                Boot, Spring Security e Spring
                Data JPA, aplicando arquitetura
                Cloud-Native na AWS.
              </p>
            </div>
          </div>

          {/* =========================
              COLUNAS
              ========================= */}

          <div className={styles.linkColumns}>
            <div className={styles.column}>
              <h3>NAVEGAÇÃO</h3>

              <nav
                aria-label="Navegação do rodapé"
              >
                {footerNavigation.map(
                  (item) => (
                    <a
                      key={item.href}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </nav>
            </div>

            <div className={styles.column}>
              <h3>CONECTE-SE</h3>

              <div
                className={
                  styles.externalLinks
                }
              >
                <a
                  href="https://www.linkedin.com/in/gabrielfalcaodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    event(
                      "clique_link_externo",
                      {
                        destino:
                          "linkedin",
                      }
                    )
                  }
                >
                  <Linkedin
                    aria-hidden="true"
                  />

                  <span>
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="https://github.com/GabrielF0900"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    event(
                      "clique_link_externo",
                      {
                        destino:
                          "github",
                      }
                    )
                  }
                >
                  <Github
                    aria-hidden="true"
                  />

                  <span>
                    GitHub
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="mailto:falcaocruz.tech@gmail.com"
                  onClick={() =>
                    event(
                      "clique_link_externo",
                      {
                        destino:
                          "contato",
                      }
                    )
                  }
                >
                  <Mail
                    aria-hidden="true"
                  />

                  <span>
                    Email
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className={styles.column}>
              <h3>LOCALIZAÇÃO</h3>

              <div
                className={styles.location}
              >
                <p>
                  <MapPin
                    aria-hidden="true"
                  />

                  <span>
                    Brasil
                  </span>
                </p>

                <span>
                  Disponível para trabalho
                  remoto global
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            UPDATE
            ========================= */}

        <div className={styles.updatePanel}>
          <div
            className={styles.updateSignal}
            aria-hidden="true"
          />

          <div className={styles.updateLeft}>
            <span
              className={styles.updateIcon}
            >
              <Clock3
                aria-hidden="true"
              />
            </span>

            <div>
              <span
                className={
                  styles.updateLabel
                }
              >
                ÚLTIMA ATUALIZAÇÃO
              </span>

              <strong>
                {lastUpdate}
              </strong>
            </div>
          </div>

          <div
            className={styles.activeStatus}
          >
            <span aria-hidden="true" />

            ATIVO
          </div>
        </div>

        {/* =========================
            BOTTOM
            ========================= */}

        <div className={styles.bottomBar}>
          <p>
            © <span>2026</span>{" "}
            Gabriel Falcão da Cruz
          </p>

          <p className={styles.signature}>
            Feito com <span>♡</span>,
            código e propósito.
          </p>
        </div>
      </div>
    </footer>
  );
}