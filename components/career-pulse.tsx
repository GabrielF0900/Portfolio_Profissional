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
];

const iconMap = {
  folder: Folder,
  lightning: Zap,
  gear: Settings,
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Glassmorphism Card */}
      <div className="relative w-80 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-transparent p-4 shadow-2xl">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 via-sky-500 to-emerald-500 opacity-50 -z-10 blur-[1px]" />
        <div className="absolute inset-[1px] rounded-xl bg-slate-900/95 -z-10" />

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          {/* Pulsing Live Indicator */}
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </div>
          <span className="font-mono text-xs text-white tracking-wider">
            [ CAREER PULSE ]
          </span>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative h-36 mb-3">
          {getVisibleUpdates()
            .reverse()
            .map((update, reverseIndex) => {
              const stackIndex = 2 - reverseIndex;
              const IconComponent = iconMap[update.icon];

              return (
                <div
                  key={`${update.id}-${stackIndex}`}
                  className="absolute w-full transition-all duration-300 ease-out"
                  style={{
                    top: `${stackIndex * 8}px`,
                    zIndex: 3 - stackIndex,
                    opacity: 1 - stackIndex * 0.15,
                    transform: `scale(${1 - stackIndex * 0.03})`,
                  }}
                >
                  <div className="bg-slate-800/90 rounded-lg p-3 border border-slate-700/50">
                    {/* Category & Timestamp */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-sky-400 tracking-wider">
                        {update.category}
                      </span>
                      <span className="font-mono text-[10px] text-sky-400">
                        {update.timestamp}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex items-start gap-2">
                      <IconComponent className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white text-sm leading-relaxed font-sans">
                        {update.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          {/* Up Arrow */}
          <button
            onClick={handlePrev}
            className="p-1 text-sky-400 hover:text-sky-300 transition-colors"
            aria-label="Previous update"
          >
            <ChevronUp className="w-4 h-4" />
          </button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {careerUpdates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-sky-400 w-3"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to update ${index + 1}`}
              />
            ))}
          </div>

          {/* Down Arrow */}
          <button
            onClick={handleNext}
            className="p-1 text-sky-400 hover:text-sky-300 transition-colors"
            aria-label="Next update"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
