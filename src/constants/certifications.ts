export interface Certification {
  id: number;
  title: string;
  issuer: string;
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
    status: "Certificado",
    image: "/certification/scrumfundamentals.png",
    date: "November 12, 2024",
    credentialUrl:
      "https://www.scrumstudy.com/certification/verify?type=SFC&number=1055958",
  },
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
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
    status: "Próximo Objetivo",
    image: "/certification/archtecht-associate.jpg",
    examCode: "SAA-C03",
    statusMessage:
      "Planejado para iniciar após a conclusão da AWS Cloud Practitioner",
  },
];
