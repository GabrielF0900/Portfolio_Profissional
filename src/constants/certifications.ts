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
  },
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    type: "Certificação",
    status: "Estudando",
    image: "/certification/practitioner.png",
    examCode: "CLF-C02",
    statusMessage:
      "Candidato em fase final de estudos (Voucher previsto para Fev/2026)",
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
  },
];
