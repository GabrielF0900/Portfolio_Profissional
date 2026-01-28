"use client";

import { 
  MessageSquare, 
  Users, 
  Lightbulb, 
  Brain, 
  RefreshCw, 
  Award, 
  Clock, 
  BookOpen,
  Cpu
} from "lucide-react";
import { softSkills } from "../../constants/navigation";

const skillIcons: { [key: string]: React.ElementType } = {
  "Comunicacao eficaz": MessageSquare,
  "Trabalho em equipe": Users,
  "Resolucao de problemas": Lightbulb,
  "Pensamento critico": Brain,
  "Adaptabilidade": RefreshCw,
  "Lideranca tecnica": Award,
  "Gestao de tempo": Clock,
  "Aprendizado continuo": BookOpen,
};

const skillColors = [
  { bg: "bg-cyan-500/10", text: "text-cyan-400", glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]" },
  { bg: "bg-blue-500/10", text: "text-blue-400", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]" },
  { bg: "bg-violet-500/10", text: "text-violet-400", glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]" },
  { bg: "bg-green-500/10", text: "text-green-400", glow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]" },
  { bg: "bg-amber-500/10", text: "text-amber-400", glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]" },
  { bg: "bg-rose-500/10", text: "text-rose-400", glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]" },
  { bg: "bg-teal-500/10", text: "text-teal-400", glow: "group-hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]" },
  { bg: "bg-indigo-500/10", text: "text-indigo-400", glow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Cpu className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-primary font-medium">Competencias</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Modulos de Dados
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Habilidades interpessoais que complementam minha expertise tecnica
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {softSkills.map((skill: string, index: number) => {
              const Icon = skillIcons[skill] || Brain;
              const colorScheme = skillColors[index % skillColors.length];
              
              return (
                <div
                  key={index}
                  className={`group glass-card-hover rounded-xl p-5 transition-all duration-300 ${colorScheme.glow}`}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${colorScheme.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colorScheme.text}`} />
                    </div>
                    
                    {/* Text */}
                    <span className="font-medium text-foreground text-sm leading-tight">
                      {skill}
                    </span>
                  </div>
                  
                  {/* Progress Bar Effect */}
                  <div className="mt-4 h-1 bg-secondary/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${colorScheme.text.replace('text-', 'from-')} to-transparent opacity-60 group-hover:opacity-100 transition-opacity`}
                      style={{ width: `${85 + Math.random() * 15}%` }}
                    />
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
