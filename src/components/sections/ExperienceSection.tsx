"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Clock3,
  ExternalLink,
  GitBranch,
  Workflow,
  Layers3,
  Users,
  Trophy,
  Network,
  ListChecks,
  Gauge,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

import { event } from "@/lib/gtag";
import styles from "./ExperienceSection.module.css";

function CodeStageIcon() {
  return (
    <svg
      className={styles.stageSvg}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.svgFrame}
        x="5"
        y="7"
        width="54"
        height="50"
        rx="11"
      />
      <circle
        className={styles.svgNode}
        cx="14"
        cy="15"
        r="2"
      />
      <circle
        className={styles.svgNodeSoft}
        cx="21"
        cy="15"
        r="2"
      />
      <path
        className={styles.svgSecondary}
        d="M11 22H53"
      />
      <path
        className={styles.svgPrimary}
        d="M26 27L18 32L26 37"
      />
      <path
        className={styles.svgPrimary}
        d="M38 27L46 32L38 37"
      />
      <path
        className={styles.svgSignal}
        d="M35 24L29 40"
        pathLength="100"
      />
      <path
        className={styles.svgSecondary}
        d="M17 47H34"
      />
      <circle
        className={styles.svgNode}
        cx="47"
        cy="47"
        r="2.4"
      />
    </svg>
  );
}

function BuildStageIcon() {
  return (
    <svg
      className={styles.stageSvg}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.svgFrame}
        x="5"
        y="7"
        width="54"
        height="50"
        rx="11"
      />
      <circle
        className={styles.svgNode}
        cx="17"
        cy="20"
        r="4"
      />
      <circle
        className={styles.svgNodeSoft}
        cx="17"
        cy="44"
        r="4"
      />
      <circle
        className={styles.svgNode}
        cx="32"
        cy="32"
        r="4"
      />
      <path
        className={styles.svgPrimary}
        d="M21 20H27C29.7614 20 32 22.2386 32 25V28"
      />
      <path
        className={styles.svgPrimary}
        d="M21 44H27C29.7614 44 32 41.7614 32 39V36"
      />
      <path
        className={styles.svgSignal}
        d="M36 32H48"
        pathLength="100"
      />
      <path
        className={styles.svgPrimary}
        d="M44 27L49 32L44 37"
      />
    </svg>
  );
}

function PackageStageIcon() {
  return (
    <svg
      className={styles.stageSvg}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.svgFrame}
        x="5"
        y="7"
        width="54"
        height="50"
        rx="11"
      />
      <path
        className={styles.svgPrimary}
        d="M15 28H49V46H15V28Z"
      />
      <path
        className={styles.svgSecondary}
        d="M15 34H49"
      />
      <path
        className={styles.svgSecondary}
        d="M25 28V46"
      />
      <path
        className={styles.svgSecondary}
        d="M39 28V46"
      />
      <rect
        className={styles.svgPrimary}
        x="19"
        y="18"
        width="8"
        height="7"
        rx="1"
      />
      <rect
        className={styles.svgPrimary}
        x="29"
        y="18"
        width="8"
        height="7"
        rx="1"
      />
      <rect
        className={styles.svgPrimary}
        x="39"
        y="18"
        width="8"
        height="7"
        rx="1"
      />
      <circle
        className={styles.svgNode}
        cx="20"
        cy="40"
        r="2"
      />
      <path
        className={styles.svgSignal}
        d="M28 40H44"
        pathLength="100"
      />
    </svg>
  );
}

function DeployStageIcon() {
  return (
    <svg
      className={styles.stageSvg}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        className={styles.svgFrame}
        x="5"
        y="7"
        width="54"
        height="50"
        rx="11"
      />
      <path
        className={styles.svgPrimary}
        d="M17 40C12.5817 40 9 36.4183 9 32C9 27.8941 12.0954 24.5102 16.0802 24.0527C18.0076 19.8598 22.2436 17 27.1333 17C33.0037 17 37.9065 21.1183 39.1134 26.6195C39.7134 26.5088 40.3321 26.451 40.9644 26.451C46.5088 26.451 51 30.9422 51 36.4866C51 38.6038 50.3438 40.5679 49.2243 42.187"
      />
      <path
        className={styles.svgPrimary}
        d="M30 46V29"
      />
      <path
        className={styles.svgPrimary}
        d="M23 36L30 29L37 36"
      />
      <path
        className={styles.svgSignal}
        d="M19 49H45"
        pathLength="100"
      />
      <circle
        className={styles.svgNode}
        cx="45"
        cy="49"
        r="2.5"
      />
    </svg>
  );
}

