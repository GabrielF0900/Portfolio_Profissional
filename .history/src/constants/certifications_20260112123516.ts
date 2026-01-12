export interface Certification {
  id: number;
  title: string;
  issuer: string;
  status: "Certificado" | "Estudando";
  image: string;
  date?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Estudando",
    image: "/certifications/aws-cloud-practitioner.png",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "TypeScript Professional",
    issuer: "Alura",
    status: "Certificado",
    image: "/certifications/typescript-professional.png",
    date: "2025-08",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "React Advanced",
    issuer: "Udemy",
    status: "Certificado",
    image: "/certifications/react-advanced.png",
    date: "2025-07",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Docker Essentials",
    issuer: "Linux Academy",
    status: "Certificado",
    image: "/certifications/docker-essentials.png",
    date: "2025-06",
    credentialUrl: "#",
  },
];
