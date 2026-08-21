"use client";

import { useState } from "react";

import { Project } from "@/types";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Layers3,
  Presentation,
  Star,
  Youtube,
} from "lucide-react";

import { event } from "@/lib/gtag";

import styles from "./ProjectModal.module.css";

export function ModalBadges({
  project,
}: {
  project: Project;
}) {
  return (
    <div className={styles.badges}>
      <span className={styles.badge}>
        {project.category}
      </span>

      {project.team?.role && (
        <span className={styles.badge}>
          {project.team.role}
        </span>
      )}
    </div>
  );
}

export function ModalTechnologies({
  project,
}: {
  project: Project;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!project.technologies?.length) return null;

  const DEFAULT_VISIBLE_COUNT = 8;
  
  const technologiesToShow = expanded
    ? project.technologies
    : project.technologies.slice(
        0,
        DEFAULT_VISIBLE_COUNT
      );

  const hiddenCount =
    project.technologies.length -
    DEFAULT_VISIBLE_COUNT;

  return (
    <div className={styles.technologies}>
      {technologiesToShow.map((technology) => (
        <span
          key={technology}
          className={styles.tech}
        >
          {technology}
        </span>
      ))}

      {hiddenCount > 0 && (
        <button
          type="button"
          className={styles.techToggle}
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp aria-hidden="true" />
              RECOLHER
            </>
          ) : (
            <>
              +{hiddenCount}
              <ChevronDown aria-hidden="true" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

export function ProjectVisual({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: () => void;
}) {
  if (!project.image) return null;

  return (
    <button
      type="button"
      className={styles.projectVisual}
      onClick={onImageClick}
      aria-label={`Ampliar imagem do projeto ${project.title}`}
    >
      <div
        className={styles.imageChrome}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />

        <small>
          PROJECT / {String(project.id).padStart(2, "0")}
        </small>
      </div>

      <div className={styles.imageViewport}>
        <img
          src={project.image}
          alt={`Visual do projeto ${project.title}`}
          onError={(event) => {
            event.currentTarget.src =
              "/placeholder.svg";
          }}
        />
      </div>
    </button>
  );
}

export function ProjectHighlights({
  project,
}: {
  project: Project;
}) {
  if (!project.highlights?.length) return null;

  return (
    <div className={styles.highlightsGrid}>
      {project.highlights
        .slice(0, 6)
        .map((highlight, index) => (
          <article
            key={`${highlight}-${index}`}
            className={styles.highlight}
          >
            <span className={styles.highlightIndex}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{highlight}</p>
          </article>
        ))}
    </div>
  );
}

export function ProjectMetrics({
  project,
}: {
  project: Project;
}) {
  if (!project.metrics?.length) return null;

  return (
    <div className={styles.metricsGrid}>
      {project.metrics.map((metric) => (
        <article
          key={`${metric.label}-${metric.value}`}
          className={styles.metric}
        >
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
    </div>
  );
}

export function QuickLinks({
  project,
}: {
  project: Project;
}) {
  const hasAnyLink =
    project.links.github ||
    project.links.demo ||
    project.links.video ||
    project.links.presentation ||
    project.links.case_study;

  if (!hasAnyLink) return null;

  return (
    <div className={styles.quickLinks}>
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.quickLink}
          onClick={() =>
            event("clique_ver_codigo", {
              projeto: project.title,
            })
          }
        >
          <Github />
          <span>GitHub</span>
          <ArrowUpRight className={styles.quickLinkArrow} />
        </a>
      )}

      {project.links.demo && (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.quickLink}
        >
          <ExternalLink />
          <span>Demo</span>
          <ArrowUpRight className={styles.quickLinkArrow} />
        </a>
      )}

      {project.links.video && (
        <a
          href={project.links.video}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.quickLink}
        >
          <Youtube />
          <span>Vídeo</span>
          <ArrowUpRight className={styles.quickLinkArrow} />
        </a>
      )}

      {project.links.presentation && (
        <a
          href={project.links.presentation}
          className={styles.quickLink}
          download
        >
          <Presentation />
          <span>Apresentação</span>
          <Download className={styles.quickLinkArrow} />
        </a>
      )}

      {project.links.case_study &&
        project.links.case_study !== "#" && (
          <a
            href={project.links.case_study}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLink}
          >
            <Layers3 />
            <span>Case Study</span>
            <ArrowUpRight className={styles.quickLinkArrow} />
          </a>
        )}
    </div>
  );
}

export function PrimaryActions({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: () => void;
}) {
  return (
    <div className={styles.actionBar}>
      {project.image && (
        <button
          type="button"
          onClick={onImageClick}
          className={styles.actionSecondary}
        >
          <ImageIcon />
          Ver imagem
        </button>
      )}

      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.actionPrimary}
          onClick={() =>
            event("clique_ver_codigo", {
              projeto: project.title,
            })
          }
        >
          <Github />
          GitHub
          <ArrowUpRight />
        </a>
      )}
    </div>
  );
}

export function TeamInfo({
  project,
}: {
  project: Project;
}) {
  if (!project.team) return null;

  return (
    <p className={styles.team}>
      {project.team.description}
    </p>
  );
}

/*
 * Mantidos apenas para compatibilidade temporária.
 * ProjectModalDesktop/Mobile novos não dependem mais
 * destes componentes antigos.
 */
export function ActionButtons() {
  return null;
}

export function ModalScrollContent() {
  return null;
}

export function ModalStatusFooter() {
  return null;
}