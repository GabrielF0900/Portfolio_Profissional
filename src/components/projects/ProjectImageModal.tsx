"use client";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectImageModalProps {
  imageUrl: string;
  imageAlt: string;
  open: boolean;
  onClose: () => void;
}

export function ProjectImageModal({
  imageUrl,
  imageAlt,
  open,
  onClose,
}: ProjectImageModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] overflow-hidden p-4 flex flex-col bg-black border-0">
        
        {/* Adicionado para resolver o erro de acessibilidade do Radix */}
        <DialogTitle className="sr-only">Visualização da Imagem</DialogTitle>
        <DialogDescription className="sr-only">
          Visualização ampliada da imagem do projeto {imageAlt}
        </DialogDescription>

        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-white/10"
            title="Voltar para detalhes"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Button>
          <h3 className="text-white font-semibold">Visualização da Imagem</h3>
          <div className="w-10" />
        </div>

        <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}