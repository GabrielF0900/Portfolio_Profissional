#!/bin/bash
# Script para iniciar o servidor de desenvolvimento com limpeza automática da pasta .next

# Remove a pasta .next se existir
if [ -d ".next" ]; then
  echo "Limpando pasta .next..."
  rm -rf .next
  echo "Pasta .next removida com sucesso"
fi

# Inicia o servidor de desenvolvimento
npm run dev --legacy-peer-deps 2>/dev/null || npm run dev
