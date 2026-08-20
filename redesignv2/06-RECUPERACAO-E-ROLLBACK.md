# RECUPERAÇÃO E ROLLBACK

A estratégia principal é criar um commit depois de cada fase aprovada.

## Ver histórico

```bash
git log --oneline --decorate -15
```

## Ver diferenças atuais

```bash
git status
git diff
```

## Se ainda NÃO fez commit e quer descartar somente um arquivo específico

Antes de fazer isso, confirme que realmente não precisa das mudanças:

```bash
git restore caminho/do/arquivo
```

Não use isso em lote sem revisar.

## Se uma fase já foi commitada e você quer comparar com o commit anterior

```bash
git diff HEAD~1 HEAD
```

## Se você rejeitar uma fase inteira

A opção mais segura é pedir ao Codex para reverter especificamente os arquivos/mudanças da fase, preservando fases anteriores.

Prompt sugerido:

```text
A última fase não foi aprovada.

Não continue para a próxima fase.

Analise git diff e reverta SOMENTE as alterações feitas nesta última fase,
preservando integralmente todas as fases anteriores aprovadas.

Antes de alterar, mostre quais arquivos pretende reverter.

Não use git reset --hard.
Não use git clean -fd.
Não mexa em commits anteriores.
```

## Backup adicional

A branch `redesign-v2` é experimental.

Não faça merge para `main` até a FASE 10 ser aprovada.
