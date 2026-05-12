"use client";

import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface TechnologiesPopoverProps {
  technologies: string[];
  visibleCount?: number;
}

export function TechnologiesPopover({
  technologies,
  visibleCount = 3,
}: TechnologiesPopoverProps) {
  const [open, setOpen] = useState(false);

  if (technologies.length <= visibleCount) {
    return (
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-xs bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
          >
            {tech}
          </Badge>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1">
      {technologies.slice(0, visibleCount).map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="text-xs bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
        >
          {tech}
        </Badge>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Badge
            variant="outline"
            className="text-xs cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900 transition-colors"
          >
            +{technologies.length - visibleCount}
          </Badge>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-3">
          <h4 className="font-semibold text-xs mb-3 uppercase text-muted-foreground">
            Todas as Tecnologias ({technologies.length})
          </h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
