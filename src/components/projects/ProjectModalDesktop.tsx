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
      {/* Container simples, pois não precisamos mais brigar com o mobile */}
      <DialogContent className="w-full max-w-4xl max-h-[85vh] overflow-hidden p-0 flex flex-col rounded-xl">
        
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 shrink-0">
          <DialogHeader className="mb-0 text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex gap-1.5 flex-wrap">
                  <Badge variant="outline" className="text-xs px-2 py-0.5">{project.category}</Badge>
                  {project.team?.role && (
                    <Badge variant="outline" className="text-xs px-2 py-0.5">{project.team.role}</Badge>
                  )}
                </div>
                <DialogTitle className="text-xl font-bold leading-tight break-words">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-sm">
                  {formatDate(project.startDate)} - {formatDate(project.endDate)}
                </DialogDescription>
              </div>

              <ActionButtons
                project={project}
                onImageClick={() => setImageModalOpen(true)}
                className="flex-col items-end gap-1.5 shrink-0"
              />
            </div>
          </DialogHeader>
        </div>

        <ModalScrollContent project={project} />
        <ModalStatusFooter status={project.status} />

      </DialogContent>
    </Dialog>
  );
}