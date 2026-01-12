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
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToSection;
};
