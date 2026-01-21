"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { certifications } from "../../constants/certifications";

export default function CertificationsSection() {
  return (
    <section id="certificacoes" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certificações</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Minhas qualificações profissionais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="relative">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="aspect-square overflow-hidden bg-gray-200 flex items-center justify-center p-2">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain"
                        />
                      </a>
                    ) : (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-sm mb-2">{cert.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{cert.issuer}</p>
                    {cert.examCode && (
                      <p className="text-xs text-gray-500 mb-3">
                        Código: {cert.examCode}
                      </p>
                    )}
                    {cert.statusMessage && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 italic">
                        {cert.statusMessage}
                      </p>
                    )}
                    <div className="mt-auto pt-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          cert.status === "Certificado"
                            ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                            : cert.status === "Próximo Objetivo"
                              ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                              : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                        }`}
                      >
                        {cert.status}
                      </span>
                    </div>
                    {cert.date && (
                      <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
                    )}
                    {cert.credentialUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full"
                        asChild
                      >
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Ver Certificação
                          <ExternalLink size={14} />
                        </a>
                      </Button>
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
