$gpt-taste

# PROMPT MESTRE — REDESIGN V3 DO PORTFÓLIO

Você vai implementar o Redesign V3 deste portfólio profissional.

Esta tarefa já possui uma direção visual aprovada, mockups, vídeos demonstrativos e regras de implementação. Você NÃO deve começar desenhando uma solução completamente diferente.

Sua função é:
1. entender o projeto real;
2. entender os dados reais;
3. estudar as referências;
4. planejar;
5. implementar de forma incremental;
6. pausar obrigatoriamente após cada fase para eu revisar no navegador.

# CONTEXTO DA BRANCH

A implementação desta nova direção visual será feita na branch Git existente:

`redesign-v2`

Não crie `redesign-v3`.

O termo **Redesign V3** neste documento identifica a nova direção visual e o novo planejamento,
não o nome da branch.

# REGRA DE CONTROLE

VOCÊ NÃO TEM AUTORIZAÇÃO PARA IMPLEMENTAR TODAS AS FASES DE UMA VEZ.

Existem checkpoints obrigatórios.

Após concluir a auditoria inicial, PARE.

Após concluir cada fase de implementação, PARE.

Você só poderá continuar quando eu responder exatamente ou de forma inequívoca:

`CONTINUAR REDESIGN`

Não interprete silêncio, elogios ou comentários como autorização para avançar.

---

# 0. SKILL OBRIGATÓRIA

Antes de qualquer alteração:

1. localize a skill `gpt-taste`;
2. leia integralmente o `SKILL.md`;
3. aplique a skill durante toda a tarefa.

Não apenas diga que vai usá-la.

Use-a como referência de:
- hierarquia;
- layout;
- composição;
- tipografia;
- spacing;
- responsive design;
- motion;
- microinterações;
- anti-slop;
- identidade;
- acabamento;
- acessibilidade visual.

---

# 1. PASTA DE PLANEJAMENTO — LEITURA OBRIGATÓRIA

Na raiz do repositório existe:

`ImagensPlanejamento/`

Você DEVE analisar especificamente essa pasta, além de todo o restante do projeto.

Leia nesta ordem:

## Documentação
1. `ImagensPlanejamento/03-Documentacao/00-LEIA-PRIMEIRO.md`
2. `ImagensPlanejamento/03-Documentacao/01-ESPECIFICACAO-MOTION.md`
3. `ImagensPlanejamento/03-Documentacao/02-CHECKLIST-CHECKPOINTS.md`

## Layouts
Depois analise TODAS as imagens, em ordem:

`ImagensPlanejamento/01-Layouts/`

- 01-Hero
- 02-Sobre
- 03-Experiencia
- 04-Certificacoes
- 05-Projetos-Destaque
- 06-Explorador-Projetos
- 07-Detalhe-Projeto
- 08-Tecnologias
- 09-Skills-Como-Trabalho
- 10-Contato-Footer

## Motion
Depois analise:

`ImagensPlanejamento/02-Motion/`

Comece pela compilação e depois veja os vídeos individuais.

IMPORTANTE:
os vídeos representam intenção de movimento, NÃO movimento de câmera.
Não implemente zoom cinematográfico na página apenas porque aparece na simulação.

Traduza a intenção para motion real de UI:
- stagger;
- reveal;
- opacity;
- transform;
- SVG path;
- glow;
- hover;
- focus;
- reorganização de cards;
- filtros;
- expansão;
- transições.

---

# 2. FONTE DA VERDADE

A FONTE DA VERDADE DOS DADOS É O CÓDIGO ATUAL DO PORTFÓLIO.

Os mockups foram produzidos com IA e podem conter conteúdo ilustrativo incorreto.

Nunca copie automaticamente das imagens/vídeos:

- métricas;
- percentuais;
- datas;
- períodos;
- projetos;
- tecnologias;
- certificações;
- cargos;
- empresas;
- quantidade de usuários;
- performance;
- latência;
- disponibilidade;
- resultados;
- links;
- stack;
- métodos;
- descrições.

Antes de utilizar qualquer dado visto em imagem ou vídeo, confirme no código atual.

