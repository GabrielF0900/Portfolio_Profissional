"use client";

import { useState } from "react";
import { Folder, Zap, Settings } from "lucide-react";

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

export default function CareerPulse() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      {/* Main Card - Glassmorphism Cloud Effect */}
      <div 
        className="relative w-72 rounded-xl"
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
        <div className="flex items-center gap-2 px-4 pt-4 pb-3">
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
            [ CAREER_PULSE ]
          </span>
        </div>

        {/* Messages Container */}
        <div className="px-4 py-3 space-y-4">
          {visibleUpdates.slice(0, 2).map((update, idx) => {
            const IconComponent = iconMap[update.icon];
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
                    {update.timestamp}
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

        {/* Navigation - Cloud-like Dots Only */}
        <div className="flex items-center justify-center gap-2 px-4 py-4">
          {careerUpdates.map((_, index) => (
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
      </div>
    </div>
  );
}
