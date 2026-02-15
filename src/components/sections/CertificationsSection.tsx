"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Info, Calendar, Building2 } from "lucide-react";
import { certifications, type Certification } from "../../constants/certifications";

export default function CertificationsSection() {
  const [activeTab, setActiveTab] = useState("Certificação");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredCertifications = certifications
    .filter((cert) => {
      if (activeTab === "all") return true;
      return cert.type === activeTab;
    })
    .sort((a, b) => {
      // Forçar AWS re/Start (id:16) em primeiro lugar quando necessário
      const isAReStart = a.id === 16;
      const isBReStart = b.id === 16;

      if (activeTab === "all") {
        // re/Start sempre em primeiro lugar no filtro 'Todos'
        if (isAReStart && !isBReStart) return -1;
        if (isBReStart && !isAReStart) return 1;

        // Em seguida, manter comportamento existente: Certificações primeiro
        if (a.type === "Certificação" && b.type !== "Certificação") return -1;
        if (a.type !== "Certificação" && b.type === "Certificação") return 1;
      }

      if (activeTab === "Certificado") {
        // re/Start em primeiro lugar no filtro 'Certificados'
        if (isAReStart && !isBReStart) return -1;
        if (isBReStart && !isAReStart) return 1;
      }

      return 0;
    });

  return (
    <section id="certificacoes" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Certificações/Certificados
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            Minhas qualificações profissionais
          </p>
        </div>

        <Tabs
          defaultValue="Certificação"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12">
            <TabsTrigger
              value="all"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="Certificação"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Certificações
            </TabsTrigger>
            <TabsTrigger
              value="Certificado"
              className="text-base text-slate-600 dark:text-slate-300 data-[state=active]:text-slate-900 dark:data-[state=active]:text-white"
            >
              Certificados
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="w-full">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {filteredCertifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="relative h-full flex flex-col overflow-visible border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Selo */}
                  <div className="absolute -top-2 -right-2 z-50">
                    <Badge className="px-2 py-0.5 text-xs font-semibold shadow-md bg-green-500 hover:bg-green-600 text-white">
                      {cert.type}
                    </Badge>
                  </div>

                  <CardContent className="p-0 flex-1 flex flex-col">
                    {/* Container da Imagem */}
                    <div className="aspect-square bg-gray-100 dark:bg-slate-800 flex items-center justify-center p-2">
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

                    {/* Conteúdo */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-semibold text-sm mb-2">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {cert.issuer}
                      </p>

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
                        <p className="text-xs text-gray-500 mt-2">
                          {cert.date}
                        </p>
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
                            Ver Certificado
                            <ExternalLink size={14} />
                          </a>
                        </Button>
                      )}

                      {cert.description && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 w-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                          onClick={() => setSelectedCert(cert)}
                        >
                          <Info size={14} className="mr-2" />
                          Mais Informações
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal de Mais Informações */}
      <Dialog
        open={!!selectedCert}
        onOpenChange={(open) => {
          if (!open) setSelectedCert(null);
        }}
      >
        {selectedCert && (
          <DialogContent className="max-w-lg p-5 gap-0">
            <div className="flex gap-4">
              {/* Coluna Esquerda: Imagem */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Coluna Direita: Conteúdo */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Badge Tipo */}
                <Badge
                  className={`w-fit mb-2 text-xs font-semibold px-2.5 py-0.5 ${
                    selectedCert.type === "Certificação"
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {selectedCert.type}
                </Badge>

                {/* Título */}
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {selectedCert.title}
                </h2>

                {/* Status */}
                <span
                  className={`inline-flex items-center w-fit px-2.5 py-0.5 rounded-full text-xs font-medium border mb-3 ${
                    selectedCert.status === "Certificado"
                      ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                      : selectedCert.status === "Próximo Objetivo"
                        ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                        : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                  }`}
                >
                  {selectedCert.status}
                </span>
              </div>
            </div>

            {/* Divisor */}
            <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />

            {/* Info: Emissor, Data, Código */}
            <div className="space-y-2 mb-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                  Emissor
                </p>
                <p className="text-sm text-slate-900 dark:text-white font-medium">
                  {selectedCert.issuer}
                </p>
              </div>

              {selectedCert.date && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                    Data de Emissão
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white font-medium">
                    {selectedCert.date}
                  </p>
                </div>
              )}

              {selectedCert.examCode && (
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                    Código do Exame
                  </p>
                  <p className="text-sm text-slate-900 dark:text-white font-mono font-bold">
                    {selectedCert.examCode}
                  </p>
                </div>
              )}
            </div>

            {/* Status Message */}
            {selectedCert.statusMessage && (
              <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-950/30 border-l-2 border-blue-500 rounded-r">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  {selectedCert.statusMessage}
                </p>
              </div>
            )}

            {/* Descrição */}
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-1">
                Sobre
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            {/* Botão Ver Certificado */}
            {selectedCert.credentialUrl && (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                asChild
              >
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Certificado
                  <ExternalLink size={14} />
                </a>
              </Button>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
