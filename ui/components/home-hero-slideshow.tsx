import Image from "next/image";

export function HomeHeroSlideshow() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/home-landing/01.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
    </div>
  );
}
