import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Rocket, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              ['--twinkle-duration' as string]: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center border border-primary/20">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 glow-cyan">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground">
              Pronto para decolar?
            </h2>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Estou sempre aberto a novos desafios e oportunidades interessantes</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan group transition-all duration-300"
                asChild
              >
                <a href="mailto:gabrielfalcaocruz123@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Entrar em Contato
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/gabrielfalcaodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
                asChild
              >
                <a
                  href="https://github.com/GabrielF0900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
