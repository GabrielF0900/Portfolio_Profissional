# Redesign V3 — Plano de implementação

## Escopo e fontes auditadas

Este documento encerra exclusivamente a Fase 0. Nenhum frontend, estilo ou componente foi implementado.

Ordem de autoridade adotada:

1. código, constantes, assets e funcionalidades atuais;
2. documentação aprovada em `ImagensPlanejamento/03-Documentacao`;
3. layouts 01–10 como direção de composição;
4. compilação e vídeos individuais 00–10 como intenção de motion;
5. skill `gpt-taste` como critério de hierarquia, acabamento, ritmo, densidade e qualidade.

Os 10 layouts foram analisados em ordem numérica. A compilação de motion foi analisada antes dos 10 vídeos individuais. Zooms, pans e reenquadramentos de câmera observados nas simulações não serão reproduzidos como comportamento da página.

## 1. Diagnóstico do projeto atual

### Arquitetura

- Aplicação Next.js 14.2.3 com App Router, React 18.3.1, TypeScript, Tailwind CSS 3.4 e componentes Radix/shadcn.
- A rota efetivamente usada está em `app/`: `app/page.tsx` monta `src/components/portfolio/portfolio.tsx`; `app/layout.tsx` concentra metadata, tema, Sonner e Google Analytics.
- Existe uma segunda árvore `src/app/` vazia, assim como `src/data/portfolio-data.ts` e `src/components/sections/ContactSection.tsx`; são resíduos estruturais que aumentam ambiguidade.
- Existe ainda um `portfolio.tsx` monolítico na raiz, aparentemente legado, enquanto a implementação ativa está modularizada em `src/components`.
- A página é uma única experiência de rolagem com navbar fixa, sete âncoras, oito seções visíveis, footer e botão de retorno ao topo.
- Estado local controla menu mobile, filtros, modais de projeto, modais de certificação, contato, cópia de email e tema.

### Sistema visual atual

- O visual é majoritariamente um conjunto genérico de cards claros/escuros com gradientes slate, badges e componentes shadcn.
- A identidade Backend Java existe no conteúdo, mas ainda não organiza a hierarquia visual.
- Há pouco ritmo editorial: seções usam em geral `py-12 md:py-20`, títulos centralizados e grids repetitivos.
- O CSS global existe em duas cópias (`app/globals.css` e `styles/globals.css`), mas apenas o primeiro é importado pela árvore ativa.
- O layout carrega Inter via `next/font/google`, fonte proibida pela direção `gpt-taste`; o `body` também declara fallback Arial/Helvetica no CSS.
- O tema claro/escuro é funcional via `next-themes`. Há um hook de tema baseado em horário, mas ele não está montado na árvore ativa.

### Dados e conteúdo

- A fonte principal de projetos é `src/constants/projects.ts`: 23 projetos no total, separados em pessoais e colaborativos.
- Há 20 credenciais em `src/constants/certifications.ts`, incluindo certificações, certificados e um objetivo em estudo.
- Há 30 tecnologias em cinco grupos: backend, infraestrutura, sistemas distribuídos, ferramentas e frontend/stack complementar.
- Há 8 soft skills em `src/constants/navigation.ts`.
- Hero, Sobre e Experiência ainda têm conteúdo embutido diretamente nos componentes, o que dificulta governança e comparação de dados.
- Há textos longos de projetos com alegações fortes e métricas. Como já existem no código, devem ser preservados como fonte atual, mas convém marcá-los para revisão editorial e comprobatória antes de lhes dar grande destaque visual.

### Funcionalidades existentes

