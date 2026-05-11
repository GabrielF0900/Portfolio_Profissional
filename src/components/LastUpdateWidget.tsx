"use client";

import { useState } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { getLastUpdateFormatted } from "../constants/lastUpdate";

export default function LastUpdateWidget() {
  const [isMinimized, setIsMinimized] = useState(false);
  const lastUpdateText = getLastUpdateFormatted();

  return (
    <div className="relative w-fit">
      <div className="relative flex items-center h-14">
        {/* 1. SETA TRANSPARENTE - Sem fundo, sem borda, z-index máximo */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-[100] transition-all duration-300 text-black flex items-center justify-center hover:scale-125 bg-transparent outline-none"
        >
          {isMinimized ? (
            <ChevronRight size={22} strokeWidth={3} />
          ) : (
            <ChevronLeft size={22} strokeWidth={3} />
          )}
        </button>

        {/* 2. CARD QUE ENCOLHE */}
        <div
          className={`relative bg-white shadow-lg border border-slate-200 transition-all duration-500 ease-in-out overflow-hidden ${
            isMinimized
              ? "w-14 h-14 rounded-full flex items-center justify-center"
              : "rounded-2xl px-5 py-3 w-[85vw] max-w-[280px] sm:w-auto min-w-[220px]"
          }`}
        >
          {!isMinimized && (
            <div className="flex items-center gap-3 animate-in fade-in duration-500 pr-6">
              <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
              <div className="flex flex-col whitespace-nowrap">
                <p className="text-[10px] font-black text-black uppercase tracking-tight">
                  Última Atualização
                </p>
                <p className="text-xs sm:text-sm font-bold text-black opacity-90">
                  {lastUpdateText}
                </p>
              </div>
            </div>
          )}

          <div className="absolute top-2 right-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* 3. TEXTO POSICIONADO COM VALOR FIXO (Para não encavalar na seta) */}
        {isMinimized && (
          <span
            className="text-sm font-black text-black whitespace-nowrap animate-in fade-in slide-in-from-left-4 duration-300 ml-12"
            style={{ marginLeft: "20px" }}
          >
            Ver última atualização
          </span>
        )}
      </div>
    </div>
  );
}
