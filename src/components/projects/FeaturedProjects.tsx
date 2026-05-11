"use client";

import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface FeaturedProjectsProps {
  projects: Project[];
  onMoreInfo: (project: Project) => void;
}

export default function FeaturedProjects({
  projects,
  onMoreInfo,
}: FeaturedProjectsProps) {
  const sortedProjects = projects.sort((a, b) => {
    const aDate = a.endDate ?? a.startDate ?? "";
    const bDate = b.endDate ?? b.startDate ?? "";
    return bDate.localeCompare(aDate);
  });

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
