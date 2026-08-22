$gpt-taste

Quero iniciar a implementação planejada do novo redesign deste portfólio.

CONTEXTO GIT OBRIGATÓRIO:

A branch correta já existe e deve ser:

`redesign-v2`

Não crie `redesign-v3`.

O termo "Redesign V3" presente na documentação representa a nova direção visual, não o nome da branch.

ANTES DE FAZER QUALQUER ALTERAÇÃO:

1. execute:
   - `git status`
   - `git branch --show-current`
   - `git log -1 --oneline`

2. confirme que a branch é `redesign-v2`.

Se não estiver em `redesign-v2`, NÃO ALTERE ARQUIVOS e pare para me avisar.

---

Depois:

3. localize e LEIA INTEGRALMENTE a skill:

`gpt-taste`

Use as instruções da skill durante toda a análise.

---

4. leia integralmente:

`ImagensPlanejamento/03-Documentacao/03-PROMPT-MESTRE-CODEX.md`

Esse arquivo contém as regras principais e todas as fases.

Também leia integralmente:

`ImagensPlanejamento/03-Documentacao/00-LEIA-PRIMEIRO.md`
`ImagensPlanejamento/03-Documentacao/01-ESPECIFICACAO-MOTION.md`
`ImagensPlanejamento/03-Documentacao/02-CHECKLIST-CHECKPOINTS.md`

---

5. analise TODAS as imagens em:

`ImagensPlanejamento/01-Layouts/`

na ordem numérica.

---

6. analise TODOS os vídeos em:

`ImagensPlanejamento/02-Motion/`

Comece por:

`00_Compilacao_MotionV2.mp4`

e depois analise os vídeos individuais.

Os vídeos são referência de intenção de motion.

NÃO transforme os movimentos de câmera das simulações em zoom de página.

Traduza a intenção para motion real de UI.

---

7. AUDITE TODO O REPOSITÓRIO.

Não faça uma análise superficial.

Leia:

- páginas;
- componentes;
- dados;
- constantes;
- hooks;
- estilos;
- Tailwind/CSS;
- assets;
- projetos;
- filtros;
- certificações;
- tecnologias;
- experiência;
- skills;
- contatos;
- links;
- CV;
- analytics;
- responsividade;
- dependências;
- funcionalidades existentes.

---

8. REGRA ABSOLUTA DOS DADOS:

O CÓDIGO ATUAL DO PORTFÓLIO É A FONTE DA VERDADE.

As imagens e vídeos foram gerados como referência visual e podem conter conteúdo ilustrativo ou incorreto.

É proibido copiar das imagens sem validar no código:

- números;
- métricas;
- datas;
- períodos;
- tecnologias;
- projetos;
- cargos;
- certificações;
- links;
- resultados;
- performance;
- disponibilidade;
- latência;
- usuários;
- descrições.

Se um dado existir apenas no mockup e não estiver confirmado no código:

IGNORE.

---

9. Quero PRESERVAR GRANDE PARTE DOS DADOS atuais.

Você pode:

- resumir textos grandes;
- reorganizar;
- melhorar posicionamento;
- melhorar hierarquia;
- aplicar progressive disclosure;
- remodelar uma frase mantendo exatamente o mesmo contexto.

Você NÃO pode:

- alterar o significado;
- exagerar;
- inventar autoridade;
- inventar experiência;
- inventar resultado;
- apagar conteúdo relevante apenas para deixar o design minimalista.

---

10. EXECUTE SOMENTE A FASE 0.

NÃO IMPLEMENTE FRONTEND.

Sua tarefa nesta execução é:

- ler gpt-taste;
- ler toda `ImagensPlanejamento`;
- auditar o projeto inteiro;
- comparar código atual × planejamento;
- identificar conteúdo fictício dos mockups;
- identificar riscos de regressão;
- identificar funcionalidades que devem ser preservadas;
- identificar dados e textos que podem ser remodelados sem alterar contexto;
- definir estratégia de componentes;
- definir estratégia responsiva;
- definir estratégia de motion;
- definir estratégia de acessibilidade;
- definir estratégia do explorador de projetos;
- definir estratégia dos detalhes de projeto.

Crie na raiz:

`REDESIGN_V3_IMPLEMENTACAO.md`

O documento deve conter:

1. diagnóstico do estado atual;
2. posicionamento;
3. sistema visual;
4. design tokens;
5. arquitetura de componentes;
6. preservação de dados;
7. projetos e filtros;
8. motion;
9. responsividade;
10. acessibilidade;
11. performance;
12. riscos;
13. plano por fases;
14. arquivos que provavelmente serão modificados.

---

Depois apresente no chat:

- resumo da auditoria;
- principais decisões;
- inconsistências encontradas;
- conteúdo de mockup que será ignorado;
- riscos;
- plano proposto.

FINALIZE EXATAMENTE COM:

`CHECKPOINT FASE 0 — aguardando sua aprovação para iniciar a implementação.`

E PARE.

NÃO altere componentes.
NÃO altere CSS.
NÃO altere páginas.
NÃO implemente Hero.
NÃO comece FASE 1.

Aguarde minha autorização.
