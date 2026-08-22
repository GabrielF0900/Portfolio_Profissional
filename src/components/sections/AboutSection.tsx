"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Crosshair,
  LayoutPanelTop,
  MapPin,
  Target,
  User,
} from "lucide-react";

import styles from "./AboutSection.module.css";

const DIFFERENTIALS = [
  {
    icon: Cloud,
    title: "Visão Cloud-First",
    description:
      "Certificado AWS Solutions Architect – Associate (SAA-C03) e Cloud Practitioner (CLF-C02); foco em robustez, segurança e custo.",
  },
  {
    icon: Crosshair,
    title: "Atenção a detalhe como vantagem competitiva",
    description:
      "Autismo convertido em hiperfoco analítico, rigor em revisão de código, identificação de vulnerabilidades e integridade de sistemas complexos.",
  },
  {
    icon: LayoutPanelTop,
    title: "Cultura Ágil e Documentação",
    description:
      "Scrum Fundamentals, uso de Kanban e valorização de documentação clara para facilitar manutenção e escalabilidade.",
  },
];

const FRAME_PATH =
  "M74 22 H446 L498 74 V576 L446 628 H74 L22 576 V74 Z";

export default function AboutSection() {
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
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="about-title"
    >
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.sectionMarker}>
          <span
            className={styles.sectionMarkerIcon}
            aria-hidden="true"
          >
            <User />
          </span>

          <span className={styles.sectionMarkerNumber}>
            02
          </span>

          <span
            className={styles.sectionMarkerSlash}
            aria-hidden="true"
          >
            /
          </span>

          <span className={styles.sectionMarkerLabel}>
            SOBRE
          </span>
        </div>

        <div className={styles.layout}>
          <div className={styles.content}>
            <header className={styles.heading}>
              <h2 id="about-title">Sobre mim</h2>

              <p className={styles.statement}>
                Eu construo o que acontece
                <br />
                depois do <strong>clique.</strong>
              </p>

              <span className={styles.headingAccent} aria-hidden="true" />
            </header>

            <div className={styles.introduction}>
              <p>
                Olá, sou <strong>Gabriel Falcão.</strong>
              </p>

              <p>
                Desenvolvedor Backend Java | Spring Boot | AWS Solutions
                Architect Associate (SAA-C03).
              </p>

              <p>
                Construo sistemas backend robustos, seguros e escaláveis com{" "}
                <strong>Java 21</strong> e <strong>Spring Boot</strong>,
                aplicando embasamento em arquitetura AWS desde a primeira linha
                de código.
              </p>

              <p>
                Tenho também experiência prática em{" "}
                <strong>Node.js/TypeScript</strong> como stack complementar.
              </p>
            </div>

            <div
              className={styles.differentials}
              aria-label="Diferenciais técnicos"
            >
              {DIFFERENTIALS.map(({ icon: Icon, title, description }) => (
                <article className={styles.differentialCard} key={title}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon} aria-hidden="true">
                      <Icon />
                    </span>

                    <h3>{title}</h3>
                  </div>

                  <p>{description}</p>
                </article>
              ))}
            </div>

            <div className={styles.objective}>
              <span className={styles.objectiveIcon} aria-hidden="true">
                <Target />
              </span>

              <p>
                <strong>Objetivo:</strong> primeira posição como Desenvolvedor
                Backend Java Júnior.
              </p>

              <span className={styles.objectiveSignal} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>

          <aside className={styles.portraitArea}>
            <div className={styles.portraitFrame}>
              <div className={styles.frameDots} aria-hidden="true" />

              <div className={styles.portrait}>
                <Image
                  src="/minhaFoto.webp"
                  alt="Gabriel Falcão"
                  fill
                  priority={false}
                  sizes="(max-width: 900px) 90vw, 38vw"
                  className={styles.portraitImage}
                />

                <div className={styles.portraitShade} aria-hidden="true" />
              </div>

              <svg 
                className={styles.portraitCircuit} 
                viewBox="0 0 520 650"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d={FRAME_PATH}
                  stroke="currentColor" 
                  strokeWidth="1.5"
                  className={styles.circuitBase}
                />
                <path 
                  d={FRAME_PATH}
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  className={styles.circuitSignal}
                />
                <circle cx="74" cy="22" r="3" className={styles.circuitPoint} />
                <circle cx="498" cy="74" r="3" className={styles.circuitPointAlt} />
                <circle cx="446" cy="628" r="3" className={styles.circuitPoint} />
                <circle cx="22" cy="576" r="3" className={styles.circuitPointAlt} />
              </svg>

              <div className={styles.location}>
                <MapPin aria-hidden="true" />
                <span>Brasil</span>
              </div>
            </div>

            <div className={styles.systemTrace} aria-hidden="true">
              <span />
              <i />
              <span />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}