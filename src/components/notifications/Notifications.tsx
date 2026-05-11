"use client";

import React, { useState } from "react";
import { Folder, Zap, Settings, ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  notificationsData,
  type IconType,
} from "../../constants/notificationsData";

const iconMap = {
  folder: Folder,
  lightning: Zap,
  gear: Settings,
};

export default function Notifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false); // Estado para minimizar

  // Lógica do v0 para pegar os itens visíveis
  const getVisibleUpdates = () => {
    const updates = [];
    for (let i = 0; i < Math.min(3, notificationsData.length); i++) {
      const index = (currentIndex + i) % notificationsData.length;
      updates.push({ ...notificationsData[index], stackIndex: i });
    }
    return updates;
  };

  const visibleUpdates = getVisibleUpdates();

  // Funções para as setas de navegação
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? notificationsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === notificationsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-72 rounded-xl transition-all duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.9)",
        boxShadow: `
          0 4px 6px -1px rgba(148, 163, 184, 0.1),
          0 8px 15px -3px rgba(148, 163, 184, 0.1),
          0 20px 25px -5px rgba(56, 189, 248, 0.05),
          0 25px 50px -12px rgba(148, 163, 184, 0.15)
        `,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          {/* Soft Pulsing Emerald Dot */}
          <div className="relative">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#34d399" }}
            />
            <div 
              className="absolute inset-0 w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: "#34d399",
                opacity: 0.4,
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
              }}
            />
          </div>
          <span 
            className="font-mono text-[11px] tracking-[0.2em] text-slate-500"
            style={{ fontWeight: 500 }}
          >
            [ Journal Engineering ]
          </span>
        </div>

        {/* Seta estratégica para minimizar */}
        <button 
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-slate-400 hover:text-slate-600 transition-colors ml-2"
          aria-label={isMinimized ? "Expandir" : "Minimizar"}
        >
          {isMinimized ? <ChevronDown size={16} strokeWidth={2} /> : <ChevronUp size={16} strokeWidth={2} />}
        </button>
      </div>

      {/* Container de Mensagens e Navegação - Oculto quando minimizado */}
      {!isMinimized && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Messages Container */}
          <div className="px-4 py-3 space-y-4">
            {visibleUpdates.slice(0, 2).map((update, idx) => {
              const IconComponent = iconMap[update.icon] || Folder;
              const isSecondary = idx === 1;

              return (
                <div
                  key={`${update.id}-${update.stackIndex}`}
                  className={`transition-opacity duration-300 ${
                    isSecondary ? "opacity-50" : "opacity-100"
                  }`}
                >
                  {/* Category & Timestamp */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span 
                      className="font-mono text-[10px] tracking-wider font-semibold uppercase"
                      style={{ color: "#475569" }}
                    >
                      {update.category}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">
                      {update.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-2.5">
                    <IconComponent 
                      className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" 
                      style={{ color: "#94a3b8" }}
                      strokeWidth={1.5} 
                    />
                    <p 
                      className="text-[13px] leading-relaxed font-sans"
                      style={{ color: "#334155" }}
                    >
                      {update.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation - Setas nas pontas e Dots no meio */}
          <div className="flex items-center justify-between px-4 py-4">
            <button 
              onClick={handlePrev}
              className="text-slate-800 hover:text-slate-500 transition-colors"
              aria-label="Notificação Anterior"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-2">
              {notificationsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="transition-all duration-300 ease-out"
                  style={{
                    width: index === currentIndex ? "10px" : "6px",
                    height: index === currentIndex ? "10px" : "6px",
                    borderRadius: "50%",
                    backgroundColor: index === currentIndex ? "#38BDF8" : "#e2e8f0",
                    boxShadow: index === currentIndex 
                      ? "0 0 8px 2px rgba(56, 189, 248, 0.3)" 
                      : "none",
                  }}
                  aria-label={`Ir para atualização ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="text-slate-800 hover:text-slate-500 transition-colors"
              aria-label="Próxima Notificação"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}