# MOTION

O vídeo é referência de intenção, não de câmera.

Timeline aproximada:
- 0–180ms estrutura/navbar
- 120–380ms badge/eyebrow
- 220–560ms nome/headline
- 380–700ms stack
- 500–820ms descrição
- 650–950ms CTAs
- 780–1100ms sociais
- 500–1250ms board
- 800–1550ms paths
- 1000–1650ms nodes

CTA hover: 160–220ms; seta move 3–5px.
Paths: stroke-dasharray/stroke-dashoffset uma vez na entrada.
Nodes: opacity + translateY 8–12px.
Glow: sutil e temporário.

`prefers-reduced-motion` obrigatório.
Priorizar opacity, transform e SVG stroke.
