import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre mim</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Olá, sou Gabriel Falcão.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou Desenvolvedor Full Stack Júnior e estudante de Sistemas de
                Informação (5º semestre), atualmente em transição estratégica
                para Cloud Architecture.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Atualmente, estou me especializando em Cloud Computing através
                da Escola da Nuvem, onde aprofundo meus conhecimentos em
                arquiteturas escaláveis, seguras e resilientes utilizando
                serviços AWS.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-8">
                Meu Diferencial Técnico:
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Foco em Nuvem
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Preparando-me para a certificação AWS Solutions Architect –
                    Associate, com foco em arquiteturas escaláveis, seguras e
                    desacopladas.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Neurodiversidade como Ativo
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Como autista diagnosticado, utilizo meu hiperfoco analítico
                    e atenção rigorosa aos detalhes para garantir a integridade
                    de sistemas complexos e otimização de processos em nuvem.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">Cultura Ágil</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Certificado em Scrum Fundamentals (SFC™), aplicando
                    agilidade e organização em projetos de alto nível.
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Meu objetivo não é apenas escrever código, mas projetar
                infraestruturas sólidas e resilientes que sustentem o
                crescimento do negócio.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mt-8">
                <MapPin className="w-5 h-5" />
                <span>Brasil</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/minhaFoto.jpg"
                  alt="Gabriel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
