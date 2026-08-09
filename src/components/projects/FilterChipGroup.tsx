"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ChipOption<T extends string> {
  value: T;
  label: string;
}

interface FilterChipGroupProps<T extends string> {
  title: string;
  options: ChipOption<T>[];
  selected: T[];
  onToggle: (value: T) => void;
  onReset: () => void;
  resetLabel: string;
  maxVisible?: number;
}

export default function FilterChipGroup<T extends string>({
  title,
  options,
  selected,
  onToggle,
  onReset,
  resetLabel,
  maxVisible = 6,
}: FilterChipGroupProps<T>) {
  const [expanded, setExpanded] = useState(false);

  // "Mostrar mais": só entra em ação se o grupo ultrapassar o limite visível
  const shouldCollapse = options.length > maxVisible;
  const visibleOptions =
    shouldCollapse && !expanded
      ? options.slice(0, maxVisible - 1)
      : options;

  const isAllActive = selected.length === 0;

  const chipClass = (isActive: boolean) =>
    cn(
      "shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
      isActive
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-background/60 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
    );

  return (
    <fieldset className="flex flex-col gap-2.5">
      <legend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </legend>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onReset}
          aria-pressed={isAllActive}
          className={chipClass(isAllActive)}
        >
          {resetLabel}
        </button>
        {visibleOptions.map((option) => {
          const isActive = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onToggle(option.value)}
              aria-pressed={isActive}
              className={chipClass(isActive)}
            >
              {option.label}
            </button>
          );
        })}
        {shouldCollapse && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="shrink-0 whitespace-nowrap rounded-full border border-dashed border-border px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {expanded ? "Mostrar menos" : "Mostrar mais"}
          </button>
        )}
      </div>
    </fieldset>
  );
}
