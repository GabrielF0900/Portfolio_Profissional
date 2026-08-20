"use client";

import {
  Boxes,
  Braces,
  Cloud,
  CloudCog,
  Coffee,
  Database,
  Leaf,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { forwardRef, useRef } from "react";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import styles from "./HeroBackendOrbit.module.css";

type TechNodeProps = {
  icon: React.ReactNode;
  label: string;
  compact?: boolean;
};

const TechNode = ({ icon, label, compact = false }: TechNodeProps) => (
  <div
    className={`${styles.techNode} ${compact ? styles.techNodeCompact : ""}`}
    tabIndex={0}
    aria-label={label}
  >
    <span className={styles.techIcon}>{icon}</span>
    <span className={styles.techLabel}>{label}</span>
  </div>
);

const FlowNode = forwardRef<
  HTMLDivElement,
  {
    title: string;
    subtitle: string;
    side?: "left" | "right";
    icon: React.ReactNode;
  }
>(({ title, subtitle, side = "left", icon }, ref) => (
  <div
    ref={ref}
    className={`${styles.flowNode} ${
      side === "right" ? styles.flowNodeRight : styles.flowNodeLeft
    }`}
  >
    <span className={styles.flowIcon}>{icon}</span>
    <span>
      <strong>{title}</strong>
      <small>{subtitle}</small>
    </span>
  </div>
));

FlowNode.displayName = "FlowNode";

export default function HeroBackendOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const awsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.radialGlow} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <span className={styles.systemLabel}>
        BACKEND ECOSYSTEM / JAVA
      </span>

      <FlowNode
        ref={requestRef}
        title="Requests"
        subtitle="Web · Mobile · APIs"
        icon={<Workflow aria-hidden="true" />}
      />

      <FlowNode
        ref={awsRef}
        side="right"
        title="AWS"
        subtitle="Cloud Infrastructure"
        icon={<Cloud aria-hidden="true" />}
      />

      <div className={styles.orbitStage}>
        <div
          className={`${styles.orbitPath} ${styles.orbitPathInner}`}
          aria-hidden="true"
        />
        <div
          className={`${styles.orbitPath} ${styles.orbitPathOuter}`}
          aria-hidden="true"
        />

        <div ref={coreRef} className={styles.core}>
          <div className={styles.coreHalo} aria-hidden="true" />
          <div className={styles.coreRing} aria-hidden="true" />

          <span className={styles.coreEyebrow}>CORE</span>
          <strong>BACKEND</strong>
          <em>JAVA</em>
          <small>Spring Boot</small>
        </div>

        <OrbitingCircles
          radius={142}
          duration={32}
          iconSize={72}
          path={false}
          className={styles.orbitItem}
          style={{ "--radius": "var(--inner-radius)" } as React.CSSProperties}
        >
          <TechNode
            label="Java"
            icon={<Coffee aria-hidden="true" />}
          />
          <TechNode
            label="Spring Boot"
            icon={<Leaf aria-hidden="true" />}
          />
          <TechNode
            label="Spring Security"
            icon={<ShieldCheck aria-hidden="true" />}
          />
          <TechNode
            label="PostgreSQL"
            icon={<Database aria-hidden="true" />}
          />
        </OrbitingCircles>

        <OrbitingCircles
          radius={210}
          duration={40}
          delay={-5}
          reverse
          iconSize={68}
          path={false}
          className={styles.orbitItemOuter}
          style={{ "--radius": "var(--outer-radius)" } as React.CSSProperties}
        >
          <TechNode
            compact
            label="REST APIs"
            icon={<Braces aria-hidden="true" />}
          />
          <TechNode
            compact
            label="Microsserviços"
            icon={<Network aria-hidden="true" />}
          />
          <TechNode
            compact
            label="Spring Cloud"
            icon={<CloudCog aria-hidden="true" />}
          />
          <TechNode
            compact
            label="Docker / Kubernetes"
            icon={<Boxes aria-hidden="true" />}
          />
        </OrbitingCircles>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={requestRef}
        toRef={coreRef}
        duration={3.6}
        repeat={Infinity}
        repeatDelay={0.6}
        pathColor="rgba(45, 102, 185, 0.32)"
        pathWidth={1.5}
        pathOpacity={0.45}
        gradientStartColor="#1d63ff"
        gradientStopColor="#63b3ff"
        curvature={0}
        endXOffset={-92}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={coreRef}
        toRef={awsRef}
        duration={3.6}
        delay={0.45}
        repeat={Infinity}
        repeatDelay={0.5}
        pathColor="rgba(45, 102, 185, 0.3)"
        pathWidth={1.6}
        pathOpacity={0.48}
        gradientStartColor="#347fff"
        gradientStopColor="#9ed4ff"
        curvature={0}
        startXOffset={92}
      />

      <div className={styles.legend} aria-hidden="true">
        <span />
        STACK EM ÓRBITA · FLUXO BACKEND → CLOUD
        <span />
      </div>
    </div>
  );
}
