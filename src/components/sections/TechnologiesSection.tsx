"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import {
  Atom,
  Braces,
  Cloud,
  CloudCog,
  Cpu,
  Database,
  Github,
  KeyRound,
  Monitor,
  Network,
  Power,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { technologies } from "../../constants/technologies";
import styles from "./TechnologiesSection.module.css";

type TechnologyGroupKey =
  | "distributed"
  | "cloud"
  | "tools"
  | "frontend";

type BrandVisual = {
  slug: string;
  color: string;
};

type TechnologyVisual = {
  icon: React.ReactNode;
  color: string;
  brand?: BrandVisual;
};

/* =========================================================
   BRAND ICONS
   ========================================================= */

const BRAND_VISUALS: Record<string, BrandVisual> = {
  java: {
    slug: "openjdk",
    color: "F89820",
  },

  "spring boot": {
    slug: "springboot",
    color: "6DB33F",
  },

  postgresql: {
    slug: "postgresql",
    color: "4169E1",
  },

  aws: {
    slug: "amazonwebservices",
    color: "FF9900",
  },

  docker: {
    slug: "docker",
    color: "2496ED",
  },

  kubernetes: {
    slug: "kubernetes",
    color: "326CE5",
  },

  python: {
    slug: "python",
    color: "3776AB",
  },

  git: {
    slug: "git",
    color: "F05032",
  },

  "vs code": {
    slug: "visualstudiocode",
    color: "007ACC",
  },

  postman: {
    slug: "postman",
    color: "FF6C37",
  },

  insomnia: {
    slug: "insomnia",
    color: "5849BE",
  },

  beekeeper: {
    slug: "beekeeperstudio",
    color: "FAD83B",
  },

  jest: {
    slug: "jest",
    color: "C21325",
  },

  figma: {
    slug: "figma",
    color: "F24E1E",
  },

  "node.js": {
    slug: "nodedotjs",
    color: "5FA04E",
  },

  "nest.js": {
    slug: "nestjs",
    color: "E0234E",
  },

  typescript: {
    slug: "typescript",
    color: "3178C6",
  },

  prisma: {
    slug: "prisma",
    color: "5A7184",
  },

  react: {
    slug: "react",
    color: "61DAFB",
  },

  "tailwind css": {
    slug: "tailwindcss",
    color: "06B6D4",
  },

  javascript: {
    slug: "javascript",
    color: "F7DF1E",
  },

  html5: {
    slug: "html5",
    color: "E34F26",
  },

  css3: {
    slug: "css",
    color: "1572B6",
  },
};

/* =========================================================
   FALLBACK VISUALS
   ========================================================= */

function getTechnologyVisual(name: string): TechnologyVisual {
  const normalizedName = name.toLowerCase();
  const brand = BRAND_VISUALS[normalizedName];

  if (brand) {
    return {
      color: `#${brand.color}`,
      brand,
      icon: <Braces aria-hidden="true" />,
    };
  }

  if (normalizedName === "github") {
    return {
      icon: <Github aria-hidden="true" />,
      color: "var(--tech-text)",
    };
  }

  if (normalizedName.includes("spring security")) {
    return {
      icon: <ShieldCheck aria-hidden="true" />,
      color: "#6db33f",
    };
  }

  if (normalizedName.includes("jwt")) {
    return {
      icon: <KeyRound aria-hidden="true" />,
      color: "#f0b429",
    };
  }

  if (normalizedName.includes("microsservi")) {
    return {
      icon: <Network aria-hidden="true" />,
      color: "#58a6ff",
    };
  }

  if (normalizedName.includes("eureka")) {
    return {
      icon: <Network aria-hidden="true" />,
      color: "#6db33f",
    };
  }

  if (normalizedName.includes("openfeign")) {
    return {
      icon: <Workflow aria-hidden="true" />,
      color: "#8aa4c7",
    };
  }

  if (normalizedName.includes("config")) {
    return {
      icon: <CloudCog aria-hidden="true" />,
      color: "#8aa4c7",
    };
  }

  if (normalizedName.includes("database")) {
    return {
      icon: <Database aria-hidden="true" />,
      color: "#4169e1",
    };
  }

  if (normalizedName.includes("react")) {
    return {
      icon: <Atom aria-hidden="true" />,
      color: "#61dafb",
    };
  }

  return {
    icon: <Braces aria-hidden="true" />,
    color: "var(--tech-text)",
  };
}

