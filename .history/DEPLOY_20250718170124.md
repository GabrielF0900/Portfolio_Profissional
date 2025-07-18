# Deploy no Render - Instruções

## Deploy SEM Banco de Dados (Modo Portfolio Estático)

Para colocar o portfolio online rapidamente sem banco de dados:

### Opção 1: Deploy Simples (Recomendado)

1. **Conecte** seu repositório GitHub ao Render
2. **Crie** um novo Web Service
3. **Configure**:
   ```
   Runtime: Docker
   Build Command: (deixe vazio)
   Start Command: (deixe vazio)
   ```

4. **Variáveis de Ambiente Mínimas**:
   ```
   NODE_ENV=production
   NEXTAUTH_URL=https://your-app-name.onrender.com
   NEXTAUTH_SECRET=temporary-secret-key-for-portfolio-only
   ```

5. **Deploy** - Seu portfolio ficará online sem funcionalidades de banco!

### ⚠️ O que funcionará SEM banco:
- ✅ Todas as seções visuais
- ✅ Navegação
- ✅ Links para projetos
- ✅ Design responsivo
- ✅ Tema claro/escuro

### ❌ O que NÃO funcionará sem banco:
- Formulário de contato (se tiver)
- Autenticação (se tiver)
- Dados dinâmicos salvos

---

## Deploy COM Banco de Dados (Futuro)

Quando quiser adicionar banco de dados:

### 1. Configurar Banco de Dados

1. No dashboard do Render, crie um novo **PostgreSQL Database**
2. Copie a **Internal Database URL** gerada
3. Anote as credenciais do banco

### 2. Configurar Web Service

1. Conecte seu repositório GitHub ao Render
2. Crie um novo **Web Service**
3. Configure as seguintes opções:

```
Runtime: Docker
Build Command: (deixe vazio - será usado o Dockerfile)
Start Command: (deixe vazio - será usado o CMD do Dockerfile)
```

### 3. Variáveis de Ambiente

Configure as seguintes variáveis no Render:

```
DATABASE_URL=postgresql://username:password@host:port/database
NEXTAUTH_SECRET=your-super-secret-key-min-32-characters
NEXTAUTH_URL=https://your-app-name.onrender.com
NODE_ENV=production
```

### 4. Configurações Adicionais

- **Auto-Deploy**: Ativado (deploy automático no push)
- **Health Check Path**: `/api/health` (opcional)
- **Instance Type**: Starter (suficiente para desenvolvimento)

## Verificação do Deploy

Após o deploy, verifique:

1. ✅ Aplicação carregando corretamente
2. ✅ Banco de dados conectado
3. ✅ Assets estáticos carregando
4. ✅ Rotas funcionando

## Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Confirme se o `pnpm-lock.yaml` está commitado

### Erro de Database
- Verifique se a `DATABASE_URL` está correta
- Execute as migrações se necessário

### Erro de Assets
- Confirme se `output: 'standalone'` está no `next.config.mjs`
- Verifique se as imagens estão na pasta `public/`

## Performance

Para melhor performance em produção:

1. Use a tier paga do Render para evitar sleep
2. Configure CDN para assets estáticos
3. Implemente cache de banco de dados
4. Monitore logs e métricas
