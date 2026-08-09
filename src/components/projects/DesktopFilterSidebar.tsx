"use client";

import { X } from "lucide-react";
import type { AreaValue, EcosystemValue } from "@/lib/utils";
import ProjectFilterPanel from "./ProjectFilterPanel";

interface DesktopFilterSidebarProps {
  featuredOnly: boolean;
  onFeaturedOnlyChange: (value: boolean) => void;
  ecosystem: EcosystemValue[];
  onEcosystemToggle: (value: EcosystemValue) => void;
  onEcosystemReset: () => void;
  area: AreaValue[];
  onAreaToggle: (value: AreaValue) => void;
  onAreaReset: () => void;
  hasActiveFilters: boolean;
  onClearAll: () => void;
}

export default function DesktopFilterSidebar({
  featuredOnly,
  onFeaturedOnlyChange,
  ecosystem,
  onEcosystemToggle,
  onEcosystemReset,
  area,
  onAreaToggle,
  onAreaReset,
  hasActiveFilters,
  onClearAll,
}: DesktopFilterSidebarProps) {
  return (
    <aside className="hidden md:block md:sticky md:top-24 md:self-start rounded-2xl border border-border bg-muted/30 p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold">Filtrar projetos</h3>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3 h-3" />
            Limpar
          </button>
        )}
      </div>

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
    </aside>
  );
}
