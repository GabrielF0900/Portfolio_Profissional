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
        
        /* Modificadores exclusivos para <= 376px (iPhone SE, S8+) */
        max-[376px]:h-[92dvh] 
        max-[376px]:max-h-[92dvh] 
        max-[376px]:top-auto 
        max-[376px]:bottom-0 
        max-[376px]:rounded-t-[20px] 
        max-[376px]:border-t 
        max-[376px]:border-slate-200 
        dark:max-[376px]:border-slate-800 
        max-[376px]:shadow-2xl
      ">
        
        {/* 🔥 MÁGICA DO SCROLL LIVRE AQUI: 
          Esta div abraça o Header, o Conteúdo e o Footer.
          Isso faz com que o modal inteiro arraste para cima/baixo livremente!
        */}
        <div className="flex-1 overflow-y-auto w-full flex flex-col touch-pan-y overscroll-contain">

          {/* ================= HEADER (Agora rola junto com a tela) ================= */}
          <div className="
            border-b border-slate-200 dark:border-slate-800 shrink-0 relative
            p-4 pt-12 /* pt-12 afasta o texto do botão X de fechar */
            max-[376px]:p-3 max-[376px]:pt-8
          ">
            
            {/* Barra indicadora de gaveta - Visível APENAS <= 376px */}
            <div className="hidden max-[376px]:block absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />

            {/* Tags / Badges */}
            <div className="
              flex gap-1.5 mb-2 flex-wrap
              max-[376px]:mb-1.5 max-[376px]:gap-1 max-[376px]:flex-nowrap max-[376px]:overflow-x-auto max-[376px]:pb-1
              [&::-webkit-scrollbar]:hidden
            ">
              <Badge variant="outline" className="text-[10px] px-2 py-0 shrink-0 whitespace-nowrap max-[376px]:text-[8px] max-[376px]:px-1.5 max-[376px]:h-4 max-[376px]:leading-none flex items-center">
                {project.category}
              </Badge>
              {project.team?.role && (
                <Badge variant="outline" className="text-[10px] px-2 py-0 shrink-0 whitespace-nowrap max-[376px]:text-[8px] max-[376px]:px-1.5 max-[376px]:h-4 max-[376px]:leading-none flex items-center">
                  {project.team.role}
                </Badge>
              )}
            </div>

            {/* Título */}
            <DialogTitle className="
              text-base font-bold leading-snug break-words 
              max-[376px]:text-[13px] max-[376px]:leading-tight max-[376px]:line-clamp-2
            ">
              {project.title}
            </DialogTitle>
            
            {/* Data */}
            <DialogDescription className="text-[11px] mb-2 max-[376px]:text-[9px] max-[376px]:mb-1.5">
              {formatDate(project.startDate)} - {formatDate(project.endDate)}
            </DialogDescription>

            {/* Botões de Ação */}
            <div className="pt-2 max-[376px]:pt-1.5 border-t border-slate-100 dark:border-slate-800">
              <ActionButtons
                project={project}
                onImageClick={() => setImageModalOpen(true)}
                className="max-[376px]:gap-1 max-[376px]:flex-nowrap max-[376px]:overflow-x-auto max-[376px]:pb-1 [&::-webkit-scrollbar]:hidden" 
              />
            </div>
          </div>

          {/* ================= CONTEÚDO SCROLLÁVEL ================= */}
          {/* shrink-0 garante que ele expanda livremente no mobile */}
          <div className="w-full shrink-0">
            <ModalScrollContent project={project} />
          </div>

          {/* ================= FOOTER ================= */}
          {/* mt-auto empurra o footer para o final da rolagem */}
          <div className="mt-auto shrink-0">
            <ModalStatusFooter status={project.status} />
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}