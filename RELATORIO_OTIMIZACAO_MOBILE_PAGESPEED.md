# Relatório de Otimização Mobile baseada no PageSpeed Insights

Data da validação: 24/08/2026  
Repositório: `GabrielF0900/Portfolio_Profissional`  
Branch: `perf/mobile-rendering-optimization`

## 1. Confirmação da nova etapa

Esta é uma nova rodada de otimização mobile. Ela não corresponde ao relatório antigo da branch `chore/repository-cleanup-performance`.

Estado confirmado antes da criação deste relatório:

```text
git branch --show-current
perf/mobile-rendering-optimization

git log -1 --oneline
82b6d86 Merge pull request #14 from GabrielF0900/chore/repository-cleanup-performance
```

A branch `perf/mobile-rendering-optimization` existe e é a branch atualmente ativa. Não foi criado commit nesta etapa, portanto o último commit continua sendo o merge que serviu de base para a nova branch.

## 2. Arquivos alterados

- `app/globals.css`: adiciona `content-visibility` às seções abaixo da primeira dobra no mobile.
- `app/layout.tsx`: posterga Google Analytics com `lazyOnload`.
- `app/page.tsx`: remove o boundary cliente desnecessário da página.
- `src/components/analytics/SectionTracker.tsx`: corrige o ciclo de vida do `IntersectionObserver`.
- `src/components/layout/Footer.module.css`: converte sweep baseado em `left` para `transform` e interrompe loops no mobile.
- `src/components/layout/Navigation.tsx`: concentra a interação e o indicador de seção ativa na ilha cliente da navegação.
- `src/components/portfolio/portfolio.tsx`: converte o shell do portfólio em Server Component.
- `src/components/projects/ProjectCard.tsx`: cria nome acessível específico para cada link GitHub.
- `src/components/sections/AboutSection.module.css`: deixa circuitos e entradas estáticos no mobile.
- `src/components/sections/CertificationsSection.module.css`: desativa animações contínuas no mobile.
- `src/components/sections/CertificationsSection.tsx`: evita `<a>` sem `href` válido.
- `src/components/sections/ExperienceSection.module.css`: interrompe animações contínuas do pipeline no mobile.
- `src/components/sections/HeroActions.tsx`: nova ilha cliente pequena para CTAs e eventos do Hero.
- `src/components/sections/HeroBackendOrbit.module.css`: interrompe órbitas e filtros animados no mobile.
- `src/components/sections/HeroBackendOrbit.tsx`: beams deixam de repetir infinitamente no mobile.
- `src/components/sections/HeroSection.module.css`: corrige overflow do Hero em 320 px.
- `src/components/sections/HeroSection.tsx`: converte o conteúdo textual do Hero em Server Component e remove GSAP do caminho crítico.
- `src/components/sections/ProjectsSection.module.css`: adiciona controle de expansão e anima o divisor com `transform`.
- `src/components/sections/ProjectsSection.tsx`: reduz o DOM inicial do catálogo e desmonta o modal fechado.
- `src/components/sections/TechnologiesSection.module.css`: remove pulsos e conectores animados no mobile.
- `src/hooks/useScroll.ts`: substitui medições em cada scroll por `IntersectionObserver` e smooth scroll nativo.
- `RELATORIO_OTIMIZACAO_MOBILE_PAGESPEED.md`: este novo relatório.

Não foram alterados `package.json`, `pnpm-lock.yaml`, `push.js` ou arquivos de imagem.

## 3. Correções do PageSpeed implementadas

### Renderização inicial e LCP do Hero

- O texto principal do Hero permanece no HTML inicial e visível sem depender de animação ou hidratação.
- O Hero textual deixou de importar GSAP.
- Título, descrição LCP e especialidades não iniciam com `opacity: 0` controlado por JavaScript.
- CTAs e eventos foram isolados em `HeroActions.tsx`.
- O overflow encontrado na validação de 320 px foi corrigido.

### Server e Client Components

- `app/page.tsx` agora é Server Component.
- `src/components/portfolio/portfolio.tsx` agora é Server Component.
- `HeroSection.tsx` agora é Server Component.
- Navegação, ações, filtros, modais e efeitos que dependem do navegador permanecem como Client Components.
- Não foi usado `ssr: false` em conteúdo importante.

### Google Analytics

O Analytics foi avaliado e alterado de `afterInteractive` para `lazyOnload`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-EQ2R1WD4VR"
  strategy="lazyOnload"
