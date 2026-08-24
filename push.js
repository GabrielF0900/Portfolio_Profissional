#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

console.log("\n📤 Atualizando data de ultima atualizacao...\n");

// Pega a mensagem de commit dos argumentos
let commitMessage = process.argv.slice(2).join(" ");

// Se não houver mensagem, usa a padrão
if (!commitMessage.trim()) {
  commitMessage = "chore: update last update timestamp";
}

// Pega a data/hora atual em Brasília usando Intl.DateTimeFormat
const now = new Date();

// Função para extrair valores da formatação
function getBrasiliaDateTime() {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const values = {};
  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  });

  return {
    day: parseInt(values.day, 10),
    month: values.month,
    year: parseInt(values.year, 10),
    hour: parseInt(values.hour, 10),
    minute: parseInt(values.minute, 10),
  };
}

const brasiliaDateTime = getBrasiliaDateTime();
const day = brasiliaDateTime.day;
const year = brasiliaDateTime.year;
const hour = brasiliaDateTime.hour;
const minute = brasiliaDateTime.minute;

// Map do mês em número para nome
const monthNumber = parseInt(brasiliaDateTime.month, 10);
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
const monthPT = months[monthNumber - 1];
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
  execFileSync("git", ["add", "src/constants/lastUpdate.ts"], {
    stdio: "inherit",
  });

  // Faz commit com a mensagem fornecida
  console.log("\n📝 Fazendo commit...");
  execFileSync("git", ["commit", "-m", commitMessage], {
    stdio: "inherit",
  });

  // Faz push
  console.log("\n🚀 Fazendo push...");
  execFileSync("git", ["push"], {
    stdio: "inherit",
  });

  console.log("\n✨ Push concluido com sucesso!\n");
} catch (error) {
  console.error("\n❌ Erro durante o push:", error.message);
  process.exit(1);
}
