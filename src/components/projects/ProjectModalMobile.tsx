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
      <DialogContent className="w-full max-w-full h-[100dvh] max-h-[100dvh] top-0 left-0 translate-x-0 translate-y-0 p-0 flex flex-col rounded-none border-0 overflow-hidden bg-white dark:bg-slate-950 m-0">
        <div className="border-b border-slate-200 dark:border-slate-800 p-4 shrink-0 mt-10">
          <div className="flex gap-1.5 flex-wrap mb-2">
            <Badge variant="outline" className="text-[10px] px-2 py-0">
              {project.category}
            </Badge>
            {project.team?.role && (
              <Badge variant="outline" className="text-[10px] px-2 py-0">
                {project.team.role}
              </Badge>
            )}
          </div>
          <DialogTitle className="text-base font-bold leading-snug break-words">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-[11px] mb-2">
            {formatDate(project.startDate)} - {formatDate(project.endDate)}
          </DialogDescription>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <ActionButtons
              project={project}
              onImageClick={() => setImageModalOpen(true)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 w-full">
          <ModalScrollContent project={project} />
        </div>

        <ModalStatusFooter status={project.status} />
      </DialogContent>
    </Dialog>
  );
}
