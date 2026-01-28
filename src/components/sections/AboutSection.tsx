import { MapPin, Cloud, Brain, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
                Sobre mim
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-8 rounded-full" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ola, sou Gabriel Falcao.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou Desenvolvedor Full Stack Junior e estudante de Sistemas de
                Informacao (5 semestre), atualmente em transicao estrategica
                para Cloud Architecture.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Atualmente, estou me especializando em Cloud Computing atraves
                da Escola da Nuvem, onde aprofundo meus conhecimentos em
                arquiteturas escalaveis, seguras e resilientes utilizando
                servicos AWS.
              </p>

              <h3 className="text-xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </span>
                Meu Diferencial Tecnico
              </h3>

              <div className="space-y-4 mb-8">
                {/* Cloud Focus */}
                <div className="glass-card-hover rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Foco em Nuvem</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Preparando-me para a certificacao AWS Solutions Architect - Associate, 
                        com foco em arquiteturas escalaveis, seguras e desacopladas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Neurodiversity */}
                <div className="glass-card-hover rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Neurodiversidade como Ativo</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Como autista diagnosticado, utilizo meu hiperfoco analitico e atencao 
                        rigorosa aos detalhes para garantir a integridade de sistemas complexos 
                        e otimizacao de processos em nuvem.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Agile Culture */}
                <div className="glass-card-hover rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Cultura Agil</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Certificado em Scrum Fundamentals (SFC), aplicando agilidade e 
                        organizacao em projetos de alto nivel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meu objetivo nao e apenas escrever codigo, mas projetar
                infraestruturas solidas e resilientes que sustentem o
                crescimento do negocio.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Brasil</span>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative lg:order-last order-first">
              <div className="relative">
                {/* Glow Effect Behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60" />
                
                {/* Main Image Container */}
                <div className="relative glass-card rounded-2xl p-2 overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-xl">
                    <img
                      src="/minhaFoto.jpg"
                      alt="Gabriel Falcao da Cruz - Desenvolvedor Full Stack e Cloud Architect"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full border border-primary/30 glow-cyan-sm">
                  <span className="text-sm font-medium text-primary">Cloud Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
