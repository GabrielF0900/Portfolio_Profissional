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
                Cloud-Native Developer & AWS Certified Solutions Architect –
                Associate focado em projetar e implementar arquiteturas
                resilientes, seguras e de alta disponibilidade. Integro o
                desenvolvimento Full Stack moderno com Managed Services da AWS
                para criar soluções Event-driven e escaláveis, garantindo
                continuidade de negócio e otimização de custos através das
                melhores práticas do Well-Architected Framework.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-8">
                Meu Diferencial Técnico:
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Arquitetura AWS Certificada
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Detentor das certificações AWS Certified Solutions Architect
                    – Associate (SAA-C03) e Cloud Practitioner (CLF-C02). Possuo
                    embasamento técnico para projetar soluções utilizando
                    serviços gerenciados, garantindo alta disponibilidade e
                    otimização de custos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Neurodiversidade como Ativo
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Como autista diagnosticado, utilizo meu hiperfoco analítico
                    e rigor técnico para garantir a integridade de sistemas
                    complexos. Minha atenção aos detalhes é um diferencial
                    direto na revisão de processos e na segurança de ambientes
                    em nuvem.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">Cultura Ágil</h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Certificado em Scrum Fundamentals (SFC™), aplico princípios
                    de agilidade e organização para que a entrega técnica esteja
                    sempre alinhada aos objetivos do negócio.
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Objetivo: Contribuir em projetos que exijam infraestruturas
                sólidas, escaláveis e seguras, focando na continuidade do
                negócio e na excelência técnica.
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
