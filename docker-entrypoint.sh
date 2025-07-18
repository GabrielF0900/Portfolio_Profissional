#!/bin/sh

# Script de inicialização do Docker

echo "🚀 Iniciando Portfolio - Gabriel Falcão da Cruz"

# Executar migrações do Prisma (se necessário)
if [ -f "prisma/schema.prisma" ]; then
  echo "📦 Executando migrações do Prisma..."
  npx prisma migrate deploy
fi

# Iniciar a aplicação Next.js
echo "🌐 Iniciando servidor Next.js..."
exec node server.js
