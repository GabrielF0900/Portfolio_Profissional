import {
  BarChart3,
  Cloud,
  Cpu,
  Database,
  Globe2,
  HardDrive,
  Power,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
} from "lucide-react";
import styles from "./HeroSection.module.css";

const CLIENT_PATHS = [
  "M180 270 H226 Q242 270 242 287 V302 H300",
  "M180 360 H226 Q242 360 242 347 H300",
  "M180 450 H226 Q242 450 242 410 H300",
];

const SERVICE_PATHS = [
  "M535 326 H582",
  "M582 326 V159 H608",
  "M582 326 H608",
  "M582 326 V493 H608",
];

const AWS_PATHS = [
  "M778 159 H852",
  "M778 326 H852",
  "M778 493 H852",
];

function ArchitectureConnections() {
  return (
    <>
      <svg
        className={styles.connections}
        viewBox="0 0 1000 650"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="hero-line-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="rgba(35,115,255,0.23)" />
            <stop offset="46%" stopColor="rgba(45,126,255,1)" />
            <stop offset="100%" stopColor="rgba(105,176,255,0.66)" />
          </linearGradient>

          <filter
            id="hero-line-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="3.05" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className={styles.connectionGhosts}>
          {[...CLIENT_PATHS, ...SERVICE_PATHS].map((path) => (
            <path key={`ghost-${path}`} d={path} />
          ))}
        </g>

        <g filter="url(#hero-line-glow)">
          {[...CLIENT_PATHS, ...SERVICE_PATHS].map((path) => (
            <path
              key={path}
              d={path}
              pathLength={1}
              data-architecture-path
              className={styles.connectionActive}
            />
          ))}
        </g>

        <g className={styles.connectorDots}>
          <circle data-architecture-signal cx="180" cy="270" r="3.8" />
          <circle data-architecture-signal cx="180" cy="360" r="3.8" />
          <circle data-architecture-signal cx="180" cy="450" r="3.8" />

          <circle data-architecture-signal cx="300" cy="302" r="3.8" />
          <circle data-architecture-signal cx="300" cy="347" r="3.8" />
          <circle data-architecture-signal cx="300" cy="410" r="3.8" />

          <circle data-architecture-signal cx="608" cy="159" r="3.8" />
          <circle data-architecture-signal cx="608" cy="326" r="3.8" />
          <circle data-architecture-signal cx="608" cy="493" r="3.8" />
        </g>
      </svg>

      <svg
        className={styles.awsBridges}
        viewBox="0 0 1000 650"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="hero-aws-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="rgba(37,117,255,0.68)" />
            <stop offset="50%" stopColor="rgba(62,143,255,1)" />
            <stop offset="100%" stopColor="rgba(132,193,255,0.78)" />
          </linearGradient>
        </defs>

        <g>
          {AWS_PATHS.map((path) => (
            <path
              key={`aws-ghost-${path}`}
              d={path}
              className={styles.awsBridgeGhost}
            />
          ))}
        </g>

        <g>
          {AWS_PATHS.map((path) => (
            <path
              key={path}
              d={path}
              pathLength={1}
              data-architecture-path
              className={styles.awsBridge}
            />
          ))}
        </g>

        <g className={styles.connectorDots}>
          <circle data-architecture-signal cx="778" cy="159" r="4" />
          <circle data-architecture-signal cx="852" cy="159" r="4" />
          <circle data-architecture-signal cx="778" cy="326" r="4" />
          <circle data-architecture-signal cx="852" cy="326" r="4" />
          <circle data-architecture-signal cx="778" cy="493" r="4" />
          <circle data-architecture-signal cx="852" cy="493" r="4" />
        </g>
      </svg>
    </>
  );
}

