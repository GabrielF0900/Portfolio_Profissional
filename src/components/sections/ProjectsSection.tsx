"use client";

import { useMemo, useRef, useState } from "react";
import { projects } from "../../constants/projects";
import {
  type AreaValue,
  type EcosystemValue,
  matchesArea,
  matchesEcosystem,
} from "../../lib/utils";
import { Project } from "../../types";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";
import ProjectEmptyState from "../projects/ProjectEmptyState";
import MobileFilterAccordion from "../projects/MobileFilterAccordion";
import DesktopFilterSidebar from "../projects/DesktopFilterSidebar";
import ActiveFilterChips, {
  type ActiveChip,
} from "../projects/ActiveFilterChips";

const ecosystemLabels: Record<EcosystemValue, string> = {
  java: "Java",
  node: "Node.js/TypeScript",
};

const areaLabels: Record<AreaValue, string> = {
  backend: "Backend",
  fullstack: "Full Stack",
  cloud: "Cloud & DevOps",
  distributed: "Sistemas Distribuídos",
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Relevância inicia em "Destaques" por padrão
  const [featuredOnly, setFeaturedOnly] = useState(true);
  const [ecosystem, setEcosystem] = useState<EcosystemValue[]>([]);
  const [area, setArea] = useState<AreaValue[]>([]);

  const gridAnchorRef = useRef<HTMLDivElement>(null);

  const handleMoreInfo = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Consolida todos os projetos para aplicar filtros puramente técnicos
  const allProjects = [...projects.personal, ...projects.collaborative];
  // IDs dos projetos colaborativos, usados para exibir a badge "Trabalho em Equipe"
  const collaborativeIds = new Set(projects.collaborative.map((p) => p.id));

  const filteredProjects = useMemo(
    () =>
      allProjects.filter(
        (project) =>
          (!featuredOnly || project.featured) &&
          matchesEcosystem(project, ecosystem) &&
          matchesArea(project, area)
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [featuredOnly, ecosystem, area]
  );

  // Contagem de filtros ativos além do padrão (Destaques)
  const activeFilterCount =
    (featuredOnly ? 0 : 1) + ecosystem.length + area.length;
  const hasActiveFilters = activeFilterCount > 0;

  const toggleEcosystem = (value: EcosystemValue) => {
    setEcosystem((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleArea = (value: AreaValue) => {
    setArea((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleClearAll = () => {
    setFeaturedOnly(true);
    setEcosystem([]);
    setArea([]);
  };

  const handleApply = () => {
    gridAnchorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Chips da barra "filtros ativos" — só os que vão além do padrão (Destaques)
  const activeChips: ActiveChip[] = [
    ...(!featuredOnly
      ? [
          {
            key: "relevance-all",
            label: "Todos os projetos",
            onRemove: () => setFeaturedOnly(true),
          },
        ]
      : []),
    ...ecosystem.map((value) => ({
      key: `eco-${value}`,
      label: ecosystemLabels[value],
      onRemove: () => toggleEcosystem(value),
    })),
    ...area.map((value) => ({
      key: `area-${value}`,
      label: areaLabels[value],
      onRemove: () => toggleArea(value),
    })),
  ];

  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos. Combine os filtros para encontrar
              exatamente a stack que procura.
            </p>
          </div>

          <MobileFilterAccordion
            featuredOnly={featuredOnly}
            onFeaturedOnlyChange={setFeaturedOnly}
            ecosystem={ecosystem}
            onEcosystemToggle={toggleEcosystem}
            onEcosystemReset={() => setEcosystem([])}
            area={area}
            onAreaToggle={toggleArea}
            onAreaReset={() => setArea([])}
            activeFilterCount={activeFilterCount}
            hasActiveFilters={hasActiveFilters}
            onClearAll={handleClearAll}
            onApply={handleApply}
          />

          <div className="md:grid md:grid-cols-[260px_1fr] md:gap-8">
            <DesktopFilterSidebar
              featuredOnly={featuredOnly}
              onFeaturedOnlyChange={setFeaturedOnly}
              ecosystem={ecosystem}
              onEcosystemToggle={toggleEcosystem}
              onEcosystemReset={() => setEcosystem([])}
              area={area}
              onAreaToggle={toggleArea}
              onAreaReset={() => setArea([])}
              hasActiveFilters={hasActiveFilters}
              onClearAll={handleClearAll}
            />

            <div ref={gridAnchorRef} className="min-w-0">
              <ActiveFilterChips
                chips={activeChips}
                resultCount={filteredProjects.length}
              />

              {filteredProjects.length > 0 ? (
                <div
                  key={`${featuredOnly}-${ecosystem.join(",")}-${area.join(",")}`}
                  className="animate-in fade-in-0 duration-300"
                >
                  <ProjectGrid
                    projects={filteredProjects}
                    onMoreInfo={handleMoreInfo}
                    collaborativeIds={collaborativeIds}
                  />
                </div>
              ) : (
                <ProjectEmptyState onClear={handleClearAll} />
              )}
            </div>
          </div>

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
