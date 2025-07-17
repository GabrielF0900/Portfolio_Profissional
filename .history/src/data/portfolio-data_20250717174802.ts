// Este arquivo contém os dados do portfólio, que são puramente JavaScript/TypeScript

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

interface Technologies {
  frontend: string[]
  backend: string[]
  tools: string[]
  infrastructure: string[]
}

interface NavigationItem {
  id: string
  label: string
}

export const projects: {
  personal: Project[]
  collaborative: Project[]
} = {
  personal: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado, gestão de estoque em tempo real e analytics avançados.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      status: "Em desenvolvimento",
      category: "Full Stack",
      startDate: "2024-01",
      endDate: null,
      image: "/images/project-placeholder-1.png",
      highlights: [
        "Sistema de pagamentos integrado com Stripe",
        "Dashboard administrativo completo",
        "API RESTful com documentação Swagger",
      ],
      featured: true,
      links: {
        demo: "#",
        github: "#",
        case_study: null,
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, notificações push e integração com calendários.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2023-08",
      endDate: "2023-12",
      image: "/images/project-placeholder-2.png",
      highlights: [
        "Colaboração em tempo real com WebSockets",
        "Sistema de notificações push",
        "Integração com Google Calendar",
      ],
      featured: true,
      links: {
        demo: "#",
        github: "#",
        case_study: "#",
      },
    },
    {
      id: 3,
      title: "API REST Financeira",
      description:
        "API robusta para gestão financeira pessoal com autenticação JWT, documentação completa e testes automatizados.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Swagger", "Jest", "Docker"],
      status: "Concluído",
      category: "Backend",
      startDate: "2023-05",
      endDate: "2023-07",
      image: "/images/project-placeholder-3.png",
      highlights: ["Documentação completa com Swagger", "Cobertura de testes de 95%", "Deploy automatizado com Docker"],
      featured: false,
      links: {
        demo: null,
        github: "#",
        case_study: "#",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Site pessoal desenvolvido com foco em performance e SEO, incluindo blog integrado e sistema de contato.",
      technologies: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Vercel"],
      status: "Concluído",
      category: "Frontend",
      startDate: "2023-03",
      endDate: "2023-04",
      image: "/images/project-placeholder-4.png",
      highlights: ["Score 100 no Google PageSpeed", "Blog integrado com MDX", "Design responsivo e acessível"],
      featured: false,
      links: {
        demo: "#",
        github: "#",
        case_study: null,
      },
    },
  ],
  collaborative: [
    {
      id: 5,
      title: "Sistema de Gestão Hospitalar",
      description:
        "Sistema completo para gestão de pacientes, médicos, procedimentos hospitalares e prontuários eletrônicos com alta segurança.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis", "AWS"],
      status: "Em produção",
      category: "Full Stack",
      startDate: "2023-01",
      endDate: "2023-10",
      image: "/images/project-placeholder-5.png",
      team: {
        size: 5,
        role: "Tech Lead",
        description: "Equipe de 5 desenvolvedores",
      },
      client: "Hospital Regional",
      highlights: ["Gestão de 10.000+ pacientes", "Conformidade com LGPD", "Sistema de backup automatizado"],
      featured: true,
      links: {
        demo: null,
        github: null,
        case_study: "#",
      },
    },
    {
      id: 6,
      title: "Plataforma de Educação Online",
      description:
        "LMS completo com sistema de videoaulas, exercícios interativos, acompanhamento de progresso e certificações digitais.",
      technologies: ["React", "Express.js", "PostgreSQL", "AWS", "FFmpeg", "WebRTC"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2022-06",
      endDate: "2023-02",
      image: "/images/project-placeholder-6.png",
      team: {
        size: 8,
        role: "Full Stack Developer",
        description: "Equipe de 8 desenvolvedores",
      },
      client: "EduTech Solutions",
      highlights: [
        "5.000+ alunos ativos",
        "Sistema de videoconferência integrado",
        "Certificações digitais blockchain",
      ],
      featured: true,
      links: {
        demo: "#",
        github: null,
        case_study: "#",
      },
    },
    {
      id: 7,
      title: "App de Delivery",
      description:
        "Aplicativo mobile e web para delivery de comida com rastreamento em tempo real, sistema de pagamentos e avaliações.",
      technologies: ["React Native", "React", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
      status: "Concluído",
      category: "Mobile/Web",
      startDate: "2022-03",
      endDate: "2022-08",
      image: "/images/project-placeholder-7.png",
      team: {
        size: 6,
        role: "Mobile Developer",
        description: "Equipe de 6 desenvolvedores",
      },
      client: "FoodTech Startup",
      highlights: [
        "Rastreamento GPS em tempo real",
        "Integração com múltiplos pagamentos",
        "Sistema de avaliações e reviews",
      ],
      featured: false,
      links: {
        demo: "#",
        github: null,
        case_study: null,
      },
    },
  ],
}

export const technologies = {
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"],
  backend: ["Node.js", "Express.js", "Laravel", "PHP", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
  infrastructure: ["Docker", "AWS", "Vercel", "Netlify", "Linux", "Nginx", "CI/CD"],
}

export const softSkills = [
  "Comunicação eficaz",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Pensamento crítico",
  "Adaptabilidade",
  "Liderança técnica",
  "Gestão de tempo",
  "Aprendizado contínuo",
]

export const navigationItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
]
