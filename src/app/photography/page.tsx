import BlurFade from "@/components/magicui/blur-fade";
import { PhotoGallery } from "@/components/photo-gallery";
import { PHOTOS } from "@/data/photography";

export const metadata = {
  title: "Photography",
  description: "A collection of photographs by Harsh Sharma",
};

const BLUR_FADE_DELAY = 0.04;

export default function PhotographyPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 py-20 sm:py-24 px-4 sm:px-8">
      <section id="photography" className="w-full max-w-screen-2xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 tracking-tight">
            photography
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-base text-muted-foreground mb-12">
            Moments captured through my lens.
          </p>
        </BlurFade>
        <PhotoGallery photos={PHOTOS} />
      </section>
    </main>
  );
}
