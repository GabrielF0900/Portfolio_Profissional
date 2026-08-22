# Hero Redesign V2 — Contexto da Sessão

## Data

- Data da sessão: 20 de agosto de 2026.
- Fuso informado pelo ambiente: America/Bahia.
- Este documento registra o estado observado ao final da sessão e deve ser usado como fonte de contexto na próxima sessão do Codex.

## Branch e Git

- Branch ativa: `redesign-v2`.
- `HEAD` no encerramento: `7a5e973 checkpoint: hero redesign antes da reescrita manual`.
- Checkpoint inicial relevante: `7a5e973`, criado antes da reescrita manual que levou ao Hero orbital atual.
- Histórico recente observado:
  - `7a5e973 checkpoint: hero redesign antes da reescrita manual`
  - `a1847c4 checkpoint hero redesign antes de refinamento visual`
  - `0a743be backup antes do redesign do portfolio.`
  - `340affb feat(analytics): implementar rastreamento de eventos customizados com GA4`
  - `ab586d9 feat(portfolio): refatoração do sistema de filtros e destaque Neukox`
- Não foi executado `git add`, `git commit` ou `git push` nesta sessão.
- O worktree já estava sujo antes da criação deste relatório. As mudanças existentes pertencem ao redesign em andamento e não devem ser descartadas em massa.

### Estado do worktree antes deste relatório

Arquivos rastreados modificados:

- `app/globals.css`
- `components.json`
- `package.json`
- `pnpm-lock.yaml`
- `src/components/sections/HeroArchitectureDiagram.tsx`
- `src/components/sections/HeroSection.tsx`

Arquivos não rastreados:

- `src/components/sections/HeroBackendOrbit.module.css`
- `src/components/sections/HeroBackendOrbit.tsx`
- `src/components/sections/HeroSection.module.css`
- `src/components/ui/animated-beam.tsx`
- `src/components/ui/orbiting-circles.tsx`

Observação importante: `git diff --stat` e `git diff --name-only` não incluem arquivos não rastreados. Por isso, os novos arquivos orbitais não aparecem nesses dois comandos até serem adicionados ao índice, embora existam fisicamente e sejam usados pela aplicação.

## Objetivo da sessão

Refinar o Hero V2 já aprovado, sem redesenhar sua identidade. O foco foi:

- manter integralmente a coluna esquerda e sua hierarquia;
- preservar o conceito visual Orbiting Circles + Animated Beam;
- aumentar de seis para oito nodes tecnológicos;
- reforçar discretamente o Backend Core;
- melhorar a leitura do fluxo Requests → Backend Java → AWS;
- adicionar hover e foco acessível aos nodes;
- preservar `prefers-reduced-motion`;
- corrigir colisões, cortes e alinhamento do palco orbital em breakpoints menores;
- não alterar as outras seções do portfólio.

## Estado inicial

No início do refinamento, `HeroBackendOrbit` já estava funcionando e sua direção visual havia sido aprovada. O diagrama continha:

- seis nodes no total;
- três nodes internos: Java, Security e PostgreSQL;
- três nodes externos: REST APIs, Distribuídos e Cloud;
- raio interno de 132 px;
- raio externo de 208 px;
- duração interna de 30 segundos;
- duração externa de 38 segundos, em sentido reverso;
- Backend Core de 10,8 rem no desktop e 9 rem no mobile;
- AWS como endpoint externo à direita;
- Requests como endpoint externo à esquerda;
- dois `AnimatedBeam` conectando Requests ao core e o core à AWS.

O arquivo `HeroSection.tsx` já renderizava `HeroBackendOrbit`, e não o componente antigo `HeroArchitectureDiagram`.

## Estado atual do Hero

O Hero atual mantém duas colunas em telas grandes:

1. Coluna esquerda editorial com disponibilidade, nome Gabriel Falcão da Cruz, título BACKEND JAVA, stack, descrição, CTAs e links sociais.
2. Coluna direita com o ecossistema orbital de Backend Java.

