# ORDEM DE EXECUÇÃO NO CODEX

## ETAPA A — Preparar os arquivos

1. Baixe este pacote.
2. Extraia.
3. Copie SOMENTE a pasta:

`ImagensPlanejamento`

para a raiz do repositório `Portfolio_Profissional`.

A estrutura deve ficar:

```text
Portfolio_Profissional/
├── src/
├── public/
├── package.json
├── ...
└── ImagensPlanejamento/
    ├── 01-Layouts/
    ├── 02-Motion/
    └── 03-Documentacao/
```

Não coloque `ImagensPlanejamento` dentro de `public`.

---

## ETAPA B — Confirmar a branch

Abra o terminal NA RAIZ do projeto e execute:

```bash
git status
git branch --show-current
git log -1 --oneline
```

A branch deve ser:

```text
redesign-v2
```

Se não for:

```bash
git switch redesign-v2
```

Depois confirme novamente:

```bash
git branch --show-current
```

---

## ETAPA C — Salvar qualquer alteração local importante

Se `git status` mostrar arquivos modificados que você deseja preservar:

```bash
git add .
git commit -m "checkpoint antes de iniciar redesign com planejamento final"
```

Não use `git reset --hard`.

---

## ETAPA D — Abrir o Codex

Ainda na raiz:

```bash
codex
```

---

## ETAPA E — Executar a FASE 0

Copie e cole no Codex o conteúdo de:

`03-PROMPT-INICIAL-FASE-0.md`

A Fase 0 NÃO deve alterar frontend.

Ela deve:
- ler `gpt-taste`;
- ler toda `ImagensPlanejamento`;
- auditar todo o projeto;
- gerar `REDESIGN_V3_IMPLEMENTACAO.md`;
- parar.

---

## ETAPA F — Revisar FASE 0

Leia o relatório do Codex.

Confirme que:
- ele detectou `redesign-v2`;
- não implementou nada;
- leu os dados reais;
- detectou conteúdo fictício nos mockups;
- criou `REDESIGN_V3_IMPLEMENTACAO.md`;
- descreveu a estratégia.

Se quiser, traga a resposta para o ChatGPT revisar antes de continuar.

---

## ETAPA G — Autorizar FASE 1

Use o prompt de FASE 1 em:

`04-PROMPTS-POR-FASE.md`

O Codex implementa:
- fundação visual;
- Navbar;
- Hero;
- motion do Hero;
- responsividade da fase.

Depois ele deve PARAR.

---

## ETAPA H — Revisar no navegador

Após cada fase:

1. rode o projeto conforme os scripts existentes;
2. abra a página;
3. verifique desktop;
4. verifique mobile;
5. teste navegação;
6. teste hover/focus;
7. teste motion;
8. confira se dados reais foram preservados.

Use `05-CHECKLIST-DO-USUARIO.md`.

---

## ETAPA I — Próximas fases

Sempre use o prompt específico da fase seguinte.

Ordem:

1. FASE 0 — Auditoria
2. FASE 1 — Fundação + Navbar + Hero
3. FASE 2 — Sobre + Experiência
4. FASE 3 — Certificações
5. FASE 4 — Projetos em destaque
6. FASE 5 — Explorador de projetos
7. FASE 6 — Detalhe de projeto
8. FASE 7 — Tecnologias + Como trabalho
9. FASE 8 — Contato + Footer
10. FASE 9 — Motion e microinterações
11. FASE 10 — QA final

Nunca pule uma fase sem necessidade.

---

## ETAPA J — Commits

Depois de uma fase aprovada por você, é recomendável criar um commit.

Exemplo:

```bash
git add .
git commit -m "feat: concluir fase 1 do redesign"
```

Depois avance.

Isso facilita rollback por fase.

---

## ETAPA K — Final

Depois da FASE 10:

- revise tudo;
- não faça merge automaticamente;
- compare com a versão anterior;
- só depois decida se `redesign-v2` deve ser integrada à `main`.