- Navegação por âncoras e indicação de seção ativa.
- Menu mobile.
- Alternância de tema.
- Download do CV `CV_GabrielFalcaoJava.pdf`.
- Links para GitHub, LinkedIn, organização Neukox, credenciais, demos, vídeos e apresentações quando cadastrados.
- Modal de contato, cópia de dois endereços de email e abertura do Gmail.
- Explorador com filtros por destaque, ecossistema, área e tipo de projeto; chips removíveis, limpeza de filtros, contagem e estado vazio.
- Cards de projeto, modal responsivo de detalhes, imagem ampliada, tecnologias com progressive disclosure e links contextuais.
- Certificações separadas por tipo, com modal e credenciais externas/PDF.
- Google Analytics com eventos de seção, filtros, projetos, links externos e download de CV.
- Botão de retorno ao topo.
- Widget de notificações existe, mas está comentado na composição ativa.

### Qualidade técnica, responsividade e acessibilidade

- A base já usa breakpoints mobile/desktop e modais Radix, mas layouts densos, filtros e navegação precisam de auditoria em breakpoints intermediários.
- Ícones sociais e alguns botões dependem de `title` ou apenas do ícone; devem receber nomes acessíveis consistentes.
- Imagens usam `<img>` convencional; otimização, dimensões intrínsecas e prevenção de layout shift não estão sistematizadas.
- A rolagem customizada por `requestAnimationFrame` ignora `prefers-reduced-motion` e duplica o `scroll-behavior: smooth` global.
- O rastreamento de seção usa listener de `scroll`; o analytics usa `IntersectionObserver`. A nova arquitetura deve evitar listeners redundantes.
- A limpeza do `IntersectionObserver` em `SectionTracker` é declarada dentro do callback de `setTimeout` e não é retornada pelo efeito; há risco de observer não desconectado.
- O metadata atual é genérico e posiciona o perfil apenas como “desenvolvedor web”.
- `next.config.mjs` ignora erros de TypeScript e ESLint e desativa otimização de imagens.
- A verificação `tsc --noEmit --incremental false` falha no widget de notificações: o tipo aceita `shield`, mas `iconMap` não possui essa chave.
- O script `lint` usa `next lint`, incompatível com a evolução recente do Next e sem configuração ESLint explícita identificada.
- Há `package-lock.json` e `pnpm-lock.yaml` simultaneamente, apesar de o projeto declarar pnpm; isso permite instalações divergentes.
- React 18 está instalado com tipos React 19, combinação que merece normalização.
- GSAP e `@gsap/react` ainda não são dependências do projeto.

## 2. Dados e funcionalidades que precisam ser preservados

### Identidade e posicionamento factual

- Nome: Gabriel Falcão da Cruz.
- Posicionamento principal: Desenvolvedor Backend Java.
- Núcleo: Java, Spring Boot, Spring Security, Spring Data JPA, APIs REST, PostgreSQL e sistemas distribuídos.
- AWS e arquitetura cloud como diferencial, sem reposicionar o perfil como Cloud Engineer.
- Node.js, TypeScript, NestJS, React e tecnologias correlatas como experiência complementar, somente onde os dados atuais sustentam.
- Localização no nível já publicado: Brasil.
- Objetivo profissional atual, contexto sobre autismo, visão cloud-first, cultura ágil e documentação, preservando significado e dignidade.

### Inventário obrigatório

- Todos os 23 projetos reais, sem exclusão para simplificar o layout.
- Todos os campos atualmente disponíveis por projeto: descrição, stack, status, categoria, datas, imagem, destaques, equipe, cliente, métricas e links opcionais.
- Todas as 20 credenciais, seus estados, datas, códigos, emissores, descrições e URLs/PDFs existentes.
- Os cinco grupos e 30 tecnologias cadastradas.
- As 8 soft skills.
- A experiência Neukox, período, responsabilidades, stack, link e resultados já registrados no código, sem amplificação adicional.
- Foto real, CV, imagens dos projetos, badges/certificados, apresentação CityShield, favicon e demais assets referenciados.

### Comportamentos obrigatórios

