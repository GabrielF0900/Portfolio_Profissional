"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code } from "lucide-react";
import { projects } from "../../constants/projects";
import {
  formatDate,
  getStatusColor,
  getFeaturedProjects,
} from "../../lib/utils";
import { Project } from "../../types";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, desde projetos
              pessoais até colaborações em equipe.
            </p>
          </div>

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12">
              <TabsTrigger value="featured" className="text-base">
                Em Destaque
              </TabsTrigger>
              <TabsTrigger value="personal" className="text-base">
                Pessoais
              </TabsTrigger>
              <TabsTrigger value="collaborative" className="text-base">
                Colaborativos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  ...getFeaturedProjects(projects.personal),
                  ...getFeaturedProjects(projects.collaborative),
                ].map((project: Project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden relative cursor-pointer group">
                      {project.links.demo || project.links.github ? (
                        <a
                          href={project.links.demo || project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant="secondary"
                          className="bg-primary/90 text-primary-foreground"
                        >
                          Destaque
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                            {project.team && (
                              <Badge variant="outline" className="text-xs">
                                {project.team.role}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {formatDate(project.startDate)} -{" "}
                            {formatDate(project.endDate)}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {project.links.demo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver Código"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base line-clamp-3">
                        {project.description}
                      </CardDescription>

                      {project.highlights && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">
                            Destaques:
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.highlights
                              .slice(0, 2)
                              .map((highlight: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        {project.team && (
                          <span className="text-xs text-muted-foreground">
                            {project.team.description}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="personal">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.personal.map((project: Project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden relative cursor-pointer group">
                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {project.category}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {formatDate(project.startDate)} -{" "}
                            {formatDate(project.endDate)}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {project.links.demo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver Código"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        {project.description}
                      </CardDescription>

                      {project.highlights && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">
                            Principais recursos:
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.highlights.map(
                              (highlight: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          .slice(0, 4)
                          .map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborative">
              <div className="grid gap-8 md:grid-cols-2">
                {projects.collaborative.map((project: Project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-video overflow-hidden relative cursor-pointer group">
                      {project.links.demo ? (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex gap-2 mb-2">
                            <Badge variant="secondary">
                              {project.category}
                            </Badge>
                            {project.team && (
                              <Badge variant="outline" className="text-xs">
                                {project.team.role}
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {project.client} • {formatDate(project.startDate)} -{" "}
                            {formatDate(project.endDate)}
                          </p>
                          {project.team && (
                            <p className="text-sm text-muted-foreground">
                              {project.team.description}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-1">
                          {project.links.demo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Ver Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.case_study && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.links.case_study}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Case Study"
                              >
                                <Code className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-base">
                        {project.description}
                      </CardDescription>

                      {project.highlights && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">
                            Resultados alcançados:
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {project.highlights.map(
                              (highlight: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          .slice(0, 5)
                          .map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 5}
                          </Badge>
                        )}
                      </div>

                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
