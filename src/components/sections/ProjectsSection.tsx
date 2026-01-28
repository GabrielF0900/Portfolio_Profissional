"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, Github, Rocket, Orbit, Satellite, Star } from "lucide-react";
import { projects } from "../../constants/projects";
import {
  formatDate,
  getStatusColor,
  getFeaturedProjects,
} from "../../lib/utils";
import { Project } from "../../types";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const isComingSoon = project.status === "Em Breve";
  
  return (
    <div
      className={`group relative glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 ${
        isComingSoon 
          ? "border-amber-500/30" 
          : "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
      }`}
    >
      {/* Project Image */}
      <div
        className={`aspect-video overflow-hidden relative ${
          isComingSoon
            ? "bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center"
            : "bg-secondary/30"
        }`}
      >
        {isComingSoon ? (
          <div className="text-center p-6">
            <Rocket className="w-12 h-12 mx-auto mb-3 text-amber-400 animate-float" />
            <p className="text-lg font-display font-bold text-amber-400">Em Breve</p>
            <p className="text-sm text-amber-400/70">Missao em Preparacao</p>
          </div>
        ) : project.links.demo || project.links.github ? (
          <a
            href={project.links.demo || project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ) : (
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        )}
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1">
              <Star className="w-3 h-3" />
              Destaque
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className="text-xs bg-secondary/50 border-border">
                {project.category}
              </Badge>
              {project.team && (
                <Badge variant="outline" className="text-xs bg-secondary/50 border-border">
                  {project.team.role}
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {formatDate(project.startDate)} - {formatDate(project.endDate)}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-1 flex-shrink-0">
            {project.links.demo && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="Ver Codigo">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">
              Destaques da Missao
            </h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 2).map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-secondary/30 border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Popover>
              <PopoverTrigger asChild>
                <button className="inline-flex items-center rounded-full border border-border/50 bg-secondary/30 px-2 py-0.5 text-xs font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                  +{project.technologies.length - 4}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3 glass-card border-border">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(4).map((tech: string) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between">
          <Badge className={`${getStatusColor(project.status)} text-xs`}>
            {project.status}
          </Badge>
          {project.team && (
            <span className="text-xs text-muted-foreground">
              {project.team.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featuredProjects = [
    ...getFeaturedProjects(projects.personal),
    ...getFeaturedProjects(projects.collaborative),
  ];

  return (
    <section id="projetos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Satellite className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-primary font-medium">Portfolio</span>
              <Orbit className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Missoes e Exploracoes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma selecao dos meus trabalhos mais recentes, desde projetos pessoais ate colaboracoes em equipe
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12 glass-card p-1 rounded-xl">
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
              >
                Em Destaque
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
              >
                Pessoais
              </TabsTrigger>
              <TabsTrigger
                value="collaborative"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
              >
                Colaborativos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="animate-fade-in">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="personal" className="animate-fade-in">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.personal.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborative" className="animate-fade-in">
              <div className="grid gap-6 md:grid-cols-2">
                {projects.collaborative.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
