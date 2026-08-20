# GIT

Branch: `redesign-v2`.

Antes de cada microfase:
```bash
git status
git branch --show-current
git log -1 --oneline
```

Não usar:
- git reset --hard
- git clean -fd
- merge automático
- nova branch sem pedido

Se houver regressão:
analisar git diff e corrigir/reverter somente a microfase.