- Navegação por âncoras, seção ativa, menu mobile e retorno ao topo.
- Tema e contraste coerentes; decidir na implementação se o modo claro continuará como opção ou se será reinterpretado sem quebrar a preferência do usuário.
- Download de CV e rastreamento desse evento.
- Todos os links externos válidos e seus eventos analíticos.
- Filtros combináveis, remoção individual, limpeza total, contagem, estado vazio e teclado.
- Acesso aos detalhes completos de projetos e retorno ao contexto do explorador.
- Progressive disclosure de tecnologias e certificações sem esconder conteúdo importante.
- Contato por email e redes, removendo apenas feedback enganoso de “email enviado” caso a aplicação não tenha confirmação real.

## 3. Inconsistências encontradas

- README posiciona o perfil como Full Stack e o metadata como desenvolvedor web; o código de conteúdo já migrou para Backend Java. README, metadata e UI precisam convergir.
- O mockup de certificações mostra 5 credenciais conquistadas e 1 em estudo, enquanto o código contém 20 registros no total.
- O mockup atribui janeiro de 2024 à AWS Solutions Architect Associate; o código informa 25/03/2026.
- O detalhe de SafeWallet no mockup informa janeiro–maio de 2024; o código informa maio–junho de 2026.
- O mockup de detalhe apresenta papel e metodologias não modelados no tipo `Project`; não podem ser assumidos.
- O explorador do mockup inclui paginação e ordenação por relevância; a UI atual filtra todos os resultados em memória e não possui paginação/ordenação explícita.
- A contagem de filtros ativos trata “mostrar todos” como filtro ativo porque o estado inicial é `featuredOnly=true`; a semântica visual precisa ser revista.
- “Colaborativos” depende de equipe com tamanho maior que um e nome diferente de Neukox. Registros com metadados de equipe inconsistentes podem cair na categoria errada.
- Em projetos colaborativos há divergências internas entre `team.size` e `team.description`.
- Há links `case_study: "#"` e uma credencial com `credentialUrl: "#"`; esses valores não devem aparecer como links reais.
- A experiência possui um card tracejado vazio com “disponível para discussão”, visualmente parecido com conteúdo ausente.
- O Hero e o CTA repetem lógica de contato, cópia de email, abertura do Gmail e toasts.
- O toast após retornar do Gmail pergunta se o email foi enviado e agradece pelo contato sem confirmação real.
- O footer usa uma data de atualização manual e um indicador “Ativo”, que pode ficar desatualizado.
- O widget de notificações contém notícias temporais sensíveis, está desativado e falha no TypeScript.
- A navegação não contém âncora de contato, embora o novo layout proponha esse item.
- Há duas árvores de app, dois CSS globais, componentes/provedores duplicados em raiz e `src`, arquivos vazios e implementação legada monolítica.
- O projeto declara pnpm, mas mantém dois lockfiles.
- `next.config.mjs` mascara falhas de tipagem/lint e desativa o pipeline de otimização de imagens.
- Os dois vídeos de fundo do Hero somam aproximadamente 5 MB e não aparecem na implementação modular ativa.
- A apresentação PPTX de CityShield tem aproximadamente 16,4 MB; deve continuar disponível, mas não deve entrar no carregamento inicial.

## 4. Conteúdo fictício ou não validado detectado nos mockups

Itens abaixo devem ser ignorados até existir suporte explícito no código/dados aprovados:

- promessa de resposta “em até 24h úteis” no contato;
- qualquer arquitetura apresentada como arquitetura real do próprio portfólio ou de um projeto sem correspondência campo a campo nos dados;
- papel “Desenvolvedor Backend & Arquiteto de Solução” e lista de metodologias no detalhe de SafeWallet;
- período de SafeWallet exibido como janeiro–maio de 2024;
- data de janeiro de 2024 para AWS Solutions Architect Associate;
- totais de certificações exibidos no mockup;
- paginação “12 por página”, cinco páginas e ordenação por relevância como se já fossem funcionalidades/dados existentes;
- promessa de trabalho remoto global ou disponibilidade comercial além do que estiver explicitamente aprovado no código vigente no momento da implementação;
- serviços AWS específicos em diagramas quando não confirmados no projeto correspondente;
- CloudWatch como etapa comprovada da experiência Neukox quando não estiver validado na descrição/dados dessa experiência;
- métricas, throughput, latência, disponibilidade, número de usuários, transações ou resultados apresentados apenas visualmente;
- retrato gerado/simulado do layout; deve ser usada a foto real do repositório;
- qualquer URL, handle social ou texto de case visto apenas na imagem.

