import { Button } from "@/components/ui/button";
import { Github, Linkedin, Clock } from "lucide-react";
import { getLastUpdateFormatted } from "../../constants/lastUpdate";

export default function Footer() {
  const lastUpdate = getLastUpdateFormatted();

  return (
    <footer className="py-12 bg-white dark:bg-slate-900 text-slate-700 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Seção de última atualização */}
          <div className="mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 flex items-center gap-4 hover:from-slate-200 hover:to-slate-100 dark:hover:from-slate-700 dark:hover:to-slate-800 transition-all duration-300">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
                <Clock className="relative w-6 h-6 text-blue-500 dark:text-blue-400 animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-slate-600 dark:text-white uppercase tracking-wider">
                  Última Atualização
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {lastUpdate}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                <span className="text-base text-slate-600 dark:text-white font-bold">
                  Ativo
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Gabriel Falcão da Cruz
              </h3>
              <p className="text-sm text-slate-600 dark:text-white font-bold">
                Desenvolvedor Full Stack
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/gabrielfalcaodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/GabrielF0900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-white hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
            <p className="text-sm text-slate-600 dark:text-white font-bold">
              © 2025 Gabriel Falcão da Cruz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
