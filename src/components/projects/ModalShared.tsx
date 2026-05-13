"use client";

import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Youtube, Download, Image as ImageIcon } from "lucide-react";
import { TechnologiesPopover } from "@/components/projects-modal/TechnologiesPopover";
import { MetricsDisplay } from "@/components/projects-modal/MetricsDisplay";

export function ActionButtons({ project, onImageClick, className = "" }: { project: Project; onImageClick: () => void; className?: string; }) {
  return (
    <div className={`flex flex-row flex-wrap items-center gap-1.5 ${className}`}>
      {project.image && (
        <Button variant="ghost" size="icon" onClick={onImageClick} className="h-8 w-8 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" title="Ver Imagem">
          <ImageIcon className="w-4 h-4" />
        </Button>
      )}
      {project.links.demo && (
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" asChild>
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      )}
      {project.links.github && (
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" asChild>
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="Ver Código">
            <Github className="w-4 h-4" />
          </a>
        </Button>
      )}
      {project.links.video && (
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" asChild>
          <a href={project.links.video} target="_blank" rel="noopener noreferrer" title="Vídeo do sistema">
            <Youtube className="h-4 w-4 text-red-600" />
          </a>
        </Button>
      )}
      {project.links.presentation && (
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800" asChild>
          <a href={project.links.presentation} download title="Baixar Apresentação">
            <Download className="w-4 h-4" />
          </a>
        </Button>
      )}
    </div>
  );
}

export function ModalScrollContent({ project }: { project: Project }) {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 min-w-0 w-full p-4 sm:p-5 space-y-4 sm:space-y-5">
      <div className="min-w-0">
        <h3 className="font-semibold mb-1 text-[11px] sm:text-xs uppercase text-muted-foreground">Sobre</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">{project.description}</p>
      </div>

      {project.metrics && (
        <div className="min-w-0">
          <MetricsDisplay metrics={project.metrics} />
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <div className="min-w-0">
          <h3 className="font-semibold mb-2 text-[11px] sm:text-xs uppercase text-muted-foreground">Tecnologias</h3>
          <TechnologiesPopover technologies={project.technologies} />
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <div className="min-w-0">
          <h3 className="font-semibold mb-2 text-[11px] sm:text-xs uppercase text-muted-foreground">Destaques</h3>
          <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 min-w-0">
                <div className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                <span className="leading-relaxed break-words min-w-0 flex-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.team && (
        <div className="min-w-0">
          <h3 className="font-semibold mb-1 text-[11px] sm:text-xs uppercase text-muted-foreground">Equipe</h3>
          <p className="text-xs sm:text-sm text-muted-foreground break-words">{project.team.description}</p>
        </div>
      )}
    </div>
  );
}

export function ModalStatusFooter({ status }: { status: string }) {
  return (
    <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-5 shrink-0 flex items-center">
      <Badge className="bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800 text-[10px] sm:text-xs">
        ✓ {status}
      </Badge>
    </div>
  );
}