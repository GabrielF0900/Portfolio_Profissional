// Este arquivo contém funções utilitárias puramente JavaScript/TypeScript
import { Project } from '../types'

export const getFeaturedProjects = (projectList: Project[]): Project[] => {
  return projectList.filter((project) => project.featured)
}

export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "Presente"
  const [year, month] = dateString.split("-")
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
  return `${months[Number.parseInt(month) - 1]} ${year}`
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Concluído":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    case "Em desenvolvimento":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
    case "Em produção":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
  }
}
