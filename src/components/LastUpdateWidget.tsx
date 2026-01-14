"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { getLastUpdateFormatted } from "../constants";

export default function LastUpdateWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animação de entrada suave
    setIsVisible(true);
  }, []);

  const lastUpdateText = getLastUpdateFormatted();

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background decorativo */}
      <div className="relative group cursor-default">
        {/* Efeito de brilho */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

        {/* Card principal */}
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg dark:shadow-2xl border border-slate-200 dark:border-slate-700 px-5 py-4 group-hover:shadow-xl transition-all duration-300">
          {/* Conteúdo */}
          <div className="flex items-center gap-3">
            {/* Ícone com animação */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Clock className="relative w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse group-hover:animate-spin transition-all duration-300" />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Última Atualização
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {lastUpdateText}
              </p>
            </div>
          </div>

          {/* Indicador de status */}
          <div className="absolute top-2 right-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* Tooltip ao passar o mouse */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Última atualização do portfolio
          <div className="absolute top-full right-2 w-2 h-2 bg-slate-900 dark:bg-slate-800 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
