// Data da ultima atualizacao do portfolio
// Atualizada automaticamente antes de cada push

export const LAST_UPDATE = {
  dia: 12,
  mes: "fevereiro",
  ano: 2026,
  hora: 7,
  minuto: 23,
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return `${dia} de ${mes} de ${ano}, ${horaFormatada}:${minutoFormatado}`;
}
