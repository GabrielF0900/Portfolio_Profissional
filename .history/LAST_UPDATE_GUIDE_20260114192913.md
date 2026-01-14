# 📅 Sistema de Última Atualização

## ⚡ Como usar (SUPER FÁCIL!)

### Opção 1: Usar o comando npm (RECOMENDADO)

Quando quiser fazer push com atualização automática:

```bash
npm run push
```

Ou com pnpm (se preferir):

```bash
pnpm push
```

Isso vai:
- ✅ Atualizar a data/hora para AGORA (em Brasília)
- 📝 Fazer commit automático
- 🚀 Fazer push

**É isso! Nada mais!**

### Opção 2: Usar o script direto

Se preferir usar Node.js diretamente:

```bash
node push.js
```

### Opção 3: Atualizar manualmente (se preferir)

Edite o arquivo `src/constants/lastUpdate.ts`:

```typescript
export const LAST_UPDATE = {
  dia: 14,              // Dia (1-31)
  mes: "janeiro",       // Mês em português
  ano: 2026,            // Ano
  hora: 19,             // Hora (0-23)
  minuto: 14,           // Minuto (0-59)
};
```

---

## 📋 Como Funciona

**Widget Flutuante (canto inferior direito):**
- Mostra a data/hora da última atualização
- Com ícone de relógio pulsante
- Efeito hover bonito

**Seção no Footer:**
- Exibição grande e destacada
- Indicador de "Ativo"

---

## 🎨 Design Features

✨ **Componentes inclusos:**
- Widget flutuante com animações suaves
- Efeito de brilho ao passar o mouse
- Ícone pulsante
- Indicador de "Ativo" (bolinha verde)
- Tooltip ao fazer hover
- Compatível com modo claro e escuro (Light/Dark mode)

---

## 📝 Meses Disponíveis

- janeiro
- fevereiro
- março
- abril
- maio
- junho
- julho
- agosto
- setembro
- outubro
- novembro
- dezembro

---

## 🚀 Workflow Recomendado

```bash
# 1. Faça suas modificações no projeto
# 2. Adicione os arquivos
git add .

# 3. Faça commit normalmente
git commit -m "sua mensagem"

# 4. Use o script de push (atualiza data automaticamente)
.\push.ps1
```

**Pronto!** A data de última atualização foi automaticamente atualizada para agora! ✨

---

**Dica:** Sempre use `.\push.ps1` para manter a data atualizada com suas mudanças! 🎉

