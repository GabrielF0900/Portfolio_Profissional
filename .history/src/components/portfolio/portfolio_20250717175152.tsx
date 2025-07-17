"use client" // Mantém esta diretiva para indicar que é um Client Component

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Code,
  Palette,
  Server,
  Zap,
  Menu,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"
// Importa dados e utilitários de arquivos puramente JavaScript/TypeScript
import { projects, technologies, softSkills, navigationItems } from "@/data/portfolio-data"
import { formatDate, getStatusColor, getFeaturedProjects } from "@/lib/utils"

// Interfaces para tipagem
interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: string
  category: string
  startDate: string | null
  endDate: string | null
  image?: string
  highlights?: string[]
  featured?: boolean
  links: {
    demo?: string
    github?: string
    case_study?: string
  }
  client?: string
  team?: {
    role: string
    description: string
  }
}

interface NavigationItem {
  id: string
  label: string
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Fecha o menu mobile após clicar
    }
  }

  // Hook para detectar seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre", "experiencia", "projetos", "tecnologias", "skills", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Gabriel Falcão
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item: NavigationItem) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item: NavigationItem) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-left text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center gap-2 px-3 pt-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Disponível para novos projetos
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Gabriel Falcão
                <span className="block text-primary">da Cruz</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais e soluções inovadoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("projetos")}>
                Ver Projetos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="mailto:gabriel@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="lg" asChild>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre mim</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Com mais de 3 anos de experiência em desenvolvimento web, especializo-me em criar aplicações modernas
                  e escaláveis. Minha paixão está em transformar ideias complexas em soluções digitais elegantes e
                  funcionais.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Trabalho com as tecnologias mais atuais do mercado e tenho experiência tanto em projetos individuais
                  quanto em equipes multidisciplinares, sempre focando na qualidade do código e na experiência do
                  usuário.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Brasil</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                          2022 - Presente
                        </Badge>
                        <span className="text-sm text-muted-foreground mt-1">2+ anos</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      Como fundador da Neukox, lidero o desenvolvimento técnico e a visão estratégica da empresa.
                      Responsável por toda a arquitetura de software e desenvolvimento de soluções inovadoras.
                    </CardDescription>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Principais Responsabilidades:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Fundação e liderança técnica da empresa Neukox</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Desenvolvimento de aplicações web usando React, Next.js e TypeScript</span>
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
                            <span>Tomada de decisões estratégicas sobre tecnologia e produto</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Mentoria de desenvolvedores e estabelecimento de padrões de código</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Principais Conquistas:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Fundação e crescimento da Neukox como empresa de tecnologia</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Desenvolvimento de arquitetura que suporta crescimento exponencial de usuários</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Liderança de equipe que entregou projetos com 40% de melhoria em performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Estabelecimento de cultura de desenvolvimento ágil e qualidade de código</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="outline" className="text-xs">
                          React
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Next.js
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          TypeScript
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Node.js
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          PostgreSQL
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          AWS
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

      {/* Projects Section */}
      <section id="projetos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meus Projetos</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma seleção dos meus trabalhos mais recentes, desde projetos pessoais até colaborações em equipe.
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
                  {[...getFeaturedProjects(projects.personal), ...getFeaturedProjects(projects.collaborative)].map(
                    (project: Project) => (
                      <Card
                        key={project.id}
                        className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
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
                                {formatDate(project.startDate)} - {formatDate(project.endDate)}
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
                                    <Github className="w-4 h-4" />
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
                              <h4 className="text-sm font-semibold mb-2">Destaques:</h4>
                              <ul className="text-xs text-muted-foreground space-y-1">
                                {project.highlights.slice(0, 2).map((highlight: string, index: number) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech: string) => (
                              <Badge key={tech} variant="outline" className="text-xs">
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
                            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                            {project.team && (
                              <span className="text-xs text-muted-foreground">{project.team.description}</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="personal">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.personal.map((project: Project) => (
                    <Card
                      key={project.id}
                      className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
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
                              {formatDate(project.startDate)} - {formatDate(project.endDate)}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            {project.links.demo && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
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
                                  <Github className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 text-base">{project.description}</CardDescription>

                        {project.highlights && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2">Principais recursos:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {project.highlights.map((highlight: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>

                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
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
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex gap-2 mb-2">
                              <Badge variant="secondary">{project.category}</Badge>
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
                              {project.client} • {formatDate(project.startDate)} - {formatDate(project.endDate)}
                            </p>
                            {project.team && (
                              <p className="text-sm text-muted-foreground">{project.team.description}</p>
                            )}
                          </div>
                          <div className="flex gap-1">
                            {project.links.demo && (
                              <Button variant="ghost" size="sm" asChild>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" title="Ver Demo">
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
                        <CardDescription className="mb-4 text-base">{project.description}</CardDescription>

                        {project.highlights && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2">Resultados alcançados:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {project.highlights.map((highlight: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 5).map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 5}
                            </Badge>
                          )}
                        </div>

                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Tecnologias</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ferramentas e tecnologias que utilizo para criar soluções robustas e escaláveis.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.frontend.slice(0, 6).map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.backend.slice(0, 6).map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Ferramentas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.tools.map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Infraestrutura</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {technologies.infrastructure.map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Soft Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Habilidades interpessoais que complementam minha expertise técnica.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Envie uma Mensagem</CardTitle>
                <CardDescription className="text-center">
                  Preencha o formulário abaixo e entrarei em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Título *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Descrição *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva seu projeto ou dúvida em detalhes..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-xl mb-8 opacity-90">
              Estou sempre aberto a novos desafios e oportunidades interessantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <a href="mailto:gabriel@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Gabriel Falcão da Cruz</h3>
                <p className="text-sm">Desenvolvedor Full Stack</p>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center">
              <p className="text-sm text-slate-400">© 2024 Gabriel Falcão da Cruz. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
