"use client";

import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Download, Image } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useState } from "react";
import { ProjectImageModal } from "@/components/projects-modal/ProjectImageModal";
import { TechnologiesPopover } from "@/components/projects-modal/TechnologiesPopover";
import { MetricsDisplay } from "@/components/projects-modal/MetricsDisplay";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  if (!project) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] overflow-hidden p-0 flex flex-col">
          {/* Header - Sticky */}
          <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4">
            <DialogHeader className="mb-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                <div className="flex-1">
                  <div className="flex gap-1.5 mb-1 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.team && project.team.role && (
                      <Badge variant="outline" className="text-xs">
                        {project.team.role}
                      </Badge>
                    )}
                  </div>
                  <DialogTitle className="text-lg sm:text-xl">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="mt-0.5 text-xs">
                    {formatDate(project.startDate)} -{" "}
                    {formatDate(project.endDate)}
                  </DialogDescription>
                </div>
                <div className="flex flex-row sm:flex-col gap-1 flex-wrap">
                  {project.image && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setImageModalOpen(true)}
                      className="flex items-center gap-1"
                      title="Ver Imagem"
                    >
                      <Image className="w-4 h-4" />
                      <span className="hidden sm:inline text-xs">
                        Ver Imagem
                      </span>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Ver Código"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.video && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Vídeo do sistema"
                      >
                        <Youtube className="h-4 w-4 text-red-600" />
                      </a>
                    </Button>
                  )}
                  {project.links.presentation && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.links.presentation}
                        download
                        title="Baixar Apresentação"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogHeader>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0 p-3 sm:p-4 space-y-4">
            {/* Descrição */}
            <div>
              <h3 className="font-semibold mb-1 text-xs uppercase text-muted-foreground">
                Sobre
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Métricas */}
            {project.metrics && <MetricsDisplay metrics={project.metrics} />}

            {/* Stack - Apenas 3 tecnologias */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-xs uppercase text-muted-foreground">
                  Tecnologias
                </h3>
                <TechnologiesPopover technologies={project.technologies} />
              </div>
            )}

            {/* Destaques */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-xs uppercase text-muted-foreground">
                  Destaques
                </h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-0.5 h-0.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Equipe */}
            {project.team && (
              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase text-muted-foreground">
                  Equipe
                </h3>
                <p className="text-xs text-muted-foreground">
                  {project.team.description}
                </p>
              </div>
            )}
          </div>

          {/* Status footer - Sticky */}
          <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4">
            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800 text-xs">
              ✓ {project.status}
            </Badge>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de Imagem - Sobreposto */}
      {project.image && (
        <ProjectImageModal
          imageUrl={project.image}
          imageAlt={project.title}
          open={imageModalOpen}
          onClose={() => setImageModalOpen(false)}
        />
      )}
    </>
  );
}