Se não estiver confirmado no repositório, NÃO USE.

Prioridade:

1. dados reais do código;
2. decisões documentadas;
3. layouts = composição;
4. motion = intenção de movimento;
5. gpt-taste = heurísticas e acabamento.

---

# 3. PRESERVAÇÃO DE CONTEÚDO

Não resolva excesso de conteúdo apagando informação relevante.

Quero manter grande parte dos dados existentes.

Você pode:
- resumir;
- reorganizar;
- reescrever com o MESMO contexto;
- melhorar escaneabilidade;
- melhorar posicionamento;
- agrupar;
- aplicar progressive disclosure.

Você NÃO pode:
- mudar o significado;
- exagerar;
- criar autoridade inexistente;
- criar resultado inexistente;
- inventar experiência.

Princípio:

MUITO CONTEÚDO
+
EXCELENTE ORGANIZAÇÃO
+
BAIXA POLUIÇÃO VISUAL.

---

# 4. POSICIONAMENTO

A identidade principal deve ser:

DESENVOLVEDOR BACKEND JAVA

com forte relação com:

- Java;
- Spring Boot;
- Spring Security;
- Spring Data JPA;
- APIs REST;
- sistemas distribuídos;
- PostgreSQL;
- AWS / arquitetura cloud.

AWS é diferencial.

O portfólio NÃO deve reposicionar o perfil principalmente como Cloud Engineer.

Node.js, TypeScript, React e tecnologias correlatas aparecem como experiência/stack complementar quando os dados reais sustentarem isso.

---

# 5. DIREÇÃO VISUAL

A referência visual aprovada prioriza:

- dark graphite;
- electric blue;
- off-white;
- contraste forte;
- composição editorial;
- estética de engenharia;
- linhas e diagramas técnicos;
- profundidade discreta;
- identidade própria;
- Backend Java como core;
- hierarquia forte;
- visual premium.

Evitar:
- template SaaS;
- dashboard administrativo;
- excesso de cards;
- excesso de pills;
- badges decorativos sem função;
- landing page genérica;
- shadcn showcase;
- aparência de site gerado por IA;
- glow em tudo;
- efeitos sem propósito.

As imagens NÃO são especificação pixel-perfect.

Adapte quando necessário por:
- conteúdo real;
- responsividade;
- acessibilidade;
- performance;
- usabilidade.

---

# 6. GIT E SEGURANÇA

ANTES DE ALTERAR CÓDIGO execute:

`git status`
`git branch --show-current`
`git log -1 --oneline`

A branch esperada para esta experiência é:

`redesign-v2`

IMPORTANTE:
O nome conceitual/visual desta nova rodada continua sendo **Redesign V3**,
mas a implementação será feita dentro da branch Git já existente
`redesign-v2`.

NÃO crie uma nova branch apenas por causa do nome "V3".

Se NÃO estiver em `redesign-v2`:
- NÃO modifique arquivos;
- informe o problema;
- PARE.

Se houver alterações não commitadas que possam ser sobrescritas:
- informe;
- NÃO descarte;
- PARE.

Não faça merge para `main`.
Não delete branches.
Não use `reset --hard`.
Não apague dados existentes sem justificativa e autorização.

---

# 7. FASE 0 — AUDITORIA OBRIGATÓRIA

NÃO IMPLEMENTE CÓDIGO NESTA FASE.

Analise profundamente:

## Projeto
- estrutura;
- framework;
- dependências;
- design system;
- CSS/Tailwind;
- componentes;
- páginas;
- rotas;
- estado;
- hooks;
- assets;
- analytics;
- funcionalidades;
- tema;
- responsividade.

## Dados
- Hero;
- Sobre;
- Experiência;
- Certificações;
- Projetos;
- filtros;
- tecnologias;
- skills;
- contato;
- links;
- CV.

## Planejamento
- toda `ImagensPlanejamento`;
- layouts;
- vídeos;
- documentação;
- gpt-taste.