Em larguras abaixo de 1200 px, o layout passa para uma coluna: conteúdo textual primeiro e diagrama orbital depois. A identidade visual, o conteúdo e a ordem da coluna esquerda foram preservados.

A estrutura atualmente aprovada na coluna direita é:

```text
Requests  →  Backend Java  →  AWS
                  ↕
        tecnologias em duas órbitas
```

AWS permanece fora da órbita e não compete com o core. Requests também permanece fora da órbita. O core é o elemento dominante.

## Evolução visual

### Arquitetura antiga

`src/components/sections/HeroArchitectureDiagram.tsx` implementa o diagrama anterior. Ele ainda existe, mas não está importado por `HeroSection.tsx`.

Sua arquitetura visual é baseada em:

- cena com perspectiva 3D em CSS;
- painel de clientes Web, Mobile e API Services;
- card central API / Spring Boot;
- cards separados para Spring Security, PostgreSQL e observabilidade;
- painel vertical AWS com EC2/ECS, RDS, S3 e CloudWatch;
- conexões SVG fixas usando `CLIENT_PATHS`, `SERVICE_PATHS` e `AWS_PATHS`;
- vários marcadores `data-architecture-*` usados pelas animações GSAP de entrada.

Essa solução tinha maior densidade estrutural, muitos cards retangulares e geometria fixa. Também carregava bastante CSS legado em `HeroSection.module.css` e `app/globals.css`.

### Nova solução adotada

A solução aprovada substitui visualmente o Architecture Diagram pelo componente `HeroBackendOrbit`, composto por:

- Backend Core circular e dominante;
- dois anéis orbitais concêntricos;
- quatro tecnologias em cada anel;
- endpoint Requests fora da órbita à esquerda;
- endpoint AWS fora da órbita à direita;
- dois Animated Beams para representar o fluxo;
- background técnico discreto com grid, glow radial e vignette já aprovados.

### Motivo da mudança

A direção orbital comunica melhor um ecossistema backend organizado ao redor de um núcleo Java/Spring Boot. Ela reduz a aparência de dashboard ou fluxograma corporativo do diagrama antigo, melhora a leitura imediata do papel central do Backend Java e cria movimento contínuo sem transformar o Hero em um loading spinner.

A mudança também permite representar tecnologias como competências orbitando o core, enquanto Requests e AWS formam uma narrativa de entrada e saída separada das competências.

## HeroBackendOrbit

Arquivo principal: `src/components/sections/HeroBackendOrbit.tsx`.

Responsabilidades atuais:

- criar referências para wrapper, Requests, core e AWS;
- renderizar os dois endpoints de fluxo;
- renderizar o core;
- renderizar dois grupos `OrbitingCircles`;
- fornecer exatamente quatro children para cada órbita;
- renderizar dois `AnimatedBeam` com offsets calibrados para o core;
- usar somente ícones Lucide já disponíveis, sem instalar bibliotecas adicionais.

O componente local `TechNode` recebe ícone, label e a variante `compact`. Os nodes possuem `tabIndex={0}` e `aria-label`, permitindo foco por teclado e microinteração equivalente ao hover.

O componente local `FlowNode` usa `forwardRef` porque o Animated Beam calcula a geometria real a partir dos elementos Requests e AWS.

## Orbiting Circles

Arquivo: `src/components/ui/orbiting-circles.tsx`.

O caminho correto no repositório é `src/components/ui`, embora parte do briefing tenha citado `components/ui`.

Funcionamento:

- converte os children em array;
- distribui cada item por `360 / totalItems`;
- define `--duration`, `--radius` e `--angle` como custom properties;
- posiciona cada item no centro com margem negativa baseada em `iconSize`;
- usa `animationDirection: reverse` quando solicitado;
- a animação efetiva vem da classe global `.magic-orbit-runtime` e do keyframe `magic-orbit` em `app/globals.css`.

O componente Magic UI não foi reescrito durante o refinamento. Para permitir raios responsivos sem alterar sua implementação, `HeroBackendOrbit` passa um `style` que sobrescreve `--radius` com as variáveis locais `--inner-radius` e `--outer-radius`.

