"use client";

interface MetricsDisplayProps {
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

export function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div>
      <h3 className="font-semibold mb-3 text-xs uppercase text-muted-foreground">
        Impacto & Métricas
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-2 sm:p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
          >
            <div className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
