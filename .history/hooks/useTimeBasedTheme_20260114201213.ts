import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useTimeBasedTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    // Obter hora atual em Brasília (UTC-3)
    const now = new Date();
    const brasiliaTime = new Date(
      now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    );
    const hour = brasiliaTime.getHours();

    // Definir tema baseado na hora
    // Dia: 6h às 18h (light)
    // Noite: 18h às 6h (dark)
    const isDaytime = hour >= 6 && hour < 18;
    const newTheme = isDaytime ? "light" : "dark";

    // Se o tema atual não for o esperado, mudar
    if (theme === "system") {
      setTheme(newTheme);
    } else if (theme !== newTheme) {
      setTheme(newTheme);
    }

    // Atualizar tema a cada minuto para acompanhar mudanças
    const interval = setInterval(() => {
      const currentTime = new Date();
      const currentBrasiliaTime = new Date(
        currentTime.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
      );
      const currentHour = currentBrasiliaTime.getHours();
      const currentIsDaytime = currentHour >= 6 && currentHour < 18;
      const currentTheme = currentIsDaytime ? "light" : "dark";

      setTheme(currentTheme);
    }, 60000); // Verificar a cada minuto

    return () => clearInterval(interval);
  }, [theme, setTheme]);
}