Os paths SVG nativos de `OrbitingCircles` estão desativados com `path={false}`. Os dois círculos visuais são desenhados por `.orbitPathInner` e `.orbitPathOuter` no CSS Module, permitindo que os paths acompanhem os raios responsivos.

## Animated Beam

Arquivo: `src/components/ui/animated-beam.tsx`.

O componente usa:

- `ResizeObserver` para recalcular dimensões;
- `getBoundingClientRect()` para localizar origem e destino;
- path SVG quadrático `M ... Q ...`;
- `motion.linearGradient` para animar o pulso luminoso;
- offsets X/Y opcionais para alinhar o beam às bordas dos elementos;
- duas camadas de path: linha estrutural e gradiente animado.

O componente não foi reescrito. Os refinamentos foram feitos apenas por configuração no consumidor.

### Beam Requests → Backend

- `duration={3.6}`
- `repeat={Infinity}`
- `repeatDelay={0.6}`
- `pathColor="rgba(45, 102, 185, 0.32)"`
- `pathWidth={1.5}`
- `pathOpacity={0.45}`
- `gradientStartColor="#1d63ff"`
- `gradientStopColor="#63b3ff"`
- `curvature={0}`
- `endXOffset={-92}`

O offset foi recalibrado após o aumento do core, para o beam chegar visualmente à borda esquerda do círculo.

### Beam Backend → AWS

- `duration={3.6}`
- `delay={0.45}`
- `repeat={Infinity}`
- `repeatDelay={0.5}`
- `pathColor="rgba(45, 102, 185, 0.3)"`
- `pathWidth={1.6}`
- `pathOpacity={0.48}`
- `gradientStartColor="#347fff"`
- `gradientStopColor="#9ed4ff"`
- `curvature={0}`
- `startXOffset={92}`

Esse segundo beam foi tornado ligeiramente mais legível, sem virar um laser chamativo. A linha estrutural continua discreta, mas o pulso luminoso tem contraste um pouco maior e lê melhor como energia saindo do Backend e chegando à AWS.

## Backend Core

Conteúdo preservado, sem texto adicional:

```text
CORE
BACKEND
JAVA
Spring Boot
```

Configuração atual:

- desktop: largura de 11,9 rem;
- valor inicial era 10,8 rem;
- crescimento aproximado no desktop: 10,2%;
- mobile padrão: 9,75 rem;
- mobile abaixo de 360 px: 8 rem para caber com os dois anéis;
- círculo, borda, glow, ring tracejado e tipografia original preservados;
- `coreHalo` usa inset negativo e radial gradient;
- `coreRing` continua tracejado;
- o core não se move no hover.

Quando qualquer technology node recebe hover ou `:focus-visible`, o seletor CSS `:has()` reforça discretamente a borda e o glow do core. Não há estado React nem arquitetura adicional para esse efeito.

## Tecnologias e nodes

Existem exatamente oito technology nodes.

### Anel interno

1. Java — ícone Lucide `Coffee`.
2. Spring Boot — ícone Lucide `Leaf`.
3. Spring Security — ícone Lucide `ShieldCheck`.
4. PostgreSQL — ícone Lucide `Database`.

Configuração padrão:

- quatro nodes igualmente espaçados em 90 graus;
- raio base do prop: 142 px;
- raio efetivo desktop: `--inner-radius: 142`;
- duração: 32 segundos;
- sentido normal;
- `iconSize={72}`.

Configuração responsiva:

- até 767 px: raio efetivo de 105 px;
- até 359 px: raio efetivo de 91 px.

### Anel externo

5. REST APIs — ícone Lucide `Braces`.
6. Microsserviços — ícone Lucide `Network`.
7. Spring Cloud — ícone Lucide `CloudCog`.
8. Docker / Kubernetes — ícone Lucide `Boxes`.

Configuração padrão:

