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
                Olá! Me chamo Gabriel, sou Desenvolvedor Full Stack com experiência prática na criação de aplicações completas usando React, Node.js, TypeScript e bancos de dados. Tenho foco em performance, estrutura de código e boas experiências para o usuário.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Busco desenvolver softwares sólidos, pensando no longo prazo e aplicando boas práticas que estudo constantemente, como arquitetura limpa e padrões de projeto. Tenho grande interesse por Cloud Computing e Inteligência Artificial, áreas que me motivam a evoluir e criar soluções escaláveis, eficientes e com impacto real.
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
