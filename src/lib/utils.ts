// Este arquivo contém funções utilitárias puramente JavaScript/TypeScript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFeaturedProjects = (projectList: Project[]): Project[] => {
  return projectList.filter((project) => project.featured);
};

const hasTechnology = (project: Project, technology: string): boolean =>
  project.technologies.some((tech) =>
    tech.toLowerCase().includes(technology.toLowerCase())
  );

const hasAnyTechnology = (project: Project, technologies: string[]): boolean =>
  technologies.some((technology) => hasTechnology(project, technology));

// Filtro de Ecossistema/Linguagem (barra de filtros "Explorar Catálogo")
export type EcosystemFilter = "all" | "java" | "node";

export const matchesEcosystem = (
  project: Project,
  ecosystem: EcosystemFilter
): boolean => {
  if (ecosystem === "all") return true;
  if (ecosystem === "java") {
    return hasAnyTechnology(project, ["Java", "Spring Boot"]);
  }
  return hasAnyTechnology(project, ["Node.js", "TypeScript", "NestJS"]);
};

// Um projeto é considerado "Sistemas Distribuídos" quando usa tecnologias
// típicas de arquiteturas distribuídas/microsserviços
export const isDistributedSystemsProject = (project: Project): boolean =>
  hasAnyTechnology(project, [
    "Spring Cloud",
    "Eureka",
    "OpenFeign",
    "Kafka",
    "RabbitMQ",
    "gRPC",
  ]) ||
  project.title.toLowerCase().includes("microservi") ||
  project.title.toLowerCase().includes("microsserviç");

// Filtro de Área de Atuação (barra de filtros "Explorar Catálogo")
export type AreaFilter =
  | "all"
  | "backend"
  | "fullstack"
  | "cloud"
  | "distributed";

export const matchesArea = (project: Project, area: AreaFilter): boolean => {
  switch (area) {
    case "all":
      return true;
    case "backend":
      return project.category === "Backend";
    case "fullstack":
      return project.category === "Full Stack";
    case "cloud":
      return ["Cloud Architecture", "Infrastructure", "DevOps"].includes(
        project.category
      );
    case "distributed":
      return isDistributedSystemsProject(project);
  }
};

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "Presente";
  const [year, month] = dateString.split("-");
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return `${months[Number.parseInt(month) - 1]} ${year}`;
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Concluído":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    case "Em desenvolvimento":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
    case "Em produção":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
};
