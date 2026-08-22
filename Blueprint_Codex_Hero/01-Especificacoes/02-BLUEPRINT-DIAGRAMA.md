# DIAGRAMA DE ARQUITETURA

O diagrama deve parecer um sistema conectado, não uma coleção de cards.

Estrutura:

```text
Clientes
  ├─ Web
  ├─ Mobile
  └─ Serviços
        │
        ▼
API / Spring Boot
        │
        ├────▶ Segurança / Spring Security
        ├────▶ Dados / PostgreSQL
        └────▶ AWS / Infraestrutura
```

Desktop:
- ClientNode menor
- SpringBootNode é o núcleo e maior
- SecurityNode e DatabaseNode conectados ao núcleo
- AwsNode importante, mas não maior que Spring Boot
- ConnectionLayer em SVG dentro de container `relative`

SVG:
- viewBox responsivo
- `pointer-events: none`
- stroke azul sutil
- stroke-width ~1–1.5
- paths separados
- sem `w-screen`
- sem min-width gigante
- nada fora do board

Nodes:
- radius 12–18px
- fundo profundo
- border fina
- ícone pequeno
- label clara
- sublabel menor
- Spring Boot com border/glow mais forte

Grid:
CSS linear-gradients, background-size ~36–48px, opacidade muito baixa.

Mobile:
fluxo vertical/condensado sem horizontal scroll.
