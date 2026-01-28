"use client";

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, Github, Rocket, Satellite, Star, Database, Server, Cloud, Globe, Zap, Layers, CircuitBoard } from "lucide-react";
import { projects } from "../../constants/projects";
import {
  formatDate,
  getStatusColor,
  getFeaturedProjects,
} from "../../lib/utils";
import { Project } from "../../types";

// Enhanced SVG Architecture Diagrams
function ArchitectureDiagram({ category }: { category: string }) {
  const diagrams: Record<string, JSX.Element> = {
    Infrastructure: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </linearGradient>
        </defs>
        {/* Cloud shape */}
        <path d="M60 35 Q40 35 40 50 Q25 50 25 65 Q25 80 45 80 L155 80 Q175 80 175 65 Q175 50 160 50 Q160 35 140 35 Q130 20 100 20 Q70 20 60 35" 
          fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />
        {/* Server rack */}
        <rect x="70" y="90" width="60" height="40" rx="2" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <line x1="70" y1="100" x2="130" y2="100" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5" />
        <line x1="70" y1="110" x2="130" y2="110" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5" />
        <line x1="70" y1="120" x2="130" y2="120" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5" />
        {/* Status lights */}
        <circle cx="75" cy="95" r="1.5" fill="rgba(34, 211, 238, 0.4)" />
        <circle cx="80" cy="95" r="1.5" fill="rgba(52, 211, 153, 0.4)" />
        {/* Connection lines */}
        <path d="M100 80 L100 90" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" strokeDasharray="2,2" />
        {/* Kubernetes nodes */}
        <g transform="translate(30, 95)">
          <rect width="25" height="25" rx="3" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
          <circle cx="12.5" cy="12.5" r="6" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        </g>
        <g transform="translate(145, 95)">
          <rect width="25" height="25" rx="3" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
          <circle cx="12.5" cy="12.5" r="6" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        </g>
        {/* Network lines */}
        <path d="M55 107 L70 107" stroke="rgba(34, 211, 238, 0.15)" strokeDasharray="2,2" />
        <path d="M130 107 L145 107" stroke="rgba(34, 211, 238, 0.15)" strokeDasharray="2,2" />
      </svg>
    ),
    "Full Stack": (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
        {/* Browser window */}
        <rect x="50" y="15" width="100" height="35" rx="3" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />
        <line x1="50" y1="25" x2="150" y2="25" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5" />
        <circle cx="57" cy="20" r="2" fill="rgba(251, 146, 60, 0.4)" />
        <circle cx="64" cy="20" r="2" fill="rgba(251, 191, 36, 0.4)" />
        <circle cx="71" cy="20" r="2" fill="rgba(52, 211, 153, 0.4)" />
        {/* Code blocks in browser */}
        <rect x="55" y="30" width="40" height="3" rx="1" fill="rgba(34, 211, 238, 0.1)" />
        <rect x="55" y="35" width="30" height="3" rx="1" fill="rgba(34, 211, 238, 0.08)" />
        <rect x="55" y="40" width="35" height="3" rx="1" fill="rgba(34, 211, 238, 0.06)" />
        {/* API Layer */}
        <rect x="70" y="60" width="60" height="20" rx="2" fill="none" stroke="rgba(34, 211, 238, 0.18)" strokeWidth="1" />
        <text x="100" y="73" fontSize="7" fill="rgba(34, 211, 238, 0.3)" textAnchor="middle" fontFamily="monospace">API</text>
        {/* Database cylinder */}
        <ellipse cx="100" cy="100" rx="30" ry="8" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <path d="M70 100 L70 115 Q70 123 100 123 Q130 123 130 115 L130 100" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <ellipse cx="100" cy="115" rx="30" ry="8" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5" />
        {/* Connections */}
        <path d="M100 50 L100 60" stroke="rgba(34, 211, 238, 0.2)" strokeDasharray="3,2" />
        <path d="M100 80 L100 92" stroke="rgba(34, 211, 238, 0.2)" strokeDasharray="3,2" />
        {/* Data flow arrows */}
        <path d="M95 55 L100 60 L105 55" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        <path d="M95 85 L100 90 L105 85" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
      </svg>
    ),
    Backend: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
        {/* Main server */}
        <rect x="75" y="20" width="50" height="35" rx="3" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />
        <line x1="80" y1="32" x2="120" y2="32" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="0.5" />
        <circle cx="85" cy="42" r="2" fill="rgba(52, 211, 153, 0.4)" />
        <circle cx="92" cy="42" r="2" fill="rgba(34, 211, 238, 0.3)" />
        <rect x="100" y="40" width="15" height="4" rx="1" fill="rgba(34, 211, 238, 0.1)" />
        {/* Microservices */}
        <rect x="30" y="75" width="35" height="25" rx="2" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <text x="47.5" y="90" fontSize="5" fill="rgba(34, 211, 238, 0.25)" textAnchor="middle" fontFamily="monospace">AUTH</text>
        <rect x="82" y="75" width="35" height="25" rx="2" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <text x="99.5" y="90" fontSize="5" fill="rgba(34, 211, 238, 0.25)" textAnchor="middle" fontFamily="monospace">CORE</text>
        <rect x="135" y="75" width="35" height="25" rx="2" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <text x="152.5" y="90" fontSize="5" fill="rgba(34, 211, 238, 0.25)" textAnchor="middle" fontFamily="monospace">DATA</text>
        {/* Databases */}
        <ellipse cx="50" cy="115" rx="15" ry="5" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
        <ellipse cx="100" cy="115" rx="15" ry="5" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
        <ellipse cx="150" cy="115" rx="15" ry="5" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
        {/* Connection mesh */}
        <path d="M100 55 L47.5 75" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M100 55 L100 75" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M100 55 L152.5 75" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M47.5 100 L50 110" stroke="rgba(34, 211, 238, 0.1)" strokeDasharray="2,2" />
        <path d="M100 100 L100 110" stroke="rgba(34, 211, 238, 0.1)" strokeDasharray="2,2" />
        <path d="M152.5 100 L150 110" stroke="rgba(34, 211, 238, 0.1)" strokeDasharray="2,2" />
      </svg>
    ),
    Innovation: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140" preserveAspectRatio="xMidYMid slice">
        {/* Neural network style */}
        <circle cx="100" cy="70" r="20" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" />
        <circle cx="100" cy="70" r="10" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.8" />
        <circle cx="100" cy="70" r="3" fill="rgba(34, 211, 238, 0.3)" />
        {/* Outer nodes */}
        <circle cx="50" cy="35" r="8" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        <circle cx="150" cy="35" r="8" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        <circle cx="50" cy="105" r="8" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        <circle cx="150" cy="105" r="8" fill="none" stroke="rgba(34, 211, 238, 0.15)" />
        <circle cx="30" cy="70" r="6" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
        <circle cx="170" cy="70" r="6" fill="none" stroke="rgba(34, 211, 238, 0.12)" />
        {/* Connection lines */}
        <path d="M58 40 L82 58" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M142 40 L118 58" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M58 100 L82 82" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M142 100 L118 82" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M36 70 L80 70" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        <path d="M120 70 L164 70" stroke="rgba(34, 211, 238, 0.12)" strokeDasharray="2,2" />
        {/* Pulse rings */}
        <circle cx="100" cy="70" r="35" fill="none" stroke="rgba(34, 211, 238, 0.08)" strokeDasharray="4,4" />
        <circle cx="100" cy="70" r="50" fill="none" stroke="rgba(34, 211, 238, 0.05)" strokeDasharray="6,6" />
      </svg>
    ),
  };

  return diagrams[category] || diagrams["Full Stack"];
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const isComingSoon = project.status === "Em Breve";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Increased rotation for more dramatic 3D effect
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    // Glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setTransform({ rotateX, rotateY, scale: 1.03 });
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className={`relative cyber-glass rounded-xl overflow-hidden transition-all duration-200 ease-out ${
          isComingSoon 
            ? "border-amber-500/30" 
            : "hover:border-primary/40"
        }`}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glare effect */}
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none z-20 opacity-30"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Architecture Diagram Background - now with parallax */}
        <div 
          className="absolute inset-0 text-primary pointer-events-none transition-transform duration-200"
          style={{
            transform: `translateZ(-20px) scale(1.1) translate(${transform.rotateY * -0.5}px, ${transform.rotateX * 0.5}px)`,
          }}
        >
          <ArchitectureDiagram category={project.category} />
        </div>

        {/* FUI Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/30 pointer-events-none" />

        {/* Project Image */}
        <div
          className={`aspect-video overflow-hidden relative ${
            isComingSoon
              ? "bg-gradient-to-br from-amber-500/10 to-amber-600/5 flex items-center justify-center"
              : "bg-card/50"
          }`}
        >
          {isComingSoon ? (
            <div className="text-center p-6">
              <Rocket className="w-12 h-12 mx-auto mb-3 text-amber-400 animate-float" />
              <p className="text-lg font-display font-bold text-amber-400">Em Breve</p>
              <p className="text-sm text-amber-400/70 font-mono">MISSION.PENDING</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1 font-mono text-xs neon-glow-sm">
                <Star className="w-3 h-3" />
                DESTAQUE
              </Badge>
            </div>
          )}

          {/* Category Icon */}
          <div className="absolute top-3 right-3 cyber-glass p-2 rounded-lg z-10">
            {project.category === "Infrastructure" && <Cloud className="w-4 h-4 text-primary" />}
            {project.category === "Full Stack" && <Globe className="w-4 h-4 text-primary" />}
            {project.category === "Backend" && <Server className="w-4 h-4 text-primary" />}
            {project.category === "Innovation" && <Zap className="w-4 h-4 text-amber-400" />}
          </div>
        </div>
        
        {/* Content with depth */}
        <div 
          className="p-6 relative"
          style={{
            transform: `translateZ(10px)`,
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="text-xs bg-card/50 border-primary/30 text-primary font-mono">
                  {project.category}
                </Badge>
                {project.team && (
                  <Badge variant="outline" className="text-xs bg-card/50 border-border">
                    {project.team.role}
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                {formatDate(project.startDate)} - {formatDate(project.endDate)}
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-1 flex-shrink-0">
              {project.links.demo && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
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
                  className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
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
              <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-3 h-3" />
                MISSION.HIGHLIGHTS
              </h4>
              <ul className="space-y-1">
                {project.highlights.slice(0, 2).map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
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
                className="text-xs bg-card/30 border-border/50 hover:border-primary/50 hover:text-primary transition-colors font-mono"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="inline-flex items-center rounded-md border border-border/50 bg-card/30 px-2 py-0.5 text-xs font-mono hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                    +{project.technologies.length - 4}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3 cyber-glass border-primary/20">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(4).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border/30">
            <Badge className={`${getStatusColor(project.status)} text-xs font-mono`}>
              {project.status}
            </Badge>
            {project.team && (
              <span className="text-xs text-muted-foreground font-mono">
                {project.team.description}
              </span>
            )}
          </div>
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
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 hex-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4 cyber-glass px-4 py-2 rounded-full">
              <Satellite className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                MISSIONS.LOG // PORTFOLIO
              </span>
              <CircuitBoard className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Missoes e Exploracoes
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full neon-glow-sm" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Registro de operacoes concluidas e em andamento - desde infraestrutura cloud ate aplicacoes full stack
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12 cyber-glass p-1 rounded-lg">
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all font-mono text-xs uppercase"
              >
                Destaque
              </TabsTrigger>
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all font-mono text-xs uppercase"
              >
                Pessoais
              </TabsTrigger>
              <TabsTrigger
                value="collaborative"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all font-mono text-xs uppercase"
              >
                Colaborativos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured" className="animate-fade-in">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} featured />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="personal" className="animate-fade-in">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.personal.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborative" className="animate-fade-in">
              <div className="grid gap-8 md:grid-cols-2">
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
