import {
  CloudCog,
  Database,
  Globe2,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const nodeBase =
  "architecture-node relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border p-4";

function ClientNode() {
  return (
    <div
      data-architecture-node
      className={`${nodeBase} architecture-client-node md:absolute md:left-[2%] md:top-1/2 md:w-[17%] md:-translate-y-1/2`}
    >
      <div className="flex items-center justify-between text-[var(--accent-primary)]">
        <Globe2 aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
        <Smartphone
          aria-hidden="true"
          className="h-4 w-4 text-[var(--text-muted)]"
          strokeWidth={1.6}
        />
      </div>
      <div>
        <p className="architecture-node-title">Clientes</p>
        <p className="architecture-node-copy">Web, mobile e serviços</p>
      </div>
    </div>
  );
}

function SpringBootNode() {
  return (
    <div
      data-architecture-node
      className={`${nodeBase} architecture-node-core architecture-spring-node md:absolute md:left-[30%] md:top-1/2 md:min-h-48 md:w-[20%] md:-translate-y-1/2`}
    >
      <div className="architecture-core-heading">
        <span>Core service</span>
        <span>Java</span>
      </div>
      <div className="architecture-core-icon">
        <Server aria-hidden="true" className="h-7 w-7" strokeWidth={1.4} />
      </div>
      <div>
        <p className="architecture-node-title architecture-core-title">API</p>
        <p className="architecture-node-copy architecture-core-copy">Spring Boot</p>
      </div>
    </div>
  );
}

function SecurityNode() {
  return (
    <div
      data-architecture-node
      className={`${nodeBase} architecture-security-node md:absolute md:left-[61%] md:top-[17%] md:w-[18%]`}
    >
      <ShieldCheck
        aria-hidden="true"
        className="h-5 w-5 text-[var(--accent-primary)]"
        strokeWidth={1.6}
      />
      <div>
        <p className="architecture-node-title">Segurança</p>
        <p className="architecture-node-copy">Spring Security</p>
      </div>
    </div>
  );
}

function DatabaseNode() {
  return (
    <div
      data-architecture-node
      className={`${nodeBase} architecture-database-node md:absolute md:bottom-[17%] md:left-[61%] md:w-[18%]`}
    >
      <Database
        aria-hidden="true"
        className="h-5 w-5 text-[var(--accent-primary)]"
        strokeWidth={1.6}
      />
      <div>
        <p className="architecture-node-title">Dados</p>
        <p className="architecture-node-copy">PostgreSQL</p>
      </div>
    </div>
  );
}

function AwsNode() {
  return (
    <div
      data-architecture-node
      className={`${nodeBase} architecture-node-cloud architecture-aws-node md:absolute md:right-[2%] md:top-1/2 md:min-h-48 md:w-[13%] md:-translate-y-1/2`}
    >
      <CloudCog
        aria-hidden="true"
        className="h-6 w-6 text-[var(--accent-primary)]"
        strokeWidth={1.5}
      />
      <div>
        <p className="architecture-node-title">AWS</p>
        <p className="architecture-node-copy">Infraestrutura cloud</p>
      </div>
    </div>
  );
}

function ConnectionLayer() {
  return (
    <svg
      aria-hidden="true"
      className="architecture-connections pointer-events-none absolute inset-0 hidden h-full w-full xl:block"
      viewBox="0 0 1000 690"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="architecture-line-v2" x1="0" x2="1">
          <stop offset="0" stopColor="var(--line-muted)" />
          <stop offset="0.42" stopColor="var(--accent-primary)" />
          <stop offset="1" stopColor="var(--line-muted)" />
        </linearGradient>
        <filter id="architecture-line-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="architecture-path-ghost">
        <path d="M226 345 H294" />
        <path d="M546 345 H580 V188 H608" />
        <path d="M546 345 H580 V502 H608" />
        <path d="M546 345 H840" />
        <path d="M806 188 H824 V502 H806" />
      </g>

      <g filter="url(#architecture-line-glow)">
        <path data-architecture-path pathLength="1" d="M226 345 H294" className="architecture-path" />
        <path data-architecture-path pathLength="1" d="M546 345 H580 V188 H608" className="architecture-path" />
        <path data-architecture-path pathLength="1" d="M546 345 H580 V502 H608" className="architecture-path" />
        <path data-architecture-path pathLength="1" d="M546 345 H840" className="architecture-path" />
        <path data-architecture-path pathLength="1" d="M806 188 H824 V502 H806" className="architecture-path architecture-path-secondary" />
      </g>

      <g className="architecture-junctions">
        <circle cx="226" cy="345" r="4" />
        <circle cx="294" cy="345" r="4" />
        <circle cx="580" cy="345" r="4" />
        <circle cx="608" cy="188" r="4" />
        <circle cx="608" cy="502" r="4" />
        <circle cx="824" cy="345" r="4" />
        <circle cx="840" cy="345" r="4" />
      </g>
    </svg>
  );
}

function CompactConnectionLayer() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block xl:hidden"
      viewBox="0 0 760 570"
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <linearGradient id="architecture-line-compact" x1="0" x2="1">
          <stop offset="0" stopColor="var(--line-muted)" />
          <stop offset="0.45" stopColor="var(--accent-primary)" />
          <stop offset="1" stopColor="var(--line-muted)" />
        </linearGradient>
      </defs>
      <path data-architecture-path pathLength="1" d="M146 285 H232" className="architecture-path architecture-path-compact" />
      <path data-architecture-path pathLength="1" d="M382 285 H424 V157 H468" className="architecture-path architecture-path-compact" />
      <path data-architecture-path pathLength="1" d="M382 285 H424 V383 H468" className="architecture-path architecture-path-compact" />
      <path data-architecture-path pathLength="1" d="M596 157 H626 V285 H648" className="architecture-path architecture-path-compact" />
      <path data-architecture-path pathLength="1" d="M596 383 H626 V285 H648" className="architecture-path architecture-path-compact" />
    </svg>
  );
}

export default function HeroArchitectureDiagram() {
  return (
    <div
      data-architecture-shell
      className="hero-architecture relative mx-auto w-full min-w-0 max-w-[860px] overflow-hidden"
      role="img"
      aria-label="Arquitetura de referência conectando clientes a uma API Spring Boot, protegida por Spring Security, com PostgreSQL e infraestrutura AWS"
    >
      <div className="architecture-frame relative min-h-[520px] overflow-hidden rounded-[var(--radius-panel)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-5 shadow-[0_36px_100px_rgba(0,32,96,0.18)] sm:p-7 lg:min-h-[570px] xl:min-h-[640px]">
        <div className="architecture-grid" aria-hidden="true" />
        <div className="architecture-orbit" aria-hidden="true" />
        <ConnectionLayer />
        <CompactConnectionLayer />

        <div className="architecture-node-layer relative z-[1] grid min-h-[470px] grid-cols-1 gap-3 md:block">
          <ClientNode />
          <div className="architecture-mobile-link" aria-hidden="true" />
          <SpringBootNode />
          <div className="architecture-mobile-link" aria-hidden="true" />
          <div className="grid gap-3 sm:grid-cols-2 md:contents">
            <SecurityNode />
            <DatabaseNode />
          </div>
          <div className="architecture-mobile-link" aria-hidden="true" />
          <AwsNode />
        </div>

        <div className="architecture-board-caption">
          <Network aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          Fluxo de uma aplicação backend moderna
        </div>
      </div>
    </div>
  );
}
