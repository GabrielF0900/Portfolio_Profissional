"use client";

import { Project } from "@/types";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query"; // Ajuste o caminho se necessário
import ProjectModalMobile from "./ProjectModalMobile";
import ProjectModalDesktop from "./ProjectModalDesktop";
import { ProjectImageModal } from "@/components/projects-modal/ProjectImageModal";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectModal({ project, open, onOpenChange }: ProjectModalProps) {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (!project) return null;

  const modalProps = {
    project,
    open,
    onOpenChange,
    setImageModalOpen,
  };

  return (
    <>
      {isDesktop ? (
        <ProjectModalDesktop {...modalProps} />
      ) : (
        <ProjectModalMobile {...modalProps} />
      )}

      {/* O Modal de imagem continua aqui, pois ambos os layouts usam ele */}
      {project.image && (
        <ProjectImageModal
          imageUrl={project.image}
          imageAlt={project.title}
          open={imageModalOpen}
          onClose={() => setImageModalOpen(false)}
        />
      )}
    </>
  );
}