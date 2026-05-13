"use client";

import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import {
  ActionButtons,
  ModalScrollContent,
  ModalStatusFooter,
} from "./ModalShared";

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="
        w-full max-w-full h-[100dvh] max-h-[100dvh] top-0 left-0 translate-x-0 translate-y-0 p-0 flex flex-col rounded-none border-0 overflow-hidden bg-white dark:bg-slate-950 m-0
        /* MODIFICADORES ISOLADOS: Somente para telas <= 390px (iPhone 12 Pro, SE, S8+) */
        max-[390px]:h-[82dvh] max-[390px]:max-h-[82dvh] max-[390px]:top-auto max-[390px]:bottom-0 max-[390px]:rounded-t-[20px] max-[390px]:border-t max-[390px]:border-slate-200 dark:max-[390px]:border-slate-800 max-[390px]:shadow-2xl
      ">
        
        <div className="
          border-b border-slate-200 dark:border-slate-800 shrink-0
          p-4 mt-10
          /* Ajustes de header isolados para <= 390px: Remove o mt-10, diminui padding lateral e vertical */
          max-[390px]:mt-0 max-[390px]:p-3 max-[390px]:pt-5 relative
        ">
          
          {/* Pill superior (Barra indicadora de gaveta) - Visível apenas <= 390px */}
          <div className="hidden max-[390px]:block absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />

          {/* Container de Badges: Diminui gap e margem inferior nos aparelhos alvo */}
          <div className="flex gap-1.5 flex-wrap mb-2 max-[390px]:mb-1.5 max-[390px]:gap-1">
            <Badge
              variant="outline"
              className="text-[10px] px-2 py-0 max-[390px]:text-[8px] max-[390px]:px-1.5 max-[390px]:h-4 max-[390px]:leading-none flex items-center"
            >
              {project.category}
            </Badge>
            {project.team?.role && (
              <Badge
                variant="outline"
                className="text-[10px] px-2 py-0 max-[390px]:text-[8px] max-[390px]:px-1.5 max-[390px]:h-4 max-[390px]:leading-none flex items-center"
              >
                {project.team.role}
              </Badge>
            )}
          </div>

          {/* Título: Fica um pouco menor e com entrelinha mais justa nos aparelhos alvo */}
          <DialogTitle className="text-base font-bold leading-snug break-words max-[390px]:text-[13px] max-[390px]:leading-tight">
            {project.title}
          </DialogTitle>
          
          {/* Data: Reduzida no limite da legibilidade para salvar espaço vertical */}
          <DialogDescription className="text-[11px] mb-2 max-[390px]:text-[9px] max-[390px]:mb-1.5">
            {formatDate(project.startDate)} - {formatDate(project.endDate)}
          </DialogDescription>

          <div className="pt-2 max-[390px]:pt-1.5 border-t border-slate-100 dark:border-slate-800">
            <ActionButtons
              project={project}
              onImageClick={() => setImageModalOpen(true)}
              className="max-[390px]:gap-0.5" 
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 w-full">
          <ModalScrollContent project={project} />
        </div>

        {/* O Footer original continua igual, pois sua altura é aceitável na maioria das proporções */}
        <ModalStatusFooter status={project.status} />
      </DialogContent>
    </Dialog>
  );
}