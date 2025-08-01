import { MapPin } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre mim</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de 3 anos de experiência em desenvolvimento web, especializo-me em criar aplicações modernas
                e escaláveis. Minha paixão está em transformar ideias complexas em soluções digitais elegantes e
                funcionais.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Trabalho com as tecnologias mais atuais do mercado e tenho experiência tanto em projetos individuais
                quanto em equipes multidisciplinares, sempre focando na qualidade do código e na experiência do
                usuário.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Brasil</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
