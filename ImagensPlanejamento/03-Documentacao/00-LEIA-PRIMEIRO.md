# ImagensPlanejamento — Redesign V3

Esta pasta é o pacote de referência para a implementação do Redesign V3 do portfólio.

## Estrutura

- `01-Layouts/` — mockups estáticos de direção visual.
- `02-Motion/` — vídeos demonstrativos Motion V2.
- `03-Documentacao/` — regras, motion spec, checklist e prompt mestre.

## REGRA MAIS IMPORTANTE

**Os mockups e vídeos NÃO são fonte da verdade para dados.**

Algumas imagens foram geradas por IA e podem conter textos, números, datas, tecnologias, métricas, links ou descrições ilustrativas que não existem no portfólio real.

A ordem de autoridade é:

1. Código/dados atuais do portfólio.
2. Plano aprovado e decisões descritas na documentação.
3. Layouts para composição visual.
4. Vídeos para intenção de motion.
5. `gpt-taste` para qualidade, heurísticas e acabamento de UI/UX.

Nunca copiar uma métrica, data, projeto, tecnologia, certificação, cargo ou resultado de uma imagem sem validar no código atual.

## O que os mockups representam

Eles servem para orientar:

- impacto;
- posicionamento;
- identidade visual;
- hierarquia;
- composição;
- ritmo;
- distribuição de conteúdo;
- direção de diagramas;
- sistema visual;
- ideia de interações.

Não são especificação pixel-perfect.

## O que os vídeos representam

Os vídeos são simulações de intenção de movimento. Eles NÃO significam que a página deve aplicar zoom ou movimento de câmera.

Na implementação real, traduzir a intenção para:

- stagger;
- opacity/transform;
- desenho de linhas SVG;
- glow em nós;
- transições de filtros;
- hover/focus;
- expansão de conteúdo;
- reorganização de cards;
- scroll reveal;
- feedback de interação.

Sempre respeitar `prefers-reduced-motion`.
