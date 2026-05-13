"use client";

import { Project } from "@/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
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
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="
          fixed
          inset-0
          z-50

          w-screen
          h-[100dvh]

          max-w-none
          max-h-none

          p-0
          m-0

          border-0
          rounded-none

          bg-white
          dark:bg-slate-950

          flex
          flex-col

          overflow-hidden

          left-0
          top-0

          translate-x-0
          translate-y-0

          data-[state=open]:animate-in
          data-[state=closed]:animate-out

          max-[376px]:h-[92dvh]
          max-[376px]:mt-auto
          max-[376px]:rounded-t-[20px]
          max-[376px]:border-t
          max-[376px]:border-slate-200
          dark:max-[376px]:border-slate-800
        "
      >
        {/* ÁREA SCROLLÁVEL */}
        <div
          className="
            flex-1
            overflow-y-scroll
            overflow-x-hidden

            touch-auto
            overscroll-y-contain

            [scrollbar-width:none]
            [-ms-overflow-style:none]

            [&::-webkit-scrollbar]:hidden
          "
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "auto",
          }}
        >
          {/* HEADER */}
          <div
            className="
              border-b
              border-slate-200
              dark:border-slate-800

              relative
              shrink-0

              p-4
              pt-12

              max-[376px]:p-3
              max-[376px]:pt-8
            "
          >
            {/* Indicador mobile */}
            <div
              className="
                hidden
                max-[376px]:block

                absolute
                top-2
                left-1/2
                -translate-x-1/2

                w-10
                h-1

                rounded-full

                bg-slate-200
                dark:bg-slate-700
              "
            />

            {/* TAGS */}
            <div
              className="
                flex
                gap-1.5
                mb-2
                flex-wrap

                max-[376px]:flex-nowrap
                max-[376px]:overflow-x-auto
                max-[376px]:pb-1

                [&::-webkit-scrollbar]:hidden
              "
            >
              <Badge variant="outline">
                {project.category}
              </Badge>

              {project.team?.role && (
                <Badge variant="outline">
                  {project.team.role}
                </Badge>
              )}
            </div>

            {/* TÍTULO */}
            <DialogTitle
              className="
                text-base
                font-bold
                leading-snug
                break-words

                max-[376px]:text-[13px]
                max-[376px]:leading-tight
              "
            >
              {project.title}
            </DialogTitle>

            {/* DATA */}
            <DialogDescription
              className="
                text-[11px]
                mb-2

                max-[376px]:text-[9px]
              "
            >
              {formatDate(project.startDate)} -{" "}
              {formatDate(project.endDate)}
            </DialogDescription>

            {/* BOTÕES */}
            <div
              className="
                pt-2

                border-t
                border-slate-100
                dark:border-slate-800
              "
            >
              <ActionButtons
                project={project}
                onImageClick={() => setImageModalOpen(true)}
                className="
                  max-[376px]:flex-nowrap
                  max-[376px]:overflow-x-auto
                  max-[376px]:pb-1

                  [&::-webkit-scrollbar]:hidden
                "
              />
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="w-full">
            <ModalScrollContent project={project} />
          </div>

          {/* FOOTER */}
          <div className="shrink-0">
            <ModalStatusFooter status={project.status} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}