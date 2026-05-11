"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface CollaborativeProjectsProps {
  projects: Project[];
  onMoreInfo: (project: Project) => void;
}

export default function CollaborativeProjects({
  projects,
  onMoreInfo,
}: CollaborativeProjectsProps) {
  const sortedProjects = projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? 1 : -1;
    const aDate = a.endDate ?? a.startDate ?? "";
    const bDate = b.endDate ?? b.startDate ?? "";
    return bDate.localeCompare(aDate);
  });

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {sortedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onMoreInfo={onMoreInfo}
        />
      ))}
    </div>
  );
}