- quatro nodes igualmente espaçados em 90 graus;
- raio base do prop: 210 px;
- raio efetivo desktop: `--outer-radius: 210`;
- duração: 40 segundos;
- sentido reverso;
- `delay={-5}` para defasagem visual;
- `iconSize={68}`;
- nodes externos usam a variante compacta.

Configuração responsiva:

- até 767 px: raio efetivo de 158 px;
- até 359 px: raio efetivo de 130 px.

Foram removidos os labels genéricos `Cloud` e `Distribuídos`. AWS não foi transformada em node orbital.

## Fluxo Requests → Backend → AWS

### Requests

- endpoint externo à esquerda;
- título: Requests;
- subtítulo: Web · Mobile · APIs;
- ícone: `Workflow`;
- origem do primeiro Animated Beam.

### Backend Java

- centro semântico e visual;
- recebe o primeiro beam;
- origina o segundo beam;
- tecnologias orbitam ao seu redor.

### AWS

- endpoint externo à direita;
- título: AWS;
- subtítulo: Cloud Infrastructure;
- ícone: `Cloud`;
- destino final do segundo Animated Beam;
- deliberadamente fora da órbita para não competir com Backend Java.

Em mobile, Requests e AWS descem para a base do wrapper. Cada endpoint possui largura máxima de aproximadamente metade do container e subtítulo truncável para evitar overflow.

## Hover e microinterações

Os oito nodes possuem:

- `scale(1.05)` em hover e foco visível;
- borda azul mais evidente;
- glow azul sutil;
- ícone mais brilhante;
- label mais clara;
- transição de 220 ms;
- órbita mantida em execução durante o hover;
- nenhum tooltip complexo;
- nenhum card expansível;
- nenhuma mudança de layout.

Em `prefers-reduced-motion: reduce`, as transições locais do core, node, ícone e label são removidas.

## Responsividade

### Desktop grande

- layout em duas colunas;
- wrapper orbital com altura `clamp(36rem, 66vh, 46rem)`;
- palco orbital com largura máxima de 33 rem;
- raios 142/210 px;
- endpoints posicionados nas laterais;
- core com 11,9 rem.

### Notebook e tablet

- abaixo de 1500 px, a proporção das colunas é recalibrada;
- abaixo de 1200 px, o Hero vira uma coluna;
- conteúdo textual mantém largura máxima de 48 rem;
- diagrama passa para baixo do texto;
- wrapper orbital usa altura mínima de 39 rem;
- palco continua limitado a 33 rem.

### Mobile até 767 px

Mudanças realizadas hoje:

- `min-height` geral do Hero passa a `auto`;
- overflow do Hero usa `clip`;
- container usa `width: calc(100% - 2rem)` e `max-width: 42rem`;
- copy, heading, descrição, ações, sociais e palco usam largura e máximo de 100%;
- disponibilidade limita conteúdo e permite ellipsis;
- heading usa escalas `clamp()` próprias;
- role pode quebrar linha;
- descrição usa `overflow-wrap: anywhere`;
- ações passam a uma coluna;
- botões ocupam 100% e removem `min-width` rígido;
- links sociais passam a uma coluna, centralizados e truncáveis;
- wrapper orbital usa altura mínima de 34 rem;
- palco orbital usa raios 105/158 px;
- core usa 9,75 rem;
- nodes são compactados;
- Requests e AWS ficam na base do wrapper;
- legend e system label são ocultados;
- o palco orbital foi finalmente centralizado com `left: 50%`.

### Mobile estreito até 359 px

- container usa margens laterais de 0,75 rem;
- tipografia do nome e do cargo é reduzida;
- stack recebe gap menor;
- wrapper orbital cai para 31 rem;
- raios passam a 91/130 px;
- core passa a 8 rem;
- nodes e ícones ficam menores;
- Requests e AWS voltam a offsets laterais de 0,5 rem;
- o palco permanece centralizado em `left: 50%`.

### Observação sobre validação headless

