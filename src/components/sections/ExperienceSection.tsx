import { Badge } from "@/components/ui/badge";
import { Orbit, Rocket, MapPin, Target } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Trajetoria Orbital
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada profissional atraves do universo da tecnologia
            </p>
          </div>

          {/* Orbital Timeline */}
          <div className="relative">
            {/* Central Orbit Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 lg:-translate-x-1/2">
              {/* Animated Pulse */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-ping" />
            </div>

            {/* Experience Item - Main Station */}
            <div className="relative flex flex-col lg:flex-row gap-8 pb-16">
              {/* Timeline Node - Planet */}
              <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-cyan">
                    <Rocket className="w-7 h-7 text-primary-foreground" />
                  </div>
                  {/* Orbital Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" style={{ transform: 'scale(1.3)' }} />
                </div>
              </div>

              {/* Content Card */}
              <div className="lg:w-1/2 lg:pr-16 ml-24 lg:ml-0 lg:text-right">
                {/* Empty on mobile, shows on desktop for alignment */}
              </div>
              
              <div className="lg:w-1/2 lg:pl-16 ml-24 lg:ml-0">
                <div className="glass-card-hover rounded-2xl p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20">
                        2025 - Presente
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground border-border">
                        7 meses
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-1">
                        Fundador e Programador Full Stack
                      </h3>
                      <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Orbit className="w-4 h-4 text-accent" />
                        Neukox
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Como fundador da Neukox, lidero o desenvolvimento tecnico e
                    a visao estrategica da organizacao. Responsavel por toda a
                    arquitetura de software e desenvolvimento de solucoes
                    inovadoras.
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Principais Responsabilidades
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Fundacao e lideranca tecnica da organizacao Neukox",
                        "Desenvolvimento de aplicacoes web usando React, Node.js e TypeScript",
                        "Arquitetura e implementacao de sistemas escalaveis e APIs RESTful",
                        "Gestao de equipe de desenvolvimento e definicao de processos tecnicos",
                        "Tomada de decisoes estrategicas",
                        "Orquestracao das atividades de desenvolvimento"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-green-500" />
                      Principais Conquistas
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Fundacao e lideranca tecnica da organizacao Neukox",
                        "Foco em desenvolvimento de arquitetura com enfase em escalabilidade e performance",
                        "Lideranca de equipe que desenvolveu um sistema com capacidade de melhorar significativamente as resolucoes de problemas",
                        "Estabelecimento de cultura de desenvolvimento agil e qualidade de codigo"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {["TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL", "Express", "Docker"].map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs bg-secondary/50 border-border hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Future Station Placeholder */}
            <div className="relative flex flex-col lg:flex-row gap-8">
              {/* Timeline Node - Distant Planet */}
              <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-secondary border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              <div className="lg:w-1/2 lg:pr-16 ml-24 lg:ml-0">
                {/* Empty for layout */}
              </div>
              
              <div className="lg:w-1/2 lg:pl-16 ml-24 lg:ml-0">
                <div className="glass-card rounded-2xl p-6 border-dashed">
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">
                      Proxima estacao na trajetoria...
                    </p>
                    <p className="text-xs mt-1">
                      Disponivel para discussao durante entrevista
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
