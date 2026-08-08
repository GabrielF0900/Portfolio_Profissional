"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "../../constants/projects";
import {
  type AreaFilter,
  type EcosystemFilter,
  getFeaturedProjects,
  matchesArea,
  matchesEcosystem,
} from "../../lib/utils";
import { Project } from "../../types";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";
import ProjectFilterBar from "../projects/ProjectFilterBar";
import ProjectEmptyState from "../projects/ProjectEmptyState";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [ecosystem, setEcosystem] = useState<EcosystemFilter>("all");
  const [area, setArea] = useState<AreaFilter>("all");

  const handleMoreInfo = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Consolida todos os projetos para aplicar filtros puramente técnicos
  const allProjects = [...projects.personal, ...projects.collaborative];
  // IDs dos projetos colaborativos, usados para exibir a badge "Trabalho em Equipe"
  const collaborativeIds = new Set(projects.collaborative.map((p) => p.id));

  const featuredProjects = getFeaturedProjects(allProjects);

  const hasActiveFilters = ecosystem !== "all" || area !== "all";

  const catalogProjects = useMemo(
    () =>
      allProjects.filter(
        (project) =>
          matchesEcosystem(project, ecosystem) && matchesArea(project, area)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ecosystem, area]
  );

  const handleClearFilters = () => {
    setEcosystem("all");
    setArea("all");
  };

  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos. Explore o catálogo completo e
              combine filtros para encontrar exatamente a stack que procura.
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="flex w-full max-w-md mx-auto mb-8 gap-1 h-auto">
              <TabsTrigger
                value="featured"
                className="flex-1 text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Em Destaque
              </TabsTrigger>
              <TabsTrigger
                value="all"
                className="flex-1 text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Explorar Catálogo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <div
                key="featured"
                className="animate-in fade-in-0 duration-300"
              >
                <ProjectGrid
                  projects={featuredProjects}
                  onMoreInfo={handleMoreInfo}
                  collaborativeIds={collaborativeIds}
                />
              </div>
            </TabsContent>

            <TabsContent value="all">
              <ProjectFilterBar
                ecosystem={ecosystem}
                area={area}
                onEcosystemChange={setEcosystem}
                onAreaChange={setArea}
                onClear={handleClearFilters}
                hasActiveFilters={hasActiveFilters}
              />

              {catalogProjects.length > 0 ? (
                <div
                  key={`${ecosystem}-${area}`}
                  className="animate-in fade-in-0 duration-300"
                >
                  <ProjectGrid
                    projects={catalogProjects}
                    onMoreInfo={handleMoreInfo}
                    collaborativeIds={collaborativeIds}
                  />
                </div>
              ) : (
                <ProjectEmptyState onClear={handleClearFilters} />
              )}
            </TabsContent>
          </Tabs>

          <ProjectModal
            project={selectedProject}
            open={modalOpen}
            onOpenChange={setModalOpen}
          />
        </div>
      </div>
    </section>
  );
}
