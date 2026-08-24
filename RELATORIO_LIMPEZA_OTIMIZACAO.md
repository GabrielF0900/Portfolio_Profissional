# Relatório de limpeza, otimização e organização do portfólio

## 1. Visão geral

- Repositório: `Portfolio_Profissional`
- Branch: `chore/repository-cleanup-performance`
- Framework preservado: Next.js 14.2.3 e React 18.3.1
- Commit realizado: não
- Push realizado: não

Esta intervenção reduziu o peso do projeto, corrigiu as validações técnicas, melhorou o carregamento das imagens e removeu arquivos comprovadamente órfãos sem redesenhar a interface.

## 2. Resumo dos resultados

| Indicador | Antes | Depois | Resultado |
| --- | ---: | ---: | ---: |
| Conteúdo do repositório, sem `.git`, `node_modules` e `.next` | 86,1 MB | 29,8 MB | redução de 56,4 MB, aproximadamente 65,4% |
| Pasta `public` | 34,0 MB | 20,4 MB | redução de 13,5 MB, aproximadamente 39,8% |
| Oito imagens principais | 7.617.280 B | 238.562 B | redução de aproximadamente 96,9% |
| TypeScript | falhava | aprovado | nenhum erro |
| ESLint | configuração interativa | aprovado | nenhum aviso ou erro |
| Build | ocultava erros | aprovado com validações habilitadas | build concluído |
| Gerenciadores de pacotes | npm e pnpm misturados | pnpm | lockfile único |

Resumo do diff antes da inclusão deste relatório:

```text
213 files changed, 3236 insertions(+), 20033 deletions(-)
191 arquivos removidos
22 arquivos modificados
8 caminhos novos
```

## 3. Antes da implementação

### Validações e configuração

- `pnpm exec tsc --noEmit` falhava em `Notifications.tsx`.
- `pnpm lint` entrava em uma pergunta interativa por falta de configuração.
- O build escondia erros com `ignoreBuildErrors` e `ignoreDuringBuilds`.
- A otimização do Next.js estava desativada por `images.unoptimized`.
- React 18 estava combinado com tipos do React 19.
- Existiam `package-lock.json` e `pnpm-lock.yaml` ao mesmo tempo.
- Docker e alguns scripts ainda usavam npm.
- O PostCSS não declarava Autoprefixer.

### Imagens e carregamento

- A credencial AWS Professional tinha 2048 × 2048 px e aproximadamente 4,7 MB, embora fosse exibida perto de 160 px.
- SafeWallet e microsserviços usavam PNGs grandes.
- A foto de perfil tinha 2448 × 3264 px.
- Certificações e projetos ainda usavam `<img>`.
- Imagens de projetos não recebiam seleção responsiva de resolução pelo Next.js.

### Hero e LCP

O título e a descrição principal começavam com animação baseada em opacidade. Em celulares lentos, o conteúdo mais importante podia permanecer invisível até a execução do JavaScript, criando risco de atraso no LCP.

### Estrutura do projeto

Existiam duas árvores de App Router, um portfólio monolítico antigo na raiz, notificações não montadas, componentes duplicados de projetos, dezenas de componentes shadcn/Radix sem importações e hooks, providers e utilitários duplicados.

Também havia aproximadamente 50,7 MB de layouts, vídeos, backups e prompts de planejamento fora da aplicação.

## 4. Depois da implementação

### 4.1 Imagens convertidas

Foi criado `scripts/optimize-images.mjs` com Sharp e o comando:

```bash
pnpm optimize:images
```

| Origem | Antes | Destino | Depois | Redução |
| --- | --- | --- | --- | ---: |
| `public/minhaFoto.webp` | 2448 × 3264, 235.722 B | `public/images/profile/gabriel-profile.webp` | 1200 × 1600, 88.154 B | 62,6% |
| `public/ImagemAtualizadaSafewallet.png` | 1448 × 1086, 1.002.036 B | `public/images/projects/safewallet-core.webp` | 1200 × 900, 35.548 B | 96,5% |
| `public/fotoApresentacaoMicrosservico.png` | 1734 × 907, 1.474.517 B | `public/images/projects/spring-cloud-microservices.webp` | 1200 × 628, 91.892 B | 93,8% |
| AWS Professional | 2048 × 2048, 4.689.369 B | `aws-professional.webp` | 160 × 160, 4.770 B | 99,9% |
| AWS Associate | 600 × 600, 60.764 B | `aws-associate.webp` | 160 × 160, 5.782 B | 90,5% |
| AWS Practitioner | 600 × 600, 44.876 B | `aws-practitioner.webp` | 160 × 160, 4.908 B | 89,1% |
| Scrum | 609 × 656, 88.704 B | `scrum.webp` | 149 × 160, 4.548 B | 94,9% |
| AWS Re/Start | 600 × 600, 21.292 B | `aws-restart.webp` | 160 × 160, 2.960 B | 86,1% |

