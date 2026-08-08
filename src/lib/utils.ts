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

export const getBackendProjects = (projectList: Project[]): Project[] => {
  return projectList.filter(
    (project) =>
      project.category === "Backend" ||
      hasTechnology(project, "Java") ||
      hasTechnology(project, "Spring Boot")
  );
};

export const getCloudProjects = (projectList: Project[]): Project[] => {
  return projectList.filter((project) =>
    ["Cloud Architecture", "Infrastructure", "DevOps"].includes(
      project.category
    )
  );
};

export const getFullStackProjects = (projectList: Project[]): Project[] => {
  return projectList.filter(
    (project) =>
      project.category === "Full Stack" || hasTechnology(project, "Node.js")
  );
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
