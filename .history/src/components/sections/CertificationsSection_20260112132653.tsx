"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "../../constants/certifications";

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certificações</h2>
          <p className="text-lg text-gray-600">
            Minhas qualificações profissionais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="relative">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-sm mb-2">{cert.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                    {cert.examCode && (
                      <p className="text-xs text-gray-500 mb-3">
                        Código: {cert.examCode}
                      </p>
                    )}
                    <div className="mt-auto pt-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          cert.status === "Certificado"
                            ? "border-green-600 text-green-600 bg-green-50"
                            : "border-gray-900 text-gray-900 bg-gray-100"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                    {cert.date && (
                      <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
