"use client";

import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface TechnologiesModalProps {
  technologies: string[];
  visibleCount?: number;
}

/**
 * TechnologiesModal - Componente com responsabilidade única
 *
 * Responsabilidade: Exibir todas as tecnologias de um projeto em um popover flutuante
 * quando o usuário clica no badge "+número"
 *
 * Características:
 * - Design responsivo (mobile, tablet, desktop)
 * - Popover flutuante que não bloqueia a página
 * - Lista organizada em grid com todas as tecnologias
 * - Acessibilidade garantida
 */
export function TechnologiesModal({
  technologies,
  visibleCount = 5,
}: TechnologiesModalProps) {
  const [open, setOpen] = useState(false);

  // Se há poucos itens, mostra todos sem popover
  if (technologies.length <= visibleCount) {
    return (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default"
          >
            {tech}
          </Badge>
        ))}
      </div>
    );
  }

  const hiddenCount = technologies.length - visibleCount;

  return (
    <div className="flex flex-wrap gap-2">
      {/* Badges visíveis */}
      {technologies.slice(0, visibleCount).map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="text-xs sm:text-sm bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default"
        >
          {tech}
        </Badge>
      ))}

      {/* Popover flutuante com todas as tecnologias */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all duration-200 cursor-pointer group"
            aria-label={`Ver ${hiddenCount} tecnologias adicionais`}
          >
            <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              +{hiddenCount}
            </span>
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400 group-hover:rotate-180 transition-transform" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[calc(100vw-0.5rem)] sm:w-[30rem] md:w-[40rem] max-h-[70vh] overflow-y-auto p-3 sm:p-4 md:p-5">
          {/* Cabeçalho */}
          <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-xs sm:text-sm md:text-base text-slate-900 dark:text-white truncate">
                Tecnologias
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 line-clamp-2">
                {technologies.length} utilizadas
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors shrink-0"
              aria-label="Fechar"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" />
            </button>
          </div>

          {/* Grid responsivo com todas as tecnologias */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1.5 sm:gap-2">
            {technologies.map((tech) => (
              <div key={tech} className="group relative min-w-0">
                <Badge
                  variant="secondary"
                  className="w-full justify-center text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-2 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/30 hover:from-blue-100 hover:to-blue-200/50 dark:hover:from-blue-900/50 dark:hover:to-blue-800/40 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 cursor-default shadow-sm hover:shadow-md truncate"
                >
                  {tech}
                </Badge>
              </div>
            ))}
          </div>

          {/* Rodapé informativo */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white">
                {technologies.length}
              </span>{" "}
              diferentes em uso
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
