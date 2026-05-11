"use client";

import { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Download, X } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

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
  const [techOpen, setTechOpen] = useState(false);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[98vw] h-[40vh] overflow-hidden p-0 flex flex-col">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header - Sticky */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4">
          <DialogHeader className="pr-8 mb-0">
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
              <div className="flex flex-row sm:flex-col gap-1.5 flex-wrap sm:flex-nowrap">
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
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Coluna esquerda - Imagem */}
            {project.image && (
              <div className="aspect-video sm:aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Coluna direita - Informações */}
            <div className="space-y-1.5">
              {/* Descrição completa */}
              <div>
                <h3 className="font-semibold mb-1 text-xs uppercase text-muted-foreground">
                  Sobre
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Destaques */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-1 text-xs uppercase text-muted-foreground">
                    Destaques
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-0.5 h-0.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tecnologias */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="font-semibold mb-1 text-xs uppercase text-muted-foreground">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <div
                        onMouseEnter={() => setTechOpen(true)}
                        onMouseLeave={() => setTechOpen(false)}
                      >
                        <Popover open={techOpen} onOpenChange={setTechOpen}>
                          <PopoverTrigger asChild>
                            <Badge
                              variant="outline"
                              className="text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                              +{project.technologies.length - 5}
                            </Badge>
                          </PopoverTrigger>
                          <PopoverContent className="w-48 p-2">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Info da equipe se houver */}
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
          </div>
        </div>

        {/* Status footer - Sticky */}
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-4">
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800 text-xs">
            ✓ {project.status}
          </Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
}
