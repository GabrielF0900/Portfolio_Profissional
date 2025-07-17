// Tipos centralizados para o projeto
export interface Project {
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
    demo?: string | null
    github?: string | null
    case_study?: string | null
  }
  client?: string
  team?: {
    role: string
    description: string
    size?: number
  }
}

export interface Technologies {
  frontend: string[]
  backend: string[]
  tools: string[]
  infrastructure: string[]
}

export interface NavigationItem {
  id: string
  label: string
}

export interface PortfolioData {
  personal: Project[]
  collaborative: Project[]
}