const PIPELINE = [
  {
    label: "CODE",
    name: "Desenvolvimento",
    detail: "Código",
    icon: CodeStageIcon,
  },
  {
    label: "BUILD",
    name: "GitHub Actions",
    detail: "CI/CD",
    icon: BuildStageIcon,
  },
  {
    label: "PACKAGE",
    name: "Docker",
    detail: "Empacotamento",
    icon: PackageStageIcon,
  },
  {
    label: "DEPLOY",
    name: "Deploy",
    detail: "Processo padronizado",
    icon: DeployStageIcon,
  },
];

const RESPONSIBILITIES = [
  {
    text: "Fundação e liderança técnica da organização",
    icon: Users,
  },
  {
    text: "Definição de arquitetura e padrões de desenvolvimento",
    icon: Network,
  },
  {
    text: "Gestão de equipe e priorização técnica",
    icon: ListChecks,
  },
  {
    text: "Implementação de pipeline CI/CD",
    icon: GitBranch,
  },
];

const ACHIEVEMENTS = [
  {
    text: "Redução mensurável no tempo de deploy via automação",
    icon: Gauge,
  },
  {
    text: "Aumento de produtividade da equipe com adoção de metodologia ágil",
    icon: TrendingUp,
  },
  {
    text: "Estabelecimento de cultura de qualidade de código e revisão técnica",
    icon: ShieldCheck,
  },
];

