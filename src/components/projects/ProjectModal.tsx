"use client";

import { Project } from "@/types";
import { useState } from "react";
import { CalendarDays, Layers3, Star } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";

import {
  ModalBadges,
  ModalTechnologies,
  PrimaryActions,
  ProjectHighlights,
  ProjectMetrics,
  ProjectVisual,
  QuickLinks,
  TeamInfo,
} from "./ModalShared";

import styles from "./ProjectModal.module.css";
import { ProjectImageModal } from "./ProjectImageModal";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  if (!project) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={styles.modal}>
          <div className={styles.scrollContainer}>
            {/* LEFT COLUMN / MOBILE CONTENT MIX */}
            <aside className={styles.leftColumn}>
              <header className={styles.header}>
                <ModalBadges project={project} />

                <DialogTitle className={styles.title}>
                  {project.title}
                </DialogTitle>

                <DialogDescription className={styles.meta}>
                  <CalendarDays size={14} aria-hidden="true" />
                  <span>{formatDate(project.startDate)}</span>
                  <span className={styles.metaSeparator}>•</span>
                  <span>{project.endDate ? formatDate(project.endDate) : "Atual"}</span>
                  <span className={styles.statusInline}>{project.status}</span>
                </DialogDescription>
              </header>

              <section className={`${styles.section} ${styles.sectionAbout}`}>
                <h3 className={styles.sectionTitle}>
                  <Layers3 />
                  SOBRE O PROJETO
                </h3>
                <p className={styles.description}>
                  {project.description}
                </p>
              </section>

              {project.technologies && project.technologies.length > 0 && (
                <section className={`${styles.section} ${styles.sectionTech}`}>
                  <h3 className={styles.sectionTitle}>
                    <Layers3 />
                    TECNOLOGIAS
                  </h3>
                  <ModalTechnologies project={project} />
                </section>
              )}

              <section className={`${styles.section} ${styles.sectionLinks}`}>
                <h3 className={styles.sectionTitle}>
                  <Layers3 />
                  LINKS
                </h3>
                <QuickLinks project={project} />
                <TeamInfo project={project} />
              </section>

              <div className={styles.sectionActions}>
                <PrimaryActions
                  project={project}
                  onImageClick={() => setImageModalOpen(true)}
                />
              </div>
            </aside>

            {/* RIGHT COLUMN / MOBILE VISUAL & METRICS */}
            <main className={styles.rightColumn}>
              <div className={styles.sectionVisual}>
                <ProjectVisual
                  project={project}
                  onImageClick={() => setImageModalOpen(true)}
                />
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <section className={`${styles.section} ${styles.sectionHighlights}`}>
                  <h3 className={styles.sectionTitle}>
                    <Star />
                    DESTAQUES
                  </h3>
                  <ProjectHighlights project={project} />
                </section>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <section className={`${styles.section} ${styles.sectionMetrics}`}>
                  <h3 className={styles.sectionTitle}>
                    <Layers3 />
                    MÉTRICAS
                  </h3>
                  <ProjectMetrics project={project} />
                </section>
              )}
            </main>
          </div>
        </DialogContent>
      </Dialog>

      {project.image && (
        <ProjectImageModal
          imageUrl={project.image}
          imageAlt={project.title}
          open={imageModalOpen}
          onClose={() => setImageModalOpen(false)}
        />
      )}
    </>
  );
}