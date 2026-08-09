"use client";

import { useState, useMemo } from "react";
import { projects } from "../../constants/projects";
import { Project } from "../../types";
import ProjectModal from "../projects/ProjectModal";
import ProjectCard from "../projects/ProjectCard";
import { X } from "lucide-react";
import ProjectFilters, { Ecosystem, Area, ProjectType } from "../projects/ProjectFilters";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/gtag";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [ecosystem, setEcosystem] = useState<Ecosystem>('Todos');
  const [area, setArea] = useState<Area>('Todas');
  const [featuredOnly, setFeaturedOnly] = useState(true);
  const [projectType, setProjectType] = useState<ProjectType>('Todos');

  const handleMoreInfo = (project: Project) => {
    event('abrir_modal_projeto', { projeto: project.title });
    setSelectedProject(project);
    setModalOpen(true);
  };

  const allProjects = useMemo(() => {
    const combined = [...projects.personal, ...projects.collaborative];
    return combined.sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });
  }, []);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      let matchEcosystem = false;
      if (ecosystem === 'Todos') {
        matchEcosystem = true;
      } else if (ecosystem === 'Java') {
        matchEcosystem = project.technologies.some(t => t.includes('Java') || t.includes('Spring Boot'));
      } else if (ecosystem === 'Node.js/TypeScript') {
        matchEcosystem = project.technologies.some(t => t.includes('Node.js') || t.includes('TypeScript') || t.includes('NestJS'));
      }

      let matchArea = false;
      if (area === 'Todas') {
        matchArea = true;
      } else if (area === 'Backend') {
        matchArea = project.category === 'Backend';
      } else if (area === 'Full Stack') {
        matchArea = project.category === 'Full Stack' || project.title.includes('Full-Stack');
      } else if (area === 'Cloud & DevOps') {
        matchArea = ['Cloud Architecture', 'Infrastructure', 'DevOps'].includes(project.category);
      } else if (area === 'Sistemas Distribuídos') {
        matchArea = project.technologies.some(t => ['Microsserviços', 'Spring Cloud Config', 'Netflix Eureka', 'OpenFeign'].includes(t));
      }

      let matchProjectType = false;
      if (projectType === 'Todos') {
        matchProjectType = true;
      } else if (projectType === 'Individuais') {
        matchProjectType = !project.team || !project.team.size || project.team.size <= 1;
      } else if (projectType === 'Equipe Neukox') {
        matchProjectType = project.team?.name === 'Neukox';
      } else if (projectType === 'Colaborativos') {
        matchProjectType = !!(project.team && project.team.size && project.team.size > 1 && project.team.name !== 'Neukox');
      }

      const matchFeatured = !featuredOnly || project.featured;

      return matchEcosystem && matchArea && matchFeatured && matchProjectType;
    });
  }, [allProjects, ecosystem, area, featuredOnly, projectType]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (!featuredOnly) count++;
    if (ecosystem !== 'Todos') count++;
    if (area !== 'Todas') count++;
    if (projectType !== 'Todos') count++;
    return count;
  }, [featuredOnly, ecosystem, area, projectType]);

  const activeFilterChips = useMemo(() => {
    const chips = [];
    if (!featuredOnly) chips.push({ id: 'featured', label: 'Todas as relevâncias', onRemove: () => setFeaturedOnly(true) });
    if (projectType !== 'Todos') chips.push({ id: 'projectType', label: projectType, onRemove: () => setProjectType('Todos') });
    if (ecosystem !== 'Todos') chips.push({ id: 'ecosystem', label: ecosystem, onRemove: () => setEcosystem('Todos') });
    if (area !== 'Todas') chips.push({ id: 'area', label: area, onRemove: () => setArea('Todas') });
    return chips;
  }, [featuredOnly, ecosystem, area, projectType]);

  const clearFilters = () => {
    setEcosystem('Todos');
    setArea('Todas');
    setProjectType('Todos');
    setFeaturedOnly(true);
  };

  return (
    <section id="projetos" className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, organizados por ecossistema e área técnica.
            </p>
          </div>

          {/* Barra de Filtros Ativos */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mr-2">Filtros ativos:</span>
                {activeFilterChips.map(chip => (
                  <span key={chip.id} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-medium">
                    {chip.label}
                    <button onClick={chip.onRemove} className="hover:bg-slate-700 dark:hover:bg-slate-300 rounded-full p-0.5 ml-1 transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 items-start">

            {/* Sidebar Filtros - Separado no componente ProjectFilters */}
            <ProjectFilters
              ecosystem={ecosystem}
              setEcosystem={setEcosystem}
              area={area}
              setArea={setArea}
              featuredOnly={featuredOnly}
              setFeaturedOnly={setFeaturedOnly}
              projectType={projectType}
              setProjectType={setProjectType}
              activeFilterCount={activeFilterCount}
              clearFilters={clearFilters}
            />

            {/* Projetos Grid */}
            <div className="md:col-span-3 lg:col-span-4 flex flex-col gap-6">

              {/* Grid de Projetos */}
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onMoreInfo={handleMoreInfo}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-2">Nenhum projeto encontrado</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Não encontrei nenhum projeto que seja exatamente dessa combinação. Tente ajustar os filtros.
                  </p>
                  <Button onClick={clearFilters} variant="outline" className="border-slate-300 dark:border-slate-700">
                    Limpar todos os filtros
                  </Button>
                </div>
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
