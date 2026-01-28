"use client";

import { Badge } from "@/components/ui/badge";
import { Palette, Server, Wrench, Cloud, Orbit } from "lucide-react";
import { technologies } from "../../constants/technologies";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Palette,
    color: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    data: technologies.frontend,
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.3)",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    data: technologies.backend,
  },
  {
    id: "tools",
    title: "Ferramentas",
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    glowColor: "rgba(139, 92, 246, 0.3)",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    data: technologies.tools,
  },
  {
    id: "infrastructure",
    title: "Infraestrutura",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.3)",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    data: technologies.infrastructure,
  },
];

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      {/* Decorative Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10">
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute inset-16 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: '40s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Orbit className="w-5 h-5 text-primary animate-spin-slow" />
              <span className="text-sm uppercase tracking-widest text-primary font-medium">Stack</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Tecnologias
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e tecnologias que utilizo para criar solucoes robustas e escalaveis
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((category) => {
              const Icon = category.icon;
              
              return (
                <div
                  key={category.id}
                  className="group glass-card-hover rounded-2xl p-6 text-center transition-all duration-500"
                  style={{
                    ['--glow-color' as string]: category.glowColor,
                  }}
                >
                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    {/* Glow on Hover */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ background: category.glowColor }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.data.map((tech: string) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
