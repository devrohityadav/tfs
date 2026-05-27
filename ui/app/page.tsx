import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PillarCarousel } from "@/components/pillar-carousel";

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

const gallery = [
  "/images/gallery1.webp",
  "/images/gallery2.webp",
  "/images/gallery3.webp",
  "/images/gallery4.webp",
  "/images/gallery5.webp",
  "/images/gallery6.webp",
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.webp"
            alt="The forests of Meghalaya"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55" />
        </div>
        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32 hero-content">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Meghalaya · Inaugural Cohort
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Welcome to <span className="italic text-primary">The Forest School</span>
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
              className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}
            >
              Apply now
            </Link>
            <Link
              href="/vision"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full px-6" })}
            >
              Explore the vision
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Invitation
          </div>
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            The Forest School offers an immersive, forest-based learning program that
            bridges the gap between modern education and indigenous wisdom. This is a
            gathering place for those ready to go beyond the sustainability discourse and
            cultivate a reciprocal, regenerative practice in a more-than-human world.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Our inaugural journey unfolds across the ancient, mist-shrouded landscapes of
            Meghalaya, where the living architecture of the Khasi people offers a physical
            blueprint for our shared future.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Why choose this course
            </div>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Seven pillars, one living curriculum.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Hover a card to read its essence, or click for the full story.
            </p>
          </div>
          <Link
            href="/program"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View the program →
          </Link>
        </div>
        <PillarCarousel pillars={pillars} />
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Field Notes
          </div>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Education within nature, not merely about it.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt="Forest School field imagery"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/apply.webp"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-28 text-center text-white">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Join the inaugural cohort.
          </h2>
          <p className="mt-5 text-white/80">
            A small, intentional group of students, artists, designers, researchers and
            practitioners co-learning in the forests of Pynursla.
          </p>
          <Link
            href="/apply"
            className={buttonVariants({ size: "lg", className: "mt-9 rounded-full px-6" })}
          >
            Begin your application
          </Link>
        </div>
      </section>
    </>
  );
}
