import Link from "next/link";
import { 
  ChevronDown, 
  Moon, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Mail, 
  FileDown,
  CircleDot
} from "lucide-react";
import CareerPulse from "@/components/career-pulse";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation Bar - Dark */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center gap-6">
            <Link 
              href="#" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Início
            </Link>
            <Link 
              href="#sobre" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="#experiencia" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Experiência
            </Link>
            <Link 
              href="#certificacoes" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Certificações
            </Link>
            <Link 
              href="#projetos" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Projetos
            </Link>
            <Link 
              href="#tecnologias" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Tecnologias
            </Link>
            <Link 
              href="#skills" 
              className="font-mono text-xs tracking-wide hover:text-gray-300 transition-colors"
            >
              Skills
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button 
              className="p-1.5 hover:bg-slate-800 rounded transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
            <button 
              className="p-1.5 hover:bg-slate-800 rounded transition-colors"
              aria-label="Toggle theme"
            >
              <Moon className="w-4 h-4" />
            </button>
            <Link 
              href="https://linkedin.com/in/gabriel-falcao-cruz" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-slate-800 rounded transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link 
              href="https://github.com/GabrielF0900" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:bg-slate-800 rounded transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - White Background */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Available Badge */}
        <div className="flex items-center gap-2 mb-8">
          <CircleDot className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-sm text-gray-500 font-sans">
            Disponível para novos projetos
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-gray-900 text-center max-w-3xl leading-tight text-balance mb-6">
          Gabriel Falcão da Cruz
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl leading-relaxed font-sans mb-10">
          Full Stack Developer | AWS Certified Solutions Architect (SAA-C03). 
          Atuo no desenvolvimento de aplicações web focadas em automação e eficiência operacional. 
          Unindo stacks modernas e nuvem, foco na digitalização de processos manuais e criação 
          de fluxos inteligentes, sempre orientado por escalabilidade e inovação técnica.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button - Ver Projetos */}
          <Link 
            href="#projetos"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-sans text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary Button - Entrar em Contato */}
          <Link 
            href="mailto:gabrielfalcaocontato@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-sans text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Entrar em Contato
            <Mail className="w-4 h-4" />
          </Link>

          {/* Secondary Button - Baixar CV */}
          <Link 
            href="/CV_GabrielFalcaoDaCruz.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-sans text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Baixar CV
            <FileDown className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Bottom Status Bar */}
      <footer className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-start gap-4">
          <Link 
            href="https://linkedin.com/in/gabriel-falcao-cruz" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="https://github.com/GabrielF0900" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </footer>

      {/* Career Pulse Component */}
      <CareerPulse />
    </div>
  );
}
