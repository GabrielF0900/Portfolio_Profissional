# PACOTE FINAL — REDESIGN DO PORTFÓLIO COM CODEX

Este pacote foi preparado para implementar a nova direção visual do portfólio usando a branch Git já existente:

`redesign-v2`

## IMPORTANTE SOBRE O NOME

- Branch Git: `redesign-v2`
- Nome conceitual da nova direção visual/documentação: `Redesign V3`

Não crie uma branch `redesign-v3`.

## O que existe neste pacote

- `ImagensPlanejamento/`
  - layouts aprovados;
  - Motion V2;
  - documentação;
  - prompt mestre.
- `00-LEIA-PRIMEIRO.md`
- `01-ORDEM-DE-EXECUCAO.md`
- `02-COMANDOS-GIT-E-CODEX.md`
- `03-PROMPT-INICIAL-FASE-0.md`
- `04-PROMPTS-POR-FASE.md`
- `05-CHECKLIST-DO-USUARIO.md`
- `06-RECUPERACAO-E-ROLLBACK.md`

## REGRA PRINCIPAL

Não peça ao Codex para fazer tudo em uma única execução.

O fluxo é:

FASE 0 → checkpoint → sua aprovação  
FASE 1 → checkpoint → sua aprovação  
FASE 2 → checkpoint → sua aprovação  
...  
FASE 10 → QA final → sua aprovação

O Codex deve parar após cada fase.

## Fonte da verdade

1. Código atual do portfólio = dados verdadeiros.
2. Documentação = regras e decisões.
3. Imagens = referência visual.
4. Vídeos = intenção de motion.
5. `gpt-taste` = qualidade e heurísticas de UI/UX.

Nunca usar dado visto numa imagem sem confirmar no código.
