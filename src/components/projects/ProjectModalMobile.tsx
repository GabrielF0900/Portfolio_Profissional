"use client";

import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";
import {
  ActionButtons,
  ModalScrollContent,
  ModalStatusFooter,
} from "./ModalShared";

/**
 * CSS Classes Constants
 * Organização centralizada de estilos para melhor manutenção
 */
const STYLES = {
  dialogContent: `
    fixed inset-0 z-50 w-screen h-[100dvh]
    max-w-none max-h-none p-0 m-0 border-0 rounded-none
    bg-background
    flex flex-col overflow-hidden left-0 top-0
    translate-x-0 translate-y-0
    data-[state=open]:animate-in data-[state=closed]:animate-out
    max-[376px]:h-[92dvh] max-[376px]:mt-auto
    max-[376px]:rounded-t-[20px] max-[376px]:border-t
    max-[376px]:border-border
  `,
  scrollContainer: `
    flex-1 overflow-y-scroll overflow-x-hidden
    touch-auto overscroll-y-contain
    [scrollbar-width:none] [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
  `,
  header: `
    border-b border-border
    bg-card
    relative shrink-0 p-4 pt-12
    max-[376px]:p-3 max-[376px]:pt-8
  `,
  headerIndicator: `
    hidden max-[376px]:block
    absolute top-2 left-1/2 -translate-x-1/2
    w-10 h-1 rounded-full
    bg-slate-200 dark:bg-slate-700
  `,
  tagContainer: `
    flex gap-1.5 mb-2 flex-wrap
    max-[376px]:flex-nowrap max-[376px]:overflow-x-auto max-[376px]:pb-1
    [&::-webkit-scrollbar]:hidden
  `,
  title: `
    text-base font-bold leading-snug break-words
    max-[376px]:text-[13px] max-[376px]:leading-tight
  `,
  description: `
    text-[11px] mb-2
    max-[376px]:text-[9px]
  `,
  buttonContainer: `
    pt-2 border-t border-border
  `,
  footer: "shrink-0",
} as const;

interface ProjectModalMobileProps {
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
}: ProjectModalMobileProps) {
  const handleImageClick = () => setImageModalOpen(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={STYLES.dialogContent}
      >
        {/* SCROLL CONTAINER */}
        <ScrollableContent>
          {/* HEADER */}
          <MobileModalHeader
            project={project}
            onImageClick={handleImageClick}
          />

          {/* BODY */}
          <div className="w-full">
            <ModalScrollContent project={project} />
          </div>

          {/* FOOTER */}
          <div className={STYLES.footer}>
            <ModalStatusFooter status={project.status} />
          </div>
        </ScrollableContent>
      </DialogContent>
    </Dialog>
  );
}

/**
 * ScrollableContent
 * Componente responsável por gerenciar a scrollagem
 */
function ScrollableContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={STYLES.scrollContainer}
      style={{
        WebkitOverflowScrolling: "touch",
        touchAction: "auto",
      }}
    >
      {children}
    </div>
  );
}

/**
 * MobileModalHeader
 */
function MobileModalHeader({
  project,
  onImageClick,
}: {
  project: Project;
  onImageClick: () => void;
}) {
  return (
    <div className={STYLES.header}>
      {/* Indicador visual para dispositivos muito pequenos */}
      <MobileIndicator />

      {/* Tags de categoria */}
      <TagContainer project={project} />

      {/* Título */}
      <DialogTitle className={`${STYLES.title} text-card-foreground`}>
        {project.title}
      </DialogTitle>

      {/* Data */}
      <DialogDescription className={STYLES.description}>
        {formatDate(project.startDate)} — {formatDate(project.endDate)}
      </DialogDescription>

      {/* Botões de ação */}
      <div className={STYLES.buttonContainer}>
        <ActionButtons
          project={project}
          onImageClick={onImageClick}
          className="
            max-[376px]:flex-nowrap
            max-[376px]:overflow-x-auto
            max-[376px]:pb-1
            [&::-webkit-scrollbar]:hidden
          "
        />
      </div>
    </div>
  );
}

/**
 * MobileIndicator
 */
function MobileIndicator() {
  return <div className={STYLES.headerIndicator} />;
}

/**
 * TagContainer — Selos com visual real de badge: borda, fundo e texto legível em light e dark mode
 */
function TagContainer({ project }: { project: Project }) {
  return (
    <div className={STYLES.tagContainer}>
      <span className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-100">
        {project.category}
      </span>

      {project.team?.role && (
        <span className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-100">
          {project.team.role}
        </span>
      )}
    </div>
  );
}
