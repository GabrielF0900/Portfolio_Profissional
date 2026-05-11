"use client";

import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  onMoreInfo: (project: Project) => void;
}

export default function ProjectCard({ project, onMoreInfo }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col ${
        project.status === "Em Breve"
          ? "border-2 border-amber-500 dark:border-amber-400 bg-amber-50 dark:bg-amber-950/20"
          : ""
      }`}
    >
      {/* Imagem */}
      <div
        className={`aspect-video overflow-hidden relative cursor-pointer group ${
          project.status === "Em Breve"
            ? "bg-gradient-to-br from-amber-200 to-amber-100 dark:from-amber-900 dark:to-amber-800 flex items-center justify-center"
            : ""
        }`}
      >
        {project.status === "Em Breve" ? (
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <p className="text-lg font-bold text-amber-900 dark:text-amber-100">
              Em Breve
            </p>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Projeto Inovador
            </p>
          </div>
        ) : project.links.demo || project.links.github ? (
          <a
            href={project.links.demo || project.links.github || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        ) : (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <Badge className="bg-primary/90 text-primary-foreground">
              ⭐ Destaque
            </Badge>
          )}
          <Badge
            variant="secondary"
            className={
              project.status === "Em Breve"
                ? "bg-amber-600 text-white"
                : "bg-blue-600/90 text-white"
            }
          >
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Header */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 mb-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
              {project.team && project.team.role && (
                <Badge variant="outline" className="text-xs">
                  {project.team.role}
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
              {project.title}
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              {formatDate(project.startDate)}
            </p>
          </div>
          <div className="flex flex-col gap-1">
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
                  title="Vídeo"
                >
                  <Youtube className="h-4 w-4 text-red-600" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="pb-3 flex-1 flex flex-col">
        {/* Descrição resumida */}
        <CardDescription className="mb-3 text-sm line-clamp-2 leading-relaxed">
          {project.description.split(".")[0].substring(0, 120)}
        </CardDescription>

        {/* Destaques minimalistas */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">
              Destaques
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack principal com hover */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">
            Stack
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-slate-100 dark:bg-slate-800"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Badge
                    variant="outline"
                    className="text-xs bg-slate-100 dark:bg-slate-800 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    +{project.technologies.length - 5}
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-3">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold mb-2">
                      Todas as Tecnologias:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>

        {/* Botão */}
        <Button
          onClick={() => onMoreInfo(project)}
          className="w-full mt-auto"
          variant="default"
        >
          MAIS INFORMAÇÕES
        </Button>
      </CardContent>
    </Card>
  );
}
