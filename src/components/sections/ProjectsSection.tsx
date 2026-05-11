"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "../../constants/projects";
import { getFeaturedProjects } from "../../lib/utils";
import { Project } from "../../types";
import FeaturedProjects from "../projects/FeaturedProjects";
import PersonalProjects from "../projects/PersonalProjects";
import CollaborativeProjects from "../projects/CollaborativeProjects";
import ProjectModal from "../projects/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMoreInfo = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const featuredProjects = [
    ...getFeaturedProjects(projects.personal),
    ...getFeaturedProjects(projects.collaborative),
  ];

  return (
    <section id="projetos" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, desde projetos
              pessoais até colaborações em equipe.
            </p>
          </div>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12">
              <TabsTrigger
                value="featured"
                className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Em Destaque
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Pessoais
              </TabsTrigger>
              <TabsTrigger
                value="collaborative"
                className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
              >
                Colaborativos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <FeaturedProjects
                projects={featuredProjects}
                onMoreInfo={handleMoreInfo}
              />
            </TabsContent>

            <TabsContent value="personal">
              <PersonalProjects
                projects={projects.personal}
                onMoreInfo={handleMoreInfo}
              />
            </TabsContent>

            <TabsContent value="collaborative">
              <CollaborativeProjects
                projects={projects.collaborative}
                onMoreInfo={handleMoreInfo}
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
