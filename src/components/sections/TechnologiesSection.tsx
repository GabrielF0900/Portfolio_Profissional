"use client";

import {
  Cpu,
  Power,
  Network,
  Cloud,
  Wrench,
  Monitor,
  Coffee,
  Leaf,
  ShieldCheck,
  Database,
  KeyRound,
  Boxes,
  ShipWheel,
  Braces,
  Workflow,
  CloudCog,
  GitBranch,
  Github,
  Code2,
  Send,
  Moon,
  FlaskConical,
  PenTool,
  ServerCog,
  Hexagon,
  Triangle,
  Atom,
  Wind,
  FileCode,
} from "lucide-react";
import { technologies } from "../../constants/technologies";
import styles from "./TechnologiesSection.module.css";

// ---------------------------------------------------------
// ICON MAPPING HELPER
// ---------------------------------------------------------

function getTechnologyVisual(name: string) {
  const n = name.toLowerCase();
  
  if (n.includes("java") && !n.includes("javascript")) return { icon: <Coffee aria-hidden="true" />, color: "#f89820" };
  if (n.includes("spring boot")) return { icon: <Leaf aria-hidden="true" />, color: "#6db33f" };
  if (n.includes("spring security")) return { icon: <ShieldCheck aria-hidden="true" />, color: "#6db33f" };
  if (n.includes("postgresql")) return { icon: <Database aria-hidden="true" />, color: "#336791" };
  if (n.includes("jwt")) return { icon: <KeyRound aria-hidden="true" />, color: "#f0b429" };
  
  if (n.includes("aws")) return { icon: <Cloud aria-hidden="true" />, color: "#ff9900" };
  if (n.includes("docker")) return { icon: <Boxes aria-hidden="true" />, color: "#2496ed" };
  if (n.includes("kubernetes")) return { icon: <ShipWheel aria-hidden="true" />, color: "#326ce5" };
  if (n === "python") return { icon: <Braces aria-hidden="true" />, color: "#3776ab" };
  
  if (n.includes("microsservi")) return { icon: <Network aria-hidden="true" />, color: "#58a6ff" };
  if (n.includes("eureka")) return { icon: <Network aria-hidden="true" />, color: "#6db33f" };
  if (n.includes("openfeign")) return { icon: <Workflow aria-hidden="true" />, color: "#8aa4c7" };
  if (n.includes("config")) return { icon: <CloudCog aria-hidden="true" />, color: "#8aa4c7" };
  
  if (n === "git") return { icon: <GitBranch aria-hidden="true" />, color: "#f05032" };
  if (n.includes("github")) return { icon: <Github aria-hidden="true" />, color: "var(--tech-text)" };
  if (n.includes("vs code")) return { icon: <Code2 aria-hidden="true" />, color: "#007acc" };
  if (n.includes("postman")) return { icon: <Send aria-hidden="true" />, color: "#ff6c37" };
  if (n.includes("insomnia")) return { icon: <Moon aria-hidden="true" />, color: "#5849be" };
  if (n.includes("beekeeper")) return { icon: <Database aria-hidden="true" />, color: "#20b2aa" };
  if (n.includes("jest")) return { icon: <FlaskConical aria-hidden="true" />, color: "#c21325" };
  if (n.includes("figma")) return { icon: <PenTool aria-hidden="true" />, color: "#a259ff" };
  
  if (n.includes("node")) return { icon: <ServerCog aria-hidden="true" />, color: "#339933" };
  if (n.includes("nest")) return { icon: <Hexagon aria-hidden="true" />, color: "#e0234e" };
  if (n.includes("typescript")) return { icon: <Braces aria-hidden="true" />, color: "#3178c6" };
  if (n.includes("prisma")) return { icon: <Triangle aria-hidden="true" />, color: "#5a7184" };
  if (n === "react") return { icon: <Atom aria-hidden="true" />, color: "#61dafb" };
  if (n.includes("tailwind")) return { icon: <Wind aria-hidden="true" />, color: "#06b6d4" };
  if (n === "javascript") return { icon: <FileCode aria-hidden="true" />, color: "#f7df1e" };
  if (n.includes("html")) return { icon: <FileCode aria-hidden="true" />, color: "#e34f26" };
  if (n.includes("css")) return { icon: <FileCode aria-hidden="true" />, color: "#1572b6" };

  return { icon: <Cpu aria-hidden="true" />, color: "var(--tech-text)" };
}

// ---------------------------------------------------------
// COMPONENTES INTERNOS
// ---------------------------------------------------------

