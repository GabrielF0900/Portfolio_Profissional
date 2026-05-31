"use client";

import { Project } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ActionButtons, ModalScrollContent, ModalStatusFooter } from "./ModalShared";

interface Props {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setImageModalOpen: (open: boolean) => void;
}

export default function ProjectModalDesktop({ project, open, onOpenChange, setImageModalOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl max-h-[85vh] overflow-hidden p-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
        
        {/* Header com padding expandido e margem de segurança à direita (pr-16) para o botão X */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 md:p-8 pr-16 shrink-0">
          <DialogHeader className="text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Bloco de Informações do Projeto */}
              <div className="space-y-3 min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge 
                    variant="secondary" 
                    className="text-xs font-semibold px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                  >
                    {project.category}
                  </Badge>
                  {project.team?.role && (
                    <Badge 
                      variant="outline" 
                      className="text-xs px-2.5 py-0.5 border-slate-300 dark:border-slate-700 text-muted-foreground"
                    >
                      {project.team.role}
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-1.5">
                  <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 break-words">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                    <span>{formatDate(project.startDate)}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{project.endDate ? formatDate(project.endDate) : "Atual"}</span>
                  </DialogDescription>
                </div>
              </div>

              {/* Botões de Ação reposicionados em linha horizontal, sem colisões */}
              <ActionButtons
                project={project}
                onImageClick={() => setImageModalOpen(true)}
                className="flex flex-row items-center gap-2.5 shrink-0 self-start md:self-center bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-100 dark:border-slate-800/60"
              />
              
            </div>
          </DialogHeader>
        </div>

        {/* Conteúdo dinâmico com scroll isolado */}
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