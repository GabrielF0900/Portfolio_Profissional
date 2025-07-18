import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experiência Profissional</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e contribuições em organizações de destaque.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

            {/* Experience Item */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">Fundador e Programador Full Stack</CardTitle>
                      <h3 className="text-lg font-semibold mt-1">Neukox</h3>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="secondary" className="w-fit">
                        2025 - Presente
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">3 meses</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Como fundador da Neukox, lidero o desenvolvimento técnico e a visão estratégica da organização.
                    Responsável por toda a arquitetura de software e desenvolvimento de soluções inovadoras.
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Principais Responsabilidades:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fundação e liderança técnica da organização Neukox</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Desenvolvimento de aplicações web usando React, Node.js e TypeScript</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Arquitetura e implementação de sistemas escaláveis e APIs RESTful</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Gestão de equipe de desenvolvimento e definição de processos técnicos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Tomada de decisões estratégicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>Orquestração das atividades de desenvolvimento</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Principais Conquistas:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fundação e liderança técnica da organização Neukox</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Foco em desenvolvimento de arquitetura com ênfase em escalabilidade e performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Liderança de equipe que desenvolveu um sistema com capacidade de melhorar significativamente as resoluções de problemas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Estabelecimento de cultura de desenvolvimento ágil e qualidade de código melhorando então </span>
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
                    <p className="text-sm">Experiências anteriores e projetos freelance</p>
                    <p className="text-xs mt-1">Disponível para discussão durante entrevista</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
