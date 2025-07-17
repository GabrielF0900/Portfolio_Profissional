import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-8 opacity-90">
            Estou sempre aberto a novos desafios e oportunidades interessantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="mailto:gabriel@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Entrar em Contato
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
