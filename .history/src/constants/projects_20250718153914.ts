import { Project, PortfolioData } from '../types'

export const projects: PortfolioData = {
  personal: [
    {
      id: 1,
      title: "LoginFull",
      description:
        "LoginFull é um sistema completo de autenticação e autorização, projetado para ser integrado facilmente em aplicações web. Ele oferece funcionalidades como registro de usuário, login, logout com segurança em JWT e separação de papeis.",
      technologies: ["React", "Express.js", "PostgreSQL", "AWS", "FFmpeg", "WebRTC"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2025-",
      endDate: "2025-",
      image: "/images/project-placeholder-6.png",
      highlights: [
        "5.000+ alunos ativos",
        "Sistema de videoconferência integrado",
        "Certificações digitais blockchain",
      ],
      featured: true,
      links: {
        demo: "#",
        github: "#",
        case_study: "#",
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
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico responsivo com visualizações interativas, previsões detalhadas e alertas personalizados.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      status: "Concluído",
      category: "Frontend",
      startDate: "2023-06",
      endDate: "2023-08",
      image: "/images/project-placeholder-3.png",
      highlights: [
        "Visualizações em tempo real",
        "Sistema de alertas customizáveis",
        "Interface responsiva e intuitiva",
      ],
      featured: false,
      links: {
        demo: "#",
        github: "#",
        case_study: null,
      },
    },
    {
      id: 4,
      title: "Blog Engine",
      description:
        "Sistema de blog moderno com editor rich-text, sistema de comentários, tags, categorias e otimização SEO automática.",
      technologies: ["Next.js", "MDX", "Prisma", "SQLite", "NextAuth"],
      status: "Em produção",
      category: "Full Stack",
      startDate: "2023-03",
      endDate: "2023-06",
      image: "/images/project-placeholder-4.png",
      highlights: [
        "Editor de texto avançado",
        "SEO automático otimizado",
        "Sistema de comentários integrado",
      ],
      featured: false,
      links: {
        demo: "#",
        github: "#",
        case_study: "#",
      },
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description:
        "Aplicativo para rastreamento de portfólio de criptomoedas com gráficos em tempo real, alertas de preço e análise de performance.",
      technologies: ["React Native", "React", "CoinGecko API", "SQLite", "Chart.js"],
      status: "Concluído",
      category: "Mobile/Web",
      startDate: "2022-12",
      endDate: "2023-03",
      image: "/images/project-placeholder-5.png",
      highlights: [
        "Sincronização cross-platform",
        "Alertas de preço em tempo real",
        "Análise detalhada de performance",
      ],
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
      id: 6,
      title: "Sistema de Gerenciamento de TCC",
      description:
        "Nosso Sistema de Gerenciamento de TCC permite cadastrar usuários, criar e acompanhar o desenvolvimento dos Trabalhos de Conclusão de Curso por meio de um algoritmo exclusivo que calcula o progresso em cinco etapas. Com foco em desmistificar e reduzir o medo dos alunos em relação ao TCC, oferecemos uma gestão clara, estruturada e motivadora para garantir que cada etapa seja cumprida com segurança e eficiência.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      status: "Em desenvolvimento",
      category: "Full Stack",
      startDate: "2024-01",
      endDate: null,
      image: "/images/project-placeholder-1.png",
      team: {
        size: 4,
        role: "Tech Lead",
        description: "Equipe de 4 desenvolvedores",
      },
      client: "Projeto Acadêmico",
      highlights: [
        "Monitoramento inteligente do progresso do TCC.",
        "Dashboard administrativo completo.",
        "Foco no suporte ao aluno e na redução do medo do TCC.",
      ],
      featured: true,
      links: {
        demo: "#",
        github: "#",
        case_study: null,
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
