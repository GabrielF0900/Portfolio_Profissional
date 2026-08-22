"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

import { event } from "@/lib/gtag";
import styles from "./ProjectFilters.module.css";

export type Ecosystem = "Todos" | "Java" | "Node.js/TypeScript";

export type Area =
  | "Todas"
  | "Backend"
  | "Full Stack"
  | "Cloud & DevOps"
  | "Sistemas Distribuídos";

export type ProjectType =
  | "Todos"
  | "Individuais"
  | "Equipe Neukox"
  | "Colaborativos";

export const ALL_ECOSYSTEMS: Ecosystem[] = [
  "Todos",
  "Java",
  "Node.js/TypeScript",
];

export const ALL_AREAS: Area[] = [
  "Todas",
  "Backend",
  "Full Stack",
  "Cloud & DevOps",
  "Sistemas Distribuídos",
];

export const ALL_PROJECT_TYPES: ProjectType[] = [
  "Todos",
  "Individuais",
  "Equipe Neukox",
  "Colaborativos",
];

interface ProjectFiltersProps {
  ecosystem: Ecosystem;
  setEcosystem: (value: Ecosystem) => void;

  area: Area;
  setArea: (value: Area) => void;

  featuredOnly: boolean;
  setFeaturedOnly: (value: boolean) => void;

  projectType: ProjectType;
  setProjectType: (value: ProjectType) => void;

  activeFilterCount: number;
  clearFilters: () => void;
}

interface FilterButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

function FilterButton({ active, children, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.filterButton} ${
        active ? styles.filterButtonActive : ""
      }`}
      aria-pressed={active}
      onClick={onClick}
    >
      <span className={styles.filterIndicator} />
      {children}
    </button>
  );
}

export default function ProjectFilters({
  ecosystem,
  setEcosystem,
  area,
  setArea,
  featuredOnly,
  setFeaturedOnly,
  projectType,
  setProjectType,
  activeFilterCount,
}: ProjectFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleFeatured = (value: boolean) => {
    setFeaturedOnly(value);
    event("filtro_usado", {
      categoria: "Relevância",
      valor: value ? "Destaques" : "Todos",
    });
  };

  const handleProjectType = (value: ProjectType) => {
    setProjectType(value);
    event("filtro_usado", {
      categoria: "Tipo de Projeto",
      valor: value,
    });
  };

  const handleEcosystem = (value: Ecosystem) => {
    setEcosystem(value);
    event("filtro_usado", {
      categoria: "Ecossistema",
      valor: value,
    });
  };

  const handleArea = (value: Area) => {
    setArea(value);
    event("filtro_usado", {
      categoria: "Área de Atuação",
      valor: value,
    });
  };

  return (
    <div className={styles.filters}>
      {/* MOBILE TRIGGER */}
      <button
        type="button"
        className={styles.mobileTrigger}
        onClick={() => setMobileOpen((value) => !value)}
        aria-expanded={mobileOpen}
      >
        <span className={styles.mobileTriggerLeft}>
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span>
            Filtrar projetos
            {activeFilterCount > 0 && (
              <span className={styles.mobileActiveCount}>
                {activeFilterCount} filtros ativos
              </span>
            )}
          </span>
        </span>
        <ChevronDown size={16} aria-hidden="true" />
      </button>

      {/* FILTER BAR */}
      <div
        className={`${styles.filterCollapse} ${
          mobileOpen ? styles.filterCollapseOpen : ""
        }`}
      >
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>ECOSSISTEMA</span>
            <div className={styles.filterOptions}>
              {ALL_ECOSYSTEMS.map((item) => (
                <FilterButton
                  key={item}
                  active={ecosystem === item}
                  onClick={() => handleEcosystem(item)}
                >
                  {item === "Node.js/TypeScript" ? "Node / TypeScript" : item}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>ÁREA</span>
            <div className={styles.filterOptions}>
              {ALL_AREAS.map((item) => (
                <FilterButton
                  key={item}
                  active={area === item}
                  onClick={() => handleArea(item)}
                >
                  {item}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>TIPO</span>
            <div className={styles.filterOptions}>
              {ALL_PROJECT_TYPES.map((type) => (
                <FilterButton
                  key={type}
                  active={projectType === type}
                  onClick={() => handleProjectType(type)}
                >
                  {type === "Equipe Neukox" ? "Neukox" : type}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>RELEVÂNCIA</span>
            <div className={styles.filterOptions}>
              <FilterButton
                active={!featuredOnly}
                onClick={() => handleFeatured(false)}
              >
                Todos
              </FilterButton>
              <FilterButton
                active={featuredOnly}
                onClick={() => handleFeatured(true)}
              >
                Destaques
              </FilterButton>
            </div>
          </div>

          {/* Botão aplicar (apenas visível no mobile quando expandido) */}
          <button
            type="button"
            className={styles.mobileApplyButton}
            onClick={() => setMobileOpen(false)}
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
}