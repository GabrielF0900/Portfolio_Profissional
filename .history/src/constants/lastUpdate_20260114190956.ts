// Atualize esta data e hora sempre que você fizer mudanças no portfolio
// Format: { dia, mes, ano, hora, minuto }
export const LAST_UPDATE = {
  dia: 14,
  mes: "janeiro", // janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro
  ano: 2026,
  hora: 14,
  minuto: 30,
};

// Para facilitar, você também pode usar:
export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return `${dia} de ${mes} de ${ano}, ${horaFormatada}:${minutoFormatado}`;
}
