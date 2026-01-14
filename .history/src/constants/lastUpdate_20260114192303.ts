// ⚠️ IMPORTANTE: Este arquivo é atualizado automaticamente pelos git hooks
// Quando você faz um commit, a data e hora são atualizadas automaticamente
// NÃO EDITE MANUALMENTE

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