Os arquivos passaram a ser organizados em:

```text
public/images/profile/
public/images/projects/
public/images/certifications/
```

### 4.2 Migração para `next/image`

Foram migradas:

- imagem de perfil;
- credencial principal e credenciais complementares;
- imagens de projetos em destaque;
- imagens dos modais e da visualização ampliada;
- ícones externos do Simple Icons.

Foi criado `src/components/projects/ProjectImage.tsx` com fallback, `sizes` responsivo e suporte a imagens locais e remotas. O `next.config.mjs` agora habilita AVIF/WebP e autoriza somente `raw.githubusercontent.com` e `cdn.simpleicons.org`.

### 4.3 Hero

O título e a descrição principal agora aparecem imediatamente. As animações permanecem somente em elementos secundários por meio de `data-hero-animate`. O tratamento de `prefers-reduced-motion` foi preservado.

### 4.4 TypeScript, ESLint, PostCSS e build

Foram adicionados ou alinhados:

- `.eslintrc.json` com `next/core-web-vitals`;
- ESLint 8 e `eslint-config-next` 14.2.3;
- tipos do React e React DOM 18;
- Autoprefixer na configuração PostCSS;
- scripts `typecheck`, `check` e `optimize:images`.

As configurações que escondiam erros foram removidas. Também foram corrigidos comentários JSX inválidos em `SkillsSection.tsx`.

### 4.5 Código morto removido

Principais grupos removidos:

- `src/app/` vazio;
- `portfolio.tsx` da raiz;
- `styles/globals.css` duplicado;
- notificações e seus dados;
- `src/components/projects-modal/`;
- componentes antigos de projetos;
- `ContactSection` vazio;
- `HeroArchitectureDiagram` substituído pelo Hero orbital ativo;
- providers e hooks duplicados de tema;
- hooks de toast e mobile sem uso;
- componentes genéricos não importados de `components/ui/`.

Foram preservados os componentes ativos de tema, navegação, filtros, cards, modais, Dialog, Button, AnimatedBeam e OrbitingCircles.

### 4.6 Arquivos públicos removidos

Depois de procurar referências com `rg`, foram removidos:

- vídeos antigos de fundo da Hero;
- imagens e documentos públicos sem uso;
- placeholders genéricos e sete placeholders numerados;
- favicon secundário;
- originais substituídos pelos WebP otimizados.

Foram preservados:

- currículo em PDF;
- certificado AWS Re/Start em PDF;
- `CityShieldArquitetura.jpeg`;
- apresentação CityShield em PPTX, com aproximadamente 17,2 MB;
- `favicon-gabriel.svg`.

### 4.7 Planejamento e documentação

Foram removidos, após confirmação de rastreamento e ausência de referências:

- `ImagensPlanejamento/`;
- `ImagensPlanejamento_Backup/`;
- `Blueprint_Codex_Hero/`;
- prompts antigos em `redesignv2/`;
- `REDESIGN_V3_IMPLEMENTACAO.md`;
- screenshots temporários da raiz.

O documento de contexto ainda relevante foi preservado em `docs/`. A pasta `.agents/skills/design-taste-frontend/` e `skills-lock.json` também foram preservados.

### 4.8 Organização dos auxiliares

Foram movidos para `tools/repository-data/`:

- `fetch_repos.ps1`;
- `repositorios_consolidado.json`.

Snapshots JSON/CSV redundantes foram removidos. O banner do README foi movido de `public/Banner_README/` para `.github/assets/portfolio-banner.jpg`.

### 4.9 pnpm e Docker

- `package-lock.json` foi removido.
- `pnpm-lock.yaml` foi preservado e validado.
- README, Dockerfile, Vercel, `dev.sh` e `dev.ps1` passaram a usar pnpm.
- O Dockerfile agora utiliza Node 20, Corepack e `pnpm install --frozen-lockfile`.

### 4.10 Dependências

Foram removidas dependências órfãs, incluindo:

