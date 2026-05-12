# Enriquecimento de Dados do Portfólio

## Como Integrar Dados Reais dos READMEs do GitHub

Para puxar informações reais dos seus repositórios no GitHub, siga os passos:

### 1. Mapeamento de Projetos e Repositórios

Você pode usar a GitHub API para puxar os dados dos READMEs. Exemplo com curl:

```bash
# Para acessar um README do GitHub
curl https://raw.githubusercontent.com/SEU_USUARIO/NOME_REPO/main/README.md

# Para obter informações do repositório via API
curl https://api.github.com/repos/SEU_USUARIO/NOME_REPO
```

### 2. Estrutura de Dados Enriquecidos

O campo `metrics` deve conter dados de impacto reais, por exemplo:

```typescript
metrics: [
  { label: "Usuários Ativos", value: "5.000+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Requisições/Dia", value: "1M+" },
  { label: "Redução de Tempo", value: "60%" },
]
```

### 3. Links Adicionados

Agora o campo `links` inclui:
- `video`: Link para vídeo de demonstração
- `presentation`: Link para apresentação/arquivo

### 4. Script para Atualizar Dados (Exemplo Python)

```python
import requests
import json

def fetch_readme(owner, repo):
    """Busca o README do repositório no GitHub"""
    url = f"https://raw.githubusercontent.com/{owner}/{repo}/main/README.md"
    response = requests.get(url)
    return response.text

def fetch_repo_info(owner, repo):
    """Busca informações do repositório via API GitHub"""
    url = f"https://api.github.com/repos/{owner}/{repo}"
    response = requests.get(url)
    return response.json()

# Exemplo de uso
owner = "SEU_USUARIO"
repo = "seu-repositorio"
readme = fetch_readme(owner, repo)
repo_info = fetch_repo_info(owner, repo)

print(f"Stars: {repo_info['stargazers_count']}")
print(f"Forks: {repo_info['forks_count']}")
print(f"README preview: {readme[:200]}...")
```

### 5. Atualizar portfolio-data.ts

Após coletar os dados, atualize os projetos com informações reais como:

```typescript
{
  id: 1,
  title: "Seu Projeto",
  description: "Descrição completa com informações do README...",
  metrics: [
    { label: "Stars", value: "150+" },
    { label: "Colaboradores", value: "10" },
  ],
  // ... outros campos
}
```

## Projetos Atuais

Lista de todos os projetos no portfólio para enriquecer:

1. **E-commerce Platform** - Plataforma de vendas online
2. **Task Management App** - App de gestão de tarefas
3. **API REST Financeira** - API para gestão financeira
4. **Portfolio Website** - Site pessoal
5. **Sistema de Gestão Hospitalar** - Gestão hospitalar
6. **Plataforma de Educação Online** - LMS para educação
7. **App de Delivery** - App de entrega de comida
8. **Sistema de Gerenciamento de TCC** - Gestão de TCCs
9. **Sistema de Gerenciamento de Chamados** - Help desk

## Próximas Etapas

1. Identifique o repositório GitHub para cada projeto
2. Use a GitHub API para puxar informações reais
3. Extraia métricas importante (stars, forks, commits, etc)
4. Atualize portfolio-data.ts com os dados coletados
5. Teste no navegador para garantir que tudo funciona
