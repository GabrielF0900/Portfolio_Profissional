# Script para fazer push com atualização automática da data/hora
# Use: .\push.ps1

Write-Host "📤 Atualizando data de última atualização..." -ForegroundColor Yellow

# Pega a data/hora atual em Brasília
$brasiliaTime = [System.TimeZoneInfo]::ConvertTime(
  [datetime]::Now,
  [System.TimeZoneInfo]::FindSystemTimeZoneById("E. South America Standard Time")
)

# Extrai os componentes da data
$day = $brasiliaTime.Day
$month = $brasiliaTime.Month
$year = $brasiliaTime.Year
$hour = $brasiliaTime.Hour
$minute = $brasiliaTime.Minute

# Mapa de tradução de meses
$monthMap = @{
  1 = "janeiro"
  2 = "fevereiro"
  3 = "março"
  4 = "abril"
  5 = "maio"
  6 = "junho"
  7 = "julho"
  8 = "agosto"
  9 = "setembro"
  10 = "outubro"
  11 = "novembro"
  12 = "dezembro"
}

$monthPT = $monthMap[$month]

# Cria o conteúdo atualizado do arquivo
$content = @"
// 📅 Data da última atualização do portfolio
// Atualizada automaticamente antes de cada push

export const LAST_UPDATE = {
  dia: $day,
  mes: "$monthPT",
  ano: $year,
  hora: $hour,
  minuto: $minute,
};

export function getLastUpdateFormatted(): string {
  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;
  const horaFormatada = String(hora).padStart(2, "0");
  const minutoFormatado = String(minuto).padStart(2, "0");
  return \`\${dia} de \${mes} de \${ano}, \${horaFormatada}:\${minutoFormatado}\`;
}
"@

# Escreve o arquivo
$filePath = "src/constants/lastUpdate.ts"
Set-Content -Path $filePath -Value $content -Encoding UTF8

Write-Host "✅ Data atualizada para: $day de $monthPT de $year, $($hour.ToString('00')):$($minute.ToString('00'))" -ForegroundColor Green

# Adiciona o arquivo
git add $filePath

# Faz commit
Write-Host "📝 Commitando..." -ForegroundColor Yellow
git commit -m "chore: update last update timestamp" --quiet

# Faz push
Write-Host "🚀 Fazendo push..." -ForegroundColor Yellow
git push

Write-Host "✨ Push concluído com sucesso!" -ForegroundColor Green
