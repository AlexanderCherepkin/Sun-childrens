"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StrapiImage } from "@/types";

export interface ImageGalleryProps {
  images: StrapiImage[];
  labels?: string[];
  className?: string;
}

export function ImageGallery({ images, labels, className }: ImageGalleryProps) {
  const [active, setActive] = React.useState(0);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.url}
            alt={img.alternativeText || labels?.[idx] || `Фото ${idx + 1}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              active === idx ? "opacity-100" : "opacity-0"
            )}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={idx === 0}
            decoding={idx === 0 ? "auto" : "async"}
          />
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className={cn(
              "relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 transition",
              active === idx ? "border-primary" : "border-transparent hover:border-border"
            )}
          >
            <Image
              src={img.url}
              alt={img.alternativeText || labels?.[idx] || `Миниатюра ${idx + 1}`}
              fill
              className="object-cover"
              sizes="112px"
              decoding="async"
            />
          </button>
        ))}
      </div>

      {labels?.[active] && <p className="text-center text-sm text-muted">{labels[active]}</p>}
    </div>
  );
}
