"use client";

import { Project } from "@/types";
import {
  CalendarDays,
  Layers3,
  Star,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

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

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setImageModalOpen: (open: boolean) => void;
}

export default function ProjectModalDesktop({
  project,
  open,
  onOpenChange,
  setImageModalOpen,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className={styles.modal}
      >
        <div className={styles.desktopShell}>
          {/* LEFT */}
          <aside className={styles.leftColumn}>
            <ModalBadges project={project} />

            <DialogTitle className={styles.title}>
              {project.title}
            </DialogTitle>

            <DialogDescription
              className={styles.meta}
            >
              <CalendarDays
                size={14}
                aria-hidden="true"
              />

              <span>
                {formatDate(project.startDate)}
              </span>

              <span
                className={styles.metaSeparator}
              >
                •
              </span>

              <span>
                {project.endDate
                  ? formatDate(project.endDate)
                  : "Atual"}
              </span>

              <span
                className={styles.statusInline}
              >
                {project.status}
              </span>
            </DialogDescription>

            {/* ABOUT */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Layers3 />
                SOBRE O PROJETO
              </h3>

              <p className={styles.description}>
                {project.description}
              </p>
            </section>

            {/* TECHNOLOGIES */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Layers3 />
                TECNOLOGIAS
              </h3>

              <ModalTechnologies
                project={project}
              />
            </section>

            {/* QUICK LINKS */}
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Layers3 />
                LINKS RÁPIDOS
              </h3>

              <QuickLinks project={project} />

              <TeamInfo project={project} />
            </section>

            <PrimaryActions
              project={project}
              onImageClick={() =>
                setImageModalOpen(true)
              }
            />
          </aside>

          {/* RIGHT */}
          <main className={styles.rightColumn}>
            <ProjectVisual
              project={project}
              onImageClick={() =>
                setImageModalOpen(true)
              }
            />

            {project.highlights &&
              project.highlights.length > 0 && (
                <section className={styles.section}>
                  <h3
                    className={
                      styles.sectionTitle
                    }
                  >
                    <Star />
                    DESTAQUES DO PROJETO
                  </h3>

                  <ProjectHighlights
                    project={project}
                  />
                </section>
              )}

            {project.metrics &&
              project.metrics.length > 0 && (
                <section className={styles.section}>
                  <h3
                    className={
                      styles.sectionTitle
                    }
                  >
                    <Layers3 />
                    MÉTRICAS
                  </h3>

                  <ProjectMetrics
                    project={project}
                  />
                </section>
              )}
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
}