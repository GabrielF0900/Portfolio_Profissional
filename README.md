# Portfólio Profissional — Gabriel Falcão

![Banner do portfólio](.github/assets/portfolio-banner.jpg)

Portfólio de Desenvolvedor Backend Java, com projetos em Spring Boot, sistemas distribuídos, arquitetura Cloud-Native e AWS.

## Tecnologias

- Next.js 14.2.3 e React 18.3.1
- TypeScript e Tailwind CSS
- GSAP e Motion
- pnpm 9

## Desenvolvimento

Requer Node.js 20 ou superior e pnpm via Corepack.

```bash
corepack enable
pnpm install
pnpm dev
```

Validações e build:

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm check
pnpm start
```

## Otimização de imagens

As imagens ativas ficam organizadas em `public/images/`. Para recriar os WebP quando os arquivos-fonte definidos no script estiverem disponíveis:

```bash
pnpm optimize:images
```

O script usa Sharp, limita as dimensões ao tamanho necessário na interface e não amplia imagens menores.

## Atualização, commit e push

```bash
pnpm run push -- "chore: mensagem do commit"
```

Esse comando atualiza `src/constants/lastUpdate.ts` com o horário de Brasília, adiciona o arquivo ao Git, cria o commit com a mensagem informada e executa o push. Revise o diretório de trabalho antes de utilizá-lo.

## Links

- [Portfólio](https://www.gabrielfalcaodacruz.tech/)
- [GitHub](https://github.com/GabrielF0900)
- [LinkedIn](https://www.linkedin.com/in/gabrielfalcaodev/)
