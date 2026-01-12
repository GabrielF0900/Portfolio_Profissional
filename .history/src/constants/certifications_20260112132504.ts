export interface Certification {
  id: number;
  title: string;
  issuer: string;
  status: "Certificado" | "Estudando" | "Em Breve";
  image: string;
  examCode?: string;
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Estudando",
    image: "/certification/practitioner.png",
    examCode: "CLF-C02",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    status: "Em Breve",
    image: "/certification/archtecht-associate.jpg",
    examCode: "SAA-C03",
  },
];
