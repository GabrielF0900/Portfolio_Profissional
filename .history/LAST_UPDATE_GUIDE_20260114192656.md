# 📅 Sistema de Última Atualização

## ⚡ Como usar (SUPER FÁCIL!)

### Opção 1: Usar o script de push (RECOMENDADO)

Ao invés de `git push`, execute:

```powershell
.\push.ps1
```

Isso vai:
1. ✅ Atualizar automaticamente a data/hora para agora (em Brasília)
2. 📝 Fazer commit das mudanças
3. 🚀 Fazer push

**É isso! Nada mais!**

### Opção 2: Git hook automático (PRÉ-PUSH)

Se você usar `git push` normalmente, o git hook `pre-push` será executado automaticamente e vai:
- Detectar mudanças
- Atualizar a data de última atualização
- Fazer push

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

