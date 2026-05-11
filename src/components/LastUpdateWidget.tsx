"use client";

import { useState } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { getLastUpdateFormatted } from "../constants/lastUpdate";

export default function LastUpdateWidget() {
  const [isMinimized, setIsMinimized] = useState(false);

  const lastUpdateText = getLastUpdateFormatted();

  return (
    <div
      className={`relative transform transition-all duration-700 ease-in-out opacity-100 translate-y-0`}
    >
      <div className="relative group flex items-center">
        {/* Botão de Minimizar/Maximizar */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-50 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full p-0.5 shadow-md hover:scale-110 transition-transform text-slate-500 hover:text-blue-500"
          title={isMinimized ? "Expandir" : "Minimizar"}
        >
          {isMinimized ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>

        {/* Efeito de brilho (só aparece se não estiver minimizado) */}
        {!isMinimized && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
        )}

        {/* Card principal */}
        <div
          className={`relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out overflow-hidden ${
            isMinimized
              ? "w-14 h-14 p-0 flex items-center justify-center"
              : "px-5 py-4 w-auto"
          }`}
        >
          {/* Conteúdo */}
          <div
            className={`flex items-center gap-3 ${isMinimized ? "justify-center" : ""}`}
          >
            {/* Ícone com animação */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Clock
                className={`relative w-5 h-5 text-blue-600 dark:text-blue-400 transition-all duration-300 ${!isMinimized ? "animate-pulse group-hover:animate-spin" : ""}`}
              />
            </div>

            {/* Texto (Desaparece ao minimizar) */}
            {!isMinimized && (
              <div className="flex flex-col gap-0.5 whitespace-nowrap animate-in fade-in duration-500">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                  Última Atualização
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {lastUpdateText}
                </p>
              </div>
            )}
          </div>

          {/* Indicador de status (Ponto Verde) */}
          <div
            className={`absolute ${isMinimized ? "bottom-3 right-3" : "top-2 right-2"}`}
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* Tooltip (Só aparece quando minimizado para o usuário saber o que é o ícone) */}
        {isMinimized && (
          <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Ver última atualização
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-900 dark:border-r-slate-800"></div>
          </div>
        )}
      </div>
    </div>
  );
}
