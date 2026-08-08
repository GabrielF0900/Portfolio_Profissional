"use client";

import { useState, useMemo } from "react";
import { projects } from "../../constants/projects";
import { Project } from "../../types";
import ProjectModal from "../projects/ProjectModal";
import ProjectCard from "../projects/ProjectCard";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Ecosystem = 'Todos' | 'Java' | 'Node.js/TypeScript';
type Area = 'Todas' | 'Backend' | 'Full Stack' | 'Cloud & DevOps' | 'Sistemas Distribuídos';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const [ecosystem, setEcosystem] = useState<Ecosystem>('Todos');
  const [area, setArea] = useState<Area>('Todas');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const handleMoreInfo = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const allProjects = useMemo(() => {
    const combined = [...projects.personal, ...projects.collaborative];
    // Ordena deixando destaques primeiro
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

      const matchFeatured = !featuredOnly || project.featured;

      return matchEcosystem && matchArea && matchFeatured;
    });
  }, [allProjects, ecosystem, area, featuredOnly]);

  const clearFilters = () => {
    setEcosystem('Todos');
    setArea('Todas');
    setFeaturedOnly(false);
  };

  return (
    <section id="projetos" className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, organizados por ecossistema e área técnica.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-950 rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-10 flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center transition-all">
            <div className="flex flex-col lg:flex-row gap-6 flex-1 w-full">
              {/* Relevância */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Relevância
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFeaturedOnly(false)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      !featuredOnly
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setFeaturedOnly(true)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 ${
                      featuredOnly
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    ⭐ Destaques
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 lg:hidden"></div>
              <div className="hidden lg:block w-px h-12 bg-slate-200 dark:bg-slate-800"></div>

              {/* Ecossistema */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Ecossistema/Linguagem
                </p>
                <div className="flex flex-wrap gap-2">
                  {(['Todos', 'Java', 'Node.js/TypeScript'] as Ecosystem[]).map((eco) => (
                    <button
                      key={eco}
                      onClick={() => setEcosystem(eco)}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                        ecosystem === eco
                          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                    >
                      {eco}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 lg:hidden"></div>
              <div className="hidden lg:block w-px h-12 bg-slate-200 dark:bg-slate-800"></div>

              {/* Área de Atuação */}
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Área de Atuação
                </p>
                <div className="flex flex-wrap gap-2">
                  {(['Todas', 'Backend', 'Full Stack', 'Cloud & DevOps', 'Sistemas Distribuídos'] as Area[]).map((a) => (
                    <button
                      key={a}
                      onClick={() => setArea(a)}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                        area === a
                          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {(ecosystem !== 'Todos' || area !== 'Todas' || featuredOnly) && (
              <Button 
                variant="ghost" 
                onClick={clearFilters}
                className="text-slate-500 hover:text-slate-900 dark:hover:text-white shrink-0 self-start lg:self-center"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar filtros
              </Button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Não encontrei nenhum projeto que seja exatamente dessa combinação de ecossistema e área. Tente ajustar os filtros.
              </p>
              <Button onClick={clearFilters} variant="outline" className="border-slate-300 dark:border-slate-700">
                Limpar todos os filtros
              </Button>
            </div>
          )}

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
