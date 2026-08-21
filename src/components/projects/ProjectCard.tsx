"use client";

import { Project } from "@/types";
import { ArrowRight, Github, Cloud, Boxes, Braces, Layers3, FolderGit2 } from "lucide-react";
import { event } from "@/lib/gtag";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onMoreInfo: (project: Project) => void;
}

function getProjectIcon(project: Project) {
  const category = (project.category || "").toLowerCase();
  
  if (category.includes("cloud") || category.includes("infrastructure")) {
    return <Cloud aria-hidden="true" />;
  }
  if (category.includes("devops")) {
    return <Boxes aria-hidden="true" />;
  }
  if (category.includes("backend")) {
    return <Braces aria-hidden="true" />;
  }
  if (category.includes("full stack")) {
    return <Layers3 aria-hidden="true" />;
  }
  
  return <FolderGit2 aria-hidden="true" />;
}

export default function ProjectCard({ project, onMoreInfo }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 3);
  const remaining = project.technologies.length - visibleTechnologies.length;

  return (
    <article className={styles.card}>
      <header className={styles.cardTopline}>
        <span className={styles.projectId}>
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>

        <span className={styles.status}>
          <span
            className={styles.statusDot}
            style={
              project.status === "Em Breve"
                ? {
                    background: "#d59628",
                    boxShadow: "0 0 7px rgba(213, 150, 40, 0.55)",
                  }
                : undefined
            }
          />
          {project.status}
        </span>
      </header>

      <div className={styles.cardIcon}>{getProjectIcon(project)}</div>

      <div className={styles.cardMeta}>
        <span>{project.category}</span>
        
        {project.team && (project.team.size ?? 0) > 1 && (
          <>
            <span>•</span>
            <span>{project.team.name === "Neukox" ? "NEUKOX" : "EQUIPE"}</span>
          </>
        )}

        {project.featured && (
          <>
            <span>•</span>
            <span style={{ color: "var(--projects-blue)" }}>DESTAQUE</span>
          </>
        )}
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>

      <p className={styles.cardDescription}>{project.description}</p>

      <div className={styles.technologies}>
        {visibleTechnologies.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
        {remaining > 0 && (
          <span className={`${styles.tech} ${styles.techMore}`}>
            +{remaining}
          </span>
        )}
      </div>

      <footer className={styles.cardFooter}>
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            onClick={(e) => {
              e.stopPropagation();
              event("clique_ver_codigo", { projeto: project.title });
            }}
            aria-label="Ver código fonte no GitHub"
          >
            <Github aria-hidden="true" />
          </a>
        ) : (
          <div /> // Placeholder to keep flex space-between correct if no github link
        )}

        <button
          type="button"
          className={styles.detailsButton}
          onClick={() => onMoreInfo(project)}
        >
          Ver detalhes
          <ArrowRight aria-hidden="true" />
        </button>
      </footer>
    </article>
  );
}