O Chrome headless no Windows impôs uma largura interna mínima em capturas solicitadas como 320 e 390 px. Isso produziu imagens recortadas e parecia indicar overflow inexistente ou alinhamento incorreto. Foram tentados perfis isolados, `--window-size`, `--force-device-scale-factor` e `prefers-reduced-motion`. As capturas são úteis em tablet/desktop, mas não devem ser tratadas isoladamente como fonte absoluta para mobile. A validação visual manual em dispositivo/browser responsivo continua recomendada.

O deslocamento mobile temporário `left: calc(50% - 2.5rem)` foi removido após validação do usuário. O estado atual correto é `left: 50%`, porque o círculo em movimento deve ficar centralizado.

## Acessibilidade e prefers-reduced-motion

### Comportamento atual

- `HeroSection.tsx` consulta `window.matchMedia("(prefers-reduced-motion: reduce)")`.
- No modo reduzido, o código tenta limpar propriedades GSAP dos elementos de reveal e da arquitetura antiga.
- `app/globals.css` reduz duração e número de iterações globalmente.
- `.magic-orbit-runtime` recebe `animation-play-state: paused !important`.
- os technology nodes permanecem focáveis via teclado;
- hover possui equivalente em `:focus-visible`;
- transições locais são removidas no modo reduzido.

### Problema encontrado

O anel externo usa `delay={-5}` para criar uma defasagem de 45 graus em relação ao ciclo de 40 segundos. A regra global de reduced motion reduz a animação para 0,01 ms e uma iteração. Com delay negativo, o anel externo podia cair imediatamente no estado final da animação e perder sua transformação, fazendo os quatro nodes externos desaparecerem atrás do core ou ficarem sobrepostos.

### Como foi diagnosticado

1. Uma captura normal mostrou os oito nodes presentes.
2. Uma captura com `--force-prefers-reduced-motion` mostrou somente os quatro nodes internos.
3. A inspeção relacionou o desaparecimento ao `delay={-5}`, à iteração única global e ao estado pausado da classe orbital.
4. Como o componente React continuava renderizando os quatro children externos, o problema foi isolado como estado de animação CSS, não como renderização React.

### Solução adotada

Dentro de `@media (prefers-reduced-motion: reduce)`, `.orbitItemOuter` recebe:

```css
animation-delay: 0s !important;
```

Assim, o anel externo permanece estacionário nas posições angulares iniciais e todos os nodes continuam visíveis. A solução não altera a Magic UI nem adiciona lógica React.

## Problemas encontrados

### Raios responsivos inicialmente inválidos

Na primeira tentativa de parametrizar os raios por CSS, as variáveis foram definidas com unidade (`142px` e `210px`). O keyframe global já multiplica `var(--radius)` por `1px`, resultando conceitualmente em comprimento vezes comprimento e invalidando a transformação. Os nodes deixaram de aparecer.

Solução: os custom properties passaram a ser unitless (`142`, `210`, etc.). Os paths CSS usam `calc(var(--inner-radius) * 2px)`, enquanto a animação continua usando `calc(var(--radius) * 1px)`.

### Cache `.next` inconsistente

Builds ocasionais falharam com erros de cache, incluindo:

- `Cannot find module './222.js'` durante coleta de páginas;
- `EINVAL: invalid argument, readlink ... .next/server/app/page.js`.

O projeto está dentro de uma pasta OneDrive, e o cache do Next apresentou inconsistência. Executar o script existente `pnpm clean`, que remove somente `.next`, seguido de `pnpm build`, resolveu as falhas. O build final executado após a centralização mobile foi aprovado.

### Lint sem configuração

`pnpm lint` chama `next lint`, mas o projeto não possui configuração de ESLint pronta. O comando abre o assistente interativo de configuração e termina sem validar. Nenhum arquivo de ESLint foi criado para evitar mudança fora de escopo.

### Typecheck preexistente fora do Hero

`pnpm exec tsc --noEmit` alcançou os arquivos do projeto, mas falhou em `src/components/notifications/Notifications.tsx`: o tipo permite o ícone `shield`, porém o mapa concreto possui somente `folder`, `lightning` e `gear`. Esse problema não foi criado pelo Hero e não foi corrigido nesta sessão.

