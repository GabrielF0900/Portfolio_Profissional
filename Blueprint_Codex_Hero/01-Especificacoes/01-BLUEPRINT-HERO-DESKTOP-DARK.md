# HERO DESKTOP DARK — ESPECIFICAÇÃO

## Objetivo
Comunicar imediatamente:
- Gabriel Falcão da Cruz
- BACKEND JAVA
- Spring Boot · Sistemas Distribuídos · AWS

Sensação: backend engineering, arquitetura, dark premium, editorial e técnica.
Evitar SaaS/dashboard/template genérico.

## Viewports-base
1920×1080, 1440×900, 1366×768.
Hero: `min-height: calc(100svh - navbar)`.

## Container
- max-width: 1500–1560px
- largura útil: `min(100% - 48px, max-width)`
- centralizado
- padding lateral: 48–64px em 1920; 40–48px em 1440; 32–40px em 1366

## Grid principal
- esquerda: 40–42%
- gap: 4–5%
- direita: 53–56%

## Coluna esquerda
Ordem:
1. eyebrow
2. identidade/nome
3. headline
4. stack line
5. descrição
6. CTAs
7. sociais

### Headline
Conceito dominante: `BACKEND JAVA.`
Não usar slogan genérico maior que Backend Java.
Pode haver nome acima em grande escala, desde que Backend Java continue sendo
a identidade profissional central.

Referência tipográfica do alvo:
- texto dominante grande;
- `BACKEND` off-white;
- `JAVA.` electric blue;
- line-height apertado;
- forte contraste editorial.

Faixas:
- 1920: ~72–92px
- 1440: ~62–78px
- 1366: ~56–70px

### Stack
`Spring Boot · Sistemas Distribuídos · AWS`
14–17px, separadores azuis.

### Descrição
Texto real, conciso, 2–4 linhas, 16–18px, line-height 1.55–1.75.
Node.js/TypeScript pode aparecer como complementar somente se o código real sustentar.

### CTAs
Primário `Ver projetos`, secundário `Baixar CV`.
Altura ~52–58px; primário electric blue; secundário graphite/transparente.
Gap 12–16px.

### Sociais
GitHub e LinkedIn reais, discretos, abaixo dos CTAs.

## Architecture Board
- 100% da coluna direita
- aspect-ratio ~1.35–1.55
- graphite levemente diferente do fundo
- grid técnico de baixíssimo contraste
- sem sombra de card SaaS
- não pode parecer um card grande vazio

## Background
Graphite quase preto, gradiente radial muito sutil, grid/linhas técnicas discretas.

## Cores orientativas
- main: #050A12 / #070B12
- surface: #0A111C / #0C1420
- elevated: #101A28
- text-primary: #F4F7FB
- secondary: #9AA8BA
- muted: #65758A
- electric-blue: #2F7CFF / #3478F6
- border: rgba(125,155,190,.16)
- grid: rgba(65,110,170,.06)

## Critérios de aprovação
- Backend Java domina
- board integrado
- não parece SaaS
- sem overflow
- 1920/1440/1366 funcionam
- dados reais preservados
- reconhecível como a mesma direção do alvo aprovado
