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
                Desenvolvedor Backend Java | Spring Boot | AWS Solutions Architect Associate (SAA-C03).
                Construo sistemas backend robustos, seguros e escaláveis com Java 21 e Spring Boot,
                aplicando meu embasamento em arquitetura AWS desde a primeira linha de código. Tenho
                também experiência prática em Node.js/TypeScript, usada pontualmente como stack de
                apoio em projetos anteriores.
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
                    Certificado AWS Solutions Architect – Associate (SAA-C03) e Cloud Practitioner (CLF-C02).
                    Uso esse embasamento em infraestrutura para garantir que sistemas backend sejam
                    robustos, seguros e de baixo custo desde o design inicial.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Atenção a Detalhe como Vantagem Competitiva
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Sou autista, e transformo isso em vantagem técnica direta: meu hiperfoco analítico
                    sustenta rigor na revisão de código, identificação de vulnerabilidades e integridade
                    de sistemas complexos — onde a maioria perde atenção no detalhe, eu ganho precisão.
                    Não escondo essa característica; ela é parte de como entrego resultado técnico consistente.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-base mb-2">
                    Cultura Ágil e Documentação
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Certificado em Scrum Fundamentals (SFC™). Aplico Kanban para organizar entregas e
                    valorizo documentação clara para facilitar manutenção e escalabilidade.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 mt-8">
                Objetivo Profissional
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Conseguir minha primeira posição como Desenvolvedor Backend Java Júnior, contribuindo
                com sistemas que automatizem processos e sustentem crescimento técnico de longo prazo.
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
