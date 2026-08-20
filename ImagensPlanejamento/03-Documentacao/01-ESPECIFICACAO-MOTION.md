# Especificação de Motion — Redesign V3

Os vídeos em `02-Motion` são referências de ritmo e foco. A implementação real deve usar movimento de interface, não movimento de câmera.

## 01 — Hero

Ordem sugerida:
- 0–250 ms: navbar/estrutura base.
- 150–450 ms: badge de disponibilidade.
- 250–650 ms: identidade/nome.
- 400–800 ms: headline Backend Java.
- 550–950 ms: Spring Boot • Sistemas Distribuídos • AWS.
- 650–1050 ms: descrição.
- 800–1150 ms: CTAs.
- 900–1450 ms: diagrama arquitetural.
- 1050–1600 ms: linha Cliente → API/Spring Boot.
- 1200–1750 ms: Security/PostgreSQL.
- 1400–1900 ms: AWS/Cloud e observabilidade.
- estado final: glow muito sutil e estável.

Interações:
- CTA: transição 160–220 ms; seta desloca discretamente.
- Nós do diagrama: hover/focus realça caminho associado.
- Nada de looping chamativo.

## 02 — Sobre

- headline e texto entram por blocos, não linha por linha.
- retrato/identidade entra com leve reveal lateral.
- diferenciais entram em stagger de 80–120 ms.
- texto longo deve ser escaneável e não virar parede textual.

## 03 — Experiência

- resumo aparece primeiro.
- pipeline acende sequencialmente:
  Code → Build/Test → Package → Deploy → Monitor.
- tecnologias/processos reais somente.
- responsabilidades entram em stagger curto.
- não usar métricas vistas em mockups sem validação no código.

## 04 — Certificações

- credencial principal recebe foco inicial.
- credenciais secundárias entram em sequência.
- hover/focus permite destacar uma credencial.
- status e datas somente do código real.

## 05 — Projetos em destaque

- case principal aparece antes dos cases secundários.
- diagrama do case pode ser desenhado progressivamente.
- tecnologias entram depois do problema/solução.
- hover revela profundidade sem esconder informação essencial.

## 06 — Explorador de projetos

- filtros devem responder imediatamente.
- projetos devem reorganizar com transição FLIP ou equivalente.
- usar opacity + transform; evitar animações pesadas.
- estado vazio e contagem devem ter feedback claro.
- filtros precisam funcionar por teclado.

## 07 — Detalhe de projeto

- entrada contextual a partir do projeto selecionado.
- arquitetura aparece por camadas.
- overview → stack → desafios → soluções.
- dados somente reais e comprováveis.

## 08 — Tecnologias

- Backend Java é o core visual.
- core aparece primeiro.
- conexões revelam grupos progressivamente:
  Sistemas Distribuídos → Cloud/Infra → Ferramentas → Complementar.
- não animar logos continuamente.

## 09 — Skills / Como trabalho

- centro/conceito aparece primeiro.
- competências entram em sequência radial ou por grupos.
- movimento deve reforçar relacionamento entre competências, não decorar.

## 10 — Contato / Footer

- CTA principal aparece primeiro.
- email e redes entram depois.
- footer fecha a experiência sem animação excessiva.
- não inventar promessa de tempo de resposta.

## Acessibilidade e performance

- `prefers-reduced-motion`.
- animações prioritariamente em `transform` e `opacity`.
- SVG para diagramas quando apropriado.
- evitar scroll hijacking.
- evitar listeners de scroll redundantes.
- duração padrão de microinteração: ~160–280 ms.
- entradas de seção: ~400–800 ms.