Observação: os resultados de +20% e -30% da experiência existem no código atual e, por isso, não são classificados aqui como invenção do mockup. Ainda assim, devem ser tratados como conteúdo que merece validação documental antes de ganhar destaque dominante.

## 5. Posicionamento

Mensagem central: Gabriel Falcão da Cruz é Desenvolvedor Backend Java que projeta APIs e sistemas robustos, seguros e escaláveis, com Spring e PostgreSQL, usando conhecimento AWS para tomar melhores decisões de arquitetura.

Hierarquia de percepção:

1. Backend Java e Spring como identidade imediata.
2. Sistemas distribuídos, segurança, dados e APIs como profundidade técnica.
3. AWS/cloud como diferencial arquitetural.
4. Projetos reais como principal prova.
5. Certificações e experiência como validação.
6. Node.js/TypeScript/React como repertório complementar.
7. Forma de trabalhar e soft skills como suporte à entrega.

A narrativa seguirá AIDA: navegação premium; Hero para atenção; conteúdo técnico/projetos para interesse; cases, experiência e mapas de competência para desejo; contato e footer para ação.

## 6. Sistema visual

- Direção dark graphite como base, electric blue como energia funcional e off-white para tipografia principal.
- Estética editorial de engenharia: tipografia larga, linhas técnicas, grids discretos, diagramas SVG reais, precisão geométrica e profundidade controlada.
- Evitar estética de dashboard, template SaaS, showcase shadcn, excesso de cards/pills e glow indiscriminado.
- Usar capítulos com espaçamento vertical amplo, mantendo densidade interna organizada.
- Títulos com no máximo 2–3 linhas, containers largos e escala fluida.
- Componentes técnicos devem explicar relações reais, não apenas decorar.
- Grids bento, quando empregados, terão 3–5 peças e ocupação matematicamente completa com `grid-flow-dense`.
- Clickables e mídia terão física de hover/focus equivalente, sem esconder informação essencial.
- A fonte definitiva será escolhida no pre-flight determinístico exigido por `gpt-taste`; Inter não será mantida.

## 7. Design tokens propostos

### Cor

- `--surface-void: #05080d`
- `--surface-base: #080d14`
- `--surface-raised: #0d1420`
- `--surface-elevated: #121c2a`
- `--text-primary: #f4f7fb`
- `--text-secondary: #a7b1c0`
- `--text-muted: #737f90`
- `--accent-primary: #1769ff`
- `--accent-bright: #3c82ff`
- `--accent-soft: rgba(23, 105, 255, 0.16)`
- `--border-subtle: rgba(170, 190, 220, 0.14)`
- `--border-active: rgba(60, 130, 255, 0.72)`
- estados semânticos separados para sucesso, alerta e erro, sempre com texto/ícone além de cor.

### Tipografia

- Stack final: uma entre Satoshi, Cabinet Grotesk, Outfit ou Geist, selecionada no `<design_plan>` da Fase 1.
- Escala fluida: display aproximadamente `clamp(3rem, 5vw, 5.5rem)`; títulos de capítulo `clamp(2.25rem, 4vw, 4.5rem)`; corpo 1–1.125rem.
- Comprimento de linha: 58–72 caracteres para corpo; Hero em container equivalente a `max-w-6xl`.
- Pesos contidos e contraste por tamanho/espaçamento, não por excesso de caixa alta.

### Espaçamento e geometria

