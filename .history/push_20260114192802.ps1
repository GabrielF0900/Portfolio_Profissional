param()

Write-Host "Atualizando data de ultima atualizacao..." -ForegroundColor Yellow

# Pega a data/hora atual em Brasilia
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

# Mapa de traducao de meses
$monthMap = @{
  1 = "janeiro"
  2 = "fevereiro"
  3 = "marco"
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

# Cria o conteudo atualizado do arquivo
$content = "// Data da ultima atualizacao do portfolio`r`n// Atualizada automaticamente antes de cada push`r`n`r`nexport const LAST_UPDATE = {`r`n  dia: $day,`r`n  mes: `"$monthPT`",`r`n  ano: $year,`r`n  hora: $hour,`r`n  minuto: $minute,`r`n};`r`n`r`nexport function getLastUpdateFormatted(): string {`r`n  const { dia, mes, ano, hora, minuto } = LAST_UPDATE;`r`n  const horaFormatada = String(hora).padStart(2, `"0`");`r`n  const minutoFormatado = String(minuto).padStart(2, `"0`");`r`n  return \`\`+\""$"'"+"\$"+"{dia} de "+"\$"+"{mes} de "+"\$"+"{ano}, "+"\$"+"{horaFormatada}:"+"\$"+"{minutoFormatado}`\`;`r`n}"

# Escreve o arquivo
$filePath = "src/constants/lastUpdate.ts"
Set-Content -Path $filePath -Value $content -Encoding UTF8 -Force

$hourFormatted = $hour.ToString("00")
$minFormatted = $minute.ToString("00")

Write-Host "Data atualizada para: $day de $monthPT de $year, $hourFormatted`:$minFormatted" -ForegroundColor Green

# Adiciona o arquivo
git add $filePath

# Faz commit
Write-Host "Fazendo commit..." -ForegroundColor Yellow
git commit -m "chore: update last update timestamp" --quiet

# Faz push
Write-Host "Fazendo push..." -ForegroundColor Yellow
git push

Write-Host "Push concluido com sucesso!" -ForegroundColor Green