## Comparação
Identifique:
- o que já existe e deve ser preservado;
- o que precisa ser redesenhado;
- funcionalidades que podem regressar;
- inconsistências entre README/código/visual;
- conteúdo fictício presente nos mockups;
- riscos de responsividade;
- riscos de performance;
- riscos de acessibilidade.

Depois crie na raiz:

`REDESIGN_V3_IMPLEMENTACAO.md`

Esse arquivo deve conter:

1. diagnóstico atual;
2. arquitetura visual;
3. design tokens propostos;
4. estratégia de componentes;
5. estratégia de dados;
6. estratégia de projetos/filtros;
7. estratégia de motion;
8. estratégia mobile;
9. estratégia de acessibilidade;
10. riscos;
11. plano por fases;
12. arquivos prováveis a alterar.

Depois apresente no chat um resumo.

FINAL DA FASE 0:

`CHECKPOINT FASE 0 — aguardando sua aprovação para iniciar a implementação.`

E PARE.

NÃO implemente Hero.
NÃO implemente CSS.
NÃO continue automaticamente.

---

# 8. FASE 1 — FUNDAÇÃO + NAVBAR + HERO

Somente após minha autorização.

Implementar:
- design tokens/base visual;
- estrutura global necessária;
- navbar;
- Hero;
- motion principal do Hero;
- estados hover/focus;
- responsividade da fase.

Hero deve comunicar rapidamente:

Gabriel Falcão da Cruz
Backend Java
Spring Boot
Sistemas Distribuídos
AWS

Diagrama arquitetural deve ser UI real, preferencialmente com SVG/CSS/HTML adequado.

Motion esperado:
- reveal escalonado;
- linhas arquiteturais desenhadas progressivamente;
- nós acendendo;
- CTA com microinteração;
- motion sutil;
- `prefers-reduced-motion`.

Não inventar serviços no diagrama que não sejam coerentes com os dados reais.

Depois:
- executar validações;
- iniciar/validar aplicação;
- informar exatamente o que devo observar no navegador.

ENTREGAR relatório conforme:
`ImagensPlanejamento/03-Documentacao/02-CHECKLIST-CHECKPOINTS.md`

FINAL:

`CHECKPOINT FASE 1 — aguardando sua aprovação.`

PARE.

---

# 9. FASE 2 — SOBRE + EXPERIÊNCIA

Somente após `CONTINUAR REDESIGN`.

Sobre:
- manter contexto real;
- melhorar texto grande sem alterar significado;
- hierarquia editorial;
- preservar informações relevantes.

Experiência:
- usar somente experiência real;
- preservar dados importantes;
- pipeline visual apenas se corresponder aos processos reais;
- não copiar percentuais/métricas de mockups sem validação.

Adicionar motion específico das seções.

Validar desktop/mobile.

Relatório.
PARE.

---

# 10. FASE 3 — CERTIFICAÇÕES

Implementar:
- credencial principal;
- arquivo/listagem completa;
- expansão/progressive disclosure se necessário;
- dados reais;
- links reais;
- datas/status reais.

Não esconder certificações importantes.
Não inventar status.

Motion discreto.

Validar.
Relatório.
PARE.

---

# 11. FASE 4 — PROJETOS EM DESTAQUE

Projetos são prioridade máxima.

Criar experiência editorial para poucos cases principais.

Usar apenas projetos reais.

Apresentar, conforme dados disponíveis:
- contexto/problema;
- solução;
- arquitetura;
- stack;
- decisões;
- highlights;
- métricas somente quando comprovadas;
- GitHub/demo quando existentes.

Não transformar todos os projetos em cards gigantes.

Implementar motion/diagramas adequados.

Validar.
Relatório.
PARE.

---

# 12. FASE 5 — EXPLORADOR COMPLETO DE PROJETOS

Preservar TODOS os projetos reais.

O sistema existente de filtros deve ser estudado antes de ser alterado.

Construir experiência escalável para muitos projetos.

Filtros podem considerar apenas categorias realmente derivadas dos dados.

