import Image from "next/image";
import Link from "next/link";
import { PillarCarousel } from "@/components/pillar-carousel";
import { HomeHeroSlideshow } from "@/components/home-hero-slideshow";

const INSTAGRAM_URL = "https://www.instagram.com/the.forest.school/";
const EMAIL = "hello@theforestschool.in";

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
        <HomeHeroSlideshow />
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 pt-32 hero-content">
          <h1 className="max-w-3xl font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl">
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
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The Invitation
          </div>
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            The Forest School offers an immersive, forest-based learning program that
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
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="mx-auto max-w-4xl px-6 py-28 text-center text-white">
          <div className="font-serif text-3xl md:text-4xl">The Forest School</div>
          <p className="mt-5 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
            We acknowledge and honour ancestral wisdom and traditional ecological knowledge
            that shapes and sustains our initiatives.
          </p>
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
            <Link href="/vision" className="hover:text-white transition-colors">Vision</Link>
            <Link href="/program" className="hover:text-white transition-colors">The Program</Link>
            <Link href="/team" className="hover:text-white transition-colors">Team</Link>
            <Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Hub</Link>
            <Link href="/preparation" className="hover:text-white transition-colors">Preparation</Link>
            <Link href="/apply" className="hover:text-white transition-colors">Apply</Link>
          </nav>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/70">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
