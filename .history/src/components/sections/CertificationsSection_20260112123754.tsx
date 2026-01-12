"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { certifications } from "../../constants/certifications"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certificações</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Qualificações profissionais e cursos de especialização que complementam meu desenvolvimento contínuo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <CardContent className="flex flex-col flex-1 p-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cert.issuer}</p>
                  </div>

                  <div className="space-y-3">
                    <Badge
                      variant={cert.status === "Certificado" ? "default" : "outline"}
                      className={`w-full justify-center text-xs ${
                        cert.status === "Certificado"
                          ? "bg-green-600 hover:bg-green-700"
                          : "border-orange-400 text-orange-600"
                      }`}
                    >
                      {cert.status}
                    </Badge>

                    {cert.date && (
                      <p className="text-xs text-muted-foreground text-center">{cert.date}</p>
                    )}

                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs h-8"
                        asChild
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Credencial
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
