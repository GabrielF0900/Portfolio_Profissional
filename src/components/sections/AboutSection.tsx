import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Sobre mim
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Olá, sou Gabriel Falcão.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Desenvolvedor Full Stack & Arquiteto AWS (SAA-C03) focado em
                transformar processos manuais de engenharia em fluxos digitais
                eficientes. Integro o desenvolvimento moderno em Node.js e React
                com serviços gerenciados da AWS para criar automações
                escaláveis, garantindo que o software impulsione a produtividade
                operacional e a excelência técnica através de arquiteturas
                Cloud-Native.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-8">
                Meu Diferencial Técnico
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Visão Cloud-First
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Certificado AWS Solutions Architect – Associate (SAA-C03) e
                    Cloud Practitioner (CLF-C02). Utilizo meu embasamento em
                    infraestrutura para garantir que aplicações Full Stack sejam
                    robustas, seguras e de baixo custo, aplicando as melhores
                    práticas desde a primeira linha de código.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Neurodiversidade como Ativo
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Como autista diagnosticado, direciono meu hiperfoco
                    analítico e rigor técnico para garantir a integridade de
                    sistemas complexos. Minha atenção aos detalhes é um
                    diferencial direto na revisão de código e na segurança de
                    ambientes em nuvem.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Cultura Ágil e Documentação
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Certificado em Scrum Fundamentals (SFC™), aplico princípios
                    de agilidade via Kanban para garantir entregas organizadas.
                    Valorizo a documentação clara e a eficiência operacional
                    para facilitar a manutenção e a escalabilidade das soluções.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8">
                Objetivo Profissional
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Contribuir no desenvolvimento de ferramentas que automatizem
                processos, otimizem fluxos de trabalho e garantam a excelência
                técnica na transformação digital.
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mt-8">
                <MapPin className="w-5 h-5" />
                <span>Brasil</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/minhaFoto.webp"
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
