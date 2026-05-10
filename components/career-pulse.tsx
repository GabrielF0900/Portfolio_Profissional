"use client";

import { useState } from "react";
import { Folder, Zap, Settings, ChevronUp, ChevronDown, Activity } from "lucide-react";

interface CareerUpdate {
  id: string;
  category: "CAREER" | "STUDY" | "PROJECT";
  content: string;
  timestamp: string;
  icon: "folder" | "lightning" | "gear";
}

const careerUpdates: CareerUpdate[] = [
  {
    id: "01",
    category: "CAREER",
    content: "Onboarding na SEFAZ-BA (Estágio)",
    timestamp: "09 MAY",
    icon: "folder",
  },
  {
    id: "02",
    category: "STUDY",
    content: "Aprofundando Serverless (AWS SAP-C02)",
    timestamp: "08 MAY",
    icon: "lightning",
  },
  {
    id: "03",
    category: "PROJECT",
    content: "Implementando CI/CD no Nebula-Archive",
    timestamp: "07 MAY",
    icon: "gear",
  },
  {
    id: "04",
    category: "STUDY",
    content: "Estudando arquiteturas event-driven",
    timestamp: "05 MAY",
    icon: "lightning",
  },
  {
    id: "05",
    category: "PROJECT",
    content: "Deploy automatizado com Terraform",
    timestamp: "03 MAY",
    icon: "gear",
  },
];

const iconMap = {
  folder: Folder,
  lightning: Zap,
  gear: Settings,
};

const categoryColors: Record<string, string> = {
  CAREER: "text-sky-500",
  STUDY: "text-sky-500",
  PROJECT: "text-sky-500",
};

export default function CareerPulse() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? careerUpdates.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === careerUpdates.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleUpdates = () => {
    const updates = [];
    for (let i = 0; i < Math.min(3, careerUpdates.length); i++) {
      const index = (currentIndex + i) % careerUpdates.length;
      updates.push({ ...careerUpdates[index], stackIndex: i });
    }
    return updates;
  };

  const visibleUpdates = getVisibleUpdates();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Stacked Cards Effect - Background cards */}
      <div className="relative">
        {/* Third card (deepest) */}
        <div 
          className="absolute -bottom-2 left-2 right-2 h-full rounded-lg bg-gray-100 border border-gray-200 opacity-40"
          style={{ transform: "scale(0.94)" }}
        />
        {/* Second card */}
        <div 
          className="absolute -bottom-1 left-1 right-1 h-full rounded-lg bg-gray-50 border border-gray-200 opacity-60"
          style={{ transform: "scale(0.97)" }}
        />
        
        {/* Main Card */}
        <div className="relative w-72 rounded-lg bg-white border border-gray-200 shadow-md">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              {/* Pulsing Live Indicator - Soft Green */}
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-300" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-300 animate-ping opacity-50" />
              </div>
              <span className="font-mono text-[10px] text-gray-500 tracking-wider uppercase">
                Career Pulse
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase">Live</span>
              <Activity className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>

          {/* Messages Container */}
          <div className="px-4 py-3 space-y-3">
            {visibleUpdates.slice(0, 2).map((update, idx) => {
              const IconComponent = iconMap[update.icon];
              const isSecondary = idx === 1;

              return (
                <div
                  key={`${update.id}-${update.stackIndex}`}
                  className={`transition-opacity duration-200 ${
                    isSecondary ? "opacity-60" : "opacity-100"
                  }`}
                >
                  {/* Category & Timestamp */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`font-mono text-[10px] tracking-wider font-medium ${categoryColors[update.category]}`}>
                      {update.category}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      {update.timestamp}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-2">
                    <IconComponent className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <p className="text-gray-700 text-xs leading-relaxed font-sans">
                      {update.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 px-4 py-3 border-t border-gray-100">
            {/* Up Arrow */}
            <button
              onClick={handlePrev}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Atualização anterior"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {careerUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-gray-600 w-3 h-1.5"
                      : "bg-gray-300 hover:bg-gray-400 w-1.5 h-1.5"
                  }`}
                  aria-label={`Ir para atualização ${index + 1}`}
                />
              ))}
            </div>

            {/* Down Arrow */}
            <button
              onClick={handleNext}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Próxima atualização"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
