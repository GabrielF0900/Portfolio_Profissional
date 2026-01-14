#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("\n📤 Atualizando data de ultima atualizacao...\n");

// Pega a mensagem de commit dos argumentos
let commitMessage = process.argv.slice(2).join(" ");

// Se não houver mensagem, usa a padrão
if (!commitMessage.trim()) {
  commitMessage = "chore: update last update timestamp";
}

// Pega a data/hora atual em Brasília
const now = new Date();
const utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60 * 1000);
const brasiliaTime = new Date(utcDate.getTime() - 3 * 60 * 60 * 1000); // UTC-3

const day = brasiliaTime.getUTCDate();
const monthIndex = brasiliaTime.getUTCMonth();
const year = brasiliaTime.getUTCFullYear();
const hour = brasiliaTime.getUTCHours();
const minute = brasiliaTime.getUTCMinutes();

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
  execSync("git add src/constants/lastUpdate.ts", {
    stdio: "inherit",
    shell: true,
  });

  // Faz commit com a mensagem fornecida
  console.log("\n📝 Fazendo commit...");
  const escapedMessage = commitMessage.replace(/"/g, '\\"');
  execSync(`git commit -m "${escapedMessage}"`, {
    stdio: "inherit",
    shell: true,
  });

  // Faz push
  console.log("\n🚀 Fazendo push...");
  execSync("git push", {
    stdio: "inherit",
    shell: true,
  });

  console.log("\n✨ Push concluido com sucesso!\n");
} catch (error) {
  console.error("\n❌ Erro durante o push:", error.message);
  process.exit(1);
}
