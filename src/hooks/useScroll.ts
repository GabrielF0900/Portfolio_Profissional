import { useEffect, useState } from "react";
import { navigationItems } from "../constants/navigation";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const elements = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .at(-1);

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export const useScrollToSection = () => {
  return (sectionId: string) => {
    if (typeof document === "undefined") return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const navigationOffset = 88;
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = Math.max(0, elementTop - navigationOffset);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: targetPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };
};