function TechnologyItem({ name }: { name: string }) {
  const { icon, color } = getTechnologyVisual(name);
  return (
    <div className={styles.technologyItem}>
      <span
        className={styles.technologyIcon}
        style={{ "--brand-color": color } as React.CSSProperties}
      >
        {icon}
      </span>
      <span className={styles.technologyName}>{name}</span>
    </div>
  );
}

function TechnologyGroup({
  title,
  icon,
  items,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  className: string;
}) {
  return (
    <article className={`${styles.groupCard} ${className}`}>
      <header className={styles.groupHeader}>
        <h3>{title}</h3>
        <span>{icon}</span>
      </header>
      <div className={styles.groupList}>
        {items.map((tech) => (
          <TechnologyItem key={tech} name={tech} />
        ))}
      </div>
    </article>
  );
}

function BackendCore() {
  return (
    <div className={styles.coreCard}>
      <span className={styles.coreEyebrow}>CORE / BACKEND</span>
      <h3 className={styles.coreTitle}>Backend Java</h3>

      <div className={styles.coreSymbol}>
        <Power aria-hidden="true" />
      </div>

      <div className={styles.coreList}>
        {technologies.backend.map((tech) => (
          <TechnologyItem key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN SECTION EXPORT
// ---------------------------------------------------------

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className={styles.section}>
      <div className={styles.gridBackground} aria-hidden="true" />
      <div className={styles.coreGlow} aria-hidden="true" />

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.sectionMarker}>
          <span className={styles.sectionMarkerIcon}>
            <Cpu aria-hidden="true" />
          </span>
          <span className={styles.sectionMarkerNumber}>06</span>
          <span className={styles.sectionMarkerSlash}>/</span>
          <span className={styles.sectionMarkerLabel}>TECNOLOGIAS</span>
        </div>

        <h2 className={styles.title}>Tecnologias.</h2>
        <p className={styles.lead}>
          Ferramentas e tecnologias que utilizo para criar soluções robustas, escaláveis e seguras.
        </p>

        <div className={styles.accentLine} aria-hidden="true" />

        {/* ECOSYSTEM */}
        <div className={styles.ecosystem}>
          {/* CONNECTOR LAYER (SVG) */}
          <svg
            className={styles.connectorLayer}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[
              {
                d: "M 300 170 H 365 Q 390 170 390 195 V 250 H 445",
                start: [300, 170],
                end: [445, 250],
              },
              {
                d: "M 300 430 H 365 Q 390 430 390 405 V 350 H 445",
                start: [300, 430],
                end: [445, 350],
              },
              {
                d: "M 555 250 H 610 V 195 Q 610 170 635 170 H 700",
                start: [555, 250],
                end: [700, 170],
              },
              {
                d: "M 555 350 H 610 V 405 Q 610 430 635 430 H 700",
                start: [555, 350],
                end: [700, 430],
              },
            ].map(({ d, start, end }, index) => (
              <g className={styles.connector} key={d}>
                <path className={styles.connectorBase} d={d} />
                <path className={styles.connectorFlow} d={d} />

                <circle
                  className={
                    index < 2
                      ? styles.connectorDot
                      : styles.connectorDotCore
                  }
                  cx={start[0]}
                  cy={start[1]}
                  r={index < 2 ? 3.25 : 3.75}
                />
                <circle
                  className={
                    index < 2
                      ? styles.connectorDotCore
                      : styles.connectorDot
                  }
                  cx={end[0]}
                  cy={end[1]}
                  r={index < 2 ? 3.75 : 3.25}
                />
              </g>
            ))}
          </svg>

          {/* GRID */}
          <div className={styles.ecosystemGrid}>
            <TechnologyGroup
              title="SISTEMAS DISTRIBUÍDOS"
              icon={<Network aria-hidden="true" />}
              items={technologies.distributedSystems}
              className={styles.distributedCard}
            />

            <TechnologyGroup
              title="CLOUD & INFRAESTRUTURA"
              icon={<Cloud aria-hidden="true" />}
              items={technologies.infrastructure}
              className={styles.cloudCard}
            />

            <BackendCore />

            <TechnologyGroup
              title="FERRAMENTAS"
              icon={<Wrench aria-hidden="true" />}
              items={technologies.tools}
              className={styles.toolsCard}
            />

            <TechnologyGroup
              title="FRONTEND & STACK COMPLEMENTAR"
              icon={<Monitor aria-hidden="true" />}
              items={technologies.frontend}
              className={styles.frontendCard}
            />
          </div>

          <div className={styles.legend}>
            <span />
            TECNOLOGIAS QUE IMPULSIONAM SOLUÇÕES ESCALÁVEIS
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
