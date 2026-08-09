"use client";

import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectEmptyStateProps {
  onClear: () => void;
}

export default function ProjectEmptyState({ onClear }: ProjectEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 rounded-2xl border border-dashed border-border">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
        <SearchX className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-base font-medium mb-1">
        Nenhum projeto encontrado para essa combinação.
      </p>
      <p className="text-sm text-muted-foreground mb-5">
        Tente ajustar os filtros de relevância, ecossistema ou área de atuação.
      </p>
      <Button variant="outline" size="sm" onClick={onClear}>
        Limpar filtros
      </Button>
    </div>
  );
}
