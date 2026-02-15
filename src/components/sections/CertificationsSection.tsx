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
          <DialogContent className="max-w-md p-5 gap-0">
            {/* Topo: Imagem + Info lado a lado */}
            <div className="flex gap-4">
              {/* Imagem compacta no canto direito superior */}
              <div className="order-2 flex-shrink-0 w-20 h-20 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1.5">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Titulo e meta */}
              <DialogHeader className="order-1 flex-1 space-y-0 text-left">
                <DialogTitle className="text-base font-bold leading-tight">
                  {selectedCert.title}
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="flex flex-col gap-0.5 pt-1.5">
                    <span className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <Building2 size={12} />
                      {selectedCert.issuer}
                    </span>
                    {selectedCert.date && (
                      <span className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <Calendar size={12} />
                        {selectedCert.date}
                      </span>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 pt-3 pb-2">
              <Badge className="bg-green-500 hover:bg-green-600 text-white text-[10px] px-2 py-0">
                {selectedCert.type}
              </Badge>
              <span
                className={`inline-flex items-center px-2 py-0 rounded-full text-[10px] font-medium border ${
                  selectedCert.status === "Certificado"
                    ? "border-green-600 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/50 dark:border-green-500"
                    : selectedCert.status === "Próximo Objetivo"
                      ? "border-blue-600 text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 dark:border-blue-500"
                      : "border-slate-400 dark:border-slate-500 text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-700"
                }`}
              >
                {selectedCert.status}
              </span>
              {selectedCert.examCode && (
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-auto">
                  {selectedCert.examCode}
                </span>
              )}
            </div>

            {/* Separador */}
            <div className="h-px bg-slate-200 dark:bg-slate-700" />

            {/* Status message se existir */}
            {selectedCert.statusMessage && (
              <p className="text-xs text-slate-600 dark:text-slate-400 italic border-l-2 border-slate-300 dark:border-slate-600 pl-2 mt-3">
                {selectedCert.statusMessage}
              </p>
            )}

            {/* Descrição */}
            <div className="pt-3">
              <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                Sobre
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            {/* Botão Ver Certificado */}
            {selectedCert.credentialUrl && (
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full text-xs h-8"
                asChild
              >
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver Certificado
                  <ExternalLink size={12} />
                </a>
              </Button>
            )}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