- Unidade base: 4 px; escala principal 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- Capítulos: equivalente a `py-32 md:py-48`, adaptado à densidade real.
- Container geral: 1440 px com gutters fluidos; containers de leitura menores apenas para parágrafos.
- Raios: 6, 10 e 16 px; evitar arredondamento excessivamente “amigável”.
- Bordas de 1 px e sombras profundas muito discretas.

### Motion

- Microinterações: 160–280 ms.
- Entradas: 400–800 ms.
- Stagger: 80–120 ms.
- Easing base: curvas suaves de aceleração/desaceleração; scrub somente onde a rolagem comunica progressão.
- Motion restrito prioritariamente a `transform`, `opacity`, SVG path e filtros leves.

## 8. Arquitetura de componentes

### Camada de dados

- Centralizar perfil, contato, experiência, navegação e textos hoje embutidos em componentes.
- Manter projetos, certificações e tecnologias como coleções tipadas; normalizar categorias, status e links opcionais.
- Introduzir seletores puros para filtros, destaques e agrupamentos, evitando lógica de negócio espalhada na UI.
- Tratar `#`, strings vazias e URLs ausentes como `null`.

### Camada de composição

- `PortfolioShell`: estrutura AIDA, overflow horizontal protegido e landmarks.
- `PremiumNavigation`: desktop/mobile, seção ativa, CV e redes.
- `HeroArchitecture`: mensagem, CTAs e diagrama sem dados inventados.
- `EditorialAbout`, `ExperiencePipeline`, `CertificationArchive`.
- `FeaturedCases` separado de `ProjectExplorer`.
- `ProjectDetails` reutilizável em rota/modal/drawer conforme decisão da Fase 6.
- `TechnologyMap` e `WorkMethodMap` com SVG/HTML acessível.
- `ContactCTA` e `SiteFooter`.

### Primitivos compartilhados

- `SectionFrame`, `SectionHeading`, `TechnicalGrid`, `DiagramNode`, `DiagramPath`.
- `ActionLink`, `IconButton`, `FocusRing`, `ExternalLink`, `DownloadLink`.
- `FilterGroup`, `FilterOption`, `ActiveFilterList`, `EmptyState`.
- `ProjectCard`, `ProjectMedia`, `TechnologyList`, `CredentialCard`.
- hooks para reduced motion, media queries, seção ativa e timelines GSAP com cleanup por contexto.

## 9. Estratégia dos projetos em destaque

- Separar editorialmente 3–4 projetos marcados como `featured`, com um case principal e cases secundários.
- Escolher o principal por força dos dados reais, alinhamento Backend Java e completude de assets/links, não pela imagem do mockup.
- Mostrar problema/contexto, solução, stack e decisões somente quando os campos atuais sustentarem.
- Diagramas serão derivados das tecnologias e descrições reais; serviços não confirmados não entram.
- Métricas existentes serão exibidas apenas após revisão de comprovação e com contexto; não serão usadas como decoração.
- O case principal pode usar scroll pinning com narrativa à esquerda e arquitetura/conteúdo à direita; cards secundários podem usar stack controlado.
- Nenhum hover esconderá a identificação, o resumo ou o acesso ao detalhe.

## 10. Estratégia do explorador de projetos

- Preservar os 23 projetos e a combinação de filtros existente.
- Refinar taxonomia usando apenas categorias/tecnologias reais e normalizadas.
- Estado inicial deve comunicar claramente se mostra destaques ou todos; a contagem de filtros será semanticamente correta.
- Contagem de resultados, filtros ativos, limpeza total e estado vazio serão regiões anunciáveis.
- Desktop: controles compactos editoriais, sem aparência de painel administrativo.
- Mobile: disclosure acessível em drawer/accordion, mantendo seleção visível.
- Reorganização com FLIP ou equivalente leve; opacity/transform e reduced motion.
- Paginação/ordenação só serão implementadas se justificadas pelo volume e aprovadas; não serão copiadas automaticamente do mockup.
- Estado pode ser refletido em query string na fase apropriada para compartilhamento e retorno, sem exigir nova fonte de dados.

