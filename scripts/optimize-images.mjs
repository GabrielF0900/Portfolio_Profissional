import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const jobs = [
  { input: "public/minhaFoto.webp", output: "public/images/profile/gabriel-profile.webp", width: 1200, height: 1600, quality: 80 },
  { input: "public/ImagemAtualizadaSafewallet.png", output: "public/images/projects/safewallet-core.webp", width: 1200, height: 900, quality: 80 },
  { input: "public/fotoApresentacaoMicrosservico.png", output: "public/images/projects/spring-cloud-microservices.webp", width: 1200, height: 900, quality: 80 },
  { input: "public/certification/aws-architect-professional-teste.png", output: "public/images/certifications/aws-professional.webp", width: 160, height: 160, quality: 82 },
  { input: "public/certification/aws-architect-associate.png", output: "public/images/certifications/aws-associate.webp", width: 160, height: 160, quality: 82 },
  { input: "public/certification/practitioner.png", output: "public/images/certifications/aws-practitioner.webp", width: 160, height: 160, quality: 82 },
  { input: "public/certification/scrumfundamentals.png", output: "public/images/certifications/scrum.webp", width: 160, height: 160, quality: 82 },
  { input: "public/certificados/awsrestartgraduate.png", output: "public/images/certifications/aws-restart.webp", width: 160, height: 160, quality: 82 },
];

for (const job of jobs) {
  try {
    await access(job.input);
  } catch {
    console.warn(`Fonte ausente, mantendo o arquivo otimizado existente: ${job.input}`);
    continue;
  }

  await mkdir(path.dirname(job.output), { recursive: true });
  await sharp(job.input).rotate().resize({ width: job.width, height: job.height, fit: "inside", withoutEnlargement: true }).webp({ quality: job.quality, effort: 6 }).toFile(job.output);
  console.log(`${job.input} -> ${job.output}`);
}
