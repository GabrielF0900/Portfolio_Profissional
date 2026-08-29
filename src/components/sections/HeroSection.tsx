import {
  Code2,
  Zap,
} from "lucide-react";
import HeroBackendOrbit from "./HeroBackendOrbit";
import HeroActions from "./HeroActions";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={styles.hero}
    >
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.topGrid} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.heroMetaRow}>
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

          <HeroActions
            actionsClassName={styles.actions}
            buttonClassName={styles.button}
            primaryClassName={styles.buttonPrimary}
            secondaryClassName={styles.buttonSecondary}
            socialsClassName={styles.socials}
          />
        </div>

        <div className={styles.architectureStage}>
          <HeroBackendOrbit />
        </div>
      </div>
    </section>
  );
}