## 11. Estratégia dos detalhes de projeto

- Preferência arquitetural: rota dedicada com URL estável e retorno preservando filtros/scroll; drawer/modal pode continuar como transição contextual em desktop se não prejudicar deep linking.
- Conteúdo progressivo: visão geral, stack, desafios, soluções, arquitetura, equipe, datas, status, links e mídia — cada bloco condicionado à existência do dado.
- Não criar campos vazios para fazer todos os cases parecerem iguais.
- Reutilizar um schema tipado e componentes de detalhe entre cases.
- Diagramas devem ter descrição textual equivalente e nós acessíveis.
- GitHub, demo, vídeo, apresentação e case study aparecem somente com URL real.

## 12. Estratégia de motion

- Adicionar GSAP e `@gsap/react` somente na fase autorizada e justificar o custo.
- Hero: reveal escalonado da estrutura, identidade, posicionamento, descrição, CTAs e diagrama; desenho de linhas SVG e acendimento de nós, sem loop chamativo.
- Sobre: blocos editoriais e retrato em reveal lateral leve.
- Experiência: resumo primeiro; pipeline real em sequência; responsabilidades em stagger.
- Certificações: credencial principal e arquivo em sequência, com hover/focus equivalentes.
- Destaques: case principal antes dos secundários; arquitetura por camadas.
- Explorador: transição FLIP leve e feedback imediato dos filtros.
- Detalhe: entrada contextual e arquitetura por camadas.
- Tecnologias: core Backend Java, depois sistemas distribuídos, cloud/infra, ferramentas e complementar.
- Como trabalho: relações de competências reveladas por grupos, não rotação decorativa.
- Contato/footer: CTA primeiro e links depois, encerramento calmo.
- Paradigmas avançados serão escolhidos deterministicamente no `<design_plan>` antes do primeiro código de UI. Opções prioritárias são pinning editorial e scrubbing/reveal; camera zoom, scroll hijacking, parallax pesado e glow contínuo estão proibidos.
- Todo timeline terá cleanup via `gsap.context`; evitar múltiplos ScrollTriggers para o mesmo efeito e recalcular apenas quando necessário.

## 13. Estratégia de responsividade

- Projetar mobile como composição própria, não como desktop comprimido.
- Breakpoints de validação: 360/390, 768, 1024, 1280, 1440 e largura ampla.
- Hero: H1 em 2–3 linhas, diagrama refluindo para sequência vertical simplificada.
- Navegação: menu com foco contido, Escape, retorno de foco e alvos mínimos de 44 px.
- Bentos passam para uma coluna sem preservar spans que criem vazios.
- Diagramas complexos ganham versão linear/rolável apenas quando não houver perda de compreensão; nunca provocar overflow da página.
- Filtros usam disclosure mobile e resumo persistente.
- Details usam rota/drawer/modal apropriado à largura, sem duplo scroll.
- Tabelas ou listas densas devem preferir cards semânticos/reflow, não redução agressiva de fonte.

## 14. Estratégia de acessibilidade

- Landmarks semânticos, skip link, hierarquia única de headings e títulos descritivos.
- Todos os icon buttons com nome acessível; links externos e downloads com propósito claro.
- Navegação, filtros, cards, modais, drawers e diagramas operáveis por teclado.
- Focus visible consistente e contrastante, nunca removido.
- Contraste WCAG AA para texto, controles, bordas funcionais e estados.
- Estados não comunicados apenas por cor; usar texto e ícone.
- `prefers-reduced-motion` desativa scrub/pinning/reorganização e mantém transições mínimas.
- Diagramas SVG com título/descrição ou alternativa textual; elementos decorativos ocultos de tecnologias assistivas.
- Imagens com `alt` contextual; foto não descrita apenas como “Gabriel”.
- Result count e empty state com `aria-live` moderado.
- Modais com foco inicial adequado, Escape, focus trap e retorno ao gatilho.
- Corrigir feedback falso de envio de email; comunicar apenas ações observáveis.

