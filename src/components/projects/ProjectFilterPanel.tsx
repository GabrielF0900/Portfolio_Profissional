"use client";

import { cn } from "@/lib/utils";
import type { AreaValue, EcosystemValue } from "@/lib/utils";
import FilterChipGroup, { type ChipOption } from "./FilterChipGroup";

const ecosystemOptions: ChipOption<EcosystemValue>[] = [
  { value: "java", label: "Java" },
  { value: "node", label: "Node.js/TypeScript" },
];

const areaOptions: ChipOption<AreaValue>[] = [
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "distributed", label: "Sistemas Distribuídos" },
];

interface ProjectFilterPanelProps {
  featuredOnly: boolean;
  onFeaturedOnlyChange: (value: boolean) => void;
  ecosystem: EcosystemValue[];
  onEcosystemToggle: (value: EcosystemValue) => void;
  onEcosystemReset: () => void;
  area: AreaValue[];
  onAreaToggle: (value: AreaValue) => void;
  onAreaReset: () => void;
}

export default function ProjectFilterPanel({
  featuredOnly,
  onFeaturedOnlyChange,
  ecosystem,
  onEcosystemToggle,
  onEcosystemReset,
  area,
  onAreaToggle,
  onAreaReset,
}: ProjectFilterPanelProps) {
  const relevanceChipClass = (isActive: boolean) =>
    cn(
      "shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-background/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
    );

  return (
    <div className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-2.5">
        <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Relevância
        </legend>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onFeaturedOnlyChange(false)}
            aria-pressed={!featuredOnly}
            className={relevanceChipClass(!featuredOnly)}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={() => onFeaturedOnlyChange(true)}
            aria-pressed={featuredOnly}
            className={relevanceChipClass(featuredOnly)}
          >
            ⭐ Destaques
          </button>
        </div>
      </fieldset>

      <FilterChipGroup
        title="Ecossistema/Linguagem"
        options={ecosystemOptions}
        selected={ecosystem}
        onToggle={onEcosystemToggle}
        onReset={onEcosystemReset}
        resetLabel="Todos"
      />

      <FilterChipGroup
        title="Área de Atuação"
        options={areaOptions}
        selected={area}
        onToggle={onAreaToggle}
        onReset={onAreaReset}
        resetLabel="Todas"
      />
    </div>
  );
}
