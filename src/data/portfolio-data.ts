// Este arquivo contém os dados do portfólio, que são puramente JavaScript/TypeScript

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  category: string;
  startDate: string | null;
  endDate: string | null;
  image?: string;
  highlights?: string[];
  featured?: boolean;
  links: {
    demo?: string | null;
    github?: string | null;
    case_study?: string | null;
    video?: string | null;
    presentation?: string | null;
  };
  client?: string;
  team?: {
    role: string;
    description: string;
    size?: number;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface Technologies {
  frontend: string[];
  backend: string[];
  tools: string[];
  infrastructure: string[];
}

interface NavigationItem {
  id: string;
  label: string;
}

export const projects: {
  personal: Project[];
  collaborative: Project[];
} = {
  personal: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado, gestão de estoque em tempo real e analytics avançados.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
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
        "Tarefix - Sistema full stack de gerenciamento de tarefas com cadastro de usuários, autenticação segura e operações completas (CRUD). Permite que cada usuário mantenha sua própria lista de tarefas, acompanhando status, prioridade, descrição e data de vencimento. Interface voltada para uso em navegador com busca textual, indicadores de resumo no dashboard e validação robusta. Frontend com React 19 e TypeScript, backend em Node.js com Express e Prisma ORM, persistência em PostgreSQL, deployment com Docker e Nginx.",
      technologies: [
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma ORM",
        "PostgreSQL",
        "Tailwind CSS",
        "Docker",
      ],
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
        github: "https://github.com/GabrielF0900/Tarefix",
        case_study: "#",
      },
    },
      title: "API REST Financeira",
      description:
        "banking-core-java - Implementação de um sistema bancário modular com Java 21 focado nos fundamentos e Arquitetura Limpa. Explora separação de responsabilidades entre camadas (Model/Service/Repository), encapsulamento estrito de dados com modificadores private, prevenção de NullPointerException e lógica de negócio defensiva. Arquitetura em Layered Architecture com separação clara de camadas, compatível com ambientes cloud-native (AWS Lambda e ECS). Utiliza Amazon Corretto como runtime Java otimizado.",
      technologies: [
        "Java 21",
        "Amazon Corretto",
        "Arquitetura Limpa",
        "Layered Architecture",
        "Git",
        "AWS Lambda",
      ],
      status: "Concluído",
      category: "Backend",
      startDate: "2023-05",
      endDate: "2023-07",
      image: "/images/project-placeholder-3.png",
      highlights: [
        "Documentação completa com Swagger",
        "Cobertura de testes de 95%",
        "Deploy automatizado com Docker",
      ],
      featured: false,
      links: {
        demo: null,
        github: "https://github.com/GabrielF0900/banking-core-java",
        case_study: "#",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Portfólio moderno e responsivo que apresenta a jornada como desenvolvedor Full Stack. Vitrine moderna de projetos cloud-native e arquitetura serverless, construído com foco em performance, acessibilidade e experiência do usuário. Interface intuitiva com tema claro/escuro dinâmico, design responsivo para todos os dispositivos, otimizado para performance e SEO. Arquitetura modular e escalável utilizando Next.js, React, TypeScript e Tailwind CSS, deployed no Vercel.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Concluído",
      category: "Frontend",
      startDate: "2023-03",
      endDate: "2023-04",
      image: "/images/project-placeholder-4.png",
      highlights: [
        "Score 100 no Google PageSpeed",
        "Blog integrado com MDX",
        "Design responsivo e acessível",
      ],
      featured: false,
      links: {
        demo: "#",
        github: "https://github.com/GabrielF0900/Portfolio_Profissional",
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
      highlights: [
        "Gestão de 10.000+ pacientes",
        "Conformidade com LGPD",
        "Sistema de backup automatizado",
      ],
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
        "ConectaTEA - Plataforma web completa para acompanhamento de crianças com TEA (Transtorno do Espectro Autista), conectando responsáveis e profissionais especializados. Centraliza e otimiza o acompanhamento de crianças com TEA, permitindo que responsáveis encontrem profissionais qualificados, acompanhem o desenvolvimento e mantenham comunicação contínua com toda a equipe de cuidado. Inclui sistema de autenticação seguro com JWT, rede de profissionais especializados em TEA, gestão de crianças com histórico médico, sistema de conexões entre profissionais e CRUD completo com busca avançada.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "NestJS",
        "Prisma ORM",
        "PostgreSQL",
        "JWT",
      ],
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
      client: "ConectaTEA",
      highlights: [
        "Sistema de autenticação seguro com JWT",
        "Rede de profissionais especializados em TEA",
        "Gestão de crianças com histórico médico",
        "Sistema de conexões entre profissionais",
        "CRUD completo com filtros avançados",
      ],
      featured: true,
      links: {
        demo: "#",
        github: "https://github.com/GabrielF0900/ConectaTEA",
        case_study: "#",
      },
    },
    {
      id: 7,
      title: "App de Delivery",
      description:
        "Aplicativo mobile e web para delivery de comida com rastreamento em tempo real, sistema de pagamentos e avaliações.",
      technologies: [
        "React Native",
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Google Maps API",
      ],
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
    {
      id: 8,
      title: "Sistema de Gerenciamento de TCC",
      description:
        "CityShield - Segurança Integrada Inteligente para Cidades Inteligentes. Plataforma serverless que converge segurança física (CCTV) e cibernética em uma central unificada. Integra 500+ câmeras com análise em tempo real de ameaças físicas e cibernéticas (~200M frames/mês) com resposta automática em segundos. Resultado prático: ~80% redução de custos (USD 419K economizados/ano) com modelo 100% pay-per-use. Trabalho de Conclusão de Curso (TCC) do Programa AWS Re/Start + IA da Escola da Nuvem.",
      technologies: ["Node.js", "Amazon Kinesis", "Rekognition", "AWS Lambda", "GuardDuty", "WAF", "EventBridge", "DynamoDB"],
      status: "Concluído",
      category: "Full Stack",
      startDate: null,
      endDate: null,
      image: "/images/project-placeholder-8.png",
      team: {
        role: "Developer",
        description: "Projeto colaborativo - TCC Escola da Nuvem",
      },
      metrics: [
        { label: "Redução de Custos", value: "80%" },
        { label: "Câmeras Integradas", value: "500+" },
        { label: "Frames/Mês", value: "200M+" },
        { label: "Economia Anual", value: "USD 419K" },
      ],
      highlights: [
        "Integração de 500+ câmeras de CCTV",
        "Análise em tempo real com Rekognition",
        "Resposta automática em segundos",
        "Modelo 100% pay-per-use serverless",
        "80% redução de custos vs On-Premises",
      ],
      featured: true,
      links: {
        demo: null,
        github: "https://github.com/GabrielF0900/CityShield-TCC-Escola-da-Nuvem-",
        case_study: null,
      },
    },
    {
      id: 9,
      title: "Sistema de Gerenciamento de Chamados",
      description:
        "Sistema completo de gerenciamento de chamados (help desk) com rastreamento de tickets, priorização inteligente e relatórios detalhados de desempenho. Solução robusta para gestão de suporte técnico que permite atribuição automática de chamados, escalação baseada em prioridade e SLA, histórico completo de comunicações e integração com sistemas externos. Oferece dashboard em tempo real com métricas de atendimento, satisfação do cliente, tempos de resolução e análise de performance da equipe de suporte.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
      status: "Concluído",
      category: "Full Stack",
      startDate: null,
      endDate: null,
      image: "/images/project-placeholder-9.png",
      team: {
        role: "Developer",
        description: "Projeto colaborativo",
      },
      highlights: [
        "Sistema de tickets com priorização automática",
        "Atribuição inteligente de chamados",
        "Dashboard com relatórios em tempo real",
        "Rastreamento de SLA e métricas de desempenho",
        "Histórico completo de comunicações",
        "Integração com sistemas externos",
      ],
      featured: true,
      links: {
        demo: null,
        github:
          "https://github.com/Neukox/Sistema_De_Gerenciamento_De_Chamados",
        case_study: null,
      },
    },
  ],
};

export const technologies: Technologies = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "Python",
    "Django",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
  ],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
  infrastructure: [
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Linux",
    "Nginx",
    "CI/CD",
  ],
};

export const softSkills: string[] = [
  "Comunicação eficaz",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Pensamento crítico",
  "Adaptabilidade",
  "Liderança técnica",
  "Gestão de tempo",
  "Aprendizado contínuo",
];

export const navigationItems: NavigationItem[] = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "skills", label: "Skills" },
];