### Warning de cache e Browserslist

Os builds aprovados ainda exibem:

- warning do webpack cache: `Unable to snapshot resolve dependencies`;
- aviso de `caniuse-lite` desatualizado.

Não foram atualizadas dependências nesta sessão para evitar expansão de escopo.

## Soluções aplicadas

- seis nodes substituídos por exatamente oito nodes aprovados;
- labels genéricos removidos;
- core aumentado de forma controlada;
- raios e velocidades recalibrados;
- outer orbit reverso e defasado;
- paths orbitais responsivos movidos para CSS local;
- beam Backend → AWS reforçado discretamente;
- offsets dos beams ajustados ao core maior;
- hover/focus e pulso discreto no core implementados em CSS;
- reduced motion corrigido para manter os oito nodes visíveis;
- container, tipografia, CTAs e sociais contidos no mobile;
- endpoints e labels ajustados para telas estreitas;
- palco orbital mobile recentralizado em `left: 50%`;
- builds validados após limpeza segura de `.next`.

## Abordagens descartadas

- Não voltar ao Hero 3D antigo.
- Não reativar `HeroArchitectureDiagram` como componente principal.
- Não substituir Orbiting Circles.
- Não substituir Animated Beam.
- Não transformar AWS em technology node.
- Não criar partículas, estrelas, blobs, ondas, background beams extras ou ruído animado.
- Não criar tooltips complexos ou cards expansíveis nos nodes.
- Não instalar ícones de marca ou novas bibliotecas; foram usados ícones Lucide abstratos coerentes.
- Não criar estado React complexo para o glow do core; foi usado CSS `:has()`.
- Não alterar componentes Magic UI quando configuração no consumidor e CSS local eram suficientes.
- Não manter o deslocamento mobile de `-2.5rem`; ele deixava o círculo visualmente à esquerda e foi removido.

## Experimentos que não funcionaram

1. Custom properties de raio com unidade `px`: invalidaram o cálculo do keyframe e esconderam nodes.
2. Delay negativo sem neutralização em reduced motion: fez o anel externo desaparecer no estado reduzido.
3. Capturas headless mobile em Windows com largura 320/390: o Chrome aplicou largura interna mínima e recortou a imagem, produzindo diagnósticos visuais enganosos.
4. Build sem limpar cache após execução dev: encontrou artefatos `.next` inconsistentes.
5. Execução direta de `pnpm` no PowerShell: o shim `pnpm.ps1` foi bloqueado pela política de execução; `pnpm.cmd` foi usado corretamente.

## Warnings e dívida técnica

### Seletores GSAP residuais

`HeroSection.tsx` ainda contém seletores e etapas GSAP para:

- `[data-architecture-path]`
- `[data-architecture-shell]`
- `[data-architecture-node]`
- `[data-architecture-signal]`

Esses marcadores existem em `HeroArchitectureDiagram.tsx`, mas não existem em `HeroBackendOrbit.tsx`, que é o componente atualmente montado. Portanto, as chamadas `gsap.set()`, `.from()` e `.to()` dirigidas a esses seletores podem produzir warnings do tipo target not found e representam código residual do diagrama antigo.

O warning deve ser investigado e removido de forma consciente na próxima sessão. A correção provável é retirar do timeline somente as etapas da arquitetura antiga ou adicionar marcadores apropriados ao novo componente se houver uma animação de entrada realmente desejada. Não adicionar marcadores apenas para silenciar warnings sem definir comportamento.

Importante: os seletores `[data-hero-reveal]` continuam válidos e animam a coluna esquerda. Eles não devem ser removidos junto com os seletores antigos.

### CSS legado

`HeroSection.module.css` ainda contém grande quantidade de estilos para o antigo diagrama 3D, como:

- `.architecture`
- `.sceneContent`
- `.sceneBackplane`
- `.sceneFloor`
- `.connections`
- `.awsBridges`
- `.node`
- `.clients`
- `.coreInner`
- `.security`
- `.database`
- `.observability`
- `.aws`
- classes de SVG e captions.

Como `HeroArchitectureDiagram.tsx` ainda existe, esses estilos não devem ser removidos sem decidir formalmente se o componente antigo será arquivado ou eliminado.

`app/globals.css` também contém estilos globais de arquiteturas anteriores (`.architecture-*`, `.hero-surface`, `.hero-layout`, etc.). Eles podem estar sem uso, mas precisam de auditoria de referências antes de qualquer remoção.

### Dois sistemas de animação orbital

`app/globals.css` possui tanto `@theme inline` com keyframe `orbit` quanto o keyframe manual `magic-orbit` e `.magic-orbit-runtime`. O componente atual usa `.magic-orbit-runtime`. Não remover nenhum deles sem procurar consumidores no projeto inteiro.

### Acessibilidade semântica dos TechNodes

Os nodes são `div` focáveis com `tabIndex={0}` e `aria-label`. Isso satisfaz o foco visual solicitado, mas pode ser revisado semanticamente: elementos não interativos no tab order aumentam paradas de teclado. Se não houver ação futura, considerar se devem ser apresentados como lista sem foco; se o foco equivalente ao hover continuar sendo requisito, preservar o comportamento atual.

## Arquivos envolvidos

### Ativos no Hero atual

- `src/components/sections/HeroSection.tsx` — composição e animação da coluna esquerda; importa o novo Hero orbital.
- `src/components/sections/HeroSection.module.css` — layout, tipografia, CTAs, responsividade e também estilos legados do diagrama antigo.
- `src/components/sections/HeroBackendOrbit.tsx` — ecossistema orbital ativo.
- `src/components/sections/HeroBackendOrbit.module.css` — visual, breakpoints, hover, focus e reduced motion do ecossistema orbital.
- `src/components/ui/orbiting-circles.tsx` — primitive orbital.
- `src/components/ui/animated-beam.tsx` — primitive dos beams.
- `app/globals.css` — keyframe orbital, regra global de reduced motion e estilos globais/legados.
- `src/components/portfolio/portfolio.tsx` — monta `HeroSection` no portfólio.
- `package.json` — dependências e scripts de build/dev/clean/lint.

### Legado ainda existente

- `src/components/sections/HeroArchitectureDiagram.tsx` — diagrama 3D anterior, atualmente não importado por `HeroSection`.
- blocos de estilos antigos em `HeroSection.module.css`.
- blocos `.architecture-*` e `.hero-*` antigos em `app/globals.css`.

### Dependências relevantes

- `gsap` e `@gsap/react` para reveal do Hero e código residual da arquitetura antiga;
- `motion` para o gradiente animado do Animated Beam;
- `lucide-react` para todos os ícones;
- Next.js 14.2.3 e React 18.3.1.

## Estado atual aprovado

Concluído e aprovado como direção:

- Hero V2 com Orbiting Circles + Animated Beam;
- coluna esquerda atual;
- Backend Java como core dominante;
- oito nodes divididos em 4 internos + 4 externos;
- AWS como endpoint externo;
- Requests como endpoint externo;
- inner orbit normal em 32 s;
- outer orbit reverso em 40 s;
- background técnico atual;
- hover/focus sutil;
- reduced motion preservando nodes visíveis;
- estrutura responsiva em uma coluna abaixo de 1200 px;
- palco orbital centralizado no mobile.

O último build de produção após `pnpm clean` foi aprovado. A rota `/` foi prerenderizada como conteúdo estático.

## O que NÃO deve ser alterado

Sem nova autorização explícita, não redesenhar:

- Navbar;
- nome Gabriel Falcão da Cruz;
- título BACKEND JAVA da coluna esquerda;
- stack line;
- descrição;
- CTAs;
- links sociais;
- ThemeToggle;
- layout e posicionamento da coluna esquerda;
- Backend Core circular;
- Orbiting Circles;
- Animated Beam;
- narrativa Requests → Backend Java → AWS;
- background aprovado;
- demais seções do site.

