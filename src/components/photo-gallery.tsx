"use client";

import { useState } from "react";

import BlurFade from "@/components/magicui/blur-fade";
import { PhotoLightbox } from "@/components/photo-lightbox";
import type { Photo } from "@/data/photography";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: Photo[];
}

const BLUR_FADE_DELAY = 0.04;

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < photos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  if (photos.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No photos yet. Add photos to /public/photography/ and update the PHOTOS
        array in /src/data/photography.ts
      </p>
    );
  }

  return (
    <>
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <BlurFade
            key={photo.id}
            delay={BLUR_FADE_DELAY * (index + 3)}
            inView
            className={cn("photo-item", photo.landscape && "landscape")}
          >
            <div
              className={cn(
                "group cursor-pointer overflow-hidden rounded-lg",
                "transition-all duration-300 hover:shadow-lg"
              )}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <PhotoLightbox
        photo={selectedPhoto}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={selectedIndex !== null && selectedIndex > 0}
        hasNext={selectedIndex !== null && selectedIndex < photos.length - 1}
      />
    </>
  );
}
