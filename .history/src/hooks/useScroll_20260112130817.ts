import { useState, useEffect } from "react";
import { useIsClient } from "./useIsClient";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre",
        "experiencia",
        "certificacoes",
        "projetos",
        "tecnologias",
        "skills",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Executar uma vez para definir a seção inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  return activeSection;
};

export const useScrollToSection = () => {
  const isClient = useIsClient();

  const scrollToSection = (sectionId: string) => {
    if (!isClient) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetPosition = element.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 segundo
    let start: number | null = null;

    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return scrollToSection;
};
