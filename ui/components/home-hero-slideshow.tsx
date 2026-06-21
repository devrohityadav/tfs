"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/images/home-landing/01.webp",
  "/images/home-landing/02.webp",
  "/images/home-landing/03.webp",
  "/images/home-landing/04.webp",
  "/images/home-landing/05.webp",
  "/images/home-landing/06.webp",
  "/images/home-landing/07.webp",
  "/images/home-landing/08.webp",
  "/images/home-landing/09.webp",
];

export function HomeHeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {slides.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          quality={85}
          className="object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
    </div>
  );
}
