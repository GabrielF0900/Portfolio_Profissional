// Este arquivo agora pega o horário de Brasília automaticamente
// Você não precisa atualizar manualmente - o horário é sempre atual!

// Se por algum motivo você quiser mostrar uma data fixa (para testes),
// descomente a função abaixo e comente a função dinâmica

// Função para pegar data/hora atual de Brasília
export function getLastUpdateFormatted(): string {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const date = new Date();
  const parts = formatter.formatToParts(date);

  const day = parts.find((p) => p.type === "day")?.value || "";
  const month = parts.find((p) => p.type === "month")?.value || "";
  const year = parts.find((p) => p.type === "year")?.value || "";
  const hour = parts.find((p) => p.type === "hour")?.value || "";
  const minute = parts.find((p) => p.type === "minute")?.value || "";

  return `${day} de ${month} de ${year}, ${hour}:${minute}`;
}

// Alternativa: Se você quiser usar uma data fixa (descomente para usar)
/*
export const LAST_UPDATE_FIXED = {
  dia: 14,
  mes: "janeiro",
  ano: 2026,
  hora: 19,
  minuto: 14,
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE_FIXED;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return `${dia} de ${mes} de ${ano}, ${horaFormatada}:${minutoFormatado}`;
}
*/
