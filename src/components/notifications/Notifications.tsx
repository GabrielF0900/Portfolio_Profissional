"use client";

import React, { useState } from "react";
import {
  Folder,
  Zap,
  Settings,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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

  // Lógica para pegar 2 itens por página sem repetição
  const getVisibleUpdates = () => {
    const updates = [];
    for (
      let i = 0;
      i < Math.min(2, notificationsData.length - currentIndex);
      i++
    ) {
      const index = currentIndex + i;
      updates.push({ ...notificationsData[index], stackIndex: i });
    }
    return updates;
  };

  const visibleUpdates = getVisibleUpdates();

  // Funções para as setas de navegação - pula de 2 em 2 (por página)
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 2;
      // Garante que não ultrapasse o total, mas permite parar no último par ou item único
      return nextIndex >= notificationsData.length ? prev : nextIndex;
    });
  };

  return (
    <div
      className="relative transition-all duration-500 ease-in-out"
      style={{
        background: isMinimized ? "transparent" : "rgba(255, 255, 255, 0.8)",
        backdropFilter: isMinimized ? "none" : "blur(12px)",
        WebkitBackdropFilter: isMinimized ? "none" : "blur(12px)",
        border: isMinimized ? "none" : "1px solid rgba(255, 255, 255, 0.9)",
        borderRadius: isMinimized ? "0" : "12px",
        boxShadow: isMinimized
          ? "none"
          : `
          0 4px 6px -1px rgba(148, 163, 184, 0.1),
          0 8px 15px -3px rgba(148, 163, 184, 0.1),
          0 20px 25px -5px rgba(56, 189, 248, 0.05),
          0 25px 50px -12px rgba(148, 163, 184, 0.15)
        `,
        width: isMinimized ? "auto" : "288px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 pt-4 pb-3 transition-all duration-500">
        {!isMinimized && (
          <div className="flex items-center gap-2 animate-in fade-in duration-300">
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
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
            </div>
            <span
              className="font-mono text-[11px] tracking-[0.2em] whitespace-nowrap"
              style={{ fontWeight: 500, color: "#000000" }}
            >
              [ Journal ]
            </span>
          </div>
        )}

        {/* Seta para minimizar/expandir */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="transition-all duration-500 transform hover:scale-110 active:scale-95"
          style={{ color: "#000000", background: "none", border: "none" }}
          aria-label={isMinimized ? "Expandir" : "Minimizar"}
        >
          {isMinimized ? (
            <ChevronDown size={24} strokeWidth={2} />
          ) : (
            <ChevronUp size={20} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Container de Mensagens e Navegação - Oculto quando minimizado */}
      {!isMinimized && (
        <div className="w-full animate-in fade-in slide-in-from-top-2 duration-500">
          {/* Messages Container */}
          <div className="px-4 py-3 space-y-4 min-h-[160px]">
            {visibleUpdates.map((update, idx) => {
              const IconComponent = iconMap[update.icon] || Folder;

              return (
                <div
                  key={`${update.id}-${update.stackIndex}`}
                  className="transition-opacity duration-300"
                >
                  {/* Category & Timestamp */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-[10px] tracking-wider font-semibold uppercase"
                      style={{ color: "#000000" }}
                    >
                      {update.category}
                    </span>
                    <span
                      className="font-mono text-[10px]"
                      style={{ color: "#000000" }}
                    >
                      {update.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex gap-2.5">
                    <IconComponent
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: "#000000" }}
                      strokeWidth={1.5}
                    />
                    <p
                      className="text-[12px] leading-relaxed font-sans flex-1"
                      style={{ color: "#000000", wordBreak: "break-word" }}
                    >
                      {update.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation - Setas nas pontas e Dots no meio */}
          <div className="w-full flex items-center justify-between px-4 py-4 border-t border-gray-200">
            <button
              onClick={handlePrev}
              className="transition-all duration-300 transform hover:scale-110 active:scale-95 p-1"
              style={{ color: "#000000" }}
              aria-label="Notificação Anterior"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({
                length: Math.ceil(notificationsData.length / 2),
              }).map((_, pageIndex) => (
                <button
                  key={pageIndex}
                  onClick={() => setCurrentIndex(pageIndex * 2)}
                  className="transition-all duration-300 ease-out"
                  style={{
                    width: pageIndex * 2 === currentIndex ? "8px" : "5px",
                    height: pageIndex * 2 === currentIndex ? "8px" : "5px",
                    borderRadius: "50%",
                    backgroundColor:
                      pageIndex * 2 === currentIndex ? "#38BDF8" : "#d1d5db",
                    boxShadow:
                      pageIndex * 2 === currentIndex
                        ? "0 0 6px 1px rgba(56, 189, 248, 0.3)"
                        : "none",
                  }}
                  aria-label={`Ir para página ${pageIndex + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="transition-all duration-300 transform hover:scale-110 active:scale-95 p-1"
              style={{ color: "#000000" }}
              aria-label="Próxima Notificação"
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
