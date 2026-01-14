// 📅 Data da última atualização do portfolio
// Atualize manualmente quando fizer mudanças significativas

export const LAST_UPDATE = {
  dia: 14,
  mes: "janeiro",
  ano: 2026,
  hora: 19,
  minuto: 14,
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return `${dia} de ${mes} de ${ano}, ${horaFormatada}:${minutoFormatado}`;
}
