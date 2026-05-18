import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    title: "Ecological Symbiosis",
    body: "Understanding interconnected life-systems through the living root structures of the Khasi hills.",
  },
  {
    title: "Regenerative Design",
    body: "Applying indigenous 'barefoot engineering' to contemporary practice and place-making.",
  },
  {
    title: "Sustainable Systems",
    body: "Agroforestry, foraging, survival skills and the traditional crafts of the land.",
  },
  {
    title: "Indigenous Wisdom",
    body: "Direct engagement with the guardians of the land — their arts, plant knowledge & storytelling.",
  },
  {
    title: "Relational Practice",
    body: "Shifting from extraction to deep reciprocity through listening and structured reflection.",
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
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
        <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32">
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
            Meghalaya · 2024 Cohort
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Welcome to <span className="italic text-primary">Forest School</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Learning to belong to the living Earth — an immersive, forest-based program
            bridging modern education with indigenous wisdom.
          </p>
          <blockquote className="mt-8 max-w-xl border-l-2 border-primary/60 pl-4 font-serif text-base italic text-foreground/90">
            &ldquo;We do not inherit the Earth. We learn to belong to it.&rdquo;
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}
            >
              Apply for Meghalaya 2024
            </Link>
            <Link
              href="/roots"
              className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full px-6" })}
            >
              Explore the Vision
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Mission
          </div>
          <p className="font-serif text-2xl leading-relaxed md:text-3xl">
            To cultivate a transformative learning ecosystem that bridges the gap between
            modern education and indigenous wisdom. By dismantling the industrial
            <span className="italic"> &lsquo;factory model&rsquo; </span>
            and honoring the
            <span className="italic"> &lsquo;language of place&rsquo;</span>, we foster
            ecological healing through immersive, forest-based learning — grounded in
            regenerative design, reciprocity, and relational balance with the living
            Earth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">
              Core Pillars
            </div>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Five immersions, one living curriculum.
            </h2>
          </div>
          <Link
            href="/program"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:block"
          >
            View the program →
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Card
              key={p.title}
              className="group relative overflow-hidden border-border/50 bg-card/60 p-7 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 font-mono text-xs text-primary/70">
                0{i + 1}
              </div>
              <h3 className="font-serif text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Card>
          ))}
          <Card className="flex flex-col justify-between overflow-hidden border-primary/30 bg-primary/5 p-7">
            <div>
              <div className="mb-6 font-mono text-xs text-primary/80">→</div>
              <h3 className="font-serif text-xl">Co-learn with us</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                5–20 day immersions in the village landscapes of Pynursla.
              </p>
            </div>
            <Link
              href="/program"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary"
            >
              See methodology →
            </Link>
          </Card>
        </div>
      </section>

      <section className="border-t border-border/40 bg-card/30">
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
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/40" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Join the Meghalaya 2024 cohort.
          </h2>
          <p className="mt-5 text-muted-foreground">
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
