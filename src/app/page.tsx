"use client";

import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useState } from 'react';

const BLUR_FADE_DELAY = 0.04;

const images = [
  '/photography.jpg',
  '/tech.png',
  '/mind.jpeg',
  '/about.jpg',
  '/knowledge.jpg',
];

export default function Page() {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-4xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert">
            {DATA.description}
          </Markdown>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground mt-10 dark:prose-invert">
            {DATA.summary}
          </Markdown>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground mt-10 dark:prose-invert">
            {DATA.spare}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="relative">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 py-4 w-full">
              {["Photography", "Tech", "Mind", "About", "Knowledge"].map((item, index) => (
                <div 
                  key={item} 
                  className={cn(
                    "grain-effect",
                    "relative flex flex-col items-center justify-center overflow-hidden rounded-lg border",
                    "group",
                    index === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 h-[400px]" : "",
                    index === 1 || index === 2 ? "col-start-3 sm:col-start-3 h-[193px]" : "",
                    index === 3 ? "sm:col-start-1 h-[200px]" : "",
                    index === 4 ? "col-span-2 sm:col-span-2 sm:row-span-2 h-[200px] sm:h-[200px]" : "",
                  )}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={cn(
                      "absolute inset-0 bg-white z-10 transition-opacity duration-300",
                      imagesLoaded[index] ? "opacity-0" : "opacity-100"
                    )} />
                    <Image
                      src={images[index]}
                      alt={item}
                      fill
                      className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
                      priority={index === 0}
                      loading={index === 0 ? undefined : "eager"}
                      onLoadingComplete={() => handleImageLoad(index)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                  <span className="relative z-20 pointer-events-none whitespace-pre-wrap bg-white bg-clip-text text-center text-2xl sm:text-3xl font-bold tracking-tighter text-transparent leading-tight py-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
      <footer className="flex justify-center items-center">
        <p className="prose max-w-full text-pretty font-sans text-xs sm:text-xs text-muted-foreground mt-10 dark:prose-invert">
          Copyright © 2024 Harsh Sharma All Rights Reserved. 
          </p>
      </footer>
    </main>
  );
}