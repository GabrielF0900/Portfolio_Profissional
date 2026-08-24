# Script PowerShell para iniciar o servidor de desenvolvimento com limpeza automática

Write-Host "🧹 Limpando pasta .next..." -ForegroundColor Yellow

# Remove a pasta .next se existir
$nextDir = ".\.next"
if (Test-Path $nextDir) {
    try {
        Remove-Item $nextDir -Recurse -Force -ErrorAction Stop
        Write-Host "✅ Pasta .next removida com sucesso" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Erro ao remover .next, continuando..." -ForegroundColor Yellow
    }
}

# Inicia o servidor de desenvolvimento
Write-Host "🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Green
pnpm dev
