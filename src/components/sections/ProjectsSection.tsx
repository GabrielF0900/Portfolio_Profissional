"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "../../constants/projects";
import {
  getBackendProjects,
  getCloudProjects,
  getFeaturedProjects,
  getFullStackProjects,
} from "../../lib/utils";
import { Project } from "../../types";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectModal from "../projects/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMoreInfo = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Consolida todos os projetos para aplicar filtros puramente técnicos
  const allProjects = [...projects.personal, ...projects.collaborative];
  // IDs dos projetos colaborativos, usados para exibir a badge "Trabalho em Equipe"
  const collaborativeIds = new Set(projects.collaborative.map((p) => p.id));

  const featuredProjects = getFeaturedProjects(allProjects);
  const backendProjects = getBackendProjects(allProjects);
  const cloudProjects = getCloudProjects(allProjects);
  const fullStackProjects = getFullStackProjects(allProjects);

  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, organizados por
              área técnica: Backend Java, Cloud/DevOps e Full Stack.
            </p>
          </div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="flex w-full max-w-3xl mx-auto mb-12 overflow-x-auto no-scrollbar justify-start md:justify-center gap-1 h-auto">
              <TabsTrigger
                value="featured"
                className="text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Em Destaque
              </TabsTrigger>
              <TabsTrigger
                value="backend"
                className="text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Backend Java &amp; Distribuídos
              </TabsTrigger>
              <TabsTrigger
                value="cloud"
                className="text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Cloud &amp; DevOps
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="text-sm md:text-base whitespace-nowrap text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Full Stack &amp; Node.js
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <ProjectGrid
                projects={featuredProjects}
                onMoreInfo={handleMoreInfo}
                collaborativeIds={collaborativeIds}
              />
            </TabsContent>

            <TabsContent value="backend">
              <ProjectGrid
                projects={backendProjects}
                onMoreInfo={handleMoreInfo}
                collaborativeIds={collaborativeIds}
              />
            </TabsContent>

            <TabsContent value="cloud">
              <ProjectGrid
                projects={cloudProjects}
                onMoreInfo={handleMoreInfo}
                collaborativeIds={collaborativeIds}
              />
            </TabsContent>

            <TabsContent value="fullstack">
              <ProjectGrid
                projects={fullStackProjects}
                onMoreInfo={handleMoreInfo}
                collaborativeIds={collaborativeIds}
              />
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
