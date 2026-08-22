"use client";

import {
  useRef,
} from "react";

import gsap from "gsap";

import {
  useGSAP,
} from "@gsap/react";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";



import {
  BookOpen,
  Brain,
  Clock3,
  MessageSquare,
  Puzzle,
  Star,
  Users,
  Waypoints,
  UserRound,
} from "lucide-react";

import { softSkills } from "../../constants/navigation";
import styles from "./SkillsSection.module.css";

const skillIcons = [
  MessageSquare,
  Users,
  Puzzle,
  Brain,
  Waypoints,
  Star,
  Clock3,
  BookOpen,
];

export default function SkillsSection() {

  const sectionRef =
  useRef<HTMLElement>(null);

useGSAP(
  () => {
    if (!sectionRef.current) {
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
            sectionRef.current,

          /*
           * Começa quando aproximadamente
           * 22% da seção entrou no viewport.
           */
          start:
            "top 78%",

          once:
            true,
        },
      });

    /* =====================================
       COLUNA ESQUERDA
       ===================================== */

    timeline.from(
      `.${styles.marker}`,
      {
        opacity: 0,
        x: -18,

        duration: 0.48,

        ease:
          "power3.out",
      }
    );

    timeline.from(
      `.${styles.title}`,
      {
        opacity: 0,
        y: 30,

        duration: 0.72,

        ease:
          "power3.out",
      },

      "-=0.18"
    );

    timeline.from(
      `.${styles.accentLine}`,
      {
        scaleX: 0,

        transformOrigin:
          "left center",

        duration: 0.42,

        ease:
          "power2.out",
      },

      "-=0.38"
    );

    timeline.from(
      `.${styles.description}`,
      {
        opacity: 0,
        y: 16,

        duration: 0.52,

        ease:
          "power2.out",
      },

      "-=0.18"
    );

    timeline.from(
      `.${styles.highlight}`,
      {
        opacity: 0,
        x: -16,

        duration: 0.5,

        ease:
          "power2.out",
      },

      "-=0.22"
    );

    /* =====================================
       CORE
       ===================================== */

    timeline.fromTo(
      `.${styles.core}`,
      {
        opacity: 0,
        scale: 0.78,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.68,
        ease: "back.out(1.25)",
        clearProps: "transform,opacity",
      },
      "-=0.3"
    );

    timeline.fromTo(
      `.${styles.coreHexagon}`,
      {
        opacity: 0,
        scale: 0.68,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.48,
        ease: "back.out(1.45)",
        clearProps: "transform,opacity",
      },
      "-=0.4"
    );

    /* =====================================
       ANÉIS
       ===================================== */

    timeline.fromTo(
      `.${styles.ringInner}`,
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.48,
        ease: "power2.out",
        clearProps: "transform,opacity",
      },
      "-=0.25"
    );

    timeline.fromTo(
      `.${styles.ringMiddle}`,
      {
        opacity: 0,
        scale: 0.72,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.52,
        ease: "power2.out",
        clearProps: "transform,opacity",
      },
      "-=0.3"
    );

    timeline.fromTo(
      `.${styles.ringOuter}`,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.56,
        ease: "power2.out",
        clearProps: "transform,opacity",
      },
      "-=0.3"
    );

    /* =====================================
       LINHAS RADIAIS
       ===================================== */

    timeline.fromTo(
      `.${styles.radialLines} span`,
      {
        opacity: 0,
        scaleX: 0,
      },
      {
        opacity: 1,
        scaleX: 1,

        transformOrigin: "left center",

        duration: 0.42,
        stagger: 0.045,

        ease: "power2.out",

        clearProps: "transform,opacity",
      },
      "-=0.24"
    );

    /* =====================================
       NÚMEROS
       ===================================== */

    timeline.fromTo(
      `.${styles.skillNumber}`,

      {
        opacity: 0,
        y: -5,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.26,

        stagger: 0.055,

        ease: "power2.out",

        clearProps: "transform,opacity",
      },

      "-=0.12"
    );

    /* =====================================
       ÍCONES
       ===================================== */

    timeline.fromTo(
      `.${styles.skillIcon}`,

      {
        opacity: 0,
        scale: 0.55,
      },

      {
        opacity: 1,
        scale: 1,

        duration: 0.38,

        stagger: 0.065,

        ease: "back.out(1.65)",

        clearProps: "transform,opacity",
      },

      "-=0.36"
    );

    /* =====================================
       NOMES
       ===================================== */

    timeline.fromTo(
      `.${styles.skillName}`,

      {
        opacity: 0,
        y: 8,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.32,

        stagger: 0.05,

        ease: "power2.out",

        clearProps: "transform,opacity",
      },

      "-=0.36"
    );

    /* =====================================
       LEGENDA
       ===================================== */

    timeline.from(
      `.${styles.legend}`,
      {
        opacity: 0,
        y: 8,

        duration: 0.4,

        ease:
          "power2.out",
      },

      "-=0.12"
    );
  },

  {
    scope: sectionRef,
  }
);


  return (
    <section
      id="skills"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="skills-title"
    >
      <div
        className={styles.backgroundGrid}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* LEFT CONTENT */}

        <div className={styles.content}>
          <div className={styles.marker}>
            <span className={styles.markerIcon}>
              <Users aria-hidden="true" />
            </span>

            <span>COMO TRABALHO</span>
          </div>

          <h2
            id="skills-title"
            className={styles.title}
          >
            Meu modo
            <br />
            de operar
          </h2>

          <div
            className={styles.accentLine}
            aria-hidden="true"
          />

          <p className={styles.description}>
            Acredito que tecnologia transforma quando
            pessoas trabalham bem juntas. Por isso,
            minhas habilidades interpessoais
            potencializam cada linha de código, cada
            decisão técnica e cada entrega.
          </p>

          <div className={styles.highlight}>
            <span
              className={styles.highlightLine}
              aria-hidden="true"
            />

            <p>
              Habilidades que impulsionam{" "}
              <strong>
                colaboração, clareza e resultados
              </strong>{" "}
              extraordinários.
            </p>
          </div>
        </div>

        {/* ORBIT */}

        <div className={styles.orbitScene}>
          <div
            className={styles.orbitGlow}
            aria-hidden="true"
          />

          <div
            className={styles.orbitGrid}
            aria-hidden="true"
          />

          <div className={styles.orbit}>
            <div
              className={`${styles.ring} ${styles.ringOuter}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.ring} ${styles.ringMiddle}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.ring} ${styles.ringInner}`}
              aria-hidden="true"
            />

            {/* RADIAL LINES */}

            <div
              className={styles.radialLines}
              aria-hidden="true"
            >
              {softSkills.map((_, index) => (
                <span
                  key={index}
                  style={
                    {
                      "--line-index": index,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>

            {/* CENTER */}

            <div className={styles.core}>
              <div className={styles.coreHalo} />

              <div className={styles.coreHexagon}>
                <UserRound aria-hidden="true" />
              </div>

              <span className={styles.coreEyebrow}>
                CORE / GABRIEL
              </span>

              <strong className={styles.coreTitle}>
                MODO DE OPERAR
              </strong>
            </div>

            {/* SKILLS */}

            <div className={styles.orbitRotation}>
              {softSkills.map((skill, index) => {
                const Icon =
                  skillIcons[index] ?? Star;

                return (
                  <div
                    key={skill}
                    className={styles.skillOrbitItem}
                    style={
                      {
                        "--index": index,
                      } as React.CSSProperties
                    }
                  >
                    <div
                      className={styles.skillCounterRotation}
                    >
                      <span className={styles.skillNumber}>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <div
                        className={styles.skillIcon}
                      >
                        <Icon aria-hidden="true" />
                      </div>

                      <span className={styles.skillName}>
                        {skill}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.legend}>
            <span aria-hidden="true">
              //
            </span>

            PESSOAS

            <i aria-hidden="true" />

            PROCESSOS

            <i aria-hidden="true" />

            PROPÓSITO

            <span aria-hidden="true">
              //
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}