"use client";

import { useState } from "react";
import { Folder, Zap, Settings, ChevronUp, ChevronDown } from "lucide-react";

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
    content: "Onboarding iniciado na SEFAZ-BA (Estágio).",
    timestamp: "09 MAY",
    icon: "folder",
  },
  {
    id: "02",
    category: "STUDY",
    content: "Aprofundando Serverless (AWS SAP-C02).",
    timestamp: "08 MAY",
    icon: "lightning",
  },
  {
    id: "03",
    category: "PROJECT",
    content: "Implementando CI/CD no Nebula-Archive.",
    timestamp: "07 MAY",
    icon: "gear",
  },
  {
    id: "04",
    category: "STUDY",
    content: "Estudando arquiteturas event-driven.",
    timestamp: "05 MAY",
    icon: "lightning",
  },
  {
    id: "05",
    category: "PROJECT",
    content: "Deploy automatizado com Terraform.",
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
    for (let i = 0; i < Math.min(2, careerUpdates.length); i++) {
      const index = (currentIndex + i) % careerUpdates.length;
      updates.push({ ...careerUpdates[index], stackIndex: i });
    }
    return updates;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Minimal White Card */}
      <div className="w-72 rounded-lg bg-white border border-gray-200 shadow-md p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
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
          <span className="font-mono text-[10px] text-gray-400">LIVE</span>
        </div>

        {/* Messages Container */}
        <div className="space-y-3 mb-4">
          {getVisibleUpdates().map((update) => {
            const IconComponent = iconMap[update.icon];

            return (
              <div
                key={`${update.id}-${update.stackIndex}`}
                className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0"
              >
                {/* Category & Timestamp */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`font-mono text-[10px] tracking-wider ${categoryColors[update.category]}`}>
                    {update.category}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400">
                    {update.timestamp}
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-start gap-2">
                  <IconComponent className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-xs leading-relaxed font-sans">
                    {update.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-100">
          {/* Up Arrow */}
          <button
            onClick={handlePrev}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Atualização anterior"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1">
            {careerUpdates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-gray-600 w-2.5"
                    : "bg-gray-300 hover:bg-gray-400"
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
  );
}
