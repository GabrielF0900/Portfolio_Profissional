#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("\n📤 Atualizando data de ultima atualizacao...\n");

// Pega a data/hora atual e converte para Brasilia
const now = new Date();
const offset = -3; // Brasilia é UTC-3 (ou UTC-2 em horário de verão, mas vamos usar -3)
const brasiliaDate = new Date(
  now.getTime() + (offset * 60 + now.getTimezoneOffset()) * 60 * 1000
);

const day = brasiliaDate.getDate();
const monthIndex = brasiliaDate.getMonth();
const year = brasiliaDate.getFullYear();
const hour = brasiliaDate.getHours();
const minute = brasiliaDate.getMinutes();

const months = [
  "janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const monthPT = months[monthIndex];
const hourFormatted = String(hour).padStart(2, "0");
const minFormatted = String(minute).padStart(2, "0");

// Cria o conteudo atualizado
const content = `// Data da ultima atualizacao do portfolio
// Atualizada automaticamente antes de cada push

export const LAST_UPDATE = {
  dia: ${day},
  mes: "${monthPT}",
  ano: ${year},
  hora: ${hour},
  minuto: ${minute},
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return \`\${dia} de \${mes} de \${ano}, \${horaFormatada}:\${minutoFormatado}\`;
}
`;

// Escreve o arquivo
const filePath = path.join(__dirname, "src", "constants", "lastUpdate.ts");
fs.writeFileSync(filePath, content, "utf8");

console.log(
  `✅ Data atualizada para: ${day} de ${monthPT} de ${year}, ${hourFormatted}:${minFormatted}\n`
);

try {
  // Adiciona o arquivo
  console.log("📝 Adicionando arquivo...");
  execSync("git add src/constants/lastUpdate.ts", { stdio: "inherit" });

  // Faz commit
  console.log("\n📝 Fazendo commit...");
  execSync('git commit -m "chore: update last update timestamp"', {
    stdio: "inherit",
  });

  // Faz push
  console.log("\n🚀 Fazendo push...");
  execSync("git push", { stdio: "inherit" });

  console.log("\n✨ Push concluido com sucesso!\n");
} catch (error) {
  console.error("\n❌ Erro durante o push:", error.message);
  process.exit(1);
}
