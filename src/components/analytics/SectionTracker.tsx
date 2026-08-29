"use client";

import { useEffect, useRef } from "react";
import { event } from "@/lib/gtag";

export function SectionTracker() {
  const trackedSections = useRef<Set<string>>(new Set());

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Atraso sutil para garantir a renderização das seções
    const timer = setTimeout(() => {
      const sectionObserver = new IntersectionObserver(
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

      observer = sectionObserver;
      document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));

    }, 1000);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return null;
}