export default function HeroArchitectureDiagram() {
  return (
    <div
      data-architecture-shell
      className={styles.architecture}
      role="group"
      aria-label="Arquitetura backend conectando clientes à API Spring Boot, segurança, PostgreSQL, observabilidade e infraestrutura AWS"
    >
      <span className={styles.architectureLabel}>
        Architecture / Backend System
      </span>

      <div className={styles.sceneContent}>
        <div className={styles.sceneBackplane} aria-hidden="true" />
        <div className={styles.sceneFloor} aria-hidden="true" />
        <div className={styles.sceneGlow} aria-hidden="true" />
        <span className={styles.sceneSpark} aria-hidden="true" />

        <ArchitectureConnections />

        <section
          data-architecture-node
          className={`${styles.node} ${styles.clients}`}
          aria-label="Clientes: Web, Mobile e API Services"
        >
          <div className={styles.nodeHeader}>Clientes</div>

          <div className={styles.clientItem}>
            <Globe2 aria-hidden="true" />
            <span>Web</span>
          </div>

          <div className={styles.clientItem}>
            <Smartphone aria-hidden="true" />
            <span>Mobile</span>
          </div>

          <div className={styles.clientItem}>
            <TerminalSquare aria-hidden="true" />
            <span>API / Services</span>
          </div>
        </section>

        <section
          data-architecture-node
          className={`${styles.node} ${styles.core}`}
          aria-label="Core Backend: API Spring Boot"
        >
          <div className={styles.coreInner}>
            <span className={styles.coreEyebrow}>Core Backend</span>

            <div className={styles.coreTitle}>
              <strong>API</strong>
              <span>SPRING BOOT</span>
            </div>

            <div className={styles.coreIcon} aria-hidden="true">
              <Power />
            </div>

            <span className={styles.coreFoot}>Java Backend</span>
          </div>
        </section>

        <section
          data-architecture-node
          className={`${styles.node} ${styles.security}`}
          aria-label="Segurança com Spring Security"
        >
          <ShieldCheck aria-hidden="true" className={styles.serviceIcon} />
          <span className={styles.serviceLabel}>Segurança</span>
          <span className={styles.serviceValue}>Spring Security</span>
        </section>

        <section
          data-architecture-node
          className={`${styles.node} ${styles.database}`}
          aria-label="Banco de dados PostgreSQL"
        >
          <Database aria-hidden="true" className={styles.serviceIcon} />
          <span className={styles.serviceLabel}>Banco de dados</span>
          <span className={styles.serviceValue}>PostgreSQL</span>
        </section>

        <section
          data-architecture-node
          className={`${styles.node} ${styles.observability}`}
          aria-label="Observabilidade com logs e métricas"
        >
          <BarChart3 aria-hidden="true" className={styles.serviceIcon} />
          <span className={styles.serviceLabel}>Observabilidade</span>
          <span className={styles.serviceValue}>Logs &amp; Metrics</span>
        </section>

        <section
          data-architecture-node
          className={`${styles.node} ${styles.aws}`}
          aria-label="Infraestrutura AWS: EC2 ou ECS, RDS, S3 e CloudWatch"
        >
          <div className={styles.awsBrand} aria-label="AWS">
            <span>aws</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 72 18"
              className={styles.awsSmile}
            >
              <path
                d="M6 4 C22 15, 45 16, 64 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M58 4 L65 5 L62 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.awsDivider} />

          <div className={styles.awsService}>
            <Cpu aria-hidden="true" />
            <span>EC2 / ECS</span>
          </div>

          <div className={styles.awsService}>
            <Database aria-hidden="true" />
            <span>RDS</span>
          </div>

          <div className={styles.awsService}>
            <HardDrive aria-hidden="true" />
            <span>S3</span>
          </div>

          <div className={styles.awsService}>
            <Cloud aria-hidden="true" />
            <span>CloudWatch</span>
          </div>
        </section>
      </div>

      <div className={styles.architectureCaption} aria-hidden="true">
        <span>///</span>
        <strong>Arquitetura Cloud-Native na AWS</strong>
        <span>///</span>
      </div>
    </div>
  );
}
