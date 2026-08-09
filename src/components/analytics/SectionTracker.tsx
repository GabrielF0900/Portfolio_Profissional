"use client";

import { useEffect, useRef } from "react";
import { event } from "@/lib/gtag";

export function SectionTracker() {
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Atraso sutil para garantir a renderização das seções
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              
              if (sectionId && !trackedSections.current.has(sectionId)) {
                trackedSections.current.add(sectionId);
                event('secao_visualizada', { secao: sectionId });
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

      return () => {
        document.querySelectorAll('section[id]').forEach((s) => observer.unobserve(s));
        observer.disconnect();
      };
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
