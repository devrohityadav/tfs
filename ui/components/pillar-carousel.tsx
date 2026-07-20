"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

export type Pillar = {
  title: string;
  image: string;
  body: string;
};

export function PillarCarousel({ pillars }: { pillars: Pillar[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {pillars.map((p) => (
          <CarouselItem
            key={p.title}
            className="basis-full pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <Card className="group h-full gap-0 overflow-hidden p-0 transition-colors hover:border-primary/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-haspopup="false" className="-left-4 size-10 md:-left-6" />
      <CarouselNext aria-haspopup="false" className="-right-4 size-10 md:-right-6" />
    </Carousel>
  );
}
