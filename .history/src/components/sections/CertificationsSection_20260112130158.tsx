"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "../../constants/certifications";

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Certificações</h2>
          <p className="text-lg text-gray-600">
            Minhas qualificações profissionais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{cert.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                  {cert.examCode && (
                    <p className="text-xs text-gray-500 mb-3">Código: {cert.examCode}</p>
                  )}
                  <Badge
                    className={
                      cert.status === "Certificado"
                        ? "bg-green-600"
                        : "bg-orange-500"
                    }
                  >
                    {cert.status}
                  </Badge>
                  {cert.date && (
                    <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