/* =========================================================
   TECHNOLOGY ITEM
   ========================================================= */

function TechnologyItem({
  name,
  core = false,
}: {
  name: string;
  core?: boolean;
}) {
  const { icon, color, brand } = getTechnologyVisual(name);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`${styles.technologyItem} ${
        core ? styles.coreItem : ""
      }`}
    >
      <span
        className={styles.technologyIcon}
        style={
          {
            "--brand-color": color,
          } as React.CSSProperties
        }
      >
        {brand && !hasError ? (
          <Image
            src={`https://cdn.simpleicons.org/${brand.slug}/${brand.color}`}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            onError={() => setHasError(true)}
          />
        ) : (
          icon
        )}
      </span>

      <span className={styles.technologyName}>
        {name}
      </span>
    </div>
  );
}

/* =========================================================
   TECHNOLOGY GROUP
   ========================================================= */

interface TechnologyGroupProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  className: string;
  group: TechnologyGroupKey;
  onActivate?: (group: TechnologyGroupKey) => void;
  onDeactivate?: () => void;
}

function TechnologyGroup({
  title,
  icon,
  items,
  className,
  group,
  onActivate,
  onDeactivate,
}: TechnologyGroupProps) {
  return (
    <article
      className={`${styles.groupCard} ${className}`}
      data-technology-group={group}
      onMouseEnter={() => onActivate?.(group)}
      onMouseLeave={() => onDeactivate?.()}
    >
      <header className={styles.groupHeader}>
        <h3>{title}</h3>

        <span aria-hidden="true">
          {icon}
        </span>
      </header>

      <div className={styles.groupList}>
        {items.map((technology) => (
          <TechnologyItem
            key={technology}
            name={technology}
          />
        ))}
      </div>
    </article>
  );
}

/* =========================================================
   BACKEND CORE
   ========================================================= */

function BackendCore() {
  return (
    <article className={styles.coreCard}>
      <span className={styles.coreEyebrow}>
        CORE / BACKEND
      </span>

      <h3 className={styles.coreTitle}>
        Backend Java
      </h3>

      <div
        className={styles.coreSymbol}
        aria-hidden="true"
      >
        <Power />
      </div>

      <div className={styles.coreList}>
        {technologies.backend.map((technology) => (
          <TechnologyItem
            key={technology}
            name={technology}
            core
          />
        ))}
      </div>

      <div
        className={styles.corePlatform}
        aria-hidden="true"
      >
        <span />
        <span />
      </div>
    </article>
  );
}

/* =========================================================
   MOBILE CONNECTOR
   ========================================================= */

function MobileConnector() {
  return (
    <div
      className={styles.mobileConnector}
      aria-hidden="true"
    >
      <span
        className={styles.mobileConnectorLine}
      />

      <span
        className={styles.mobileConnectorSignal}
      />

      <span
        className={styles.mobileConnectorNode}
      />

      <span
        className={styles.mobileConnectorArrow}
      />
    </div>
  );
}

/* =========================================================
   DESKTOP CONNECTORS
   ========================================================= */

/*
 * viewBox = 0 0 1200 620
 *
 * A área central ocupa aproximadamente x=480..720.
 * Os cards ficam mais afastados para dar espaço aos circuitos.
 *
 * Todos os paths começam nos cards e terminam no CORE.
 * Isso faz o fluxo ter a mesma narrativa:
 *
 * CARD → BACKEND JAVA
 */

const CONNECTORS = [
  {
    key: "distributed",
    path:
      "M 330 170 H 400 Q 435 170 435 205 V 245 Q 435 270 460 270 H 486",
    start: [330, 170],
    end: [486, 270],
  },

  {
    key: "cloud",
    path:
      "M 330 450 H 400 Q 435 450 435 415 V 375 Q 435 350 460 350 H 486",
    start: [330, 450],
    end: [486, 350],
  },

  {
    key: "tools",
    path:
      "M 870 170 H 800 Q 765 170 765 205 V 245 Q 765 270 740 270 H 714",
    start: [870, 170],
    end: [714, 270],
  },

  {
    key: "frontend",
    path:
      "M 870 450 H 800 Q 765 450 765 415 V 375 Q 765 350 740 350 H 714",
    start: [870, 450],
    end: [714, 350],
  },
] as const;