```text
@hookform/resolvers
cmdk
date-fns
embla-carousel-react
input-otp
react-day-picker
react-hook-form
react-resizable-panels
recharts
vaul
zod
```

Também foram removidos os pacotes Radix correspondentes aos componentes excluídos. Permaneceram `@radix-ui/react-dialog` e `@radix-ui/react-slot`.

Foram adicionados Sharp, ESLint compatível com Next.js 14 e tipos do React 18. A versão major do Next.js não foi atualizada.

### 4.11 Google Analytics

Os scripts diretos no `<head>` foram substituídos por `next/script` com `strategy="afterInteractive"`. O rastreamento foi preservado sem manter o Analytics no caminho crítico da renderização inicial.

### 4.12 Push automático

`push.js` passou de comandos interpolados no shell para `execFileSync` com argumentos separados. Isso reduz o risco de caracteres especiais da mensagem serem tratados como comandos.

Continuam preservados:

- `push.js`;
- `push.ps1`;
- `"push": "node push.js"`.

O comando futuro permanece:

```bash
pnpm run push -- "mensagem do commit"
```

## 5. Resultado na experiência do usuário

### Mobile

Impactos diretamente sustentados pelas mudanças:

- download muito menor das imagens principais;
- menor consumo de dados móveis;
- menor custo de decodificação das imagens;
- resolução adequada à largura da tela por meio de `sizes`;
- AVIF/WebP quando suportado pelo navegador;
- menor risco de layout shift nas imagens com contêiner dimensionado;
- título e descrição da Hero visíveis antes das animações;
- menor risco de LCP atrasado em redes e CPUs lentas;
- fallback preservado quando uma imagem de projeto falhar;
- Analytics carregado depois da renderização inicial.

Não foi introduzido `overflow-x: hidden` para esconder problemas e o design mobile não foi refeito.

### Desktop

- imagens permanecem nítidas sem carregar arquivos muito acima do tamanho necessário;
- modais mantêm `object-fit: contain` e a proporção original;
- imagens locais e remotas compartilham o mesmo fallback;
- Hero preserva a aparência, mas disponibiliza o conteúdo principal imediatamente;
- certificações mantêm proporção e legibilidade;
- remoção de código e dependências reduz risco de conflitos futuros;
- Analytics deixa de competir com a montagem inicial.

### Funcionalidades preservadas

- navegação e menu mobile;
- filtros e modais de projetos;
- certificações;
- alternância de tema;
- links GitHub e LinkedIn;
- download do currículo;
- links de certificados;
- apresentação CityShield;
- identidade visual geral.

## 6. Validações executadas

```text
pnpm install --frozen-lockfile: aprovado
pnpm typecheck: aprovado
CI=1 pnpm lint: aprovado, sem avisos ou erros
pnpm build: aprovado
node --check push.js: aprovado
git diff --check: aprovado
```

O build gerou a rota `/` como conteúdo estático. O First Load JS informado permaneceu em aproximadamente 255 kB; esta tarefa priorizou imagens, arquivos, dependências e validações, sem reescrever a aplicação ativa.

## 7. Limitações da validação visual

O servidor local compilou e respondeu HTTP 200. Entretanto, o ambiente isolado bloqueou o acesso usado pelo otimizador do Next.js para imagens externas, retornando `EACCES`. A automação headless também não permitiu uma auditoria completa e confiável dos fluxos.

Por isso:

- nenhuma métrica Lighthouse foi inventada;
- LCP, CLS, FCP, TBT e INP não foram declarados como medidos;
- não é afirmada nota de PageSpeed;
- recomenda-se revisão manual final com acesso normal à internet.

Breakpoints recomendados:

```text
360 × 800
375 × 812
390 × 844
412 × 915
1440 × 900
1920 × 1080
```

## 8. Pendências

1. Hospedar o PPTX do CityShield em GitHub Releases, Google Drive público ou armazenamento equivalente.
2. Atualizar o link em `src/constants/projects.ts` e remover o PPTX de `public` em tarefa futura.
3. Revisar manualmente navegação, menu, filtros, modais, tema e links nos breakpoints listados.
4. Executar Lighthouse em ambiente com acesso normal à internet.
5. Criar uma branch separada para atualizar Next.js, React, tipos, ESLint e dependências relacionadas.

## 9. Estado de entrega

As alterações permanecem sem commit e sem push, prontas para revisão. Depois da aprovação, o comando automático disponível será:

```bash
pnpm run push -- "chore: repository cleanup and performance optimization"
```