/>
<Script id="google-analytics" strategy="lazyOnload">
```

O ID `G-EQ2R1WD4VR`, page views e eventos existentes foram preservados. O primeiro evento pode ser enviado mais tarde, pois o carregamento ocorre após o evento `load` e tempo ocioso do navegador.

### Trabalho da thread principal e reflows

- Removido listener de scroll que consultava `getBoundingClientRect()` para todas as seções em cada evento.
- A seção ativa agora é determinada por um `IntersectionObserver`.
- Removido o loop manual de `requestAnimationFrame` da navegação entre âncoras.
- A rolagem utiliza `window.scrollTo()` com comportamento nativo `smooth` ou `auto` para movimento reduzido.

### DOM

- O catálogo inicial renderiza oito projetos.
- Todos continuam disponíveis por meio do botão acessível “Ver todos os projetos”.
- O botão usa `aria-expanded` e `aria-controls="projects-grid"`.
- O modal de projeto só é montado quando existe um projeto selecionado e o modal está aberto.
- Projetos em destaque e dados originais foram preservados.

### Animações mobile

- `HeroBackendOrbit`: órbitas CSS são estáticas no mobile, filtros animados são removidos e cada beam executa no máximo uma vez.
- `AboutSection`: circuito e efeitos contínuos ficam estáticos.
- `ExperienceSection`: pipeline e sinais deixam de executar continuamente.
- `TechnologiesSection`: pulsos, conectores e nós deixam de animar continuamente.
- `CertificationsSection`: animação de borda por propriedade personalizada é interrompida no mobile.
- `ProjectsSection`: divisor deixou de animar `left` e passou a usar `transform`.
- `Footer`: sweep deixou de animar `left` e passou a usar `transform`.
- As regras existentes de `prefers-reduced-motion` foram preservadas e complementadas.

### Style e Layout

As seções `sobre`, `experiencia`, `certificacoes`, `projetos`, `tecnologias`, `skills` e `contato` usam, no mobile:

```css
content-visibility: auto;
contain-intrinsic-size: auto 900px;
```

O Hero não usa `content-visibility`.

### Acessibilidade dos projetos

Antes:

```tsx
aria-label="Ver código fonte no GitHub"
```

Depois:

```tsx
aria-label={`Ver código do projeto ${project.title} no GitHub`}
```

Cada projeto agora possui nome acessível identificável, sem mudança visual ou de URL.

### Link não rastreável da certificação

Certificações com `credentialUrl` ou `pdfUrl` válidos continuam usando `<a>`.

A certificação AWS Certified Solutions Architect - Professional, que está em estudo e não possui URL, agora é renderizada como:

```tsx
<article className={cardClassName}>
  {cardContent}
</article>
```

Não foi inventada URL e não existe mais `<a>` sem `href` para esse cartão.

## 4. Validações executadas

### Lint

```text
pnpm lint
✔ No ESLint warnings or errors
```

### TypeScript

```text
pnpm typecheck
tsc --noEmit
```

Resultado: concluído com exit code 0 e sem erros.

### Build

```text
pnpm build
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Collecting build traces
✓ Finalizing page optimization
```

Resultado:

```text
Route (app)                 Size      First Load JS
○ /                         158 kB    255 kB
○ /_not-found               872 B     88 kB
Shared JS                             87.1 kB
```

A rota `/` foi pré-renderizada como conteúdo estático. O build terminou com exit code 0.

Avisos não bloqueantes:

- base `caniuse-lite` do Browserslist desatualizada;
- cache webpack não conseguiu gerar snapshot de dependências no diretório sincronizado pelo OneDrive.

## 5. Validação visual e limitações locais

Foram geradas capturas temporárias em 320, 360, 375, 412, 1366 e 1440 px. O Hero apareceu imediatamente e o layout desktop foi preservado. O teste em 320 px revelou um overflow no badge de disponibilidade, que foi corrigido.

Os ícones remotos de `cdn.simpleicons.org` não puderam ser baixados pelo servidor local por restrição de rede do ambiente. Isso não altera os WebP/AVIF locais nem a configuração de `next/image`.

Não foi registrada uma pontuação Lighthouse local confiável porque os recursos externos bloqueados tornariam a medição diferente do ambiente publicado.

## 6. Imagens e funcionalidades preservadas

- WebP/AVIF existentes preservados.
- `next/image` preservado.
- `width`, `height`, `sizes` e proporções preservados.
- Imagem de perfil e imagem do projeto em destaque não foram alteradas.
- Tema, menu mobile, filtros, modais, links externos e eventos de Analytics foram preservados.
- Nenhuma dependência foi adicionada ou removida.

## 7. `pnpm run push`

O script continua definido no `package.json` como:

```json
"push": "node push.js"
```

A funcionalidade `pnpm run push -- "mensagem"` foi preservada integralmente e não foi executada.

## 8. Estado de entrega

- Nenhum commit foi criado.
- Nenhum push foi executado.
- Nenhuma pull request foi aberta.
- Nenhum deploy foi realizado.
- As alterações permanecem apenas no worktree da branch `perf/mobile-rendering-optimization` para revisão.