Não adicionar:

- partículas;
- estrelas;
- blobs;
- novos gradientes agressivos;
- ondas;
- efeitos Magic UI extras;
- beams extras;
- ruído animado;
- novas tecnologias não aprovadas.

## O que NÃO deve ser removido sem análise

- `HeroArchitectureDiagram.tsx`, embora não esteja montado;
- estilos legados em `HeroSection.module.css` e `app/globals.css`;
- seletores `[data-hero-reveal]` válidos;
- regras globais de `prefers-reduced-motion`;
- `magic-orbit` e `.magic-orbit-runtime`;
- scripts `clean` e `build` usados para contornar cache inconsistente;
- dependências `motion`, GSAP e Lucide enquanto houver consumidores confirmados;
- arquivos modificados ou não rastreados do worktree sem revisão individual.

## Pendências para a próxima sessão

1. Reproduzir e confirmar no console do navegador os warnings GSAP relacionados aos quatro seletores `data-architecture-*` ausentes no componente montado.
2. Remover ou adaptar somente as etapas GSAP do diagrama antigo, preservando `[data-hero-reveal]`.
3. Fazer validação manual do Hero em DevTools responsivo ou dispositivo real, principalmente 320, 360, 390, 768, 1024, 1366 e 1440 px.
4. Confirmar visualmente dark mode e light mode em todos os breakpoints.
5. Verificar se os nodes externos alguma vez se aproximam excessivamente de Requests/AWS durante um ciclo completo de 40 s.
6. Revisar a semântica de `TechNode` focável sem perder o requisito de foco equivalente ao hover.
7. Decidir formalmente o destino de `HeroArchitectureDiagram.tsx` e do CSS legado; não limpar antes dessa decisão.
8. Configurar ESLint em tarefa separada, se desejado.
9. Corrigir o erro TypeScript preexistente em `Notifications.tsx` em tarefa separada.
10. Investigar os warnings de cache webpack/OneDrive e `caniuse-lite` sem misturar com o Hero.
11. Revisar os arquivos não rastreados e criar um checkpoint somente após validação visual do usuário.

## Próximos passos recomendados

Ordem recomendada para a próxima sessão:

1. Ler este documento e executar `git status`, branch e diff antes de editar.
2. Abrir a aplicação em navegador real, conferir o círculo centralizado no mobile e observar um ciclo orbital representativo.
3. Inspecionar console e eliminar os warnings GSAP residuais com patch mínimo em `HeroSection.tsx`.
4. Rodar build após `pnpm clean` se `.next` estiver inconsistente.
5. Auditar referências do Architecture Diagram antigo antes de qualquer remoção.
6. Validar diff e confirmar que nenhuma outra seção foi tocada.
7. Somente então discutir commit/checkpoint; não fazer push sem autorização.

## Git diff final

Antes da criação deste relatório, `git diff --stat` mostrou apenas arquivos rastreados:

```text
 app/globals.css                                    |  46 ++
 components.json                                    |   7 +-
 package.json                                       |   1 +
 pnpm-lock.yaml                                     |  54 +++
 .../sections/HeroArchitectureDiagram.tsx           | 483 ++++++++++++---------
 src/components/sections/HeroSection.tsx            | 202 +++++----
 6 files changed, 511 insertions(+), 282 deletions(-)
```

`git diff --name-only` antes deste relatório:

```text
app/globals.css
components.json
package.json
pnpm-lock.yaml
src/components/sections/HeroArchitectureDiagram.tsx
src/components/sections/HeroSection.tsx
```

Após esta tarefa, o único arquivo novo criado especificamente para o relatório deve ser:

```text
docs/HERO_REDESIGN_V2_CONTEXT_2026-08-20.md
```

Como o relatório é não rastreado, ele também não aparece no `git diff --stat` ou `git diff --name-only` padrão. A confirmação deve ser feita em conjunto com `git status --short`.
