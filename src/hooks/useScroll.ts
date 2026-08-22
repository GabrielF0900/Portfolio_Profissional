import { useEffect, useState } from "react";
import { navigationItems } from "../constants/navigation";
import { useIsClient } from "./useIsClient";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] =
    useState("inicio");

  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    const sections = navigationItems.map(
      (item) => item.id
    );

    const handleScroll = () => {
      /*
       * Linha virtual abaixo da navbar.
       *
       * A navbar possui 80px.
       * Usamos ~120px para que a seção seja considerada
       * ativa logo após entrar na área útil da página.
       */
      const activationLine =
        window.scrollY + 120;

      /*
       * Caso o usuário esteja praticamente no fim
       * da página, mantemos a última seção do menu
       * como ativa.
       *
       * Isso é particularmente importante para Contato,
       * porque depois dele existe o Footer.
       */
      const viewportBottom =
        window.scrollY +
        window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      const isNearBottom =
        viewportBottom >=
        documentHeight - 24;

      if (isNearBottom) {
        const lastSection =
          sections[sections.length - 1];

        if (lastSection) {
          setActiveSection(lastSection);
        }

        return;
      }

      let currentSection =
        sections[0] ?? "inicio";

      for (const sectionId of sections) {
        const element =
          document.getElementById(sectionId);

        if (!element) continue;

        const rect =
          element.getBoundingClientRect();

        const top =
          rect.top + window.scrollY;

        if (activationLine >= top) {
          currentSection = sectionId;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, [isClient]);

  return activeSection;
};

export const useScrollToSection = () => {
  const isClient = useIsClient();

  const scrollToSection = (
    sectionId: string
  ) => {
    if (!isClient) return;

    const element =
      document.getElementById(sectionId);

    if (!element) return;

    /*
     * Navbar fixa = 80px.
     *
     * Acrescentamos uma pequena margem visual.
     */
    const navigationOffset = 88;

    const elementTop =
      element.getBoundingClientRect().top +
      window.scrollY;

    const targetPosition =
      Math.max(
        0,
        elementTop - navigationOffset
      );

    const startPosition =
      window.scrollY;

    const distance =
      targetPosition - startPosition;

    const duration = 850;

    let start:
      | number
      | null = null;

    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (prefersReducedMotion) {
      window.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });

      return;
    }

    const easeInOutCubic = (
      progress: number
    ) => {
      return progress < 0.5
        ? 4 *
            progress *
            progress *
            progress
        : 1 -
            Math.pow(
              -2 * progress + 2,
              3
            ) /
              2;
    };

    const animation = (
      currentTime: number
    ) => {
      if (start === null) {
        start = currentTime;
      }

      const elapsed =
        currentTime - start;

      const progress =
        Math.min(
          elapsed / duration,
          1
        );

      const easedProgress =
        easeInOutCubic(progress);

      window.scrollTo(
        0,
        startPosition +
          distance * easedProgress
      );

      if (progress < 1) {
        requestAnimationFrame(
          animation
        );
      }
    };

    requestAnimationFrame(animation);
  };

  return scrollToSection;
};