/* =========================================================
   SECTION
   ========================================================= */

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeGroup, setActiveGroup] =
    useState<TechnologyGroupKey | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
  
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
  
      if (reduceMotion) {
        return;
      }
  
      gsap.registerPlugin(ScrollTrigger);
  
      const mm = gsap.matchMedia();
  
      /* =====================================================
         HEADER — TODOS OS BREAKPOINTS
         ===================================================== */
  
      gsap.from(`.${styles.sectionHeader}`, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
  
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
  
      /* =====================================================
         DESKTOP >= 980px
         ===================================================== */
  
      mm.add("(min-width: 980px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.desktopEcosystem}`,
            start: "top 76%",
            once: true,
          },
        });
  
        /*
         * 1. Background arquitetural surge primeiro.
         */
  
        timeline.from(
          [
            `.${styles.architectureGrid}`,
            `.${styles.verticalArchitecture}`,
            `.${styles.coreGlow}`,
          ],
          {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          }
        );
  
        /*
         * 2. Backend Java surge como núcleo.
         */
  
        timeline.from(
          `.${styles.desktopEcosystem} .${styles.coreCard}`,
          {
            opacity: 0,
            y: 28,
            scale: 0.965,
            duration: 0.72,
            ease: "power3.out",
          },
          "-=0.4"
        );
  
        /*
         * 3. Símbolo do core aparece.
         */
  
        timeline.from(
          `.${styles.desktopEcosystem} .${styles.coreSymbol}`,
          {
            opacity: 0,
            scale: 0.78,
            duration: 0.48,
            ease: "back.out(1.35)",
          },
          "-=0.38"
        );
  
        /*
         * 4. Os quatro cards entram em direção ao core.
         *
         * Esquerda → direita
         * Direita → esquerda
         */
  
        timeline.from(
          [
            `.${styles.desktopEcosystem} .${styles.distributedCard}`,
            `.${styles.desktopEcosystem} .${styles.cloudCard}`,
          ],
          {
            opacity: 0,
            x: -34,
            duration: 0.64,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.2"
        );
  
        timeline.from(
          [
            `.${styles.desktopEcosystem} .${styles.toolsCard}`,
            `.${styles.desktopEcosystem} .${styles.frontendCard}`,
          ],
          {
            opacity: 0,
            x: 34,
            duration: 0.64,
            stagger: 0.1,
            ease: "power3.out",
          },
          "<"
        );
  
        /*
         * 5. Os conectores são "desenhados".
         */
  
        const connectorPaths = gsap.utils.toArray<SVGPathElement>(
          `.${styles.desktopEcosystem} .${styles.connectorBase}`
        );
  
        connectorPaths.forEach((path) => {
          const length = path.getTotalLength();
  
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });
  
        timeline.to(
          connectorPaths,
          {
            strokeDashoffset: 0,
            duration: 0.85,
            stagger: 0.08,
            ease: "power2.inOut",
  
            onComplete: () => {
              connectorPaths.forEach((path) => {
                gsap.set(path, {
                  clearProps:
                    "strokeDasharray,strokeDashoffset",
                });
              });
            },
          },
          "-=0.28"
        );
  
        /*
         * 6. Nodes aparecem depois dos circuitos.
         */
  
        timeline.from(
          [
            `.${styles.desktopEcosystem} .${styles.connectorDot}`,
            `.${styles.desktopEcosystem} .${styles.connectorDotCore}`,
          ],
          {
            opacity: 0,
            scale: 0,
            transformOrigin: "center",
            duration: 0.32,
            stagger: 0.045,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        );
  
        /*
         * 7. Legenda final.
         */
  
        timeline.from(
          `.${styles.legend}`,
          {
            opacity: 0,
            y: 10,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.15"
        );
      });
  
      /* =====================================================
         TABLET 680px — 979px
         ===================================================== */
  
      mm.add(
        "(min-width: 680px) and (max-width: 979px)",
        () => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: `.${styles.desktopEcosystem}`,
              start: "top 78%",
              once: true,
            },
          });
  
          timeline.from(
            `.${styles.desktopEcosystem} .${styles.coreCard}`,
            {
              opacity: 0,
              y: 24,
              scale: 0.975,
              duration: 0.65,
              ease: "power3.out",
            }
          );
  
          timeline.from(
            [
              `.${styles.desktopEcosystem} .${styles.distributedCard}`,
              `.${styles.desktopEcosystem} .${styles.toolsCard}`,
              `.${styles.desktopEcosystem} .${styles.cloudCard}`,
              `.${styles.desktopEcosystem} .${styles.frontendCard}`,
            ],
            {
              opacity: 0,
              y: 20,
              duration: 0.52,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.28"
          );
  
          timeline.from(
            `.${styles.legend}`,
            {
              opacity: 0,
              y: 8,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.15"
          );
        }
      );
  
      /* =====================================================
         MOBILE <= 679px
         ===================================================== */
  
      mm.add("(max-width: 679px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.mobileEcosystem}`,
            start: "top 82%",
            once: true,
          },
        });
  
        /*
         * Mobile conta a história de cima para baixo:
         *
         * Backend
         * ↓
         * connector
         * ↓
         * Distributed
         * ↓
         * Cloud
         * ↓
         * Tools
         * ↓
         * Frontend
         */
  
        timeline.from(
          `.${styles.mobileEcosystem} .${styles.coreCard}`,
          {
            opacity: 0,
            y: 22,
            scale: 0.97,
            duration: 0.65,
            ease: "power3.out",
          }
        );
  
        timeline.from(
          `.${styles.mobileEcosystem} .${styles.coreSymbol}`,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.42,
            ease: "back.out(1.4)",
          },
          "-=0.32"
        );
  
        /*
         * Cards aparecem sequencialmente durante a montagem.
         */
  
        timeline.from(
          [
            `.${styles.mobileEcosystem} .${styles.distributedCard}`,
            `.${styles.mobileEcosystem} .${styles.cloudCard}`,
            `.${styles.mobileEcosystem} .${styles.toolsCard}`,
            `.${styles.mobileEcosystem} .${styles.frontendCard}`,
          ],
          {
            opacity: 0,
            y: 22,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.1"
        );
  
        timeline.from(
          `.${styles.mobileLegend}`,
          {
            opacity: 0,
            y: 8,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1"
        );
      });
  
      return () => {
        mm.revert();
      };
    },
    {
      scope: sectionRef,
    }
  );

  const activateGroup = (
    group: TechnologyGroupKey
  ) => {
    setActiveGroup(group);
  };

  const deactivateGroup = () => {
    setActiveGroup(null);
  };

  return (
    <section
      ref={sectionRef}
      id="tecnologias"
      className={styles.section}
      aria-labelledby="technologies-title"
    >
      <div
        className={styles.gridBackground}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* =========================
            HEADER
            ========================= */}

        <header className={styles.sectionHeader}>
          <div className={styles.sectionMarker}>
            <span
              className={styles.sectionMarkerIcon}
              aria-hidden="true"
            >
              <Cpu />
            </span>

            <span
              className={styles.sectionMarkerNumber}
            >
              06
            </span>

            <span
              className={styles.sectionMarkerSlash}
              aria-hidden="true"
            >
              /
            </span>

            <span
              className={styles.sectionMarkerLabel}
            >
              TECNOLOGIAS
            </span>
          </div>

          <h2
            id="technologies-title"
            className={styles.title}
          >
            Tecnologias.
          </h2>

          <p className={styles.lead}>
            Ferramentas e tecnologias que utilizo
            para criar soluções robustas,
            escaláveis e seguras.
          </p>

          <div
            className={styles.accentLine}
            aria-hidden="true"
          />
        </header>

        {/* =====================================================
            DESKTOP / TABLET ECOSYSTEM
            ===================================================== */}

        <div className={styles.desktopEcosystem}>
          <div
            className={styles.ecosystem}
            data-active-group={
              activeGroup ?? undefined
            }
          >
            <div
              className={styles.architectureGrid}
              aria-hidden="true"
            />

            <div
              className={styles.verticalArchitecture}
              aria-hidden="true"
            />

            <div
              className={styles.coreGlow}
              aria-hidden="true"
            />

            <svg
              className={styles.connectorLayer}
              viewBox="0 0 1200 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {CONNECTORS.map(
                (
                  {
                    key,
                    path,
                    start,
                    end,
                  },
                  index
                ) => (
                  <g
                    key={key}
                    className={`${styles.connector} ${
                      styles[
                        `${key}Connector` as keyof typeof styles
                      ]
                    }`}
                  >
                    <path
                      className={
                        styles.connectorBase
                      }
                      d={path}
                    />

                    <path
                      className={
                        styles.connectorFlow
                      }
                      d={path}
                      style={
                        {
                          "--connector-delay":
                            `${index * -0.7}s`,
                        } as React.CSSProperties
                      }
                    />

                    <circle
                      className={
                        styles.connectorHalo
                      }
                      cx={start[0]}
                      cy={start[1]}
                      r="8"
                    />

                    <circle
                      className={
                        styles.connectorDot
                      }
                      cx={start[0]}
                      cy={start[1]}
                      r="3.4"
                    />

                    <circle
                      className={
                        styles.connectorHaloCore
                      }
                      cx={end[0]}
                      cy={end[1]}
                      r="10"
                    />

                    <circle
                      className={
                        styles.connectorDotCore
                      }
                      cx={end[0]}
                      cy={end[1]}
                      r="4.1"
                    />
                  </g>
                )
              )}
            </svg>

            <div className={styles.ecosystemGrid}>
              <TechnologyGroup
                title="SISTEMAS DISTRIBUÍDOS"
                icon={
                  <Network aria-hidden="true" />
                }
                items={
                  technologies.distributedSystems
                }
                className={
                  styles.distributedCard
                }
                group="distributed"
                onActivate={activateGroup}
                onDeactivate={deactivateGroup}
              />

              <TechnologyGroup
                title="CLOUD & INFRAESTRUTURA"
                icon={
                  <Cloud aria-hidden="true" />
                }
                items={
                  technologies.infrastructure
                }
                className={styles.cloudCard}
                group="cloud"
                onActivate={activateGroup}
                onDeactivate={deactivateGroup}
              />

              <BackendCore />

              <TechnologyGroup
                title="FERRAMENTAS"
                icon={
                  <Wrench aria-hidden="true" />
                }
                items={technologies.tools}
                className={styles.toolsCard}
                group="tools"
                onActivate={activateGroup}
                onDeactivate={deactivateGroup}
              />

              <TechnologyGroup
                title="FRONTEND & STACK COMPLEMENTAR"
                icon={
                  <Monitor aria-hidden="true" />
                }
                items={technologies.frontend}
                className={
                  styles.frontendCard
                }
                group="frontend"
                onActivate={activateGroup}
                onDeactivate={deactivateGroup}
              />
            </div>

            <div className={styles.legend}>
              <span aria-hidden="true" />

              TECNOLOGIAS QUE IMPULSIONAM SOLUÇÕES
              ESCALÁVEIS

              <span aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE PIPELINE
            ===================================================== */}

        <div className={styles.mobileEcosystem}>
          <div
            className={styles.mobileArchitectureGrid}
            aria-hidden="true"
          />

          <div
            className={styles.mobileCoreGlow}
            aria-hidden="true"
          />

          <div className={styles.mobilePipeline}>
            {/* CORE PRIMEIRO */}
            <BackendCore />

            <MobileConnector />

            {/* DISTRIBUTED */}
            <TechnologyGroup
              title="SISTEMAS DISTRIBUÍDOS"
              icon={
                <Network aria-hidden="true" />
              }
              items={
                technologies.distributedSystems
              }
              className={styles.distributedCard}
              group="distributed"
            />

            <MobileConnector />

            {/* CLOUD */}
            <TechnologyGroup
              title="CLOUD & INFRAESTRUTURA"
              icon={
                <Cloud aria-hidden="true" />
              }
              items={
                technologies.infrastructure
              }
              className={styles.cloudCard}
              group="cloud"
            />

            <MobileConnector />

            {/* TOOLS */}
            <TechnologyGroup
              title="FERRAMENTAS"
              icon={
                <Wrench aria-hidden="true" />
              }
              items={technologies.tools}
              className={styles.toolsCard}
              group="tools"
            />

            <MobileConnector />

            {/* FRONTEND */}
            <TechnologyGroup
              title="FRONTEND & STACK COMPLEMENTAR"
              icon={
                <Monitor aria-hidden="true" />
              }
              items={technologies.frontend}
              className={styles.frontendCard}
              group="frontend"
            />
          </div>

          <div className={styles.mobileLegend}>
            <span aria-hidden="true" />

            TECNOLOGIAS QUE IMPULSIONAM SOLUÇÕES
            ESCALÁVEIS

            <span aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
