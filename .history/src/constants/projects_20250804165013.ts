import { Project, PortfolioData } from '../types'

export const projects: PortfolioData = {
  personal: [
    {
      id: 1,
      title: "LoginFull",
      description:
        "LoginFull é um sistema completo de autenticação e autorização, projetado para ser integrado facilmente em aplicações web. Ele oferece funcionalidades como registro de usuário, login, logout com segurança em JWT e separação de papeis.",
      technologies: ["React", "Tailwind CSS", "PostgreSQL", "TypeScript", "ORM Prisma"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2025-07",
      endDate: "2025-07",
      image: "/loginfull.jpeg",
      highlights: [
        "Segurança com JWT.",
        "Separação de papeis.",
        "Middlewares para interceptação das requisições.",
      ],
      featured: true,
      links: {
        github: "https://github.com/GabrielF0900/LoginFull",
        case_study: "#",
      },
    },
    {
      id: 2,
      title: "NodeAuth_API",
      description:
        "Uma API robusta de autenticação e autorização, desenvolvida com foco em JWT e separação de papéis. Ideal para aplicações que necessitam de controle de acesso seguro e eficiente.",
      technologies: [ "Node.js",  "Express", "Docker", "JWT", "Prisma", "PostgreSQL", "TypeScript"],
      status: "Concluído",
      category: "Backend",
      startDate: "2025-06",
      endDate: "2025-06",
      image: "/auth.jpg",
      highlights: [
        "Separação de papeis.",
        "Middlewares para controle de acesso.",
        "Testes com Insomnia",
      ],
      featured: false,
      links: {
        github: "https://github.com/GabrielF0900/NodeAuth_API",
        case_study: "#",
      },
    },
    {
      id: 3,
      title: "Tarefix - Sistema de Gerenciamento de Tarefas",
      description:
        "E um sistema de gerenciamento de tarefas que visa facilitar a organização e o acompanhamento de atividades.",
      technologies: [ "Tailwind CSS", "React", "TypeScript", "Prisma", "PostgreSQL", "Node.js", "Express"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2025-07",
      endDate: "2025-07",
      image: "/tarefix.jpg",
      highlights: [
        "Criação de tarefas com prazos e prioridades.",
        "Atualização e exclusão de tarefas.",
        "Interface intuitiva e responsiva.",
      ],
      featured: false,
      links: {
        github: "https://github.com/GabrielF0900/Tarefix",
        case_study: null,
      },
    },
    {
      id: 4,
      title: "ChatPRO",
      description:
        "É um sistema de chat em tempo real que permite a comunicação entre usuários de forma rápida e eficiente.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "Socket.IO"],
      status: "Em Planejamento",
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
      title: "Em Breve",
      description:
        "Em Breve.",
      technologies: [ "React", "API"],
      status: "Em Planejamento",
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
      technologies: ["TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "React", "Express", "JWT"],
      status: "Em desenvolvimento",
      category: "Full Stack",
      startDate: "2025-07",
      endDate: null,
      image: "/sistematcc.jpg",
      team: {
        size: 4,
        role: "Sistema",
        description: "Equipe de 3 desenvolvedores",
      },
      client: "Projeto Colaborativo",
      highlights: [
        "Monitoramento inteligente do progresso do TCC.",
        "Dashboard administrativo completo.",
        "Foco no suporte ao aluno e na redução do medo do TCC.",
      ],
      featured: true,
      links: {
        github: "https://github.com/Neukox/Sistema_De_Gerenciamento_De_TCC",
        case_study: null,
      },
    },
    {
      id: 7,
      title: "Sistema de Gerenciamento de Chamados",
      description:
        "Nosso Sistema de Gerenciamento de Chamados permite cadastrar usuários com criptografia de ponta a ponta para segurança das senhas e permite resolver problemas a distância graças ao algoritmo de chat em tempo real via WebSocket.",
      technologies: ["TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "React", "Express", "JWT"],
      status: "Concluído",
      category: "Full Stack",
      startDate: "2024-03",
      endDate: "2024-06",
      image: "/chamados.jpeg",
      team: {
        size: 6,
        role: "Sistema",
        description: "Equipe de 4 desenvolvedores",
      },
      client: "Projeto Colaborativo",
      highlights: [
        "Criptografia de ponta a ponta.",
        "Chat em tempo real.",
        "Resolução de problemas a distância.",
      ],
      featured: true,
      links: {
        github: "https://github.com/Neukox/Sistema_De_Gerenciamento_De_Chamados",
        case_study: null,
      },
    },
  ],
}
