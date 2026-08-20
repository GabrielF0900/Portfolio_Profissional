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
  "architecture-node group relative flex min-h-24 flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border p-4 outline-none transition-[border-color,background-color,transform,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)]";

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

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          width="100%"
          height="100%"
          viewBox="0 0 760 570"
          preserveAspectRatio="none"
          fill="none"
          style={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <defs>
            <linearGradient id="architecture-line" x1="0" x2="1">
              <stop offset="0" stopColor="var(--line-muted)" />
              <stop offset="0.45" stopColor="var(--accent-primary)" />
              <stop offset="1" stopColor="var(--line-muted)" />
            </linearGradient>
          </defs>
          <path data-architecture-path pathLength="1" d="M146 285 H232" className="architecture-path" fill="none" stroke="url(#architecture-line)" strokeWidth="1.5" />
          <path data-architecture-path pathLength="1" d="M382 285 H424 V157 H468" className="architecture-path" fill="none" stroke="url(#architecture-line)" strokeWidth="1.5" />
          <path data-architecture-path pathLength="1" d="M382 285 H424 V383 H468" className="architecture-path" fill="none" stroke="url(#architecture-line)" strokeWidth="1.5" />
          <path data-architecture-path pathLength="1" d="M596 157 H626 V285 H648" className="architecture-path" fill="none" stroke="url(#architecture-line)" strokeWidth="1.5" />
          <path data-architecture-path pathLength="1" d="M596 383 H626 V285 H648" className="architecture-path" fill="none" stroke="url(#architecture-line)" strokeWidth="1.5" />
        </svg>

        <div className="relative z-[1] grid min-h-[470px] grid-cols-1 gap-3 md:block">
          <div data-architecture-node tabIndex={0} className={`${nodeBase} md:absolute md:left-[2%] md:top-1/2 md:w-[17%] md:-translate-y-1/2`}>
            <div className="flex items-center justify-between text-[var(--accent-primary)]">
              <Globe2 aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
              <Smartphone aria-hidden="true" className="h-4 w-4 text-[var(--text-muted)]" strokeWidth={1.6} />
            </div>
            <div>
              <p className="architecture-node-title">Clientes</p>
              <p className="architecture-node-copy">Web, mobile e serviços</p>
            </div>
          </div>

          <div className="architecture-mobile-link" aria-hidden="true" />

          <div data-architecture-node tabIndex={0} className={`${nodeBase} architecture-node-core md:absolute md:left-[30%] md:top-1/2 md:min-h-48 md:w-[20%] md:-translate-y-1/2`}>
            <div className="architecture-core-icon">
              <Server aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div>
              <p className="architecture-node-title text-base">API</p>
              <p className="architecture-node-copy">Spring Boot</p>
            </div>
          </div>

          <div className="architecture-mobile-link" aria-hidden="true" />

          <div className="grid gap-3 sm:grid-cols-2 md:contents">
            <div data-architecture-node tabIndex={0} className={`${nodeBase} md:absolute md:left-[61%] md:top-[17%] md:w-[18%]`}>
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[var(--accent-primary)]" strokeWidth={1.6} />
              <div>
                <p className="architecture-node-title">Segurança</p>
                <p className="architecture-node-copy">Spring Security</p>
              </div>
            </div>

            <div data-architecture-node tabIndex={0} className={`${nodeBase} md:absolute md:bottom-[17%] md:left-[61%] md:w-[18%]`}>
              <Database aria-hidden="true" className="h-5 w-5 text-[var(--accent-primary)]" strokeWidth={1.6} />
              <div>
                <p className="architecture-node-title">Dados</p>
                <p className="architecture-node-copy">PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="architecture-mobile-link" aria-hidden="true" />

          <div data-architecture-node tabIndex={0} className={`${nodeBase} architecture-node-cloud md:absolute md:right-[2%] md:top-1/2 md:min-h-48 md:w-[13%] md:-translate-y-1/2`}>
            <CloudCog aria-hidden="true" className="h-6 w-6 text-[var(--accent-primary)]" strokeWidth={1.5} />
            <div>
              <p className="architecture-node-title">AWS</p>
              <p className="architecture-node-copy">Infraestrutura cloud</p>
            </div>
          </div>
        </div>

        <div data-architecture-signal aria-hidden="true" className="architecture-signal left-[19.8%] top-1/2 hidden md:block" />
        <div data-architecture-signal aria-hidden="true" className="architecture-signal left-[55.4%] top-[27.5%] hidden md:block" />
        <div data-architecture-signal aria-hidden="true" className="architecture-signal bottom-[27%] left-[55.4%] hidden md:block" />

        <div className="pointer-events-none absolute bottom-5 left-5 z-[2] hidden items-center gap-2 text-xs text-[var(--text-muted)] sm:flex">
          <Network aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
          Fluxo de uma aplicação backend moderna
        </div>
      </div>
    </div>
  );
}
