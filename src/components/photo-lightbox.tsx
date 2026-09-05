"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

import type { Photo } from "@/data/photography";

interface PhotoLightboxProps {
  photo: Photo | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function PhotoLightbox({
  photo,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: PhotoLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && hasPrevious) onPrevious();
      if (event.key === "ArrowRight" && hasNext) onNext();
    },
    [hasNext, hasPrevious, onNext, onPrevious]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm data-[state=closed]:opacity-0" />
        {photo && (
          <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <Dialog.Title className="sr-only">{photo.alt}</Dialog.Title>
            <Dialog.Description className="sr-only">
              {photo.caption ?? "Expanded photograph"}
            </Dialog.Description>

            <Dialog.Close asChild>
              <button
                className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white"
                aria-label="Close lightbox"
              >
                <X aria-hidden="true" />
              </button>
            </Dialog.Close>

            {hasPrevious && (
              <button
                type="button"
                onClick={onPrevious}
                className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white sm:left-6"
                aria-label="Previous photo"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
            )}

            {hasNext && (
              <button
                type="button"
                onClick={onNext}
                className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white/80 hover:text-white sm:right-6"
                aria-label="Next photo"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            )}

            <figure className="flex max-h-[92vh] max-w-[90vw] flex-col items-center">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="90vw"
                priority
                className="max-h-[78vh] w-auto max-w-full rounded-md object-contain"
              />
              {photo.caption && (
                <figcaption className="mt-4 max-w-xl text-center text-sm leading-6 text-white/75">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
