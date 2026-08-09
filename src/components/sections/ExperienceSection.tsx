import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Experiência Profissional
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e contribuições em organizações de
              destaque.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

            {/* Experience Item */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex flex-col gap-3 items-start">
                      <CardTitle className="text-xl text-primary">
                        Fundador e Líder Técnico — Neukox
                      </CardTitle>
                      <Button variant="outline" size="sm" className="h-8" asChild>
                        <a href="https://github.com/Neukox" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" />
                          Visitar Organização
                        </a>
                      </Button>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="secondary" className="w-fit">
                        Abril 2025 – Abril 2026
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">
                        1 ano
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Fundei e liderei tecnicamente a Neukox, definindo arquitetura de software, processos de desenvolvimento e prioridades técnicas da equipe. Apliquei metodologia ágil (Kanban) para gestão de entregas e implementei pipeline de CI/CD com GitHub Actions e Docker, padronizando o processo de deploy. A base arquitetural que uso hoje em Java, Spring Boot e AWS — decisões de design, gestão de prioridades técnicas e disciplina de CI/CD — foi consolidada na prática liderando essa equipe.
                    <br /><br />
                    <strong>Resultados:</strong> +20% de produtividade da equipe após adoção de Kanban &middot; -30% no tempo de provisionamento de ambientes com CI/CD automatizado
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Responsabilidades:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Fundação e liderança técnica da organização
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Definição de arquitetura e padrões de desenvolvimento
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Gestão de equipe e priorização técnica
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Implementação de pipeline CI/CD
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Conquistas:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Redução mensurável no tempo de deploy via automação
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Aumento de produtividade da equipe com adoção de metodologia ágil
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Estabelecimento de cultura de qualidade de código e revisão técnica
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="text-xs">
                        TypeScript
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Node.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Express
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Docker
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JWT
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        AWS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ORM Prisma
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Experience Placeholder */}
            <div className="relative flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 border-dashed">
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground">
                    <p className="text-xs mt-1">
                      Disponível para discussão durante entrevista
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
