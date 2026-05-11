"use client";

import React, { useState } from "react";
import { Folder, Zap, Settings, ArrowLeft, ArrowRight } from "lucide-react";
import {
  notificationsData,
  type IconType,
  type NotificationEntry,
} from "../../constants/notificationsData";

export default function Notifications() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(notificationsData.length / itemsPerPage);

  // Lógica de Paginação
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Fatiando o array para mostrar apenas os itens da página atual
  const currentItems = notificationsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  // Renderizador dinâmico de ícones
  const renderIcon = (iconType: IconType) => {
    const iconProps = { className: "w-5 h-5 text-gray-500 stroke-[1.5]" };
    switch (iconType) {
      case "folder":
        return <Folder {...iconProps} />;
      case "lightning":
        return <Zap {...iconProps} />;
      case "gear":
        return <Settings {...iconProps} />;
      default:
        return <Folder {...iconProps} />;
    }
  };

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-2xl p-7 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 font-sans">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full z-10"></div>
          <div className="absolute w-4 h-4 bg-emerald-400/40 rounded-full animate-ping"></div>
        </div>
        <h2 className="font-mono text-[13px] tracking-[0.15em] text-gray-600 font-medium">
          [ ÚLTIMAS ATUALIZAÇÕES ]
        </h2>
      </div>

      {/* Lista de Atualizações */}
      <div className="flex flex-col gap-6 min-h-[280px]">
        {currentItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-xs tracking-wider text-gray-500">
                {item.category}
              </span>
              <span className="font-mono text-xs text-gray-400">
                {item.date}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{renderIcon(item.icon)}</div>
              <p className="text-[15px] leading-relaxed text-gray-800">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Controles de Navegação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-2">
          <button
            onClick={handlePrevPage}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            aria-label="Página anterior"
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)] w-2.5 h-2.5"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Ir para a página ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNextPage}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            aria-label="Próxima página"
          >
            <ArrowRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      )}
    </div>
  );
}
