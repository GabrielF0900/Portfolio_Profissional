"use client";

import { X } from "lucide-react";

export interface ActiveChip {
  key: string;
  label: string;
  onRemove: () => void;
}

interface ActiveFilterChipsProps {
  chips: ActiveChip[];
  resultCount: number;
}

export default function ActiveFilterChips({
  chips,
  resultCount,
}: ActiveFilterChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          onClick={chip.onRemove}
          className="flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary px-3 py-1 text-sm font-medium transition-colors hover:bg-primary/15"
        >
          {chip.label}
          <X className="w-3 h-3" />
        </button>
      ))}
      <span className="text-sm text-muted-foreground ml-1">
        {resultCount} {resultCount === 1 ? "projeto encontrado" : "projetos encontrados"}
      </span>
    </div>
  );
}
