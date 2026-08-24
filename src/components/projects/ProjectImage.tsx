"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProjectImage({ src, alt, className, priority = false }: ProjectImageProps) {
  const [source, setSource] = useState(src || "/placeholder.svg");

  useEffect(() => {
    setSource(src || "/placeholder.svg");
  }, [src]);

  return (
    <Image
      src={source}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
      className={className}
      onError={() => setSource("/placeholder.svg")}
    />
  );
}
