// Data da ultima atualizacao do portfolio
// Atualizada automaticamente antes de cada push

export const LAST_UPDATE = {
  dia: 1,
  mes: "abril",
  ano: 2026,
  hora: 20,
  minuto: 49,
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return `${dia} de ${mes} de ${ano}, ${horaFormatada}:${minutoFormatado}`;
}
