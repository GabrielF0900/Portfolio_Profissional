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

export default function ProjectModalMobile({
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
        onOpenAutoFocus={(event) =>
          event.preventDefault()
        }
        className={styles.mobileModal}
      >
        <div className={styles.mobileScroll}>
          <header className={styles.mobileHeader}>
            <ModalBadges project={project} />

            <DialogTitle
              className={styles.mobileTitle}
            >
              {project.title}
            </DialogTitle>

            <DialogDescription
              className={styles.meta}
            >
              <CalendarDays
                size={13}
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
          </header>

          <main className={styles.mobileContent}>
            {project.image && (
              <div className={styles.mobileVisual}>
                <ProjectVisual
                  project={project}
                  onImageClick={() =>
                    setImageModalOpen(true)
                  }
                />
              </div>
            )}

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Layers3 />
                SOBRE O PROJETO
              </h3>

              <p className={styles.description}>
                {project.description}
              </p>
            </section>

            {project.technologies?.length >
              0 && (
              <section className={styles.section}>
                <h3
                  className={
                    styles.sectionTitle
                  }
                >
                  <Layers3 />
                  TECNOLOGIAS
                </h3>

                <ModalTechnologies
                  project={project}
                />
              </section>
            )}

            {project.highlights &&
              project.highlights.length > 0 && (
                <section className={styles.section}>
                  <h3
                    className={
                      styles.sectionTitle
                    }
                  >
                    <Star />
                    DESTAQUES
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

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <Layers3 />
                LINKS
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
          </main>
        </div>
      </DialogContent>
    </Dialog>
  );
}