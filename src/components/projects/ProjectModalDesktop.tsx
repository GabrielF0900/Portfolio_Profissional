"use client";

import { Project } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";
import { ActionButtons, ModalScrollContent, ModalStatusFooter } from "./ModalShared";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setImageModalOpen: (open: boolean) => void;
}

/** Badge com visual de selo: fundo, borda e texto bem definidos em light e dark mode */
function ModalBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-semibold text-slate-800 dark:text-slate-100 ring-0">
      {children}
    </span>
  );
}

export default function ProjectModalDesktop({ project, open, onOpenChange, setImageModalOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl max-h-[85vh] overflow-hidden p-0 flex flex-col rounded-xl border border-border shadow-2xl bg-background">

        {/* Header */}
        <div className="border-b border-border bg-card p-6 md:p-8 pr-16 shrink-0">
          <DialogHeader className="text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

              {/* Bloco de Informações do Projeto */}
              <div className="space-y-3 min-w-0 flex-1">
                {/* Selos de categoria e role */}
                <div className="flex items-center gap-2 flex-wrap">
                  <ModalBadge>{project.category}</ModalBadge>
                  {project.team?.role && (
                    <ModalBadge>{project.team.role}</ModalBadge>
                  )}
                </div>

                <div className="space-y-1.5">
                  <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight text-card-foreground break-words">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                    <span>{formatDate(project.startDate)}</span>
                    <span className="text-muted-foreground/40">•</span>
                    <span>{project.endDate ? formatDate(project.endDate) : "Atual"}</span>
                  </DialogDescription>
                </div>
              </div>

              {/* Botões de Ação */}
              <ActionButtons
                project={project}
                onImageClick={() => setImageModalOpen(true)}
                className="flex flex-row items-center gap-2.5 shrink-0 self-start md:self-center bg-muted p-2 rounded-lg border border-border"
              />

            </div>
          </DialogHeader>
        </div>

        {/* Conteúdo com scroll */}
        <ModalScrollContent
          project={project}
          className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 min-w-0"
        />

        {/* Rodapé de Status */}
        <ModalStatusFooter status={project.status} />

      </DialogContent>
    </Dialog>
  );
}