## 15. Estratégia de performance

- Preservar Server Components onde possível e isolar ilhas client somente para navegação, filtros, modais e motion.
- Migrar imagens adequadas para `next/image`, declarar dimensões/sizes e recuperar otimização de imagem.
- Lazy-load de imagens, diagramas complexos e mídia fora da dobra.
- Não carregar o PPTX de 16,4 MB, vídeos de Hero ou imagens de certificações até serem solicitados.
- GSAP por importação modular/dinâmica quando fizer sentido; evitar bibliotecas adicionais para efeitos alcançáveis em CSS.
- Animações em transform/opacity; evitar blur grande animado e sombras custosas.
- Um mecanismo de observação por necessidade, listeners passivos e cleanup correto.
- Evitar renderização simultânea de todos os detalhes pesados dos 23 projetos.
- Restaurar gates reais de TypeScript/lint no CI e remover `ignoreBuildErrors` depois de sanear a base.
- Unificar package manager/lockfile para builds reproduzíveis.
- Avaliar bundle, LCP, CLS, INP e custo de hidratação a cada checkpoint relevante.

## 16. Riscos

| Risco | Impacto | Mitigação |
|---|---|---|
| Copiar dados inventados dos mockups | Alto | renderizar apenas schema e constantes atuais; revisão de conteúdo por checkpoint |
| Perder projetos/certificados ao reduzir densidade | Alto | inventário automatizado e comparação de contagem antes/depois |
| Motion excessivo ou equivalente a câmera | Alto | motion semântico, reduced motion, orçamento de ScrollTriggers |
| Regressão dos filtros/modais/links/analytics | Alto | testes de seletores, teclado, links e eventos por fase |
| Diagramas ilegíveis no mobile | Alto | versão refluída e alternativa textual |
| H1 quebrar em muitas linhas | Médio | container largo, clamp e testes em 360–1440 px |
| Glow/azul perder contraste | Médio | tokens semânticos e auditoria de contraste |
| Conteúdo longo virar parede textual | Médio | progressive disclosure, resumos fiéis e comprimentos de linha controlados |
| Bundle crescer com GSAP e assets | Médio | importação modular, lazy-load e orçamento de performance |
| Base ocultar erros de build | Alto | corrigir TypeScript/lint antes de remover flags de bypass |
| Duplicidade estrutural causar edição na árvore errada | Médio | declarar `app/` + `src/components` como árvore ativa e remover legado só com autorização |
| Links `#` parecerem reais | Médio | normalizar links ausentes como `null` |
| Tema claro conflitar com direção dark | Médio | decisão explícita sem quebrar preferência/contraste |
| Conteúdo temporal ficar obsoleto | Médio | centralizar disponibilidade, última atualização e objetivo em dados revisáveis |

## 17. Arquivos provavelmente afetados

### Fundação e configuração

- `package.json`, `pnpm-lock.yaml`, possível remoção autorizada de `package-lock.json`.
- `next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`.
- `app/layout.tsx`, `app/globals.css`, `app/page.tsx`.
- `src/components/portfolio/portfolio.tsx`.

### Dados e tipos

- `src/types/index.ts`.
- `src/constants/projects.ts`, `certifications.ts`, `technologies.ts`, `navigation.ts`, `lastUpdate.ts`.
- novo módulo central de perfil/experiência/contato, se aprovado.

### Layout e seções

- `src/components/layout/Navigation.tsx`, `Footer.tsx`.
- todas as seções ativas em `src/components/sections/`.
- componentes em `src/components/projects/` e `src/components/projects-modal/`.
- `src/components/ScrollToTop.tsx` e possíveis novos componentes de diagrama/motion.

### Hooks, analytics e UI

