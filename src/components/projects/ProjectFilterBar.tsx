"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AreaFilter, EcosystemFilter } from "@/lib/utils";

interface Pill<T extends string> {
  value: T;
  label: string;
}

const ecosystemPills: Pill<EcosystemFilter>[] = [
  { value: "all", label: "Todos" },
  { value: "java", label: "Java" },
  { value: "node", label: "Node.js/TypeScript" },
];

const areaPills: Pill<AreaFilter>[] = [
  { value: "all", label: "Todas" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "distributed", label: "Sistemas Distribuídos" },
];

function PillGroup<T extends string>({
  label,
  pills,
  selected,
  onSelect,
}: {
  label: string;
  pills: Pill<T>[];
  selected: T;
  onSelect: (value: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
        {pills.map((pill) => {
          const isActive = selected === pill.value;
          return (
            <button
              key={pill.value}
              type="button"
              onClick={() => onSelect(pill.value)}
              aria-pressed={isActive}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
            >
              {pill.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ProjectFilterBarProps {
  ecosystem: EcosystemFilter;
  area: AreaFilter;
  onEcosystemChange: (value: EcosystemFilter) => void;
  onAreaChange: (value: AreaFilter) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

export default function ProjectFilterBar({
  ecosystem,
  area,
  onEcosystemChange,
  onAreaChange,
  onClear,
  hasActiveFilters,
}: ProjectFilterBarProps) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-4 md:p-5 mb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-1 min-w-0">
          <PillGroup
            label="Ecossistema/Linguagem"
            pills={ecosystemPills}
            selected={ecosystem}
            onSelect={onEcosystemChange}
          />
          <PillGroup
            label="Área de Atuação"
            pills={areaPills}
            selected={area}
            onSelect={onAreaChange}
          />
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="self-start text-muted-foreground hover:text-foreground shrink-0"
          >
            <X className="w-3.5 h-3.5" />
            Limpar filtros
          </Button>
        )}
      </div>
    </div>
  );
}
