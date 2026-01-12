export interface Certification {
  id: number;
  title: string;
  issuer: string;
  status: "Certificado" | "Estudando";
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
];