- `src/hooks/useScroll.ts`, `use-media-query.ts` e novo hook de reduced motion/GSAP.
- `src/components/analytics/SectionTracker.tsx`, `src/lib/gtag.ts`.
- primitivas Radix/shadcn realmente usadas; não há intenção de reestilizar todo o diretório `components/ui` indiscriminadamente.

### Assets e documentação

- foto, CV, imagens de projetos e certificados serão preservados; versões otimizadas podem ser adicionadas.
- `README.md` deverá ser alinhado ao novo posicionamento ao final.
- arquivos vazios/legados e CSS duplicado só serão removidos em fase autorizada e após confirmação de não uso.

## 18. Plano completo por fases

### Fase 0 — Auditoria e planejamento

- Concluída neste documento.
- Branch, documentação, layouts, vídeos, código, dados, assets, dependências e validação TypeScript auditados.
- Nenhum frontend implementado.

### Fase 1 — Fundação, navbar e Hero

- Antes de UI, emitir `<design_plan>` com RNG determinístico da skill: arquitetura de Hero, fonte, três arquiteturas de componente e dois paradigmas GSAP.
- Validar AIDA, H1 `max-w-6xl` em 2–3 linhas, ausência de stamps/pills decorativos, contraste dos botões e densidade de qualquer bento.
- Implementar tokens, base global, navbar, Hero e diagrama real.
- Preservar CV, links, analytics, tema e reduced motion.
- Validar TypeScript, lint/build disponíveis, desktop/mobile e parar no checkpoint.

### Fase 2 — Sobre e Experiência

- Reorganizar textos sem alterar significado.
- Preservar diferenciais e objetivo com progressive disclosure responsável.
- Implementar narrativa de experiência e pipeline apenas com processos reais.
- Validar métricas, datas e stack antes do destaque; parar.

### Fase 3 — Certificações

- Criar credencial principal e arquivo completo das 20 entradas.
- Preservar datas, status, códigos, PDFs e links; corrigir links placeholder.
- Motion discreto, teclado e mobile; parar.

### Fase 4 — Projetos em destaque

- Selecionar cases entre os projetos reais marcados como destaque.
- Construir narrativa editorial, diagramas e motion condicionados aos dados.
- Não inventar campos nem serviços; parar.

### Fase 5 — Explorador completo

- Preservar os 23 projetos e todos os filtros úteis.
- Normalizar taxonomia, contagem, empty state, clear filters e teclado.
- Implementar reorganização leve/reduced motion e validar combinações; parar.

### Fase 6 — Detalhe de projeto

- Definir rota dedicada com possível transição contextual.
- Renderizar blocos somente quando houver dados.
- Preservar retorno ao explorador, filtros e links; parar.

### Fase 7 — Tecnologias e Como trabalho

- Backend Java como core; demais grupos revelados por relação real.
- Preservar 30 tecnologias e 8 soft skills sem sopa de logos.
- Implementar mapa acessível e alternativa mobile; parar.

### Fase 8 — Contato e footer

- Preservar emails, LinkedIn, GitHub, CV e navegação.
- Remover promessas/feedback não comprováveis.
- CTA de alto contraste e fechamento contido; parar.

### Fase 9 — Polimento de motion e microinterações

- Rever novamente todos os vídeos.
- Ajustar stagger, reveals, SVG paths, glow, hover/focus, filtros e transições.
- Auditar reduced motion, cleanup e performance; parar.

### Fase 10 — QA final

- Responsividade completa e breakpoints intermediários.
- Teclado, headings, landmarks, aria, alt, contraste e reduced motion.
- Navegação, links, CV, filtros, projetos, detalhes, tema e analytics.
- TypeScript, lint, build, console/runtime e testes adicionados.
- Performance de imagens, bundle, re-render, animações e layout shift.
- Atualizar README e produzir relatório final; não fazer merge em `main`.

Cada fase só começa após autorização explícita, termina com relatório do checkpoint e para antes da fase seguinte.
