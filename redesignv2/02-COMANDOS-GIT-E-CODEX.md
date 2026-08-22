# COMANDOS GIT E CODEX

## Confirmar pasta e branch

```bash
git status
git branch --show-current
git log -1 --oneline
```

Esperado:

```text
redesign-v2
```

## Ir para a branch correta

```bash
git switch redesign-v2
```

## Salvar estado atual

```bash
git add .
git commit -m "checkpoint antes do redesign planejado"
```

## Abrir Codex

```bash
codex
```

## Ver mudanças depois de uma fase

```bash
git status
git diff
```

## Ver resumo das mudanças

```bash
git diff --stat
```

## Criar commit após uma fase aprovada

FASE 1:
```bash
git add .
git commit -m "feat: implementar navbar e hero do redesign"
```

FASE 2:
```bash
git add .
git commit -m "feat: implementar sobre e experiencia do redesign"
```

FASE 3:
```bash
git add .
git commit -m "feat: implementar certificacoes do redesign"
```

FASE 4:
```bash
git add .
git commit -m "feat: implementar projetos em destaque"
```

FASE 5:
```bash
git add .
git commit -m "feat: implementar explorador de projetos"
```

FASE 6:
```bash
git add .
git commit -m "feat: implementar detalhes de projetos"
```

FASE 7:
```bash
git add .
git commit -m "feat: implementar tecnologias e como trabalho"
```

FASE 8:
```bash
git add .
git commit -m "feat: implementar contato e footer"
```

FASE 9:
```bash
git add .
git commit -m "feat: polir motion e microinteracoes"
```

FASE 10:
```bash
git add .
git commit -m "chore: concluir qa do redesign"
```

## NÃO usar durante o trabalho

Evite:

```bash
git reset --hard
git clean -fd
```

Não faça:

```bash
git merge main
```

nem merge para `main` sem revisar tudo primeiro.
