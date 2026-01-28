"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import { certifications } from "../../constants/certifications";

export default function CertificationsSection() {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Certificado":
        return {
          badge: "bg-green-500/10 text-green-400 border-green-500/30",
          glow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
        };
      case "Estudando":
        return {
          badge: "bg-primary/10 text-primary border-primary/30",
          glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
        };
      case "Proximo Objetivo":
        return {
          badge: "bg-accent/10 text-accent border-accent/30",
          glow: "group-hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
        };
      default:
        return {
          badge: "bg-muted text-muted-foreground border-border",
          glow: ""
        };
    }
  };

  return (
    <section id="certificacoes" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest text-primary font-medium">Conquistas</span>
              <Star className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-2 text-foreground">
              Constelacoes Conquistadas
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certificacoes que iluminam minha jornada profissional
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const styles = getStatusStyles(cert.status);
              
              return (
                <div 
                  key={cert.id} 
                  className={`group relative glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 ${styles.glow}`}
                >
                  {/* Constellation Lines Decoration */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative aspect-square overflow-hidden bg-secondary/50 flex items-center justify-center p-6">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </a>
                    ) : (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                    
                    {/* Overlay Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    
                    {cert.examCode && (
                      <p className="text-xs text-muted-foreground/70 mb-3 font-mono">
                        Codigo: {cert.examCode}
                      </p>
                    )}
                    
                    {cert.statusMessage && (
                      <p className="text-xs text-muted-foreground mb-4 italic leading-relaxed">
                        {cert.statusMessage}
                      </p>
                    )}
                    
                    {/* Status Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <Badge className={`${styles.badge} px-3 py-1`}>
                        {cert.status === "Proximo Objetivo" ? "Proximo Objetivo" : cert.status}
                      </Badge>
                      {cert.date && (
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      )}
                    </div>
                    
                    {/* Credential Link */}
                    {cert.credentialUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
                        asChild
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Ver Credencial
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