const STACK = [
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Express",
  "Docker",
  "JWT",
  "AWS",
  "ORM Prisma",
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="experience-title"
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.sectionMarker}>
          <span
            className={styles.sectionMarkerIcon}
            aria-hidden="true"
          >
            <Workflow />
          </span>

          <span className={styles.sectionMarkerNumber}>
            03
          </span>

          <span
            className={styles.sectionMarkerSlash}
            aria-hidden="true"
          >
            /
          </span>

          <span className={styles.sectionMarkerLabel}>
            EXPERIÊNCIA
          </span>
        </div>

        <header className={styles.sectionHeading}>
          <h2
            id="experience-title"
            className={styles.mainTitle}
          >
            Experiência
            <br />
            profissional.
          </h2>

          <p className={styles.sectionLead}>
            Minha trajetória profissional e contribuições
            em organizações de destaque.
          </p>

          <span
            className={styles.headingAccent}
            aria-hidden="true"
          />
        </header>

        <div className={styles.topGrid}>
          <div className={styles.presentation}>
            <h3 className={styles.roleTitle}>
              <span className={styles.roleLine}>
                Fundador e Líder Técnico —
              </span>
              <span className={styles.roleCompanyRow}>
                <span className={styles.roleCompany}>Neukox</span>
                <a
                  href="https://github.com/Neukox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.organizationLink}
                  onClick={() =>
                    event("clique_link_externo", {
                      destino: "organizacao_neukox",
                    })
                  }
                >
                  <span>Visitar organização</span>
                  <ExternalLink aria-hidden="true" />
                </a>
              </span>
            </h3>

            <div className={styles.period}>
              <CalendarDays aria-hidden="true" />
              Abril 2025 – Abril 2026
              <span className={styles.periodDot}>•</span>
              <Clock3 aria-hidden="true" />
              1 ano
            </div>

            <div className={styles.description}>
              <p>
                Fundei e liderei tecnicamente a Neukox, definindo arquitetura de software, processos de desenvolvimento e prioridades técnicas da equipe.
              </p>
              <p>
                Apliquei metodologia ágil (Kanban) para gestão de entregas.
              </p>
              <p>
                Implementei pipeline de CI/CD com GitHub Actions e Docker, padronizando o processo de deploy.
              </p>
              <p>
                A base arquitetural que uso hoje em <strong className={styles.textHighlight}>Java</strong>, <strong className={styles.textHighlight}>Spring Boot</strong> e <strong className={styles.textHighlight}>AWS</strong> — decisões de design, gestão de prioridades técnicas e disciplina de CI/CD — foi consolidada na prática liderando essa equipe.
              </p>
            </div>
          </div>

          <div className={styles.pipeline}>
            <div className={styles.pipelineHeader}>
              <Layers3 aria-hidden="true" />
              <h4>PIPELINE DE ENTREGA CONTÍNUA</h4>
            </div>

            <div className={styles.pipelineFlow}>
              {PIPELINE.map(({ label, name, detail, icon: Icon }, index) => (
                <div className={styles.pipelineUnit} key={label}>
                  <article className={styles.pipelineNode}>
                    <span className={styles.nodeLabel}>{label}</span>
                    <Icon />
                    <span className={styles.nodeName}>{name}</span>
                    <span className={styles.nodeDetail}>{detail}</span>
                  </article>
                  {index < PIPELINE.length - 1 && (
                    <span className={styles.connectionLine} aria-hidden="true" />
                  )}
                </div>
              ))}

              <svg
                className={styles.pipelineBusMobile}
                viewBox="0 0 76 1000"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path className={styles.busDrop} d="M76 125 H30" />
                <path className={styles.busDrop} d="M76 375 H30" />
                <path className={styles.busDrop} d="M76 625 H30" />
                <path className={styles.busDrop} d="M76 875 H30" />

                <path className={styles.busBase} d="M30 42 V958" pathLength="100" />
                <path className={styles.busSignal} d="M30 42 V958" pathLength="100" />

                <circle className={`${styles.busPoint} ${styles.busPoint1}`} cx="30" cy="125" r="5" />
                <circle className={`${styles.busPoint} ${styles.busPoint2}`} cx="30" cy="375" r="5" />
                <circle className={`${styles.busPoint} ${styles.busPoint3}`} cx="30" cy="625" r="5" />
                <circle className={`${styles.busPoint} ${styles.busPoint4}`} cx="30" cy="875" r="5" />

                <path className={styles.busDashed} d="M10 42 V958" />
              </svg>
            </div>

            <svg
              className={styles.pipelineBus}
              viewBox="0 0 1000 76"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path className={styles.busDrop} d="M125 0 V30" />
              <path className={styles.busDrop} d="M375 0 V30" />
              <path className={styles.busDrop} d="M625 0 V30" />
              <path className={styles.busDrop} d="M875 0 V30" />

              <path className={styles.busBase} d="M42 30 H958" pathLength="100" />
              <path className={styles.busSignal} d="M42 30 H958" pathLength="100" />

              <circle className={`${styles.busPoint} ${styles.busPoint1}`} cx="125" cy="30" r="5" />
              <circle className={`${styles.busPoint} ${styles.busPoint2}`} cx="375" cy="30" r="5" />
              <circle className={`${styles.busPoint} ${styles.busPoint3}`} cx="625" cy="30" r="5" />
              <circle className={`${styles.busPoint} ${styles.busPoint4}`} cx="875" cy="30" r="5" />

              <path className={styles.busDashed} d="M42 64 H958" />
            </svg>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardHeaderIcon}>
                <Users aria-hidden="true" />
              </span>
              <h4>Responsabilidades</h4>
            </div>
            <ul className={styles.detailList}>
              {RESPONSIBILITIES.map(({ text, icon: Icon }) => (
                <li key={text}>
                  <span className={styles.itemIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardHeaderIcon}>
                <Trophy aria-hidden="true" />
              </span>
              <h4>Conquistas</h4>
            </div>
            <ul className={styles.detailList}>
              {ACHIEVEMENTS.map(({ text, icon: Icon }) => (
                <li key={text}>
                  <span className={`${styles.itemIcon} ${styles.itemIconSuccess}`} aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardHeaderIcon}>
                <Layers3 aria-hidden="true" />
              </span>
              <h4>Stack</h4>
            </div>
            <div className={styles.stack}>
              {STACK.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}