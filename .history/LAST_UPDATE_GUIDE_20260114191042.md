# 📅 Sistema de Última Atualização

## Como usar

Este sistema mostra a última vez que você atualizou seu portfólio em **dois lugares**:

### 1. **Widget Flutuante** (canto inferior direito)
- Aparece com um design elegante e moderno
- Mostra um ícone de relógio pulsante
- Tem efeito hover com brilho
- Indicador de status (bolinha verde)

### 2. **Seção no Footer** (rodapé)
- Exibição grande e destacada
- Informação de "Ativo" visível
- Integrada com o design do footer

## 📝 Como Atualizar

Sempre que você **fizer mudanças no seu portfólio**, vá até o arquivo:

```
src/constants/lastUpdate.ts
```

E atualize os valores:

```typescript
export const LAST_UPDATE = {
  dia: 14,                    // Dia do mês (1-31)
  mes: "janeiro",             // Mês em português
  ano: 2026,                  // Ano
  hora: 14,                   // Hora (0-23)
  minuto: 30,                 // Minuto (0-59)
};
```

**Exemplo:**
```typescript
// Para atualizar para 25 de dezembro de 2025 às 18:45
export const LAST_UPDATE = {
  dia: 25,
  mes: "dezembro",
  ano: 2025,
  hora: 18,
  minuto: 45,
};
```

## 📋 Meses Disponíveis

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

## 🎨 Design Features

✨ **Componentes inclusos:**
- Widget flutuante com animações suaves
- Efeito de brilho ao passar o mouse
- Ícone pulsante
- Indicador de "Ativo" (bolinha verde)
- Tooltip ao fazer hover
- Compatível com modo claro e escuro (Light/Dark mode)

## 🔄 Como Funciona

1. O componente `LastUpdateWidget` lê a data de `lastUpdate.ts`
2. Formata automaticamente no padrão: `"DD de mês de YYYY, HH:MM"`
3. Exibe em dois lugares simultaneamente:
   - Footer (seção destacada)
   - Widget flutuante (canto inferior direito)

## 📱 Responsividade

- ✅ Totalmente responsivo
- ✅ Funciona em mobile e desktop
- ✅ Adaptado para dark mode
- ✅ Animações suaves em todas as resoluções

---

**Dica:** Atualize a data sempre que fizer mudanças no seu portfólio para manter os visitantes informados sobre o status do seu trabalho! 🚀
