"use client";

import { useMemo, useState, useRef } from "react";
import {
  ArrowUpRight,
  FolderGit2,
  Github,
  SearchX,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../../constants/projects";
import { Project } from "../../types";
import ProjectModal from "../projects/ProjectModal";
import ProjectCard from "../projects/ProjectCard";
import ProjectFilters, {
  Ecosystem,
  Area,
  ProjectType,
} from "../projects/ProjectFilters";
import { event } from "@/lib/gtag";

import styles from "./ProjectsSection.module.css";

const FEATURED_PROJECT_IDS = {
  primary: 22,
  springCloud: 23,
  kubernetes: 24,
  resilientAudit: 21,
} as const;

const FEATURED_DISPLAY_TITLES: Record<number, string> = {
  22: "SafeWallet Core",
  23: "Spring Cloud Microservices",
  24: "Kubernetes Lab",
  21: "Resilient Audit Batch",
};

function getDisplayTitle(project: Project) {
  return FEATURED_DISPLAY_TITLES[project.id] ?? project.title;
}

function getFeaturedTechnologies(project: Project) {
  if (project.id === 22) {
    const preferred = [
      "Java 21",
      "Spring Boot 3.x",
      "Spring Security",
      "Amazon ECS (Fargate)",
      "Amazon RDS (PostgreSQL 15)",
    ];

    return preferred.filter((technology) =>
      project.technologies.includes(technology)
    );
  }

  return project.technologies.slice(0, 5);
}

interface FeaturedProjectProps {
  project: Project;
  variant: "primary" | "secondary";
  eyebrow: string;
  onMoreInfo: (project: Project) => void;
}

function FeaturedProject({
  project,
  variant,
  eyebrow,
  onMoreInfo,
}: FeaturedProjectProps) {
  const technologies = getFeaturedTechnologies(project);
  const isPrimary = variant === "primary";

  const handleGithubClick = () => {
    event("clique_ver_codigo", {
      projeto: project.title,
    });
  };

  return (
    <article
      className={`${styles.featuredProject} ${
        isPrimary
          ? styles.featuredProjectPrimary
          : styles.featuredProjectSecondary
      }`}
    >
      <div className={styles.featuredContent}>
        <div className={styles.featuredTopline}>
          <span className={styles.featuredEyebrow}>{eyebrow}</span>

          <span
            className={`${styles.status} ${
              project.status === "Concluído"
                ? styles.statusCompleted
                : styles.statusPending
            }`}
          >
            <span aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <div className={styles.featuredBody}>
        <div className={styles.featuredCategory}>
          {project.category}
        </div>

        <h4 className={styles.featuredTitle}>
          {getDisplayTitle(project)}
        </h4>

        <p className={styles.featuredDescription}>
          {project.description}
        </p>

        <div
          className={styles.featuredTechnologies}
          aria-label="Tecnologias principais"
        >
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}

          {project.technologies.length > technologies.length && (
            <span className={styles.moreTechnologies}>
              +{project.technologies.length - technologies.length}
            </span>
          )}
        </div>

        <div className={styles.featuredActions}>
          <button
            type="button"
            className={styles.detailsButton}
            onClick={() => onMoreInfo(project)}
          >
            Ver detalhes
            <ArrowUpRight aria-hidden="true" />
          </button>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              onClick={handleGithubClick}
              aria-label={`Abrir código do projeto ${getDisplayTitle(
                project
              )} no GitHub`}
            >
              <Github aria-hidden="true" />
              <span>GitHub</span>
            </a>
          )}
        </div>
        </div>
      </div>

      <div className={styles.featuredVisual}>
        <div className={styles.imageChrome}>
          <span />
          <span />
          <span />
          <small>PROJECT / {String(project.id).padStart(2, "0")}</small>
        </div>

        <div className={styles.imageViewport}>
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Visual do projeto ${getDisplayTitle(project)}`}
            onError={(event) => {
              event.currentTarget.src = "/placeholder.svg";
            }}
          />

          <div className={styles.imageOverlay} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [ecosystem, setEcosystem] =
    useState<Ecosystem>("Todos");
  const [area, setArea] = useState<Area>("Todas");

  /*
   * Agora o catálogo começa mostrando TODOS.
   * A curadoria de destaques possui uma área própria acima.
   */
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const [projectType, setProjectType] =
    useState<ProjectType>("Todos");

  const handleMoreInfo = (project: Project) => {
    event("abrir_modal_projeto", {
      projeto: project.title,
    });

    setSelectedProject(project);
    setModalOpen(true);
  };

  const allProjects = useMemo(() => {
    const combined = [
      ...projects.personal,
      ...projects.collaborative,
    ];

    return combined.sort((a, b) => {
      if (a.featured === b.featured) return 0;

      return a.featured ? -1 : 1;
    });
  }, []);

  useGSAP(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set([
        `.${styles.sectionMarker}`, 
        `.${styles.sectionHeading}`,
        `.${styles.blockHeading}`,
        `.${styles.primarySlot}`,
        `.${styles.secondaryGrid} > article`,
        `.${styles.explorerSection}`
      ], { opacity: 1, clearProps: "all" });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.fromTo(
      [`.${styles.sectionMarker}`, `.${styles.sectionHeading}`],
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08 }
    )
    .fromTo(
      [`.${styles.blockHeading}`, `.${styles.primarySlot}`],
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08 },
      "-=0.4"
    )
    .fromTo(
      `.${styles.secondaryGrid} > article`,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      `.${styles.explorerSection}`,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  const primaryProject = useMemo(
    () =>
      allProjects.find(
        (project) =>
          project.id === FEATURED_PROJECT_IDS.primary
      ),
    [allProjects]
  );

  const springCloudProject = useMemo(
    () =>
      allProjects.find(
        (project) =>
          project.id === FEATURED_PROJECT_IDS.springCloud
      ),
    [allProjects]
  );

  const kubernetesProject = useMemo(
    () =>
      allProjects.find(
        (project) =>
          project.id === FEATURED_PROJECT_IDS.kubernetes
      ),
    [allProjects]
  );

  const resilientAuditProject = useMemo(
    () =>
      allProjects.find(
        (project) =>
          project.id === FEATURED_PROJECT_IDS.resilientAudit
      ),
    [allProjects]
  );

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      let matchEcosystem = false;

      if (ecosystem === "Todos") {
        matchEcosystem = true;
      } else if (ecosystem === "Java") {
        matchEcosystem = project.technologies.some(
          (technology) =>
            technology.includes("Java") ||
            technology.includes("Spring Boot")
        );
      } else if (ecosystem === "Node.js/TypeScript") {
        matchEcosystem = project.technologies.some(
          (technology) =>
            technology.includes("Node.js") ||
            technology.includes("TypeScript") ||
            technology.includes("NestJS")
        );
      }

      let matchArea = false;

      if (area === "Todas") {
        matchArea = true;
      } else if (area === "Backend") {
        matchArea = project.category === "Backend";
      } else if (area === "Full Stack") {
        matchArea =
          project.category === "Full Stack" ||
          project.title.includes("Full-Stack");
      } else if (area === "Cloud & DevOps") {
        matchArea = [
          "Cloud Architecture",
          "Infrastructure",
          "DevOps",
        ].includes(project.category);
      } else if (area === "Sistemas Distribuídos") {
        matchArea = project.technologies.some((technology) =>
          [
            "Microsserviços",
            "Spring Cloud Config",
            "Netflix Eureka",
            "OpenFeign",
          ].includes(technology)
        );
      }

      let matchProjectType = false;

      if (projectType === "Todos") {
        matchProjectType = true;
      } else if (projectType === "Individuais") {
        matchProjectType =
          !project.team ||
          !project.team.size ||
          project.team.size <= 1;
      } else if (projectType === "Equipe Neukox") {
        matchProjectType = project.team?.name === "Neukox";
      } else if (projectType === "Colaborativos") {
        matchProjectType = !!(
          project.team &&
          project.team.size &&
          project.team.size > 1 &&
          project.team.name !== "Neukox"
        );
      }

      const matchFeatured =
        !featuredOnly || project.featured;

      return (
        matchEcosystem &&
        matchArea &&
        matchFeatured &&
        matchProjectType
      );
    });
  }, [
    allProjects,
    ecosystem,
    area,
    featuredOnly,
    projectType,
  ]);

  /*
   * Todos agora é o estado neutro.
   * "Destaques" é que representa filtro ativo.
   */
  const activeFilterCount = useMemo(() => {
    let count = 0;

    if (featuredOnly) count++;
    if (ecosystem !== "Todos") count++;
    if (area !== "Todas") count++;
    if (projectType !== "Todos") count++;

    return count;
  }, [
    featuredOnly,
    ecosystem,
    area,
    projectType,
  ]);

  const activeFilterChips = useMemo(() => {
    const chips: {
      id: string;
      label: string;
      onRemove: () => void;
    }[] = [];

    if (featuredOnly) {
      chips.push({
        id: "featured",
        label: "Destaques",
        onRemove: () => setFeaturedOnly(false),
      });
    }

    if (projectType !== "Todos") {
      chips.push({
        id: "projectType",
        label: projectType,
        onRemove: () => setProjectType("Todos"),
      });
    }

    if (ecosystem !== "Todos") {
      chips.push({
        id: "ecosystem",
        label: ecosystem,
        onRemove: () => setEcosystem("Todos"),
      });
    }

    if (area !== "Todas") {
      chips.push({
        id: "area",
        label: area,
        onRemove: () => setArea("Todas"),
      });
    }

    return chips;
  }, [
    featuredOnly,
    ecosystem,
    area,
    projectType,
  ]);

  const clearFilters = () => {
    setEcosystem("Todos");
    setArea("Todas");
    setProjectType("Todos");
    setFeaturedOnly(false);
  };

  return (
    <section
      id="projetos"
      className={styles.section}
      aria-labelledby="projects-title"
      ref={containerRef}
    >
      <div
        className={styles.backgroundGrid}
        aria-hidden="true"
      />
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* SECTION IDENTITY */}
        <div className={styles.sectionMarker}>
          <span
            className={styles.sectionMarkerIcon}
            aria-hidden="true"
          >
            <FolderGit2 />
          </span>

          <span className={styles.sectionMarkerNumber}>
            05
          </span>

          <span
            className={styles.sectionMarkerSlash}
            aria-hidden="true"
          >
            /
          </span>

          <span className={styles.sectionMarkerLabel}>
            PROJETOS
          </span>
        </div>

        <header className={styles.sectionHeading}>
          <h2
            id="projects-title"
            className={styles.mainTitle}
          >
            Projetos que demonstram
            <br />
            engenharia na prática.
          </h2>

          <p className={styles.sectionLead}>
            Arquitetura backend, sistemas distribuídos,
            cloud e infraestrutura aplicados em projetos
            construídos na prática.
          </p>

          <span
            className={styles.headingAccent}
            aria-hidden="true"
          />
        </header>

        {/* FEATURED PROJECTS */}
        <div className={styles.featuredSection}>
          <div className={styles.blockHeading}>
            <div>
              <span className={styles.blockIndex}>
                01 / CURADORIA
              </span>

              <h3>Projetos em destaque</h3>
            </div>

            <p>
              Uma seleção dos projetos que melhor representam
              minha evolução técnica.
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {primaryProject && (
              <div className={styles.primarySlot}>
                <FeaturedProject
                  project={primaryProject}
                  variant="primary"
                  eyebrow="PROJETO PRINCIPAL"
                  onMoreInfo={handleMoreInfo}
                />
              </div>
            )}

            <div className={styles.secondaryGrid}>
              {springCloudProject && (
                <FeaturedProject
                  project={springCloudProject}
                  variant="secondary"
                  eyebrow="SISTEMAS DISTRIBUÍDOS"
                  onMoreInfo={handleMoreInfo}
                />
              )}

              {kubernetesProject && (
                <FeaturedProject
                  project={kubernetesProject}
                  variant="secondary"
                  eyebrow="ORQUESTRAÇÃO"
                  onMoreInfo={handleMoreInfo}
                />
              )}

              {resilientAuditProject && (
                <FeaturedProject
                  project={resilientAuditProject}
                  variant="secondary"
                  eyebrow="PERFORMANCE BACKEND"
                  onMoreInfo={handleMoreInfo}
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={styles.sectionDivider}
          aria-hidden="true"
        />

        {/* EXPLORER */}
        <div className={styles.explorerSection}>
          <div className={styles.explorerHeading}>
            <div>
              <span className={styles.blockIndex}>
                02 / PROJECT INDEX
              </span>

              <h3>Explorar projetos</h3>

              <p>
                Filtre o histórico por ecossistema, área
                técnica e tipo de projeto.
              </p>
            </div>

            <div
              className={styles.projectCount}
              aria-label={`${filteredProjects.length} projetos exibidos`}
            >
              <strong>
                {String(filteredProjects.length).padStart(
                  2,
                  "0"
                )}
              </strong>

              <span>PROJETOS</span>
            </div>
          </div>

          <div className={styles.explorerLayout}>
            <ProjectFilters
              ecosystem={ecosystem}
              setEcosystem={setEcosystem}
              area={area}
              setArea={setArea}
              featuredOnly={featuredOnly}
              setFeaturedOnly={setFeaturedOnly}
              projectType={projectType}
              setProjectType={setProjectType}
              activeFilterCount={activeFilterCount}
              clearFilters={clearFilters}
            />

            <div className={styles.catalog}>
              {activeFilterChips.length > 0 && (
                <div className={styles.activeFilters}>
                  <span>FILTROS ATIVOS</span>

                  <div className={styles.activeFilterList}>
                    {activeFilterChips.map((chip) => (
                      <button
                        type="button"
                        key={chip.id}
                        onClick={chip.onRemove}
                      >
                        {chip.label}
                        <span aria-hidden="true">×</span>
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className={styles.clearFilters}
                    onClick={clearFilters}
                  >
                    LIMPAR
                  </button>
                </div>
              )}

              {filteredProjects.length > 0 ? (
                <div className={styles.projectsGrid}>
                  {filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onMoreInfo={handleMoreInfo}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <span
                    className={styles.emptyIcon}
                    aria-hidden="true"
                  >
                    <SearchX />
                  </span>

                  <span className={styles.emptyEyebrow}>
                    PROJECT INDEX / EMPTY
                  </span>

                  <h4>Nenhum projeto encontrado.</h4>

                  <p>
                    Ajuste os filtros para explorar outros
                    projetos do portfólio.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </div>
    </section>
  );
}