Requisitos:
- elegante;
- não parecer dashboard administrativo;
- teclado;
- estados selecionados;
- contagem;
- estado vazio;
- clear filters;
- animação de reorganização;
- responsivo;
- capacidade de crescimento.

Não remover projeto para facilitar layout.

Validar todos os filtros.

Relatório.
PARE.

---

# 13. FASE 6 — DETALHE DE PROJETO

Criar experiência aprofundada coerente com os dados.

Pode ser:
- página;
- modal sofisticado;
- drawer;
- solução equivalente,

desde que a UX seja forte e escalável.

Conteúdo possível somente quando os dados sustentarem:
- visão geral;
- problema;
- solução;
- arquitetura;
- stack;
- decisões;
- desafios;
- highlights;
- resultado comprovável;
- GitHub;
- demo.

Não preencher campos inexistentes com ficção.

Validar navegação e retorno ao explorador.

Relatório.
PARE.

---

# 14. FASE 7 — TECNOLOGIAS + COMO TRABALHO

Tecnologias:

Backend Java = core visual.

Preservar os grupos reais do projeto.

Transformar a seção em um mapa legível, não sopa de logos.

Motion:
core → sistemas distribuídos → cloud/infra → ferramentas → complementar.

Como Trabalho:
usar skills reais.
Conectar soft skills ao modo de trabalho sem inventar histórias.

Validar mobile.

Relatório.
PARE.

---

# 15. FASE 8 — CONTATO + FOOTER

Preservar:
- email real;
- LinkedIn real;
- GitHub real;
- links reais;
- navegação real.

Não inventar:
- SLA de resposta;
- disponibilidade;
- promessa comercial;
- localização mais específica do que a existente.

CTA forte e profissional.

Footer simples e consistente.

Validar.
Relatório.
PARE.

---

# 16. FASE 9 — POLIMENTO DE MOTION E MICROINTERAÇÕES

Revisar todos os vídeos novamente.

Polir:
- entrance stagger;
- scroll reveal;
- hover;
- focus;
- SVG paths;
- glow;
- transitions;
- filtros;
- mudanças de estado.

NÃO implementar:
- camera zoom;
- scroll hijacking;
- parallax pesado;
- movimento infinito;
- brilho constante em tudo.

Performance primeiro.

`prefers-reduced-motion` obrigatório.

Validar.

Relatório.
PARE.

---

# 17. FASE 10 — QA FINAL

Somente após aprovação de todas as fases.

Fazer revisão completa:

## Responsividade
- desktop grande;
- notebook;
- tablet;
- mobile;
- breakpoints intermediários.

## Acessibilidade
- HTML semântico;
- headings;
- keyboard;
- focus;
- aria;
- alt;
- contraste;
- reduced motion;
- filtros.

## Funcional
- navegação;
- links;
- GitHub;
- LinkedIn;
- email;
- CV;
- filtros;
- projetos;
- detalhes;
- tema;
- analytics existentes.

## Técnica
Quando disponíveis:
- TypeScript;
- lint;
- testes;
- build;
- console.

## Performance
- imagens;
- animações;
- re-render;
- dependências;
- layout shift.

Produzir relatório final de QA.

NÃO faça merge para main.

PARE e aguarde minha aprovação final.

---

# 18. REGRA DE CHECKPOINT — REPETINDO

Após QUALQUER fase:

1. mostre o que fez;
2. liste arquivos alterados;
3. diga o que preservou;
4. mostre validações;
5. diga exatamente o que devo testar no navegador;
6. explique desvios dos mockups;
7. informe problemas restantes;
8. PARE.

Nunca prossiga para outra fase automaticamente.

Use:

`CHECKPOINT CONCLUÍDO — aguardando sua aprovação para continuar.`

---

# 19. COMEÇAR AGORA

Sua ação AGORA é exclusivamente:

1. confirmar branch;
2. ler `gpt-taste`;
3. ler toda `ImagensPlanejamento`;
4. auditar todo o projeto;
5. criar `REDESIGN_V3_IMPLEMENTACAO.md`;
6. apresentar o checkpoint da FASE 0;
7. PARAR.

NÃO implemente código antes da minha aprovação.
