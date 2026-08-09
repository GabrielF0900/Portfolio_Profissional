"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/gtag";

export type Ecosystem = 'Todos' | 'Java' | 'Node.js/TypeScript';
export type Area = 'Todas' | 'Backend' | 'Full Stack' | 'Cloud & DevOps' | 'Sistemas Distribuídos';
export type ProjectType = 'Todos' | 'Individuais' | 'Equipe Neukox' | 'Colaborativos';

export const ALL_ECOSYSTEMS: Ecosystem[] = ['Todos', 'Java', 'Node.js/TypeScript'];
export const ALL_AREAS: Area[] = ['Todas', 'Backend', 'Full Stack', 'Cloud & DevOps', 'Sistemas Distribuídos'];
export const ALL_PROJECT_TYPES: ProjectType[] = ['Todos', 'Individuais', 'Equipe Neukox', 'Colaborativos'];

interface ProjectFiltersProps {
  ecosystem: Ecosystem;
  setEcosystem: (val: Ecosystem) => void;
  area: Area;
  setArea: (val: Area) => void;
  featuredOnly: boolean;
  setFeaturedOnly: (val: boolean) => void;
  projectType: ProjectType;
  setProjectType: (val: ProjectType) => void;
  activeFilterCount: number;
  clearFilters: () => void;
}

export default function ProjectFilters({
  ecosystem, setEcosystem,
  area, setArea,
  featuredOnly, setFeaturedOnly,
  projectType, setProjectType,
  activeFilterCount, clearFilters
}: ProjectFiltersProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [showAllEcosystems, setShowAllEcosystems] = useState(false);
  const [showAllAreas, setShowAllAreas] = useState(false);

  const displayedEcosystems = showAllEcosystems ? ALL_ECOSYSTEMS : ALL_ECOSYSTEMS.slice(0, 6);
  const displayedAreas = showAllAreas ? ALL_AREAS : ALL_AREAS.slice(0, 6);

  return (
    <div className="md:col-span-1 lg:col-span-1 md:sticky md:top-24 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
      {/* Mobile Header Toggle */}
      <button
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        className="w-full md:hidden flex items-center justify-between p-4 font-semibold text-slate-800 dark:text-slate-200"
      >
        <span>Filtrar projetos {activeFilterCount > 0 ? `(${activeFilterCount} ativos)` : ''}</span>
        {isMobileFiltersOpen ? <ChevronUp className="w-5 h-5 transition-transform" /> : <ChevronDown className="w-5 h-5 transition-transform" />}
      </button>

      {/* Accordion content with smooth grid-rows transition */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isMobileFiltersOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100'}`}
      >
        <div className="overflow-hidden">
          <div className="p-4 md:p-5 pt-0 md:pt-5 flex flex-col gap-5">

            {/* Mobile Clear Button Header */}
            {activeFilterCount > 0 && (
              <div className="md:hidden flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-4 mb-2">
                <span className="text-sm font-medium">Filtros</span>
                <button onClick={clearFilters} className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                  <X className="w-4 h-4" /> Limpar
                </button>
              </div>
            )}

            {/* Relevância */}
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Relevância
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setFeaturedOnly(false);
                    event('filtro_usado', { categoria: 'Relevância', valor: 'Todos' });
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${!featuredOnly
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => {
                    setFeaturedOnly(true);
                    event('filtro_usado', { categoria: 'Relevância', valor: '⭐ Destaques' });
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors flex items-center gap-1 ${featuredOnly
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                >
                  ⭐ Destaques
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>

            {/* Tipo de Projeto */}
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Tipo de Projeto
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setProjectType(type);
                      event('filtro_usado', { categoria: 'Tipo de Projeto', valor: type });
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${projectType === type
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>

            {/* Ecossistema */}
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Ecossistema/Linguagem
              </p>
              <div className="flex flex-wrap gap-2">
                {displayedEcosystems.map((eco) => (
                  <button
                    key={eco}
                    onClick={() => {
                      setEcosystem(eco);
                      event('filtro_usado', { categoria: 'Ecossistema', valor: eco });
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${ecosystem === eco
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                  >
                    {eco}
                  </button>
                ))}
                {ALL_ECOSYSTEMS.length > 6 && (
                  <button
                    onClick={() => setShowAllEcosystems(!showAllEcosystems)}
                    className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {showAllEcosystems ? 'Mostrar menos' : 'Mostrar mais'}
                  </button>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>

            {/* Área de Atuação */}
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Área de Atuação
              </p>
              <div className="flex flex-wrap gap-2">
                {displayedAreas.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setArea(a);
                      event('filtro_usado', { categoria: 'Área de Atuação', valor: a });
                    }}
                    className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${area === a
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
                      }`}
                  >
                    {a}
                  </button>
                ))}
                {ALL_AREAS.length > 6 && (
                  <button
                    onClick={() => setShowAllAreas(!showAllAreas)}
                    className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {showAllAreas ? 'Mostrar menos' : 'Mostrar mais'}
                  </button>
                )}
              </div>
            </div>

            {/* Desktop Clear Button */}
            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="hidden md:flex text-slate-500 hover:text-slate-900 dark:hover:text-white w-full mt-2"
              >
                <X className="w-4 h-4 mr-2" />
                Limpar filtros
              </Button>
            )}

            {/* Mobile Apply Button */}
            <Button
              className="md:hidden w-full mt-4"
              onClick={() => setIsMobileFiltersOpen(false)}
            >
              Aplicar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
