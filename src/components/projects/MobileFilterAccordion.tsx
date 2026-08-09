"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AreaValue, EcosystemValue } from "@/lib/utils";
import ProjectFilterPanel from "./ProjectFilterPanel";
import { Button } from "@/components/ui/button";

interface MobileFilterAccordionProps {
  featuredOnly: boolean;
  onFeaturedOnlyChange: (value: boolean) => void;
  ecosystem: EcosystemValue[];
  onEcosystemToggle: (value: EcosystemValue) => void;
  onEcosystemReset: () => void;
  area: AreaValue[];
  onAreaToggle: (value: AreaValue) => void;
  onAreaReset: () => void;
  activeFilterCount: number;
  hasActiveFilters: boolean;
  onClearAll: () => void;
  onApply: () => void;
}

export default function MobileFilterAccordion({
  featuredOnly,
  onFeaturedOnlyChange,
  ecosystem,
  onEcosystemToggle,
  onEcosystemReset,
  area,
  onAreaToggle,
  onAreaReset,
  activeFilterCount,
  hasActiveFilters,
  onClearAll,
  onApply,
}: MobileFilterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    setIsOpen(false);
    onApply();
  };

  return (
    <div className="md:hidden rounded-2xl border border-border bg-muted/30 mb-6 overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          className="flex flex-1 items-center gap-2 min-w-0 text-left"
        >
          <span className="text-sm font-semibold truncate">
            Filtrar projetos
            {activeFilterCount > 0 && (
              <span className="text-muted-foreground font-normal">
                {" "}
                ({activeFilterCount} {activeFilterCount === 1 ? "ativo" : "ativos"})
              </span>
            )}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="shrink-0 flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
            Limpar
          </button>
        )}
      </div>

      {isOpen && (
        <div className="px-4 pb-4 pt-1 border-t border-border">
          <div className="pt-4">
            <ProjectFilterPanel
              featuredOnly={featuredOnly}
              onFeaturedOnlyChange={onFeaturedOnlyChange}
              ecosystem={ecosystem}
              onEcosystemToggle={onEcosystemToggle}
              onEcosystemReset={onEcosystemReset}
              area={area}
              onAreaToggle={onAreaToggle}
              onAreaReset={onAreaReset}
            />
          </div>
          <Button onClick={handleApply} className="w-full mt-6">
            Aplicar
          </Button>
        </div>
      )}
    </div>
  );
}
