
# Script para extrair informações dos repositórios do GitHub
$username = "GabrielF0900"
$apiBaseUrl = "https://api.github.com/repos/$username"

Write-Host "Iniciando coleta de repositórios de $username..."

# Fetch all repositories
$allRepos = @()
$page = 1

while ($true) {
    try {
        $url = "https://api.github.com/users/$username/repos?per_page=100&page=$page&type=owner"
        $headers = @{
            "Accept" = "application/vnd.github.v3+json"
            "User-Agent" = "PowerShell"
        }
        
        $response = Invoke-WebRequest -Uri $url -Headers $headers -UseBasicParsing
        $repos = $response.Content | ConvertFrom-Json
        
        if ($repos.Count -eq 0) { break }
        
        $allRepos += $repos
        Write-Host "Página $page: +$($repos.Count) repositórios"
        $page++
    } catch {
        Write-Host "Erro na página $page : $_"
        break
    }
}

# Filter only non-fork repositories
$realRepos = @($allRepos | Where-Object { -not $_.fork })

Write-Host "`nTotal encontrado: $($allRepos.Count) (com forks)"
Write-Host "Repositórios reais: $($realRepos.Count)"

# Collect detailed information
$results = @()

foreach ($repo in $realRepos) {
    $repoName = $repo.name
    $repoUrl = $repo.html_url
    $repoDesc = if ($repo.description) { $repo.description } else { "Sem descrição" }
    $repoTopics = if ($repo.topics -and $repo.topics.Count -gt 0) { $repo.topics -join ", " } else { "" }
    
    # Attempt to fetch README
    $readmeContent = ""
    $technologies = @()
    
    try {
        $readmeUrl = "https://api.github.com/repos/$username/$repoName/readme"
        $readmeResponse = Invoke-WebRequest -Uri $readmeUrl -UseBasicParsing -ErrorAction SilentlyContinue -Headers @{"Accept"="application/vnd.github.v3.raw"}
        
        if ($readmeResponse.StatusCode -eq 200) {
            $readmeContent = $readmeResponse.Content
            
            # Extract technologies from README
            if ($readmeContent -match "(?i)(typescript|javascript|python|java|c\#|ruby|go|rust)" ) {
                $readmeContent -split "`n" | ForEach-Object {
                    if ($_ -match "(?i)(typescript|javascript|python|java|c#|ruby|go|rust|react|vue|node|express|django|flask|rails|spring|\.net)") {
                        $matches[0] | Where-Object { $_ } | ForEach-Object { $technologies += $_ }
                    }
                }
            }
        }
    } catch {
        $readmeContent = ""
    }
    
    # Infer repository type
    $repoType = "pessoal"
    if ($repoDesc -match "(?i)(trabalho|trabalho de conclusão|tcc|academic|academico|escola|universidade|desafio)" ) {
        $repoType = "acadêmico"
    }
    if ($repoDesc -match "(?i)(colaborativo|colaborativo|project|grupo|team|contribuir)" ) {
        $repoType = "colaborativo"
    }
    if ($repoTopics -match "(?i)(trabalho|academi|tcc)" ) {
        $repoType = "acadêmico"
    }
    
    $repoObj = @{
        nome = $repoName
        descricao = $repoDesc
        url = $repoUrl
        tipo = $repoType
        topics = if ($repoTopics) { $repoTopics.Split(", ") } else { @() }
        tecnologias = @($technologies | Select-Object -Unique | Where-Object { $_ })
        linguagens_principais = @()
    }
    
    # Add primary languages
    if ($repo.language) {
        $repoObj.linguagens_principais += $repo.language
    }
    
    $results += $repoObj
    Write-Host "✓ $repoName - Tipo: $repoType"
}

# Sort by name
$results = $results | Sort-Object -Property nome

# Create JSON output
$jsonOutput = @{
    usuario = $username
    data_coleta = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
    total_repositorios = $results.Count
    repositorios = $results
} | ConvertTo-Json -Depth 10

# Save to file
$jsonOutput | Out-File -FilePath "github_repos_completo.json" -Encoding UTF8

Write-Host "`n✓ Dados salvos em: github_repos_completo.json"
Write-Host "`nResumo dos repositórios encontrados:"
Write-Host "Pessoais: $($results | Where-Object { $_.tipo -eq 'pessoal' } | Measure-Object | Select-Object -ExpandProperty Count)"
Write-Host "Acadêmicos: $($results | Where-Object { $_.tipo -eq 'acadêmico' } | Measure-Object | Select-Object -ExpandProperty Count)"
Write-Host "Colaborativos: $($results | Where-Object { $_.tipo -eq 'colaborativo' } | Measure-Object | Select-Object -ExpandProperty Count)"

# Display results
Write-Host "`n=== REPOSITÓRIOS ENCONTRADOS ===" 
$results | ConvertTo-Json -Depth 10 | Out-File -FilePath "repos_output.txt" -Encoding UTF8
Write-Host "Saída completa salva em: repos_output.txt"

# Also write to console
$results | Format-Table -Property nome, tipo -AutoSize
