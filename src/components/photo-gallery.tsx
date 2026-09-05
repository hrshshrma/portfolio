"use client";

import Image from "next/image";
import { useState } from "react";

import { PhotoLightbox } from "@/components/photo-lightbox";
import type { Photo } from "@/data/photography";

interface PhotoGalleryProps {
  photos: Photo[];
}

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCI+PHJlY3QgZmlsbD0iI2U0ZTdlZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjUwIi8+PC9zdmc+";

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  return (
    <>
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {photos.map((photo, index) => (
          <button
            type="button"
            key={photo.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg bg-secondary text-left"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading={index < 4 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="h-auto w-full transition duration-500 group-hover:brightness-90"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-16 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {photo.alt}
            </span>
          </button>
        ))}
      </div>

      <PhotoLightbox
        photo={selectedPhoto}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        onPrevious={() =>
          setSelectedIndex((index) =>
            index === null ? null : Math.max(0, index - 1)
          )
        }
        onNext={() =>
          setSelectedIndex((index) =>
            index === null ? null : Math.min(photos.length - 1, index + 1)
          )
        }
        hasPrevious={selectedIndex !== null && selectedIndex > 0}
        hasNext={
          selectedIndex !== null && selectedIndex < photos.length - 1
        }
      />
    </>
  );
}
