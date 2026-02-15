export interface Certification {
  id: number;
  title: string;
  issuer: string;
  type: "Certificação" | "Certificado";
  status: "Certificado" | "Estudando" | "Em Breve" | "Próximo Objetivo";
  image: string;
  examCode?: string;
  date?: string;
  credentialUrl?: string;
  statusMessage?: string;
  description?: string;
}

export const certifications: Certification[] = [
  {
    id: 3,
    title: "Scrum Fundamentals Certified",
    issuer: "Scrum Study",
    type: "Certificação",
    status: "Certificado",
    image: "/certification/scrumfundamentals.png",
    date: "Emitido em 12/11/2024",
    credentialUrl:
      "https://www.scrumstudy.com/certification/verify?type=SFC&number=1055958",
    description:
      "A certificação Scrum Fundamentals Certified (SFC) da SCRUMstudy valida o conhecimento dos fundamentos do framework Scrum. O estudo abrangeu os princípios ágeis, papéis do Scrum (Product Owner, Scrum Master e Time de Desenvolvimento), eventos (Sprint, Daily, Review e Retrospectiva) e artefatos. Essa certificação fortaleceu minha base em metodologias ágeis, permitindo aplicar práticas de gerenciamento de projetos de forma mais eficiente no dia a dia.",
  },
  {
    id: 16,
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/awsrestartgraduate.png",
    date: "Emitido em 15/02/2026",
    credentialUrl:
      "https://www.credly.com/badges/fcbb935d-5dda-44e1-a782-9cb5ce32bd0f",
    description:
      "O curso AWS re/Start foi um programa intensivo ensinado pela Escola da Nuvem com o objetivo de não somente preparar o aluno para a certificação AWS Cloud Practitioner, mas também para o mercado de trabalho em Cloud Computing. Durante o programa, foram realizados laboratórios práticos, provas e desafios que, com certeza, me moldaram como um profissional qualificado para atuar no ambiente em nuvem. O curso abrangeu fundamentos de Linux, redes, segurança, bancos de dados e os principais serviços da AWS.",
  },
  {
    id: 5,
    title: "Bootcamp Docker Fundamentals",
    issuer: "DIO",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/DIO_todos.jpg",
    date: "Emitido em 29/04/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1GZ5VP6esWVfyCRmrVhHtGfF8gw_jZVZ8/view",
    description:
      "O Bootcamp Docker Fundamentals da DIO abordou os conceitos essenciais de containerização com Docker. O curso cobriu desde a criação de imagens e containers até o uso de Docker Compose para orquestração de múltiplos serviços. Foram realizados projetos práticos que consolidaram o entendimento sobre ambientes isolados, networking entre containers e boas práticas de deployment.",
  },
  {
    id: 6,
    title: "Autenticação com JWT com Node e TypeScript",
    issuer: "DIO",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/DIO_todos.jpg",
    date: "Emitido em 17/06/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1OsNC3CYI3QQVUMuDMz6tRojqq6__2JKp/view",
    description:
      "O curso de Autenticação com JWT da DIO ensinou a implementar sistemas de autenticação seguros utilizando JSON Web Tokens com Node.js e TypeScript. O conteúdo abrangeu a criação de middlewares de autenticação, geração e validação de tokens, refresh tokens e boas práticas de segurança para APIs RESTful.",
  },
  {
    id: 7,
    title: "Java",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 26/06/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1NlIeQsAXDq0iO0tNBO1d4ibFaoKO0JEL/view",
    description:
      "O curso de Java da Rocketseat abordou os fundamentos da linguagem Java, incluindo sintaxe, estruturas de dados, orientação a objetos e desenvolvimento de aplicações. O conteúdo prático permitiu a construção de projetos reais, consolidando o conhecimento em uma das linguagens mais utilizadas no mercado corporativo.",
  },
  {
    id: 8,
    title: "NLW Agents",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 17/07/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1y1yEXEQHfEnkXsmTWyGFNXibh-8apbjC/view",
    description:
      "O NLW Agents da Rocketseat foi um evento intensivo focado no desenvolvimento de agentes de Inteligência Artificial. O conteúdo explorou conceitos de IA generativa, integração com APIs de modelos de linguagem e construção de aplicações inteligentes que automatizam tarefas e interagem com o usuário de forma natural.",
  },
  {
    id: 9,
    title: "Java COMPLETO – Programação Orientada a Objetos",
    issuer: "Udemy",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/udemy_todos.png",
    date: "Emitido em 12/08/2025",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-aa632c48-8511-4483-a465-420352101cbb.jpg",
    description:
      "O curso Java COMPLETO da Udemy foi uma formação abrangente em Programação Orientada a Objetos com Java. O conteúdo cobriu desde os fundamentos até tópicos avançados como herança, polimorfismo, interfaces, generics, coleções, tratamento de exceções, JDBC, JavaFX e padrões de projeto. Foram desenvolvidos diversos projetos práticos ao longo do curso.",
  },
  {
    id: 10,
    title: "Fundamentos da Nuvem",
    issuer: "Talent Cloud",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/talent-cloud_todos.jpg",
    date: "Emitido em 03/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1cJh4HL3HtJ7DGGQ0G0f9iWcgXRGNsCHP/view",
    description:
      "O curso Fundamentos da Nuvem da Talent Cloud proporcionou uma introdução sólida aos conceitos de computação em nuvem. O conteúdo abordou os modelos de serviço (IaaS, PaaS, SaaS), modelos de implantação (pública, privada e híbrida), virtualização, segurança na nuvem e os principais provedores do mercado, criando uma base para certificações mais avançadas.",
  },
  {
    id: 11,
    title: "Fundamentos do Node.js",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 13/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1pAEu87_nPHVSxL2f60_iT8hMPhFV4gjA/view?usp=sharing",
    description:
      "O curso Fundamentos do Node.js da Rocketseat aprofundou os conceitos essenciais do runtime Node.js. O conteúdo abrangeu módulos, streams, event loop, APIs HTTP nativas, manipulação de arquivos e construção de servidores. Os projetos práticos permitiram entender como o Node.js funciona internamente e como construir aplicações eficientes do lado do servidor.",
  },
  {
    id: 12,
    title: "Fundamentos de HTML e CSS",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 13/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1-PjbggQdOuFnm7ICNPzDanPhk_3d-_65/view?usp=sharing",
    description:
      "O curso Fundamentos de HTML e CSS da Rocketseat cobriu os pilares do desenvolvimento web front-end. O conteúdo incluiu estruturação semântica com HTML5, estilização com CSS3, Flexbox, Grid Layout, responsividade e acessibilidade. Foram desenvolvidos projetos práticos que consolidaram as habilidades de criação de interfaces web modernas e responsivas.",
  },
  {
    id: 13,
    title: "Introdução ao Node.js",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 13/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1ZFgwObXv0GSRo_-GhMbhZz2L_RaPS_Wg/view?usp=sharing",
    description:
      "O curso Introdução ao Node.js da Rocketseat apresentou os primeiros passos com o ambiente de execução JavaScript no servidor. O conteúdo incluiu configuração do ambiente, npm, criação de APIs REST básicas, rotas, middlewares e a conexão entre front-end e back-end, servindo como porta de entrada para o ecossistema Node.js.",
  },
  {
    id: 14,
    title: "Introdução ao React",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 13/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1M-om-1IT2cTdIAiwa0xIfLsXLCi6_tie/view?usp=sharing",
    description:
      "O curso Introdução ao React da Rocketseat apresentou os fundamentos da biblioteca React para construção de interfaces. O conteúdo cobriu componentes, JSX, props, estado, hooks (useState, useEffect), renderização condicional e comunicação entre componentes. Os projetos práticos ensinaram a criar aplicações front-end modernas e reativas.",
  },
  {
    id: 15,
    title: "NestJS",
    issuer: "Rocketseat",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/rocketseat_todos.webp",
    date: "Emitido em 13/09/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1zdnETLpgTkHw6DE5AwikJSqud7YvN6IS/view?usp=sharing",
    description:
      "O curso de NestJS da Rocketseat ensinou a construir aplicações back-end escaláveis e organizadas com o framework NestJS. O conteúdo abrangeu módulos, controllers, services, injeção de dependência, decorators, pipes de validação, guards de autenticação e integração com bancos de dados. O curso fortaleceu as habilidades de desenvolvimento de APIs profissionais com TypeScript.",
  },
  {
    id: 4,
    title: "Linux: gerenciando arquivos, permissões e processos",
    issuer: "Alura",
    type: "Certificado",
    status: "Certificado",
    image: "/certificados/alura_linux.png",
    date: "Emitido em 12/10/2025",
    credentialUrl:
      "https://drive.google.com/file/d/1EiMYEkXJ3Ip4gAwlBoms9J6VqtjmKaHk/view",
    description:
      "O curso de Linux da Alura ensinou o gerenciamento de arquivos, permissões e processos no sistema operacional Linux. O conteúdo abordou navegação no terminal, manipulação de arquivos e diretórios, permissões de acesso (chmod, chown), gerenciamento de processos, redirecionamento de saída e shell scripting. Essas habilidades são fundamentais para administração de servidores e ambientes de cloud computing.",
  },
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Certificação",
    status: "Estudando",
    image: "/certification/practitioner.png",
    examCode: "CLF-C02",
    statusMessage: "Voucher previsto para 24/02 e efetuação do exame dia 26/02",
    description:
      "A certificação AWS Certified Cloud Practitioner (CLF-C02) valida o conhecimento fundamental sobre a nuvem AWS. O estudo abrange conceitos de cloud computing, serviços principais da AWS (EC2, S3, RDS, Lambda, VPC), modelos de preço, segurança, compliance e arquitetura básica. É a certificação de entrada da AWS e está sendo preparada como base para certificações mais avançadas.",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    type: "Certificação",
    status: "Próximo Objetivo",
    image: "/certification/archtecht-associate.jpg",
    examCode: "SAA-C03",
    statusMessage:
      "Planejado para iniciar após a conclusão da AWS Cloud Practitioner",
    description:
      "A certificação AWS Certified Solutions Architect - Associate (SAA-C03) valida a capacidade de projetar soluções arquiteturais na AWS. O estudo abrangerá design de arquiteturas resilientes, de alta performance, seguras e otimizadas em custo. É o próximo objetivo após a obtenção da Cloud Practitioner, representando um avanço significativo na carreira em cloud computing.",
  },
];
