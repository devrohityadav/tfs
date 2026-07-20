import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { HomeHeroSlideshow } from "@/components/home-hero-slideshow";

const pillars = [
  {
    title: "A Living Systems Approach",
    image: "/images/pillars/living-systems.webp",
    body: "Adopt living-system thinking in your practice to design at the service of the regeneration of Earth's systems and communities.",
  },
  {
    title: "Indigenous Knowledges",
    image: "/images/pillars/indigenous-knowledges.webp",
    body: "Deeply rooted in the ancient, localized currents of Khasi wisdom, where the land itself acts as the primary text.",
  },
  {
    title: "Embodied Knowledge",
    image: "/images/pillars/embodied.webp",
    body: "Moving past the cognitive, Eurocentric models of mind — knowledge produced by embodied subjects, expressed through songs, dances, art and oral traditions. We learn by doing, creating, and participating.",
  },
  {
    title: "Co-learning & Co-creating",
    image: "/images/pillars/co-learning.webp",
    body: "We learn in horizontal, non-hierarchical exchanges, honouring diverse ways of knowing — from scientific observation to ancestral storytelling. We open ourselves to multiple distinct realities and rich worldviews.",
  },
  {
    title: "Relational Understanding",
    image: "/images/pillars/relational.webp",
    body: "Recognizing humans as integral parts of living systems and actively integrating a multi-species awareness into daily thought.",
  },
  {
    title: "Deep Reciprocity",
    image: "/images/pillars/reciprocity.webp",
    body: "We do not come to simply consume the forest's beauty; we offer our energy, respect, and labour back to the communities whose hands sustain it.",
  },
  {
    title: "Bioregionalism",
    image: "/images/pillars/bioregionalism.webp",
    body: "Our learning is anchored in the soil of the bioregion — focused on the natural, alive, and cultural features of a place defined by its pulsing watersheds and ecosystems, rather than the cold, straight lines of man-made borders.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <HomeHeroSlideshow />
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 pt-32 hero-content">
          <h1 className="max-w-3xl font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl">
            Welcome to <span className="italic text-primary">Ecologies Studio</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A regenerative learning experience rooted in nature &amp; indigenous knowledge.
          </p>
          <blockquote className="mt-8 max-w-xl border-l-2 border-primary/60 pl-4 font-serif text-base italic text-foreground/90">
            &ldquo;We do not inherit the Earth. We learn to belong to it.&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Apply now
            </Link>
            <Link
              href="/vision"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Explore the vision
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            Ecologies Studio offers an immersive, forest-based learning program that
            bridges the gap between modern education and indigenous wisdom. This is a
            gathering place for those ready to go beyond the sustainability discourse and
            cultivate a reciprocal, regenerative practice in a more-than-human world.
          </p>
          <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
            Our inaugural journey unfolds across the ancient, mist-shrouded landscapes of
            Meghalaya, where the living architecture of the Khasi people offers a physical
            blueprint for our shared future.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Why choose this course
            </h2>
          </div>
          <Link
            href="/program"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View the program →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <Card
              key={p.title}
              className="group gap-0 overflow-hidden p-0 transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
