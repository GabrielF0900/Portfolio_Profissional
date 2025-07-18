import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Gabriel Falcão da Cruz</h3>
              <p className="text-sm">Desenvolvedor Full Stack</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.linkedin.com/in/gabrielfalcaodev/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/GabrielF0900" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-sm text-slate-400">© 2024 Gabriel Falcão da Cruz. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
