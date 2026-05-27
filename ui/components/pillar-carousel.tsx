"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type Pillar = {
  title: string;
  image: string;
  body: string;
};

export function PillarCarousel({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState<Pillar | null>(null);

  return (
    <>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {pillars.map((p, i) => (
            <CarouselItem
              key={p.title}
              className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <button
                type="button"
                onClick={() => setActive(p)}
                className="group block w-full overflow-hidden rounded-2xl border border-border/60 bg-card text-left transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                    <span className="rounded-full bg-white/15 px-2 py-0.5 font-mono text-[11px] text-white backdrop-blur-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="font-serif text-lg leading-tight text-white">
                      {p.title}
                    </h3>
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-black/70 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="font-serif text-lg leading-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85 line-clamp-6">
                      {p.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-white/70">
                      Read more →
                    </span>
                  </div>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-haspopup="false"
          className="-left-4 size-10 md:-left-6"
        />
        <CarouselNext
          aria-haspopup="false"
          className="-right-4 size-10 md:-right-6"
        />
      </Carousel>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          {active && (
            <>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-8 py-7">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl md:text-3xl">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-base leading-relaxed">
                    {active.body}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
